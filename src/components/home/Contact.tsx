import { Mail, Phone, MapPin, FileText, Sparkles, ArrowRight } from "lucide-react";
import { profile } from "@/data/profile";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { cn } from "@/lib/utils";

export function Contact() {
  const scrollToSection = useScrollToSection();
  const { contact, resumeUrl } = profile;

  return (
    <Section id="contact" tone="dark" className="relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="pointer-events-none absolute inset-0 bg-tech-grid-dark opacity-40" aria-hidden />
      <div className="pointer-events-none absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-accent/10 blur-[120px]" aria-hidden />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-brand-500/15 blur-[100px]" aria-hidden />

      <div className="relative">
        <SectionHeading eyebrow="06 CONTACT" title="期待与你交流" align="center" light>
          <p className="mx-auto mt-4 max-w-xl text-center text-base leading-relaxed text-white/70">
            目前正在寻找企业 AI 产品经理、AI 应用产品经理及企业数字化相关机会
          </p>
        </SectionHeading>

        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
          <ContactCard icon={<MapPin className="h-5 w-5" />} label="所在城市" value={contact.city} />
          <ContactCard
            icon={<Phone className="h-5 w-5" />}
            label="手机"
            value={contact.phone}
            href={`tel:${contact.phone}`}
          />
          <ContactCard
            icon={<Mail className="h-5 w-5" />}
            label="邮箱"
            value={contact.email}
            href={`mailto:${contact.email}`}
          />
          <ContactCard
            icon={<Sparkles className="h-5 w-5" />}
            label="求职方向"
            value={contact.jobDirection}
          />
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button as="a" href={resumeUrl} variant="accent" size="lg" target="_blank" rel="noopener noreferrer">
            <FileText className="h-4 w-4" aria-hidden />
            下载简历
          </Button>
          <Button variant="outline" size="lg" onClick={() => scrollToSection("works")} className="border-white/20 text-white hover:bg-white/10 hover:text-white">
            查看 AI 作品
          </Button>
          <Button as="a" href={`mailto:${contact.email}`} variant="primary" size="lg">
            <Mail className="h-4 w-4" aria-hidden />
            发送邮件
          </Button>
        </div>
      </div>
    </Section>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
  muted = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  muted?: boolean;
}) {
  const content = (
    <div className={cn(
      "group flex h-full items-center gap-3 rounded-card border p-4 backdrop-blur-sm transition-all",
      muted
        ? "border-white/5 bg-white/[0.04] hover:border-white/10"
        : "border-white/10 bg-white/[0.06] hover:border-accent/40 hover:bg-white/[0.10]"
    )}>
      <span className={cn(
        "flex h-11 w-11 shrink-0 items-center justify-center rounded-btn border transition-colors",
        muted
          ? "border-white/5 bg-white/5 text-white/40 group-hover:bg-white/10"
          : "border-white/10 bg-white/10 text-accent group-hover:bg-accent/20"
      )}>
        {icon}
      </span>
      <div className="min-w-0">
        <div className="text-xs font-medium text-white/60">{label}</div>
        <div className={cn("truncate text-sm font-semibold", muted ? "text-white/40" : "text-white")}>{value}</div>
      </div>
      {href && <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-white/40 transition-transform group-hover:translate-x-0.5" aria-hidden />}
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        className="block focus-visible:outline-none"
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }
  return content;
}
