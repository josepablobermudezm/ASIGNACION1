window.addEventListener('load', miFuncionLoad, false);

var fila = 0;

function miFuncionLoad() {

    var boton = document.getElementById('guardar');
    boton.addEventListener('click', agregarDatos, false);

    var boton2 = document.getElementById('eliminar');
    boton2.addEventListener('click', eliminarFila, false);
}


function agregarDatos() {
   
    //datos se convierte en el objeto HTMl con id "cuerpotabla"
    var datos = document.getElementById("cuerpotabla");
    //se inserta código HTML como fials con los valores respecetiso del formulario

    var mensaje = (esVacio("txt_URL") || esVacio("txt_Producto")) ? false : true;

    var img = document.createElement('img'); 
    img.src = document.getElementById("txt_URL").value; 
    img.height = 25;
    img.width = 25;
    img.border = 3;
    img.alt = "";
    if (mensaje) {
        datos.innerHTML += "<tr><td>" + document.getElementById("txt_Producto").value + "</td>" +
            "<td>" + "<img src='"+ document.getElementById("txt_URL").value  + "'" +  "alt='' border=3 height=25 width=25/>" + "</td></tr>";
    } else {
        alert(mensaje);
    }

}

function esVacio(idcampo) {
    var campo = document.getElementById(idcampo);
    if (campo.value == "" || campo.lenght == 0) {
        return true;
    }
    return false;
}

function eliminarFila() {
    if (fila != 0) {
        document.getElementById("tabladatos").deleteRow(fila);
        fila = 0;
    }
}

function myFunction(tr) {
    var table = document.getElementById("tabladatos"), rIndex;
    for (var i = 1; i < table.rows.length; i++) {
        for (var j = 0; j < table.rows[i].cells.length; j++) {
            table.rows[i].cells[j].onclick = function () {
                rIndex = this.parentElement.rowIndex;
                fila = rIndex;
                this.parentElement.addClass('myclass');
            };
        }
    }
}
