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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://twintafoai.com";

export const metadata: Metadata = {
  title: "Twintafo AI | Digital twins for oncology trials",
  description:
    "Twintafo AI builds AI-powered digital twins for oncology trials to simulate outcomes, test trial designs, and quantify risk before real-world enrollment.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Twintafo AI",
    description:
      "AI-powered digital twins for oncology trials. Simulate outcomes, stress-test design decisions, and evaluate external controls.",
    url: siteUrl,
    siteName: "Twintafo AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Twintafo AI",
    description:
      "AI-powered digital twins for oncology trials. Simulate outcomes before real patients are enrolled.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
