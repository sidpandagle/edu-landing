import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/shared/components/NavBar";
import Footer from "@/shared/components/Footer";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "NSARROWS",
  description: "Discover top-notch graphic design services that transform your vision into stunning visuals. From branding to marketing materials, we deliver creative solutions tailored to your needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="fantasy">
      <body className={poppins.className}>
        <NavBar></NavBar>
        {children}
        <a href="#navbar">
          <img className="fixed right-0 bottom-0 z-10 m-8 w-8 animate-bounce" src={"/gotop.png"} alt="gotop" height={40} width={40} />
        </a>
        <a href={"https://wa.me/918484856189"} target="_blank">
          <img className="fixed left-0 bottom-0 z-10 m-8 w-10" src={"/whatsapp.svg"} alt="gotop" height={40} width={40} />
        </a>
        <Footer />
      </body>
    </html>
  );
}
