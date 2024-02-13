// document.addEventListener("DOMContentLoaded", function () {
//   const closeBtn = document.querySelector(".closebtn");
//   const menuBtn = document.querySelector(".menu");
//   const aside = document.querySelector("aside");

//   // Function to hide the aside section
//   function hideAside() {
//     aside.style.display = "none";
//   }

//   // Function to show the aside section
//   function showAside() {
//     aside.style.display = "block";
//   }

//   // Event listener for close button
//   closeBtn.addEventListener("click", function () {
//     hideAside();
//   });

//   // Event listener for menu button
//   menuBtn.addEventListener("click", function () {
//     showAside();
//   });
// });

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
