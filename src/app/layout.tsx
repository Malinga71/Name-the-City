import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Name The City",
  description: "A gorgeous game testing your city knowledge.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="app-container">
          {children}
        </main>
      </body>
    </html>
  );
}
