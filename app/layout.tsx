import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Talent Nexus | Precision Talent Solutions",
  description: "Pragmatic executive search and talent solutions for technology, semiconductors, and diverse industries.",
  icons: { icon: "/logo.png" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
