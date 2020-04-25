window.addEventListener('load', miFuncionLoad, false);
function readFile(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      var canvas = document.getElementById("lienzo");
      console.log(canvas.clientHeight);
      console.log(canvas.clientWidth);
      var img = new Image(canvas.clientWidth,canvas.clientHeight);
      img.id = 'file-preview';
      //e.target.result contents the base64 data from the image uploaded
      img.src = e.target.result;
      //console.log(e.target.result);         
      var ctx = canvas.getContext("2d");
      img.onload = function(){
        var val = scaleToFit(img);
        ctx.drawImage(img, 0, 0,val.x,val.y);
      }         
    }

    reader.readAsDataURL(input.files[0]);
  }
}

function scaleToFit(img){
    var canvas = document.getElementById("lienzo");
    // get the scale
    var scale = Math.min(canvas.width / img.width, canvas.height / img.height);
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
}

function getMousePos(canvas, evt) {
  return {
    x: evt.clientX,
    y: evt.clientY
  };
}