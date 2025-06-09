import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pace a Run – Free Running Pace & Goal Time Calculator for Runners",
  keywords: [
    "pace calculator",
    "running pace",
    "goal time calculator",
    "running goal time",
    "running pace calculator",
    "calculate running pace",
    "calculate goal time",
    "running pace goal",
    "running pace calculator app",
    "running goal calculator",
    "marathon pace calculator",
    "race pace calculator",
    "personal best running calculator",
  ],
  description:
    "Easily calculate your running pace or goal time with Pace a Run. Perfect for runners training for races, marathons, or improving their personal best. Try our free, easy-to-use running pace calculator app!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1 " />
      <link
        rel="apple-touch-icon"
        href="/apple-touch-icon.png"
        sizes="180x180"
      />
      <link rel="canonical" href="https://www.pacearun.com/" />
      <link rel="manifest" href="/manifest.webmanifest" />
      {/* Open Graph Meta Tags */}
      <meta
        property="og:title"
        content="Pace a Run – Free Running Pace & Goal Time Calculator for Runners"
      />
      <meta
        property="og:description"
        content="Easily calculate your running pace or goal time with Pace a Run. Perfect for runners training for races, marathons, or improving their personal best. Try our free, easy-to-use running pace calculator app!"
      />
      <meta property="og:image" content="/android-chrome-512x512.png" />
      <meta property="og:url" content="https://www.pacearun.com/" />
      <meta property="og:type" content="website" />
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Pace a Run – Free Running Pace & Goal Time Calculator for Runners"
      />
      <meta
        name="twitter:description"
        content="Easily calculate your running pace or goal time with Pace a Run. Perfect for runners training for races, marathons, or improving their personal best. Try our free, easy-to-use running pace calculator app!"
      />
      <meta name="twitter:image" content="/android-chrome-512x512.png" />
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Pace a Run",
            "url": "https://www.pacearun.com/",
            "description": "Easily calculate your running pace or goal time with Pace a Run. Perfect for runners training for races, marathons, or improving their personal best. Try our free, easy-to-use running pace calculator app!",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.pacearun.com/?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
        `}
      </script>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
