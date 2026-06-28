import { workDetails } from "@/data/ai-works";
import { WorkDetailLayout } from "@/components/works/WorkDetailLayout";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function CustomerServiceWorkPage() {
  useDocumentTitle("言析智能客服｜个人AI作品");
  return <WorkDetailLayout detail={workDetails["customer-service"]} pageTitle="言析智能客服｜个人AI作品" />;
}
