import fallbackRelease from "@/data/fallback-release.json";

export async function getReleaseData() {
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
