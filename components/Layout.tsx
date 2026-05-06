import Link from "next/link";
import { Download } from "lucide-react";

export function Header() {
  return (
    <header className="w-full h-12 bg-[#0e0e0e] border-b border-[#353534] flex items-center justify-between px-6 sticky top-0 z-50">
      <div className="flex items-center space-x-6">
        <Link href="/" className="font-bold text-white text-lg tracking-tight">
          Coda.
        </Link>
      </div>
      <div className="flex items-center space-x-6">
        <Link href="https://github.com/Kena-AT/Coda_Web" target="_blank" className="text-sm font-medium text-gray-300 hover:text-white transition">
          GitHub
        </Link>
        <Link href="#download" className="text-sm font-medium text-black bg-white px-3 py-1 rounded-md hover:bg-gray-200 transition">
          Download
        </Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="w-full bg-[#0e0e0e] border-t border-[#353534] py-6 px-6 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Coda. All rights reserved.
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="https://github.com/Kena-AT/Coda_Web" className="text-gray-400 hover:text-white text-sm">GitHub Repository</Link>
        </div>
      </div>
    </footer>
  );
}

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#131313] text-white flex flex-col font-sans">
      <Header />
      <main className="flex-1 flex flex-col">{children}</main>
      <Footer />
    </div>
  );
}
