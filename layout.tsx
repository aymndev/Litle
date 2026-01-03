
import { Children } from "react";
import "./globals.css";

export const metadata = {
  title: "Chat App",
  description: "Simple frontend chat app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="app-center">
        {children}
      </body>
    </html>
  );
}
