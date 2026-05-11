import Link from "next/link";

const iconClassName = "w-3.5 h-3.5";

export function Header() {
  return (
    <header className="w-full h-12 bg-[#0e0e0e]/80 backdrop-blur-sm border-b border-[#353534] flex items-center justify-between px-6 sticky top-0 z-50">
      <div className="flex items-center gap-8">
        <Link
          href="/"
          className="font-mono text-[#e60000] text-lg font-bold tracking-[0.18em]"
        >
          CODA
        </Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="w-full bg-[#0e0e0e]/80 backdrop-blur-sm border-t border-[#353534] py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex flex-col gap-2">
          <span className="font-mono text-[#e60000] text-sm tracking-[0.3em]">CODA</span>
          <span className="text-[#e5e2e1] text-sm">
            Local-first snippet manager for developers.
          </span>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-6 text-xs font-mono text-[#e9bcb5]">
            <Link href="https://github.com/Kena-AT/Coda" target="_blank" rel="noopener noreferrer" className="hover:text-[#e60000] transition-colors">GITHUB</Link>
            <Link href="#download" className="hover:text-[#e60000] transition-colors">DOWNLOAD</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { ParallaxBackground } from "./ParallaxBackground";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#131313] text-white flex flex-col relative z-0">
      <ParallaxBackground />
      <Header />
      <main className="flex-1 flex flex-col">{children}</main>
      <Footer />
    </div>
  );
}
