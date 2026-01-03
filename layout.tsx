
import { Children } from "react";

export const metadata = {
  title: "Chat App",
  description: "Simple frontend chat app",
};

export default function RootLayout({ children }: {children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 flex justify-center items-center min-h-screen">
        
        {children}
      </body>
    </html>
  );
}
