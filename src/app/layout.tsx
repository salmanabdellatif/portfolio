import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import { ThemeScript } from "@/components/ThemeScript";
import Header from "@/components/layout/Header";

const fira_code = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  title: "Salman | Software Engineer",
  description: "Specializing in React, Next.js, and modern web technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fira_code.variable} antialiased`}>
        <ThemeScript />
        <div className="max-w-2xl mx-auto px-4">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
