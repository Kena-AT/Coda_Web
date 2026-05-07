# Coda Web

Coda Web is the production-ready landing page for the **Coda** desktop application, a local-first, blazing-fast snippet manager engineered for speed, privacy, and developer workflows. Built with Next.js, this site provides secure distribution, system telemetry, and a dynamic presentation of Coda's features.

## Architecture & Tech Stack
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS / Vanilla CSS
- **Deployment**: Static Export / Production Build

## Core Systems

### Release Intelligence & Download Distribution
- **Dynamic Release Fetching**: Interacts with the GitHub API to fetch the latest `.exe` and `.msi` assets.
- **Robust Fallback Mechanism**: Features an integrated local JSON fallback to ensure downloads are always available, even if the GitHub API rate limits are reached or the service is temporarily unavailable.
- **SHA256 Verification**: Includes a built-in SHA256 hash copy-to-clipboard functionality, allowing users to verify the integrity of their downloaded installers effortlessly.
- **Changelog System**: Dynamically extracts and displays the latest release notes and version history, maintaining high transparency about recent updates.

### Telemetry & Analytics
- **Interactive Tracking**: Uses a lightweight telemetry utility (`src/lib/telemetry.ts`) to track specific download events (EXE vs. MSI) and general user engagement.
- **System Status Indicators**: Provides real-time feedback to users on the source of their download data (e.g., API vs. Fallback), ensuring full system transparency.

### Design & Responsiveness
- **Matrix / Cyberpunk Aesthetic**: Uses a stark, high-contrast dark mode design with monospace typography, CRT/terminal-inspired accents, and vibrant red highlight colors (`#e60000`).
- **Responsive Layout**: Designed to provide an optimal viewing experience across all devices, from mobile phones to ultra-wide desktop monitors.
- **Screenshot Carousel**: Features an interactive visual tour of the Coda desktop application's capabilities, including snippet management, the vault explorer, and the analytics dashboard.

## Development

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build
```

## Desktop Application
Coda Web serves as the distribution platform for **Coda**, a desktop application built with Tauri, Rust, and TypeScript. Coda provides a secure, offline-first environment for managing code snippets with features like instant search, version control, vault encryption, and local AI integration.