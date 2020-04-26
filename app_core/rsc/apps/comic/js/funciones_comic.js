var z = 1;
var x = 0;
var y = 0;

window.addEventListener('load', miFuncionLoad, false);

function readFile(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      var canvas = document.getElementById("lienzo");
      var img = new Image(canvas.clientWidth,canvas.clientHeight);
      img.id = 'file-preview';
      //e.target.result contents the base64 data from the image uploaded
      img.src = e.target.result;
      //console.log(e.target.result);         
      var ctx = canvas.getContext("2d");
      img.onload = function(){
        var val = scaleToFit(img);
        ctx.drawImage(img, 0, 0,val.x,val.y);
        
        //img.style.display = 'none';
        /*var s = getComputedStyle(canvas);
        var w = s.width;
        var h = s.height;
        ctx.width = w.split('px')[0];
        ctx.height = h.split('px')[0];*/
      }         
    }

    reader.readAsDataURL(input.files[0]);
  }
}

var canvas = document.getElementById("lienzo");
var X,Y;



function inicializarCanvas(){  
  var ctx = canvas.getContext("2d");
  var s = getComputedStyle(canvas);
  var w = s.width;
  var h = s.height;
  canvas.width=w.split("px")[0];
  canvas.height=h.split("px")[0];
  X=canvas.width/2;
  Y=canvas.height/2;
  dibujar(ctx);
}

function dibujar(ctx){
  ctx.fillStyle = "#108EFF";
  ctx.arc(X,Y,X,0,2*Math.PI);
  ctx.fill();
}  


function drawImage(image, w, h) {
  ctx.drawImage(image, foto.x, foto.y, w, h);

  ctx.fillStyle = 'white';

  ctx.beginPath();
  ctx.arc(foto.x, foto.y, 5, 0, Math.PI * 2, 1);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(w + foto.x, h / 2 + foto.y, 5, 0, Math.PI * 2, 1);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(w / 2 + foto.x, h + foto.y, 5, 0, Math.PI * 2, 1);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(w + foto.x, h + foto.y, 5, 0, Math.PI * 2, 1);
  ctx.fill();
}



