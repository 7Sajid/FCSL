import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AppLoader } from "@/components/layout/AppLoader";
import { CustomCursor } from "@/components/layout/CustomCursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "First Capital Securities Limited (FCSL)",
  description: "Invest With Confidence. Trade With Intelligence. Your trusted partner for smarter participation in Bangladesh's capital market.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} min-h-screen flex flex-col font-sans`}>
        <CustomCursor />
        <AppLoader />
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
