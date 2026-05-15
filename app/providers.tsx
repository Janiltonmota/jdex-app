import { WagmiProvider } from '@wagmi/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit';
import { configureChains, createClient, Chain } from 'wagmi';
import { mainnet, arbitrum, base, bsc, polygon } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { walletConnectProvider } from 'wagmi/providers/walletConnect';

// Configure chains
const chains = [mainnet, arbitrum, base, bsc, polygon];

// WalletConnect provider
const walletConnect = walletConnectProvider({
  // Using environment variable for WalletConnect Project ID
  // For development, you can use a public one or leave undefined for demo
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_ID,
});

const { provider } = configureChains(chains, [publicProvider(), walletConnect]);

// Get default wallets from RainbowKit
const { connectors } = getDefaultWallets({
  appName: 'JDEX',
  chains,
  // For WalletConnect, we can specify the projectId here too
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_ID,
});

// Create wagmi client
const client = createClient({
  autoConnect: true,
  connectors,
  provider,
});

// Create query client
const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider client={client}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider chains={chains}>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}