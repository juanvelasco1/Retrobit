import { router, socket } from "../routes.js";

export default function renderScreen2() {
  const app = document.getElementById("app");
  app.innerHTML = `
        <h1>Screen 2</h1>
        <button onclick="signIn()">Sign in</button>
        <button onclick="start()">Start</button>
        <button onclick="menu()">Menu</button>
    `;

  async function requestListOfUsers() {
    try {
      const url = "http://localhost:5050/users";
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();

      return data;
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }

  document
    .getElementById("requestButton")
    .addEventListener("click", async () => {
      const listUsers = await requestListOfUsers();
      console.log(listUsers);
    });

  document.getElementById("goToScreen1").addEventListener("click", () => {
    router.navigateTo("/");
    socket.emit("event2");
  });

  document.getElementById("goToScreen3").addEventListener("click", () => {
    router.navigateTo("/screen3");
  });
}
