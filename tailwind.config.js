/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
      },
    },
    extend: {
      colors: {
        // 母品牌：更深的科技蓝，从深海军蓝到明亮靛蓝
        brand: {
          DEFAULT: "#0B1220",      // 最深主色
          50: "#EAF4FF",
          100: "#D0E4FF",
          200: "#A7CDFF",
          300: "#74AFFF",
          400: "#3B8BFF",
          500: "#1162FF",
          600: "#0A45DB",
          700: "#0E2757",
          800: "#0A1A3A",
          900: "#0B1220",
        },
        // 强调色：从青绿扩展到科技蓝绿
        accent: {
          DEFAULT: "#00D4AA",
          50: "#E6FDF7",
          100: "#B3F8E7",
          200: "#7EEDD5",
          300: "#48DFC2",
          400: "#1FD4AA",
          500: "#00D4AA",
          600: "#00AA8A",
          700: "#00806A",
          800: "#005D4D",
          900: "#003B30",
        },
        // 三个 AI 作品差异化辅助色（更饱和）
        work: {
          cs: "#10B981",      // 客服 翠绿
          contract: "#F59E0B", // 合同 琥珀
          data: "#8B5CF6",     // 数据 紫罗兰
        },
        // 深色模式/科技卡片
        dark: {
          DEFAULT: "#0B1220",
          soft: "#111A2E",
          card: "#15203A",
          border: "#1E2D4D",
        },
        ink: {
          DEFAULT: "#334155",
          soft: "#64748B",
          muted: "#94A3B8",
        },
        surface: {
          page: "#F0F4FA",
          card: "#FFFFFF",
          border: "#E2E8F0",
        },
      },
      fontFamily: {
        sans: [
          "PingFang SC",
          "Microsoft YaHei",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Noto Sans",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      borderRadius: {
        card: "20px",
        btn: "12px",
      },
      maxWidth: {
        content: "1200px",
      },
      boxShadow: {
        card: "0 4px 6px -1px rgba(11, 18, 32, 0.04), 0 10px 24px -4px rgba(11, 18, 32, 0.06)",
        "card-hover": "0 8px 16px -4px rgba(11, 18, 32, 0.08), 0 20px 40px -8px rgba(11, 18, 32, 0.12)",
        glow: "0 0 24px rgba(0, 212, 170, 0.18)",
        nav: "0 1px 0 rgba(226, 232, 240, 0.8)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "tech-grid":
          "linear-gradient(rgba(17, 98, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(17, 98, 255, 0.03) 1px, transparent 1px)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-fast": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-down": {
          "0%": { opacity: "0", transform: "translateY(-8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        pulse: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1200%)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out both",
        "fade-in-fast": "fade-in-fast 0.3s ease-out both",
        "slide-down": "slide-down 0.25s ease-out both",
        shimmer: "shimmer 3s ease-in-out infinite",
        float: "float 5s ease-in-out infinite",
        pulse: "pulse 3s ease-in-out infinite",
        scan: "scan 6s linear infinite",
        "gradient-x": "gradient-x 6s ease infinite",
      },
    },
  },
  plugins: [],
};
