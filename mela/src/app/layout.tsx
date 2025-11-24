// Bismillahirrahmanirrahim 
// Elhamdulillahirabbulalemin
// Esselatu vesselamu ala rasulillah ve ala alihi ve sahbihi ecmain
// Allahumme salli ala seyyidina Muhammedin ve ala alihi ve sahbihi ecmain
// Allah u Ekber, Allahu Ekber, Allahu Ekber
// La ilahe illallah, Allahu Ekber, Allahu Ekber, ve lillahi'l-hamd


import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";
import { extractRouterConfig } from "uploadthing/server";
import { fileRouter } from "./api/uploadthing/core";
import "./globals.css";
import ReactQueryProvider from "./ReactQueryProvider";
import AssistantRoot from "./malper/assistant";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Mimarid",
    default: "Mimarid İç Mimarlık",
  },
  description: "Mimarid: Yaşam alanlarınızı estetik ve fonksiyonel çözümlerle yeniden tasarlayan iç mimarlık ofisi.",
  keywords: [
    "iç mimarlık",
    "mimari tasarım",
    "dekorasyon",
    "yaşam alanları",
    "ofis tasarımı",
    "ev dekorasyonu",
    "modern tasarım",
    "fonksiyonel çözümler",
    "estetik mekanlar",
    "Mimarid",
  ],
  authors: [{ name: "Mimarid İç Mimarlık", url: "https://mimarid.com" }],
  openGraph: {
    title: "Mimarid İç Mimarlık",
    description:
      "Mimarid: Yaşam alanlarınızı estetik ve fonksiyonel çözümlerle yeniden tasarlayan iç mimarlık ofisi.",
    url: "https://mimarid.com",
    siteName: "Mimarid",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,   },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mimarid İç Mimarlık",
    description:
      "Mimarid: Yaşam alanlarınızı estetik ve fonksiyonel çözümlerle yeniden tasarlayan iç mimarlık ofisi.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NextSSRPlugin routerConfig={extractRouterConfig(fileRouter)} />
        <ReactQueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </ReactQueryProvider>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}

export function Footer() {
  return (
    <footer className="flex items-center justify-center w-full h-16 bg-gray-800 text-white">
      <p className="text-sm">
        © {new Date().getFullYear()} Mimarid İç Mimarlık
      </p>
    </footer>
  );
}