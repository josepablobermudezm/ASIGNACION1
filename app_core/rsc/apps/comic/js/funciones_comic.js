window.addEventListener('load', miFuncionLoad, false);
function readFile(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      var canvas = document.getElementById("lienzo");
      var img = new Image();
      img.id = 'file-preview';
      //e.target.result contents the base64 data from the image uploaded
      img.src = e.target.result;
      //console.log(e.target.result);         
      var canvas = document.getElementById("lienzo");
      var ctx = canvas.getContext("2d");
      img.onload = function(){
        ctx.drawImage(img, 0, 0);
      }         
    }

    reader.readAsDataURL(input.files[0]);
  }
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