import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from "./provider";
import Head from "next/head";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fidelia's Portfolio",
  description: "Explore Fidelia's journey through the digital landscape with her meticulously crafted portfolio. Featuring a seamless blend of innovation and functionality, this Next.js-powered website brings her projects to life with fluid navigation and captivating visuals. Whether you're drawn to her dynamic React applications, elegant UI designs, or insightful blog posts, Fidelia's Portfolio is your gateway to discovering the future of web development and design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <Analytics/>
        </body>
    </html>
  );
}
