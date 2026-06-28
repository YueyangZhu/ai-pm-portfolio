import { Building2, ChevronRight } from "lucide-react";
import { experiences } from "@/data/experiences";
import { enterpriseProjects } from "@/data/enterprise-projects";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { useProjectSelection } from "@/hooks/useProjectSelection";

export function Experience() {
  return (
    <Section id="experience" tone="tint" grid>
      <SectionHeading eyebrow="02 EXPERIENCE" title="职业经历" />

      <ol className="relative mt-10 space-y-8 lg:space-y-10" aria-label="职业经历时间轴">
        {/* 中央渐变轴线（桌面端） */}
        <span
          className="pointer-events-none absolute left-[9px] top-2 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-accent via-brand-300 to-transparent sm:left-[11px] sm:block lg:left-[15px]"
          aria-hidden
        />

        {experiences.map((exp, idx) => (
          <TimelineItem key={exp.experienceId} exp={exp} isLast={idx === experiences.length - 1} />
        ))}
      </ol>
    </Section>
  );
}

function TimelineItem({
  exp,
  isLast,
}: {
  exp: (typeof experiences)[number];
  isLast: boolean;
}) {
  const scrollToSection = useScrollToSection();
  const selectProject = useProjectSelection((s) => s.selectProject);

  const relatedProjects = exp.projectIds
    .map((pid) => enterpriseProjects.find((p) => p.projectId === pid))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const handleProjectClick = (projectId: string) => {
    selectProject(projectId, { highlight: true });
    scrollToSection("projects");
  };

  return (
    <li className="relative pl-10 sm:pl-44 lg:pl-48">
      {/* 时间轴节点 */}
      <span
        className="absolute left-0 top-1.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-accent bg-surface-card shadow-[0_0_0_4px_rgba(0,212,170,0.12)] sm:h-6 sm:w-6"
        aria-hidden
      >
        <span className="h-2 w-2 rounded-full bg-accent" />
      </span>

      {/* 桌面端：时间标签放在时间轴旁 */}
      <span className="absolute left-8 top-1.5 hidden max-w-[10rem] items-center gap-1.5 overflow-hidden text-ellipsis whitespace-nowrap rounded-full border border-accent-100 bg-accent-50 px-3 py-0.5 text-xs font-semibold text-accent-700 sm:inline-flex">
        {exp.period}
      </span>

      {/* 卡片 */}
      <div className="group relative overflow-hidden rounded-card border border-surface-border bg-surface-card p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-card-hover sm:p-6">
        <span
          className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-50 opacity-60 transition-opacity group-hover:opacity-100"
          aria-hidden
        />

        <div className="relative">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="text-lg font-bold text-brand sm:text-xl">{exp.company}</h3>
            {/* 移动端：时间标签保留在卡片内 */}
            <span className="rounded-full border border-accent-100 bg-accent-50 px-3 py-0.5 text-sm font-semibold text-accent-700 sm:hidden">
              {exp.period}
            </span>
          </div>

          <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-ink-soft">
            <span>{exp.companyDesc}</span>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-soft">
            <span className="inline-flex items-center gap-1.5 font-semibold text-brand">
              <Building2 className="h-4 w-4 text-accent" aria-hidden />
              {exp.role}
            </span>
            <span aria-hidden className="text-ink-muted">·</span>
            <span>{exp.industry}</span>
          </div>

          {/* 主要职责 */}
          <div className="mt-5">
            <h4 className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-ink-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-300" aria-hidden />
              主要职责
            </h4>
            <ul className="mt-2 space-y-1.5">
              {exp.responsibilities.map((r, i) => (
                <li key={i} className="flex gap-2 text-sm text-ink">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-200" aria-hidden />
                  <span className="leading-relaxed">{r}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 代表成果 */}
          <div className="mt-4">
            <h4 className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-ink-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              代表成果
            </h4>
            <ul className="mt-2 space-y-1.5">
              {exp.achievements.map((a, i) => (
                <li key={i} className="flex gap-2 text-sm text-ink">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  <span className="leading-relaxed">{a}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 代表项目 */}
          {relatedProjects.length > 0 && (
            <div className="mt-4">
              <h4 className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-ink-soft">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden />
                代表项目
              </h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {relatedProjects.map((p) => (
                  <button
                    key={p.projectId}
                    onClick={() => handleProjectClick(p.projectId)}
                    className="group/btn inline-flex items-center gap-1 rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-sm font-medium text-brand-700 transition-all hover:border-accent hover:bg-accent-50 hover:text-accent-700"
                    aria-label={`查看代表项目 ${p.name}`}
                  >
                    {p.name}
                    <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" aria-hidden />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 移动端连线 */}
      {!isLast && (
        <span className="absolute left-[9px] top-8 block h-[calc(100%+1.5rem)] w-px bg-surface-border sm:hidden" aria-hidden />
      )}
    </li>
  );
}
