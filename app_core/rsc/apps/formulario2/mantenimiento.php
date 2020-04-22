<?php

    error_reporting();
    ini_set("display_errors", 1);

    require_once("conexion.php");

    $servidor = "localhost";
    $usuario = "root";
    $pass = "";
    $base_datos = "bd_productos";
    $conexion = new Conexion($servidor, $usuario, $pass, $base_datos);


    if(isset($_GET['datobusqueda'])){
        buscarProductos($conexion, $_GET['datobusqueda']);
    }

    if(isset($_POST['botonEliminar'])){
        eliminarProductos($conexion, $_POST['datoeliminar']);
        echo obtenerProductos($conexion);
    }

    function obtenerProductos($conexion)
    {
        $conexion->consulta("SELECT * FROM tbl_productos ORDER BY id DESC");
        $datos = "";

        while ($fila = $conexion->extraer_registro()) {
            $datos .= "<tr><td onclick='getRow(this)'>$fila[1]</td><td onclick='getRow(this)'>$fila[2]</td><td onclick='getRow(this)'>$fila[3]</td><td onclick='getRow(this)'>$fila[4]</td><td onclick='getRow(this)'>$fila[5]</td><td onclick='getRow(this)'>$fila[6]</td><tr>";
        }

        return $datos;
    }

    function buscarProductos($conexion, $dato)
    {
        $conexion->consulta("SELECT * FROM tbl_productos WHERE codigo LIKE '$dato%' OR nombre LIKE '$dato%' ");
        $resultado = "";
        while ($fila = $conexion->extraer_registro()) {
            $resultado .= "<tr><td>$fila[1]</td><td>$fila[2]</td><td>$fila[3]</td><td>$fila[4]</td><td>$fila[5]</td><td>$fila[6]</td><tr>";
        }
        echo $resultado; //imprimimos los datos
    }
    
    function insertarProductos($conexion, $codigo, $nombre, $precio, $cantidad, $fecha_vencimiento, $proveedor)
    {
        //INSERTAR - ACTUALIZAR - Comprobamos que el código existe buscándolo primero
        if($codigo != "" && $nombre != "" && $precio != "" && $cantidad != "" && $fecha_vencimiento != "" && $proveedor != "" )
        {
            $conexion->consulta("SELECT codigo FROM tbl_productos WHERE codigo = '$codigo' ");
            
            if ($conexion->extraer_registro()) { //SI EXISTE EL CODIGO LO ACTUALIZA
                $actualizar = "UPDATE tbl_productos SET nombre='$nombre', precio=$precio, cantidad=$cantidad, fechaVencimiento='$fecha_vencimiento', proveedor='$proveedor', WHERE codigo = '$codigo' ";
                $conexion->consulta($actualizar);
                return "Registro actualizado exitosamente.";
            } else { //SI NO EXISTE EL CODIGO LO INSERTA
                $insertar = "INSERT INTO tbl_productos (codigo,nombre,precio,cantidad,fechaVencimiento,proveedor) VALUES('$codigo','$nombre',$precio,$cantidad,'$fecha_vencimiento','$proveedor')";
                $conexion->consulta($insertar);
                return "Registro insertado exitosamente.";
            }
        }else{
            return "Debe de insertar todos los datos";
        }
    }

    function eliminarProductos($conexion, $codigo){
        $conexion->consulta("SELECT codigo FROM tbl_productos WHERE codigo = '$codigo' ");
        if ($conexion->extraer_registro()) {
            $actualizar = "DELETE FROM tbl_productos WHERE codigo = '$codigo' ";
            $conexion->consulta($actualizar);
            return "Registro actualizado exitosamente.";
        }

    }

?>
