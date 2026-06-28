import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Info, CheckCircle2, CircleDashed, Clock, Bot } from "lucide-react";
import { cn } from "@/lib/utils";
import type { WorkDetail, DetailSection, WorkKey } from "@/data/ai-works";
import { Button } from "@/components/common/Button";
import { Tag } from "@/components/common/Tag";

const accentBar: Record<WorkKey, string> = {
  "customer-service": "bg-emerald-500",
  "contract-review": "bg-amber-500",
  "data-analysis": "bg-indigo-500",
};

const accentTone: Record<WorkKey, "cs" | "contract" | "data"> = {
  "customer-service": "cs",
  "contract-review": "contract",
  "data-analysis": "data",
};

const heroAccent: Record<WorkKey, { from: string; icon: React.ReactNode; glow: string }> = {
  "customer-service": {
    from: "from-emerald-500/20",
    icon: <Bot className="h-8 w-8" />,
    glow: "bg-emerald-500/20",
  },
  "contract-review": {
    from: "from-amber-500/20",
    icon: <CheckCircle2 className="h-8 w-8" />,
    glow: "bg-amber-500/20",
  },
  "data-analysis": {
    from: "from-indigo-500/20",
    icon: <Clock className="h-8 w-8" />,
    glow: "bg-indigo-500/20",
  },
};

interface WorkDetailLayoutProps {
  detail: WorkDetail;
  pageTitle: string;
}

