// "use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import {
  Footer,
  MovieProvider,
  AuthProvider,
  Header,
  CinemaProvider,
  OrderProvider,
} from "@/components";
import { ScreenProvider } from "@/components/contexts/screen";
import { ShowtimeProvider } from "@/components/contexts/showtime";

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
        <AuthProvider>
          <MovieProvider>
            <CinemaProvider>
              <ScreenProvider>
                <OrderProvider>
                  <ShowtimeProvider>
                    <Header />
                    {children}
                    <Toaster />
                    <Footer />
                  </ShowtimeProvider>
                </OrderProvider>
              </ScreenProvider>
            </CinemaProvider>
          </MovieProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
