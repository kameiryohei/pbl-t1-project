import React from "react";
import "../../../css/result1.css";
import BasicAccordion from "@/component/subjectlist/general_pc";
import App from "@/component/subjectlist/general_pc";

const page = () => {
  return (
    <div className="result-container">
      <h2>総合コース</h2>
      <br />
      <h4>フィジカルコンピューティングプログラム（あいうえお順）</h4>
      <App />
    </div>
  );
};

export default page;
