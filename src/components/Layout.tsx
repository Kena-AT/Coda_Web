import Link from "next/link";

const iconClassName = "w-3.5 h-3.5";

export function Header() {
  return (
    <header className="w-full h-12 bg-[#0e0e0e] border-b border-[#353534] flex items-center justify-between px-6 sticky top-0 z-50">
      <div className="flex items-center gap-8">
        <Link
          href="/"
          className="font-mono text-[#e60000] text-lg font-bold tracking-[0.18em]"
        >
          CODA
        </Link>
      </div>
      <div className="flex items-center gap-6">
        <button
          type="button"
          className="p-1 text-[#e9bcb5]"
          aria-label="Settings"
        >
          <svg viewBox="0 0 12 12" className={iconClassName} aria-hidden="true">
            <path
              d="M4.25833 11.66667l-0.23333-1.86667c-0.12639-0.04861-0.24549-0.10694-0.35729-0.175-0.11181-0.06806-0.22118-0.14097-0.32813-0.21875l-1.73541 0.72917-1.60417-2.77084 1.50208-1.1375c-0.00972-0.06806-0.01458-0.13368-0.01458-0.19687 0-0.06319 0-0.12882 0-0.19688 0-0.06806 0-0.13368 0-0.19687 0-0.06319 0.00486-0.12882 0.01458-0.19688l-1.50208-1.1375 1.60417-2.77083 1.73541 0.72917c0.10694-0.07778 0.21875-0.15069 0.33542-0.21875 0.11667-0.06806 0.23333-0.12639 0.35-0.175l0.23333-1.86667 3.20834 0 0.23333 1.86667c0.12639 0.04861 0.24549 0.10694 0.35729 0.175 0.11181 0.06806 0.22118 0.14097 0.32813 0.21875l1.73541-0.72917 1.60417 2.77083-1.50208 1.1375c0.00972 0.06806 0.01458 0.13368 0.01458 0.19688 0 0.06319 0 0.12882 0 0.19687 0 0.06806 0 0.13368 0 0.19688 0 0.06319-0.00972 0.12882-0.02917 0.19687l1.50209 1.1375-1.60417 2.77084-1.72083-0.72917c-0.10694 0.07778-0.21875 0.15069-0.33542 0.21875-0.11667 0.06806-0.23333 0.12639-0.35 0.175l-0.23333 1.86667-3.20834 0 0 0"
              fill="currentColor"
            />
          </svg>
        </button>
        <button
          type="button"
          className="p-1 text-[#e9bcb5]"
          aria-label="Terminal"
        >
          <svg viewBox="0 0 12 10" className={iconClassName} aria-hidden="true">
            <path
              d="M1.16667 9.33333c-0.32083 0-0.59549-0.11424-0.82396-0.3427-0.22847-0.22847-0.34271-0.50313-0.34271-0.82396l0-7c0-0.32083 0.11424-0.59549 0.34271-0.82396 0.22847-0.22847 0.50312-0.34271 0.82396-0.34271l9.33333 0c0.32083 0 0.59549 0.11424 0.82396 0.34271 0.22847 0.22847 0.34271 0.50312 0.34271 0.82396l0 7c0 0.32083-0.11424 0.59549-0.34271 0.82396-0.22847 0.22847-0.50312 0.34271-0.82396 0.3427l-9.33333 0 0 0m0-1.16666l9.33333 0 0 0 0 0 0-5.83334-9.33333 0 0 5.83334 0 0 0 0 0 0m2.04166-0.58334l-0.81666-0.81666 1.50208-1.51667-1.51667-1.51667 0.83125-0.81666 2.33334 2.33333-2.33334 2.33333 0 0m2.625 0l0-1.16666 3.5 0 0 1.16666-3.5 0 0 0"
              fill="currentColor"
            />
          </svg>
        </button>
        <button
          type="button"
          className="p-1 text-[#e9bcb5]"
          aria-label="Power"
        >
          <svg viewBox="0 0 12 12" className={iconClassName} aria-hidden="true">
            <path
              d="M5.83333 11.66667c-0.80694 0-1.56528-0.15313-2.275-0.45938-0.70972-0.30625-1.32708-0.72188-1.85208-1.24687-0.525-0.525-0.94063-1.14236-1.24688-1.85209-0.30625-0.70972-0.45937-1.46806-0.45937-2.275 0-0.81667 0.15312-1.57743 0.45937-2.28229 0.30625-0.70486 0.72188-1.31979 1.24688-1.84479l0.81667 0.81667c-0.42778 0.42778-0.76076 0.92361-0.99896 1.4875-0.23819 0.56389-0.35729 1.17153-0.35729 1.82291 0 1.30278 0.45208 2.40625 1.35625 3.31042 0.90417 0.90417 2.00764 1.35625 3.31041 1.35625 1.30278 0 2.40625-0.45208 3.31042-1.35625 0.90417-0.90417 1.35625-2.00764 1.35625-3.31042 0-0.65139-0.1191-1.25903-0.35729-1.82291-0.23819-0.56389-0.57118-1.05972-0.99896-1.4875l0.81667-0.81667c0.525 0.525 0.94063 1.13993 1.24687 1.84479 0.30625 0.70486 0.45937 1.46563 0.45938 2.28229 0 0.80694-0.15313 1.56528-0.45938 2.275-0.30625 0.70972-0.72188 1.32708-1.24687 1.85209-0.525 0.525-1.14236 0.94063-1.85209 1.24687-0.70972 0.30625-1.46806 0.45937-2.275 0.45938l0 0m-0.58333-5.25l0-6.41667 1.16667 0 0 6.41667-1.16667 0 0 0"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="w-full bg-[#0e0e0e] border-t border-[#353534] py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex flex-col gap-2">
          <span className="font-mono text-[#e60000] text-sm tracking-[0.3em]">CODA</span>
          <span className="text-[#e5e2e1] text-sm">
            Local-first snippet manager for developers.
          </span>
        </div>
        <div className="flex items-center gap-8">
          <div className="bg-[#2a2a2a] border border-[#353534] px-4 py-2 text-xs font-mono text-[#e5e2e1]">
            SYSTEM_CHANNEL
          </div>
          <div className="flex items-center gap-6 text-xs font-mono text-[#e9bcb5]">
            <Link href="https://github.com/Kena-AT/Coda" target="_blank" rel="noopener noreferrer">GITHUB</Link>
            <Link href="#download">DOWNLOAD</Link>
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
