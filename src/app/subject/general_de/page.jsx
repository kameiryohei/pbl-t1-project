import React from "react";
import "../../../css/result1.css";
import App from "@/component/subjectlist/general_de";

const page = () => {
  return (
    <div className="result-container">
      <h2>総合コース</h2>
      <br />
      <h4>データエンジニアリングプログラム（あいうえお順）</h4>
      <App />
    </div>
  );
};

export default page;