function scaleToFit(img){
  var canvas = document.getElementById("lienzo");
   // get the scale
   var scale = Math.max(canvas.width / img.width, canvas.height / img.height);
    // get the top left position of the image
    var x = (canvas.width / 2) - (img.width / 2) * scale;
    var y = (canvas.height / 2) - (img.height / 2) * scale;

    return {
      x: img.width * scale,
      y: img.height * scale
    };
  }

  function download(){
    var button = document.getElementById("btn_descarga");
    button.addEventListener("click",function(){ 
      var filename = document.getElementById("txt_nombre");
      if(filename.value!=""){
        var canvas = document.getElementById("lienzo");
    //var filename = prompt("Guardar como...","Nombre del archivo");
    if (canvas.msToBlob){ //para internet explorer
      var blob = canvas.msToBlob();
        window.navigator.msSaveBlob(blob, filename.value + ".png" );// la extensión de preferencia pon jpg o png
      } else {
        link = document.getElementById("download");
        //Otros navegadores: Google chrome, Firefox etc...
        link.href = canvas.toDataURL("image/png");// Extensión .png ("image/png") --- Extension .jpg ("image/jpeg")
        link.download = filename.value;
        link.click();
      }
    }
  },false);
  }

  function miFuncionLoad(){
    var btnAgregarGlobo = document.getElementById('btn_agregar');
    var fileUpload = document.getElementById('txt_foto');
    var posX = document.getElementById("txt_pos_x");
    var posY = document.getElementById("txt_pos_y");
    posX.addEventListener('keyup', ModificarX, false);
    posY.addEventListener('keyup', ModificarY, false);

    fileUpload.onchange = function (e) {
      readFile(e.srcElement);
    }
    download();

    var cv = document.getElementById('lienzo');
    var ctx = cv.getContext('2d');
    var image = new Image();
    var foto = {x: 50, y: 50, w: 100, h: 100};
    var isUp = null;
    image.src = 'beads.jpg';

    window.onmousedown = function(evt) {
      var ax = evt.clientX - cv.offsetLeft;
      var ay = evt.clientY - cv.offsetTop;

      console.log(ax, ay);

      if (ax >= foto.w - 5 + foto.x
        && ax <= foto.w + foto.x + 5
        && ay >= foto.h / 2 + foto.y - 5
        && ay <= foto.h / 2 + foto.y + 5
        ) {
        isUp = 'right';
    }

    else if (ax >= foto.w / 2 + foto.x - 5
      && ax <= foto.w / 2 + foto.x + 5
      && ay >= foto.h + foto.y - 5
      && ay <= foto.h + foto.y + 5
      ) {
      isUp = 'bottom';
  }

  else if (ax >= foto.w + foto.x - 5
    && ax <= foto.w + foto.x + 5
    && ay >= foto.h + foto.y - 5
    && ay <= foto.h + foto.y + 5
    ) {
    isUp = 'bottom-right';
}

else if (ax >= foto.x - 5 && ax <= foto.x + 5
  && ay >= foto.y - 5 && ay <= foto.y + 5
  ) {
  isUp = 'top-left';
}
}

window.onmousemove = function(evt) {
  var ax = evt.clientX - cv.offsetLeft;
  var ay = evt.clientY - cv.offsetTop;

  if (isUp === 'right') {
    foto.w = ax - foto.x;
    ctx.clearRect(0, 0, 900, 600);
    drawImage(image, foto.w, foto.h);
  }

  else if (isUp === 'bottom') {
    foto.h = ay - foto.y;
    ctx.clearRect(0, 0, 900, 600);
    drawImage(image, foto.w, foto.h);
  }

  else if (isUp === 'bottom-right') {
    foto.w = ax - foto.x;
    foto.h = ay - foto.y;
    ctx.clearRect(0, 0, 900, 600);
    drawImage(image, foto.w, foto.h);
  }

  else if (isUp === 'top-left') {
    var dx = foto.x - ax;
    var dy = foto.y - ay;
    foto.x = ax;
    foto.y = ay;
    foto.w += dx;
    foto.h += dy;
    ctx.clearRect(0, 0, 900, 600);
    drawImage(image, foto.w, foto.h);
  }
}

window.onmouseup = function(evt) {
  isUp = null;
}

btnAgregarGlobo.addEventListener("click",insertarGlobo,false);
}

function ModificarX(){
  x = document.getElementById("txt_pos_x");
  insertarGlobo()
}

function ModificarY(){
  y = document.getElementById("txt_pos_y");
  insertarGlobo();
}

function insertarGlobo(){

  var canvas = document.getElementById("lienzo");
  var ctx = canvas.getContext('2d');
  ctx.beginPath();
  
  if(z==2){
    x -= 60;
    y -= 60;
  }else if(z == 3){
    x -= 75;
    y -= 75;
  }

  ctx.moveTo((65+x)*z,(5+y)*z);
  ctx.quadraticCurveTo((5+x)*z,(0+y)*z,(0+x)*z,(42.5+y)*z);
  ctx.quadraticCurveTo((5+x)*z,(75+y)*z,(25+x)*z,(80+y)*z);
  ctx.quadraticCurveTo((30+x)*z,(95+y)*z,(5+x)*z,(105+y)*z);
  ctx.quadraticCurveTo((40+x)*z,(95+y)*z,(40+x)*z,(80+y)*z);
  ctx.quadraticCurveTo((105+x)*z,(75+y)*z,(100+x)*z,(42.5+y)*z);
  ctx.quadraticCurveTo((105+x)*z,(0+y)*z,(50+x)*z,(5+y)*z);


  ctx.fillStyle = "white";
  ctx.fill();
  ctx.strokeStyle = "black";
  ctx.stroke();

    //function.addEventListener("click" );
  }

  function checkBox(cb){
    for (n = 0; n < 3; n++) {
      if (eval("document.form.contact[" + n + "].checked") == true) {
        document.form.contact[n].checked = false;
        if (n == cb) {
          document.form.contact[n].checked = true;
        }
      }
    }
    if (document.form.contact[np].id == document.getElementById("1").id) {

    } else if(document.form.contact[np].id == document.getElementById("2").id){

    }else{

    }
  }

  function getMousePos(canvas, evt) {
    return {
      x: evt.clientX,
      y: evt.clientY
    };
  }