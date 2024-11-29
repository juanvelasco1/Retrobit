import { router, socket } from "../routes.js";

export default function renderScreen2() {
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
  <h1>Bienvenido, gamer</h1>
    <button id="start" type="submit">Empezar</button>
</div>`;

  document.getElementById("start").addEventListener("click", () => {
    console.log("El usuario ha iniciado la trivia");
    socket.emit("StartTrivia", "Empezar Trivia");
    router.navigateTo("/screen3");    
  });
}


  // document.getElementById("start").addEventListener("click", () => {
  //   router.navigateTo("/screen3");
  // });
  
  // async function requestListOfUsers() {
  //   try {
  //     const url = "http://localhost:5050/users";
  //     const response = await fetch(url);
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }
  //     const data = await response.json();

  //     return data;
  //   } catch (error) {
  //     console.error("Fetch error:", error);
  //   }
  // }

  // .getElementById("requestButton")
  // .addEventListener("click", async () => {
  //   const listUsers = await requestListOfUsers();
  //   console.log(listUsers);
  // });


