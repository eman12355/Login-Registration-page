function showAlert(message) {
  alert(message);
}

// check email validation

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

// get users

function getusers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

// set users

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

function setlogedin(userObj) {
  localStorage.setItem("loggedInUser", JSON.stringify(userObj));
}

// -------------------- Registration Logic --------------------

const registerForm = document.getElementById("registerForm");

if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = (
      document.getElementById("registerUsername").value || ""
    ).trim();
    const email = (document.getElementById("registerEmail").value || "")
      .trim()
      .toLowerCase();
    const password = document.getElementById("registerPassword").value || "";

    // Validations
    if (!username || !email || !password) {
      showAlert("Please fill in all fields.");
      return;
    }

    if (!validateEmail(email)) {
      showAlert("Please enter a valid email address.");
      return;
    }

    if (password.length < 8) {
      showAlert("Password must be at least 8 characters long.");
      return;
    }

    // Load users and check for duplicates

    const users = getusers();
    const existing = users.find((u) => u.email === email);
    if (existing) {
      showAlert(
        "This email is already registered. Please log in or use another email."
      );
      return;
    }

    // ✅ Add new user

    users.push({
      username: username,
      email: email,
      password: password,
    });
    //store in localStorage
    saveUsers(users);

    alert("Registration successful! You can now log in.");

    // Redirect to login

    window.location.href = "index.html";
  });
}

// -------------------- LOGIN --------------------

const loginform = document.getElementById("loginform");

if (loginform) {
  loginform.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    //validation

    if (!email || !password) {
      showAlert("Please enter email and password");
      return;
    }

    if (!validateEmail(email)) {
      showAlert("Invalid email format.");
      return;
    }

    //get stored users
    const users = getusers();

    const machingusers = users.find(
      (user) => user.email === email && user.password === password
    );
    if (!machingusers) {
      showAlert("Please Register your Account!");
      window.location.href = "register.html";
      return;
    }
    if (machingusers) {
      showAlert(`Welcome, ${machingusers.username}!`);
      setlogedin(machingusers);
      window.location.href = "dashboard.html";
    } else {
      showAlert("Invalid email or password.");
    }
  });
}
