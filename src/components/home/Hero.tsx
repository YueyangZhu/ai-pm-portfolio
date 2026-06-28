import { Briefcase, Sparkles, FileText, Layers, Cpu, BarChart3 } from "lucide-react";
import { profile } from "@/data/profile";
import { Button } from "@/components/common/Button";
import { useScrollToSection } from "@/hooks/useScrollToSection";

export function Hero() {
  const scrollToSection = useScrollToSection();

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-brand-900 pt-16 text-white"
      aria-label="首屏"
    >
      {/* 深色科技感背景：径向光晕 + 网格 */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-brand-500/20 blur-[120px]" />
        <div className="absolute right-0 top-1/4 h-[420px] w-[420px] rounded-full bg-accent/15 blur-[100px]" />
        <div className="absolute bottom-0 left-1/3 h-[360px] w-[360px] rounded-full bg-brand-600/25 blur-[100px]" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-tech-grid-dark opacity-40" aria-hidden />

      <div className="relative mx-auto w-full max-w-content px-4 py-16 sm:px-6 sm:py-20 lg:py-28 lg:px-8">
        {/* 主标题 */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            <span className="text-gradient-accent">专注企业AI产品设计与落地</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg lg:mx-0">
            具备企业数字化、复杂业务流程和B端产品经验，目前通过个人AI作品，实践从需求分析、工作流设计、
            Vibe Coding、测试到部署上线的完整过程。
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <Button variant="accent" size="lg" onClick={() => scrollToSection("experience")}>
              <Briefcase className="h-4 w-4" aria-hidden />
              查看职业经历
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("works")}
              className="border-white/20 text-white hover:bg-white/10 hover:text-white"
            >
              <Sparkles className="h-4 w-4" aria-hidden />
              查看 AI 独立作品
            </Button>
            <Button
              as="a"
              href={profile.resumeUrl}
              variant="primary"
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText className="h-4 w-4" aria-hidden />
              下载 PDF 简历
            </Button>
          </div>
        </div>

        {/* 核心能力指标 */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {profile.highlights.map((item, idx) => (
            <HighlightCard key={item.label} item={item} index={idx} />
          ))}
        </div>
      </div>

      {/* 底部装饰线 */}
      <div className="relative h-1.5 w-full overflow-hidden" aria-hidden>
        <div className="h-full w-full bg-gradient-to-r from-brand-900 via-accent to-brand-500 opacity-80" />
      </div>
    </section>
  );
}

const icons = [
  <Layers key={0} className="h-5 w-5 text-accent" />,
  <Cpu key={1} className="h-5 w-5 text-brand-300" />,
  <BarChart3 key={2} className="h-5 w-5 text-accent" />,
  <Sparkles key={3} className="h-5 w-5 text-brand-300" />,
];

function HighlightCard({
  item,
  index,
}: {
  item: (typeof profile.highlights)[number];
  index: number;
}) {
  return (
    <div className="group relative flex items-center gap-4 overflow-hidden rounded-card border border-white/10 bg-white/[0.06] p-5 shadow-card backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-white/[0.09]">
      <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-accent/10 blur-xl transition-opacity group-hover:opacity-80" aria-hidden />

      <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-accent/20">
        {icons[index]}
      </span>

      <div className="relative min-w-0">
        <div className="text-sm font-medium text-white/70">{item.label}</div>
        <div className="truncate text-lg font-bold text-white sm:text-xl">{item.value}</div>
      </div>
    </div>
  );
}
