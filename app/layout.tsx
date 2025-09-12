import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

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
    default: "Project Portfolio Blog",
    template: "%s | Project Portfolio Blog",
  },
  description: "A showcase of my projects, technical skills and development journey",
  keywords: ["portfolio", "projects", "software development", "full-stack", "web development"],
  authors: [{ name: "Shanise Ruvimbo Mukwashi" }],
  creator: "Shanise Ruvimbo Mukwashi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    siteName: "Project Portfolio Blog",
    title: "Project Portfolio Blog",
    description: "A showcase of my projects, technical skills, and development journey",
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Portfolio Blog",
    description: "A showcase of my projects, technical skills, and development journey",
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
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
