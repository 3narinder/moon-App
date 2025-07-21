import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AppProviders } from "@/components/Provider"; // ✅ FIXED

export const metadata: Metadata = {
  title: "Moon",
  description: "Shop the best ceramics",
  icons: "/favicon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col">
        <AppProviders>
          <Navbar />
          <main className="flex-1 pt-[75px]">{children}</main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
