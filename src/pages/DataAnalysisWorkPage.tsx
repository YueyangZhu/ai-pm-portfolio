import { workDetails } from "@/data/ai-works";
import { WorkDetailLayout } from "@/components/works/WorkDetailLayout";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function DataAnalysisWorkPage() {
  useDocumentTitle("智能数据分析｜个人AI作品");
  return <WorkDetailLayout detail={workDetails["data-analysis"]} pageTitle="智能数据分析｜个人AI作品" />;
}
