export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-dark-border bg-brand text-white">
      <div className="pointer-events-none absolute inset-0 bg-tech-grid-dark opacity-50" aria-hidden />
      <div className="relative mx-auto flex w-full max-w-content items-center justify-center px-4 py-6 sm:px-6 lg:px-8">
        <span className="text-center text-xs text-white/60">
          Copyright © 2026 Zhuyueyang. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
