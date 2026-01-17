const WEBHOOK_URL =
  "https://discord.com/api/webhooks/1455638491445858538/kb5dtfbEDqkubaB4HV3F3tKXHStjQ_7CBU1SmcQR-8o6ejbn0X2ghxlRRQnu7gIexa8C";

let destination = "";

function setDestination(dest) {
  destination = dest;
  document.getElementById("dest").innerText = dest;
}

function sendBooking() {
  const roblox = document.getElementById("roblox").value;
  const discord = document.getElementById("discord").value;
  const trip = document.getElementById("trip").value;

  if (!roblox || !discord || !destination) {
    alert("Please fill all fields");
    return;
  }

  let message = `
✈️ **New Flight Booking**

👤 Roblox: ${roblox}
💬 Discord: ${discord}

🛫 From: **Perth**
🛬 To: **${destination}**
🔁 Trip: **${trip}**
`;

  if (trip === "Round Trip") {
    message += `↩️ Return: **${destination} → Perth**`;
  }

  fetch(WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content: message })
  });

  alert("✅ Booking sent to dispatch!");
}
