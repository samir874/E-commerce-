// JavaScript for form validation
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const usernameError = document.getElementById('usernameError');
const passwordError = document.getElementById('passwordError');

loginForm.addEventListener('submit', function (e) {
  // Prevent the form from submitting
  e.preventDefault();

  // Validate inputs
  let isValid = true;

  if (usernameInput.value.trim() === '') {
    usernameError.style.display = 'block';
    isValid = false;
  } else {
    usernameError.style.display = 'none';
  }

  if (passwordInput.value.trim() === '') {
    passwordError.style.display = 'block';
    isValid = false;
  } else {
    passwordError.style.display = 'none';
  }

  // If the form is valid, log the values (simulate submission)
  if (isValid) {
    alert(`Username: ${usernameInput.value}\nPassword: ${passwordInput.value}`);
    // Here, you can send the data to your server using fetch or AJAX
  }
});