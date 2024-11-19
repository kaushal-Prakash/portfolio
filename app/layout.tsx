import type { Metadata } from "next";
import { Montserrat, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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
  icons: {
    icon: "/icon.png",
  },
  description: 
    "Kaushal is a Full Stack Developer with a strong technical background, dedicated to creating projects that deliver innovative and sustainable digital solutions",
  authors: [{ name: "Kaushal Prakash" }],
  keywords:
    "Kaushal Prakash, Frontend Developer, Web Developer, UI Design, Full Stack Developer, Student",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-W59VE8W7L8"></Script>
        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={{ __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W59VE8W7L8');
          `}}
        />
      </head>
      <body className={`${montserrat.variable} ${sourceSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
