'use client';

import { useState } from 'react';
import { TrendingUp, TrendingDown, AlertCircle } from 'lucide-react';

export default function TradePanel() {
  const [side, setSide] = useState<'buy' | 'sell'>('buy');
  const [orderType, setOrderType] = useState<'limit' | 'market'>('limit');
  const [price, setPrice] = useState('2450.00');
  const [quantity, setQuantity] = useState('');
  const [stopLoss, setStopLoss] = useState('');
  const [stopGain, setStopGain] = useState('');
  const [activeTab, setActiveTab] = useState<'trade' | 'pnl'>('trade');

  // Dados simulados de PnL
  const pnlData = {
    dailyPnL: 1250.50,
    totalPnL: 5430.25,
    pnlPercent: 8.75,
    openPosition: {
      size: 2.5,
      entryPrice: 2400,
      currentPrice: 2450,
      unrealizedPnL: 125.00,
      leverage: 1,
    },
    trades: [
      { id: 1, pair: 'ETH/USDT', side: 'BUY', price: 2400, quantity: 1.0, pnl: 50, timestamp: '10:45' },
      { id: 2, pair: 'ETH/USDT', side: 'SELL', price: 2420, quantity: 0.5, pnl: 10, timestamp: '11:20' },
    ]
  };

  const totalValue = parseFloat(quantity || '0') * parseFloat(price);

  return (
    <div className="p-4 bg-[#161625] h-full border-t lg:border-t-0 lg:border-l border-[#2d2d44] flex flex-col overflow-y-auto">
      
      {/* Abas */}
      <div className="flex gap-4 mb-4 border-b border-[#2d2d44] pb-2">
        <button 
          onClick={() => setActiveTab('trade')}
          className={`text-sm font-bold transition-colors ${activeTab === 'trade' ? 'text-[#A855F7] border-b-2 border-[#A855F7] pb-2' : 'text-gray-500 hover:text-gray-300'}`}
        >
          Operação
        </button>
        <button 
          onClick={() => setActiveTab('pnl')}
          className={`text-sm font-bold transition-colors ${activeTab === 'pnl' ? 'text-[#A855F7] border-b-2 border-[#A855F7] pb-2' : 'text-gray-500 hover:text-gray-300'}`}
        >
          Resumo
        </button>
      </div>

      {activeTab === 'trade' ? (
        <>
          {/* Botões Comprar/Vender */}
          <div className="flex bg-[#0f0f1a] rounded-lg p-1 mb-4">
            <button 
              onClick={() => setSide('buy')}
              className={`flex-1 py-2 text-sm font-bold rounded-md transition-colors ${side === 'buy' ? 'bg-[#10b981] text-white' : 'text-gray-400 hover:text-white'}`}
            >
              Comprar
            </button>
            <button 
              onClick={() => setSide('sell')}
              className={`flex-1 py-2 text-sm font-bold rounded-md transition-colors ${side === 'sell' ? 'bg-[#ef4444] text-white' : 'text-gray-400 hover:text-white'}`}
            >
              Vender
            </button>
          </div>

          {/* Tipo de Ordem */}
          <div className="flex gap-4 mb-4 text-sm">
            <button 
              onClick={() => setOrderType('limit')} 
              className={`pb-1 border-b-2 transition-colors ${orderType === 'limit' ? 'text-[#A855F7] border-[#A855F7]' : 'text-gray-400 border-transparent'}`}
            >
              Limit
            </button>
            <button 
              onClick={() => setOrderType('market')} 
              className={`pb-1 border-b-2 transition-colors ${orderType === 'market' ? 'text-[#A855F7] border-[#A855F7]' : 'text-gray-400 border-transparent'}`}
            >
              Market
            </button>
          </div>

          {/* Campos de Entrada */}
          <div className="space-y-3 mb-4">
            {orderType === 'limit' && (
              <div className="space-y-1">
                <label className="text-xs text-gray-500">Preço (USDT)</label>
                <div className="flex items-center bg-[#0f0f1a] border border-[#2d2d44] rounded-lg px-3 py-2 focus-within:border-[#7C3AED]">
                  <input 
                    type="number" 
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="bg-transparent w-full outline-none text-sm text-white" 
                  />
                  <span className="text-xs text-gray-500">USDT</span>
                </div>
              </div>
            )}

            <div className="space-y-1">
              <label className="text-xs text-gray-500">Quantidade</label>
              <div className="flex items-center bg-[#0f0f1a] border border-[#2d2d44] rounded-lg px-3 py-2 focus-within:border-[#7C3AED]">
                <input 
                  type="number" 
                  placeholder="0.00"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="bg-transparent w-full outline-none text-sm text-white" 
                />
                <span className="text-xs text-gray-500">ETH</span>
              </div>
            </div>

            {/* Valor Total */}
            <div className="bg-[#0f0f1a] rounded-lg p-2 border border-[#2d2d44]">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Valor Total:</span>
                <span className="text-white font-bold">${totalValue.toFixed(2)}</span>
              </div>
            </div>

            {/* Atalhos de Percentual */}
            <div className="flex gap-2">
              {[25, 50, 75, 100].map(pct => (
                <button 
                  key={pct} 
                  className="flex-1 bg-[#0f0f1a] border border-[#2d2d44] rounded text-xs py-1 hover:border-[#7C3AED] text-gray-400 hover:text-white transition-colors"
                >
                  {pct}%
                </button>
              ))}
            </div>
          </div>

          {/* Stop Loss e Stop Gain */}
          <div className="space-y-3 mb-4 p-3 bg-[#0f0f1a] rounded-lg border border-[#2d2d44]">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle size={16} className="text-[#A855F7]" />
              <span className="text-xs font-bold text-gray-300">Proteção</span>
            </div>

            <div className="space-y-1">
              <label className="text-xs text-gray-500">Stop Loss (USDT)</label>
              <div className="flex items-center bg-[#161625] border border-[#ef4444]/30 rounded-lg px-3 py-2 focus-within:border-[#ef4444]">
                <input 
                  type="number"
                  placeholder="2400.00"
                  value={stopLoss}
                  onChange={(e) => setStopLoss(e.target.value)}
                  className="bg-transparent w-full outline-none text-sm text-white" 
                />
                <TrendingDown size={16} className="text-[#ef4444]" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs text-gray-500">Stop Gain (USDT)</label>
              <div className="flex items-center bg-[#161625] border border-[#10b981]/30 rounded-lg px-3 py-2 focus-within:border-[#10b981]">
                <input 
                  type="number"
                  placeholder="2500.00"
                  value={stopGain}
                  onChange={(e) => setStopGain(e.target.value)}
                  className="bg-transparent w-full outline-none text-sm text-white" 
                />
                <TrendingUp size={16} className="text-[#10b981]" />
              </div>
            </div>
          </div>

          {/* Botão de Execução */}
          <button className={`w-full py-3 rounded-lg font-bold text-white transition-opacity hover:opacity-90 ${
            side === 'buy' ? 'bg-[#10b981]' : 'bg-[#ef4444]'
          }`}>
            {side === 'buy' ? 'Comprar ETH' : 'Vender ETH'}
          </button>
        </>
      ) : (
        <>
          {/* Resumo de PnL */}
          <div className="space-y-3">
            {/* PnL Diário */}
            <div className="bg-[#0f0f1a] rounded-lg p-3 border border-[#2d2d44]">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs text-gray-500">PnL Diário</span>
                <span className={`text-sm font-bold ${pnlData.dailyPnL >= 0 ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>
                  ${pnlData.dailyPnL.toFixed(2)}
                </span>
              </div>
              <div className="text-xs text-gray-400">
                {pnlData.pnlPercent >= 0 ? '↑' : '↓'} {Math.abs(pnlData.pnlPercent).toFixed(2)}%
              </div>
            </div>

            {/* PnL Total */}
            <div className="bg-[#0f0f1a] rounded-lg p-3 border border-[#2d2d44]">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs text-gray-500">PnL Total</span>
                <span className={`text-sm font-bold ${pnlData.totalPnL >= 0 ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>
                  ${pnlData.totalPnL.toFixed(2)}
                </span>
              </div>
              <div className="text-xs text-gray-400">De 5 operações</div>
            </div>

            {/* Posição Aberta */}
            {pnlData.openPosition.size > 0 && (
              <div className="bg-[#0f0f1a] rounded-lg p-3 border border-[#A855F7]/30">
                <div className="mb-2 pb-2 border-b border-[#2d2d44]">
                  <span className="text-xs font-bold text-[#A855F7]">Posição Aberta</span>
                </div>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Tamanho:</span>
                    <span className="text-white">{pnlData.openPosition.size} ETH</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Entrada:</span>
                    <span className="text-white">${pnlData.openPosition.entryPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Preço Atual:</span>
                    <span className="text-white">${pnlData.openPosition.currentPrice}</span>
                  </div>
                  <div className="flex justify-between pt-1 border-t border-[#2d2d44]">
                    <span className="text-gray-500">PnL Não-Realizado:</span>
                    <span className={pnlData.openPosition.unrealizedPnL >= 0 ? 'text-[#10b981]' : 'text-[#ef4444]'}>
                      ${pnlData.openPosition.unrealizedPnL.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Histórico de Operações */}
            <div className="bg-[#0f0f1a] rounded-lg border border-[#2d2d44] overflow-hidden">
              <div className="p-3 border-b border-[#2d2d44]">
                <span className="text-xs font-bold text-gray-300">Últimas Operações</span>
              </div>
              <div className="divide-y divide-[#2d2d44]">
                {pnlData.trades.map(trade => (
                  <div key={trade.id} className="p-2 text-xs">
                    <div className="flex justify-between mb-1">
                      <div className="flex gap-2">
                        <span className={`font-bold ${trade.side === 'BUY' ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>
                          {trade.side}
                        </span>
                        <span className="text-gray-500">{trade.pair}</span>
                      </div>
                      <span className={trade.pnl >= 0 ? 'text-[#10b981]' : 'text-[#ef4444]'}>
                        +${trade.pnl.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between text-gray-500">
                      <span>{trade.quantity} @ ${trade.price}</span>
                      <span>{trade.timestamp}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}