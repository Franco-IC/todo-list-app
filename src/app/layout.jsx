import "./globals.css";
import Providers from "./providers";

import Alert from "./components/Alert";
import Footer from "./components/sections/Footer";

export const metadata = {
  title: "To-Do List App",
  description: "A simple to-do list app built with Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-indigo-950 text-white">
        <Providers>{children}</Providers>

        <Alert />
        <Footer />
      </body>
    </html>
  );
}
