(() => {
  "use strict";

  // Navbar scroll effect
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
  });

  // Mobile menu toggle
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active");
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.classList.remove("active");
      navLinks.classList.remove("open");
    });
  });

  // Close mobile menu on outside click
  document.addEventListener("click", (e) => {
    if (
      navLinks.classList.contains("open") &&
      !navLinks.contains(e.target) &&
      !navToggle.contains(e.target)
    ) {
      navToggle.classList.remove("active");
      navLinks.classList.remove("open");
    }
  });

  // Intersection Observer for fade-in animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

  // Contact form validation
  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const formSuccess = document.getElementById("formSuccess");

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function clearErrors() {
    [nameInput, emailInput, messageInput].forEach((el) =>
      el.classList.remove("invalid")
    );
    [nameError, emailError, messageError].forEach((el) =>
      el.classList.remove("show")
    );
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    clearErrors();
    formSuccess.classList.remove("show");

    let valid = true;

    if (!nameInput.value.trim()) {
      nameInput.classList.add("invalid");
      nameError.textContent = "Please enter your name.";
      nameError.classList.add("show");
      valid = false;
    }

    if (!emailInput.value.trim()) {
      emailInput.classList.add("invalid");
      emailError.textContent = "Please enter your email.";
      emailError.classList.add("show");
      valid = false;
    } else if (!validateEmail(emailInput.value.trim())) {
      emailInput.classList.add("invalid");
      emailError.textContent = "Please enter a valid email address.";
      emailError.classList.add("show");
      valid = false;
    }

    if (!messageInput.value.trim()) {
      messageInput.classList.add("invalid");
      messageError.textContent = "Please enter a message.";
      messageError.classList.add("show");
      valid = false;
    }

    if (valid) {
      formSuccess.classList.add("show");
      form.reset();
    }
  });

  // Clear validation on input
  [nameInput, emailInput, messageInput].forEach((input) => {
    input.addEventListener("input", () => {
      input.classList.remove("invalid");
      const errorEl = document.getElementById(input.id + "Error");
      if (errorEl) {
        errorEl.classList.remove("show");
        errorEl.textContent = "";
      }
    });
  });
})();
