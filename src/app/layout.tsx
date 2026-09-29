import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Osman Mohammed Zamin | AI Engineer",
  description:
    "Explore Osman Mohammed Zamin’s work in AI engineering, Python backend systems and intelligent applications, including the TradBot desktop prototype.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
