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