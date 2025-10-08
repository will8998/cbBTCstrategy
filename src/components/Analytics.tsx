"use client";

import { useQuery } from "@tanstack/react-query";

type AnalyticsData = {
  btcUsd?: number;
  cbbtcUsd?: number;
  baseEthVol24hUsd?: number;
  updatedAt: number;
};

type DexToken = { symbol?: string };
type DexVolume = { h24?: number | string };
type DexPair = { priceUsd?: string; baseToken?: DexToken; quoteToken?: DexToken; volume?: DexVolume };
type DexSearchResponse = { pairs?: DexPair[] };

async function fetchAnalytics(): Promise<AnalyticsData> {
  // Public endpoints with generous rate limits
  // - BTC USD via CoinGecko Simple Price
  // - cbBTC price via Dexscreener token pair search on Base
  // - Base ETH 24h volume via Dexscreener chain summary
  const [btc, cbbtc, baseSummary] = await Promise.allSettled([
    fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd").then((r) => r.json() as Promise<Record<string, { usd: number }>>),
    // Dexscreener cbBTC on Base (address may vary by deployment; using symbol search fallback)
    fetch("https://api.dexscreener.com/latest/dex/search?q=cbbtc%20base").then((r) => r.json() as Promise<DexSearchResponse>),
    fetch("https://api.dexscreener.com/latest/dex/chains/base").then((r) => r.json() as Promise<DexSearchResponse>),
  ]);

  const res: AnalyticsData = { updatedAt: Date.now() };

  if (btc.status === "fulfilled" && btc.value?.bitcoin?.usd) {
    res.btcUsd = Number(btc.value.bitcoin.usd);
  }

  if (cbbtc.status === "fulfilled" && Array.isArray((cbbtc.value as DexSearchResponse)?.pairs)) {
    // Pick the first pair with a valid priceUsd
    const list = (cbbtc.value as DexSearchResponse).pairs as DexPair[];
    const pair = list.find((p) => (p?.priceUsd ?? null) && /cbbtc/i.test(p?.baseToken?.symbol || ""));
    if (pair?.priceUsd) res.cbbtcUsd = Number(pair.priceUsd);
  }

  if (baseSummary.status === "fulfilled" && (baseSummary.value as DexSearchResponse)?.pairs) {
    // Sum 24h volume USD for ETH quote pairs as a proxy for Base ETH volume
    const pairs = ((baseSummary.value as DexSearchResponse).pairs || []) as DexPair[];
    const vol = pairs
      .filter((p) => /eth/i.test(p?.quoteToken?.symbol || ""))
      .reduce((acc: number, p: DexPair) => acc + (Number(p?.volume?.h24) || 0), 0);
    if (Number.isFinite(vol)) res.baseEthVol24hUsd = vol;
  }

  return res;
}

export default function Analytics() {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["analytics"],
    queryFn: fetchAnalytics,
    refetchInterval: 60_000, // 1 min polling
  });

  const fmt = (n?: number, opts: Intl.NumberFormatOptions = {}) =>
    n == null ? "--" : new Intl.NumberFormat("en-US", opts).format(n);

  return (
    <section className="w-full bg-black text-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 py-12 grid gap-10 md:grid-cols-4">
        <div>
          <div className="text-white/70 text-sm">BTC Price</div>
          <div className="text-3xl font-semibold mt-1">${fmt(data?.btcUsd, { maximumFractionDigits: 0 })}</div>
        </div>
        <div>
          <div className="text-white/70 text-sm">cbBTC Price</div>
          <div className="text-3xl font-semibold mt-1">${fmt(data?.cbbtcUsd, { maximumFractionDigits: 4 })}</div>
        </div>
        <div>
          <div className="text-white/70 text-sm">Base ETH Vol (24h)</div>
          <div className="text-3xl font-semibold mt-1">${fmt(data?.baseEthVol24hUsd, { maximumFractionDigits: 0 })}</div>
        </div>
        <div className="self-end">
          <button onClick={() => refetch()} className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 text-sm">Refresh</button>
          <div className="text-xs text-white/50 mt-2">{isLoading ? "Updating..." : isError ? "Error fetching data" : `Updated ${new Date(data?.updatedAt || Date.now()).toLocaleTimeString()}`}</div>
        </div>
      </div>
    </section>
  );
}


