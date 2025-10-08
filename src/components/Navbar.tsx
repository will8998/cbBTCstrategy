"use client";

import Link from "next/link";
import Image from "next/image";
import { User } from "lucide-react";

export function Navbar() {
  return (
    <div className="sticky top-0 z-40 bg-[#0052ff]">
      <div className="w-full px-4 sm:px-6 md:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-wide text-white">
          <span className="text-2xl">Strategy</span>
          <sup className="-mt-3 text-lg">b</sup>
        </Link>

        {/* Primary nav */}
        <nav className="hidden md:flex items-center gap-6 text-[15px] text-white/90">
          <a
            href="https://dexscreener.com/base/0x6264cF27De811326977f30a2f0B0a12B90914576"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            Dexscreener
          </a>
          <a
            href="https://t.me/cbbtcstrategy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            Community
          </a>
        </nav>

        {/* Far right: Open App */}
        <Link href="/dashboard" className="inline-flex items-center justify-center h-9 px-4 rounded-full bg-white text-[#0052ff] font-medium">
          Open App
        </Link>
      </div>
    </div>
  );
}


