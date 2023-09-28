import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Potential POC",
  description:
    "Proving a flow that uses blockchain technology without the user's knowledge.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
