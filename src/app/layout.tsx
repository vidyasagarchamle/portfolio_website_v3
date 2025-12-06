import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vidyasagar Chamle | Product Manager",
  description: "Product Manager with 3+ years of experience building AI products, Web3 applications, and SaaS platforms. Currently working on AI voice agents at ZAVIS and decentralized web infrastructure at Webhash.",
  keywords: ["Product Manager", "AI", "Web3", "SaaS", "Product Strategy", "Vidyasagar Chamle", "PM Portfolio"],
  authors: [{ name: "Vidyasagar Chamle" }],
  creator: "Vidyasagar Chamle",
  metadataBase: new URL("https://vidyasagar.xyz"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Vidyasagar Chamle - Product Manager",
    title: "Vidyasagar Chamle | Product Manager Who Ships What Matters",
    description: "Product Manager with 3+ years of experience building AI products, Web3 applications, and SaaS platforms. Open to new opportunities.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vidyasagar Chamle | Product Manager",
    description: "Product Manager with 3+ years of experience building AI products, Web3 applications, and SaaS platforms.",
    creator: "@w3rippr",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
