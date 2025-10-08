# ToshiStrategy

Blue-themed dapp inspired by PunkStrategy/PepeStrategy UI. Built with Next.js App Router, Tailwind v4, wagmi v2, viem v2, and RainbowKit.

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000` with your browser.

## Configure

- Replace the WalletConnect Project ID in `src/components/Providers.tsx` (`projectId`).
- Update the GeckoTerminal `iframe` URL in `src/components/Dashboard.tsx` to your pool.

## Notes

This is a UI scaffold. Wire protocol functions (buy, sell, progress) via wagmi/viem hooks.
