"use client";

import React from 'react';

export default function AnalyticsView() {
  return (
    <section className="py-20 bg-neutral-950 text-white border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Protocol Analytics</h2>
          <p className="text-sm text-neutral-400">Global metrics and volume statistics across Robinhood Chain.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-neutral-900/60 border border-neutral-800 p-6 rounded-xl font-mono">
            <span className="text-xs text-neutral-400 block mb-1">Total Value Locked (TVL)</span>
            <span className="text-xl font-bold text-white">$1,820,400</span>
          </div>
          <div className="bg-neutral-900/60 border border-neutral-800 p-6 rounded-xl font-mono">
            <span className="text-xs text-neutral-400 block mb-1">24h Volume</span>
            <span className="text-xl font-bold text-white">$345,100</span>
          </div>
          <div className="bg-neutral-900/60 border border-neutral-800 p-6 rounded-xl font-mono">
            <span className="text-xs text-neutral-400 block mb-1">Average Yield (APR)</span>
            <span className="text-xl font-bold text-white">14.5%</span>
          </div>
          <div className="bg-neutral-900/60 border border-neutral-800 p-6 rounded-xl font-mono">
            <span className="text-xs text-neutral-400 block mb-1">Active Properties</span>
            <span className="text-xl font-bold text-white">48 Units</span>
          </div>
        </div>
      </div>
    </section>
  );
}