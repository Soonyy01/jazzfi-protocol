"use client";

import React from 'react';

interface HeroSectionProps {
  onOpenApp: () => void;
}

export default function HeroSection({ onOpenApp }: HeroSectionProps) {
  return (
    <section className="relative pt-24 pb-20 bg-neutral-950 text-white overflow-hidden border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center space-x-2 bg-neutral-900 border border-neutral-800 px-3 py-1 rounded-full text-xs font-mono text-neutral-400 mb-6">
          <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></span>
          <span>Robinhood Chain Mainnet</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight max-w-4xl mx-auto mb-6">
          Onchain <span className="text-lime-400">Tax Lien</span> Markets
        </h1>

        <p className="text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto mb-6">
          Property tax-lien backed yields on Robinhood Chain.
        </p>

        <p className="text-xs font-mono text-neutral-500 max-w-xl mx-auto mb-10 italic">
          "The Art of Structured Rhythm onchain, Precision in Harmony, Complex Yield, Clean Execution, All in Onchain."
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenApp}
            className="w-full sm:w-auto px-8 py-3.5 bg-white text-neutral-950 font-semibold rounded-xl hover:bg-neutral-200 transition-all text-sm shadow-lg"
          >
            Launch App
          </button>
        </div>

      </div>
    </section>
  );
}