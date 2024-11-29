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
    <button id="nextPhase" type="submit"></button>
</div>`;

  document.getElementById("nextPhase").addEventListener("touchstart", () => {
    if ( document.getElementById("nextPhase").innerText === 'Iniciar Juego'){
      console.log("El usuario ha iniciado la trivia");
      socket.emit("StartTrivia", "Empezar Trivia");
      router.navigateTo("/screen6");    
    } else  if (document.getElementById("nextPhase").innerText === 'Reclamar Cupón'){
      router.navigateTo("/screen7");    
    } 
    else {
      socket.emit("StartTrivia", "Cerrar");
      router.navigateTo("/");  
    }
  });
  
  socket.off("DefeatClient")
  socket.on("DefeatClient", (data) => {    
    if (data.score > 299){
      document.getElementById("nextPhase").innerText='Iniciar Juego';  
        
    } else if (data === 'win'){
      document.getElementById("nextPhase").innerText='Reclamar Cupón';  
    } else {
      document.getElementById("nextPhase").innerText='Salir';    
    }
    })
}
