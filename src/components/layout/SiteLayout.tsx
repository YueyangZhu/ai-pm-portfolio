import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export function SiteLayout() {
  const { pathname } = useLocation();

  // 路由切换时回到顶部；从作品详情返回首页时恢复之前滚动位置
  useEffect(() => {
    const saved = sessionStorage.getItem("works-return-scroll");
    if (pathname === "/" && saved) {
      window.scrollTo({ top: parseInt(saved, 10), behavior: "auto" });
      sessionStorage.removeItem("works-return-scroll");
      return;
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-surface-page">
      <Navbar />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
