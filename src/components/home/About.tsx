import { GraduationCap, MapPin, BriefcaseBusiness, Monitor, Workflow, Award } from "lucide-react";
import { profile } from "@/data/profile";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/common/SectionHeading";

const FEATURES = [
  {
    title: "多业务领域",
    detail: "协同办公 · 经营管理 · 供应链与财务",
    icon: BriefcaseBusiness,
  },
  {
    title: "多端产品",
    detail: "Web · APP · PC · BI大屏 · 小程序",
    icon: Monitor,
  },
  {
    title: "全流程",
    detail: "需求调研 → PRD → 验收 → 上线",
    icon: Workflow,
  },
  {
    title: "省级获奖",
    detail: "2025 广东软件风云榜 · 优秀产品",
    icon: Award,
  },
];

export function About() {
  return (
    <Section id="about" tone="page" grid>
      <SectionHeading eyebrow="01 ABOUT ME" title="关于我" />

      <div className="mt-10 overflow-hidden rounded-card border border-surface-border bg-surface-card shadow-card">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* 左侧：照片 + 姓名 */}
          <div className="flex flex-col items-center justify-center bg-gradient-to-b from-brand-50/60 to-surface-card p-6 sm:p-8 lg:col-span-4">
            <div className="overflow-hidden rounded-xl border-2 border-white bg-surface-page p-1.5 shadow-lg">
              <img
                src="/photo.jpg"
                alt="朱越洋证件照"
                className="max-h-[260px] w-auto rounded-lg object-contain"
              />
            </div>
            <div className="mt-5 text-center">
              <div className="text-2xl font-bold text-brand">{profile.name}</div>
              <div className="mt-1 text-sm font-semibold text-accent">{profile.title}</div>
            </div>
          </div>

          {/* 右侧：简介 + 标签 + 特征卡片 */}
          <div className="flex flex-col justify-center p-6 sm:p-8 lg:col-span-8">
            <p className="text-base leading-relaxed text-ink sm:text-lg">
              {profile.intro}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <InfoTag icon={<MapPin className="h-3.5 w-3.5" />} label="现居" value={profile.contact.city} />
              <InfoTag icon={<GraduationCap className="h-3.5 w-3.5" />} label="学历" value="湖北工业大学 · 本科" />
              <InfoTag icon={<BriefcaseBusiness className="h-3.5 w-3.5" />} label="履历" value="大型国企 · 上市公司 · 独角兽" />
            </div>

            {/* 4 个职业特征卡片 */}
            <div className="mt-8 grid grid-cols-1 gap-3 border-t border-surface-border pt-6 sm:grid-cols-2">
              {FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="group flex items-center gap-3 rounded-btn border border-surface-border bg-surface-page p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-sm"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand transition-colors group-hover:bg-accent/20 group-hover:text-accent">
                    <f.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <div className="text-sm font-bold text-brand">{f.title}</div>
                    <div className="truncate text-xs text-ink-soft">{f.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function InfoTag({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface-page px-3 py-1.5 text-sm">
      <span className="text-accent">{icon}</span>
      <span className="text-ink-soft">{label}</span>
      <span className="font-semibold text-ink">{value}</span>
    </div>
  );
}
