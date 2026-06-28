// 个人信息与基础数据
// 数据来源：reference/【简历】朱越洋_产品经理_7年经验.pdf

export interface ContactInfo {
  city: string;
  phone: string;
  email: string;
  wechat: string | null; // 简历未提供微信
  github: string | null; // 简历未提供 GitHub
  jobDirection: string;
}

export interface AbilityOverviewItem {
  label: string;
  value: string;
  hint?: string;
}

export interface ProfileData {
  name: string;
  age: number;
  title: string;
  yearsOfExperience: number;
  tagline: string;
  intro: string;
  highlights: AbilityOverviewItem[];
  contact: ContactInfo;
  resumeUrl: string;
  lastUpdated: string;
}

export const profile: ProfileData = {
  name: "朱越洋",
  age: 30,
  title: "AI 产品经理",
  yearsOfExperience: 7,
  tagline: "7年B端产品经验 · 专注企业AI产品设计与落地",
  intro:
    "7 年企业数字化产品经验，主导过协同办公、经营管理、风险管控、供应链与财务数据等多个 B 端复杂系统的从 0 到 1 建设与重构，覆盖国企、上市公司及独角兽企业。具备多端（Web、APP、PC、BI 大屏、小程序）产品设计与跨系统集成经验，能独立负责产品全生命周期管理。目前正在向企业 AI 产品经理方向转型，通过个人独立设计并使用 Vibe Coding 方式开发 AI 产品 Demo，实践从需求分析、工作流设计、Coze 编排、前端联调、测试到部署上线的完整过程。",
  highlights: [
    { label: "产品经验", value: "7 年" },
    { label: "企业项目", value: "10+个" },
    { label: "系统服务用户", value: "10000+人" },
    { label: "个人 AI 独立作品", value: "3个" },
  ],
  contact: {
    city: "广州市天河区",
    phone: "18520709280",
    email: "zyy0908email@163.com",
    wechat: null,
    github: null,
    jobDirection: "企业 AI 产品经理 / 企业数字化方向",
  },
  resumeUrl: "/resume-zhuyueyang.pdf",
  lastUpdated: "2026.06",
};
