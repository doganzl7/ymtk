document.querySelectorAll("[data-contact-link]").forEach((link) => {
  link.addEventListener("click", (event) => {
    if (link.getAttribute("href") === "#") {
      event.preventDefault();
    }
  });
});
