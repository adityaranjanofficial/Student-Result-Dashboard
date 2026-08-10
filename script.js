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
    name: "Prashant Kumar",
    marks: {
      math: 80,
      computer: 82,
      english: 75,
      science: 77,
      social: 76
    }
  },

  VO2028: {
    name: "Rahul Kumar",
    marks: {
      math: 95,
      computer: 94,
      english: 88,
      science: 90,
      social: 89
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

  document.getElementById("result")
    .scrollIntoView({
      behavior: "smooth"
    });
}


function printResult() {

  const name =
    document.getElementById("studentName").textContent;

  if (name === "Search a Result") {
    alert("Please search a valid roll number first.");
    return;
  }

  window.print();
}};


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

  const passed = Object.values(marks).every(mark => mark >= 33);

  return {
    total,
    percentage,
    grade,
    status: passed ? "PASS" : "FAIL"
  };
}


function showResult() {

  const input = document.getElementById("rollNumber");

  const rollNumber =
    input.value.trim().toUpperCase();

  const message =
    document.getElementById("message");


  if (rollNumber === "") {

    message.textContent =
      "Please enter your roll number.";

    message.style.color = "#dc2626";

    return;
  }


  const student =
    students[rollNumber];


  if (!student) {

    message.textContent =
      "No result found for this roll number.";

    message.style.color = "#dc2626";

    document.getElementById("studentName").textContent =
      "Result Not Found";

    document.getElementById("studentRoll").textContent =
      "---";

    return;
  }


  const result =
    calculateResult(student.marks);


  /* Student Information */

  document.getElementById("studentName").textContent =
    student.name;

  document.getElementById("studentRoll").textContent =
    rollNumber;


  /* Subject Marks */

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


  /* Total */

  document.getElementById("obtainedMarks").textContent =
    result.total;

  document.getElementById("totalMarks").textContent =
    result.total + " / 500";


  /* Percentage */

  document.getElementById("percentage").textContent =
    result.percentage.toFixed(2) + "%";


  /* Grade */

  document.getElementById("grade").textContent =
    result.grade;


  /* Status */

  document.getElementById("status").textContent =
    result.status;

  document.getElementById("finalStatus").textContent =
    result.status;


  if (result.status === "PASS") {

    document.getElementById("status").className =
      "pass";

    document.getElementById("finalStatus").className =
      "pass";

  } else {

    document.getElementById("status").className =
      "fail";

    document.getElementById("finalStatus").className =
      "fail";
  }


  message.textContent =
    "Result found successfully!";

  message.style.color =
    "#16a34a";


  document.getElementById("result")
    .scrollIntoView({
      behavior: "smooth"
    });
}


/* Enter key support */

document
  .getElementById("rollNumber")
  .addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
      showResult();
    }

  });


/* Print / Save as PDF */

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
}    science: "90 / 100",
    social: "89 / 100"
  }
};


function showResult() {

  const input = document.getElementById("rollNumber");
  const rollNumber = input.value.trim().toUpperCase();
  const message = document.getElementById("message");

  if (rollNumber === "") {
    message.textContent = "Please enter your roll number.";
    message.style.color = "#dc2626";
    return;
  }

  const student = students[rollNumber];

  if (!student) {

    message.textContent = "No result found for this roll number.";
    message.style.color = "#dc2626";

    document.getElementById("studentName").textContent = "Result Not Found";
    document.getElementById("studentRoll").textContent = "---";
    document.getElementById("percentage").textContent = "--";
    document.getElementById("grade").textContent = "--";
    document.getElementById("status").textContent = "--";

    return;
  }


  document.getElementById("avatar").textContent = student.initials;
  document.getElementById("studentName").textContent = student.name;
  document.getElementById("studentRoll").textContent = rollNumber;

  document.getElementById("percentage").textContent =
    student.percentage;

  document.getElementById("grade").textContent =
    student.grade;

  document.getElementById("status").textContent =
    student.status;

  document.getElementById("math").textContent =
    student.math;

  document.getElementById("computer").textContent =
    student.computer;

  document.getElementById("english").textContent =
    student.english;

  document.getElementById("science").textContent =
    student.science;

  document.getElementById("social").textContent =
    student.social;


  message.textContent = "Result found successfully!";
  message.style.color = "#16a34a";


  document.getElementById("result").scrollIntoView({
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
