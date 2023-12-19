"use client";
import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import "./css/Header.css";
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

const Header = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="header-container">
        <Link href={"/"} style={{ textDecoration: "none" }}>
          <h1>履修プラン提案サイト</h1>
        </Link>
        <div className="button-container">
          <Link href={"/subject"}>
            <Button variant="contained" color="ochre">
              履修プラン
            </Button>
          </Link>{" "}
          <Link href={"/review"}>
            <Button variant="contained" color="ochre">
              レビュー機能
            </Button>
          </Link>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Header;
