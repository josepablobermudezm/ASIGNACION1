var fondo;

window.addEventListener('load', miFuncionLoad, false);


function Ocultar(){
    document.getElementById("device").style.animation = "fadeout 1s both";
}

function CambiarFondo(){
    var fondo = document.getElementById("main_screen");
    fondo.style = "background:url"+"('"+this.childNodes[1].src+"') no-repeat; background-position: center; background-size: 100% 100%;";
    document.getElementById("device").style.animation = "fadein 1s both";
}

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
} else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
}

function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
}

function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    var top = (elmnt.offsetTop - pos2);
    var leftX = (elmnt.offsetLeft - pos1);

    if(leftX >=0 && top >=0 && top <=132 && leftX<=310){
        // set the element's new position:
        elmnt.style.top = top + "px";
        elmnt.style.left = leftX  + "px";
    }else{ //Si la ventana se sale del sistema principal
    }  

}

function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
}
}

function miFuncionLoad() {
    setInterval("reloj()", 100);

    dragElement(document.getElementById("main_app"));

   
    //home.addEventListener('click', calendario, false);

    var icons = document.getElementsByClassName('icons');

    for (var i = 0; i < icons.length; i++) {
        icons[i].addEventListener('click', openApp, false);
    }
    var fondo = document.getElementById("bck");
    fondo.addEventListener('click', Ocultar, false);
    
    var backs = document.getElementsByClassName('backs');
    for( var i = 0; i < backs.length; i++){
        backs[i].addEventListener('click', CambiarFondo, false);
    }

    var date = document.getElementById('start');
    date.onchange = function (e) {
        date.style.visibility = "hidden"; 
    }
}

function reloj() {
    var semana = ['Dom', 'Lun', 'Mar','Mie','Jue', 'Vie', 'Sab']
    var fecha = new Date();
    var dia = fecha.getDay();
    var horas = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();

    document.getElementById("lbl_time_top").innerHTML = semana[dia] + " " + horas + ":" + minutos + ":" + segundos;
}

function openApp() {
    document.getElementById("main_app").style.animation = "fadein 1s both";
    if(this.id == "formulario2" || this.id == "graficos"){
        document.getElementById("window_app").src = "app_core/rsc/apps/" + this.id + "/formulario.php";
    }else if(this.id == "comic"){
        document.getElementById("window_app").src = "app_core/rsc/apps/" + this.id + "/comic.php";
    }else if(this.id == "messenger"){
        document.getElementById("window_app").src = "app_core/rsc/apps/" + this.id + "/index.php";
    }
    else{
        document.getElementById("window_app").src = "app_core/rsc/apps/" + this.id + "/index.html";
    }
}

function closeApp() {
    document.getElementById("main_app").style.animation = "fadeout 1s both";
    document.getElementById("window_app").src = "";
}

function calendario(){
    var date = document.getElementById('start');
    date.style.visibility = "visible";
    date.allowInputToggle = true; 
}