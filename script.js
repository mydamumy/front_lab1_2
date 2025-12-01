document.addEventListener("DOMContentLoaded", function () {
  // --- ЗАВДАННЯ 1 ---
  if (
    window.location.pathname.includes("index.html") ||
    window.location.pathname === "/"
  ) {
    const header = document.querySelector("header");

    // Замість зображень використовуємо емодзі бо так простіше
    const toys = ["🧸", "📚", "🧩", "⚽", "🎨"];

    function createFallingToy() {
      const toy = document.createElement("div");
      toy.innerText = toys[Math.floor(Math.random() * toys.length)];
      toy.classList.add("falling-toy");

      toy.style.left = Math.random() * 90 + "%";
      toy.style.fontSize = "4em";

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
    const accordionHeader = document.querySelector(".accordion-header");

    if (accordionHeader) {
      accordionHeader.addEventListener("click", function () {
        this.classList.toggle("active");
        const content = this.nextElementSibling;

        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }
  }

  // --- ЗАВДАННЯ 4 ---
  if (window.location.pathname.includes("feedback.html")) {
    const detailsField = document.getElementById("details");
    const container = detailsField.parentElement;

    const tooltip = document.createElement("span");
    tooltip.className = "tooltip-text";
    tooltip.innerText =
      "Ваша думка для нас важлива! Конкретизуйте мету звернення, будь ласка";

    detailsField.parentNode.insertBefore(tooltip, detailsField.nextSibling);

    detailsField.addEventListener("mouseover", function () {
      this.style.backgroundColor = "#eaffd6ff";
      this.style.border = "2px solid #000000ff";
      this.style.boxShadow = "5px 5px 10px #00000041";

      tooltip.style.opacity = "1";
      tooltip.style.visibility = "visible";
    });

    detailsField.addEventListener("mouseout", function () {
      this.style.backgroundColor = "";
      this.style.border = "";
      this.style.boxShadow = "";

      tooltip.style.opacity = "0";
      tooltip.style.visibility = "hidden";
    });
  }

  // --- ЗАВДАННЯ 5 ---
  function checkTimeAndApplyTheme() {
    const now = new Date();
    const hour = now.getHours();
    const body = document.body;

    if (hour >= 6 && hour < 21) {
      body.classList.remove("night-mode");
      body.classList.add("day-mode");
    } else {
      body.classList.remove("day-mode");
      body.classList.add("night-mode");
    }
  }
  checkTimeAndApplyTheme();
});
