'use client';

import ConnectButton from '@rainbow-me/rainbowkit/ConnectButton';
import { useAccount, useBalance } from 'wagmi';
import { formatEther } from 'viem';

export default function TopControlBar() {
  const { address } = useAccount();
  const { data: balance, isLoading: isBalanceLoading } = useBalance({
    address,
  });

  return (
    <div className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-39.5">
      <ConnectButton />
      {address && (
        <span className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          {isBalanceLoading ? 'Loading...' : `${formatEther(balance ?? 0n)} ETH`}
        </span>
      )}
    </div>
  );
}