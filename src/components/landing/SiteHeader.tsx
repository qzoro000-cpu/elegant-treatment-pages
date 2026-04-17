export function SiteHeader({ branchName = "TATOA" }: { branchName?: string }) {
  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:h-20 sm:px-8">
        <a href="/" className="font-display text-xl font-normal tracking-[0.18em] text-white">
          {branchName}
        </a>
        <nav className="hidden items-center gap-10 text-sm text-white/60 lg:flex">
          <a href="#overview" className="hover:text-white transition-colors">Overview</a>
          <a href="#effects" className="hover:text-white transition-colors">Effects</a>
          <a href="#advantages" className="hover:text-white transition-colors">Advantages</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </nav>
        <a
          href="#reserve"
          className="hidden h-10 items-center justify-center rounded-full bg-white px-5 text-xs font-medium tracking-wide text-black transition-opacity hover:opacity-90 sm:inline-flex"
        >
          예약 상담
        </a>
      </div>
    </header>
  );
}
