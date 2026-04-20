import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Obby – Stop Losing HVAC Jobs to Voicemail",
  description:
    "Obby catches the calls your techs miss during heat waves and cold snaps, tags true emergencies, and turns happy service calls into 5-star Google reviews – all for one flat monthly fee.",
  keywords: ["HVAC answering service", "HVAC call capture", "HVAC lead generation", "missed call recovery", "HVAC reviews"],
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
