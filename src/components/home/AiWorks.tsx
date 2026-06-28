import { ArrowUpRight, ExternalLink, Construction, Lightbulb, Bot, FileSearch, BarChart3, Image } from "lucide-react";
import { cn } from "@/lib/utils";
import { aiWorks, aiWorkDisclaimer, type WorkKey } from "@/data/ai-works";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";

const accentMap: Record<
  WorkKey,
  {
    bar: string;
    bg: string;
    iconBg: string;
    iconColor: string;
    chip: string;
    glow: string;
    ring: string;
    icon: React.ReactNode;
  }
> = {
  "customer-service": {
    bar: "bg-emerald-500",
    bg: "from-emerald-500/10 to-transparent",
    iconBg: "bg-emerald-500/15",
    iconColor: "text-emerald-400",
    chip: "border-emerald-500/20 bg-emerald-500/10 text-emerald-300",
    glow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.18)]",
    ring: "hover:border-emerald-400/50",
    icon: <Bot className="h-6 w-6" />,
  },
  "contract-review": {
    bar: "bg-amber-500",
    bg: "from-amber-500/10 to-transparent",
    iconBg: "bg-amber-500/15",
    iconColor: "text-amber-400",
    chip: "border-amber-500/20 bg-amber-500/10 text-amber-300",
    glow: "hover:shadow-[0_0_30px_rgba(245,158,11,0.18)]",
    ring: "hover:border-amber-400/50",
    icon: <FileSearch className="h-6 w-6" />,
  },
  "data-analysis": {
    bar: "bg-indigo-500",
    bg: "from-indigo-500/10 to-transparent",
    iconBg: "bg-indigo-500/15",
    iconColor: "text-indigo-400",
    chip: "border-indigo-500/20 bg-indigo-500/10 text-indigo-300",
    glow: "hover:shadow-[0_0_30px_rgba(139,92,246,0.18)]",
    ring: "hover:border-indigo-400/50",
    icon: <BarChart3 className="h-6 w-6" />,
  },
};

export function AiWorks() {
  return (
    <Section id="works" tone="brand" grid>
      <SectionHeading eyebrow="04 AI WORKS" title="AI 独立作品" light />
      <p className="mt-4 w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm leading-relaxed text-white/70 backdrop-blur-sm">
        {aiWorkDisclaimer}
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {aiWorks.map((w) => {
          const a = accentMap[w.key];
          return (
            <article
              key={w.key}
              className={cn(
                "group relative flex flex-col overflow-hidden rounded-card border border-white/10 bg-white/[0.07] shadow-card backdrop-blur-md transition-all duration-300 hover:-translate-y-1",
                a.glow,
                a.ring
              )}
            >
              {/* 顶部彩条 */}
              <span className={cn("h-1.5 w-full", a.bar)} aria-hidden />

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-bold text-white">{w.title}</h3>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/70">
                  {w.description}
                </p>

                {/* 系统界面截图占位/封面 */}
                <div className={cn("relative mt-4 h-44 overflow-hidden rounded-btn border border-white/10 bg-gradient-to-br", a.bg)}>
                  <div className="pointer-events-none absolute inset-0 bg-tech-grid-dark opacity-20" aria-hidden />
                  {w.coverImage ? (
                    <img
                      src={w.coverImage}
                      alt={`${w.title} 系统界面预览`}
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="absolute inset-4 flex flex-col items-center justify-center rounded-btn border-2 border-dashed border-white/20 bg-white/[0.04] text-white/40 transition-colors group-hover:border-white/30 group-hover:text-white/60">
                      <Image className="h-8 w-8" aria-hidden />
                      <span className="mt-2 text-xs">系统界面截图占位</span>
                    </div>
                  )}
                </div>

                {/* 技术标签 */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {w.techTags.map((t) => (
                    <span
                      key={t}
                      className={cn("rounded-full border px-2.5 py-0.5 text-xs font-medium", a.chip)}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* 按钮 */}
                <div className="mt-5 flex flex-wrap gap-2">
                  <Button
                    as="a"
                    href={w.detailPath}
                    variant="outline"
                    size="md"
                    className="flex-1 border-white/20 text-white hover:bg-white/10 hover:text-white"
                    onClick={() => sessionStorage.setItem("works-return-scroll", String(window.scrollY))}
                  >
                    查看作品详情
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Button>
                  {w.onlineUrl ? (
                    <Button
                      as="a"
                      href={w.onlineUrl}
                      variant="accent"
                      size="md"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      在线体验
                      <ExternalLink className="h-4 w-4" aria-hidden />
                    </Button>
                  ) : w.status === "developing" ? (
                    <Button variant="ghost" size="md" disabled className="flex-1 text-white/50">
                      <Construction className="h-4 w-4" aria-hidden />
                      开发中
                    </Button>
                  ) : (
                    <Button variant="ghost" size="md" disabled className="flex-1 text-white/50">
                      <Lightbulb className="h-4 w-4" aria-hidden />
                      规划中
                    </Button>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}


