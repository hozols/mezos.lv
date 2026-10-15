import type { Metadata } from "next";
import { Newsreader, Manrope } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const newsreader = Newsreader({
  subsets: ["latin", "latin-ext"],
  axes: ["opsz"],
  variable: "--font-newsreader",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SIA Meži — Meža apsaimniekošanas konsultācijas",
  description:
    "Meža apsaimniekošanas konsultācijas un meža darbu organizēšana. Godīgs un saprotams padoms pirms ciršanas un kopšanas.",
  openGraph: {
    title: "SIA Meži — Meža apsaimniekošanas konsultācijas",
    description:
      "Godīgs un saprotams padoms pirms ciršanas un kopšanas. Konsultācijas un nepilnu 700 ha meža zemes apsaimniekošana.",
    locale: "lv_LV",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="lv" className={`${newsreader.variable} ${manrope.variable}`} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
