import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/page";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio of a full-stack developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-figTree relative bg-[#03031C] ">
        <main className="pt-16  min-h-screen px-5 bg-[url('/squer.svg')]">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
