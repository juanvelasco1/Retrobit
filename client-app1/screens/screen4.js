import { router, socket } from "../routes.js";

export default function renderScreen4() {
  const app = document.getElementById("app");
  app.innerHTML = `
        <div class="coins">
        <img src="coin-icon.png" alt="Coins" width="24"> 109 <!-- Replace with your coin icon image -->
    </div>

    <div class="container">
        <h1>CORRECT!</h1>
        <img src="your-console-image.png" alt="Color TV-Game"> <!-- Replace with your console image -->
        <p>The Color TV-Game is a video game console developed by Nintendo and released in Japan in 1977. 
        It was one of the first home video game consoles and marked the beginning of Nintendo's entry into the 
        video game industry.</p>
    </div>
    `;

  document.getElementById("goToScreen1").addEventListener("click", () => {
    socket.emit("correctAnswer", { message: "Correct screen displayed" });

  });
}
