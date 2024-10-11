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
            <button class="go-button">Go</button>
        </div>
    </div>
     
    `;
    
    const counterElement = document.getElementById('counter');

        function incrementCounter() {
            if (counterValue < 100) {
                counterValue++;
                counterElement.textContent = counterValue;
                setTimeout(incrementCounter, 100); //0-100
            }
        }

  document.getElementById("goToScreen1").addEventListener("click", () => {
    router.navigateTo("/");
    socket.emit("event2");
  });
}
