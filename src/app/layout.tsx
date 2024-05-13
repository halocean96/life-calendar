import { Inter } from "next/font/google";
import type { Viewport } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata = {
  title: "life calendar",
  openGraph: {
    title: "Life Calendar",
    description: "인생에 남은 주(weeks)를 보여줄게요.",
    image: "https://life-calendar-iota.vercel.app/life-calendar-og.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
