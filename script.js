const students = {
  VO2026: {
    name: "Aditya Ranjan",
    marks: {
      math: 92,
      computer: 88,
      english: 82,
      science: 85,
      social: 83
    }
  }
};

function showResult() {

  const roll = document
    .getElementById("rollNumber")
    .value
    .trim()
    .toUpperCase();

  const message = document.getElementById("message");
  const student = students[roll];

  if (!student) {
    message.textContent = "No result found for this roll number.";
    message.style.color = "#dc2626";
    return;
  }

  const m = student.marks;

  const total =
    m.math +
    m.computer +
    m.english +
    m.science +
    m.social;

  const percentage = total / 5;

  let grade = "F";

  if (percentage >= 90) {
    grade = "A+";
  } else if (percentage >= 80) {
    grade = "A";
  } else if (percentage >= 70) {
    grade = "B+";
  } else if (percentage >= 60) {
    grade = "B";
  } else if (percentage >= 50) {
    grade = "C";
  }

  const status =
    Object.values(m).every(mark => mark >= 33)
      ? "PASS"
      : "FAIL";

  document.getElementById("studentName").textContent =
    student.name;

  document.getElementById("studentRoll").textContent =
    roll;

  document.getElementById("math").textContent =
    m.math;

  document.getElementById("computer").textContent =
    m.computer;

  document.getElementById("english").textContent =
    m.english;

  document.getElementById("science").textContent =
    m.science;

  document.getElementById("social").textContent =
    m.social;

  document.getElementById("obtainedMarks").textContent =
    total;

  document.getElementById("totalMarks").textContent =
    total + " / 500";

  document.getElementById("percentage").textContent =
    percentage.toFixed(2) + "%";

  document.getElementById("grade").textContent =
    grade;

  document.getElementById("status").textContent =
    status;

  document.getElementById("finalStatus").textContent =
    status;

  message.textContent =
    "Result found successfully!";

  message.style.color =
    "#16a34a";
}


function printResult() {

  const name =
    document.getElementById("studentName").textContent;

  if (name === "Search a Result") {
    alert("Please search a valid roll number first.");
    return;
  }

  window.print();
}
