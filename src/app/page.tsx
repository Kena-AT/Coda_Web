import Image from "next/image";
import Screenshot3 from "@/assets/Screenshot (3).png";
import Screenshot4 from "@/assets/Screenshot (4).png";
import Screenshot5 from "@/assets/Screenshot (5).png";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <section className="relative overflow-hidden bg-[#131313] px-6 pt-20 pb-0">
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[radial-gradient(circle_at_top,_#e60000_0%,_transparent_55%)]" />
        </div>
        <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center gap-10 text-center">
          <div className="border border-[#e60000] bg-[#e6000005] px-4 py-1 font-mono text-xs font-bold tracking-[0.3em] text-[#e60000]">
            SYSTEM_LOAD_COMPLETE // V.2.0.4-STABLE
          </div>
          <div className="font-display text-[clamp(2rem,8vw,4.5rem)] font-bold leading-none text-[#e5e2e1]">
            <div>CODA //</div>
            <div className="text-[#e60000]">SNIPPET_MANAGER</div>
          </div>
          <p className="max-w-2xl text-lg text-[#e9bcb5]">
            The ultimate local-first snippet manager. Never lose a line of code again.
            Engineered for speed, hardened for privacy, and optimized for developers who
            live in the terminal.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pb-16">
            <a
              href="#download"
              className="flex items-center gap-3 bg-[#e60000] px-8 py-4 text-sm font-bold tracking-[0.2em] text-white shadow-[4px_4px_0_#131313]"
            >
              DEPLOY_NOW
            </a>
            <a
              href="https://github.com/Kena-AT/Coda_Web"
              className="flex items-center gap-3 border-2 border-[#e5e2e1] px-8 py-4 text-sm font-bold tracking-[0.2em] text-[#e5e2e1] shadow-[4px_4px_0_#131313]"
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

      <section className="border-t border-[#353534] bg-[#131313] px-6 py-24">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-16">
          <div className="flex flex-col items-center gap-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-[#e5e2e1]">
              SYSTEM_PREVIEWS
            </h2>
            <div className="h-1 w-32 bg-[#e60000]" />
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              { image: Screenshot3, label: "VIEW_01 // SEARCH_MATRIX" },
              { image: Screenshot4, label: "VIEW_02 // VAULT_INDEX" },
              { image: Screenshot5, label: "VIEW_03 // EDITOR_ENV" },
            ].map((card) => (
              <div
                key={card.label}
                className="flex flex-col border border-[#353534] bg-[#0e0e0e] shadow-[4px_4px_0_#131313]"
              >
                <div className="relative h-64 w-full overflow-hidden border-b border-[#353534] opacity-60">
                  <Image
                    src={card.image}
                    alt={card.label}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="px-6 py-4 font-mono text-xs tracking-[0.2em] text-[#e9bcb5]">
                  {card.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#353534] bg-[#131313] px-6 py-24">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-16">
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#e5e2e1]">CORE_FEATURES</h2>
            <div className="h-1 w-32 bg-[#e60000]" />
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="col-span-2 flex flex-col gap-6">
              <div className="flex flex-col gap-8 border border-[#353534] bg-[#201f1f] p-10 text-left">
                <div className="font-mono text-xs font-bold tracking-[0.2em] text-[#e60000]">
                  FEATURE_01
                </div>
                <div className="font-display text-xl md:text-2xl font-bold text-[#e5e2e1]">
                  SMART_SNIPPET_MANAGEMENT
                </div>
                <p className="text-sm text-[#e9bcb5]">
                  Organize your code with precision. Tag, categorize, and manage thousands
                  of snippets with zero lag. Local-first architecture ensures your data
                  never leaves your machine.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-4 border border-[#e60000] bg-[#0e0e0e] p-10">
                  <div className="font-mono text-xs font-bold tracking-[0.2em] text-[#e60000]">
                    FEATURE_03
                  </div>
                  <div className="font-display text-xl md:text-2xl font-bold text-[#e5e2e1]">
                    LIGHTNING_SEARCH
                  </div>
                  <p className="text-sm text-[#e9bcb5]">
                    Find any snippet in under 100ms. Our optimized search matrix handles
                    complex queries across all your local vaults instantly.
                  </p>
                </div>
                <div className="flex flex-col gap-4 border border-[#353534] bg-[#201f1f] p-10">
                  <div className="font-mono text-xs font-bold tracking-[0.2em] text-[#e60000]">
                    FEATURE_04
                  </div>
                  <div className="font-display text-xl md:text-2xl font-bold text-[#e5e2e1]">
                    OFFLINE_FIRST
                  </div>
                  <p className="text-sm text-[#e9bcb5]">
                    Engineered for reliability. Access and edit your snippets even without
                    an internet connection. Full local encryption included.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-6 border border-[#353534] bg-[#201f1f] p-10">
                <div className="font-mono text-xs font-bold tracking-[0.2em] text-[#e60000]">
                  FEATURE_02
                </div>
                <div className="font-display text-xl md:text-2xl font-bold text-[#e5e2e1]">
                  VERSION_CONTROL
                </div>
                <p className="text-sm text-[#e9bcb5]">
                  Every edit is tracked. Roll back to any previous version of a snippet with
                  built-in diffing and snapshot history.
                </p>
                <div className="mt-4 border border-[#353534] bg-[#2a2a2a] px-4 py-3 text-xs font-mono text-[#e5e2e1]">
                  TRACKING_STATE // ACTIVE
                </div>
              </div>
              <div className="flex flex-col gap-6 border border-[#353534] bg-[#201f1f] p-10">
                <div className="font-mono text-xs font-bold tracking-[0.2em] text-[#e60000]">
                  FEATURE_05
                </div>
                <div className="font-display text-xl md:text-2xl font-bold text-[#e5e2e1]">
                  USAGE_ANALYTICS
                </div>
                <p className="text-sm text-[#e9bcb5]">
                  Gain insights into your coding patterns. Track snippet usage and velocity
                  with privacy-focused, local telemetry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#353534] bg-[#0e0e0e] px-6 py-24">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-16">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#e5e2e1]">
              SYSTEM_REQUIREMENTS
            </h2>
            <div className="h-1 w-32 bg-[#e60000]" />
          </div>
          <div className="mx-auto w-full max-w-3xl border border-[#353534] bg-[#131313] p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex flex-col gap-6">
                <div className="space-y-1">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#e60000]">
                    OS_ARCHITECTURE
                  </div>
                  <div className="text-[#e5e2e1]">Windows 10 / 11 (64-bit)</div>
                </div>
                <div className="space-y-1">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#e60000]">
                    PROCESSOR_UNIT
                  </div>
                  <div className="text-[#e5e2e1]">1.6 GHz or faster processor</div>
                </div>
                <div className="space-y-1">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#e60000]">
                    MEMORY_BUFFER
                  </div>
                  <div className="text-[#e5e2e1]">4 GB RAM minimum</div>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="space-y-1">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#e60000]">
                    STORAGE_VAULT
                  </div>
                  <div className="text-[#e5e2e1]">200 MB available space</div>
                </div>
                <div className="space-y-1">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#e60000]">
                    DISPLAY_MATRIX
                  </div>
                  <div className="text-[#e5e2e1]">1280 x 800 resolution</div>
                </div>
                <div className="space-y-1">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#e60000]">
                    DEPENDENCY_CHECK
                  </div>
                  <div className="text-[#e5e2e1]">Edge WebView2 Runtime</div>
                </div>
              </div>
            </div>
            <div className="mt-10 border-t border-[#353534] pt-6 font-mono text-[10px] text-[#e9bcb5]">
              // SYSTEM_COMPATIBILITY_VERIFIED_V.1.0.0
            </div>
          </div>
        </div>
      </section>

      <section
        id="download"
        className="border-y border-[#353534] bg-[#0e0e0e] px-6 py-24"
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-16">
          <div className="flex flex-col items-center gap-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[#e5e2e1]">
              RELEASE_INTELLIGENCE
            </h2>
            <div className="h-1 w-32 bg-[#e60000]" />
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="flex flex-col gap-4 border border-[#353534] bg-[#201f1f] p-10 shadow-[4px_4px_0_#131313]">
              <div className="font-mono text-xs tracking-[0.2em] text-[#e60000]">
                BUILD_STATUS
              </div>
              <div className="font-display text-xl md:text-2xl font-bold text-[#e5e2e1]">
                V1.0.0_STABLE
              </div>
              <p className="text-sm text-[#e9bcb5]">
                Released May 2026 · Windows x64 · Hardened release channel.
              </p>
              <div className="mt-auto font-mono text-xs text-[#e5e2e1]">
                SHA256 // AVAILABLE_ON_GITHUB
              </div>
            </div>
            <div className="flex flex-col gap-4 border border-[#353534] bg-[#201f1f] p-10 shadow-[4px_4px_0_#131313]">
              <div className="font-mono text-xs tracking-[0.2em] text-[#e60000]">
                RELEASE_NOTES
              </div>
              <div className="font-display text-xl md:text-2xl font-bold text-[#e5e2e1]">
                PATCHLINE_02
              </div>
              <p className="text-sm text-[#e9bcb5]">
                Improved indexing, secure vault rotation, and updated terminal UI.
              </p>
              <a
                href="https://github.com/Kena-AT/Coda_Web/releases"
                className="mt-auto font-mono text-xs text-[#e5e2e1] underline"
              >
                READ_FULL_CHANGELOG
              </a>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="/Coda_1.0.0_x64-setup.exe"
              className="bg-[#e60000] px-10 py-5 text-sm font-bold tracking-[0.2em] text-white shadow-[4px_4px_0_#131313]"
            >
              DOWNLOAD_EXE
            </a>
            <a
              href="/Coda_1.0.0_x64_en-US.msi"
              className="border-2 border-[#e5e2e1] px-10 py-5 text-sm font-bold tracking-[0.2em] text-[#e5e2e1] shadow-[4px_4px_0_#131313]"
            >
              DOWNLOAD_MSI
            </a>
          </div>
        </div>
      </section>

      <button
        type="button"
        className="fixed bottom-10 right-10 z-50 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#131313] bg-[#ffb4a8] shadow-[4px_4px_0_#131313]"
        aria-label="Quick deploy scripts"
      >
        <svg viewBox="0 0 20 25" className="h-6 w-6" aria-hidden="true">
          <path
            d="M8.1875 20.25l6.46875-7.75-5 0 0.90625-7.09375-5.78125 8.34375 4.34375 0-0.9375 6.5 0 0m-3.1875 4.75l1.25-8.75-6.25 0 11.25-16.25 2.5 0-1.25 10 7.5 0-12.5 15-2.5 0 0 0"
            fill="#ffffff"
          />
        </svg>
      </button>
    </div>
  );
}
