import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SunSet Metal Forming - Custom Metal Roofing | Alberta, Canada",
  description:
    "Professional metal roofing manufacturer in Alberta. We manufacture custom metal roofing materials for residential, agricultural & commercial applications. On-site rolling available.",
  keywords:
    "metal roofing Alberta, custom metal forming, standing seam roofing, agricultural metal roofing, commercial roofing, Canadian metal roofing",
  authors: [{ name: "SunSet Metal Forming" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "SunSet Metal Forming - Custom Metal Roofing",
    description: "Professional metal roofing manufacturer in Alberta, Canada",
    type: "website",
    locale: "en_CA",
    siteName: "SunSet Metal Forming",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Model Viewer Script */}
        <script
          type="module"
          src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
          async
        ></script>
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
