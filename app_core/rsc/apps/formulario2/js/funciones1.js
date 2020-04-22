
function cargarProductos(dato) {
    axios.get('mantenimiento.php', {
        params: {
            datobusqueda: dato
        }
    })
        .then(function (response) {
            document.getElementById("grid").innerHTML = response.data;
        })
        .catch(function (error) {
            alertify.error(error.response.data);
        });
}

function getRow(btn) {
    var row = btn.parentNode;
    txt_cedula.value = row.children[0].innerText;
    txt_nombre.value = row.children[1].innerText;
    txt_apellido1.value = row.children[2].innerText;
    txt_apellido2.value = row.children[3].innerText;
    txt_telefono.value = row.children[4].innerText;
    txt_direccion.value = row.children[6].innerText;
    txt_email.value = row.children[5].innerText;
    txt_departamento.value = row.children[7].innerText;
    txt_puesto.value = row.children[8].innerText;
    txt_salario.value = row.children[9].innerText;
    txt_observaciones.value = row.children[10].innerText;
    txt_foto.value = row.children[11].innerText;
    txt_fecha.value = row.children[12].innerText;

}

function esVacio(idcampo) {
    var campo = document.getElementById(idcampo);
    if (campo.value == "" || campo.lenght == 0) {
        return true;
    }
    return false;
}

function soloNumeros(e) {
    //utiliza una operación ternaria para asignarle el valor a la variable
    //pregunta si está pasando un evento, si si, le asigna uno en especifico
    //si no lo reconoce nada más le asigna el código ascii de la tecla presionada
    var tecla = window.Event ? e.which : e.keyCode
    return (tecla >= 48 && tecla <= 57)
}

function validate(evt) {
    var evento = evt || window.event;
    if (evento.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
        var key = evento.keyCode || evento.which;
        key = String.fromCharCode(key);
    }
    var rango = /[0-9]|\./;
    if (!rango.test(key)) {
        evento.returnValue = false;
        if (evento.preventDefault) evento.preventDefault();
    }
}

function publicarAxios() {
    var formdata = new FormData();

    formdata.append('txt_cedula', document.getElementById('txt_cedula').value);
    formdata.append('txt_nombre', document.getElementById('txt_nombre').value);
    formdata.append('txt_apellido1', document.getElementById('txt_apellido1').value);
    formdata.append('txt_apellido2', document.getElementById('txt_apellido2').value);
    formdata.append('txt_telefono', document.getElementById('txt_telefono').value);
    formdata.append('txt_email', document.getElementById('txt_email').value);
    formdata.append('txt_direccion', document.getElementById('txt_direccion').value);
    formdata.append('txt_departamento', document.getElementById('txt_departamento').value);
    formdata.append('txt_puesto', document.getElementById('txt_puesto').value);
    formdata.append('txt_salario', document.getElementById('txt_salario').value);
    formdata.append('txt_observaciones', document.getElementById('txt_observaciones').value);
    formdata.append('txt_foto', document.getElementById('txt_foto').value);
    formdata.append('txt_fecha', document.getElementById('txt_fecha').value);
    formdata.append("btn_save", document.getElementById('btn_guardar'));

    var imagefile = document.querySelector('#txt_foto');

    if(imagefile.files[0]) {
        formdata.append("txt_foto", imagefile.files[0]);
    }

    axios.post('mantenimiento.php', formdata)
        .then(function (response) {
            // La carga es exitosa
            if (response.data != null) {
                alertify.success("Registro agregado exitosamente mediante AJAX");
                document.getElementById("grid").innerHTML = response.data;
            }
            else {
                alertify.warning("Hubo un error");
            }
        })
        .catch(function (error) {
            // la carga es erronea
            alertify.error(error.response.data);
        });
}

function eliminarAxios() {

    var form = new FormData();

    form.append("cedula", document.getElementById('txt_cedula').value);
    form.append("botonEliminar", document.getElementById('btn_eliminarAJAX'));
    axios.post('mantenimiento.php', form)
        .then(function (response) {
            // La carga es exitosa
            if (response.data != null) {
                alertify.success("Registro eliminado exitosamente mediante AJAX");
                document.getElementById("grid").innerHTML = response.data;
                document.getElementById("frm_productos").reset();
            }
            else {
                alertify.warning("No existe el código digitado");
            }
        })
        .catch(function (error) {
            // la carga es erronea
            alertify.error(error.response.data);
        });
}