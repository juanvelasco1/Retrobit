import renderScreen1 from "./screens/screen1.js";
import renderScreen2 from "./screens/screen2.js";
import renderScreen3 from "./screens/screen3.js";
import renderScreen4 from "./screens/screen4.js";
import renderScreen5 from "./screens/screen5.js";
import renderScreen6 from "./screens/screen6.js";
import socket from "./socket.js";

const router = new Router({
  mode: "hash",
  page404: (path) => {
    const app = document.getElementById("app");
    app.innerHTML = `<h1>404 - Not Found</h1><p>The page you are looking for does not exist.</p>`;
  },
});

// Limpiar el contenido de la pantalla anterior
function clearScripts() {
  document.getElementById("app").innerHTML = "";
}

// Configuración de las rutas

router.add("/", async () => {
  clearScripts();
  renderScreen1();
});

router.add("/screen2", async () => {
  clearScripts();
  renderScreen2();
});

router.add("/screen3", async () => {
  clearScripts();
  renderScreen3();
});

router.add("/screen4", async () => {
  clearScripts();
  renderScreen4();
});

router.add("/screen5", async () => {
  clearScripts();
  renderScreen5();
});

router.add("/screen6", async () => {
  clearScripts();
  renderScreen6();
  socket.emit("correctAnswer", { message: "Correct screen displayed" });
});

router.check().addUriListener();

// Listen for popstate event to handle browser navigation
window.addEventListener("popstate", () => {
  router.check();
});

document.addEventListener("DOMContentLoaded", () => {
  router.check();
});

router.check();

export { router, socket };
