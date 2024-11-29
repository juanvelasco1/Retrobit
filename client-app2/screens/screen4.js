import { router, socket } from "../routes.js";

export default function renderScreen4() { // Cambia el nombre a renderScreen4 o como desees
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
        <div class= 'answerSection'>
          <p id='answerData'></p>
          <p id='score'>
          </p>
        </div>
      </div>
    </div>
  `;

const imageContainer = document.getElementById("image-container");
const answerData = document.getElementById('answerData')  


const correctAnswer = sessionStorage.getItem('correctAnswers')
const selectedAnswer = sessionStorage.getItem('answer')
let score = parseInt(sessionStorage.getItem('score'))

const parserAnswer = JSON.parse(selectedAnswer)
const parserAnswers=JSON.parse(correctAnswer)

let contentAnswer = {}
let imageUrl = ''
let addScore = 0


if (parserAnswer.is_correct){
  contentAnswer = parserAnswers.find(data => data.type === 'correct')
  imageUrl =
  "img/correct.png"; // Reemplaza esto con la URL de tu imagen
  addScore = 100
} else {
   contentAnswer = parserAnswers.find(data => data.type === 'incorrect')
   imageUrl =
  "img/wrong.png"; // Reemplaza esto con la URL de tu imagen
  addScore = 0
}
  
// Crea una imagen y la añade al contenedor
  const img = document.createElement("img");
  img.src = imageUrl;
  imageContainer.appendChild(img);

  answerData.innerText = contentAnswer.message

  showScore()

  // Mostrar el resultado en la pantalla grande
  function showScore() {

    if (!score){
score = 0
}

const resultElement = document.getElementById("score");
resultElement.textContent = 'puntaje: ' + (score+addScore);
}

  socket.on("startTriviaClient", (data) => {
    const questionNumber = parseInt(sessionStorage.getItem('nextQuestion')) || 1
    
    sessionStorage.setItem('score',score+addScore)
    
    if (questionNumber <= 5){
      router.navigateTo("/screen3"); // Navega a la siguiente pantalla
    } else {
      router.navigateTo("/screen5"); // Navega a la siguiente pantalla
      socket.emit("Defeat", { question: questionNumber, score: score+addScore} );
      socket.off("Defeat")

    }

  });
}
