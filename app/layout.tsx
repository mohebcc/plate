import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Plately | Your restaurant. Your orders. No commissions.",
  description:
    "Plately helps independent restaurants launch websites, take direct online orders, and get discovered locally.",
  metadataBase: new URL("https://plately.us")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
