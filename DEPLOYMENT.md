# Coda Web | Deployment Guide

This guide outlines the process for deploying the Coda Web landing page to **Vercel**, the recommended hosting platform for Next.js applications.

## Prerequisites

- **Vercel Account**: Create one at [vercel.com/signup](https://vercel.com/signup).
- **Node.js**: Version 18.17 or later installed locally.
- **Repository Access**: Ensure you have access to the [Kena-AT/Coda](https://github.com/Kena-AT/Coda) GitHub repository.

---

## Deployment Options

### 1. Vercel GitHub Integration (Recommended)

This method enables Continuous Deployment (CD), meaning every push to your `main` branch will automatically trigger a new production build.

1. Navigate to the [Vercel Dashboard](https://vercel.com/dashboard).
2. Click **Add New...** > **Project**.
3. Import the `Kena-AT/Coda_Web` repository.
4. Vercel will automatically detect the Next.js framework.
5. Click **Deploy**.

### 2. Vercel CLI (Local Deployment)

Use this if you want to deploy directly from your command line without a GitHub connection.

1. **Install the CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Authentication**:
   ```bash
   vercel login
   ```

3. **Deploy Preview**:
   ```bash
   vercel
   ```

4. **Deploy to Production**:
   ```bash
   vercel --prod
   ```

---

## Configuration

### Environment Variables

The application is designed to be "zero-config" for basic usage. It uses a 1-hour revalidation cache for GitHub API requests to avoid hitting rate limits.

If you encounter `403 Forbidden` errors due to high traffic, you can add a **GitHub Personal Access Token** to increase your rate limit:

1. Generate a token at [GitHub Settings](https://github.com/settings/tokens).
2. In Vercel: **Project Settings** > **Environment Variables**.
3. Add `GITHUB_TOKEN` as the key and your token as the value.

### Image Optimization

The project uses high-quality screenshot assets. These are already configured in `next.config.js`:

- **Qualities**: Configured up to `85` to maintain visual fidelity.
- **Formats**: Supports `AVIF` and `WebP` for maximum performance.

---

## Validation & Maintenance

### Local Verification

Always run a local build before deploying to catch potential TypeScript or build-time errors:

```bash
npm run build
```

### Monitoring

- **Vercel Analytics**: The site is pre-configured with `@vercel/analytics`. Once deployed, you can view real-time traffic and event tracking in the Vercel dashboard.
- **System Status**: The landing page includes a "System Status" indicator. If the GitHub API is unavailable, the site will automatically switch to the `src/data/fallback-release.json` dataset to ensure the site remains functional.
