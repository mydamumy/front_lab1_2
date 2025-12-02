document.addEventListener("DOMContentLoaded", function () {
  // --- ЗАВДАННЯ 1 ---
  if (
    window.location.pathname.includes("index.html") ||
    window.location.pathname === "/"
  ) {
    const header = document.querySelector("header");

    const toys = ["🧸", "📚", "🧩", "⚽", "🎨"];

    function createFallingToy() {
      const toy = document.createElement("div");
      toy.innerText = toys[Math.floor(Math.random() * toys.length)];
      toy.classList.add("falling-toy");

      toy.style.left = Math.random() * 100 + "%";
      toy.style.fontSize = "64px";

      header.appendChild(toy);

      setTimeout(() => {
        toy.remove();
      }, 4000);
    }

    setInterval(createFallingToy, 1000);
  }

  // --- ЗАВДАННЯ 2 ---
  const cards = document.querySelectorAll(".flip-card");

  cards.forEach((card) => {
    card.addEventListener("click", function () {
      this.classList.toggle("is-flipped");
    });
  });

  // --- ЗАВДАННЯ 3 ---
  if (window.location.pathname.includes("courses.html")) {
    const accHeaders = document.querySelectorAll(".accordion-header");

    accHeaders.forEach((header) => {
      header.addEventListener("click", function () {
        accHeaders.forEach((otherHeader) => {
          if (otherHeader !== this) {
            otherHeader.classList.remove("active");
            otherHeader.nextElementSibling.style.maxHeight = null;
          }
        });

        this.classList.toggle("active");
        const content = this.nextElementSibling;

        if (this.classList.contains("active")) {
          content.style.maxHeight = content.scrollHeight + "px";
        } else {
          content.style.maxHeight = null;
        }
      });
    });
  }

  // --- ЗАВДАННЯ 4 ---
  const detailsField = document.getElementById("details");

  if (detailsField) {
    const tooltip = document.createElement("span");
    tooltip.className = "tooltip-text";
    tooltip.innerText =
      "Ваша думка для нас важлива! Конкретизуйте мету звернення, будь ласка";

    detailsField.after(tooltip);
  }

  // --- ЗАВДАННЯ 5 ---
  function checkTimeAndApplyTheme() {
    const hour = new Date().getHours();
    const isDay = hour >= 6 && hour < 21;
    const body = document.body;

    body.classList.toggle("day-mode", isDay);
    body.classList.toggle("night-mode", !isDay);
  }
  checkTimeAndApplyTheme();
});
