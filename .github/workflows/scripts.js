document.addEventListener("DOMContentLoaded", function () {
  // Add smooth scroll behavior
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Add animation to service categories on scroll
  const serviceCategories = document.querySelectorAll(".service-category");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  });

  serviceCategories.forEach((category) => {
    category.style.opacity = "0";
    category.style.transform = "translateY(20px)";
    category.style.transition = "all 0.5s ease-out";
    observer.observe(category);
  });

  const emojis = ["🔧", "🔨", "⚡", "🪛", "🪚", "🔌", "💡", "🪜", "🧰", "🛠️"];
  const emojiContainer = document.querySelector(".floating-emojis");

  function createFloatingEmoji() {
    const emoji = document.createElement("div");
    emoji.className = "floating-emoji";
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    // Random starting position
    const startX = Math.random() * window.innerWidth;
    const endX = startX + (Math.random() * 200 - 100); // Random drift

    // Random size
    const size = Math.random() * (30 - 15) + 15;

    // Random duration
    const duration = Math.random() * (20 - 10) + 10;

    // Random rotation
    const rotation = Math.random() * 360;

    emoji.style.cssText = `
        font-size: ${size}px;
        left: ${startX}px;
        animation-duration: ${duration}s;
        --start-x: 0px;
        --end-x: ${endX - startX}px;
        --rotation: ${rotation}deg;
    `;

    emojiContainer.appendChild(emoji);

    // Remove emoji after animation completes
    emoji.addEventListener("animationend", () => {
      emoji.remove();
    });
  }

  // Create new emojis periodically
  setInterval(createFloatingEmoji, 2000);

  // Create initial set of emojis
  for (let i = 0; i < 10; i++) {
    createFloatingEmoji();
  }

  // Get all checkboxes
  const serviceCheckboxes = document.querySelectorAll('input[name="service"]');
  const whatsappButton = document.querySelector(".whatsapp-button");

  whatsappButton.addEventListener("click", function (e) {
    e.preventDefault();

    // Get all selected services
    const selectedServices = Array.from(serviceCheckboxes)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);

    // If no services selected, send default message
    if (selectedServices.length === 0) {
      window.open(
        "https://wa.me/972543285967?text=שלום, אשמח לקבל פרטים על השירותים שלכם",
        "_blank"
      );
      return;
    }

    // Create message with selected services
    const message = `שלום, אני מעוניין/ת בשירותים הבאים:\n${selectedServices.join(
      "\n• "
    )}`;
    const encodedMessage = encodeURIComponent(message);

    // Open WhatsApp with the message
    window.open(`https://wa.me/972543285967?text=${encodedMessage}`, "_blank");
  });
});
