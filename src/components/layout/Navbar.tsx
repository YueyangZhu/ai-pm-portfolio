import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { profile } from "@/data/profile";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { Button } from "@/components/common/Button";

interface NavItemDef {
  id: string;
  label: string;
}

const NAV_ITEMS: NavItemDef[] = [
  { id: "home", label: "首页" },
  { id: "about", label: "关于我" },
  { id: "experience", label: "职业经历" },
  { id: "projects", label: "项目经验" },
  { id: "works", label: "AI 作品" },
  { id: "skills", label: "能力" },
  { id: "contact", label: "联系" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeOverride, setActiveOverride] = useState<string | null>(null);
  const scrollToSection = useScrollToSection();
  const observedActive = useActiveSection(NAV_ITEMS, true);
  const active = activeOverride ?? observedActive;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          const top = el.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top, behavior: "smooth" });
        }, 80);
        history.replaceState(null, "", window.location.pathname);
      }
    }
  }, []);

  const handleClick = (id: string) => {
    setOpen(false);
    setActiveOverride(id);
    scrollToSection(id);
    // 滚动动画约 600-1000ms，结束后让 IntersectionObserver 接管
    window.setTimeout(() => setActiveOverride(null), 1200);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-surface-border bg-surface-card/95 shadow-lg backdrop-blur-md"
          : "border-transparent bg-surface-card/60 backdrop-blur"
      )}
    >
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-50 focus:rounded-btn focus:bg-brand focus:px-3 focus:py-2 focus:text-white"
        onClick={(e) => {
          e.preventDefault();
          handleClick("home");
        }}
      >
        跳到主要内容
      </a>
      <nav
        className="mx-auto flex h-16 max-w-content items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="主导航"
      >
        <Link
          to="/"
          className="group flex items-baseline gap-2 py-2"
          onClick={() => handleClick("home")}
        >
          <span className="text-lg font-bold text-brand transition-colors group-hover:text-brand-600">
            {profile.name}
          </span>
          <span className="hidden text-sm font-medium text-ink-soft sm:inline">/ AI 产品经理</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              aria-current={active === item.id ? "true" : undefined}
              className={cn(
                "relative rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200",
                active === item.id
                  ? "bg-brand-50 text-accent-700 shadow-sm"
                  : "text-ink hover:bg-brand-50 hover:text-brand"
              )}
            >
              {item.label}
            </button>
          ))}
          <Button
            as="a"
            href={profile.resumeUrl}
            variant="primary"
            size="md"
            className="ml-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileText className="h-4 w-4" aria-hidden />
            查看简历
          </Button>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-btn border border-transparent text-brand transition-colors hover:border-brand-200 hover:bg-brand-50 lg:hidden"
          aria-label={open ? "关闭菜单" : "打开菜单"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="animate-slide-down border-t border-surface-border bg-surface-card shadow-xl lg:hidden"
        >
          <div className="mx-auto flex max-w-content flex-col gap-1 px-4 py-3 sm:px-6">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                aria-current={active === item.id ? "true" : undefined}
                className={cn(
                  "flex items-center justify-between rounded-btn px-3 py-3 text-left text-base font-medium",
                  active === item.id
                    ? "bg-brand-50 text-accent-700"
                    : "text-ink hover:bg-brand-50"
                )}
              >
                {item.label}
                {active === item.id && <span className="h-2 w-2 rounded-full bg-accent" />}
              </button>
            ))}
            <Button
              as="a"
              href={profile.resumeUrl}
              variant="primary"
              size="lg"
              className="mt-2 w-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText className="h-4 w-4" aria-hidden />
              查看简历
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
