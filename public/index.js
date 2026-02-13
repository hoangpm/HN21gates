// Khởi tạo bản đồ Leaflet
const map = L.map("map").setView([10.7769, 106.7009], 13); // Tọa độ trung tâm (TP.HCM)

// Thêm lớp bản đồ từ OpenStreetMap
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Mảng các đỉnh của polygon (ví dụ)
const polygonPoints = [
  { lat: 21.050410, lng:  105.839132 , gate: 1, name: " Ô Yên Phụ" },
  { lat: 21.050212, lng:  105.839139 , gate: 0, name: " " },
  { lat: 21.049445, lng:  105.839797 , gate: 0, name: " " },
  { lat: 21.048881, lng:  105.841474 , gate: 0, name: " " },
  { lat: 21.047084, lng:  105.842281 , gate: 0, name: " " },
  { lat: 21.045704, lng:  105.843175 , gate: 1, name: " Ô Hàng Than" },
  { lat: 21.044609, lng:  105.844344 , gate: 0, name: " " },
  { lat: 21.044390, lng:  105.845696 , gate: 1, name: " Ô Thạch Khối" },
  { lat: 21.044057, lng:  105.846572 , gate: 0, name: " " },
  { lat: 21.042601, lng:  105.847542 , gate: 0, name: " " },
  { lat: 21.042220, lng:  105.847590 , gate: 0, name: " " },
  { lat: 21.042134, lng:  105.847895 , gate: 0, name: " " },
  { lat: 21.040440, lng:  105.848961 , gate: 1, name: " Ô Hàng Đậu" },
  { lat: 21.039764, lng:  105.849456 , gate: 0, name: " " },
  { lat: 21.039022, lng:  105.849665 , gate: 0, name: " " },
  { lat: 21.038965, lng:  105.849989 , gate: 1, name: " Ô Hàng Khoai" },
  { lat: 21.038242, lng:  105.850484 , gate: 0, name: " " },
  { lat: 21.037775, lng:  105.851140 , gate: 0, name: " " },
  { lat: 21.037737, lng:  105.851597 , gate: 0, name: " " },
  { lat: 21.037366, lng:  105.852073 , gate: 1, name: " Ô Đông Hà" },
  { lat: 21.036938, lng:  105.852501 , gate: 0, name: " " },
  { lat: 21.036890, lng:  105.852901 , gate: 0, name: " " },
  { lat: 21.036671, lng:  105.853367 , gate: 0, name: " " },
  { lat: 21.035700, lng:  105.854119 , gate: 1, name: " Ô Hàng Chĩnh" },
  { lat: 21.034749, lng:  105.854253 , gate: 0, name: " " },
  { lat: 21.033882, lng:  105.854272 , gate: 1, name: " Ô Mỹ Lộc" },
  { lat: 21.033464, lng:  105.854433 , gate: 0, name: " " },
  { lat: 21.032283, lng:  105.854624 , gate: 1, name: " Ô Đông Yên" },
  { lat: 21.031465, lng:  105.854614 , gate: 1, name: " Ô Hàng Gươm" },
  { lat: 21.028828, lng:  105.855128 , gate: 1, name: " Ô Trung Liệt" },
  { lat: 21.028828, lng:  105.855633 , gate: 0, name: " " },
  { lat: 21.027296, lng:  105.855909 , gate: 0, name: " " },
  { lat: 21.026420, lng:  105.855937 , gate: 1, name: " Ô Thảo Tân" },
  { lat: 21.026420, lng:  105.856937 , gate: 0, name: " " },
  { lat: 21.024545, lng:  105.857270 , gate: 0, name: " " },
  { lat: 21.024393, lng:  105.857222 , gate: 1, name: " Ô Trường Tiền" },
  { lat: 21.024136, lng:  105.857175 , gate: 0, name: " " },
  { lat: 21.023851, lng:  105.857241 , gate: 0, name: " " },
  { lat: 21.023736, lng:  105.857498 , gate: 0, name: " " },
  { lat: 21.018968, lng:  105.858897 , gate: 0, name: " " },
  { lat: 21.018625, lng:  105.858421 , gate: 1, name: " Ô Đồn Thủy" },
  { lat: 21.017969, lng:  105.858612 , gate: 0, name: " " },
  { lat: 21.017645, lng:  105.858222 , gate: 0, name: " " },
  { lat: 21.016379, lng:  105.858726 , gate: 1, name: " Ô Nhân Hòa" },
  { lat: 21.015246, lng:  105.859230 , gate: 0, name: " " },
  { lat: 21.015208, lng:  105.859554 , gate: 0, name: " " },
  { lat: 21.014257, lng:  105.860030 , gate: 0, name: " " },
  { lat: 21.012838, lng:  105.861267 , gate: 0, name: " " },
  { lat: 21.012058, lng:  105.860173 , gate: 0, name: " " },
  { lat: 21.011249, lng:  105.860668 , gate: 0, name: " " },
  { lat: 21.011316, lng:  105.861029 , gate: 0, name: " " },
  { lat: 21.010383, lng:  105.862409 , gate: 0, name: " " },
  { lat: 21.009203, lng:  105.861334 , gate: 1, name: " Ô Đống Mác" },
  { lat: 21.008969, lng:  105.861105 , gate: 0, name: " " },
  { lat: 21.010057, lng:  105.859668 , gate: 0, name: " " },
  { lat: 21.009824, lng:  105.858299 , gate: 0, name: " " },
  { lat: 21.010096, lng:  105.857891 , gate: 0, name: " " },
  { lat: 21.009775, lng:  105.856104 , gate: 0, name: " " },
  { lat: 21.009290, lng:  105.855590 , gate: 0, name: " " },
  { lat: 21.008581, lng:  105.852181 , gate: 0, name: " " },
  { lat: 21.008901, lng:  105.851793 , gate: 0, name: " " },
  { lat: 21.009027, lng:  105.851259 , gate: 1, name: " Ô Cầu Dền" },
  { lat: 21.009212, lng:  105.850880 , gate: 0, name: " " },
  { lat: 21.008367, lng:  105.846996 , gate: 0, name: " " },
  { lat: 21.008581, lng:  105.846860 , gate: 0, name: " " },
  { lat: 21.008008, lng:  105.843393 , gate: 0, name: " " },
  { lat: 21.008037, lng:  105.840926 , gate: 1, name: " Ô Kim Hoa" },
  { lat: 21.008105, lng:  105.840586 , gate: 0, name: " " },
  { lat: 21.018931, lng:  105.830041 , gate: 1, name: " Ô Chợ Dừa" },
  { lat: 21.021179, lng:  105.825836 , gate: 0, name: " " },
  { lat: 21.023411, lng:  105.819822 , gate: 0, name: " " },
  { lat: 21.032656, lng:  105.831344 , gate: 0, name: " " },
  { lat: 21.033158, lng:  105.831331 , gate: 1, name: " Ô Vạn Bảo" },
  { lat: 21.033673, lng:  105.831278 , gate: 0, name: " " },
  { lat: 21.034518, lng:  105.831688 , gate: 0, name: " " },
  { lat: 21.036302, lng:  105.831252 , gate: 0, name: " " },
  { lat: 21.036830, lng:  105.830354 , gate: 0, name: " " },
  { lat: 21.037795, lng:  105.829931 , gate: 0, name: " " },
  { lat: 21.038825, lng:  105.829997 , gate: 0, name: " " },
  { lat: 21.038904, lng:  105.829442 , gate: 0, name: " " },
  { lat: 21.039327, lng:  105.829099 , gate: 0, name: " " },
  { lat: 21.041005, lng:  105.830710 , gate: 0, name: " " },
  { lat: 21.041771, lng:  105.832533 , gate: 0, name: " " },
  { lat: 21.041943, lng:  105.835175 , gate: 0, name: " " },
  { lat: 21.042590, lng:  105.835175 , gate: 1, name: " Ô Thụy Chương" },
  { lat: 21.042630, lng:  105.836008 , gate: 0, name: " " },
  { lat: 21.047200, lng:  105.836853 , gate: 0, name: " " },
  { lat: 21.047689, lng:  105.837725 , gate: 0, name: " " },
  { lat: 21.048389, lng:  105.837989 , gate: 0, name: " " },
  { lat: 21.049050, lng:  105.838544 , gate: 0, name: " " },
  { lat: 21.049895, lng:  105.838848 , gate: 0, name: " " },
  { lat: 21.050212, lng:  105.839139 , gate: 0, name: " " },
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
