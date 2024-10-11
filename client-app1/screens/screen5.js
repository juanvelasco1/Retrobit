import { router, socket } from "../routes.js";

export default function renderScreen5() {
  const app = document.getElementById("app");
  app.innerHTML = `
        <h1>Screen 5</h1>
        <button onclick="arrowUp()">&#9650;</button> 
        <button onclick="arrowDown()">&#9660;</button>
     
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
