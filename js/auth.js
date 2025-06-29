function login() {
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;
  if (u === "admin" && p === "admin123") {
    localStorage.setItem("adminLoggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("error-msg").innerText = "Invalid credentials.";
  }
}
