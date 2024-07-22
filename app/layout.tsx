import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { NavBar } from "@/components/navBar";

const dm_sans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mark8",
  description: "By Fabien for Awsomity Lab",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>
        <NavBar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
