

import { useEffect, useState } from "react";

interface MeteorsProps {
  number?: number;
}

export default function Meteors({ number = 20 }: MeteorsProps) {
  const [meteorStyles, setMeteorStyles] = useState<
    React.CSSProperties[]
  >([]);

  useEffect(() => {
    const generateMeteors = () => {
      const styles = Array.from({ length: number }, () => ({
        top: "-5px",
        left: `${Math.random() * window.innerWidth}px`,
        animationDelay: `${Math.random() * 1 + 0.2}s`,
        animationDuration: `${Math.random() * 6 + 3}s`,
      }));

      setMeteorStyles(styles);
    };

    generateMeteors();

    window.addEventListener("resize", generateMeteors);

    return () => {
      window.removeEventListener("resize", generateMeteors);
    };
  }, [number]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 h-screen w-screen overflow-hidden">
      {meteorStyles.map((style, idx) => (
        <span
          key={idx}
          className="absolute size-0.5 rotate-[215deg] animate-meteor rounded-full bg-slate-300 shadow-[0_0_0_1px_#ffffff10]"
          style={style}
        >
          <span className="pointer-events-none absolute left-0 top-1/2 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-300 to-transparent" />
        </span>
      ))}
    </div>
  );
}

