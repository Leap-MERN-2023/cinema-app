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
  ShowtimeProvider,
  ComingsoonProvider,
  EventProvider,
} from "@/components";
import { PasswordRecoverProvider } from "@/components/contexts/passwordrecover";

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
          <PasswordRecoverProvider>
            <MovieProvider>
              <ComingsoonProvider>
                <EventProvider>
                  <CinemaProvider>
                    <ShowtimeProvider>
                      <OrderProvider>
                        <Header />
                        {children}
                        <Toaster />
                        <Footer />
                      </OrderProvider>
                    </ShowtimeProvider>
                  </CinemaProvider>
                </EventProvider>
              </ComingsoonProvider>
            </MovieProvider>
          </PasswordRecoverProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
