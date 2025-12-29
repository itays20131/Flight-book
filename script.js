fetch("flights.json")
  .then(res => res.json())
  .then(data => {
    const flightsDiv = document.getElementById("flights");

    data.forEach(flight => {
      const div = document.createElement("div");
      div.className = "flight";

      div.innerHTML = `
        <h3>${flight.from} → ${flight.to}</h3>
        <p><strong>Flight:</strong> ${flight.id}</p>
        <p><strong>Date:</strong> ${flight.date}</p>
        <p><strong>Time:</strong> ${flight.time}</p>
        <p><strong>Price:</strong> ${flight.price}</p>
        <button onclick="alert('Booking request sent!')">Book Flight</button>
      `;

      flightsDiv.appendChild(div);
    });
  });
