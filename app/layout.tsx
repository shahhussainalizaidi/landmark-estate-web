import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import SmoothScroll from "@/components/SmoothScroll";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
export const metadata: Metadata = {
  metadataBase: new URL(base),
  title: { default: "Landmark Estates | Buy and sell property", template: "%s | Landmark Estates" },
  description: "Find homes, apartments and commercial property for sale. Landmark Estates helps you buy, sell and invest with confidence.",
  openGraph: { type: "website", siteName: "Landmark Estates" },
  robots: process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production" ? { index: false } : undefined,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <SmoothScroll />
        <main>{children}</main>
        <footer>© {new Date().getFullYear()} Landmark Estates</footer>
      </body>
    </html>
  );
}
