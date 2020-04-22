<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
require_once('mantenimiento.php');

$message = "";

if(isset($_POST["btn_guardar"])){
    $codigo = $_POST["txt_cod"];
    $nombre = $_POST["txt_nom"];
    $precio = $_POST["txt_prec"];
    $cantidad = $_POST["txt_cant"];
    $proveedor = $_POST["txt_proveedor"];
    $fecha_vencimiento = $_POST["txt_vencimiento"];
    
    $message = insertarProductos($conexion, $codigo, $nombre, $precio, $cantidad, $fecha_vencimiento,$proveedor);
}


if(isset($_POST["btn_eliminar"])){
    $codigo = $_POST["txt_cod"];
    
    $message = eliminarProductos($conexion, $codigo);
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
<?php echo ($message != "")? "<script> alertify.set('notifier','position', 'top-center'); alertify.success('$message');</script>" : "";?>

<h2 id="title">FORMULARIO</h2>
    <section id="panel_form">
        <form method="post" id="frm_productos" name="frm_productos" action="formulario.php">
            <input placeholder="Código: " type="text" class="campo_texto" maxlength="8" value="" tabindex="1" id="txt_cod" name="txt_cod">
            <input placeholder="Nombre: " type="text" class="campo_texto" maxlength="64" value="" tabindex="2" id="txt_nom" name="txt_nom">
            <input placeholder="Precio: " type="text"  class="campo_texto" maxlength="11" value="" tabindex="3" id="txt_prec" name="txt_prec" onKeyPress="return validate(event)" >
            <input placeholder="Cantidad: " type="text"  class="campo_texto" maxlength="11" value="" tabindex="4" id="txt_cant" name="txt_cant" onKeyPress="return validate(event)" >
            <input placeholder="Proveedor: " type="text" class="campo_texto" maxlength="11" value="" tabindex="6" id="txt_proveedor" name="txt_proveedor">
            <br>
            <label for="start">Vencimiento:</label>
            <br>
            <input type="date" value="" tabindex="5" id="txt_vencimiento" name="txt_vencimiento">
            
            <button class="boton" type="submit" name="btn_guardar" id="btn_guardar">Guardar</button>
            <button class="boton" type="submit" name="btn_eliminar" id="btn_eliminar" tabindex="8">Eliminar</button>
            <button class="boton" type="button" onclick="eliminarAxios()" name="btn_eliminarAJAX" id="btn_eliminarAJAX" tabindex="9">Eliminar2</button>
        </form>
    </section>
    <section id="panel_data">
        <form method="post" id="frm_busqueda" name="frm_busqueda">
            <input type="text" value="" placeholder="Buscar por Nombre o Código del Producto" size="50" name="txt_busq" id="txt_busq" class="search" tabindex="9" onkeyup = "cargarProductos(this.value)">
        </form>
        <br><br>
        <div id="resultados">
            <table>
                <thead>
                    <td>CÓDIGO</td>
                    <td>NOMBRE</td>
                    <td>PRECIO</td>
                    <td>CANTIDAD</td>
                    <td>VENCIMIENTO</td>
                    <td>PROVEEDOR</td>
                </thead>
                <tbody id="grid">
                    <?php echo obtenerProductos($conexion); ?>
                </tbody>
            </table>
        </div>
    </section>
</body>

</html>