const WEBHOOK =
"https://discord.com/api/webhooks/1455638491445858538/kb5dtfbEDqkubaB4HV3F3tKXHStjQ_7CBU1SmcQR-8o6ejbn0X2ghxlRRQnu7gIexa8C";

let destination = "";

function setDestination(dest){
  destination = dest;
  document.getElementById("dest").innerText = dest;
}

function sendBooking(){
  const roblox = document.getElementById("roblox").value;
  const discord = document.getElementById("discord").value;
  const aircraft = document.getElementById("aircraft").value;
  const time = document.getElementById("time").value;
  const trip = document.getElementById("trip").value;

  if(!roblox || !discord || !destination){
    alert("Fill all fields");
    return;
  }

  let msg = `
✈️ New Booking

User: ${roblox}
Discord: ${discord}

From: Perth
To: ${destination}
Aircraft: ${aircraft}
Time: ${time}
Trip: ${trip}
`;

  if(trip==="Round Trip")
    msg += `Return: ${destination} → Perth`;

  fetch(WEBHOOK,{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({content:msg})
  });

  alert("Booking sent!");
}

/* ---------- LANGUAGE SYSTEM ---------- */

const langData = {
  en:["Book Flight","Roblox Username","Discord Username",
      "Select Destination","Aircraft","Flight Time",
      "Trip Type","Selected:","Book Flight"],
  he:["הזמנת טיסה","שם רובלוקס","שם דיסקורד",
      "בחר יעד","מטוס","שעת טיסה",
      "סוג טיסה","נבחר:","הזמן טיסה"],
  ru:["Бронирование","Имя Roblox","Имя Discord",
      "Выбор направления","Самолет","Время полета",
      "Тип рейса","Выбрано:","Забронировать"]
};

function setLang(l){
  document.getElementById("title").innerText = langData[l][0];
  document.getElementById("l1").innerText = langData[l][1];
  document.getElementById("l2").innerText = langData[l][2];
  document.getElementById("l3").innerText = langData[l][3];
  document.getElementById("l4").innerText = langData[l][4];
  document.getElementById("l5").innerText = langData[l][5];
  document.getElementById("l6").innerText = langData[l][6];
  document.getElementById("selectedText").innerText = langData[l][7];
  document.getElementById("bookBtn").innerText = langData[l][8];
}
