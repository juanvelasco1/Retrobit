import { router, socket } from "../routes.js";

export default function renderClientApp1() {
  const app = document.getElementById("app");
  let score = 0;

  app.innerHTML = `
  <style>
    .button-container {
      display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  background-color: #013C5D;
  padding: 10px; 
  height: calc( 100% - 100px );
}

button {
    font-size: 154px;
    border: none;
    border-radius: 10px;
    color: white;
    background-color: transparent;
}

#option1 {
  background-color: #EA2927;
}

#option2 {
  background-color: #3B9AFF;
}

#option3 {
  background-color: #e5cd0c;
}

#option4 {
  background-color: #10D000;
}
  </style>
    <div class="button-container">
  <button id="option1">▲</button>
  <button id="option2">◆</button>
  <button id="option3">●</button>
  <button id="option4">■</button>
</div>
  `;

  // Función para procesar la respuesta
  function processAnswer(selectedOption) {
    socket.emit("answer", selectedOption);
    router.navigateTo("/screen4");  
  }

  let isTouched = false;
let touchStartX = 0;
let touchStartY = 0;

document.getElementById("option1").addEventListener("touchstart", (event) => {
  isTouched = true;
  touchStartX = event.touches[0].clientX;
  touchStartY = event.touches[0].clientY;
});

document.getElementById("option1").addEventListener("touchend", (event) => {
  if (isTouched) {
    // Check if the touch has moved significantly
    const touchEndX = event.changedTouches[0].clientX;
    const touchEndY = event.changedTouches[0].clientY;

    const distanceX = Math.abs(touchEndX - touchStartX);
    const distanceY = Math.abs(touchEndY - touchStartY);

    if (distanceX < 10 && distanceY < 10) {
      // Trigger the action only if the touch hasn't moved much
      processAnswer("1");
    }
  }
  isTouched = false;
});

document.getElementById("option2").addEventListener("touchstart", (event) => {
  isTouched = true;
  touchStartX = event.touches[0].clientX;
  touchStartY = event.touches[0].clientY;
});

document.getElementById("option2").addEventListener("touchend", (event) => {
  if (isTouched) {
    // Check if the touch has moved significantly
    const touchEndX = event.changedTouches[0].clientX;
    const touchEndY = event.changedTouches[0].clientY;

    const distanceX = Math.abs(touchEndX - touchStartX);
    const distanceY = Math.abs(touchEndY - touchStartY);

    if (distanceX < 10 && distanceY < 10) {
      // Trigger the action only if the touch hasn't moved much
      processAnswer("2");
    }
  }
  isTouched = false;
});

document.getElementById("option3").addEventListener("touchstart", (event) => {
  isTouched = true;
  touchStartX = event.touches[0].clientX;
  touchStartY = event.touches[0].clientY;
});

document.getElementById("option3").addEventListener("touchend", (event) => {
  if (isTouched) {
    // Check if the touch has moved significantly
    const touchEndX = event.changedTouches[0].clientX;
    const touchEndY = event.changedTouches[0].clientY;

    const distanceX = Math.abs(touchEndX - touchStartX);
    const distanceY = Math.abs(touchEndY - touchStartY);

    if (distanceX < 10 && distanceY < 10) {
      // Trigger the action only if the touch hasn't moved much
      processAnswer("3");
    }
  }
  isTouched = false;
});

document.getElementById("option4").addEventListener("touchstart", (event) => {
  isTouched = true;
  touchStartX = event.touches[0].clientX;
  touchStartY = event.touches[0].clientY;
});

document.getElementById("option4").addEventListener("touchend", (event) => {
  if (isTouched) {
    // Check if the touch has moved significantly
    const touchEndX = event.changedTouches[0].clientX;
    const touchEndY = event.changedTouches[0].clientY;

    const distanceX = Math.abs(touchEndX - touchStartX);
    const distanceY = Math.abs(touchEndY - touchStartY);

    if (distanceX < 10 && distanceY < 10) {
      // Trigger the action only if the touch hasn't moved much
      processAnswer("4");
    }
  }
  isTouched = false;
});

socket.on("DefeatClient", (data) => {  
  if (data.question > 5){
    router.navigateTo("/screen5");    
  }
  })

}
