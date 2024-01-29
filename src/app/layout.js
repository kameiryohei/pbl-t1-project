import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/Header";

const notosansJP = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata = {
  title: "授業計画提案システム",
  description: "Meijo-univ. class proposal system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={notosansJP.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
