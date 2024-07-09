"use client";
import { Inter } from "next/font/google";
import { Providers } from "@/lib/redux/provider";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Header from "@/app/rootLayouts/Header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-[var(--content-color)]">
          <Header />
          <Providers>
            <NextUIProvider className="">{children}</NextUIProvider>
          </Providers>
        </div>
      </body>
    </html>
  );
}
