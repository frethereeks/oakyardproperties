import type { Metadata } from "next";
import "../../globals.css";
import { Footer, Header } from "@/components";

import { DM_Sans, Nunito_Sans } from 'next/font/google'
import { Toaster } from "react-hot-toast";

const DMSans = DM_Sans({ subsets: ["latin"], weight: ["200", "300", "400", "500", "600", "700", "800", "900"], variable: "--DMSans" })
const nunitoSans = Nunito_Sans({ subsets: ["latin"], weight: ["200", "300", "400", "500", "600", "700", "800", "900"], variable: "--nunito" })

export const metadata: Metadata = {
  title: "Oakyard Properties :: Admin Dashboard",
  description: "Oakyard properties LTD is a full-service, privately held commercial and residential real estate company.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${DMSans.variable} ${nunitoSans.variable} antialiased font-nunito`}
      >
        <Toaster />
        <Header />
        <div className="min-h-[90vh]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
