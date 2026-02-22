import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter, Urbanist } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import Footer from "@/components/Footer";

// Setup font Inter
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Setup font Urbanist
const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Citra Agung Pratama Remitansi",
  description: "Solusi Transfer Dana yang Cepat, Aman, dan Terpercaya",
  icons: {
    icon: "/assets/tab-icon.png",
    shortcut: "/assets/tab-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${inter.variable} ${urbanist.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <ToastContainer position="top-right" autoClose={3000} theme="dark" />
      </body>
    </html>
  );
}
