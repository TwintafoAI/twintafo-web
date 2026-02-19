import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = "https://www.twintafoai.com";
const ogImageUrl = `${baseUrl}/Twintafo-web_photo_header.png`;

export const metadata: Metadata = {
  title: "Twintafo AI | Digital twins for oncology trials",
  description:
    "Twintafo AI builds AI-powered digital twins for oncology trials to simulate outcomes, test trial designs, and quantify risk before real-world enrollment.",
  metadataBase: new URL(baseUrl),
  alternates: { canonical: baseUrl },
  openGraph: {
    title: "Twintafo AI",
    description:
      "AI-powered digital twins for oncology trials. Curing cancer starts with better trials.",
    url: baseUrl,
    siteName: "Twintafo AI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: ogImageUrl,
        width: 1536,
        height: 1024,
        alt: "Twintafo AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Twintafo AI",
    description:
      "AI-powered digital twins for oncology trials. Curing cancer starts with better trials.",
    images: [ogImageUrl],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" prefix="og: http://ogp.me/ns#">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
