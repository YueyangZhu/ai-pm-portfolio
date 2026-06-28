import { Link } from "react-router-dom";
import { Home, Compass } from "lucide-react";
import { Button } from "@/components/common/Button";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function NotFoundPage() {
  useDocumentTitle("页面未找到｜AI产品经理个人作品集");
  return (
    <div className="mx-auto flex w-full max-w-content flex-col items-center px-4 py-24 text-center sm:px-6 lg:px-8">
      <Compass className="h-12 w-12 text-accent" aria-hidden />
      <h1 className="mt-4 text-3xl font-bold text-brand">404</h1>
      <p className="mt-2 max-w-md text-base text-ink-soft">
        抱歉，您访问的页面不存在或已移动。可能您输入的地址有误，或该作品仍在规划中尚未上线。
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link to="/">
          <Button variant="primary" size="lg">
            <Home className="h-4 w-4" aria-hidden />
            返回首页
          </Button>
        </Link>
        <Link to="/#works">
          <Button variant="secondary" size="lg">
            查看 AI 独立作品
          </Button>
        </Link>
      </div>
    </div>
  );
}
