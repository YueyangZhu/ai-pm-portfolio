// AI 独立作品
// 三个项目均为个人独立设计与开发的作品集 Demo，不属于过往公司的真实商业项目
// 客服详情数据来源：reference/言析智能客服_Coze核心流程设计文档.docx
// 合同审核（开发中）与数据分析（规划中）依据产品构想设计，不伪造已实现内容

export type WorkStatus = "online" | "developing" | "planning";
export type WorkKey = "customer-service" | "contract-review" | "data-analysis";

export interface WorkCard {
  key: WorkKey;
  slug: string; // 路由
  accent: "cs" | "contract" | "data"; // 差异化辅助色
  status: WorkStatus;
  statusLabel: string;
  tags: string[]; // 卡片标签
  title: string;
  description: string;
  techTags: string[];
  detailPath: string;
  onlineUrl?: string; // 在线体验地址（仅客服有）
  coverImage?: string; // 卡片封面图（客服引用截图文件名，当前模型无法读取）
}

export interface DetailSection {
  title: string;
  body?: string; // 段落正文
  list?: string[]; // 列表项
  table?: { head: string[]; rows: string[][] }; // 表格
  note?: string; // 高亮说明
}

export interface WorkDetail {
  key: WorkKey;
  breadcrumb: string; // 顶部面包屑
  heroTitle: string;
  heroSubtitle: string;
  heroMeta: string; // 辅助信息
  natureStatement: string; // 项目性质说明
  sections: DetailSection[];
  onlineUrl?: string;
  implementationScope?: {
    implemented: string[];
    simulated: string[];
    notImplemented: string[];
  };
}

export const aiWorks: WorkCard[] = [
  {
    key: "customer-service",
    slug: "customer-service",
    accent: "cs",
    status: "online",
    statusLabel: "已上线",
    tags: ["个人独立项目", "已上线"],
    title: "言析智能客服",
    description:
      "基于典型电商售后场景构建的智能客服 Demo，覆盖意图识别、知识问答、订单与退款场景路由、人工转接、工单处理和服务评价。",
    techTags: ["Coze", "React", "CloudBase", "Vibe Coding"],
    detailPath: "/works/customer-service",
    onlineUrl: "https://zyy-d1g23eauv3b1b3549-1324088997.tcloudbaseapp.com",
    coverImage: "言析智能客服_首页.png",
  },
  {
    key: "contract-review",
    slug: "contract-review",
    accent: "contract",
    status: "developing",
    statusLabel: "开发中",
    tags: ["个人独立项目", "开发中"],
    title: "智能合同审核",
    description:
      "面向企业合同审核场景规划的 AI 产品 Demo，重点验证合同解析、风险识别、条款定位、修改建议和审核报告生成能力。",
    techTags: ["AI 解析", "风险识别", "产品构想"],
    detailPath: "/works/contract-review",
  },
  {
    key: "data-analysis",
    slug: "data-analysis",
    accent: "data",
    status: "planning",
    statusLabel: "规划中",
    tags: ["个人独立项目", "规划中"],
    title: "智能数据分析",
    description:
      "面向企业经营分析场景规划的 AI 产品 Demo，重点验证自然语言问数、指标分析、图表生成和异常归因能力。",
    techTags: ["NL2SQL", "指标分析", "产品构想"],
    detailPath: "/works/data-analysis",
  },
];

export const aiWorkDisclaimer =
  "以下项目均为个人独立设计与开发的 AI 产品 Demo，用于展示产品设计、工作流编排与 Vibe Coding 实践能力，不属于本人过往公司的真实商业项目。";

export const footerDisclaimer =
  "作品集中的 AI Demo 主要使用模拟业务流程和演示数据，用于展示产品设计与 Vibe Coding 实践能力。";

