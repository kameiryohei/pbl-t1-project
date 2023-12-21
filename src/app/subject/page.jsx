"use client";
import React, { useState } from "react";
import "../../css/Subject.css";
import Link from "next/link";

function Screen1() {
  const [formData, setFormData] = useState({
    grade: "",
    semester: "",
    course: "",
    programs: [],
  });
  const [showModal, setShowModal] = useState(false);

  // プログラムのチェックボックスが変更されたときの処理
  const handleProgramChange = (event) => {
    const checkboxValue = event.target.value;
    const isChecked = event.target.checked;

    // すでに選択されているプログラムを取得
    const selectedPrograms = [...formData.programs];

    // チェックがついている場合は他のプログラムのチェックを外す
    if (isChecked) {
      const newPrograms = [checkboxValue];
      setFormData({ ...formData, programs: newPrograms });
    } else {
      // チェックが外れた場合は対象のプログラムを除外
      const newPrograms = selectedPrograms.filter(
        (program) => program !== checkboxValue
      );
      setFormData({ ...formData, programs: newPrograms });
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const newFormData = {
      grade: form.elements.grade.value,
      semester: form.elements.semester.value,
      course: form.elements.course.value,
      programs: Array.from(form.elements["program[]"])
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.value),
    };

    setFormData(newFormData);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const getDestination = (course, program) => {
    switch (course) {
      case "総合":
        switch (program) {
          case "PC":
            return "/subject/general_pc";
          case "NS":
            return "/subject/general_ns";
          case "HM":
            return "/subject/general_hm";
          case "DE":
            return "/subject/general_de";
          default:
            return "/";
        }
      case "先進プロジェクト":
        switch (program) {
          case "PC":
            return "/subject/advanced_pc";
          case "NS":
            return "/subject/advanced_ns";
          case "HM":
            return "/subject/advanced_hm";
          case "DE":
            return "/subject/advanced_de";
          default:
            return "/";
        }
      default:
        return "/";
    }
  };

  return (
    <div className="parent" style={{ marginTop: "100px" }}>
      <h1 class="title">学年/学期/コース/プロジェクトを選択</h1>
      <p></p>
      <form className="dropdown" id="form_program" onSubmit={handleFormSubmit}>
        <label htmlFor="grade_sel">学年</label>
        <div>
          <select name="grade" id="grade_sel" required>
            <option value="">学年</option>
            <option value="1">1年</option>
            <option value="2">2年</option>
            <option value="3">3年</option>
            <option value="4">4年</option>
          </select>
        </div>
        <p></p>
        <label htmlFor="semester_sel">学期</label>
        <div>
          <select name="semester" id="semester_sel" required>
            <option value="">学期</option>
            <option value="前期">前期</option>
            <option value="後期">後期</option>
          </select>
        </div>
        <p></p>
        <label htmlFor="course_sel">コース</label>
        <div>
          <select name="course" id="course_sel" required>
            <option value="">コース</option>
            <option value="総合">総合</option>
            <option value="先進プロジェクト">先進プロジェクト</option>
          </select>
        </div>
        <p></p>
        <label>
          プログラム
          <div className="program">
            <input
              type="checkbox"
              id="checkbox_PC"
              name="program[]"
              value="PC"
              onChange={handleProgramChange}
              checked={formData.programs.includes("PC")}
            />
            <label htmlFor="checkbox_PC" className="checkbox_p">
              フィジカルコンピューティング(PC)
            </label>
            <input
              type="checkbox"
              id="checkbox_NS"
              name="program[]"
              value="NS"
              onChange={handleProgramChange}
              checked={formData.programs.includes("NS")}
            />
            <label htmlFor="checkbox_NS" className="checkbox_p">
              ネットワークシステム(NS)
            </label>
            <input
              type="checkbox"
              id="checkbox_HM"
              name="program[]"
              value="HM"
              onChange={handleProgramChange}
              checked={formData.programs.includes("HM")}
            />
            <label htmlFor="checkbox_HM" className="checkbox_p">
              ヒューマンメディア(HM)
            </label>
            <input
              type="checkbox"
              id="checkbox_DE"
              name="program[]"
              value="DE"
              onChange={handleProgramChange}
              checked={formData.programs.includes("DE")}
            />
            <label htmlFor="checkbox_DE" className="checkbox_p">
              データエンジニアリング(DE)
            </label>
          </div>
        </label>
        <button className="submitButton" type="submit" id="button" value="送信">
          送信
        </button>
      </form>
      {showModal && (
        <div className="overlay">
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <h2>選択内容の確認</h2>
              <p>学年: {formData.grade}年</p>
              <p>学期: {formData.semester}</p>
              <p>コース: {formData.course}</p>
              <p>プログラム: {formData.programs.join(", ")}</p>
              <Link
                href={getDestination(formData.course, formData.programs[0])}
              >
                <button className="confirmButton" type="submit" id="button">
                  確定
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Screen1;
