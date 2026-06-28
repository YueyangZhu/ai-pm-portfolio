import { useEffect, useState } from "react";

interface NavItem {
  id: string;
  label: string;
}

/**
 * 使用 IntersectionObserver 追踪当前可视区域的导航项。
 * 返回当前激活的 section id。
 */
export function useActiveSection(items: NavItem[], enabled: boolean): string | null {
  const [active, setActive] = useState<string | null>(enabled ? items[0]?.id ?? null : null);

  useEffect(() => {
    if (!enabled) {
      setActive(null);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      {
        // 顶部偏移考虑固定导航高度
        rootMargin: "-80px 0px -55% 0px",
        threshold: [0, 0.1, 0.3, 0.6],
      }
    );

    const els = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => Boolean(el));
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [items, enabled]);

  return active;
}
