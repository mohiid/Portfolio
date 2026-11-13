const menuButton = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (menuButton && siteNav) {
  const setMenuOpen = (isOpen) => {
    menuButton.setAttribute("aria-expanded", String(isOpen));
    siteNav.classList.toggle("is-open", isOpen);
  };

  menuButton.addEventListener("click", () => {
    setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      setMenuOpen(false);
      menuButton.focus();
    }
  });

  window.matchMedia("(min-width: 701px)").addEventListener("change", () => {
    setMenuOpen(false);
  });
}

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  const nameField = contactForm.elements.namedItem("name");
  const emailField = contactForm.elements.namedItem("email");
  const messageField = contactForm.elements.namedItem("message");
  const successMessage = document.querySelector(".form-success");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const setFieldError = (field, errorId, message) => {
    const errorElement = document.getElementById(errorId);
    errorElement.textContent = message;
    errorElement.hidden = message === "";

    if (message) {
      field.setAttribute("aria-invalid", "true");
    } else {
      field.removeAttribute("aria-invalid");
    }
  };

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    successMessage.hidden = true;
    successMessage.textContent = "";

    const name = nameField.value.trim();
    const email = emailField.value.trim();
    const message = messageField.value.trim();

    setFieldError(nameField, "name-error", name ? "" : "Please enter your name.");
    setFieldError(emailField, "email-error", emailPattern.test(email) ? "" : "Please enter a valid email address.");
    setFieldError(messageField, "message-error", message.length >= 10 ? "" : "Please enter a message with at least 10 characters.");

    const hasErrors = !name || !emailPattern.test(email) || message.length < 10;

    if (hasErrors) {
      const firstInvalidField = contactForm.querySelector('[aria-invalid="true"]');
      firstInvalidField.focus();
      return;
    }

    successMessage.textContent = "The form is valid. Please email me directly, since this form does not send messages.";
    successMessage.hidden = false;
  });
}
