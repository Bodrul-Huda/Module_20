import { Toaster } from "react-hot-toast";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

export const metadata = {
  title: "Blog Magazine",
  description: "Well come to Blog Magazine",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
        <NextTopLoader color="#E60000" height={2} speed={200} />
      </body>
    </html>
  );
}
