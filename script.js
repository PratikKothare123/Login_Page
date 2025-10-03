const loginForm = document.getElementById("loginForm");
const errorMsg = document.getElementById("errorMsg");

// Simple dummy validation
loginForm.addEventListener("submit", function(e) {
    e.preventDefault(); // prevent form submission

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(username === "admin" && password === "1234") {
        alert("Login Successful!");
        errorMsg.textContent = "";
        loginForm.reset();
    } else {
        errorMsg.textContent = "Invalid username or password!";
    }
});