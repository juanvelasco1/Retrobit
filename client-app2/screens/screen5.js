import { router, socket } from "../routes.js";

export default function renderScreen5() { // Cambia el nombre a renderScreen5 o como desees
  const app = document.getElementById("app");
  app.innerHTML = `<style>
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
      position: relative;

  }
  
  #image-container > img {
      width: 100%;
      border-radius: 11px;
  }

  .answerSection{
    position: absolute;
    display: flex;
    text-align: center;
    font-size: 0.7em;
    font-weight: 700;
    top: 21%;
    right: 13%;
    color: white;
    width: 46%;
    margin-left: 4px;
    flex-direction: column;
    align-items: flex-end;
}
#answerData{
  text-align: right;
}

  </style>
    <div class='bg-container'>

      <div id="image-container">
        
      </div>
    </div>
  `;

let score = sessionStorage.getItem('score')
const imageContainer = document.getElementById("image-container");
let imageUrl = 'img/lost.png'


if (parseInt(score) >= 300 || score === 'win'){
  imageUrl = "img/win.png";
  if (score === 'win'){
    socket.emit("Defeat", 'win' );
  }
} else if (score === 'lose'){
  socket.emit("Defeat", 'lose' );
}


const img = document.createElement("img");
img.src = imageUrl;
imageContainer.appendChild(img);
  

socket.on("startTriviaClient", (data) => {
  console.log(score);
  console.log(data);
  
  
  if (data === 'Cerrar' && (parseInt(score) < 300 || score === 'lose')){
    router.navigateTo("/"); // Navega a la siguiente pantalla
  } else {
    router.navigateTo("/screen6"); // Navega a la siguiente pantalla
  }
});
}
