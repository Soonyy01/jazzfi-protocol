"use client";

import DocsAndAboutSection from '@/components/DocsAndAboutSection';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import MarketGrid from '../components/MarketGrid';
import BorrowLendModal from '../components/BorrowLendModal';
import PortfolioView from '../components/PortfolioView';
import AnalyticsView from '../components/AnalyticsView';
import DocsSection from '../components/DocsSection';
import ActivityDrawer from '../components/ActivityDrawer';

export default function Home() {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [isBorrowLendOpen, setIsBorrowLendOpen] = useState(false);
  const [isActivityOpen, setIsActivityOpen] = useState(false);

  const handleConnectWallet = () => {
    if (walletAddress) {
      setWalletAddress(null);
    } else {
      setWalletAddress("0x71C...38f9");
    }
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-white selection:bg-neutral-800">
      <Navbar 
        walletAddress={walletAddress}
        onConnectWallet={handleConnectWallet}
        onOpenActivity={() => setIsActivityOpen(true)}
        
      />

      <HeroSection 
        onOpenApp={() => setIsBorrowLendOpen(true)}
      />

      <div id="markets">
        <MarketGrid 
          onSelectMarket={(market) => {
            setIsBorrowLendOpen(true);
          }}
        />
      </div>

      <div id="borrow">
        <section className="py-16 bg-neutral-900/30 border-y border-neutral-900 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20 mb-3 inline-block">
              ENVIRONMENT
            </span>
            <h3 className="text-xl font-bold mb-2">Need Liquidity or Want to Supply?</h3>
            <p className="text-xs text-neutral-400 mb-6 font-mono">Access simulated borrowing power backed by your tax-lien certificates or earn yield in demo pools.</p>
            <button
              onClick={() => setIsBorrowLendOpen(true)}
              className="px-6 py-3 bg-white text-neutral-950 font-semibold rounded-xl text-xs hover:bg-neutral-200 transition-all"
            >
              Open Borrow / Lend Terminal
            </button>
          </div>
        </section>
      </div>

      <div id="portfolio">
        <PortfolioView />
      </div>

      <div id="analytics">
        <AnalyticsView />
      </div>

      <DocsSection />

      <BorrowLendModal 
        isOpen={isBorrowLendOpen}
        onClose={() => setIsBorrowLendOpen(false)}
      />

      <ActivityDrawer 
        isOpen={isActivityOpen}
        onClose={() => setIsActivityOpen(false)}

        
      />
    </main>
  );
}