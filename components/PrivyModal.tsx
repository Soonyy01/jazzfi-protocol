"use client";

import React from 'react';

interface PrivyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectMethod: (methodName: string) => void;
}

export default function PrivyModal({ isOpen, onClose, onSelectMethod }: PrivyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-neutral-900 border border-neutral-800 rounded-3xl p-6 text-white shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 text-neutral-400 hover:text-white bg-neutral-800/60 p-1.5 rounded-full text-xs"
        >
          ✕
        </button>

        {/* Header ala Privy */}
        <div className="text-center mb-6 pt-2">
          <div className="w-10 h-10 bg-white text-neutral-950 font-bold rounded-2xl mx-auto flex items-center justify-center mb-3 text-lg shadow-inner">
            J
          </div>
          <h3 className="text-lg font-bold tracking-tight">Sign in to JazzFi</h3>
          <p className="text-xs text-neutral-400 mt-1">Connect securely to access mainnet demo pools</p>
        </div>

        {/* Social / Email Options ala Privy */}
        <div className="space-y-2.5 mb-6">
          <button
            onClick={() => onSelectMethod("Google")}
            className="w-full py-3 px-4 bg-neutral-800/80 hover:bg-neutral-800 border border-neutral-700/50 rounded-xl text-xs font-medium flex items-center justify-center gap-3 transition-all"
          >
            <span className="font-bold text-sm">G</span> Continue with Google
          </button>
          
          <button
            onClick={() => onSelectMethod("Email")}
            className="w-full py-3 px-4 bg-neutral-800/80 hover:bg-neutral-800 border border-neutral-700/50 rounded-xl text-xs font-medium flex items-center justify-center gap-3 transition-all"
          >
            <span>✉</span> Continue with Email
          </button>
        </div>

        <div className="relative flex py-2 items-center mb-6">
          <div className="flex-grow border-t border-neutral-800"></div>
          <span className="flex-shrink mx-4 text-[10px] font-mono text-neutral-500 uppercase">Or connect wallet</span>
          <div className="flex-grow border-t border-neutral-800"></div>
        </div>

        {/* Web3 Wallets */}
        <div className="grid grid-cols-2 gap-2.5">
          <button
            onClick={() => onSelectMethod("MetaMask")}
            className="py-2.5 px-3 bg-neutral-800/50 hover:bg-neutral-800 border border-neutral-700/50 rounded-xl text-xs font-medium flex items-center justify-center gap-2 transition-all"
          >
            🦊 MetaMask
          </button>
          <button
            onClick={() => onSelectMethod("WalletConnect")}
            className="py-2.5 px-3 bg-neutral-800/50 hover:bg-neutral-800 border border-neutral-700/50 rounded-xl text-xs font-medium flex items-center justify-center gap-2 transition-all"
          >
            ⚡ WalletConnect
          </button>
        </div>

        {/* Footer Branding */}
        <div className="mt-8 text-center">
          <span className="text-[10px] font-mono text-neutral-500 tracking-wider">
            SECURED BY PRIVY DEMO
          </span>
        </div>

      </div>
    </div>
  );
}