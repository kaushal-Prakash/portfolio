import type { Metadata } from "next";
import { Montserrat, Source_Sans_3 } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import "./globals.css";

const montserrat = Montserrat({
  display: "swap",
  subsets: ["latin-ext"],
  variable: "--font-montserrat",
  fallback: ["sans-serif"],
  preload: true,
});

const sourceSans = Source_Sans_3({
  display: "swap",
  subsets: ["latin-ext"],
  variable: "--font-source-sans",
  fallback: ["sans-serif"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Kaushal Prakash — Portfolio",
  icons:{
    icon:"/icon.png"
  },
  description:
    "Kaushal is an Full Stack Developer with a strong technical background, dedicated to creating projects that deliver innovative and sustainable digital solutions",
  authors: [{ name: "Kaushal Prakash" }],
  keywords:
    "Kaushal Prakash, Project Manager, IT Project Manager, Frontend Developer, Web Developer, UI Design, Full Stack Developer, Student",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <Script
          id="CookieYes"
          src={`https://cdn-cookieyes.com/client_data/91650f913ccfc2afab34de8c/script.js`}
          strategy="beforeInteractive"
        /> */}
      </head>
      <body className={`${montserrat.variable} ${sourceSans.variable}`}>
        {children}
      </body>
      {/* <GoogleAnalytics gaId="G-DZL0Y5P3XE" /> */}
    </html>
  );
}
