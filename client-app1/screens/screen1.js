import { router, socket } from "../routes.js";

export default function renderScreen1() {
  const app = document.getElementById("app");
  app.innerHTML = `
        <h1>Screen 1</h1>       
        <input type="text" id="nickname" name="nickname" placeholder="Nickname" required>
        <input type="email" id="email" name="email" placeholder="Email" required>
        <button id="Go" type="submit">Go</button>
    `;

  document.getElementById("Go").addEventListener("click", () => {
    const nickname = document.getElementById("nickname").value;
    const email = document.getElementById("email").value;

    if (nickname && email) {
      // Enviar los datos del usuario al servidor
      console.log("Datos enviados:", { nickname, email });
      socket.emit("registerUser", { nickname, email });

      // Redirigir a la pantalla de QR
      router.navigateTo("/screen2");
    } else {
      alert("Por favor, rellena ambos campos.");
    }
  });
}
