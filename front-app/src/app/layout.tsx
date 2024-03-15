import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/app/header";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/header";
import { Footer } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cinema - App",
  description: "Team - Code Roasters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
