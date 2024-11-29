import { router, socket } from "../routes.js";

export default function renderScreen1() {
  const app = document.getElementById("app");
  app.innerHTML = `
        <style>
.bg-container {
    background-image: url(img/BG2.png);
    background-repeat: no-repeat;
    background-size: contain;
    margin: auto;
    width: 444px;
    height: 683px;
}

#image-container {
    width: 298px;
    margin-top: 187px;
    margin-left: 74px;
}

#image-container > img {
    width: 100%;
    border-radius: 11px;
}
</style>
  <div class='bg-container'>
    <div id="image-container"></div>
  </div>
    `;

const imageContainer = document.getElementById("image-container");

// URL de la imagen que deseas mostrar
const imageUrl =
  "img/screen1.png"; // Reemplaza esto con la URL de tu imagen

// Crea una imagen y la añade al contenedor
const img = document.createElement("img");
img.src = imageUrl;
img.alt = "Código QR para registrarse";
imageContainer.appendChild(img);


  socket.on("startTriviaClient", (data) => {
    router.navigateTo("/screen3");
  });
}
