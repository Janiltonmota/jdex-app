'use client';

const asks = Array.from({ length: 12 }, (_, i) => ({
  price: (2450 + i * 0.5).toFixed(2),
  amount: (Math.random() * 2).toFixed(4),
  total: (Math.random() * 5).toFixed(4),
  barWidth: Math.random() * 60,
})).reverse();

const bids = Array.from({ length: 12 }, (_, i) => ({
  price: (2449 - i * 0.5).toFixed(2),
  amount: (Math.random() * 2).toFixed(4),
  total: (Math.random() * 5).toFixed(4),
  barWidth: Math.random() * 60,
}));

export default function OrderBook() {
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