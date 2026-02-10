import type { Metadata } from "next";
import "./globals.css";

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="lv">
      <body className="antialiased">{children}</body>
    </html>
  );
}
