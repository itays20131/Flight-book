<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Air Canada – Book Flights</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>

<header>
  ✈️ Air Canada – Book Flights
  <small>Select your flight</small>
</header>

<div class="container">
  <label>Roblox Username</label>
  <input id="username" placeholder="Your Roblox username" />

  <label>Select Flight</label>
  <select id="flights"></select>

  <button onclick="bookFlight()">Book Flight</button>

  <p id="status"></p>
</div>

<script src="script.js"></script>
</body>
</html>
