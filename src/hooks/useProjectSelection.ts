import { create } from "zustand";

interface ProjectSelectionState {
  /** 当前选中的真实企业项目 id */
  selectedProjectId: string;
  /** 用于触发短暂高亮的计数器（每次主动切换时自增） */
  highlightNonce: number;
  /** 选择某个项目（来自职业经历代表项目点击 或 项目列表点击） */
  selectProject: (projectId: string, options?: { highlight?: boolean }) => void;
}

export const useProjectSelection = create<ProjectSelectionState>((set) => ({
  selectedProjectId: "",
  highlightNonce: 0,
  selectProject: (projectId, options) =>
    set((state) => ({
      selectedProjectId: projectId,
      highlightNonce: options?.highlight ? state.highlightNonce + 1 : state.highlightNonce,
    })),
}));