export function WorkDetailLayout({ detail, pageTitle }: WorkDetailLayoutProps) {
  const accent = heroAccent[detail.key];
  const tone = accentTone[detail.key];

  return (
    <div className="bg-surface-page pb-16">
      {/* 顶部彩条 */}
      <span className={cn("block h-1.5 w-full", accentBar[detail.key])} aria-hidden />

      {/* 面包屑 */}
      <div className="mx-auto w-full max-w-content px-4 pt-6 sm:px-6 lg:px-8">
        <nav className="text-sm text-ink-soft" aria-label="面包屑">
          <Link to="/" className="hover:text-brand">
            AI 产品经理个人作品集
          </Link>
          <span className="mx-1" aria-hidden>
            /
          </span>
          <Link to="/#works" className="hover:text-brand">
            AI 独立作品
          </Link>
          <span className="mx-1" aria-hidden>
            /
          </span>
          <span className="font-medium text-brand">{detail.heroTitle}</span>
        </nav>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Link
            to="/#works"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-btn px-5 text-sm font-semibold text-ink transition-all hover:bg-brand-50 hover:text-brand"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            返回作品集
          </Link>
        </div>
      </div>

      {/* 项目首屏 */}
      <header className="relative mx-auto mt-6 w-full max-w-content overflow-hidden rounded-card px-4 text-white sm:px-6 lg:px-8">
        <div
          className={cn(
            "relative overflow-hidden rounded-card bg-gradient-to-br from-brand-900 via-brand-800 to-brand-900 p-6 sm:p-8 lg:p-10"
          )}
        >
          {/* 装饰 */}
          <div className={cn("pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full blur-3xl", accent.from)} aria-hidden />
          <div className={cn("pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full blur-3xl opacity-60", accent.glow)} aria-hidden />
          <div className="pointer-events-none absolute inset-0 bg-tech-grid-dark opacity-30" aria-hidden />

          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className={cn("flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white")}>
                  {accent.icon}
                </span>
                <span className="text-sm font-semibold text-accent">{detail.heroSubtitle}</span>
              </div>
              <h1 className="mt-3 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">{detail.heroTitle}</h1>
              <p className="mt-2 text-sm text-white/70 sm:text-base">{detail.heroMeta}</p>
              <span className="sr-only">{pageTitle}</span>
            </div>

            {detail.onlineUrl && (
              <Button
                as="a"
                href={detail.onlineUrl}
                variant="accent"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0"
              >
                <ExternalLink className="h-4 w-4" aria-hidden />
                在线体验
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* 项目性质说明 */}
      <section className="mx-auto mt-6 w-full max-w-content px-4 sm:px-6 lg:px-8">
        <div className="flex gap-4 rounded-card border border-accent-100 bg-gradient-to-r from-accent-50/70 to-surface-card p-5 shadow-sm">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-accent-700" aria-hidden />
          <div>
            <div className="text-sm font-bold text-brand">项目性质</div>
            <p className="mt-1 text-sm leading-relaxed text-ink">{detail.natureStatement}</p>
          </div>
        </div>
      </section>

      {/* 详情分区 */}
      <div className="mx-auto mt-8 w-full max-w-content space-y-6 px-4 sm:px-6 lg:px-8">
        {detail.sections.map((s, i) => (
          <DetailSectionBlock key={i} section={s} index={i + 1} accent={tone} />
        ))}

        {detail.implementationScope && (
          <ImplementationScope
            scope={detail.implementationScope}
            accent={tone}
            index={detail.sections.length}
          />
        )}
      </div>
    </div>
  );
}

function DetailSectionBlock({
  section,
  index,
  accent,
}: {
  section: DetailSection;
  index: number;
  accent: "cs" | "contract" | "data";
}) {
  return (
    <section className="group relative overflow-hidden rounded-card border border-surface-border bg-surface-card p-6 shadow-card transition-all hover:shadow-card-hover sm:p-7">
      {/* 顶部渐变线 */}
      <span className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-accent via-brand-400 to-brand-500" aria-hidden />

      <h2 className="flex items-center gap-3 text-lg font-bold text-brand">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand">
          {index.toString().padStart(2, "0")}
        </span>
        {section.title}
      </h2>

      {section.body && (
        <p className="mt-4 text-sm leading-relaxed text-ink sm:text-base">{section.body}</p>
      )}

      {section.list && (
        <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {section.list.map((it, i) => (
            <li key={i} className="flex gap-2 text-sm text-ink">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
              <span className="leading-relaxed">{it}</span>
            </li>
          ))}
        </ul>
      )}

      {section.table && (
        <div className="mt-4 overflow-x-auto rounded-btn border border-surface-border">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-brand-50 text-left">
                {section.table.head.map((h, i) => (
                  <th key={i} className="border-b border-surface-border px-3 py-2.5 font-bold text-brand">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.table.rows.map((row, ri) => (
                <tr key={ri} className="even:bg-surface-page">
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className={cn(
                        "border-b border-surface-border px-3 py-2.5 text-ink",
                        ci === 0 && "font-semibold text-brand"
                      )}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {section.note && (
        <p className="mt-4 flex gap-2 rounded-btn border border-accent-100 bg-accent-50/50 p-3 text-xs leading-relaxed text-ink-soft">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
          <span>{section.note}</span>
        </p>
      )}

      {accent && <Tag tone={accent} className="sr-only">作品标签</Tag>}
    </section>
  );
}

function ImplementationScope({
  scope,
  accent,
  index,
}: {
  scope: NonNullable<WorkDetail["implementationScope"]>;
  accent: "cs" | "contract" | "data";
  index: number;
}) {
  const cols: { title: string; items: string[]; tone: "success" | "contract" | "data"; label: string; icon: React.ReactNode }[] = [
    { title: "已实现", items: scope.implemented, tone: "success", label: "已实现", icon: <CheckCircle2 className="h-4 w-4" /> },
    { title: "模拟实现", items: scope.simulated, tone: "contract", label: "模拟实现", icon: <CircleDashed className="h-4 w-4" /> },
    { title: "暂未实现", items: scope.notImplemented, tone: "data", label: "暂未实现", icon: <Clock className="h-4 w-4" /> },
  ];
  return (
    <section className="relative overflow-hidden rounded-card border border-surface-border bg-surface-card p-6 shadow-card sm:p-7">
      <span className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-accent via-brand-400 to-brand-500" aria-hidden />
      <h2 className="flex items-center gap-3 text-lg font-bold text-brand">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand">
          {(index + 1).toString().padStart(2, "0")}
        </span>
        当前已实现范围
      </h2>
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {cols.map((c) => (
          <div key={c.title} className="rounded-btn border border-surface-border bg-surface-page p-4 transition-colors hover:border-accent/30">
            <Tag tone={c.tone}>
              {c.icon}
              {c.label}
            </Tag>
            <ul className="mt-3 space-y-1.5">
              {c.items.map((it, i) => (
                <li key={i} className="flex gap-2 text-sm text-ink">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-soft" aria-hidden />
                  <span className="leading-relaxed">{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {accent && <Tag tone={accent} className="sr-only">范围标签</Tag>}
    </section>
  );
}
