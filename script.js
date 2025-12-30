const webhookURL = "https://discord.com/api/webhooks/1455638491445858538/kb5dtfbEDqkubaB4HV3F3tKXHStjQ_7CBU1SmcQR-8o6ejbn0X2ghxlRRQnu7gIexa8C";

document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const flight = document.getElementById("flight").value;

  const data = {
    content: `✈️ **New Flight Booking**\n👤 Roblox: **${username}**\n🛫 Flight: **${flight}**`
  };

  fetch(webhookURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  }).then(() => {
    document.getElementById("status").innerText = "✅ Flight booked successfully!";
    document.getElementById("bookingForm").reset();
  }).catch(() => {
    document.getElementById("status").innerText = "❌ Error sending booking.";
  });
});
