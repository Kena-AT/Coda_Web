import Image from "next/image";
import Screenshot3 from "@/assets/Screenshot (3).png";
import Screenshot4 from "@/assets/Screenshot (4).png";
import Screenshot5 from "@/assets/Screenshot (5).png";
import Screenshot6 from "@/assets/Screenshot (6).png";
import Screenshot7 from "@/assets/Screenshot (7).png";
import Screenshot8 from "@/assets/Screenshot (8).png";
import Screenshot9 from "@/assets/Screenshot (9).png";
import Screenshot10 from "@/assets/Screenshot (10).png";
import Screenshot11 from "@/assets/Screenshot (11).png";
import Screenshot12 from "@/assets/Screenshot (12).png";
import fallbackRelease from "@/data/fallback-release.json";
import { ScreenshotCarousel } from "@/components/ScreenshotCarousel";
import { DownloadButton, ShaCopy, SystemStatus, FallbackNote } from "@/components/InteractiveElements";

async function getReleaseData() {
  const timeout = 5000;
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  try {
    const res = await fetch(
      "https://api.github.com/repos/Kena-AT/Coda/releases?per_page=3",
      {
        next: { revalidate: 3600 },
        signal: controller.signal,
      }
    );
    clearTimeout(id);

    if (!res.ok) {
      console.error(`GitHub API error: ${res.status}`);
      return { latest: { ...fallbackRelease, source: "fallback" }, history: [] };
    }

    const releases = await res.json();
    
    if (!Array.isArray(releases) || releases.length === 0) {
      return { latest: { ...fallbackRelease, source: "fallback" }, history: [] };
    }

    const latestData = releases[0];
    const exeAsset = latestData.assets?.find((a: any) => a.name.endsWith(".exe"));
    const msiAsset = latestData.assets?.find((a: any) => a.name.endsWith(".msi"));

    const formatSize = (bytes: number) => {
      if (!bytes) return "N/A";
      const mb = bytes / (1024 * 1024);
      return `${mb.toFixed(1)} MB`;
    };

    const latest = {
      version: latestData.tag_name,
      date: latestData.published_at ? new Date(latestData.published_at).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }) : fallbackRelease.date,
      notes: latestData.body ? latestData.body.split('\n')[0] : fallbackRelease.notes,
      fullNotes: latestData.body || "",
      exeUrl: exeAsset?.browser_download_url || fallbackRelease.exeUrl,
      msiUrl: msiAsset?.browser_download_url || fallbackRelease.msiUrl,
      exeSize: formatSize(exeAsset?.size),
      msiSize: formatSize(msiAsset?.size),
      exeDownloads: exeAsset?.download_count || 0,
      msiDownloads: msiAsset?.download_count || 0,
      sha256: fallbackRelease.sha256,
      source: "api"
    };

    const history = releases.slice(1).map((r: any) => ({
      version: r.tag_name,
      date: new Date(r.published_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      summary: r.body ? r.body.split('\n')[0] : "Maintenance update."
    }));

    return { latest, history };
  } catch (error: any) {
    clearTimeout(id);
    return { latest: { ...fallbackRelease, source: "fallback" }, history: [] };
  }
}

