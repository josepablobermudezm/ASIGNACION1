

function cargarVideo(){
    var video = document.getElementById("video");
    var link = document.getElementById("txt");
    video.src = link.value;
}

function cargarImagen(){
    var imagen = document.getElementById("imagen");
    var link = document.getElementById("txt2");
    imagen.src = link.value;
}

function cargarAudio(){
    var imagen = document.getElementById("audio");
    var link = document.getElementById("txt3");
    imagen.src = link.value;
}
