import { router, socket } from "../routes.js";

import {Email} from "https://smtpjs.com/v3/smtp.js"

export default function renderClientApp1() {
  const app = document.getElementById("app");
  app.innerHTML = `
  <style>
.bg-container {
    background-image: url(imgs/coupon.png);
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

button{
  border: solid 3px red;
    border-radius: 24px;
    margin: 0 auto;
    margin-top: 701px;
    width: fit-content;
    font-size: 24px;
    padding: 10px 20px;
    font-weight: 700;
    font-family: arial;
    background-color: white;
}

</style>
<div class= 'bg-container'>
    <button id="reclamar" type="submit">Go</button>
</div>
  `;

document.getElementById('reclamar').addEventListener('click', ()=> {
  sendEmail()
})

function sendEmail() {
const userEmail = sessionStorage.getItem('email')


  Email.send({
      Host: "smtp.gmail.com",
      Username: "sender@email_address.com",
      Password: "Enter your password",
      To: userEmail,
      From: "sender@email_address.com",
      Subject: "You win a coupon",
      Body: "Well that was easy!!",
  })
      .then(function (message) {
          alert("mail sent successfully")
      });
}

}
