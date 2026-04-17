import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Vättern Tandvård | Din tandläkare i Motala",
  description: "Välkomna till vår tandläkarmottagning i Motala. Vi erbjuder högkvalitativ, modern tandvård i en rogivande miljö.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className="scroll-smooth">
      <body className={`${dmSans.variable} ${cormorant.variable} font-sans min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow pt-0 md:pt-2">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
