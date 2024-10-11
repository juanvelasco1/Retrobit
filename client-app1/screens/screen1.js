import { router, socket } from "../routes.js";

export default function renderScreen1() {
  const app = document.getElementById("app");
  app.innerHTML = `
        <h1>Screen 1</h1>       
        <input type="text" name="nickname" placeholder="Nickname" required>
        <input type="email" name="email" placeholder="Email" required>
        <button id="Go" type="submit">Go</button>
    `;

    document.emitButton.addEventListener("click"), () => {
      // Obtener los valores de los campos de entrada
      const nickname = nicknameInput.value;
      const email = emailInput.value;

      // Verificar si ambos campos están llenos
      if (nickname && email) {
          // Imprimir en consola para confirmar
          console.log("Datos enviados:", { nickname, email });

          // Emitir el evento a través de WebSocket
          socket.emit("event1", { nickname, email });

          nicknameInput.value = "";
          emailInput.value = "";
      } else {
          alert("Por favor, rellena ambos campos.");
      }
  }

  document.getElementById("Go").addEventListener("click", () => {
    router.navigateTo("/screen2");
  });
}
