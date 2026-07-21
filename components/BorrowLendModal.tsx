"use client";

import React, { useState } from 'react';

interface BorrowLendModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BorrowLendModal({ isOpen, onClose }: BorrowLendModalProps) {
  const [activeTab, setActiveTab] = useState<'lend' | 'borrow'>('lend');
  const [amount, setAmount] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="bg-neutral-900 border border-neutral-800 w-full max-w-md p-6 rounded-2xl text-white">
        
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">Liquidity Pool / Borrow</h3>
          <button onClick={onClose} className="text-neutral-400 hover:text-white text-sm font-mono">✕</button>
        </div>

        <div className="flex bg-neutral-950 p-1 rounded-xl mb-6 border border-neutral-800">
          <button
            onClick={() => setActiveTab('lend')}
            className={`flex-1 py-2 text-xs font-medium rounded-lg transition-all ${activeTab === 'lend' ? 'bg-neutral-800 text-white' : 'text-neutral-400'}`}
          >
            Supply Liquidity (Lend)
          </button>
          <button
            onClick={() => setActiveTab('borrow')}
            className={`flex-1 py-2 text-xs font-medium rounded-lg transition-all ${activeTab === 'borrow' ? 'bg-neutral-800 text-white' : 'text-neutral-400'}`}
          >
            Borrow against Tax Lien
          </button>
        </div>

        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-xs font-mono text-neutral-400 mb-2">Amount (USDG / ETH)</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-emerald-500"
            />
          </div>
          <div className="bg-neutral-950/50 p-3 rounded-xl border border-neutral-800 text-xs font-mono text-neutral-400 space-y-1">
            <div className="flex justify-between">
              <span>Estimated APY:</span>
              <span className="text-emerald-400">14.5%</span>
            </div>
            <div className="flex justify-between">
              <span>Protocol Fee:</span>
              <span>0.1%</span>
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            alert(`Successfully submitted ${activeTab} transaction on Robinhood Chain Testnet!`);
            onClose();
          }}
          className="w-full py-3 bg-white hover:bg-neutral-200 text-neutral-950 font-semibold rounded-xl text-xs transition-all"
        >
          Confirm Transaction
        </button>

      </div>
    </div>
  );
}