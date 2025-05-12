// 1. Event Handling
document.getElementById("clickBtn").addEventListener("click", () => {
  alert("Button clicked!");
});

document.getElementById("hoverBtn").addEventListener("mouseover", () => {
  alert("You hovered over the button!");
});

document.getElementById("keyInput").addEventListener("keypress", (e) => {
  console.log(`You pressed: ${e.key}`);
});

let timer;
document.getElementById("secretBtn").addEventListener("mousedown", () => {
  timer = setTimeout(() => alert("Long press detected!"), 1000);
});
document.getElementById("secretBtn").addEventListener("mouseup", () => clearTimeout(timer));

// 2. Interactive Elements
const images = [
  "https://via.placeholder.com/300/ff7f7f",
  "https://via.placeholder.com/300/7f7fff",
  "https://via.placeholder.com/300/7fff7f"
];
let currentIndex = 0;
const mainImage = document.getElementById("mainImage");

document.getElementById("next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  mainImage.src = images[currentIndex];
});

document.getElementById("prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  mainImage.src = images[currentIndex];
});

// Tabs
const tabs = document.querySelectorAll(".tab");
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab-content").forEach(content => content.classList.add("hidden"));
    document.getElementById(tab.dataset.target).classList.remove("hidden");
  });
});

// 3. Form Validation
document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const feedback = document.getElementById("formFeedback");
  if (!name || !email || password.length < 8) {
    feedback.textContent = "Please fill out all fields correctly.";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "Form submitted successfully!";
    feedback.style.color = "green";
  }
});
