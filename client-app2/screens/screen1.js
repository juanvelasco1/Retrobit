import { router, socket } from "../routes.js";

export default function renderScreen2() {
  const app = document.getElementById("app");
  app.innerHTML = `
        <h1>Screen 2</h1>
        <p>¡Bienvenido! Prepárate para poner a prueba tus conocimientos sobre el mundo de Nintendo. Responde correctamente y acumula puntos para ganar fantásticos premios. ¡Demuestra que eres un verdadero fanático de Nintendo! 

¿Estás listo para comenzar?P</p>        
    `;

  socket.on("returnScreen1", (data) => {
    router.navigateTo("/");
  });
}
