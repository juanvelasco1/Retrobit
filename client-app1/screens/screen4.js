import { router, socket } from "../routes.js";

export default function renderScreen4() {
  const app = document.getElementById("app");
  app.innerHTML = `
        <h1>Screen 4</h1>
        <p>QUESTION 1</p>
        <p>QUESTION</p>
        <button onclick="optionA()">A</button>
        <button onclick="optionB()">B</button>
        <button onclick="optionC()">C</button>
        <button onclick="optionD()">D</button>
    `;

  document.getElementById("goToScreen1").addEventListener("click", () => {
    router.navigateTo("/");
    socket.emit("event2");
  });
}
