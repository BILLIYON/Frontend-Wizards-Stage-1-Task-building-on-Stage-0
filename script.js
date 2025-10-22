const form = document.getElementById("contact-form");
const successMessage = document.querySelector('[data-testid="test-contact-success"]');

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");

  let valid = true;

  const setError = (field, messageText) => {
    const errorEl = document.getElementById(`error-${field.id}`);
    errorEl.textContent = messageText;
    field.setAttribute("aria-describedby", `error-${field.id}`);
    valid = false;
  };

  const clearError = (field) => {
    const errorEl = document.getElementById(`error-${field.id}`);
    errorEl.textContent = "";
    field.removeAttribute("aria-describedby");
  };

  // Reset errors
  [name, email, subject, message].forEach(clearError);

  if (!name.value.trim()) setError(name, "Full name is required.");
  if (!email.value.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/))
    setError(email, "Enter a valid email address.");
  if (!subject.value.trim()) setError(subject, "Subject is required.");
  if (message.value.trim().length < 10)
    setError(message, "Message must be at least 10 characters.");

  if (valid) {
    successMessage.hidden = false;
    form.reset();
  } else {
    successMessage.hidden = true;
  }
});
