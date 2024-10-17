import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frethereeks :: Portfolio",
  description: "This is Frederick Jones Personal Portolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen relative bg-backdrop`}>
        <Header />
        <div className="min-h-[90vh]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
