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
  border: solid 7px red;
    border-radius: 50px;
    margin: 0 auto;
    width: fit-content;
    font-size: 56px;
    padding: 30px;
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
    <button id="saltar" type="submit">Saltar</button>
</div>
  `;


socket.off("DefeatClient")
document.getElementById("saltar").addEventListener("touchstart", () => {
  console.log('touch');
  
  socket.emit("ActionPulse", "saltar");
});


socket.off("DefeatClient")
  socket.on("DefeatClient", (data) => {
    router.navigateTo("/screen5"); // Navega a la siguiente pantalla
    })
}