// 客服详情页
const customerServiceDetail: WorkDetail = {
  key: "customer-service",
  breadcrumb: "AI 产品经理个人作品集 / 言析智能客服",
  heroTitle: "言析智能客服",
  heroSubtitle: "个人独立 AI 产品 Demo",
  heroMeta: "产品设计 · Coze 工作流 · Vibe Coding · CloudBase 部署",
  natureStatement:
    "本项目为个人独立设计与开发的作品集 Demo，基于典型电商售后业务场景构建，不对应真实商业客户。项目中的订单、退款、工单及运营数据主要为模拟数据。",
  onlineUrl: "https://zyy-d1g23eauv3b1b3549-1324088997.tcloudbaseapp.com",
  sections: [
    {
      title: "业务场景",
      body: "围绕电商售后高频场景设计，覆盖从商品/政策咨询到人工兜底与服务评价的完整链路：",
      list: [
        "商品或售后政策咨询（退货政策、保修等）",
        "订单物流查询",
        "退款进度查询",
        "退款申请",
        "投诉处理",
        "转人工服务",
        "用户评价",
      ],
    },
    {
      title: "Coze 能力设计",
      body: "系统把识别、生成、业务查询与数据存储解耦。Coze 负责判断与表达，业务事实由业务系统返回，重点体现：",
      list: [
        "消息意图识别（understand_message 工作流）",
        "订单号等实体提取",
        "用户情绪判断（calm / anxious / angry）",
        "风险等级判断（low / medium / high）",
        "知识库问答（混合检索，最多 5 条，最低匹配度 0.50）",
        "对话分支路由（主对话流 after_sales_chat）",
        "转人工摘要（generate_handoff_summary 工作流）",
        "服务结果分析（analyze_service_result 工作流）",
      ],
    },
    {
      title: "系统职责边界",
      table: {
        head: ["系统模块", "核心职责", "不负责的事情"],
        rows: [
          [
            "Coze",
            "意图/实体/情绪/风险识别；知识问答；对话路由；人工摘要与结果分析",
            "不保存完整业务主数据，不直接承诺订单或退款结果",
          ],
          [
            "CloudBase",
            "网页 API、会话与消息、模拟订单、退款、工单、评价、数据分析",
            "不承担自然语言理解和知识生成",
          ],
          [
            "React 网页",
            "用户聊天、退款表单、工单状态、客服工作台、运营看板",
            "不保存 Coze 密钥，不直接调用敏感服务",
          ],
          [
            "飞书",
            "同步高优工单、低评分、知识缺口、运营日报（设计能力）",
            "不是完整消息数据库，不作为唯一数据源",
          ],
        ],
      },
      note: "飞书同步为设计文档中的规划能力，当前标注为设计能力，不代表已正式上线实现。",
    },
    {
      title: "核心设计原则",
      list: [
        "高风险问题优先转人工：投诉、金额争议、主动要求人工等高风险信号覆盖普通意图，避免把投诉误送入普通知识问答",
        "AI 模型不编造订单、退款、金额和物流事实：知识不足时明确说明并转人工",
        "业务事实由业务系统返回：订单/退款结果必须来自 CloudBase",
        "消息理解结果使用结构化字段输出：8 个标准字段供后续分支与业务系统稳定消费",
        "转人工时生成可快速阅读的会话摘要：客服可在 10 秒内读完交接摘要，避免用户重复描述",
        "用户评价后进行服务结果分析：判断是否解决、失败阶段、是否存在知识缺口",
        "识别知识缺口并支持后续优化：把差评转化为知识、流程或人工服务优化任务",
      ],
    },
    {
      title: "用户操作流程",
      body: "从用户提问到服务评价与知识回流的完整闭环：",
      list: [
        "用户提问",
        "消息理解（understand_message：意图、订单号、情绪、风险、置信度、动作）",
        "意图和风险判断（need_handoff 优先级最高）",
        "分支路由：知识问答 / 订单 / 退款 / 人工",
        "业务系统处理（CloudBase 查询或写入）",
        "返回结果（结构化 answer + action）",
        "用户评价（评分 1-5 + 评论）",
        "服务结果分析（analyze_service_result：是否解决、失败原因、知识缺口）",
      ],
      note: "understand_message 输出 intent / confidence / order_no / emotion / risk_level / need_handoff / handoff_reason / action 共 8 个标准字段。",
    },
    {
      title: "意图与动作映射",
      table: {
        head: ["intent", "中文", "action", "后续处理"],
        rows: [
          ["product_consultation", "商品/政策咨询", "search_knowledge", "检索知识库"],
          ["logistics_query", "物流/订单查询", "query_order", "CloudBase 查询订单"],
          ["refund_progress", "退款进度", "query_refund", "CloudBase 查询退款"],
          ["refund_apply", "申请退款", "show_refund_form", "网页展示退款表单"],
          ["complaint", "投诉/强烈不满", "create_ticket", "创建人工工单"],
          ["human_service", "主动要求人工", "create_ticket", "创建人工工单"],
          ["unknown", "无法识别", "create_ticket", "记录知识缺口并转人工"],
        ],
      },
    },
    {
      title: "分支优先级（主对话流 after_sales_chat）",
      table: {
        head: ["优先级", "条件", "处理链路", "最终回答"],
        rows: [
          ["1", "need_handoff = true", "回复转人工提示", "告知已转人工并创建工单"],
          ["2", "intent = product_consultation", "检索知识 → 生成回答 → 回复知识答案", "基于知识库的政策说明"],
          ["3", "intent = logistics_query", "生成业务引导 → 回复业务引导", "确认订单号并提示查询"],
          ["4", "intent = refund_progress", "生成业务引导 → 回复业务引导", "确认订单号并提示查询退款"],
          ["5", "intent = refund_apply", "生成业务引导 → 回复业务引导", "引导网页展示退款表单"],
          ["Else", "其他情况", "回复转人工提示", "兜底，避免无答案"],
        ],
      },
    },
    {
      title: "转人工摘要输出字段",
      body: "generate_handoff_summary 把完整对话压缩成客服可在 10 秒内读完的交接摘要：",
      table: {
        head: ["输出字段", "中文含义", "进入工单后的用途"],
        rows: [
          ["summary", "对话摘要", "工单摘要区"],
          ["customer_request", "客户最终诉求", "客服首先确认处理目标"],
          ["key_facts", "关键事实", "订单号、等待时长、争议点"],
          ["completed_actions", "已完成动作", "避免重复执行"],
          ["pending_action", "下一步待处理事项", "客服处理清单"],
          ["priority", "优先级 low/medium/high", "工单排序与 SLA"],
        ],
      },
      note: "防幻觉约束：摘要只能使用输入中明确出现的信息，不能把“准备查询”写成“已经查询完成”，不能编造订单、金额或处理结论。",
    },
    {
      title: "服务结果分析输出字段",
      body: "analyze_service_result 在用户评价或会话结束后运行，形成优化闭环：",
      table: {
        head: ["输出字段", "中文含义", "可能值/示例"],
        rows: [
          ["outcome", "服务结果", "solved / unsolved / partial"],
          ["failure_reason", "失败原因", "knowledge_gap / wrong_intent / handoff_delay 等"],
          ["responsible_stage", "主要责任环节", "knowledge_retrieval / human_service 等"],
          ["knowledge_gap", "是否知识缺口", "true / false"],
          ["gap_question", "需要补充知识库的问题", "会员生日礼物怎么领取"],
          ["optimization", "优化建议", "补充知识、调整路由、改善客服 SLA"],
          ["analysis_summary", "分析摘要", "用于运营后台与日报"],
        ],
      },
    },
    {
      title: "端到端案例",
      body: "三类典型交互的真实流转：",
      list: [
        "案例 A 知识咨询：用户询问退货政策 → understand_message 返回 product_consultation + search_knowledge → 检索售后知识库生成基于政策的答案 → CloudBase 保存消息与知识来源 → 用户评分",
        "案例 B 订单物流：用户提供订单号询问 → 识别 logistics_query + query_order → Coze 只返回查询引导，不编造物流状态 → 网页按 action 调用 CloudBase 订单查询 → 渲染真实模拟订单卡片",
        "案例 C 投诉并要求人工：识别 complaint、angry、high、need_handoff = true → 优先进入人工分支并回复已转接 → 调用 generate_handoff_summary 生成 high 优先级摘要 → CloudBase 创建工单，人工工作台接单回复 → 用户评价后调用 analyze_service_result，必要时记录知识缺口",
      ],
    },
    {
      title: "本人完成的工作",
      list: [
        "产品定位和电商售后场景设计",
        "用户流程和功能规划",
        "Coze 主对话流（after_sales_chat）设计",
        "Coze 三个工作流设计（understand_message / generate_handoff_summary / analyze_service_result）",
        "知识库与变量字典设计（英文变量作为模块统一语言，文档与界面使用中文解释）",
        "前端页面需求和交互设计",
        "使用 Codex 辅助完成前端代码开发、调试与部署",
        "CloudBase 接入和部署",
        "测试和演示流程设计",
      ],
      note: "不写“独立手写全部代码”。准确表述为：使用 Codex 辅助完成前端代码开发、调试与部署。",
    },
    {
      title: "设计亮点与体现的 AI 产品能力",
      table: {
        head: ["亮点", "体现的 AI 产品能力"],
        rows: [
          ["统一结构化输出", "把模型能力变成可被前端和业务系统稳定消费的接口"],
          ["高风险优先转人工", "把用户体验、合规与业务风险放在普通问答之前"],
          ["模型不编造业务事实", "订单、退款结果必须来自业务系统"],
          ["CloudBase 唯一主数据源", "避免数据库与飞书重复存储导致不一致"],
          ["服务结果自动归因", "把差评转化为知识、流程或人工服务优化任务"],
          ["可评测、可迭代", "每个工作流可独立测试，主对话流可用 50+ 问题回归"],
        ],
      },
    },
  ],
  implementationScope: {
    implemented: [
      "Coze 主对话流 after_sales_chat 与三个工作流（understand_message / generate_handoff_summary / analyze_service_result）",
      "知识库问答分支（混合检索 + 政策说明回答）",
      "订单/退款业务引导与查询引导（Coze 不编造业务事实）",
      "CloudBase 会话、消息、模拟订单、退款、工单、评价的数据读写",
      "React 用户客服聊天页与人工客服工作台（接单、回复、关闭、用户确认闭环）",
      "运营看板（解决率、转人工率、满意度、知识缺口展示）",
    ],
    simulated: [
      "订单、退款、工单、评价等业务数据（基于电商售后典型场景的模拟/演示数据）",
      "订单号、商品、物流等业务事实",
    ],
    notImplemented: [
      "飞书高优工单、低评分、知识缺口、运营日报的正式同步（设计文档中为规划能力，未标注为已上线）",
      "不少于 50 条问题评测的完整回归报告（设计文档列为下一阶段实施顺序的验收任务）",
      "作品集演示视频录制",
    ],
  },
};

