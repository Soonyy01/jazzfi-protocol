"use client";

import React from 'react';

export default function DocsSection() {
  return (
    <section id="docs" className="py-20 bg-neutral-950 text-white border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Docs */}
        <div className="mb-12">
          <span className="text-[10px] font-mono text-lime-400 bg-lime-500/10 px-2.5 py-1 rounded border border-lime-500/20 mb-3 inline-block">
            DOCUMENTATION & GUIDE
          </span>
          <h2 className="text-3xl font-bold tracking-tight mb-2">Protocol Architecture</h2>
          <p className="text-sm text-neutral-400 font-mono">Comprehensive documentation for the JazzFi institutional RWA ecosystem.</p>
        </div>

        {/* Grid Panduan */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-2xl">
            <span className="text-xs font-mono text-lime-400">01. RWA LIENS</span>
            <h3 className="text-base font-semibold mt-2 mb-2">Tax Lien Certificates</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Every property certificate is verified on-chain, providing legally backed yields and secure asset backing.
            </p>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-2xl">
            <span className="text-xs font-mono text-lime-400">02. POOL AUCTIONS</span>
            <h3 className="text-base font-semibold mt-2 mb-2">Live Bidding Engine</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Participate in high-yield institutional pool auctions with automated collateralization rules.
            </p>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-2xl">
            <span className="text-xs font-mono text-lime-400">03. BORROW / LEND</span>
            <h3 className="text-base font-semibold mt-2 mb-2">Liquidity Provision</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Unlock liquidity by leveraging your tax lien tokens or earn passive APR by supplying assets.
            </p>
          </div>

          <div className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-2xl">
            <span className="text-xs font-mono text-lime-400">04. MAINNET DEMO</span>
            <h3 className="text-base font-semibold mt-2 mb-2">Network Parameters</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              All interactions take place on the Robinhood Chain Mainnet demo environment with simulated tracking.
            </p>
          </div>
        </div>

      </div>

      {/* Bagian Footer Bawah - Latar Putih Full */}
      <div className="w-full bg-white text-neutral-950 py-12 mt-12 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8 items-start justify-between">
          
          {/* LOGO X & NAMA BRAND JAZZFI (Sejajar rapi, tidak pecah di HP) */}
          <div className="flex items-center space-x-3 w-full md:w-auto justify-start flex-shrink-0">
            {/* Minimalist X Logo */}
            <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://w3.org">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="black"/>
            </svg>
            <span className="font-mono font-black text-xl tracking-wider text-black">JAZZFI</span>
          </div>

          {/* KONTEN CHART & WHITEPAPER (Lebar penuh & rapi di HP) */}
          <div className="flex flex-col gap-6 w-full md:max-w-4xl font-mono text-xs sm:text-sm">
  
            {/* Section Whitepaper */}
            <div id="whitepaper" className="p-5 sm:p-6 bg-black border border-lime-500/40 text-white/90 text-left rounded-xl space-y-3 shadow-md w-full overflow-hidden">
                <h3 className="text-lime-400 font-bold text-sm tracking-wide">// WHITEPAPER: JAZZFI PROTOCOL</h3>
                <p className="text-gray-300 leading-relaxed">
                    <strong>1. Abstract:</strong> JazzFi is an advanced decentralized finance and liquidity protocol built on Robinhood Chain, engineered to eliminate market noise, enable friction-free lending/borrowing, and deliver real-time smart money analytics with sub-second execution.
                </p>
                <p className="text-gray-300 leading-relaxed">
                    <strong>2. Core Architecture:</strong> Includes dynamic liquidity provision engines for passive yield generation, integrated smart money telemetry, and optimized execution on Robinhood Chain infrastructure.
                </p>
                <p className="text-gray-300 leading-relaxed">
                    <strong>3. Governance:</strong> Decoupled risk management protocols combined with community-driven parameter voting.
                </p>
            </div>

            {/* Section About */}
            <div id="about" className="p-5 sm:p-6 bg-black border border-lime-500/40 text-white/90 text-left rounded-xl space-y-3 shadow-md w-full overflow-hidden">
                <h3 className="text-lime-400 font-bold text-sm tracking-wide">// ABOUT JAZZFI</h3>
                <p className="text-gray-300 leading-relaxed">
                    JazzFi is the next-generation decentralized liquidity protocol operating on Robinhood Chain. Designed with a high-visibility terminal aesthetic, JazzFi bridges high-speed on-chain analytics with decentralized borrowing, lending, and liquidity provision—delivering a seamless, professional-grade experience for modern Web3 capital movers.
                </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
