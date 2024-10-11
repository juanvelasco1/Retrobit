import { router, socket } from "../routes.js";

export default function renderScreen1() {
  const app = document.getElementById("app");
  app.innerHTML = `
        <h1>Screen 1</h1>       
        <input type="text" name="nickname" placeholder="Nickname" required>
        <input type="email" name="email" placeholder="Email" required>
        <button type="submit">Go</button>
    `;

  document.getElementById("emitButton").addEventListener("click", () => {
    console.log("emited");
    socket.emit("event1", { message: "Hello from About page" });
  });

  document.getElementById("goToScreen2").addEventListener("click", () => {
    router.navigateTo("/screen2");
  });
}
