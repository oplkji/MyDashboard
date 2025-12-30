const socket = io("https://myserver-y5n6.onrender.com");

socket.on("init-data", (data) => {
  if (data.node1) updateNode1(data.node1);
  if (data.node2) updateNode2(data.node2);
});

socket.on("new-data", (data) => {
  if (data.nodeID === 1) updateNode1(data);
  if (data.nodeID === 2) updateNode2(data);
});

function updateNode1(data) {
  console.log(data);
  document.querySelector(".node1 .container1 .time .value").innerText =
    "Date-Time " + formatDateTime(data.time);
  document.querySelector(".node1 .container1 .density .value").innerText =
    "Density " + data.density + "%";
  document.querySelector(".node1 .address .value").innerText =
    data.addressid === 1
      ? "Ngã tư Nguyễn Trãi-Khuất Duy Tiến, Hà Nội"
      : "Ngã tư Vũ Trọng Khánh-Nguyễn Văn Lộc, Hà Nội";
  document.querySelector(".node1 .container2 .PM1 .value").innerText =
    "PM1.0 " + (data.pm1 || data.PM1) + "µg/m³";
  document.querySelector(".node1 .container2 .PM2 .value").innerText =
    "PM2.5 " + (data.pm2 || data.PM2) + "µg/m³";
  document.querySelector(".node1 .container2 .PM10 .value").innerText =
    "PM10 " + (data.pm10 || data.PM10) + "µg/m³";
  document.querySelector(".node1 .container1 .CO .value").innerText =
    "CO " + (data.co ?? data.CO ?? 0) + "ppm";
}

function updateNode2(data) {
  document.querySelector(".node2 .container1 .time .value").innerText =
    "Date-Time " + formatDateTime(data.time);
  document.querySelector(".node2 .container1 .density .value").innerText =
    "Density " + data.density + "%";
  document.querySelector(".node2 .container2 .PM1 .value").innerText =
    "PM1.0 " + (data.pm1 || data.PM1) + "µg/m³";
  document.querySelector(".node2 .container2 .PM2 .value").innerText =
    "PM2.5 " + (data.pm2 || data.PM2) + "µg/m³";
  document.querySelector(".node2 .container2 .PM10 .value").innerText =
    "PM10 " + (data.pm10 || data.PM10) + "µg/m³";
  document.querySelector(".node2 .container1 .CO .value").innerText =
    "CO " + (data.co ?? data.CO ?? 0) + "ppm";
  document.querySelector(".node2 .address .value").innerText =
    data.addressid === 1
      ? "Ngã tư Nguyễn Trãi-Khuất Duy Tiến, Hà Nội"
      : "Ngã tư Vũ Trọng Khánh-Nguyễn Văn Lộc, Hà Nội";
}

function formatDateTime(iso) {
  const date = new Date(iso);

  const d = String(date.getDate()).padStart(2, "0");
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const y = date.getFullYear();

  const hh = String(date.getHours()).padStart(2, "0");
  const mm = String(date.getMinutes()).padStart(2, "0");
  const ss = String(date.getSeconds()).padStart(2, "0");

  return `${d}/${m}/${y} ${hh}:${mm}:${ss}`;
}
