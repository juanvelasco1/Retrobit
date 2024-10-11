import { router, socket } from "../routes.js";

export default function renderScreen5() {
  const app = document.getElementById("app");
  app.innerHTML = `
        <h1>Screen 5</h1>
        <button id="arrowUp" onclick="arrowUp()">&#9650;</button> 
        <button id="arrowDown" onclick="arrowDown()">&#9660;</button>
     
    `;
    
    const counterElement = document.getElementById('counter');

        function incrementCounter() {
            if (counterValue < 100) {
                counterValue++;
                counterElement.textContent = counterValue;
                setTimeout(incrementCounter, 100); //0-100
            }
        }

        document.getElementById("arrowUp").addEventListener("click", () => {
          console.log("Flecha arriba seleccionada");
          socket.emit("arrowAction", { direction: "up" }); // Enviar evento al servidor con la dirección "up"
      });
  
      document.getElementById("arrowDown").addEventListener("click", () => {
          console.log("Flecha abajo seleccionada");
          socket.emit("arrowAction", { direction: "down" }); // Enviar evento al servidor con la dirección "down"
      });
}
