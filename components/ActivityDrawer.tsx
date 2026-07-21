"use client";

import React, { useState } from 'react';

interface ActivityDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ActivityDrawer({ isOpen, onClose }: ActivityDrawerProps) {
  if (!isOpen) return null;

  // State awal kosong (0 aktivitas sebelum user melakukan bid/borrow)
  const [activities] = useState<any[]>([]);

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end">
      <div className="w-full max-w-md bg-neutral-950 border-l border-neutral-800 p-6 flex flex-col justify-between text-white">
        
        {/* Header */}
        <div>
          <div className="flex justify-between items-center mb-6 border-b border-neutral-800 pb-4">
            <h2 className="text-base font-bold tracking-tight">Market Activity Logs</h2>
            <button 
              onClick={onClose}
              className="text-neutral-400 hover:text-white text-xs font-mono bg-neutral-900 px-2.5 py-1 rounded border border-neutral-800"
            >
              Close [ESC]
            </button>
          </div>

          {/* List Aktivitas */}
          <div className="space-y-3">
            {activities.length === 0 ? (
              <div className="text-center py-20 text-neutral-500 font-mono text-xs">
                No market activity recorded yet.
              </div>
            ) : (
              activities.map((item, index) => (
                <div key={index} className="bg-neutral-900/60 border border-neutral-800 p-4 rounded-xl flex items-center justify-between font-mono text-xs">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded font-bold">{item.type}</span>
                      <span className="text-neutral-300 font-sans font-medium">{item.title}</span>
                    </div>
                    <span className="text-neutral-500 text-[10px]">{item.time}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-bold">{item.amount}</div>
                    <span className="text-emerald-400 text-[10px]">{item.status}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Footer info */}
        <div className="border-t border-neutral-900 pt-4 text-[11px] font-mono text-neutral-500 text-center">
          Demo Environment • Secure RWA Tracking
        </div>

      </div>
    </div>
  );
}