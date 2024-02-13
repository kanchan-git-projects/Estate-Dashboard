//---- Menu button and close button function
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu");
  const closeBtn = document.querySelector(".closebtn");
  const aside = document.querySelector("aside");

  // Add event listener to toggle aside visibility when menu button is clicked
  menuBtn.addEventListener("click", function () {
    aside.classList.toggle("active");
  });

  // Add event listener to close aside when close button is clicked
  closeBtn.addEventListener("click", function () {
    aside.classList.remove("active");
  });
});

// Light and dark mode toggle

// Function to toggle between light and dark themes
function toggleTheme() {
  const body = document.body;
  const themes = ["light", "dark"];
  const activeTheme = body.classList.contains("dark") ? "dark" : "light";
  const newTheme = activeTheme === "light" ? "dark" : "light";

  // Remove the current theme and add the new theme
  body.classList.remove(activeTheme);
  body.classList.add(newTheme);
}

// Add event listeners to the theme icons
document.getElementById("lightMode").addEventListener("click", toggleTheme);
document.getElementById("darkMode").addEventListener("click", toggleTheme);

// touchstart
document
  .getElementById("lightMode")
  .addEventListener("touchstart", toggleTheme);
document.getElementById("darkMode").addEventListener("touchstart", toggleTheme);
