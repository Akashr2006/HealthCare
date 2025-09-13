document.getElementById("login-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPass").value.trim();

  try {
    const res = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    console.log("Login Response:", data);

    if (res.ok) {
      alert("✅ Login successful!");
    } else {
      alert("❌ " + data.message);
    }
  } catch (err) {
    console.error("Error:", err);
  }
});

document.getElementById("register-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = document.getElementById("regName").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const password = document.getElementById("regPass").value.trim();
  const confirmPass = document.getElementById("regPassConfirm").value.trim();

  if (password !== confirmPass) {
    alert("❌ Passwords do not match");
    return;
  }

  try {
    const res = await fetch("http://localhost:5000/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password })
    });
    const data = await res.json();
    console.log("Register Response:", data);

    if (res.ok) {
      alert("✅ Registration successful!");
    } else {
      alert("❌ " + data.message);
    }
  } catch (err) {
    console.error("Error:", err);
  }
});