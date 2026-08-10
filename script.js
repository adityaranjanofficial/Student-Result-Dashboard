const students = {
  VO2026: {
    name: "Aditya Ranjan",
    initials: "AR",
    percentage: "86%",
    grade: "A",
    status: "PASS",
    math: "92 / 100",
    computer: "88 / 100",
    english: "82 / 100",
    science: "85 / 100",
    social: "83 / 100"
  },

  VO2027: {
    name: "Prashant Kumar",
    initials: "RK",
    percentage: "78%",
    grade: "B+",
    status: "PASS",
    math: "80 / 100",
    computer: "82 / 100",
    english: "75 / 100",
    science: "77 / 100",
    social: "76 / 100"
  },

  VO2028: {
    name: "Rahul Kumar",
    initials: "AK",
    percentage: "91%",
    grade: "A+",
    status: "PASS",
    math: "95 / 100",
    computer: "94 / 100",
    english: "88 / 100",
    science: "90 / 100",
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
