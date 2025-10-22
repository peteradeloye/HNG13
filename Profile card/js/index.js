// Script for basic client-side validation and form handling
// This file intentionally keeps things simple for beginners.

// Helper: find element by selector
const $ = (sel) => document.querySelector(sel);

// Validation helpers
function isNotEmpty(value) {
  return value && value.trim().length > 0;
}

function isValidEmail(value) {
  // Simple email regex for teaching purposes. It is not perfect but good enough here.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

// Display an error message for a field. Each input has a corresponding <small class="error" data-for="FIELD"> element.
function showFieldError(fieldName, message) {
  const el = document.querySelector(`.error[data-for="${fieldName}"]`);
  if (el) el.textContent = message || '';
}

// Clear all field errors
function clearFieldErrors() {
  document.querySelectorAll('.error').forEach(e => e.textContent = '');
}

// Show general feedback (success or error)
function showFeedback(message, type = 'success') {
  const fb = $('#formFeedback');
  fb.textContent = message;
  fb.className = '';
  if (type === 'success') fb.classList.add('success');
  else fb.classList.add('error');
}

// Main form handling
const form = $('#contactForm');
const submitBtn = $('#submitBtn');

form.addEventListener('submit', function (ev) {
  ev.preventDefault(); // don't reload the page

  clearFieldErrors();
  showFeedback('', '');

  // Read values
  const name = form.name.value;
  const email = form.email.value;
  const subject = form.subject.value;
  const message = form.message.value;

  // Basic validation rules
  let hasError = false;

  if (!isNotEmpty(name)) {
    showFieldError('name', 'Please enter your name.');
    hasError = true;
  }

  if (!isNotEmpty(email)) {
    showFieldError('email', 'Please enter your email address.');
    hasError = true;
  } else if (!isValidEmail(email)) {
    showFieldError('email', 'Please enter a valid email address.');
    hasError = true;
  }

  if (!isNotEmpty(subject)) {
    showFieldError('subject', 'Please add a subject.');
    hasError = true;
  }

  if (!isNotEmpty(message)) {
    showFieldError('message', 'Please write a message.');
    hasError = true;
  } else if (message.trim().length < 10) {
    showFieldError('message', 'Message should be at least 10 characters.');
    hasError = true;
  }

  if (hasError) {
    showFeedback('Please fix the errors above and try again.', 'error');
    return;
  }

  // Simulate a successful submission (no server in this example)
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';

  // Simulate network delay with setTimeout
  setTimeout(() => {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Send Message';

    // Clear the form on success
    form.reset();
    showFeedback('Thanks! Your message has been "sent" (simulated).', 'success');
  }, 900);
});

// Optional: live validation for better beginner experience
['name','email','subject','message'].forEach(field => {
  const el = form[field];
  if (!el) return;
  el.addEventListener('input', () => {
    // Clear this field's error as user types
    showFieldError(field, '');
    showFeedback('', '');
  });
});