const contractReviewDetail: WorkDetail = {
  key: "contract-review",
  breadcrumb: "AI 产品经理个人作品集 / 智能合同审核",
  heroTitle: "智能合同审核",
  heroSubtitle: "个人独立 AI 产品 Demo（开发中）",
  heroMeta: "产品方案 · 风险识别 · 开发规划",
  natureStatement:
    "本项目为个人独立设计与开发的作品集 Demo，面向企业合同审核场景规划。当前页面展示产品方案和开发规划，不代表全部功能已经实现。",
  sections: [
    {
      title: "项目性质说明",
      note: "当前页面展示产品方案和开发规划，不代表全部功能已经实现。",
    },
    {
      title: "为什么做这个作品",
      body: "合同审核是企业风控与法务的高频且高成本环节。传统人工审核依赖经验、效率受限、易遗漏风险条款。本作品试图验证 AI 在合同解析、风险条款定位与修改建议上的产品化能力，把法务经验沉淀为可复用的审核规则与模型能力。",
    },
    {
      title: "典型业务场景",
      list: [
        "采购/销售合同的合规性审核",
        "付款条款、违约责任、知识产权等关键条款的风险识别",
        "标准合同模板与实际合同差异比对",
        "合同审批流程中的风险预警",
      ],
    },
    {
      title: "目标用户",
      list: ["企业法务/合同管理员", "业务部门合同发起人", "管理层（关注合同风险概况）"],
    },
    {
      title: "计划实现的核心功能",
      note: "以下能力均为计划实现，当前未全部完成开发。",
      list: [
        "合同上传（PDF/Word/图片）",
        "文件解析与文本结构化",
        "合同类型识别",
        "风险条款定位",
        "风险等级判断（高/中/低）",
        "原文与建议对照",
        "修改建议生成",
        "审核报告生成",
        "历史审核记录",
      ],
    },
    {
      title: "用户操作流程（计划）",
      list: [
        "上传合同文件",
        "系统解析并识别合同类型",
        "自动定位风险条款并判断风险等级",
        "原文与修改建议对照展示",
        "生成审核报告",
        "归档至历史审核记录",
      ],
    },
    {
      title: "AI 能力设计（计划）",
      list: [
        "合同解析与结构化（条款切分、要素提取）",
        "风险条款识别与分类",
        "风险等级判断",
        "修改建议生成（基于规则库 + 模型）",
        "审核结论与报告生成",
      ],
    },
    {
      title: "当前状态",
      note: "开发中。不展示“在线体验”链接，不伪造已完成截图。可使用低保真产品结构图或抽象界面占位。",
    },
  ],
};

