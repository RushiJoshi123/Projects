function showLoginForm() {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("forgot-password-form").style.display = "none";
    document.querySelectorAll(".tab").forEach(tab => {
        tab.style.fontWeight = "normal";
    });
    document.querySelectorAll(".tab")[0].style.fontWeight = "bold";
}

function showSignupForm() {
    document.getElementById("signup-form").style.display = "block";
    document.getElementById("login-form").style.display = "none";
    document.getElementById("forgot-password-form").style.display = "none";
    document.querySelectorAll(".tab").forEach(tab => {
        tab.style.fontWeight = "normal";
    });
    document.querySelectorAll(".tab")[1].style.fontWeight = "bold";
}

function showForgotPasswordForm() {
    document.getElementById("forgot-password-form").style.display = "block";
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-form").style.display = "none";
}

// For storing user data (simulating a database)
function getUsers() {
    const users = localStorage.getItem("users");
    return users ? JSON.parse(users) : [];
}

function saveUser(user) {
    const users = getUsers();
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
}

function login() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    if (!username) {
        alert("Username is required.");
        return;
    }
    if (!password) {
        alert("Password is required.");
        return;
    }

    const users = getUsers();
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert("Logged in successfully!");
        window.location.href = "dashboard.html"; // Redirect to the dashboard
    } else {
        alert("Invalid username or password. Please try again.");
    }
}

function signup() {
    const username = document.getElementById("signup-username").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!username) {
        alert("Username is required.");
        return;
    }
    if (!email) {
        alert("Email is required.");
        return;
    }
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    if (!password) {
        alert("Password is required.");
        return;
    }

    const users = getUsers();
    if (users.some(user => user.username === username)) {
        alert("Username already exists. Please choose a different username.");
        return;
    }

    saveUser({ username, email, password });
    alert("Account created successfully!");
    showLoginForm();
}

function resetPassword() {
    const email = document.getElementById("forgot-email").value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email) {
        alert("Please enter your email.");
        return;
    }
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    const users = getUsers();
    const user = users.find(user => user.email === email);

    if (user) {
        alert(`Password reset link has been sent to your email (${email}).`);
        showLoginForm();
    } else {
        alert("Email not found. Please check and try again.");
    }
}

// Show login form by default
showLoginForm();
