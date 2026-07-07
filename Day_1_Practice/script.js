// Show current year
document.getElementById("currentYear").textContent =
  new Date().getFullYear();


// Enter key support
document
  .getElementById("inputYear")
  .addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
      calculateAge();
    }

  });


function calculateAge() {

  const input = document.getElementById("inputYear");
  const birthYear = Number(input.value);

  const currentYear = new Date().getFullYear();

  const result = document.getElementById("result");
  const category = document.getElementById("category");
  const resultBox = document.getElementById("resultBox");


  // Validation
  if (
    !birthYear ||
    birthYear < 1900 ||
    birthYear > currentYear
  ) {

    resultBox.classList.remove("hidden");

    result.innerHTML = "❌ Invalid Birth Year";
    result.classList.add("error");

    category.textContent =
      "Please enter a valid year.";

    return;
  }


  // Remove error class if valid
  result.classList.remove("error");


  // Calculate age
  const age = currentYear - birthYear;

  result.innerHTML = `🎉 You are ${age} years old`;


  // Age category
  let ageType = "";

  if (age < 13) {
    ageType = "👶 Child";
  }

  else if (age < 20) {
    ageType = "🧑 Teenager";
  }

  else if (age < 40) {
    ageType = "💼 Adult";
  }

  else if (age < 60) {
    ageType = "🧔 Mature Adult";
  }

  else {
    ageType = "👴 Senior";
  }

  category.textContent = `Category: ${ageType}`;

  resultBox.classList.remove("hidden");
}

const toggleBtn =
  document.getElementById("themeToggle");

    toggleBtn.addEventListener("click", function () {

  document.body.classList.toggle("dark-mode");

  // Change button text
  if (
    document.body.classList.contains("dark-mode")
  ) {
    toggleBtn.innerHTML = "☀️ Light Mode";
  }

  else {
    toggleBtn.innerHTML = "🌙 Dark Mode";
  }

});