import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "@/app/globals.css";
import { AppShell } from "@/components/app-shell";

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans"
});

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display"
});

export const metadata: Metadata = {
  title: "Drishti AI",
  description: "AI-first business operations copilot for Assam retailers and wholesalers."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
