import type { Metadata } from "next";
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
      <body>
        <ThemeRegistry>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
