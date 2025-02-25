import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/common/Navigation";
import Footer from "@/components/common/Footer";
import { RootLayout as CustomRootLayout } from "@/components/layout/RootLayout";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: "Rocky Mountain Wedding Co.",
  description: "Creating unforgettable mountain weddings in the Canadian Rockies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navigation />
        <main className="flex-grow pt-24">
          <CustomRootLayout>{children}</CustomRootLayout>
        </main>
        <Footer />
      </body>
    </html>
  );
}
