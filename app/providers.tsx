'use client';

import * as React from 'react';
import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { 
  base, arbitrum, mainnet, bsc, polygon 
} from 'wagmi/chains';
import { getDefaultConfig } from '@rainbow-me/rainbowkit';

// Configuração das Redes e do WalletConnect
const config = getDefaultConfig({
  appName: 'JDex',
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || 'e4c5622327b9ef012c2912fb2dfb44f1', // Seu ID
  chains: [base, arbitrum, mainnet, bsc, polygon],
  ssr: true, // Importante para Next.js App Router
});

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {/* Tema Escuro do RainbowKit combinando com a JDex */}
        <RainbowKitProvider theme={darkTheme({ accentColor: '#7C3AED' })}>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}