import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Md. Muzahidul Islam — Software Developer",
  description:
    "Portfolio of Md. Muzahidul Islam, a software developer specializing in ReactJS, Next.js, PHP, and Laravel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          // backgroundImage: "radial-gradient(#e5e7eb20 1px, transparent 1px)",
        }}
        className={`
        ${geistSans.variable}
        ${geistMono.variable}
        antialiased 
        flex
        flex-col 
        min-h-screen
        bg-white
        `}
      >
        <Navbar />
        <main
          className="
          "
        >
          <div
            className="
             container
             mx-auto
            "
          >
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
