import type { Metadata } from "next";

import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["400", "700"],
});

import "@/components/sass/globals.scss";

import "@/components/sass/layout.scss";

export const metadata: Metadata = {
  title: "Merveille Apparel",
  description: "Mervielle adalah brand fashion yang menghadirkan koleksi busana dengan konsep modern, chic, dan minimalis. Setiap item dirancang untuk memberikan tampilan yang elegan dan effortless, cocok untuk segala suasana, mulai dari casual hingga semi-formal. Mervielle menggabungkan kualitas bahan premium dengan desain yang terinspirasi dari tren global, menciptakan pakaian yang tidak hanya stylish, tetapi juga nyaman dipakai. Dengan fokus pada detail dan siluet yang pas, Mervielle memastikan setiap produk memiliki sentuhan eksklusif, menjadikan merek ini pilihan tepat bagi mereka yang ingin tampil fashionable dengan gaya yang tak lekang oleh waktu.",
};

import Head from "@/components/hooks/meta/Head"

import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/UI/layout/Navbar"), {
  ssr: false,
});
const Header = dynamic(() => import("@/components/UI/layout/Header"), {
  ssr: false,
});
const Footer = dynamic(() => import("@/components/UI/layout/Footer"), {
  ssr: false,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head />
      <body className={openSans.className}>
        <Navbar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
