import type { Metadata } from "next";
import localFont from "next/font/local";
import { Manrope } from 'next/font/google'
import "./globals.css";
import "./inline.css";
import { Providers } from "../components/providers";
import { Appbar } from "@powerpaywallet/ui/appbar";
import { signIn, signOut, useSession } from "next-auth/react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});
const ManropeSanSerif = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "PowerPay Wallet",
  description: "PowerPay App for users",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${ManropeSanSerif.variable}`}>
        {children}
      </body>
    </html>
  );
}
