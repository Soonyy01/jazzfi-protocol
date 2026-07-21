"use client";

import React, { useState } from 'react';
import PrivyModal from './PrivyModal';

interface NavbarProps {
  walletAddress: string | null;
  onConnectWallet: (address: string) => void;
  onOpenActivity: () => void;
}

export default function Navbar({ walletAddress, onConnectWallet, onOpenActivity }: NavbarProps) {
  const [isPrivyOpen, setIsPrivyOpen] = useState(false);

  const handleSelectMethod = (method: string) => {
    const mockAddress = method === "Google" ? "user@gmail.com" : "0x71C...38f9";
    onConnectWallet(mockAddress);
    setIsPrivyOpen(false);
  };

  return (
    <>
      {/* Navbar warna putih dari ujung ke ujung */}
      <nav className="border-b border-neutral-200 bg-white sticky top-0 z-40 w-full shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo dengan Bingkai Hitam & Teks JAZZFI */}
          <div className="flex items-center space-x-3 overflow-hidden">
            <div className="flex items-center space-x-2.5 flex-shrink-0">
              {/* Logo SVG Presisi Sesuai Gambar Baru */}
              <svg className="w-6 h-6 rounded flex-shrink-0 shadow-sm" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              <span className="text-base font-extrabold tracking-tight text-neutral-950">JAZZFI</span>
            </div>

            <div className="overflow-hidden w-44 sm:w-56 py-1">
              <div className="whitespace-nowrap animate-marquee flex space-x-4 text-[10px] font-mono text-lime-600 font-bold">
                <span className="bg-lime-100 px-2 py-0.5 rounded border border-lime-300 inline-block">
                  [ DEMO • RWA MAINNET ]
                </span>
                <span className="bg-lime-100 px-2 py-0.5 rounded border border-lime-300 inline-block">
                  [ INSTITUTIONAL TAX LIEN ]
                </span>
              </div>
            </div>
          </div>

          {/* Menu */}
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-neutral-700">
            <a href="#markets" className="hover:text-lime-600 transition-colors">Markets</a>
            <a href="#borrow" className="hover:text-lime-600 transition-colors">Borrow / Lend</a>
            <a href="#portfolio" className="hover:text-lime-600 transition-colors">Portfolio</a>
            <a href="#analytics" className="hover:text-lime-600 transition-colors">Analytics</a>
            <a href="#docs" className="hover:text-lime-600 transition-colors">Docs</a>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <button
              onClick={onOpenActivity}
              className="p-2 text-neutral-700 hover:text-neutral-950 bg-neutral-100 border border-neutral-200 rounded-lg text-xs font-mono"
            >
              Activity
            </button>
            <button
              onClick={() => {
                if (walletAddress) {
                  onConnectWallet(""); 
                } else {
                  setIsPrivyOpen(true); 
                }
              }}
              className="px-4 py-2 text-xs font-semibold text-white bg-neutral-950 hover:bg-neutral-800 rounded-lg transition-all"
            >
              {walletAddress ? walletAddress : "Connect Wallet"}
            </button>
          </div>

        </div>
      </nav>

      <PrivyModal 
        isOpen={isPrivyOpen}
        onClose={() => setIsPrivyOpen(false)}
        onSelectMethod={handleSelectMethod}
      />
    </>
  );
}