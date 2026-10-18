import { Inter } from "next/font/google";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wazida-M-Esha",
  description:
    "Portfolio of Wazida Momtaz Esha, a frontend developer passionate about building modern, responsive, and user-friendly web experiences with React, Next.js, and TypeScript.",
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Wazida Momtaz Esha",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-navy-950 text-text-primary font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
