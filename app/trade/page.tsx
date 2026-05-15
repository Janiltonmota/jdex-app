'use client';

import { useState } from 'react';
import TopControlBar from '@/components/trade/TopControlBar';
import ChartArea from '@/components/trade/ChartArea';
import OrderBook from '@/components/trade/OrderBook';
import TradePanel from '@/components/trade/TradePanel';

export default function TradePage() {
  const [isConnected, setIsConnected] = useState(false);
  const [ordersTab, setOrdersTab] = useState<'open' | 'history' | 'trades'>('open');

  const handleConnect = () => {
    setIsConnected(!isConnected);
  };

  return (
    <div className="flex flex-col h-screen w-full bg-[#0f0f1a] text-white overflow-hidden">
      
      {/* Barra de Controle Superior */}
      <TopControlBar 
        onConnectWallet={handleConnect} 
        isConnected={isConnected} 
      />

      {/* Área Principal de Trading */}
      <main className="flex-1 flex flex-col lg:flex-row overflow-hidden gap-0">
        
        {/* Coluna Esquerda: Gráfico e Histórico */}
        <section className="flex-1 flex flex-col min-h-100 lg:min-h-0 border-b lg:border-b-0 lg:border-r border-[#2d2d44]">
          {/* Gráfico */}
          <div className="flex-1 border-b border-[#2d2d44]">
            <ChartArea />
          </div>
          
          {/* Histórico de Ordens */}
          <div className="h-48 bg-[#161625]">
            {/* Abas */}
            <div className="flex border-b border-[#2d2d44]">
              <button 
                onClick={() => setOrdersTab('open')}
                className={`flex-1 px-4 py-2 text-sm font-medium transition-colors ${ordersTab === 'open' ? 'text-[#A855F7] border-b-2 border-[#A855F7]' : 'text-gray-500 hover:text-gray-300'}`}
              >
                Ordens Abertas (0)
              </button>
              <button 
                onClick={() => setOrdersTab('history')}
                className={`flex-1 px-4 py-2 text-sm font-medium transition-colors ${ordersTab === 'history' ? 'text-[#A855F7] border-b-2 border-[#A855F7]' : 'text-gray-500 hover:text-gray-300'}`}
              >
                Histórico
              </button>
              <button 
                onClick={() => setOrdersTab('trades')}
                className={`flex-1 px-4 py-2 text-sm font-medium transition-colors ${ordersTab === 'trades' ? 'text-[#A855F7] border-b-2 border-[#A855F7]' : 'text-gray-500 hover:text-gray-300'}`}
              >
                Operações
              </button>
            </div>
            
            {/* Conteúdo das Abas */}
            <div className="p-4 text-center text-gray-500 text-sm">
              {ordersTab === 'open' && 'Nenhuma ordem aberta'}
              {ordersTab === 'history' && 'Nenhum histórico'}
              {ordersTab === 'trades' && 'Nenhuma operação realizada'}
            </div>
          </div>
        </section>

        {/* Coluna Direita: OrderBook + TradePanel */}
        <aside className="w-full lg:w-112.5 flex flex-col lg:flex-row h-auto lg:h-full shrink-0">
          
          {/* Order Book */}
          <div className="h-100 lg:h-1/2 lg:w-1/2 border-b lg:border-b-0 lg:border-r border-[#2d2d44] overflow-hidden">
            <OrderBook />
          </div>

          {/* Trade Panel */}
          <div className="flex-1 lg:w-1/2 min-h-75 overflow-hidden">
            <TradePanel />
          </div>

        </aside>
      </main>
    </div>
  );
}