// 能力与工具
// 不使用没有依据的百分比熟练度进度条
// 对正在学习或实践中的工具标注"熟悉/实践中/持续学习"，不写"精通"

export interface SkillGroup {
  title: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "产品能力",
    items: [
      "需求分析",
      "产品规划",
      "业务流程设计",
      "B端产品设计",
      "原型与交互设计",
      "数据指标设计",
      "项目管理",
      "上线验收",
    ],
  },
  {
    title: "工具与平台",
    items: [
      "Axure",
      "Figma",
      "Visio",
      "Xmind",
      "Claude Code",
      "Coze",
      "Codex",
      "Trae",
      "Workbuddy",
    ],
  },
  {
    title: "AI 能力",
    items: [
      "AI 场景分析",
      "知识库设计",
      "Prompt 设计",
      "工作流编排",
      "模型输出结构化",
      "人工兜底设计",
      "AI 评测与迭代",
    ],
  },
  {
    title: "Vibe Coding 能力",
    items: [
      "需求文档编写",
      "页面结构设计",
      "Codex 协作开发",
      "接口联调",
      "测试验收",
      "Git 版本管理",
      "云端部署",
    ],
  },
];

// 工具掌握程度标注（针对部分工具，避免写"精通"）
export const toolProficiency: Record<string, string> = {
  Axure: "熟悉",
  Figma: "实践中",
  Visio: "熟悉",
  Xmind: "熟悉",
  "Claude Code": "持续学习",
  Coze: "熟悉",
  Codex: "实践中",
  Trae: "实践中",
  Workbuddy: "实践中",
};
