import { router, socket } from "../routes.js";

export default function renderScreen3() {
  const app = document.getElementById("app");
  app.innerHTML = `
        <h1>Screen 3</h1>
        <p>QUESTION 1</p>
        <p>QUESTION</p>
        <button id="optionA" onclick="optionA()">A</button>
        <button id="optionB" onclick="optionB()">B</button>
        <button id="optionC" onclick="optionC()">C</button>
        <button id="optionD" onclick="optionD()">D</button>
    `;

    document.getElementById("optionA").addEventListener("click", () => {
      console.log("Opción A seleccionada");
      socket.emit("selectedOption", { option: "A" }); // Envía la opción "A" al servidor
  });

  document.getElementById("optionB").addEventListener("click", () => {
      console.log("Opción B seleccionada");
      socket.emit("selectedOption", { option: "B" }); // Envía la opción "B" al servidor
  });

  document.getElementById("optionC").addEventListener("click", () => {
      console.log("Opción C seleccionada");
      socket.emit("selectedOption", { option: "C" }); // Envía la opción "C" al servidor
  });

  document.getElementById("optionD").addEventListener("click", () => {
      console.log("Opción D seleccionada");
      socket.emit("selectedOption", { option: "D" }); // Envía la opción "D" al servidor
  });
  
}
