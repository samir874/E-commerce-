// JavaScript for interactivity

// Add event listeners for social media icons
document.addEventListener("DOMContentLoaded", function () {
    const socialIcons = document.querySelectorAll(".social-icons a");

    socialIcons.forEach(icon => {
        icon.addEventListener("click", function (event) {
            event.preventDefault();
            const platform = this.getAttribute("href");
            alert(`Redirecting to ${platform}`);
        });
    });

    // Login form submission handler
    const loginForm = document.querySelector(".login form");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const username = loginForm.querySelector("input[name='username']").value;
            const password = loginForm.querySelector("input[name='password']").value;

            if (username && password) {
                alert("Login successful!");
            } else {
                alert("Please fill in all fields.");
            }
        });
    }
});
