import Hmselect from "@/component/subjectlist/general_hm";
import React from "react";
import "../../../css/result1.css";
import App from "@/component/subjectlist/general_hm";

const page = () => {
  return (
    <div className="result-container">
      <h2>総合コース</h2>
      <br />
      <h4>ヒューマンメディアプログラム（あいうえお順）</h4>
      <App />
    </div>
  );
};

export default page;