export default async function Home() {
  const { latest, history } = await getReleaseData();
  
  const screenshots = [
    { image: Screenshot3, label: "SEARCH_MATRIX // GLOBAL_INDEX" },
    { image: Screenshot4, label: "VAULT_EXPLORER // LOCAL_STORAGE" },
    { image: Screenshot5, label: "EDITOR_INTEGRATION // SNIPPET_SYNC" },
    { image: Screenshot6, label: "VERSION_CONTROL // DIFF_VIEW" },
    { image: Screenshot7, label: "ANALYTICS_DASHBOARD // USAGE_METRICS" },
    { image: Screenshot8, label: "THEME_ENGINE // MATRIX_PROTOCOL" },
    { image: Screenshot9, label: "VAULT_ENCRYPTION // SECURITY_LAYER" },
    { image: Screenshot10, label: "COMMAND_PALETTE // RAPID_ACCESS" },
    { image: Screenshot11, label: "SNIPPET_EDITOR // SYNTAX_HIGHLIGHT" },
    { image: Screenshot12, label: "NETWORK_CONFIG // OFFLINE_MODE" },
  ];

  return (
    <div className="flex flex-col w-full">
      <section className="relative overflow-hidden bg-transparent px-6 pt-20 pb-0">
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[radial-gradient(circle_at_top,_#e60000_0%,_transparent_55%)]" />
        </div>
        <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center gap-10 text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="border border-[#e60000] bg-[#e6000005] px-3 py-1 font-mono text-[10px] font-bold tracking-[0.15em] text-[#e60000]">
              SYSTEM_LOAD_COMPLETE // {latest.version}-STABLE
            </div>
            <SystemStatus source={latest.source} />
          </div>
          <div className="font-display text-[clamp(2rem,8vw,4.5rem)] font-bold leading-none text-[#e5e2e1]">
            <div>CODA //</div>
            <div className="text-[#e60000]">SNIPPET_MANAGER</div>
          </div>
          <p className="max-w-xl text-xs text-[#e9bcb5] leading-relaxed">
            The ultimate local-first snippet manager. Never lose a line of code again.
            Engineered for speed, hardened for privacy, and optimized for developers.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pb-16">
            <a
              href="#download"
              className="flex items-center gap-2 bg-[#e60000] px-6 py-3 text-xs font-bold tracking-[0.1em] text-white shadow-[4px_4px_0_#131313]"
            >
              DEPLOY_NOW
            </a>
            <a
              href="https://github.com/Kena-AT/Coda"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-2 border-[#e5e2e1] px-6 py-3 text-xs font-bold tracking-[0.1em] text-[#e5e2e1] shadow-[4px_4px_0_#131313]"
            >
              SYSTEM_LOGS
            </a>
          </div>
          <div className="w-full max-w-5xl overflow-hidden border border-[#353534] bg-[#0e0e0e] shadow-[0_0_40px_rgba(230,0,0,0.2)]">
            <div className="flex items-center justify-between bg-[#2a2a2a] px-4 py-2 text-xs text-[#e9bcb5]">
              <span className="font-mono">CODA_TERMINAL</span>
              <span className="font-mono">SECURE_SESSION</span>
            </div>
            <div className="grid grid-cols-1 gap-4 p-6 text-left text-xs text-[#e5e2e1] md:grid-cols-2">
              <div className="space-y-2 font-mono">
                <p>$ coda init --local --secure</p>
                <p>Initializing vaults... OK</p>
                <p>Indexing snippets... OK</p>
                <p>Deploying search matrix... OK</p>
              </div>
              <div className="space-y-2 font-mono text-[#e9bcb5]">
                <p>ACTIVE_MODULES</p>
                <p>SNIPPET_SYNC</p>
                <p>VERSION_CONTROL</p>
                <p>OFFLINE_CACHE</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#353534] bg-transparent px-6 py-24">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-16">
          <div className="flex flex-col items-center gap-4">
            <h2 className="font-display text-lg md:text-xl font-bold tracking-tight text-[#e5e2e1]">
              SYSTEM_PREVIEWS
            </h2>
            <div className="h-1 w-24 bg-[#e60000]" />
            <p className="font-mono text-[10px] tracking-[0.05em] text-[#e9bcb5]">
              DRAG_TO_EXPLORE // SCROLL_HORIZONTALLY
            </p>
          </div>
          <ScreenshotCarousel screenshots={screenshots} />
        </div>
      </section>

      <section className="border-t border-[#353534] bg-transparent px-6 py-24">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-16">
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-lg md:text-xl font-bold tracking-tight text-[#e5e2e1]">CORE_FEATURES</h2>
            <div className="h-1 w-24 bg-[#e60000]" />
          </div>
          <div className="grid gap-3 lg:grid-cols-12 auto-rows-min">
            <div className="lg:col-span-8 flex flex-col sm:flex-row gap-6 bg-[#201f1f] border border-[#353534] p-6 lg:p-8 items-center">
              <div className="flex-1 flex flex-col gap-3">
                <span className="font-mono text-[9px] font-bold tracking-[0.08em] text-[#e60000]">PROTOCOL_01</span>
                <h3 className="font-display text-sm font-semibold text-[#e5e2e1]">SMART_SNIPPET_MANAGEMENT</h3>
                <p className="text-[11px] leading-relaxed text-[#a09999]">Organize your code with precision. Tag, categorize, and manage thousands of snippets with zero lag.</p>
              </div>
              <div className="flex-shrink-0 w-20 h-20 lg:w-24 lg:h-24 bg-[#2a2a2a] border border-[#353534] flex items-center justify-center">
                <svg viewBox="0 0 45 45" className="w-8 h-8 lg:w-10 lg:h-10" fill="#e60000"><path d="M41.5 45l-15.75-15.75c-1.25 1-2.6875 1.79167-4.3125 2.375-1.625 0.58333-3.35417 0.875-5.1875 0.875-4.54167 0-8.38542-1.57292-11.53125-4.71875-3.14583-3.14583-4.71875-6.98958-4.71875-11.53125 0-4.54167 1.57292-8.38542 4.71875-11.53125 3.14583-3.14583 6.98958-4.71875 11.53125-4.71875 4.54167 0 8.38542 1.57292 11.53125 4.71875 3.14583 3.14583 4.71875 6.98958 4.71875 11.53125 0 1.83333-0.29167 3.5625-0.875 5.1875-0.58333 1.625-1.375 3.0625-2.375 4.3125l15.75 15.75-3.5 3.5 0 0m-25.25-17.5c3.125 0 5.78125-1.09375 7.96875-3.28125 2.1875-2.1875 3.28125-4.84375 3.28125-7.96875 0-3.125-1.09375-5.78125-3.28125-7.96875-2.1875-2.1875-4.84375-3.28125-7.96875-3.28125-3.125 0-5.78125 1.09375-7.96875 3.28125-2.1875 2.1875-3.28125 4.84375-3.28125 7.96875 0 3.125 1.09375 5.78125 3.28125 7.96875 2.1875 2.1875 4.84375 3.28125 7.96875 3.28125l0 0"/></svg>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 bg-[#201f1f] border border-[#353534] p-6 lg:p-8">
              <span className="font-mono text-[9px] font-bold tracking-[0.08em] text-[#e60000]">PROTOCOL_02</span>
              <h3 className="font-display text-sm font-semibold text-[#e5e2e1]">VERSION_CONTROL</h3>
              <p className="text-[11px] leading-relaxed text-[#a09999]">Every edit is tracked. Roll back to any previous version with built-in diffing.</p>
              <span className="mt-auto pt-3 text-[9px] font-mono text-[#e9bcb5] border-t border-[#353534]">TRACKING_STATE // ACTIVE</span>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 bg-[#0e0e0e] border border-[#353534] p-6">
              <span className="font-mono text-[9px] font-bold tracking-[0.08em] text-[#e60000]">PROTOCOL_03</span>
              <div className="flex items-center justify-center py-2">
                <svg viewBox="0 0 45 45" className="w-10 h-10" fill="#e60000"><path d="M41.5 45l-15.75-15.75c-1.25 1-2.6875 1.79167-4.3125 2.375-1.625 0.58333-3.35417 0.875-5.1875 0.875-4.54167 0-8.38542-1.57292-11.53125-4.71875-3.14583-3.14583-4.71875-6.98958-4.71875-11.53125 0-4.54167 1.57292-8.38542 4.71875-11.53125 3.14583-3.14583 6.98958-4.71875 11.53125-4.71875 4.54167 0 8.38542 1.57292 11.53125 4.71875 3.14583 3.14583 4.71875 6.98958 4.71875 11.53125 0 1.83333-0.29167 3.5625-0.875 5.1875-0.58333 1.625-1.375 3.0625-2.375 4.3125l15.75 15.75-3.5 3.5 0 0m-25.25-17.5c3.125 0 5.78125-1.09375 7.96875-3.28125 2.1875-2.1875 3.28125-4.84375 3.28125-7.96875 0-3.125-1.09375-5.78125-3.28125-7.96875-2.1875-2.1875-4.84375-3.28125-7.96875-3.28125-3.125 0-5.78125 1.09375-7.96875 3.28125-2.1875 2.1875-3.28125 4.84375-3.28125 7.96875 0 3.125 1.09375 5.78125 3.28125 7.96875 2.1875 2.1875 4.84375 3.28125 7.96875 3.28125l0 0"/></svg>
              </div>
              <h3 className="font-display text-sm font-semibold text-[#e5e2e1]">LIGHTNING_SEARCH</h3>
              <p className="text-[11px] text-[#a09999]">Find any snippet in under 100ms.</p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 bg-[#201f1f] border border-[#353534] p-6">
              <span className="font-mono text-[9px] font-bold tracking-[0.08em] text-[#e60000]">PROTOCOL_04</span>
              <h3 className="font-display text-sm font-semibold text-[#e5e2e1]">OFFLINE_FIRST</h3>
              <p className="text-[11px] text-[#a09999]">Access and edit snippets without internet. Full local encryption.</p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 bg-[#201f1f] border border-[#353534] p-6">
              <span className="font-mono text-[9px] font-bold tracking-[0.08em] text-[#e60000]">PROTOCOL_05</span>
              <h3 className="font-display text-sm font-semibold text-[#e5e2e1]">USAGE_ANALYTICS</h3>
              <p className="text-[11px] text-[#a09999]">Gain insights into your coding patterns. Track snippet usage and velocity.</p>
            </div>

            <div className="lg:col-span-6 flex flex-col gap-3 bg-[#201f1f] border border-[#e60000]/50 p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#e60000]/10 to-transparent pointer-events-none" />
              <span className="relative font-mono text-[9px] font-bold tracking-[0.08em] text-[#e60000]">PROTOCOL_06</span>
              <h3 className="relative font-display text-sm font-semibold text-[#e5e2e1]">CODA_AI</h3>
              <p className="relative text-[11px] text-[#a09999]">Local-first AI with semantic search and intelligent code completion.</p>
            </div>

            <div className="lg:col-span-6 flex gap-4 bg-[#0e0e0e] border border-[#353534] p-6 items-center">
              <div className="flex-shrink-0 w-12 h-12 bg-[#201f1f] border border-[#353534] flex items-center justify-center">
                <svg viewBox="0 0 32 40" className="w-6 h-8" fill="#e60000"><path d="M16 40c-4.63333-1.16667-8.45833-3.825-11.475-7.975-3.01667-4.15-4.525-8.75834-4.525-13.825l0-12.2 16-6 16 6 0 12.2c0 5.06667-1.50833 9.675-4.525 13.825-3.01667 4.15-6.84167 6.80833-11.475 7.975l0 0m0-4.2c3.23333-1 5.93333-2.975 8.1-5.925 2.16667-2.95 3.43333-6.24167 3.8-9.875l-11.9 0 0-15.75-12 4.5 0 9.45c0 0.36667 0 0.66667 0 0.9 0 0.23333 0.03333 0.53333 0.1 0.9l11.9 0 0 15.8 0 0"/></svg>
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <span className="font-mono text-[9px] font-bold tracking-[0.08em] text-[#e60000]">SECURITY_LAYER</span>
                <p className="text-[11px] text-[#a09999]">End-to-end encryption. Your snippets never leave your machine.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#353534] bg-[#0e0e0e]/50 px-6 py-24">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-16">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="font-display text-xl md:text-2xl font-bold text-[#e5e2e1]">
              SYSTEM_REQUIREMENTS
            </h2>
            <div className="h-1 w-32 bg-[#e60000]" />
          </div>
          <div className="mx-auto w-full max-w-3xl border border-[#353534] bg-[#131313] p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex flex-col gap-6">
                <div className="space-y-1">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#e60000]">OS_ARCHITECTURE</div>
                  <div className="text-[#e5e2e1]">Windows 10 / 11 (64-bit)</div>
                </div>
                <div className="space-y-1">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#e60000]">PROCESSOR_UNIT</div>
                  <div className="text-[#e5e2e1]">1.6 GHz or faster processor</div>
                </div>
                <div className="space-y-1">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#e60000]">MEMORY_BUFFER</div>
                  <div className="text-[#e5e2e1]">4 GB RAM minimum</div>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="space-y-1">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#e60000]">STORAGE_VAULT</div>
                  <div className="text-[#e5e2e1]">200 MB available space</div>
                </div>
                <div className="space-y-1">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#e60000]">DISPLAY_MATRIX</div>
                  <div className="text-[#e5e2e1]">1280 x 800 resolution</div>
                </div>
                <div className="space-y-1">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#e60000]">DEPENDENCY_CHECK</div>
                  <div className="text-[#e5e2e1]">Edge WebView2 Runtime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="download" className="border-y border-[#353534] bg-[#0e0e0e]/50 px-6 py-24">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-16">
          <div className="flex flex-col items-center gap-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#e5e2e1]">RELEASE_INTELLIGENCE</h2>
            <div className="h-1 w-32 bg-[#e60000]" />
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="group relative flex flex-col gap-6 bg-[#131313] border border-[#353534] p-10 hover:border-[#e60000] transition-colors duration-500">
              <div className="font-mono text-xs tracking-[0.2em] text-[#e60000]">BUILD_STATUS</div>
              <div className="font-display text-xl md:text-2xl font-bold text-[#e5e2e1]">{latest.version}_STABLE</div>
              <div className="space-y-2 text-sm text-[#e9bcb5]">
                <p>Released {latest.date} · Windows x64</p>
                <div className="flex gap-4 font-mono text-[10px] text-[#e60000]">
                  <span>EXE: {latest.exeSize}</span>
                  <span>MSI: {latest.msiSize}</span>
                </div>
              </div>
              <div className="mt-auto pt-6 border-t border-[#353534] font-mono text-[10px] text-[#e5e2e1]">
                <ShaCopy hash={latest.sha256} />
              </div>
            </div>
            <div className="group relative flex flex-col gap-6 bg-[#131313] border border-[#353534] p-10 hover:border-[#e60000] transition-colors duration-500">
              <div className="font-mono text-xs tracking-[0.2em] text-[#e60000]">CHANGELOG_SYSTEM</div>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] text-[#e60000]">{latest.version}</span>
                    <span className="h-[1px] flex-1 bg-[#353534]" />
                    <span className="font-mono text-[9px] text-[#a09999]">CURRENT</span>
                  </div>
                  <p className="text-xs text-[#e5e2e1] leading-relaxed">{latest.notes}</p>
                </div>
                {history.map((release, i) => (
                  <div key={i} className="flex flex-col gap-2 opacity-60 hover:opacity-100 transition-opacity">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[10px] text-[#e9bcb5]">{release.version}</span>
                      <span className="h-[1px] flex-1 bg-[#353534]" />
                      <span className="font-mono text-[9px] text-[#a09999] uppercase">{release.date}</span>
                    </div>
                    <p className="text-[11px] text-[#a09999] italic">{release.summary}</p>
                  </div>
                ))}
              </div>
              <a
                href="https://github.com/Kena-AT/Coda/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center gap-2 font-mono text-xs text-[#e5e2e1] hover:text-[#e60000] transition-colors"
              >
                READ_FULL_CHANGELOG <span className="text-[10px]">{"->"}</span>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center gap-12">
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex flex-col items-center gap-4">
                <DownloadButton 
                  href={latest.exeUrl} 
                  type="EXE" 
                  version={latest.version}
                  variant="primary"
                >
                  DOWNLOAD_EXE
                </DownloadButton>
                <div className="flex flex-col items-center gap-1">
                  <span className="font-mono text-[10px] text-[#e60000]">RECOMMENDED_STABLE</span>
                  <span className="font-mono text-[9px] text-[#a09999] uppercase">{latest.exeDownloads} DEPLOYMENTS</span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <DownloadButton 
                  href={latest.msiUrl} 
                  type="MSI" 
                  version={latest.version}
                  variant="secondary"
                >
                  DOWNLOAD_MSI
                </DownloadButton>
                <div className="flex flex-col items-center gap-1">
                  <span className="font-mono text-[10px] text-[#e9bcb5]">ENTERPRISE_READY</span>
                  <span className="font-mono text-[9px] text-[#a09999] uppercase">{latest.msiDownloads} DEPLOYMENTS</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-6 w-full">
              <div className="max-w-xl text-center font-mono text-[10px] text-[#e60000]/60 tracking-widest">// SECURE_DISTRIBUTION_PROTOCOL_ACTIVE // SHA256_VERIFICATION_REQUIRED</div>
              <a 
                href="https://github.com/Kena-AT/Coda/releases" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-mono text-[9px] text-[#e9bcb5] hover:text-[#e60000] underline decoration-[#e60000]/30 underline-offset-4 transition-colors"
              >
                SECONDARY_ACCESS // GITHUB_MIRROR
              </a>
              {latest.source !== "api" && <FallbackNote />}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
