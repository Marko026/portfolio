import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
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
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <main
            className="pt-16  min-h-screen"
            style={{ background: `url(/squer.svg)` }}>
            <div className="max-w-[1440px] mx-auto">
              <Navbar />
              {children}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
