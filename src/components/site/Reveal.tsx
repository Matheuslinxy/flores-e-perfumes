import { useEffect, useRef, type ReactNode } from "react";

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    let io: IntersectionObserver | undefined;
    let fallbackTimer: number | undefined;
    try {
      io = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) {
            el.classList.add("is-visible");
            el.classList.remove("reveal-pending");
            io?.disconnect();
            window.clearTimeout(fallbackTimer);
          }
        },
        { threshold: 0.12 },
      );
      el.classList.add("reveal-pending");
      io.observe(el);
      fallbackTimer = window.setTimeout(() => {
        el.classList.add("is-visible");
        el.classList.remove("reveal-pending");
        io?.disconnect();
      }, 1500);
    } catch {
      el.classList.remove("reveal-pending");
      el.classList.add("is-visible");
    }
    return () => {
      window.clearTimeout(fallbackTimer);
      io?.disconnect();
    };
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
