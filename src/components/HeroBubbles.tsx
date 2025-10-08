"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Bubble = {
  id: number;
  xPct: number; // 0-100
  yPct: number; // 0-100
  size: number; // px
  depth: number; // 0-1, parallax factor
  url: string;
};

const AVATARS = [
  "/images/data.jpeg",
  "/images/diamondhand.jpeg",
  "/images/footer.jpeg",
  "/theVision.png",
  "/images/theVision.png",
];

export function HeroBubbles() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  const bubbles: Bubble[] = useMemo(() => {
    const count = 36;
    const list: Bubble[] = [];
    for (let i = 0; i < count; i++) {
      const seed = i + 1;
      const prng = (n: number) => {
        const s = Math.sin(n * 123.45 + seed * 7.77) * 10000;
        return s - Math.floor(s);
      };
      list.push({
        id: i,
        xPct: prng(1 + i) * 100,
        yPct: prng(2 + i) * 100,
        size: 28 + Math.floor(prng(3 + i) * 56),
        depth: 0.25 + prng(4 + i) * 0.75,
        url: AVATARS[Math.floor(prng(5 + i) * AVATARS.length)],
      });
    }
    return list;
  }, []);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    const onScroll = () => setScrollY(window.scrollY || 0);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="hero-bubbles" aria-hidden>
      {bubbles.map((b) => {
        const offsetX = ((mouse.x / (window.innerWidth || 1)) - 0.5) * 30 * b.depth;
        const offsetY = ((mouse.y / (window.innerHeight || 1)) - 0.5) * 30 * b.depth + (scrollY * 0.04 * b.depth);
        const style: React.CSSProperties = {
          left: `${b.xPct}%`,
          top: `${b.yPct}%`,
          width: b.size,
          height: b.size,
          transform: `translate(-50%, -50%) translate(${offsetX}px, ${offsetY}px)`,
          backgroundImage: `url(${b.url})`,
        };
        return <div key={b.id} className="hero-bubble" style={style} />;
      })}
    </div>
  );
}


