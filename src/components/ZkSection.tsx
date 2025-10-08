"use client";

export function ZkSection() {
  return (
    <section id="story" className="app-container py-10 md:py-14">
      <div className="zk-section rounded-xl overflow-hidden">
        <div className="zk-grid">
          {/* How it works (full-width) */}
          <div className="zk-panel col-span-4">
            <div className="zk-panel-header">HOW IT WORKS</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="card p-4 h-full">
                <div className="inline-flex items-center text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 mb-2">1st</div>
                <p className="text-white/80 text-sm leading-6">
                  10% of each trade of <b>$VIRTUAL</b> is taken as a fee and stored in the protocol (minus 2% rake).
                </p>
              </div>
              <div className="card p-4 h-full">
                <div className="inline-flex items-center text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 mb-2">2nd</div>
                <p className="text-white/80 text-sm leading-6">
                  When there’s enough fees in the pool, the machine automatically buys <b>VIRTUAL</b>.
                </p>
              </div>
              <div className="card p-4 h-full">
                <div className="inline-flex items-center text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 mb-2">3rd</div>
                <p className="text-white/80 text-sm leading-6">
                  The position is listed for <b>1.2×</b> the entry price (a +20% target) using on-chain liquidity.
                </p>
              </div>
              <div className="card p-4 h-full">
                <div className="inline-flex items-center text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 mb-2">4th</div>
                <p className="text-white/80 text-sm leading-6">
                  When the target hits, all received ETH is used to buy back and <b>burn $VIRTUAL</b>, reducing supply.
                </p>
              </div>
            </div>
          </div>
          {/* 1) Fees Pool */}
          <div className="zk-panel">
            <div className="zk-panel-header">1 · FEES POOL</div>
            <div className="zk-matrix" />
            <div className="zk-matrix mt-3" />
          </div>

          {/* 2) Auto-Buy */}
          <div className="zk-panel">
            <div className="zk-panel-header">2 · AUTO-BUY (VIRTUAL)</div>
            <div className="zk-card zk-card--console">
              <div className="zk-rows" />
              <div className="zk-rows" />
              <div className="zk-rows" />
              <div className="zk-scan" />
            </div>
          </div>

          {/* 3) Target & Risk */}
          <div className="zk-panel">
            <div className="zk-panel-header">3 · TARGET 1.2× & RISK</div>
            <div className="zk-grid-mini">
              <div className="zk-chip" />
              <div className="zk-chip" />
              <div className="zk-chip" />
              <div className="zk-chip" />
            </div>
            <div className="zk-noise mt-3" />
          </div>

          {/* 4) Sell Queue */}
          <div className="zk-panel">
            <div className="zk-panel-header">4 · SELL QUEUE</div>
            <div className="zk-queue" />
          </div>

          {/* 5) Positions */}
          <div className="zk-panel col-span-2">
            <div className="zk-panel-header">5 · POSITIONS (OPEN → FILLED)</div>
            <div className="zk-matrix h-28" />
            <div className="zk-matrix h-28 mt-3" />
          </div>

          {/* 6) Burner */}
          <div className="zk-panel col-span-2">
            <div className="zk-panel-header">6 · BURNER (BUYBACK + BURN)</div>
            <div className="zk-card zk-card--bars">
              <div className="zk-bars" />
            </div>
          </div>
        </div>

        {/* Bottom ticker */}
        <div className="zk-ticker">
          <div className="zk-ticker-track">
            <span>collecting fees → auto-buying VIRTUAL → listing at 1.2× → selling → buyback + burn → supply goes down · </span>
            <span>collecting fees → auto-buying VIRTUAL → listing at 1.2× → selling → buyback + burn → supply goes down · </span>
          </div>
        </div>
      </div>
    </section>
  );
}


