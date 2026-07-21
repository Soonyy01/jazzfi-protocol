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

      {/* Bagian Footer Bawah dengan Latar Putih Full dari Ujung ke Ujung */}
      <div className="w-full bg-white text-neutral-950 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-10 items-start">
          
          {/* Sisi Kiri: Area Logo JazzFi (Tetap sejajar & rapi di Mobile) */}
          <div className="flex items-center space-x-3 w-full lg:w-auto justify-start flex-shrink-0">
            <svg className="w-8 h-8 rounded flex-shrink-0 shadow-sm" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="black"/>
              <rect x="6" y="6" width="88" height="88" fill="#CCFF00"/>
              <rect x="42" y="16" width="16" height="16" fill="black"/>
              <rect x="22" y="38" width="12" height="12" fill="black"/>
              <rect x="37" y="38" width="12" height="12" fill="black"/>
              <rect x="52" y="38" width="12" height="12" fill="black"/>
              <rect x="67" y="38" width="12" height="12" fill="black"/>
              <rect x="22" y="58" width="12" height="12" fill="black"/>
              <rect x="44" y="58" width="12" height="12" fill="black"/>
              <rect x="67" y="58" width="12" height="12" fill="black"/>
              <rect x="44" y="76" width="12" height="18" fill="black"/>
            </svg>
            <span className="font-mono font-black text-xl tracking-wider text-black">JAZZFI</span>
          </div>

          {/* Sisi Kanan: Kontainer Dokumen Teknis */}
          <div className="flex flex-col gap-6 w-full font-mono text-xs sm:text-sm">
  
            {/* Section Whitepaper */}
            <div id="whitepaper" className="p-5 sm:p-6 bg-black border border-lime-500/40 text-white/90 text-left rounded-xl space-y-3 shadow-md">
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
            <div id="about" className="p-5 sm:p-6 bg-black border border-lime-500/40 text-white/90 text-left rounded-xl space-y-3 shadow-md">
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
