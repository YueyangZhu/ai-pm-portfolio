import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, CheckCircle2, TrendingUp, Users, Truck, Calculator } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  enterpriseProjects,
  projectCategories,
  type ProjectCategory,
} from "@/data/enterprise-projects";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Tag } from "@/components/common/Tag";
import { useProjectSelection } from "@/hooks/useProjectSelection";

type Filter = "全部" | ProjectCategory;
const FILTERS: Filter[] = ["全部", ...projectCategories];

const categoryMeta: Record<ProjectCategory, { icon: React.ReactNode; color: string; bg: string; border: string }> = {
  经营管理: { icon: <TrendingUp className="h-4 w-4" />, color: "text-blue-700", bg: "bg-blue-50", border: "border-blue-100" },
  协同办公: { icon: <Users className="h-4 w-4" />, color: "text-emerald-700", bg: "bg-emerald-50", border: "border-emerald-100" },
  供应链: { icon: <Truck className="h-4 w-4" />, color: "text-amber-700", bg: "bg-amber-50", border: "border-amber-100" },
  "财务与数据": { icon: <Calculator className="h-4 w-4" />, color: "text-violet-700", bg: "bg-violet-50", border: "border-violet-100" },
};

export function EnterpriseProjects() {
  const [filter, setFilter] = useState<Filter>("全部");

  const filtered = useMemo(
    () =>
      filter === "全部"
        ? enterpriseProjects
        : enterpriseProjects.filter((p) => p.category === filter),
    [filter]
  );

  const selectedProjectId = useProjectSelection((s) => s.selectedProjectId);
  const selectProject = useProjectSelection((s) => s.selectProject);
  const highlightNonce = useProjectSelection((s) => s.highlightNonce);

  const currentId =
    selectedProjectId && filtered.some((p) => p.projectId === selectedProjectId)
      ? selectedProjectId
      : filtered[0]?.projectId ?? "";

  const current =
    enterpriseProjects.find((p) => p.projectId === currentId) ?? filtered[0];

  useEffect(() => {
    if (current && current.projectId !== currentId) {
      selectProject(current.projectId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  return (
    <Section id="projects" tone="page" grid>
      <SectionHeading eyebrow="03 ENTERPRISE PROJECTS" title="企业数字化项目经验" />

      {/* 分类筛选 */}
      <div
        className="mt-8 flex flex-wrap gap-2"
        role="tablist"
        aria-label="项目分类筛选"
      >
        {FILTERS.map((f) => {
          const active = filter === f;
          return (
            <button
              key={f}
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm font-semibold transition-all",
                active
                  ? "border-brand bg-brand text-white shadow-md"
                  : "border-surface-border bg-surface-card text-ink hover:border-accent hover:bg-accent-50/50 hover:text-brand"
              )}
            >
              {f}
            </button>
          );
        })}
      </div>

      {/* 桌面端：左列表 + 右详情 */}
      <div className="mt-6 hidden gap-6 lg:grid lg:grid-cols-10">
        <ProjectListDesktop
          projects={filtered}
          currentId={current?.projectId ?? ""}
          onSelect={(id) => selectProject(id)}
        />
        <div className="lg:col-span-7">
          {current && (
            <ProjectDetailCard
              project={current}
              highlightNonce={highlightNonce}
            />
          )}
        </div>
      </div>

      {/* 移动端：手风琴 */}
      <div className="mt-6 lg:hidden">
        <ProjectAccordion
          projects={filtered}
          currentId={current?.projectId ?? ""}
          highlightNonce={highlightNonce}
          onSelect={(id) => selectProject(id)}
        />
      </div>
    </Section>
  );
}

function ProjectListDesktop({
  projects,
  currentId,
  onSelect,
}: {
  projects: typeof enterpriseProjects;
  currentId: string;
  onSelect: (id: string) => void;
}) {
  const refs = useRef<Record<string, HTMLButtonElement | null>>({});

  const handleKeyDown = (e: React.KeyboardEvent, idx: number) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      const next = projects[idx + 1];
      if (next) {
        onSelect(next.projectId);
        refs.current[next.projectId]?.focus();
      }
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      const prev = projects[idx - 1];
      if (prev) {
        onSelect(prev.projectId);
        refs.current[prev.projectId]?.focus();
      }
    }
  };

  return (
    <div
      className="lg:col-span-3"
      role="tablist"
      aria-label="企业项目列表"
    >
      <ul className="space-y-3">
        {projects.map((p, idx) => {
          const active = p.projectId === currentId;
          const meta = categoryMeta[p.category];
          return (
            <li key={p.projectId}>
              <button
                ref={(el) => {
                  refs.current[p.projectId] = el;
                }}
                role="tab"
                aria-selected={active}
                aria-controls={`panel-${p.projectId}`}
                id={`tab-${p.projectId}`}
                onClick={() => onSelect(p.projectId)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                className={cn(
                  "group relative w-full overflow-hidden rounded-btn border px-4 py-3 text-left transition-all",
                  active
                    ? "border-brand bg-brand text-white shadow-card"
                    : "border-surface-border bg-surface-card hover:border-accent/50 hover:bg-brand-50/60"
                )}
              >
                {active && (
                  <span className="absolute left-0 top-0 h-full w-1 bg-accent" aria-hidden />
                )}
                <div className={cn("text-sm font-semibold", active ? "text-white" : "text-brand")}>
                  {p.name}
                </div>
                <div className={cn("mt-1 flex items-center gap-1.5 text-xs", active ? "text-white/80" : "text-ink-soft")}>
                  <span className={cn("inline-flex items-center gap-1 rounded-full border px-1.5 py-0.5", active ? "border-white/20 bg-white/10" : cn(meta.bg, meta.border, meta.color))}>
                    {meta.icon}
                    {p.category}
                  </span>
                  <span aria-hidden>·</span>
                  <span>{p.period}</span>
                </div>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function ProjectDetailCard({
  project,
  highlightNonce,
}: {
  project: (typeof enterpriseProjects)[number];
  highlightNonce: number;
}) {
  const [highlight, setHighlight] = useState(false);
  const meta = categoryMeta[project.category];

  useEffect(() => {
    if (highlightNonce === 0) return;
    setHighlight(true);
    const t = setTimeout(() => setHighlight(false), 1200);
    return () => clearTimeout(t);
  }, [highlightNonce]);

  return (
    <article
      id={`panel-${project.projectId}`}
      role="tabpanel"
      aria-labelledby={`tab-${project.projectId}`}
      className={cn(
        "animate-fade-in relative overflow-hidden rounded-card border bg-surface-card p-0 shadow-card transition-all",
        highlight ? "border-accent ring-2 ring-accent/40" : "border-surface-border"
      )}
    >
      {/* 头部彩条与背景 */}
      <div className="relative overflow-hidden border-b border-surface-border bg-gradient-to-r from-brand-50 via-surface-card to-brand-50/50 p-6 sm:p-7">
        <span className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-accent to-brand-500" aria-hidden />
        <span className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/5" aria-hidden />

        <header className="relative flex flex-wrap items-start justify-between gap-x-4 gap-y-3">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className={cn("inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold", meta.bg, meta.border, meta.color)}>
                {meta.icon}
                {project.category}
              </span>
              <span className="text-sm font-medium text-accent-700">{project.period}</span>
            </div>
            <h3 className="mt-2 text-xl font-bold text-brand sm:text-2xl">{project.name}</h3>
            <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-soft">
              <span className="font-medium text-brand">{project.company}</span>
              <span aria-hidden>·</span>
              <span>{project.industry}</span>
            </div>
          </div>

        </header>
      </div>

      <div className="p-6 pt-5 sm:p-7 sm:pt-6">
        <div className="space-y-5">
          <DetailBlock title="业务背景" text={project.background} />
          <DetailList title="本人职责" items={project.responsibilities} bulletColor="brand" />
          <DetailList title="核心工作 / 解决方案" items={project.coreWork} bulletColor="accent" />
          <div>
            <h4 className="inline-flex items-center gap-1.5 text-sm font-bold text-brand">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              项目成果
            </h4>
            <ul className="mt-2 space-y-1.5">
              {project.outcomes.map((o, i) => (
                <li key={i} className="flex gap-2 text-sm text-ink">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                  <span className="leading-relaxed">{o}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="inline-flex items-center gap-1.5 text-sm font-bold text-brand">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400" aria-hidden />
              能力标签
            </h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <Tag key={t} tone="brand">
                  {t}
                </Tag>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function DetailBlock({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h4 className="inline-flex items-center gap-1.5 text-sm font-bold text-brand">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-300" aria-hidden />
        {title}
      </h4>
      <p className="mt-2 text-sm leading-relaxed text-ink">{text}</p>
    </div>
  );
}

function DetailList({
  title,
  items,
  bulletColor,
}: {
  title: string;
  items: string[];
  bulletColor: "brand" | "accent";
}) {
  return (
    <div>
      <h4 className="inline-flex items-center gap-1.5 text-sm font-bold text-brand">
        <span
          className={cn(
            "h-1.5 w-1.5 rounded-full",
            bulletColor === "accent" ? "bg-accent" : "bg-brand-300"
          )}
          aria-hidden
        />
        {title}
      </h4>
      <ul className="mt-2 space-y-1.5">
        {items.map((it, i) => (
          <li key={i} className="flex gap-2 text-sm text-ink">
            <span
              className={cn(
                "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full",
                bulletColor === "accent" ? "bg-accent" : "bg-brand-300"
              )}
              aria-hidden
            />
            <span className="leading-relaxed">{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectAccordion({
  projects,
  currentId,
  onSelect,
  highlightNonce,
}: {
  projects: typeof enterpriseProjects;
  currentId: string;
  onSelect: (id: string) => void;
  highlightNonce: number;
}) {
  const [openId, setOpenId] = useState<string>(currentId);

  useEffect(() => {
    if (currentId) setOpenId(currentId);
  }, [currentId, highlightNonce]);

  return (
    <ul className="space-y-3" aria-label="企业项目列表（手风琴）">
      {projects.map((p) => {
        const open = p.projectId === openId;
        const meta = categoryMeta[p.category];
        return (
          <li
            key={p.projectId}
            className={cn(
              "overflow-hidden rounded-card border bg-surface-card transition-all",
              open ? "border-accent shadow-card" : "border-surface-border"
            )}
          >
            <button
              onClick={() => {
                const next = open ? "" : p.projectId;
                setOpenId(p.projectId === openId ? "" : p.projectId);
                if (next) onSelect(p.projectId);
              }}
              aria-expanded={open}
              aria-controls={`acc-panel-${p.projectId}`}
              className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
            >
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-brand">{p.name}</span>
                <span className="mt-0.5 flex flex-wrap items-center gap-1.5 text-xs text-ink-soft">
                  <span className={cn("inline-flex items-center gap-1 rounded-full border px-1.5 py-0.5", meta.bg, meta.border, meta.color)}>
                    {meta.icon}
                    {p.category}
                  </span>
                  <span>· {p.period}</span>
                </span>
              </span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 text-ink-soft transition-transform",
                  open && "rotate-180 text-accent"
                )}
                aria-hidden
              />
            </button>
            {open && (
              <div id={`acc-panel-${p.projectId}`} className="animate-slide-down px-4 pb-4">
                <ProjectDetailCard project={p} highlightNonce={0} />
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
