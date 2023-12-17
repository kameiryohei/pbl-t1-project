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
          <h2>名城大学履情報工学部修登録ガイド</h2>
          <p>らくらく☆とうろく</p>
          <div class="v1_19">
            <div class="v1_14"></div>
          </div>
          <div class="container">
            <div class="v1_40">
              <Link href={"/subject"}>
                <Button variant="contained" color="ochre">
                  履修プラン提案
                </Button>
              </Link>
            </div>
            <div class="v1_40">
              <Link href={"/review"}>
                <Button variant="contained" color="ochre">
                  授業レビュー
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}
