import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/page";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-figTree relative bg-[#03031C] ">
        <main
          className="pt-16  min-h-screen px-5"
          style={{ background: `url(/squer.svg)` }}>
          <div className="max-w-[1440px] mx-auto">
            <Navbar />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
