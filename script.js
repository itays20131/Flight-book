fetch("flights.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("flights");

    data.forEach(flight => {
      const div = document.createElement("div");
      div.className = "flight";

      div.innerHTML = `
        <h3>${flight.flightNumber}</h3>
        <p><strong>From:</strong> ${flight.from}</p>
        <p><strong>To:</strong> ${flight.to}</p>
        <p><strong>Time:</strong> ${flight.time}</p>
        <p><strong>Aircraft:</strong> ${flight.aircraft}</p>
        <button>Book</button>
      `;

      container.appendChild(div);
    });
  });
