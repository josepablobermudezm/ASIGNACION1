var z = 1;
var x = 0;
var y = 0;
var click=false;
var auxImage;

window.addEventListener('load', miFuncionLoad, false);

function readFile(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      var canvas = document.getElementById("lienzo");
      canvas.width=canvas.width;
      var img = new Image(canvas.clientWidth,canvas.clientHeight);
      img.id = 'file-preview';
      //e.target.result contents the base64 data from the image uploaded
      img.src = e.target.result;
      //console.log(e.target.result);         
      var ctx = canvas.getContext("2d");
      img.onload = function(){
        click=false;
        globoAgregado = false;
        clickCom = false;
        var val = scaleToFit(img);
        ctx.drawImage(img, 0, 0,val.x,val.y);
        auxImage = ctx.getImageData(0, 0, 600,600);
      }         
    }
    reader.readAsDataURL(input.files[0]);
  }
}

var canvas = document.getElementById("lienzo");
var X,Y;


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

  var globoAgregado = false;
  function recargarImagen(){
    var canvas = document.getElementById("lienzo");
    var ctx = canvas.getContext('2d'); 
    ctx.putImageData(auxImage, 0, 0);
  }

  function miFuncionLoad(){
    var btnAgregarGlobo = document.getElementById('btn_agregar_globo');
    var btnAgregarComentario = document.getElementById('btn_agregar_comentario');
    var btnTerminado = document.getElementById('btn_terminado');
    var btnFinalizarCom = document.getElementById('btn_comentario');
    var txtComentario = document.getElementById('txt_comentario');


    var fileUpload = document.getElementById('txt_foto');
    var posX = document.getElementById("txt_pos_x");
    var posY = document.getElementById("txt_pos_y");

    var posComX = document.getElementById("txt_Com_X");
    var posComY = document.getElementById("txt_Com_Y");    
    
    posX.addEventListener('keyup', ModificarX, false);
    posY.addEventListener('keyup', ModificarY, false);


    posComX.addEventListener('keyup', ModificarComX, false);
    posComY.addEventListener('keyup', ModificarComY, false);

    fileUpload.onchange = function (e) {
      readFile(e.srcElement);
    }

    download();

    txt_comentario.addEventListener("keyup",insertarComentario,false);

    btnAgregarComentario.addEventListener("click",insertarComentario,false);

    btnTerminado.addEventListener("click",function(){
      var div = document.getElementById("Caja_Globo");
      div.style = "display:none;";
      click=false;
      var canvas = document.getElementById("lienzo");
      var ctx = canvas.getContext('2d'); 
      auxImage = ctx.getImageData(0, 0, 600,600);
      posX.value = "0";
      posY.value = "0";
      x=0;
      y=0;
      globoAgregado = true;
    },false);

    btnAgregarGlobo.addEventListener("click",insertarGlobo,false);

    btnFinalizarCom.addEventListener("click",function(){
      var div = document.getElementById("Caja_Comentarios");
      div.style = "display:none;";
      clickCom = false;
      var canvas = document.getElementById("lienzo");
      var ctx = canvas.getContext('2d'); 
      auxImage = ctx.getImageData(0, 0, 600,600);
      posComX.value = "0";
      posComY.value = "0";
      x=0;
      y=0;
    },false);
  }

  function ModificarX(){
    if(click){  
      insertarGlobo();
    }
  }

  function ModificarY(){
    if(click){  
      insertarGlobo();
    }
  }

  var clickCom = false; 
  function ModificarComX(){
    if(clickCom){  
      insertarComentario();
    }  
  }

  function ModificarComY(){
    if(clickCom){  
      insertarComentario();
    }
  }

  function insertarComentario(){
    if(globoAgregado && !click){
      clickCom = true;
      recargarImagen();
      var canvas = document.getElementById("lienzo");
      var ctx = canvas.getContext('2d'); 

      var div = document.getElementById("Caja_Comentarios");
      div.style = "display:block;";
      var posX = parseInt(document.getElementById("txt_Com_X").value);
      var posY = parseInt(document.getElementById("txt_Com_Y").value); 
      var comentario = document.getElementById("txt_comentario").value;
      ctx.textAlign="center";
      var tam = parseInt(document.getElementById("cmb_Tam").value);
      ctx.font="bold "+ tam + "pt Comic Sans MS";
      ctx.fillStyle = "black";
      ctx.fillText(comentario,posX,posY);
    } 
  }

  var auxContext;

  function insertarGlobo(){
    if(auxImage!=null && !clickCom){
      var div = document.getElementById("Caja_Globo");
      div.style = "display:block;";
      recargarImagen();
      click = true;
      var canvas = document.getElementById("lienzo");
      var ctx = canvas.getContext('2d');
      auxContext = ctx;
      ctx.beginPath();

      if(isNaN(document.getElementById("txt_pos_x").value || document.getElementById("txt_pos_x").value =="")){
        x = 0;
      }else{
        x = parseInt(document.getElementById("txt_pos_x").value); 
      }

      if(isNaN(document.getElementById("txt_pos_y").value) || document.getElementById("txt_pos_y").value ==""){
        y = 0;
      }else{
        y = parseInt(document.getElementById("txt_pos_y").value);
      }

      if(z==1){
    /*x=100;
    y=250;*/  
  }
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
}

}

function checkBox(cb){
  var np;
  for (n = 0; n < 3; n++) {
    if (eval("document.form.contact[" + n + "].checked") == true) {
      document.form.contact[n].checked = false;
      if (n == cb) {
        np = n;
        document.form.contact[n].checked = true;
      }
    }
  }

  if (document.form.contact[np].id == document.getElementById("1").id) {
    z = 1;
    insertarGlobo();
  } else if(document.form.contact[np].id == document.getElementById("2").id){
    z = 2;
    insertarGlobo();
  }else{
    z = 3;
    insertarGlobo();
  }
}

function getMousePos(canvas, evt) {
  return {
    x: evt.clientX,
    y: evt.clientY
  };
}