const dataAnalysisDetail: WorkDetail = {
  key: "data-analysis",
  breadcrumb: "AI 产品经理个人作品集 / 智能数据分析",
  heroTitle: "智能数据分析",
  heroSubtitle: "个人独立 AI 产品 Demo（规划中）",
  heroMeta: "产品构想 · 自然语言问数 · 异常归因",
  natureStatement:
    "本项目为个人独立设计与开发的作品集 Demo，面向企业经营分析场景规划。当前页面展示产品构想，不代表已经完成开发。",
  sections: [
    {
      title: "项目性质说明",
      note: "当前页面展示产品构想，不代表已经完成开发。",
    },
    {
      title: "为什么做这个作品",
      body: "企业经营分析依赖数据团队人工取数、做表、写结论，响应慢且口径不统一。本作品试图验证自然语言问数、自动图表生成与异常归因的产品化能力，让业务方自助获取分析结论，让数据团队聚焦高价值分析。",
    },
    {
      title: "典型业务场景",
      list: [
        "经营层关注的核心指标趋势查询",
        "指标异常波动的自动识别与归因",
        "多维度交叉分析",
        "经营分析报告自动生成",
      ],
    },
    {
      title: "目标用户",
      list: ["企业管理层", "业务/运营负责人", "数据分析师"],
    },
    {
      title: "计划实现的核心功能",
      note: "以下能力均为计划实现，当前未开发。",
      list: [
        "数据源接入",
        "指标口径管理",
        "自然语言问数（NL2SQL）",
        "自动生成图表",
        "指标趋势分析",
        "异常识别",
        "异常归因",
        "分析结论生成",
        "报告导出",
        "历史分析记录",
      ],
    },
    {
      title: "用户操作流程（计划）",
      list: [
        "用自然语言提问",
        "系统解析意图并匹配指标口径",
        "生成 SQL/查询并执行",
        "自动选择图表类型并渲染",
        "识别异常并给出归因",
        "生成分析结论并支持导出",
      ],
    },
    {
      title: "AI 能力设计（计划）",
      list: [
        "自然语言到结构化查询的转换",
        "指标口径管理与冲突消解",
        "图表类型自动选择",
        "异常识别与归因分析",
        "分析结论的自然语言生成",
      ],
    },
    {
      title: "当前状态",
      note: "规划中。不展示虚假体验链接，不伪造完整系统截图。使用产品结构、用户流程或抽象界面占位。",
    },
  ],
};

export const workDetails: Record<WorkKey, WorkDetail> = {
  "customer-service": customerServiceDetail,
  "contract-review": contractReviewDetail,
  "data-analysis": dataAnalysisDetail,
};
