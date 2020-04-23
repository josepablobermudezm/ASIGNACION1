var fondo;

function cargarPosts(dato) {
    axios.get('index.php', {
        params: {
            datobusqueda: dato
        }
    })
    .then(function (response) {
        document.getElementById("main_page").innerHTML = response.data;

    })
    .catch(function (error) {

    });
}
function Ocultar(){
    document.getElementById("device").style.animation = "fadeout 1s both";
}

function CambiarFondo(){
    var fondo = document.getElementById("main_screen");
    console.log(this.childNodes[1].src);
    fondo.style = "background:url"+"('"+this.childNodes[1].src+"') no-repeat; background-position: center; background-size: 100% 100%;";
    document.getElementById("device").style.animation = "fadein 1s both";
}
function recargarElemento(page, element, formdata) {
    axios.post(page, formdata)
        .then(function (response) { //En caso de carga exitosa del recurso
            var temphtml = document.createElement('div'); //div temporal
            temphtml.innerHTML = response.data; //extraemos todo el HTML del response
            document.getElementById(element).innerHTML = temphtml.querySelector("#" + element).innerHTML; //insertamos todo el HTML del response en el elemento deseado
        })
        .catch(function (error) { //En caso de carga fallida del recurso

        });
    }


    function cargarPostsFiltrar() {
        var form = new FormData();

        form.append('txt_filtrar', document.getElementById("txt_post").value);
        form.append('btn_filt', true);
        console.log(document.getElementById("txt_post").value);
        axios.post('index.php', form)
        .then(function () {
            recargarElemento("index.php", "main_panel", form);
        })
        .catch(function (error) {
        });
    }

    function handleFiles(files) {
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            var imageType = /image.*/;

            if (!file.type.match(imageType)) {
                continue;
            }

            var img = document.createElement("img");
            img.classList.add("obj");
            img.file = file;
        }

        var fullPath = document.getElementById('fileElem').value;
        if (fullPath) {
            var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
            var filename = fullPath.substring(startIndex);
            if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                filename = filename.substring(1);
            }
            fondo = filename;
        //document.getElementById("main_screen").style.backgroundImage = "url(rsc/pics/" + fondo + ")";
    }
}

function publicarAJAX() {
    var form = new FormData();

    //Tomamos en cuenta ambos casos si es texto o imagen, si es texto enviamos el parametro txt_post con el valor del txt 
    //y si es imagen entonces enviamos el parametro txt_img y la fuente de la imagen
    form.append(document.getElementById("txt_post").value == ""?'txt_img':'txt_post',
       document.getElementById("txt_post").value == ""?"app_core/resources/files/"+fondo:document.getElementById("txt_post").value);

    form.append('btn_save', true);

    axios.post('index.php', form)
    .then(function () {
        cargarPosts('');
    })
    .catch(function (error) {
    });
}

var idEdit;/*declaro el idEdit como una variable globarl para poder acceder a ella desde el método editarAJAX*/

function editar(id) {//este método se usa en el botón de editar dentro del div a la par del de eliminar

    idEdit = id.parentNode.parentNode.parentNode.id;

    txt_post.value = id.childNodes[1].childNodes[1].textContent;//obtiene el texto del div y lo setea en el txt

}

function editarAJAX() {//este es para el método de editar a la par del método de agregar
    var form = new FormData();

    form.append('idE', idEdit);
    //tomamos en cuenta si es un post normal o si es una imagen, si es una imagen cargamos la dirección, si es un post nada más enviamos el valor de txt_post
    form.append('txt_postE', (document.getElementById("txt_post").value!=""?document.getElementById("txt_post").value:"app_core/resources/files/"+fondo));
    form.append('btn_edit', true);

    axios.post('index.php', form)
    .then(function () {
        cargarPosts('');
    })
    .catch(function (error) {
    });
}

function eliminarPost(id) {

    var form = new FormData();

    form.append('id', id.parentNode.parentNode.parentNode.id);
    form.append('btn_eliminar', true);

    axios.post('index.php', form)
    .then(function () {
        cargarPosts('');
    })
    .catch(function (error) {
    });
}

function action(){

    console.log(document.getElementById('example').src);

}

window.addEventListener('load', miFuncionLoad, false);


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

    /*console.log("TOP "+ top +" LEFT "+ leftX);
    elmnt.style.top = top + "px";
    elmnt.style.left = leftX  + "px";*/

    if(leftX >=0 && top >=0 && top <=133 && leftX<=314){
        // set the element's new position:
        elmnt.style.top = top + "px";
        elmnt.style.left = leftX  + "px";
    }else{
     /* pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;*/
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

    var home = document.getElementById('lbl_time_top');
    home.addEventListener('click', calendario, false);

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
}

function reloj() {

    var semana = ['Dom', 'Lun', 'Mar', 'Jue', 'Vie', 'Sab']
    var fecha = new Date;
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
    }else
    if(this.id == "messenger"){
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
}