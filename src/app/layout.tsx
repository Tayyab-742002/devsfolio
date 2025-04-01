import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Wrapper from "@/components/general/MainWrapper";
import { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Initialize EmailJS
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex justify-center items-center`}
      >
        <Wrapper>{children}</Wrapper>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
