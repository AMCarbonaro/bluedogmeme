import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "$BLUEDOG - Fighting Corporate Overpricing",
  description: "Blue Dog Democrats - The meme coin fighting corporate greed and overpricing. Join the revolution with $BLUEDOG.",
  keywords: ["BLUEDOG", "meme coin", "crypto", "pump.fun", "Solana", "Blue Dog"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
