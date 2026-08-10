function showResult() {
  const rollNumber = document.getElementById("rollNumber").value.trim();
  const message = document.getElementById("message");

  if (rollNumber === "") {
    message.textContent = "Please enter your roll number.";
    message.style.color = "#dc2626";
    return;
  }

  if (rollNumber.toUpperCase() === "VO2026") {
    document.getElementById("studentName").textContent = "Aditya Ranjan";
    document.getElementById("studentRoll").textContent = "VO2026";
    document.getElementById("percentage").textContent = "86%";
    document.getElementById("grade").textContent = "A";

    message.textContent = "Result found successfully!";
    message.style.color = "#16a34a";

    document.getElementById("result").scrollIntoView({
      behavior: "smooth"
    });
  } else {
    message.textContent = "No result found for this roll number.";
    message.style.color = "#dc2626";
  }
}

document.getElementById("rollNumber").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    showResult();
  }
});
