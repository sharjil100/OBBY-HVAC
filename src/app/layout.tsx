import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Obby – Stop Losing Plumbing Jobs to Missed Calls",
  description:
    "Obby catches the calls your plumbing techs miss on jobs, tags true emergencies like leaks and backups, and turns completed work into 5-star Google reviews – all for one flat monthly fee.",
  keywords: ["plumbing answering service", "plumbing call capture", "plumbing lead generation", "missed call recovery", "plumbing reviews"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
