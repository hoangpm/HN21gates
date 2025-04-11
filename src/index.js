// Khởi tạo bản đồ Leaflet
const map = L.map("map").setView([10.7769, 106.7009], 13); // Tọa độ trung tâm (TP.HCM)

// Thêm lớp bản đồ từ OpenStreetMap
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Mảng các đỉnh của polygon (ví dụ)
const polygonPoints = [
{ lat: 105.839132 , lng:  21.050410, gate: 1, name: " Ô Yên Phụ" },
{ lat: 105.839797 , lng:  21.049445, gate: , name: " " },
{ lat: 105.841474 , lng:  21.048881, gate: , name: " " },
{ lat: 105.842281 , lng:  21.047084, gate: , name: " " },
{ lat: 105.843175 , lng:  21.045704, gate: 1, name: " Ô Hàng Than" },
{ lat: 105.844344 , lng:  21.044609, gate: , name: " " },
{ lat: 105.845696 , lng:  21.044390, gate: 1, name: " Ô Thạch Khối" },
{ lat: 105.846572 , lng:  21.044057, gate: , name: " " },
{ lat: 105.847542 , lng:  21.042601, gate: , name: " " },
{ lat: 105.847590 , lng:  21.042220, gate: , name: " " },
{ lat: 105.847895 , lng:  21.042134, gate: , name: " " },
{ lat: 105.848961 , lng:  21.040440, gate: 1, name: " Ô Hàng Đậu" },
{ lat: 105.849456 , lng:  21.039764, gate: , name: " " },
{ lat: 105.849665 , lng:  21.039022, gate: , name: " " },
{ lat: 105.849989 , lng:  21.038965, gate: 1, name: " Ô Hàng Khoai" },
{ lat: 105.850484 , lng:  21.038242, gate: , name: " " },
{ lat: 105.851140 , lng:  21.037775, gate: , name: " " },
{ lat: 105.851597 , lng:  21.037737, gate: , name: " " },
{ lat: 105.852073 , lng:  21.037366, gate: 1, name: " Ô Quan Chưởng" },
];

// Vẽ polygon
const polygon = L.polygon(
  polygonPoints.map((point) => [point.lat, point.lng]),
  {
    color: "blue",
    fillColor: "lightblue",
    fillOpacity: 0.5,
  }
).addTo(map);

// Hàm tạo ngôi sao 5 cánh bằng SVG
function createStarIcon() {
  return L.divIcon({
    className: "star-icon",
    html: `
      <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
        <polygon points="15,0 18.09,10.91 30,11.18 21,18.82 24.18,30 15,23.64 5.82,30 9,18.82 0,11.18 11.91,10.91"
                 fill="yellow" stroke="red" stroke-width="2"/>
      </svg>
    `,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
  });
}

// Thêm marker ngôi sao và text cho các đỉnh có gate=1
polygonPoints.forEach((point) => {
  if (point.gate === 1) {
    // Thêm marker ngôi sao
    L.marker([point.lat, point.lng], { icon: createStarIcon() }).addTo(map);

    // Thêm text xanh dương cạnh ngôi sao
    L.marker([point.lat, point.lng], {
      icon: L.divIcon({
        className: "text-label",
        html: `<div style="color: blue; font-weight: bold;">${point.name}</div>`,
        iconSize: [100, 20],
        iconAnchor: [50, -10],
      }),
    }).addTo(map);
  }
});

// Điều chỉnh bản đồ để hiển thị toàn bộ polygon
map.fitBounds(polygon.getBounds());