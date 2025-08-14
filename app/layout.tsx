import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Roshan Thapa Magar - Software Engineer Resume",
  description:
    "Professional resume of Roshan Thapa Magar, a self-taught software engineer skilled in full-stack development, UI/UX design, and modern web technologies including React, Node.js, and cloud platforms.",
  keywords:
    "Roshan Thapa Magar, Software Engineer, Full Stack Developer, React, Node.js, UI/UX Design, Web Development, Nepal",
  authors: [{ name: "Roshan Thapa Magar" }],
  generator: "Roshan Thapa Magar",
  openGraph: {
    title: "Roshan Thapa Magar - Software Engineer",
    description:
      "Professional resume showcasing expertise in full-stack development and modern web technologies",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roshan Thapa Magar - Software Engineer",
    description:
      "Professional resume showcasing expertise in full-stack development and modern web technologies",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
