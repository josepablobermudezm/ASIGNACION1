var circle;

window.addEventListener('load', miFuncionLoad, false);

function miFuncionLoad(){


    var btnGuardar = document.getElementById("btn_guardar_Img");
    var btnDescarga = document.getElementById('btn_descarga');
    var btnDescarga = document.getElementById('btn_agregar');

    dibujar();
}

function dibujar(){
    var canvas = document.getElementById('lienzo');
    var context = canvas.getContext('2d');
    canvas.addEventListener('mousemove', function(evt) {
        var mousePos = getMousePos(canvas, evt);
        var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
        circle.clearRect(0,0,1200,800);
        circle.beginPath();
        circle.arc(mousePos.x,mousePos.y,10,0,Math.PI*2,true);
        circle.fill();
    }, false);

    (function(){
       circle = canvas.getContext('2d');
       circle.fillStyle ="rgba(163,208,244,0.5)";
    })();
}

function getMousePos(canvas, evt) {
    return {
      x: evt.clientX,
      y: evt.clientY
  };
}

