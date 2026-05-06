"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/telemetry";

export function DownloadButton({ 
  href, 
  variant = "primary", 
  children, 
  type,
  version 
}: { 
  href: string; 
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  type: "EXE" | "MSI";
  version: string;
}) {
  const handleClick = () => {
    trackEvent("download_click", {
      file_type: type,
      version: version,
      timestamp: new Date().toISOString()
    });
  };

  const baseStyles = "group relative px-12 py-5 text-sm font-bold tracking-[0.2em] transition-all active:scale-95";
  const primaryStyles = "bg-[#e60000] text-white hover:scale-105";
  const secondaryStyles = "border-2 border-[#e5e2e1] text-[#e5e2e1] hover:bg-[#e5e2e1] hover:text-[#131313]";

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`${baseStyles} ${variant === "primary" ? primaryStyles : secondaryStyles}`}
    >
      <div className="relative z-10">{children}</div>
      <div className={`absolute inset-0 border ${variant === "primary" ? "border-white/20" : "border-[#e5e2e1]/20"} translate-x-1 translate-y-1 -z-0 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform`} />
    </a>
  );
}

export function ShaCopy({ hash }: { hash: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(hash);
    setCopied(true);
    trackEvent("sha_copy", { hash_prefix: hash.substring(0, 8) });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      onClick={handleCopy}
      className="cursor-pointer hover:text-[#e60000] transition-colors flex items-center gap-2 group"
    >
      <span>SHA256 // {hash}</span>
      <span className="opacity-0 group-hover:opacity-100 text-[8px] border border-[#e60000] px-1 animate-pulse">
        {copied ? "COPIED" : "CLICK_TO_COPY"}
      </span>
    </div>
  );
}

export function SystemStatus({ source }: { source: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-center gap-2 font-mono text-[9px]">
        <div className={`h-1.5 w-1.5 rounded-full ${source === "api" ? "bg-green-500 shadow-[0_0_5px_#22c55e]" : "bg-yellow-500 animate-pulse shadow-[0_0_5px_#eab308]"}`} />
        <span className={source === "api" ? "text-green-500/70" : "text-yellow-500/70"}>
          {source === "api" ? "GITHUB_API_LINK_ACTIVE" : "FALLBACK_MODE_ACTIVE"}
        </span>
      </div>
      {source !== "api" && (
        <div className="max-w-[200px] border border-yellow-500/30 bg-yellow-500/5 px-2 py-1 font-mono text-[8px] text-yellow-500/80 leading-tight">
          SYSTEM_NOTE: CONNECTIVITY_LIMITED. SERVING_CACHED_ASSETS. VERIFY_LATEST_ON_GITHUB.
        </div>
      )}
    </div>
  );
}

export function FallbackNote() {
  return (
    <div className="mt-8 flex flex-col items-center gap-4 border border-[#e60000]/20 bg-[#e60000]/5 p-6 text-center">
      <div className="font-mono text-[10px] font-bold text-[#e60000]">DOWNLOAD_GUIDANCE // TROUBLESHOOTING</div>
      <p className="max-w-md text-[11px] text-[#e9bcb5] leading-relaxed">
        If primary links fail to initialize, please use the <a href="https://github.com/Kena-AT/Coda/releases" target="_blank" className="underline hover:text-[#e60000]">GitHub Mirror</a> directly. 
        For system-wide deployment issues, report via <a href="https://github.com/Kena-AT/Coda/issues" target="_blank" className="underline hover:text-[#e60000]">Incident_Response</a>.
      </p>
    </div>
  );
}
