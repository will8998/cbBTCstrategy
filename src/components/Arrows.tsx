"use client";

import { useMemo } from "react";

type Arrow = { x: number; delay: number; speed: number; height: number };

export function Arrows() {
  // Generate deterministic arrows to avoid hydration mismatch
  const arrows: Arrow[] = useMemo(() => {
    const list: Arrow[] = [];
    const count = 18;
    for (let i = 0; i < count; i++) {
      const seed = i + 1;
      const prng = (n: number) => {
        // simple deterministic pseudo-random based on seed
        const x = Math.sin(n * 999 + seed * 77.7) * 10000;
        return x - Math.floor(x);
      };
      list.push({
        x: prng(1 + i * 2),
        delay: prng(2 + i * 3) * 6,
        speed: 6 + prng(3 + i * 5) * 10,
        height: 60 + prng(4 + i * 7) * 120,
      });
    }
    return list;
  }, []);

  return (
    <div aria-hidden className="arrows-canvas">
      <svg>
        {arrows.map((a, i) => (
          <g
            key={i}
            style={{
              transform: `translateX(${a.x * 100}%)`,
              animationDuration: `${a.speed}s`,
              animationDelay: `${a.delay}s`,
            }}
            className="arrow"
          >
            <line x1="0" y1={a.height} x2="0" y2="0" />
            <polyline points="-6,10 0,0 6,10" fill="none" />
          </g>
        ))}
      </svg>
    </div>
  );
}


