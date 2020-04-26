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

  function insertarGlobo(){

    var canvas = document.getElementById("lienzo");
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(75,25);
    ctx.quadraticCurveTo(25,25,25,62.5);
    ctx.quadraticCurveTo(25,100,50,100);
    ctx.quadraticCurveTo(50,120,30,125);
    ctx.quadraticCurveTo(60,120,65,100);
    ctx.quadraticCurveTo(125,100,125,62.5);
    ctx.quadraticCurveTo(125,25,75,25);
    ctx.stroke();
  }

  function getMousePos(canvas, evt) {
    return {
      x: evt.clientX,
      y: evt.clientY
    };
  }