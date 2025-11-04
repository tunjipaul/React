import { useState } from "react";

function StudentGrades() {
  const students = [
    { name: "Cynthia Ofori", subject: "Math", score: 75 },
    { name: "Barry Allen", subject: "Math", score: 98 },
    { name: "Ciroma Adekunle", subject: "Math", score: 12 },
    { name: "Eobard Thawne", subject: "Math", score: 30 },
  ];

  const [filter, setFilter] = useState("All");

  const filteredStudents = students.filter((s) => {
    if (filter === "Passed") return s.score >= 50;
    if (filter === "Failed") return s.score < 50;
    return true;
  });

  const passed = students.filter((s) => s.score >= 50).length;
  const failed = students.length - passed;

  return (
    <div className="student-grades-container">
      <h2 className="student-grades-title">Student Grades</h2>

      <div className="filter-buttons">
        <button
          className={`filter-button ${filter === "All" ? "active" : ""}`}
          onClick={() => setFilter("All")}
        >
          All
        </button>
        <button
          className={`filter-button ${filter === "Passed" ? "active" : ""}`}
          onClick={() => setFilter("Passed")}
        >
          Passed
        </button>
        <button
          className={`filter-button ${filter === "Failed" ? "active" : ""}`}
          onClick={() => setFilter("Failed")}
        >
          Failed
        </button>
      </div>

      <ul className="student-list">
        {filteredStudents.map((s, i) => (
          <li key={i} className="student-item">
            <span className="student-name">{s.name}</span> -{" "}
            <span className="student-subject">{s.subject}</span>:{" "}
            <span className="student-score">{s.score}</span>{" "}
            {s.score >= 50 ? (
              <span className="student-status pass">✅ PASS</span>
            ) : (
              <span className="student-status fail">❌ FAIL</span>
            )}
          </li>
        ))}
      </ul>

      <p className="student-summary">
        Total Students: {students.length} | Passed: {passed} | Failed: {failed}
      </p>
    </div>
  );
}

export default StudentGrades;
