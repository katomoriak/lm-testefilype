import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Instrument_Sans } from 'next/font/google';

const instrumentsans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument-sans', // optional, for CSS variable usage
  weight: ['400', '700'], // or any weights you need
});

export const metadata: Metadata = {
  title: "LM Pinturas",
  description: "Site de pinturas especiais e tals e pans",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={instrumentsans.variable}>
    <body>{children}</body>
    </html>
  );
}
