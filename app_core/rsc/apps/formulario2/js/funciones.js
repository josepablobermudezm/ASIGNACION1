/*
window.addEventListener('load', miFuncionLoad, false);

function miFuncionLoad() {

    var boton2 = document.getElementById('btn_eliminarAJAX');
    boton2.addEventListener('click', eliminarAxios() , false);
}*/

function cargarProductos(dato){
    axios.get('mantenimiento.php',{
    params: {
        datobusqueda: dato
    }
    })
    .then(function (response){
        document.getElementById("grid").innerHTML = response.data;
    })
    .catch(function (error){
        alertify.error(error.response.data);
    });
}

function getRow(btn) {
    var row = btn.parentNode;
    txt_cod.value = row.children[0].innerText;
    txt_nom.value = row.children[1].innerText;
    txt_prec.value = row.children[2].innerText;
    txt_cant.value = row.children[3].innerText;
    txt_vencimiento.value = row.children[4].innerText;
    txt_proveedor.value = row.children[5].innerText;

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
    if( !rango.test(key) ) {
      evento.returnValue = false;
      if(evento.preventDefault) evento.preventDefault();
    }
  }


function eliminarAxios(){
    var form = new FormData();

    var id = document.getElementById("txt_cod").value;
    
    form.append('datoeliminar', id);
    form.append('botonEliminar', document.getElementById("btn_eliminarAJAX"));

    axios.post('mantenimiento.php', form)
    .then(function(){
        alertify.success('Registro eliminado');
        document.getElementById("grid").innerHTML = response.data;
    })
    .catch(function(error){
        alertify.error(error.response.data);
    });
}