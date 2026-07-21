"use client";

import React from 'react';

export default function PortfolioView() {
  return (
    <section className="py-20 bg-neutral-950 text-white border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight mb-2">User Portfolio</h2>
          <p className="text-sm text-neutral-400">Track your active tax lien certificates, yields, and active lending positions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-neutral-900/60 border border-neutral-800 p-6 rounded-xl">
            <span className="text-xs font-mono text-neutral-400 block mb-2">Total Supplied Liquidity</span>
            <span className="text-2xl font-bold font-mono">$12,450.00</span>
          </div>
          <div className="bg-neutral-900/60 border border-neutral-800 p-6 rounded-xl">
            <span className="text-xs font-mono text-neutral-400 block mb-2">Active Tax Lien Bids</span>
            <span className="text-2xl font-bold font-mono">2 Assets</span>
          </div>
          <div className="bg-neutral-900/60 border border-neutral-800 p-6 rounded-xl">
            <span className="text-xs font-mono text-neutral-400 block mb-2">Accrued Yield (APR)</span>
            <span className="text-2xl font-bold font-mono text-white">$1,480.50</span>
          </div>
        </div>
      </div>
    </section>
  );
}