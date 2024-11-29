import { router, socket } from "../routes.js";

export default function renderScreen6() { // Cambia el nombre a renderScreen7 o como desees
  const app = document.getElementById("app");
  app.innerHTML = `
  	<style type="text/css">
		.img_oculta{
			display: none;
      
		}

    canvas {
      margin: 0 auto;
    }
	</style>
    <h1 id="fb-welcome"></h1>
	<script>
	  window.fbAsyncInit = function() {
	    FB.init({
	      appId      : '1763771910519017',
	      xfbml      : true,
	      version    : 'v2.6'
	    });

	    // ADD ADDITIONAL FACEBOOK CODE HERE

	    // Place following code after FB.init call.

		function onLogin(response) {
		  if (response.status == 'connected') {
		    FB.api('/me?fields=first_name', function(data) {
		      var welcomeBlock = document.getElementById('fb-welcome');
		      welcomeBlock.innerHTML = 'Hello, ' + data.first_name + '!';
		    });
		  }
		}

		FB.getLoginStatus(function(response) {
		  // Check login status on load, and if the user is
		  // already logged in, go directly to the welcome message.
		  if (response.status == 'connected') {
		    onLogin(response);
		  } else {
		    // Otherwise, show Login dialog first.
		    FB.login(function(response) {
		      onLogin(response);
		    }, {scope: 'user_friends, email'});
		  }
		});

	  };

	  (function(d, s, id){
	     var js, fjs = d.getElementsByTagName(s)[0];
	     if (d.getElementById(id)) {return;}
	     js = d.createElement(s); js.id = id;
	     js.src = "//connect.facebook.net/en_US/sdk.js";
	     fjs.parentNode.insertBefore(js, fjs);
	   }(document, 'script', 'facebook-jssdk'));
	</script>
	<canvas id="juego" width="780px" height="550px" >
		
	</canvas>
	<img src="img/sprites/nubes.png" id="nubes" class="img_oculta" >
	<img src="img/sprites/d1.png" id="d1" class="img_oculta" >
	<img src="img/sprites/d2.png" id="d2" class="img_oculta" >
	<img src="img/sprites/d3.png" id="d3" class="img_oculta" >
	<img src="img/sprites/arbol.png" id="arbol" class="img_oculta" >
  `;

var canvas;
var ctx;
var dinosaurio;
var arbol= [{}];
var PisoX;
var PisoY;
var imgActual=0,ControlCambioImagen=0;
var nubes1,nubes2;
var BoolSaltar=false;
var movSalto;
var velocidadJuego=3;
var CrearSigArbol=true;
var ArbolesSaltados=0;
var puntos;
var CorrerJuego=true;

let puntaje = 0

  Inicio()

function Inicio(){
	canvas = document.getElementById("juego");
	ctx = canvas.getContext("2d");
	PisoX = canvas.width/2 -100;
	PisoY = canvas.height/2+30;
	InicializarJSON();
	AgregarEventoTeclado();
	window.setInterval(function(){FrameLoop()},1000/50);
}
function FrameLoop(){
 
	if(CorrerJuego){
		DibujarFondo();
		SaltoPersonaje();
		DibujarPersonaje();
		CrearArbol();
		DibujarrArboles();
		Puntuacion();
		SubirVelocidadJuego();
		RevisarColisiones();

	}
}
function AgregarEventoTeclado(){
	window.onkeydown = function(evt){
		switch(evt.keyCode){
			case 38:
				if(!BoolSaltar){
					movSalto=-velocidadJuego;
					BoolSaltar=true;
				}
			break;
			case 32:
				if(!BoolSaltar){
					movSalto=-velocidadJuego;
					BoolSaltar=true;
				}
			break;
			case 13:
				if(!CorrerJuego) RestablecerJuego();
			break;
		}
	}
}
function InicializarJSON(){
	dinosaurio = {
		x:PisoX,
		y:PisoY,
		width: 30,
		height:38
	}
	nubes1 = {
		x:0,
		y:0,
		width:canvas.width,
		height:canvas.height/2-50
	}
	nubes2 = {
		x:canvas.width,
		y:0,
		width:canvas.width,
		height:canvas.height/2-50
	}
}
function CrearArbol(){
	if(CrearSigArbol){
		var aleatorio = Math.random() * ((canvas.width+200) - canvas.width) + canvas.width;
		arbol.push({
			x:aleatorio,
			y:PisoY-35,
			width:50,
			height:70
		});
		CrearSigArbol=false;
	}
}
function DibujarFondo(){
	canvas.width=canvas.width;
	var espacioCielo=canvas.height/2+50;
	//cielo
	ctx.fillStyle ="#00FFFF"
	ctx.fillRect(0,0,canvas.width,espacioCielo);
	MoverNubes();
	//Puntuacion
	ctx.fillStyle ="#FF0000";
	ctx.font = "bold 22px sans-serif";
	ctx.fillText(puntos,canvas.width-100,50);
  if (puntos > 100){
    sessionStorage.setItem('score', 'win')
  } else {
    sessionStorage.setItem('score', 'lose')
  }
	//tierra
	ctx.fillStyle = "#B45F04";
	ctx.fillRect(0,espacioCielo,canvas.width,canvas.height- espacioCielo);
	//Linea del piso
	ctx.moveTo(0,espacioCielo);
	ctx.lineTo(canvas.width,espacioCielo);
	ctx.strokeStyle = "black";
	ctx.stroke();
}
function MoverNubes(){
	var nubes = document.getElementById("nubes");
	nubes1.x-=velocidadJuego;
	nubes2.x-=velocidadJuego;
	if(nubes1.x <= (-canvas.width)) nubes1.x = canvas.width;
	if(nubes2.x <= (-canvas.width)) nubes2.x = canvas.width;
	ctx.drawImage(nubes,nubes1.x,nubes1.y,nubes1.width,nubes1.height);
	ctx.drawImage(nubes,nubes2.x,nubes2.y,nubes2.width,nubes2.height);
}
function DibujarPersonaje(){
	ControlCambioImagen++;
	if(ControlCambioImagen == 6){
		imgActual++
		ControlCambioImagen=0;
	}
	if(imgActual==0) var d = document.getElementById("d1");
	if(imgActual==1) var d = document.getElementById("d2");
	if(imgActual==2) var d = document.getElementById("d3");
	if(imgActual==3){
		var d = document.getElementById("d1");
		imgActual=0;
	}
	ctx.drawImage(d,dinosaurio.x,dinosaurio.y,dinosaurio.width,dinosaurio.height);
}
function SaltoPersonaje(){
	if(BoolSaltar){
		dinosaurio.y+= movSalto;
		if(dinosaurio.y<= (PisoY-100)){
			dinosaurio.y= PisoY-100;
			movSalto=-velocidadJuego-1;
			movSalto= -movSalto;
		}
		if(dinosaurio.y>= PisoY){
			dinosaurio.y = PisoY;
			BoolSaltar=false;
		}
	}
}
function DibujarrArboles(){
	var imgArbol = document.getElementById("arbol");
	var ultPos;
	for(var i in arbol){
		if(arbol[i].x >= (-arbol[i].width)){
			arbol[i].x-= velocidadJuego;
			ctx.drawImage(imgArbol,arbol[i].x,arbol[i].y,arbol[i].width,arbol[i].height);
			if((arbol[i].x <= dinosaurio.x) && (arbol[i].x > (dinosaurio.x- velocidadJuego))) ArbolesSaltados++;
		}
		ultPos=i;
	}
	if(arbol[ultPos].x < (canvas.width-180)) CrearSigArbol=true;
}
function Puntuacion(){
	puntos = ArbolesSaltados * 20;
}
function SubirVelocidadJuego(){
	if(puntos==300) velocidadJuego=4;
	if(puntos==600) velocidadJuego=5;
	if(puntos==900) velocidadJuego=6;
}
function RevisarColisiones(){
	for(var i in arbol){
		if(((dinosaurio.x + dinosaurio.width) >= (arbol[i].x+20)) && (dinosaurio.x <= (arbol[i].x + arbol[i].width - 20))){
			if((dinosaurio.y+dinosaurio.height) >= (arbol[i].y + 20)){
				CorrerJuego=false;        
				ctx.save();
				ctx.fillStyle = "black";
				ctx.globalAlpha = 0.5;
				ctx.fillRect(0,0,canvas.width,canvas.height);
				ctx.globalAlpha = 1;
				ctx.fillStyle ="white";
				ctx.font = "bold 30px sans-serif";
				ctx.fillText("Perdiste",canvas.width/2 -165,canvas.height/2);
				setTimeout(()=>{
          router.navigateTo("/screen5");
          if (puntaje > 100){
            socket.emit("Defeat", 'win' );
          } else {
            socket.emit("Defeat", 'lose' );
          }
        },20000) 
        ctx.restore();
			}
		}
	}
}
function RestablecerJuego(){
	dinosaurio.y=PisoY;
	imgActual=0;
	ControlCambioImagen=0;
	BoolSaltar=false;
	velocidadJuego=3;
	CrearSigArbol=true;
	ArbolesSaltados=0;
	puntos=0;
	for(var i in arbol){
		arbol[i].x=-300;
	}
	CorrerJuego=true;
}

socket.on("ActionPulseClient", (data) => {
  console.log(data);
  
  if(!BoolSaltar){
    movSalto=-velocidadJuego;
    BoolSaltar=true;
  }
});

}
