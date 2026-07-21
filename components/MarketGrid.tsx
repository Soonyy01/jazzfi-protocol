"use client";

import React from 'react';

export interface MarketItem {
  id: string;
  property: string;
  apr: string;
  tvl: string;
}

const MOCK_MARKETS: MarketItem[] = [
  { id: "1", property: "Commercial Plaza Lien #402", apr: "14.5%", tvl: "$500,000" },
  { id: "2", property: "Residential Estate Lien #88", apr: "12.8%", tvl: "$220,000" },
  { id: "3", property: "Industrial Warehouse Lien #9", apr: "16.2%", tvl: "$1,100,000" },
  { id: "4", property: "Downtown Retail Trust #12", apr: "15.0%", tvl: "$840,000" },
];

interface MarketGridProps {
  onSelectMarket: (market: MarketItem) => void;
}

export default function MarketGrid({ onSelectMarket }: MarketGridProps) {
  const infiniteMarkets = [...MOCK_MARKETS, ...MOCK_MARKETS, ...MOCK_MARKETS];

  return (
    <section className="py-20 bg-neutral-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-3xl font-bold tracking-tight text-white">Live Auction Pools</h2>
            <span className="text-[10px] font-mono bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded border border-amber-500/20">
              DEMO
            </span>
          </div>
          <p className="text-sm text-white">Browse verified institutional tax lien certificates and high-yield properties.</p>
        </div>
        <div className="text-xs font-mono text-lime-400 bg-lime-500/10 px-3 py-1.5 rounded-lg border border-lime-500/20">
          ● Robinhood Chain Mainnet Active
        </div>
      </div>

      <div className="relative w-full overflow-hidden py-4 flex">
        <div className="flex space-x-6 animate-marquee flex-shrink-0">
          {infiniteMarkets.map((market, index) => (
            <div 
              key={`${market.id}-${index}`}
              className="w-80 flex-shrink-0 bg-neutral-900 border border-neutral-800 p-6 rounded-2xl hover:border-lime-500/50 transition-all shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-mono text-lime-400 bg-lime-500/10 px-2 py-1 rounded">Active Lien</span>
                  <span className="text-xs font-mono text-white">ID #{market.id}</span>
                </div>
                <h3 className="text-base font-semibold mb-3 truncate text-white">{market.property}</h3>
                <div className="space-y-2 mb-6 font-mono text-xs">
                  <div className="flex justify-between text-white">
                    <span>Est. APR</span>
                    <span className="text-lime-400 font-bold">{market.apr}</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span>Pool TVL</span>
                    <span className="text-white">{market.tvl}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => onSelectMarket(market)}
                className="w-full py-2.5 bg-white text-neutral-950 hover:bg-neutral-200 text-xs font-semibold rounded-xl transition-all"
              >
                Inspect / Bid & Borrow (Demo)
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}