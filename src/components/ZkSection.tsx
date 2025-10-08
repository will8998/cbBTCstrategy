"use client";

export function ZkSection() {
  return (
    <section className="app-container my-10">
      <div className="zk-section rounded-xl">
        <div className="p-3 text-xs text-white/70">HOW IT WORKS</div>
        <div className="zk-grid">
          <div className="zk-panel col-span-2">
            <div className="zk-panel-header">1 · FEES POOL</div>
            <div className="zk-rows">10% of each trade of <b>$cbBTC</b> is taken as a fee and stored in the protocol (minus 2% rake).</div>
          </div>
          <div className="zk-panel col-span-2">
            <div className="zk-panel-header">2 · AUTO-BUY (cbBTC)</div>
            <div className="zk-rows">When there’s enough fees in the pool, the machine automatically buys <b>cbBTC</b>.</div>
          </div>
          <div className="zk-panel col-span-2">
            <div className="zk-panel-header">3 · TARGET 1.1× & RISK</div>
            <div className="zk-rows">The position is listed for 1.1× entry. Risk controls manage exposure.</div>
          </div>
          <div className="zk-panel col-span-2">
            <div className="zk-panel-header">4 · SELL QUEUE</div>
            <div className="zk-rows">When the target hits, all received ETH is used to buy back and <b>burn $cbBTC</b>, reducing supply.</div>
          </div>
          <div className="zk-panel col-span-4">
            <div className="zk-panel-header">PROCESS</div>
            <div className="zk-rows">
              <span>collecting fees → auto-buying cbBTC → listing at 1.1× → selling → buyback + burn → supply goes down · </span>
              <span>collecting fees → auto-buying cbBTC → listing at 1.1× → selling → buyback + burn → supply goes down · </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


