import type { Metadata } from "next";
import { Inter, Montserrat, Changa_One } from "next/font/google";
import "./globals.css";
import Header from "./components/Navbar";
import Footer from "./components/Footer";
import MotionProvider from "./components/MotionProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const changaOne = Changa_One({
  variable: "--font-changa-one",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "lanre phillips.",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${montserrat.className} ${changaOne.variable} antialiased`}
      >
        <Header />
        <MotionProvider>{children}</MotionProvider>
        <Footer />
      </body>
    </html>
  );
}
