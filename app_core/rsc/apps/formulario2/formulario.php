<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
require_once('mantenimiento.php');

$message = "";
if (isset($_POST["btn_guardar"])) {
    $cedula = $_POST["txt_cedula"];
    $nombre = $_POST["txt_nombre"];
    $apellido1 = $_POST["txt_apellido1"];
    $apellido2 = $_POST["txt_apellido2"];
    $telefono = $_POST["txt_telefono"];
    $email = $_POST["txt_email"];
    $direccion = $_POST["txt_direccion"];
    $departamento = $_POST["txt_departamento"];
    $puesto = $_POST["txt_puesto"];
    $salario = $_POST["txt_salario"];
    $observaciones = $_POST["txt_observaciones"];
    $foto = $_POST["txt_foto"];
    $fecha = $_POST["txt_fecha"];
    $message = insertarProductos($conexion, $cedula, $nombre, $apellido1, $apellido2, $telefono, $email, $direccion, $departamento, $puesto, $salario, $observaciones, $foto, $fecha);
}

if (isset($_POST["btn_eliminar"])) {
    $codigo = $_POST["txt_cedula"];

    $message = eliminarProductos($conexion, $cedula);
}
?>

<!DOCTYPE html>

<head>
    <meta charset='utf-8'> <!-- Codificación de documento para uso de caracteres -->
    <title>LAB #3 PHP</title>
    <link rel='stylesheet' href='css/styles.css'>
    <link rel="stylesheet" href="css/alertify.min.css" />
    <link rel="stylesheet" href="css/themes/default.min.css" />

    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.min.js"></script>
    <script src="js/alertify.min.js"></script>
    <script type="text/javascript" src="js/funciones.js"></script>
</head>

<body>
    <?php echo ($message != "") ? "<script> alertify.set('notifier','position', 'top-center'); alertify.success('$message');</script>" : ""; ?>

    <h2 id="title">FORMULARIO</h2>
    <section id="panel_form">
        <form method="post" id="frm_productos" name="frm_productos" action="formulario.php">
            <input placeholder="Cédula: " type="text" class="campo_texto" maxlength="9" value="" tabindex="1" id="txt_cedula" name="txt_cedula">
            <input placeholder="Nombre: " type="text" class="campo_texto" maxlength="32" value="" tabindex="2" id="txt_nombre" name="txt_nombre">
            <input placeholder="Apellido1: " type="text" class="campo_texto" maxlength="32" value="" tabindex="3" id="txt_apellido1" name="txt_apellido1">
            <input placeholder="Apellido2: " type="text" class="campo_texto" maxlength="32" value="" tabindex="4" id="txt_apellido2" name="txt_apellido2">
            <input placeholder="Teléfono: " type="text" class="campo_texto" maxlength="8" value="" tabindex="5" id="txt_telefono" name="txt_telefono">
            <input placeholder="Email: " type="text" class="campo_texto" maxlength="64" value="" tabindex="6" id="txt_email" name="txt_email">
            <input placeholder="Dirección: " type="text" class="campo_texto" maxlength="128" value="" tabindex="7" id="txt_direccion" name="txt_direccion">
            <input placeholder="Departamento: " type="text" class="campo_texto" maxlength="32" value="" tabindex="8" id="txt_departamento" name="txt_departamento">
            <input placeholder="Puesto: " type="text" class="campo_texto" maxlength="32" value="" tabindex="9" id="txt_puesto" name="txt_puesto">
            <input placeholder="Salario: " type="text" class="campo_texto" maxlength="11" value="" tabindex="10" id="txt_salario" name="txt_salario" onKeyPress="return validate(event)">
            <input placeholder="Observaciones: " type="text" class="campo_texto" maxlength="128" value="" tabindex="11" id="txt_observaciones" name="txt_observaciones">
            <input placeholder="Foto: " type="text" class="campo_texto" maxlength="64" value="" tabindex="12" id="txt_foto" name="txt_foto">
            <input type="date" value="" tabindex="13" id="txt_fecha" name="txt_fecha">

            <button class="boton" type="submit" name="btn_guardar" id="btn_guardar">Guardar</button>
            <button class="boton" type="submit" name="btn_eliminar" id="btn_eliminar" tabindex="8">Eliminar</button>
            <button class="boton" type="button" onclick="eliminarAxios()" name="btn_eliminarAJAX" id="btn_eliminarAJAX" tabindex="9">Eliminar2</button>
        </form>
    </section>
    <section id="panel_data">
        <form method="post" id="frm_busqueda" name="frm_busqueda">
            <input type="text" value="" placeholder="Buscar por Nombre o Código del Producto" size="50" name="txt_busq" id="txt_busq" class="search" tabindex="9" onkeyup="cargarProductos(this.value)">
        </form>
        <br><br>
        <div id="resultados">
            <table>
                <thead>
                    <td>CEDULA</td>
                    <td>NOMBRE</td>
                    <td>APELLIDO1</td>
                    <td>APELLIDO2</td>
                    <td>TELEFONO</td>
                    <td>EMAIL</td>
                    <td>DIRECCION</td>
                    <td>DEPARTAMENTO</td>
                    <td>PUESTO</td>
                    <td>SALARIO</td>
                    <td>OBSERVACIONES</td>
                    <td>FOTO</td>
                    <td>FECHA</td>
                </thead>
                <tbody id="grid">
                    <?php echo obtenerProductos($conexion); ?>
                </tbody>
            </table>
        </div>
    </section>
</body>

</html>