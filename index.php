<?php

  require_once("global.php"); //ARCHIVO BÁSICO GLOBAL DE CONFIGURACIÓN
  require_once(__LIB_PATH . "html.php");
  require_once(__CTR_PATH . "ctr_sistema.php");

  $html = new HTML(); //Invocamos al html helper
  $sistema = new CTR_Sistema(); //Invocamos al controlador
?>

<!DOCTYPE HTML>
<html>

  <head>

    <meta name="title" content="" />
    <meta name="description" content="" />
    <meta name="robots" content="index, follow" />
    <meta name="keywords" content="Social Network, HTML5, PHP, MySQL, jquery" />
    <meta name="language" content="es" />
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.min.js"></script>
    <link rel="shortcut icon" href="favicon.ico"/>

      <?php
          echo $html->html_js_header(__JS_PATH . "funciones.js"); 
          echo $html->html_css_header(__CSS_PATH . "style.css","screen"); 
      ?>
  </head>

  <body id="main_page">
  
  	<div id="main_box">

      <?php
        //Incluimos la vista contenida dentro del controlador respectivo
        $sistema->cargar_view();    
      ?>

    </div>
    
  </body>
</html>
