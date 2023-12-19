"use client";
import Link from "next/link";
import { Button } from "@mui/material";
import "../css/home.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    ochre: {
      main: "#F44336",
      light: "#aa2e25",
      dark: "#aa2e25",
      contrastText: "#242105",
    },
  },
});

export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="homeimage">
          <h2>名城大学履情報工学部履修提案サイト</h2>
          <p>
            このWebサイトは名城大学情報工学部の履修に特化して作成されたWebサイトです。
          </p>
          <p>
            あなたに合った履修プランを提案します。また、授業レビューを投稿、閲覧することができます。
          </p>

          <div class="container123">
            <Link href={"/subject"}>
              <Button variant="contained" color="ochre">
                履修プラン提案
              </Button>
            </Link>
            <Link href={"/review"}>
              <Button variant="contained" color="ochre">
                授業レビュー
              </Button>
            </Link>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}
