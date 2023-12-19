import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "@/css/subject_conpo_style.css";
const CourseAccordion = ({ courseName, instructors, syllabusLink }) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography>{courseName}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          担当教員：{instructors} <br />
          シラバス：
          <Link href={syllabusLink} target="_blank" rel="noopener noreferrer">
            ここをクリック
          </Link>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

const App = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div
          style={{
            flex: 1,
            textAlign: "center",
          }}
        >
          <h3
            style={{
              textAlign: "center",
              borderBottom: `5px solid red`,
              display: "inline-block",
            }}
          >
            1年次
          </h3>

          <CourseAccordion
            courseName="体育科学１，２"
            instructors="複数名"
            syllabusLink="https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?value(risyunen)=2023&value(semekikn)=1&value(kougicd)=641131&value(crclumcd)=12205"
          />

          <CourseAccordion
            courseName="化学実験１，２"
            instructors="複数名"
            syllabusLink="https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?value(risyunen)=2023&value(semekikn)=1&value(kougicd)=641212&value(crclumcd)=12205"
          />

          <CourseAccordion
            courseName="コンピュータアーキテクチャ１"
            instructors="複数名"
            syllabusLink="https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?value(risyunen)=2023&value(semekikn)=1&value(kougicd)=641803&value(crclumcd)=12205"
          />
          <CourseAccordion
            courseName="コンピュータリテラシー"
            instructors="複数名"
            syllabusLink="https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?value(risyunen)=2023&value(semekikn)=1&value(kougicd)=641215&value(crclumcd)=12205"
          />

          <CourseAccordion
            courseName="第二外国語１"
            instructors="複数名"
            syllabusLink="https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?value(risyunen)=2023&value(semekikn)=1&value(kougicd)=641124&value(crclumcd)=12205"
          />
          <CourseAccordion
            courseName="第二外国語２"
            instructors="複数名"
            syllabusLink="https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?value(risyunen)=2023&value(semekikn)=1&value(kougicd)=641524&value(crclumcd)=12205"
          />
          <CourseAccordion
            courseName="情報工学基礎演習"
            instructors="複数名"
            syllabusLink="https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?value(risyunen)=2023&value(semekikn)=1&value(kougicd)=641303&value(crclumcd)=12205"
          />
          <CourseAccordion
            courseName="情報工学部の世界"
            instructors="複数名"
            syllabusLink="https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?value(risyunen)=2023&value(semekikn)=1&value(kougicd)=641301&value(crclumcd)=12205"
          />
          <CourseAccordion
            courseName="情報通信ネットワーク"
            instructors="複数名"
            syllabusLink="https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?value(risyunen)=2023&value(semekikn)=1&value(kougicd)=641801&value(crclumcd)=12205"
          />
          <CourseAccordion
            courseName="微分積分１"
            instructors="複数名"
            syllabusLink="https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?value(risyunen)=2023&value(semekikn)=1&value(kougicd)=641201&value(crclumcd)=12205"
          />
          <CourseAccordion
            courseName="微分積分２"
            instructors="複数名"
            syllabusLink="https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?value(risyunen)=2023&value(semekikn)=1&value(kougicd)=641601&value(crclumcd)=12205"
          />
          <CourseAccordion
            courseName="物理学１"
            instructors="複数名"
            syllabusLink="https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?value(risyunen)=2023&value(semekikn)=1&value(kougicd)=641207&value(crclumcd)=12205"
          />
          <CourseAccordion
            courseName="物理学２"
            instructors="複数名"
            syllabusLink="https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?value(risyunen)=2023&value(semekikn)=1&value(kougicd)=641607&value(crclumcd)=12205"
          />
          <CourseAccordion
            courseName="プログラミング演習１"
            instructors="複数名"
            syllabusLink="https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?value(risyunen)=2023&value(semekikn)=1&value(kougicd)=641405&value(crclumcd)=12205"
          />
          <CourseAccordion
            courseName="プログラミング演習２"
            instructors="複数名"
            syllabusLink="https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?value(risyunen)=2023&value(semekikn)=1&value(kougicd)=641807&value(crclumcd)=12205"
          />
          <CourseAccordion
            courseName="プラクティカルICT"
            instructors="複数名"
            syllabusLink="https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?value(risyunen)=2023&value(semekikn)=1&value(kougicd)=641703&value(crclumcd)=12205"
          />
          <CourseAccordion
            courseName="マルチメディア基礎"
            instructors="複数名"
            syllabusLink="https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?value(risyunen)=2023&value(semekikn)=1&value(kougicd)=641401&value(crclumcd)=12205"
          />
          <CourseAccordion
            courseName="確率・統計"
            instructors="複数名"
            syllabusLink="https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?value(risyunen)=2023&value(semekikn)=1&value(kougicd)=641805&value(crclumcd)=12205"
          />
          <CourseAccordion
            courseName="線形代数１"
            instructors="複数名"
            syllabusLink="https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?value(risyunen)=2023&value(semekikn)=1&value(kougicd)=641205&value(crclumcd)=12205"
          />
          <CourseAccordion
            courseName="線形代数２"
            instructors="複数名"
            syllabusLink="https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?value(risyunen)=2023&value(semekikn)=1&value(kougicd)=641605&value(crclumcd)=12205"
          />
          <CourseAccordion
            courseName="英語コミュニケーション１"
            instructors="複数名"
            syllabusLink="https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?value(risyunen)=2023&value(semekikn)=1&value(kougicd)=641101&value(crclumcd)=12205"
          />
          <CourseAccordion
            courseName="英語コミュニケーション２"
            instructors="複数名"
            syllabusLink="https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?value(risyunen)=2023&value(semekikn)=1&value(kougicd)=641501&value(crclumcd)=12205"
          />
          <CourseAccordion
            courseName="離散数学"
            instructors="複数名"
            syllabusLink="https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?value(risyunen)=2023&value(semekikn)=1&value(kougicd)=641403&value(crclumcd)=12205"
          />
          <div style={{ backgroundColor: "#f16868", padding: "10px" }}>
            <CourseAccordion
              courseName="創造的思考法"
              instructors="複数名"
              syllabusLink="https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?value(risyunen)=2023&value(semekikn)=1&value(kougicd)=641811&value(crclumcd)=12205"
            />
          </div>
          <CourseAccordion
            courseName="テクニカルリテラシー"
            instructors="複数名"
            syllabusLink="https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?value(risyunen)=2023&value(semekikn)=1&value(kougicd)=641701&value(crclumcd)=12205"
          />
          <CourseAccordion
            courseName="人文/社会１"
            instructors="複数名"
            syllabusLink="https://example.com/syllabus9"
          />
          <CourseAccordion
            courseName="人文/社会２"
            instructors="複数名"
            syllabusLink="https://example.com/syllabus10"
          />
        </div>
        <div
          style={{
            flex: 1,
            textAlign: "center",
            borderBottom: "1px solid red",
          }}
        >
          <h3
            style={{
              textAlign: "center",
              borderBottom: `5px solid red`,
              display: "inline-block",
            }}
          >
            2年次
          </h3>
          <CourseAccordion
            courseName="アジア/欧米１，２"
            instructors="複数名"
            syllabusLink="https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?value(risyunen)=2023&value(semekikn)=1&value(kougicd)=642141&value(crclumcd)=12205"
          />
          <CourseAccordion
            courseName="オペレーティングシステム"
            instructors="複数名"
            syllabusLink="https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?value(risyunen)=2023&value(semekikn)=1&value(kougicd)=642819&value(crclumcd)=12205"
          />
          <CourseAccordion
            courseName="アルゴリズム・データ構造"
            instructors="複数名"
            syllabusLink="https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?value(risyunen)=2023&value(semekikn)=1&value(kougicd)=642407&value(crclumcd)=12205"
          />
          <CourseAccordion
            courseName="データベース"
            instructors="複数名"
            syllabusLink="https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?value(risyunen)=2023&value(semekikn)=1&value(kougicd)=642411&value(crclumcd)=12205"
          />
          <CourseAccordion
            courseName="データサイエンス基礎"
            instructors="複数名"
            syllabusLink="https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?value(risyunen)=2023&value(semekikn)=1&value(kougicd)=642413&value(crclumcd)=12205"
          />
          <CourseAccordion
            courseName="ディジタル信号処理１"
            instructors="複数名"
            syllabusLink="https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?value(risyunen)=2023&value(semekikn)=1&value(kougicd)=642405&value(crclumcd)=12205"
          />
          <CourseAccordion
            courseName="ディジタル信号処理２"
            instructors="複数名"
            syllabusLink="https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?value(risyunen)=2023&value(semekikn)=1&value(kougicd)=642805&value(crclumcd)=12205"
          />
          <CourseAccordion
            courseName="ディジタル回路１"
            instructors="複数名"
            syllabusLink="https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?value(risyunen)=2023&value(semekikn)=1&value(kougicd)=642401&value(crclumcd)=12205"
          />
          <CourseAccordion
            courseName="ディジタル回路２"
            instructors="複数名"
            syllabusLink="https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?value(risyunen)=2023&value(semekikn)=1&value(kougicd)=642803&value(crclumcd)=12205"
          />
          <CourseAccordion
            courseName="第二外国語３"
            instructors="複数名"
            syllabusLink="https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?value(risyunen)=2023&value(semekikn)=1&value(kougicd)=642124&value(crclumcd)=12205"
          />
          <CourseAccordion
            courseName="第二外国語４"
            instructors="複数名"
            syllabusLink="https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?value(risyunen)=2023&value(semekikn)=1&value(kougicd)=642524&value(crclumcd)=12205"
          />
          <CourseAccordion
            courseName="応用解析"
            instructors="複数名"
            syllabusLink="https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?value(risyunen)=2023&value(semekikn)=1&value(kougicd)=642813&value(crclumcd)=12205"
          />
          <CourseAccordion
            courseName="技術者倫理"
            instructors="複数名"
            syllabusLink="https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?value(risyunen)=2023&value(semekikn)=1&value(kougicd)=642602&value(crclumcd)=12205"
          />
          <CourseAccordion
            courseName="言語・オートマトン"
            instructors="複数名"
            syllabusLink="https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?value(risyunen)=2023&value(semekikn)=1&value(kougicd)=642809&value(crclumcd)=12205"
          />
          <CourseAccordion
            courseName="電気電子回路１"
            instructors="複数名"
            syllabusLink="https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?value(risyunen)=2023&value(semekikn)=1&value(kougicd)=642403&value(crclumcd)=12205"
          />
          <div style={{ backgroundColor: "#f16868", padding: "10px" }}>
            <CourseAccordion
              courseName="研究開発リテラシー"
              instructors="複数名"
              syllabusLink="https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?value(risyunen)=2023&value(semekikn)=1&value(kougicd)=642420&value(crclumcd)=12205"
            />

            <CourseAccordion
              courseName="PBL概論"
              instructors="亀谷先生"
              syllabusLink="https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?value(risyunen)=2023&value(semekikn)=1&value(kougicd)=641131&value(crclumcd)=12205"
            />

            <CourseAccordion
              courseName="アプリケーション開発"
              instructors="複数名"
              syllabusLink="https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?value(risyunen)=2023&value(semekikn)=1&value(kougicd)=641131&value(crclumcd)=12205"
            />
          </div>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            flex: 1,
            textAlign: "center",
            borderBottom: "1px solid red",
          }}
        >
          <h3
            style={{
              textAlign: "center",
              borderBottom: `5px solid red`,
              display: "inline-block",
            }}
          >
            3年次
          </h3>

          <CourseAccordion
            courseName="コンピュータアーキテクチャ２"
            instructors="複数名"
            syllabusLink="https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?value(risyunen)=2023&value(semekikn)=1&value(kougicd)=302318&value(crclumcd)=04141"
          />
          <CourseAccordion
            courseName="コンパイラ"
            instructors="複数名"
            syllabusLink="https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?value(risyunen)=2023&value(semekikn)=1&value(kougicd)=302313&value(crclumcd)=04141"
          />
          <CourseAccordion
            courseName="コンピュータグラフィクス"
            instructors="複数名"
            syllabusLink="https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?value(risyunen)=2023&value(semekikn)=1&value(kougicd)=302308&value(crclumcd)=04141"
          />

          <CourseAccordion
            courseName="音声・音響信号処理"
            instructors="複数名"
            syllabusLink="https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?value(risyunen)=2023&value(semekikn)=1&value(kougicd)=302703&value(crclumcd)=04141"
          />
          <CourseAccordion
            courseName="感性情報処理"
            instructors="複数名"
            syllabusLink="https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?value(risyunen)=2023&value(semekikn)=1&value(kougicd)=302702&value(crclumcd)=04141"
          />
          <CourseAccordion
            courseName="コンピュータビジョン"
            instructors="複数名"
            syllabusLink="https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?value(risyunen)=2023&value(semekikn)=1&value(kougicd)=302701&value(crclumcd)=04141"
          />
          <CourseAccordion
            courseName="人工知能"
            instructors="複数名"
            syllabusLink="https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?value(risyunen)=2023&value(semekikn)=1&value(kougicd)=302317&value(crclumcd)=04141"
          />
          <CourseAccordion
            courseName="国際関係論"
            instructors="複数名"
            syllabusLink="https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?value(risyunen)=2023&value(semekikn)=1&value(kougicd)=300481&value(crclumcd)=04141"
          />

          <CourseAccordion
            courseName="情報技術の応用と職業"
            instructors="複数名"
            syllabusLink="https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?value(risyunen)=2023&value(semekikn)=1&value(kougicd)=302708&value(crclumcd)=04141"
          />
          <CourseAccordion
            courseName="情報工学総合ゼミナール"
            instructors="複数名"
            syllabusLink="https://example.com/syllabus60"
          />

          <CourseAccordion
            courseName="数値解析"
            instructors="複数名"
            syllabusLink="https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?value(risyunen)=2023&value(semekikn)=1&value(kougicd)=302307&value(crclumcd)=04141"
          />
          <CourseAccordion
            courseName="システム制御"
            instructors="複数名"
            syllabusLink="https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?value(risyunen)=2023&value(semekikn)=1&value(kougicd)=302305&value(crclumcd)=04141"
          />
          <div style={{ backgroundColor: "#f16868", padding: "10px" }}>
            <CourseAccordion
              courseName="先進プロジェクト実験Ⅰ"
              instructors="複数名"
              syllabusLink="https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?value(risyunen)=2023&value(semekikn)=1&value(kougicd)=302305&value(crclumcd)=04141"
            />
            <CourseAccordion
              courseName="先進プロジェクトゼミナール"
              instructors="複数名"
              syllabusLink="https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?value(risyunen)=2023&value(semekikn)=1&value(kougicd)=302305&value(crclumcd)=04141"
            />
          </div>
        </div>
        <div
          style={{
            flex: 1,
            textAlign: "center",
            borderBottom: "1px solid red",
          }}
        >
          <h3
            style={{
              textAlign: "center",
              borderBottom: `5px solid red`,
              display: "inline-block",
            }}
          >
            4年次
          </h3>
          <CourseAccordion
            courseName="卒業研究"
            instructors="複数名"
            syllabusLink="https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?value(risyunen)=2023&value(semekikn)=1&value(kougicd)=302001&value(crclumcd)=04141"
          />
          <CourseAccordion
            courseName="バーチャルリアリティ"
            instructors="複数名"
            syllabusLink="https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?value(risyunen)=2023&value(semekikn)=1&value(kougicd)=302403&value(crclumcd)=04141"
          />
          <CourseAccordion
            courseName="言語情報処理"
            instructors="複数名"
            syllabusLink="https://gkmsyllabus.meijo-u.ac.jp/camweb/slbssbdr.do?value(risyunen)=2023&value(semekikn)=1&value(kougicd)=302402&value(crclumcd)=04141"
          />
        </div>
      </div>
    </>
  );
};

export default App;
