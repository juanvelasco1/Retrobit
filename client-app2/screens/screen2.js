// import { socket } from "../routes.js";
// import QRious from "qrious"; // Usamos la librería QRious para generar códigos QR

// export default function renderScreen2() {
//   const app = document.getElementById("app");

//   app.innerHTML = `
//     <h1>Screen 2</h1>
//     <p>Here is your QR code for registration:</p>
//     <canvas id="qr-code"></canvas> <!-- Aquí se mostrará el código QR -->
//     <p id="userDetails"></p> <!-- Aquí se mostrarán los datos del usuario -->
//   `;

//   // Escuchar el evento del servidor cuando el usuario se registra
//   socket.on("registerUser", (data) => {
//     const { nickname, email } = data;

//     // Mostrar los detalles del usuario
//     document.getElementById("userDetails").innerHTML = `
//       <strong>Nickname:</strong> ${nickname}<br>
//       <strong>Email:</strong> ${email}
//     `;

//     // Generar el código QR usando los detalles del usuario
//     const qr = new QRious({
//       element: document.getElementById('qr-code'),
//       value: `Nickname: ${nickname}, Email: ${email}`, // El valor que se codificará en el QR
//       size: 200 // Tamaño del QR
//     });
//   });
// }
