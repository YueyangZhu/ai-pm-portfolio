import { workDetails } from "@/data/ai-works";
import { WorkDetailLayout } from "@/components/works/WorkDetailLayout";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function ContractReviewWorkPage() {
  useDocumentTitle("智能合同审核｜个人AI作品");
  return <WorkDetailLayout detail={workDetails["contract-review"]} pageTitle="智能合同审核｜个人AI作品" />;
}
