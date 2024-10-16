import { socket } from "../routes.js";
import QRious from "qrious"; // Biblioteca para generar QR

export default function renderScreen0() {
  const app = document.getElementById("app");
  
  app.innerHTML = `
    <h1>Screen 0 - QR Code</h1>
    <p>Scan this QR code to register:</p>
    <canvas id="qr-code"></canvas> <!-- Aquí se muestra el QR code -->
  `;

  // Generar un código QR con un valor inicial, como una URL o un código de sesión
  const qr = new QRious({
    element: document.getElementById('qr-code'),
    value: 'https://your-app/register', // Ejemplo de valor que quieres que se codifique
    size: 200 // Tamaño del código QR
  });

  // Escuchar el evento desde el servidor que indica cuando cambiar la pantalla
  socket.on("userRegistered", () => {
    // Aquí navegas a screen1.js en client-app2
    router.navigateTo("/screen1"); 
  });
}
