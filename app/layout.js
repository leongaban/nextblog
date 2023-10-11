import "./globals.css";
import { Inter } from "next/font/google";

import TopNav from "@/components/TopNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextBlog",
  description: "Crypto investment blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
