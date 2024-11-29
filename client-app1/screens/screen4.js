import { router, socket } from "../routes.js";

export default function renderClientApp1() {
  const app = document.getElementById("app");
  app.innerHTML = `
  <style>
.bg-container {
    background-image: url(imgs/mobile-bg.png);
    background-repeat: no-repeat;
    background-size: cover;
    margin: auto;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-wrap: wrap;
    height: 100vh;
}

.logo{
  margin: 0 auto;
  width: 80%;
}

.register-inputs{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.register-inputs > input{
    width: 302px;
    font-size: 18px;
    margin: 10px 0px;
    padding: 10px;
    border-radius: 50px;
    border: none;
}

button{
    border: solid 1px red;
    border-radius: 50px;
    font-size: 18px;
    padding: 10px;
    font-weight: 700;
    font-family: arial;
    background-color: white;

}

h1 {
  color: white;
  font-family: arial;
  text-align: center;
}
</style>
<div class= 'bg-container'>
  <img class='logo' src='imgs/mobile-logo.png'>
    <button id="continue" type="submit">Siguiente Pregunta</button>
</div>`;

let isTouched = false;
let touchStartX = 0;
let touchStartY = 0;

document.getElementById("continue").addEventListener("touchstart", (event) => {
  isTouched = true;
  touchStartX = event.touches[0].clientX;
  touchStartY = event.touches[0].clientY;
});

document.getElementById("continue").addEventListener("touchend", (event) => {
  if (isTouched) {
    // Check if the touch has moved significantly
    const touchEndX = event.changedTouches[0].clientX;
    const touchEndY = event.changedTouches[0].clientY;

    const distanceX = Math.abs(touchEndX - touchStartX);
    const distanceY = Math.abs(touchEndY - touchStartY);

    if (distanceX < 10 && distanceY < 10) {
      // Trigger the action only if the touch hasn't moved much
      socket.emit("StartTrivia", "Empezar Trivia");
      router.navigateTo("/screen3");  
    }
  }
  isTouched = false;
});

  
}
