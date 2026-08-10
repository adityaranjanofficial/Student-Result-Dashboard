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
  },

  VO2027: {
    name: "Rahul Kumar",
    marks: {
      math: 84,
      computer: 86,
      english: 78,
      science: 81,
      social: 80
    }
  },

  VO2028: {
    name: "Priya Kumari",
    marks: {
      math: 91,
      computer: 89,
      english: 87,
      science: 92,
      social: 88
    }
  },

  VO2029: {
    name: "Aman Kumar",
    marks: {
      math: 76,
      computer: 82,
      english: 74,
      science: 79,
      social: 81
    }
  },

  VO2030: {
    name: "Neha Kumari",
    marks: {
      math: 88,
      computer: 91,
      english: 85,
      science: 87,
      social: 90
    }
  }

};


function calculateResult(marks) {

  const total =
    marks.math +
    marks.computer +
    marks.english +
    marks.science +
    marks.social;

  const percentage = total / 5;

  let grade;

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
  } else {
    grade = "F";
  }

  const passed =
    Object.values(marks).every(mark => mark >= 33);

  return {
    total,
    percentage,
    grade,
    status: passed ? "PASS" : "FAIL"
  };
}


function showResult() {

  const rollNumber =
    document.getElementById("rollNumber")
      .value
      .trim()
      .toUpperCase();

  const message =
    document.getElementById("message");

  const student =
    students[rollNumber];


  if (!student) {

    message.textContent =
      "No result found for this roll number.";

    message.style.color = "#dc2626";

    return;
  }


  const result =
    calculateResult(student.marks);


  document.getElementById("studentName").textContent =
    student.name;

  document.getElementById("studentRoll").textContent =
    rollNumber;


  document.getElementById("math").textContent =
    student.marks.math;

  document.getElementById("computer").textContent =
    student.marks.computer;

  document.getElementById("english").textContent =
    student.marks.english;

  document.getElementById("science").textContent =
    student.marks.science;

  document.getElementById("social").textContent =
    student.marks.social;


  document.getElementById("obtainedMarks").textContent =
    result.total;

  document.getElementById("totalMarks").textContent =
    result.total + " / 500";

  document.getElementById("percentage").textContent =
    result.percentage.toFixed(2) + "%";

  document.getElementById("grade").textContent =
    result.grade;

  document.getElementById("status").textContent =
    result.status;

  document.getElementById("finalStatus").textContent =
    result.status;


  message.textContent =
    "Result found successfully!";

  message.style.color =
    "#16a34a";


  document.getElementById("result")
    .scrollIntoView({
      behavior: "smooth"
    });
}


document
  .getElementById("rollNumber")
  .addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
      showResult();
    }

  });


function printResult() {

  const name =
    document.getElementById("studentName").textContent;

  if (
    name === "Search a Result" ||
    name === "Result Not Found"
  ) {

    alert(
      "Please search a valid roll number first."
    );

    return;
  }

  window.print();
}
