import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AIChatbot } from "@/components/AIChatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AI Learning Portal - Master Artificial Intelligence",
    template: "%s | AI Learning Portal",
  },
  description: "Comprehensive AI learning platform with interactive tutorials, documentation, and hands-on projects. Learn ML, Deep Learning, NLP, Computer Vision, and more.",
  keywords: ["AI", "Artificial Intelligence", "Machine Learning", "Deep Learning", "Neural Networks", "NLP", "Computer Vision", "Data Science", "Python", "Tutorials"],
  authors: [{ name: "AI Learning Portal Team" }],
  creator: "AI Learning Portal",
  publisher: "AI Learning Portal",
  metadataBase: new URL("https://ai-learning-portal.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AI Learning Portal - Master Artificial Intelligence",
    description: "Master AI with interactive tutorials, documentation, and hands-on projects.",
    url: "https://ai-learning-portal.com",
    siteName: "AI Learning Portal",
    images: [
      {
        url: "/og-image.png", // We should probably ensure this exists or use a placeholder
        width: 1200,
        height: 630,
        alt: "AI Learning Portal Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Learning Portal - Master Artificial Intelligence",
    description: "Master AI with interactive tutorials, documentation, and hands-on projects.",
    images: ["/twitter-image.png"], // Placeholder
    creator: "@ailearningportal",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <AIChatbot />
      </body>
    </html>
  );
}
