import { getQuestion } from "../db/index.js";
import { router, socket } from "../routes.js";

export default async function renderScreen3() {
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
  #questionOptions{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    list-style-type: none;
    padding: 0;
    width: 90%;
    margin: auto;
    margin-left: 15px;
}

#questionOptions > li {
  padding: 6px;
    border-radius: 50px;
    color: white;
    font-weight: 800;

}

  .questionsSection{
    position: absolute;
    text-align: center;
    font-size: 0.7em;
    top: 21%;
    color: white;
    width: 288px;
    margin-left: 4px;
}

  h1{
    color: white;
    position: absolute;
    left: 23%;
    top: -3%;    
  }
  </style>
    <div class='bg-container'>

      <div id="image-container">
      <h1 id='questionNumberTitle' ></h1>
        <div class= 'questionsSection'>
          <h2 id='questionTitle'></h2>
          <ul id='questionOptions'>
          </ul>
        </div>
      </div>
    </div>
      `;
const questionNumber = parseInt(sessionStorage.getItem('nextQuestion')) || 1


const questionNumberTitle = document.getElementById("questionNumberTitle");
questionNumberTitle.innerText = 'Pregunta '+ questionNumber

const imageContainer = document.getElementById("image-container");
  
  // URL de la imagen que deseas mostrar
  const imageUrl =
    "img/questionBg.png"; // Reemplaza esto con la URL de tu imagen
  
  // Crea una imagen y la añade al contenedor
  const img = document.createElement("img");
  img.src = imageUrl;
  imageContainer.appendChild(img);

const questionData = await getQuestion(questionNumber);

const data = questionData.data[0]

sessionStorage.setItem('correctAnswers', JSON.stringify(data.answers))


const questionTitle = document.getElementById("questionTitle");
const questionOptions = document.getElementById("questionOptions");

  questionTitle.innerText = data.Questions
questionOptions.innerHTML = null

  data.options.forEach(element => {

    const li = document.createElement("li");
let color= ''
    if (element.id ===1){
      color = '#EA2927'
    } else if (element.id ===2){
      color = '#3B9AFF'
    }else if (element.id ===3){
      color = '#e5cd0c'
    } else {
      color = '#10D000'
    }

    li.innerText = element.option

    li.style.backgroundColor = color

    questionOptions.appendChild(li)
  });  
  

  // Escuchar la respuesta enviada por client-app1
  socket.off("answer");
  socket.on("answer", (answer) => {
    checkAnswer(answer);
  });

  // Función para verificar la respuesta
  function checkAnswer(answer) {  
    const answerOption = data.options.find(option => option.id === parseInt(answer))
    sessionStorage.setItem('answer', JSON.stringify(answerOption))
    sessionStorage.setItem('nextQuestion', data.id+1)

      router.navigateTo("/screen4");

  }

}
