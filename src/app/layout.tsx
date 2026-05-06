import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Coda | Local-First Snippet Manager for Developers",
  description: "Secure, offline-first snippet management with AI-powered search, version control, and privacy-focused usage analytics. Engineered for high-velocity developers.",
  keywords: ["snippet manager", "code snippets", "developer tools", "local-first", "AI code search", "offline snippet tool"],
};

import { LayoutWrapper } from "@/components/Layout";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${inter.variable}`}
        suppressHydrationWarning
      >
        <LayoutWrapper>{children}</LayoutWrapper>
        <Analytics />
      </body>
    </html>
  );
}
