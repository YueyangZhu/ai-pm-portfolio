import { useLocation, useNavigate } from "react-router-dom";

const NAVBAR_HEIGHT = 80;

function scrollToElement(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
  window.scrollTo({ top, behavior: "smooth" });
}

/**
 * 平滑滚动到首页某个 section，自动扣除固定导航栏高度。
 * 仅在首页（/）有效；其它页面会先跳转回首页再滚动。
 */
export function useScrollToSection() {
  const location = useLocation();
  const navigate = useNavigate();

  return (sectionId: string) => {
    if (location.pathname !== "/") {
      // 跳转回首页后再滚动
      navigate(`/#${sectionId}`);
      return;
    }
    scrollToElement(sectionId);
  };
}
