import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

import { Providers } from './providers'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js Lab 1",
  description: "Made by Oleksandr Parkhomenko",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body suppressHydrationWarning={true}><Providers>{children}</Providers></body>
    </html>
  );
}

