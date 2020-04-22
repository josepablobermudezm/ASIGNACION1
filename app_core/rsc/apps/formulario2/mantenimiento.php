<?php

    error_reporting();
    ini_set("display_errors", 1);

    require_once("conexion.php");

    $servidor = "localhost";
    $usuario = "root";
    $pass = "";
    $base_datos = "bd_funcionarios";
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
        $conexion->consulta("SELECT * FROM tbl_funcionarios ORDER BY id DESC");
        $datos = "";

        while ($fila = $conexion->extraer_registro()) {
            $datos .= "<tr><td onclick='getRow(this)'>$fila[1]</td><td onclick='getRow(this)'>$fila[2]</td><td onclick='getRow(this)'>$fila[3]</td><td onclick='getRow(this)'>$fila[4]</td><td onclick='getRow(this)'>$fila[5]</td><td onclick='getRow(this)'>$fila[6]</td><td onclick='getRow(this)'>$fila[7]</td><td onclick='getRow(this)'>$fila[8]</td><td onclick='getRow(this)'>$fila[9]</td><td onclick='getRow(this)'>$fila[10]</td><td onclick='getRow(this)'>$fila[11]</td><td onclick='getRow(this)'>$fila[12]</td><td onclick='getRow(this)'>$fila[13]</td><td onclick='getRow(this)'><tr>";
        }

        return $datos;
    }

    function buscarProductos($conexion, $dato)
    {
        $conexion->consulta("SELECT * FROM tbl_funcionarios WHERE codigo LIKE '$dato%' OR nombre LIKE '$dato%' ");
        $resultado = "";
        while ($fila = $conexion->extraer_registro()) {
            $resultado .= "<tr><td>$fila[1]</td><td>$fila[2]</td><td>$fila[3]</td><td>$fila[4]</td><td>$fila[5]</td><td>$fila[6]</td><tr>";
        }
        echo $resultado; //imprimimos los datos
    }
    
    function insertarProductos($conexion, $cedula, $nombre, $apellido1, $apellido2, $telefono, $email, $direccion, $departamento, $puesto, $salario, $observaciones, $foto, $fecha)
    {
        //INSERTAR - ACTUALIZAR - Comprobamos que el código existe buscándolo primero
        if($cedula != "" && $nombre != "" && $apellido1 != "" && $apellido2 != "" && $telefono != "" && $email != "" &&
        $direccion != "" && $departamento != "" && $puesto != "" && $salario != "" && $fecha != "")
        {
            $conexion->consulta("SELECT codigo FROM tbl_funcionarios WHERE codigo = '$cedula' ");
            
            if ($conexion->extraer_registro()) { //SI EXISTE EL CODIGO LO ACTUALIZA
                $actualizar = "UPDATE tbl_funcionarios SET cedula='$cedula', nombre='$nombre', apellido1='$apellido1', apellido2='$apellido2', telefono='$telefono'
                , email='$email', direccion='$direccion', departamento='$departamento', puesto='$puesto', salario = $salario, observaciones='$observaciones', foto='$foto', fecha='$fecha' WHERE cedula = '$cedula' ";
                $conexion->consulta($actualizar);
                return "Registro actualizado exitosamente.";
            } else { //SI NO EXISTE EL CODIGO LO INSERTA
                $insertar = "INSERT INTO tbl_funcionarios (cedula,nombre,apellido1,apellido2,telefono,email,direccion,departamento,puesto,salario,observaciones,
                foto,fecha) VALUES('$cedula','$nombre','$apellido1','$apellido2','$telefono','$email','$direccion','$departamento','$puesto',$salario,'$observaciones',
                '$foto','$fecha')";
                $conexion->consulta($insertar);
                return "Registro insertado exitosamente.";
            }
        }else{
            return "Debe de insertar todos los datos";
        }
    }

    function eliminarProductos($conexion, $cedula){
        $conexion->consulta("SELECT cedula FROM tbl_funcionarios WHERE cedula = '$cedula' ");
        if ($conexion->extraer_registro()) {
            $actualizar = "DELETE FROM tbl_funcionarios WHERE cedula = '$cedula' ";
            $conexion->consulta($actualizar);
            return "Registro actualizado exitosamente.";
        }

    }

?>
