import {
    router,
    socket
} from "../routes.js";

export default function renderScreen1() {
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
</style>
<div class= 'bg-container'>
  <img class='logo' src='imgs/mobile-logo.png'>
    <div class= 'register-inputs'>
    <input type="text" id="nickname" name="nickname" placeholder="Nombre de usuario" required>
    <input type="email" id="email" name="email" placeholder="Email" required>
    </div>
    <button id="Go" type="submit">Registrarse</button>
</div>
`;

    document.getElementById("Go").addEventListener("click", () => {
        const nickname = document.getElementById("nickname").value;
        const email = document.getElementById("email").value;

        if (nickname && email) {
            // Enviar los datos del usuario al servidor
            console.log("Datos enviados:", {
                nickname,
                email
            });
            socket.emit("CreateUser", {
                nickname,
                email
            });
            sessionStorage.setItem('email', email)
            router.navigateTo("/screen2");
        } else {
            alert("Por favor, rellena ambos campos.");
        }
    });
}

// import { router, socket } from "../routes.js";

// export default function renderScreen1() {
// const app = document.getElementById("app");
// app.innerHTML = `
// <h1>Screen 1</h1>
// <input type="text" id="nickname" name="nickname" placeholder="Nickname" required>
// <input type="email" id="email" name="email" placeholder="Email" required>
// <button id="Go" type="submit">Go</button>
// `;

// document.getElementById("Go").addEventListener("click", () => {
// const nickname = document.getElementById("nickname").value;
// const email = document.getElementById("email").value;

// if (nickname && email) {
// // Enviar los datos del usuario al servidor
// console.log("Datos enviados:", { nickname, email });
// socket.emit("registerUser", { nickname, email });

// // Redirigir a la pantalla de QR
// router.navigateTo("/screen2");
// } else {
// alert("Por favor, rellena ambos campos.");
// }
// });
// }