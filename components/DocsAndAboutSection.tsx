import React from 'react';

export default function DocsAndAboutSection() {
  return (
    <div className="bg-black text-white px-6 py-12 space-y-16 max-w-6xl mx-auto font-sans">
      
      {/* 1. WHITEPAPER SECTION */}
      <section id="whitepaper" className="space-y-6">
        <h1 className="text-3xl font-bold text-lime-400">JazzFi Whitepaper & Documentation</h1>
        
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <h2 className="text-xl font-semibold text-white">1. Introduction to JazzFi</h2>
          <p>
            JazzFi is a next-generation decentralized financial protocol and on-chain liquidity marketplace designed to bridge traditional financial instruments with decentralized ecosystems. By leveraging advanced automated market-making and collateral optimization, JazzFi provides seamless opportunities for yield generation, asset borrowing, and liquidity provisioning.
          </p>

          <h2 className="text-xl font-semibold text-white">2. Core Architecture & Ecosystem</h2>
          <p>The JazzFi protocol operates on high-throughput distributed networks, ensuring low transaction latency and maximum security. The system architecture consists of three core pillars:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-lime-400">Yield Aggregator:</strong> Automatically routes deposited assets to high-yield, audited liquidity pools to maximize user returns.</li>
            <li><strong className="text-lime-400">Collateralized Borrowing Engine:</strong> Enables users to leverage digital assets and real-world-backed tokens safely.</li>
            <li><strong className="text-lime-400">Automated Liquidity Markets:</strong> Dynamic pricing and liquidity depths powered by decentralized algorithms.</li>
          </ul>

          <h2 className="text-xl font-semibold text-white">3. Tokenomics & Governance</h2>
          <p>
            The native utility token of the ecosystem empowers holders with governance rights, protocol fee shares, and boosted staking rewards. Distribution is structured transparently to ensure long-term sustainability and decentralized community ownership.
          </p>
        </div>
      </section>

      <div className="border-t border-gray-800 my-8"></div>

      {/* 2. BLOCKSCAN SECTION */}
      <section id="blockscan" className="space-y-6">
        <h1 className="text-3xl font-bold text-lime-400">JazzFi Blockscan (Explorer Overview)</h1>
        <p className="text-gray-300">
          The JazzFi Blockscan is a specialized blockchain explorer designed to track all on-chain transactions, smart contract executions, liquidity pools, and asset movements within the JazzFi ecosystem in real-time.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse border border-gray-800">
            <thead>
              <tr className="bg-gray-900 text-lime-400">
                <th className="border border-gray-800 p-3">Metric / Feature</th>
                <th className="border border-gray-800 p-3">Description</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr>
                <td className="border border-gray-800 p-3 font-semibold text-white">Transaction Tracking</td>
                <td className="border border-gray-800 p-3">Inspect hashes, sender/receiver addresses, block heights, and gas fees instantly.</td>
              </tr>
              <tr>
                <td className="border border-gray-800 p-3 font-semibold text-white">Smart Contract Verification</td>
                <td className="border border-gray-800 p-3">View verified source code and interact directly with protocol deployment contracts.</td>
              </tr>
              <tr>
                <td className="border border-gray-800 p-3 font-semibold text-white">Pool Statistics</td>
                <td className="border border-gray-800 p-3">Monitor live Total Value Locked (TVL), 24-hour volume, and active liquidity provider metrics.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="border-t border-gray-800 my-8"></div>

      {/* 3. ABOUT SECTION */}
      <section id="about" className="space-y-6">
        <h1 className="text-3xl font-bold text-lime-400">About JazzFi</h1>
        <p className="text-gray-300 leading-relaxed">
          Founded with the vision of making decentralized finance intuitive, transparent, and universally accessible, JazzFi eliminates traditional intermediaries through trustless smart contracts.
        </p>

        <div className="grid md:grid-cols-2 gap-6 pt-4">
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold text-white mb-2">Our Mission</h3>
            <p className="text-gray-300">
              To build a robust, secure, and user-centric financial marketplace empowering individuals globally to take full control of their financial assets and digital wealth.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-semibold text-white mb-2">Core Values</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li><strong className="text-lime-400">Security First:</strong> Rigorous audits & risk assessments.</li>
              <li><strong className="text-lime-400">Transparency:</strong> Open-source development & on-chain verification.</li>
              <li><strong className="text-lime-400">Community-Driven:</strong> Decentralized governance for participants.</li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
}