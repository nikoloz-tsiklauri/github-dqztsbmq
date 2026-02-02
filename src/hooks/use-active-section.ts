import { useEffect, useRef, useState } from "react";

type Options = {
  headerOffset?: number;
  bottomThreshold?: number;
  watch?: any;
};

export default function useActiveSection(ids: string[], options: Options = {}) {
  const { headerOffset = 96, bottomThreshold = 50, watch } = options;
  const [active, setActive] = useState<string | null>(null);
  const rafRef = useRef<number | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!ids || ids.length === 0) {
      setActive(null);
      return;
    }

    if (typeof document === "undefined") return;

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) {
      setActive(null);
      return;
    }

    const lastId = ids[ids.length - 1];
    let mounted = true;

    const updateActiveByScroll = () => {
      if (!mounted) return;
      if (typeof window === "undefined") return;

      // bottom-of-page fallback
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - bottomThreshold) {
        setActive(lastId);
        return;
      }

      // compute element whose top is closest to headerOffset
      let closestId: string | null = null;
      let closestDistance = Number.POSITIVE_INFINITY;

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top - headerOffset);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestId = el.id;
        }
      });

      if (closestId) setActive(closestId);
    };

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateActiveByScroll);
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      const visible = entries.filter((e) => e.isIntersecting);
      if (visible.length) {
        // pick the most visible entry
        visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const id = visible[0].target.id;
        setActive(id);
      } else {
        // fallback to scroll position
        updateActiveByScroll();
      }
    };

    observerRef.current = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "-30% 0px -55% 0px",
      threshold: [0.05, 0.1, 0.2, 0.35, 0.5],
    });

    elements.forEach((el) => observerRef.current?.observe(el));

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    // initial run
    updateActiveByScroll();

    return () => {
      mounted = false;
      observerRef.current?.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
    // include `watch` so consumers can force a re-run on route change
  }, [ids.join("|"), headerOffset, bottomThreshold, watch]);

  return [active, setActive] as const;
}
