import "../styles/globals.css";

import type { Metadata } from "next";
import { Mulish } from "next/font/google";

import Analytics from "./Analytics";
import Providers from "./Providers";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Parth Kulkarni",
    default: "Parth",
  },
  description: "My Personal Portfolio | parthkulkarni04",
  icons: ["/svg/logo.svg"],
  keywords: ["Next.js", "React", "Portfolio", "Parth Kulkarni", "parthkulkarni04"],
  authors: [
    {
      name: "parthkulkarni04",
    },
  ],
  creator: "parthkulkarni04",
  metadataBase: new URL("https://parthkulkarni04.vercel.app/"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://parthkulkarni04.vercel.app/",
    title: "Parth Kulkarni",
    description: "My Personal Portfolio | parthkulkarni04",
    siteName: "Parth Kulkarni Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <Analytics />
      <body className={mulish.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
