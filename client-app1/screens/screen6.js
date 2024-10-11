import { router, socket } from "../routes.js";

export default function renderScreen6() {
  const app = document.getElementById("app");
  app.innerHTML = `
        <h1>Screen 6</h1>
     <div class="coupon-container">
        <div class="coupon-title">Coupon</div>

        <div class="qr-code">
            <img src="your-qr-code-image.png" alt="QR Code" width="150">
        </div>

        <div class="coupon-code">AFU-289</div>

        <div class="discount">
            30% <span>OFF</span>
        </div>

        <div class="coupon-description">
            With this coupon you can buy products on our official website.
        </div>

        <div class="button-container">
            <button id="goButton">Go</button>
        </div>
    </div>
     
    `;
    
    const counterElement = document.getElementById('counter');

    document.getElementById("goButton").addEventListener("click", () => {
      console.log("Botón Go presionado");
      socket.emit("couponUsed", { couponCode: "AFU-289" }); // Enviar el código del cupón al servidor
  });
  
}
