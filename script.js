const webhookURL = "https://discord.com/api/webhooks/1455638491445858538/kb5dtfbEDqkubaB4HV3F3tKXHStjQ_7CBU1SmcQR-8o6ejbn0X2ghxlRRQnu7gIexa8C";

fetch("flights.json")
  .then(res => res.json())
  .then(data => {
    const select = document.getElementById("flights");
    data.forEach(f => {
      const opt = document.createElement("option");
      opt.value = `${f.id} | ${f.from} → ${f.to} | ${f.time}`;
      opt.textContent = `${f.id} – ${f.from} → ${f.to}`;
      select.appendChild(opt);
    });
  });

function bookFlight() {
  const user = document.getElementById("username").value;
  const flight = document.getElementById("flights").value;

  if (!user || !flight) {
    alert("Fill all fields");
    return;
  }

  const payload = {
    embeds: [
      {
        title: "✈️ New Flight Booking",
        color: 15158332,
        fields: [
          { name: "Roblox User", value: user, inline: false },
          { name: "Flight", value: flight, inline: false }
        ],
        footer: {
          text: "Air Canada PTFS – Book Flights"
        },
        timestamp: new Date()
      }
    ]
  };

  fetch(webhookURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  })
  .then(() => {
    document.getElementById("status").textContent =
      "✅ Booking sent! Trainers will contact you on Discord.";
  })
  .catch(() => {
    alert("Error sending booking");
  });
}
