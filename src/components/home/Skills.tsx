import { Lightbulb, Brain, Code2, Wrench } from "lucide-react";
import { skillGroups, toolProficiency } from "@/data/skills";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { cn } from "@/lib/utils";

const groupMeta: Record<string, { icon: React.ReactNode; color: string; gradient: string }> = {
  产品能力: {
    icon: <Lightbulb className="h-5 w-5" />,
    color: "text-blue-600",
    gradient: "from-blue-500 to-indigo-500",
  },
  "AI 能力": {
    icon: <Brain className="h-5 w-5" />,
    color: "text-accent-700",
    gradient: "from-accent to-emerald-400",
  },
  "Vibe Coding 能力": {
    icon: <Code2 className="h-5 w-5" />,
    color: "text-violet-600",
    gradient: "from-violet-500 to-fuchsia-500",
  },
  工具与平台: {
    icon: <Wrench className="h-5 w-5" />,
    color: "text-amber-600",
    gradient: "from-amber-500 to-orange-500",
  },
};

const levelWidth: Record<string, string> = {
  熟悉: "w-3/4",
  实践中: "w-1/2",
  持续学习: "w-1/3",
};
const levelColor: Record<string, string> = {
  熟悉: "bg-accent",
  实践中: "bg-brand-400",
  持续学习: "bg-brand-300",
};

export function Skills() {
  return (
    <Section id="skills" tone="card" grid>
      <SectionHeading eyebrow="05 SKILLS & TOOLS" title="能力与工具" />

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((g) => {
          const meta = groupMeta[g.title];
          return (
            <div
              key={g.title}
              className="group relative overflow-hidden rounded-card border border-surface-border bg-surface-card p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-card-hover"
            >
              {/* 顶部渐变装饰 */}
              <div className={cn("absolute left-0 right-0 top-0 h-1 bg-gradient-to-r opacity-80", meta.gradient)} aria-hidden />
              <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-brand-50 opacity-60 transition-opacity group-hover:opacity-100" aria-hidden />

              <div className="relative flex items-center gap-3">
                <span className={cn("flex h-10 w-10 items-center justify-center rounded-btn bg-brand-50", meta.color)}>
                  {meta.icon}
                </span>
                <h3 className="text-base font-bold text-brand">{g.title}</h3>
              </div>

              <ul className="relative mt-4 space-y-2">
                {g.items.map((item) => {
                  const level = toolProficiency[item];
                  return (
                    <li
                      key={item}
                      className="flex items-center justify-between gap-2 rounded-btn border border-surface-border bg-surface-page px-3 py-2 text-sm transition-colors hover:border-brand-200"
                    >
                      <span className="font-medium text-ink">{item}</span>
                      {level && (
                        <div className="flex shrink-0 items-center gap-2">
                          <div className="hidden h-1.5 w-16 overflow-hidden rounded-full bg-surface-border sm:block">
                            <span className={cn("block h-full rounded-full", levelWidth[level], levelColor[level])} aria-hidden />
                          </div>
                          <span className="text-xs font-semibold text-accent-700">{level}</span>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
