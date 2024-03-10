import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import App from "./_app";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme='light'>
      <body className={inter.className}>
        <App>
          {children}
        </App>
      </body>
    </html>
  );
}
