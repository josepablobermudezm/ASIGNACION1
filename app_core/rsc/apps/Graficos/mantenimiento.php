<?php

    error_reporting();
    ini_set("display_errors", 1);

    require_once("conexion.php");

    $servidor = "localhost";
    $usuario = "root";
    $pass = "";
    $base_datos = "bd_productos";
    $conexion = new Conexion($servidor, $usuario, $pass, $base_datos);

    function obtenerNombre($conexion)
    {
        $conexion->consulta("SELECT * FROM tbl_productos ORDER BY id DESC");
        $datos = "";
        while ($fila = $conexion->extraer_registro()) {
            $datos .= "'" . "$fila[2]" . "',";
        }
        $myString = trim($datos, ',');//quita la última coma de la variabel
        return $myString;
    }

    function GenerarColumnasColor($conexion)
    {
        $conexion->consulta("SELECT * FROM tbl_productos ORDER BY id DESC");
        $color = "";
        while ($fila = $conexion->extraer_registro()) {
            $color .= "'rgba(" . rand(0, 255) ."," . rand(0, 255) . "," . rand(0, 255) . ", 1)',";
        }
        $myString = trim($color, ',');
        return $myString;
    }

    function obtenerPrecio($conexion)
    {
        $conexion->consulta("SELECT * FROM tbl_productos ORDER BY id DESC");
        $datos = "";
        while ($fila = $conexion->extraer_registro()) {
            $datos .= "$fila[3]" . ",";
        }
        $myString = trim($datos, ',');
        return $myString;
    }

    function obtenerCantidad($conexion)
    {
        $conexion->consulta("SELECT * FROM tbl_productos ORDER BY id DESC");
        $datos = "";
        while ($fila = $conexion->extraer_registro()) {
            $datos .= "$fila[4]" . ",";
        }
        $myString = trim($datos, ',');
        return $myString;
    }

?>
