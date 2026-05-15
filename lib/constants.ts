export const NETWORKS = [
  { id: 'base', name: 'Base', icon: '🔵' },
  { id: 'arb', name: 'Arbitrum', icon: '🔷' },
  { id: 'eth', name: 'Ethereum', icon: '💠' },
  { id: 'bsc', name: 'BSC', icon: '🟡' },
  { id: 'sol', name: 'Solana', icon: '🟣' },
];

export const PLATFORMS = [
  { id: 'jdex', name: 'JDex Native', type: 'spot' },
  { id: '1inch', name: '1inch Aggregator', type: 'spot' },
  { id: 'uniswap', name: 'Uniswap V3', type: 'spot' },
  { id: 'hyperliquid', name: 'Hyperliquid Perps', type: 'perp' },
  { id: 'bybit', name: 'Bybit CEX', type: 'perp' },
];

export type Network = typeof NETWORKS[number];
export type Platform = typeof PLATFORMS[number];