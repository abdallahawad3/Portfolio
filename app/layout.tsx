import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Abdullah Awad - Portfolio",
  description:
    "Welcome to my portfolio website! I'm Abdullah Awad, a passionate software developer specializing in creating dynamic and responsive web applications. Explore my projects, skills, and experience as you navigate through my site.",
  openGraph: {
    title: "Abdullah Awad - Portfolio",
    description:
      "Welcome to my portfolio website! I'm Abdullah Awad, a passionate software developer specializing in creating dynamic and responsive web applications. Explore my projects, skills, and experience as you navigate through my site.",
    url: "https://abdullahawad.me",
    siteName: "Abdullah Awad Portfolio",
    images: [
      {
        url: "assets/my.png",
        width: 1200,
        height: 630,
        alt: "Abdullah Awad Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullah Awad - Portfolio",
    description:
      "Welcome to my portfolio website! I'm Abdullah Awad, a passionate software developer specializing in creating dynamic and responsive web applications. Explore my projects, skills, and experience as you navigate through my site.",
    images: ["assets/my.png"],
  },
  keywords: [
    "Abdullah Awad",
    "Portfolio",
    "Software Developer",
    "Web Developer",
    "Projects",
    "Skills",
    "Experience",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "CSS",
    "HTML",
  ],
  authors: [{ name: "Abdullah Awad", url: "https://abdullahawad.me" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`overflow-x-hidden ${inter.variable} ${barlowCondensed.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
