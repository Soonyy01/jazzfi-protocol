"use client";

import React, { useState } from 'react';

export default function FaucetSection() {
  const [claiming, setClaiming] = useState(false);

  const handleClaim = () => {
    setClaiming(true);
    setTimeout(() => {
      alert("Successfully claimed USDG and test tokens on Robinhood Chain!");
      setClaiming(false);
    }, 1500);
  };

  return (
    <section className="py-20 bg-neutral-950 text-white border-t border-neutral-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-neutral-900/60 border border-neutral-800 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold mb-3">Testnet Faucet</h2>
          <p className="text-sm text-neutral-400 max-w-lg mx-auto mb-6">
            Claim USDG Demo to interact and bid on property tax-lien markets.
          </p>
          <button
            onClick={handleClaim}
            disabled={claiming}
            className="px-6 py-3 bg-white hover:bg-neutral-200 text-neutral-950 font-semibold rounded-xl text-xs transition-all disabled:opacity-50"
          >
            {claiming ? "Claiming..." : "Claim 1,000 USDG"}
          </button>
        </div>
      </div>
    </section>
  );
}