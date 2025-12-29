const ADMIN_PASSWORD = "aircanada123"; // 🔴 תשנה לסיסמה שלך

function getFlights() {
  return JSON.parse(localStorage.getItem("flights")) || [];
}

function saveFlights(flights) {
  localStorage.setItem("flights", JSON.stringify(flights));
}

function renderFlights() {
  const flightsDiv = document.getElementById("flights");
  if (!flightsDiv) return;

  flightsDiv.innerHTML = "";
  const flights = getFlights();

  flights.forEach(f => {
    const div = document.createElement("div");
    div.className = "flight";
    div.innerHTML = `
      <h3>${f.from} ➜ ${f.to}</h3>
      <p>🕒 ${f.time}</p>
    `;
    flightsDiv.appendChild(div);
  });
}

function login() {
  const pass = document.getElementById("password").value;
  if (pass === ADMIN_PASSWORD) {
    document.getElementById("login").style.display = "none";
    document.getElementById("admin").style.display = "block";
    renderAdminFlights();
  } else {
    alert("Wrong password");
  }
}

function addFlight() {
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const time = document.getElementById("time").value;

  if (!from || !to || !time) return;

  const flights = getFlights();
  flights.push({ from, to, time });
  saveFlights(flights);

  renderAdminFlights();
}

function renderAdminFlights() {
  const ul = document.getElementById("adminFlights");
  if (!ul) return;

  ul.innerHTML = "";
  getFlights().forEach(f => {
    const li = document.createElement("li");
    li.textContent = `${f.from} ➜ ${f.to} (${f.time})`;
    ul.appendChild(li);
  });
}

renderFlights();
