<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
/*require_once('mantenimiento.php');*/

$message = "";
/*if (isset($_POST["btn_guardar"])) {
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
    $cedula = $_POST["txt_cedula"];

    $message = eliminarProductos($conexion, $cedula);
}*/
?>
<head>
    <meta charset='utf-8'> <!-- Codificación de documento para uso de caracteres -->
    <title>LAB #3 PHP</title>
    <link rel='stylesheet' href='css/styles.css'>
    <link rel="stylesheet" href="css/alertify.min.css" />
    <link rel="stylesheet" href="css/themes/default.min.css" />

    <script src="js/alertify.min.js"></script>
    <script type="text/javascript" src="js/funciones_comic.js"></script>
</head>

<body>
    <?php echo ($message != "") ? "<script> alertify.set('notifier','position', 'top-center'); alertify.success('$message');</script>" : ""; ?>
    
    <!--div class="bubble" style=""></div-->
    <div id="principal">
        <div id="left">
            <canvas id="lienzo" width="100%" height="100%" onmousemove="">
                <!--div class="bubble"></div-->
            </canvas>
        </div>
        <div id="right">
            <input type="text" id="txt_comentario" name="txtcome" placeholder="Digite el comentario">
            <input type="file" name="txt_foto" class="campo_texto" tabindex="13" id="txt_foto" id="txt_file" value="Cargar Imagen">
            <button id="btn_guardar_Img">Guardar Imagen</button>
            <button id="btn_descarga">Descargar Imagen</button>
            <button id="btn_agregar">Agregar Globo de conversacion</button>
        </div>  
    </div>

<!--div id="triangulo"></div-->


</body>
