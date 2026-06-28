import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SiteLayout } from "@/components/layout/SiteLayout";
import HomePage from "@/pages/HomePage";
import CustomerServiceWorkPage from "@/pages/CustomerServiceWorkPage";
import ContractReviewWorkPage from "@/pages/ContractReviewWorkPage";
import DataAnalysisWorkPage from "@/pages/DataAnalysisWorkPage";
import NotFoundPage from "@/pages/NotFoundPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/works/customer-service" element={<CustomerServiceWorkPage />} />
          <Route path="/works/contract-review" element={<ContractReviewWorkPage />} />
          <Route path="/works/data-analysis" element={<DataAnalysisWorkPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
