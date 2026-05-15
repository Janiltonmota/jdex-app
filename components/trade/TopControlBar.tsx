'use client';

import { useState } from 'react';
import { NETWORKS, PLATFORMS, Network, Platform } from '@/lib/constants';
import { ChevronDown, Search, Wallet } from 'lucide-react';

interface TopControlBarProps {
  onConnectWallet: () => void;
  isConnected: boolean;
}

export default function TopControlBar({ onConnectWallet, isConnected }: TopControlBarProps) {
  const [selectedNetwork, setSelectedNetwork] = useState<Network>(NETWORKS[0]);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>(PLATFORMS[0]);

  return (
    <div className="w-full h-16 bg-[#161625] border-b border-[#2d2d44] flex items-center justify-between px-4 shrink-0 z-20 relative">
      <div className="flex items-center gap-4">
        
        {/* Seletor de Rede */}
        <div className="relative group">
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#0f0f1a] border border-[#2d2d44] hover:border-[#7C3AED] transition-colors text-sm font-medium">
            <span>{selectedNetwork.icon}</span>
            <span>{selectedNetwork.name}</span>
            <ChevronDown size={14} className="text-gray-400" />
          </button>
          <div className="absolute top-full left-0 mt-2 w-48 bg-[#161625] border border-[#2d2d44] rounded-lg shadow-xl hidden group-hover:block z-50">
            {NETWORKS.map((net) => (
              <button
                key={net.id}
                onClick={() => setSelectedNetwork(net)}
                className="w-full text-left px-4 py-2 hover:bg-[#7C3AED]/20 text-sm flex items-center gap-2"
              >
                {net.icon} {net.name}
              </button>
            ))}
          </div>
        </div>

        {/* Seletor de Plataforma */}
        <div className="relative group">
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#0f0f1a] border border-[#2d2d44] hover:border-[#7C3AED] transition-colors text-sm font-medium">
            <span className="text-[#A855F7] font-bold">JDex</span>
            <span className="text-gray-400">|</span>
            <span>{selectedPlatform.name}</span>
            <ChevronDown size={14} className="text-gray-400" />
          </button>
           <div className="absolute top-full left-0 mt-2 w-56 bg-[#161625] border border-[#2d2d44] rounded-lg shadow-xl hidden group-hover:block z-50">
            {PLATFORMS.map((plat) => (
              <button
                key={plat.id}
                onClick={() => setSelectedPlatform(plat)}
                className="w-full text-left px-4 py-2 hover:bg-[#7C3AED]/20 text-sm flex justify-between"
              >
                <span>{plat.name}</span>
                <span className="text-xs text-gray-500 uppercase">{plat.type}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Busca de Par */}
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
          <input 
            type="text" 
            placeholder="Buscar par (ex: BTC/USDT)" 
            className="pl-10 pr-4 py-2 bg-[#0f0f1a] border border-[#2d2d44] rounded-lg text-sm focus:outline-none focus:border-[#7C3AED] w-64 text-white placeholder-gray-600"
          />
        </div>
      </div>

      <div>
        <button 
          onClick={onConnectWallet}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
            isConnected 
            ? 'bg-[#161625] border border-[#2d2d44] text-green-400' 
            : 'bg-linear-to-r from-[#7C3AED] to-[#A855F7] hover:opacity-90 text-white shadow-lg shadow-purple-900/20'
          }`}
        >
          <Wallet size={18} />
          {isConnected ? '0xJan...ilton' : 'Conectar Wallet'}
        </button>
      </div>
    </div>
    );
}