// 职业经历
// 数据来源：reference/【简历】朱越洋_产品经理_7年经验.pdf
// 与真实企业项目通过 projectIds 关联（projectId 见 enterprise-projects.ts）

export interface Experience {
  experienceId: string;
  company: string;
  companyDesc: string; // 公司性质与规模（简历提供）
  role: string;
  period: string;
  industry: string;
  responsibilities: string[];
  achievements: string[]; // 有依据的代表成果
  projectIds: string[]; // 关联真实企业项目
}

export const experiences: Experience[] = [
  {
    experienceId: "exp-1",
    company: "广东东方思维科技有限公司",
    companyDesc: "省属国企广东省交通集团全资三级子公司，200 人以上",
    role: "产品经理",
    period: "2025.11 — 2026.05",
    industry: "企业数字化转型 / 经营决策",
    responsibilities: [
      "主导集团总部多个数字化转型产品及项目全流程建设，兼任项目经理与解决方案角色",
      "主导多个集团成员企业数字化转型产品及项目全流程建设，兼任项目经理、解决方案与售前角色",
      "参与集团“十五五”数智化转型规划文件编写、可研调研、工程造价评估与产品蓝图规划",
      "协助建设公司内部科研产品的市场化推广规划",
    ],
    achievements: [
      "同时跟进多个产品项目落地，涉及项目金额超 600 万元（总部）与超 400 万元（成员企业）",
      "负责经营管理与分析平台从 0-1 深度重构优化，参与集团“十五五”数智化转型规划编写",
    ],
    projectIds: ["proj-op-mgmt", "proj-yueyun-finance"],
  },
  {
    experienceId: "exp-2",
    company: "广州广电运通信息科技有限公司",
    companyDesc: "市属国企广州数字科技集团三级子公司，1000 人以上",
    role: "产品主管",
    period: "2023.04 — 2025.11",
    industry: "企业数字化转型 / 协同办公 / 经营决策",
    responsibilities: [
      "主导集团总部级数字化产品矩阵建设，从 0 到 1 深度建设多个关键业务系统",
      "独立负责从业务需求深度调研、竞品分析、功能规划、供应商选型与管理、原型设计、PRD 编写到测试验收、上线部署、推广运营的全流程",
      "在 1+4 平台梳理超 800 个指标逻辑，主导数据采集治理与可视化大屏设计",
      "成功管理大型系统集成（广数科对接国资云、1+4 平台整合多主题数据、土地物业系统对接集团决策平台及国资委智慧国资）",
    ],
    achievements: [
      "广数科 APP/PC 用户超 1 万、日活数千人，荣获 2025 年广东软件风云榜优秀信息技术应用创新产品",
      "在广数科规划落地 AI 场景赋能，搭建知识库 30 个、知识文档超 1500 份，集成 DeepSeek 智能问答、语音转写、内容摘要、数字人等",
    ],
    projectIds: ["proj-guangshuke", "proj-1plus4"],
  },
  {
    experienceId: "exp-3",
    company: "润建股份有限公司",
    companyDesc: "深交所上市，股票代码 002929，10000 人以上",
    role: "产品经理助理",
    period: "2020.05 — 2023.03",
    industry: "供应链 ERP 协同",
    responsibilities: [
      "独立负责供应链系统（物资管理、房屋、车辆、烟酒、合作伙伴管理）的需求调研、撰写、评审、研发跟进、验收测试与上线跟踪优化",
      "负责近 200 条 OA 审批流程配置及用户角色权限管理",
      "全程参与 SRM 系统的对比选型、项目立项、需求调研与业务梳理",
      "优化财务成本及支付数据核算规则，优化物资采购进销存管理",
    ],
    achievements: [
      "独立完成 10 多个 0-1 系统模块功能建设，平台年结算金额超 20 亿",
      "从 0-1 独立搭建个人物资货币化确认体系与进项税抵扣体系，货币化准确率及确认率达 95% 以上，账实相符率达 90% 以上",
    ],
    projectIds: ["proj-material", "proj-partner"],
  },
  {
    experienceId: "exp-4",
    company: "上海云砺信息科技有限公司",
    companyDesc: "独角兽企业，500-999 人",
    role: "产品专员",
    period: "2019.07 — 2020.02",
    industry: "智能硬件 / ODM",
    responsibilities: [
      "参与从 0 到 1 搭建开票机器人 ODM 商业闭环",
      "使用 Axure 设计微信小程序设备状态监控原型并跟进开发验证",
      "撰写产品宣传脚本、使用说明书、培训 PPT 及维护手册，驻场完成客户演示与运维团队培训",
    ],
    achievements: [
      "推动纸票开票机器人故障率从 3% 降至 0.4%，电票开票机器人响应时间缩短至 3 秒以内",
      "协助销售金额超 200 万元",
    ],
    projectIds: ["proj-invoice-robot"],
  },
];
