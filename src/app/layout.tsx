import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";
import ThemeRegistry from "./ThemeRegistry";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Сайт устазы Лейсан",
  description:
    "Моя миссия - ОБУЧИТЬ ПОНИМАНИЮ СЛОВ АЛЛАХА И НАУЧИТЬ ПРИМЕНЯТЬ КОРАН В ЖИЗНИ, РУКОВОДСТВОВАТЬСЯ ИМ И ДОСТИГАТЬ ВЫСОКИХ СТЕПЕНЕЙ РАЯ, через знание сур и аятов.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          margin: 0,
          position: "relative",
        }}
      >
        <ThemeRegistry>
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: -1,
              overflow: "hidden",
            }}
          >
            <Image
              src="/flowers-bg.jpg"
              alt="Background"
              fill
              priority
              sizes="100vw"
              style={{
                objectFit: "cover",
                objectPosition: "center bottom",
              }}
              className="background-image"
            />
          </div>
          <div
            style={{
              flex: "1 0 auto",
              position: "relative",
              zIndex: 1,
            }}
          >
            <Navbar />
            <main>{children}</main>
          </div>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
