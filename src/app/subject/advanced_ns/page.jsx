import React from "react";
import "../../../css/result1.css";
import App from "@/component/subjectlist/advance_ns";

const page = () => {
  return (
    <div className="result-container">
      <h2>先進プロジェクトコース</h2>
      <br />
      <h4>ネットワークエンジニアリングコース（あいうえお順）</h4>
      <App />
    </div>
  );
};

export default page;
