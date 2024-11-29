import { createUser } from "../db/index.js";
import { router, socket } from "../routes.js";

export default function renderScreen0() {
  const app = document.getElementById("app");

  app.innerHTML = `
  <style>
.bg-container {
    background-image: url(img/qrBG.png);
    background-repeat: no-repeat;
    margin: auto;
    width: 444px;
    height: 683px;
}

#image-container {
    width: 298px;
    margin-top: 185px;
    margin-left: 78px;
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

sessionStorage.clear();


  // Selecciona el elemento donde se mostrará la imagen
  const imageContainer = document.getElementById("image-container");

  // URL de la imagen que deseas mostrar
  const imageUrl =
    "img/qrcode.png"; // Reemplaza esto con la URL de tu imagen

  // Crea una imagen y la añade al contenedor
  const img = document.createElement("img");
  img.src = imageUrl;
  img.alt = "Código QR para registrarse";
  imageContainer.appendChild(img);

  // Escucha el evento de socket para navegar a screen1
  socket.on("showSomething", (data) => {
    router.navigateTo("/screen1"); // Navega a la siguiente pantalla
  });

  socket.on("startTriviaClient", (data) => {
    const response = createUser(data)
    if (!response.error){
    router.navigateTo("/screen1"); // Navega a la siguiente pantalla
    }
  });
}
