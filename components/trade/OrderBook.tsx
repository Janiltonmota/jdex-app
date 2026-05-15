'use client';

import { useMemo } from 'react';

// Function to generate deterministic mock data
function generateDeterministicData(basePrice: number, count: number, isAsk: boolean) {
  const data = [];
  for (let i = 0; i < count; i++) {
    // Create deterministic values that look varied but don't use random during render
    const seed = i * 0.123456; // Some irrational number for variation
    const amount = ((Math.sin(seed) + 1) * 0.5 * 1.5 + 0.5); // Between 0.5 and 2.0
    const total = ((Math.cos(seed) + 1) * 0.5 * 4 + 1); // Between 1.0 and 5.0
    const price = basePrice + (isAsk ? i * 0.5 : -i * 0.5);
    
    data.push({
      price: price.toFixed(2),
      amount: amount.toFixed(4),
      total: total.toFixed(4),
      barWidth: amount * 25, // Scale for visualization
    });
  }
  return data;
}

export default function OrderBook() {
  // Generate asks (higher prices) and bids (lower prices) deterministically
  const asks = useMemo(() => 
    generateDeterministicData(2450, 12, true).reverse(), 
  []);
  
  const bids = useMemo(() => 
    generateDeterministicData(2449, 12, false), 
  []);

  return (
    <div className="flex flex-col h-full bg-[#161625] w-full lg:w-80 border-l border-[#2d2d44]">
      <div className="p-3 border-b border-[#2d2d44] font-medium text-sm text-gray-300">
        Order Book
      </div>
      
      <div className="flex justify-between px-3 py-2 text-xs text-gray-500">
        <span>Price (USDT)</span>
        <span>Amount</span>
        <span>Total</span>
      </div>

      <div className="flex-1 overflow-hidden flex flex-col justify-end pb-1">
        {asks.map((ask, i) => (
          <div key={i} className="flex justify-between px-3 py-1 text-xs hover:bg-[#2d2d44]/30 cursor-pointer group relative">
            <span className="text-[#ef4444]">{ask.price}</span>
            <span className="text-gray-300">{ask.amount}</span>
            <span className="text-gray-400">{ask.total}</span>
            <div className="absolute right-0 top-0 bottom-0 bg-[#ef4444]/10 z-0" style={{ width: `${ask.barWidth}%` }} />
          </div>
        ))}
      </div>

      <div className="py-2 px-3 border-y border-[#2d2d44] flex items-center justify-between bg-[#0f0f1a]">
        <span className="text-lg font-bold text-[#10b981]">2,449.50</span>
        <span className="text-xs text-gray-500">$2,449.50</span>
      </div>

      <div className="flex-1 overflow-hidden pt-1">
        {bids.map((bid, i) => (
          <div key={i} className="flex justify-between px-3 py-1 text-xs hover:bg-[#2d2d44]/30 cursor-pointer group relative">
            <span className="text-[#10b981]">{bid.price}</span>
            <span className="text-gray-300">{bid.amount}</span>
            <span className="text-gray-400">{bid.total}</span>
            <div className="absolute right-0 top-0 bottom-0 bg-[#10b981]/10 z-0" style={{ width: `${bid.barWidth}%` }} />
          </div>
        ))}
      </div>
    </div>
  );
}