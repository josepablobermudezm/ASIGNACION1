<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);


$message = "";

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
            <canvas id="lienzo" width="100%" height="100%">
            </canvas>
        </div>
        <div id="right">
            <input type="text" id="txt_comentario" name="txt_comentario" placeholder="Digite el comentario">
            <a id="download">
                <input type="file" name="txt_foto" class="campo_texto" id="txt_foto" accept="image/*">
            </a>
            <input type="text" name="" id="txt_nombre" placeholder="Nombre de Imagen">
            <button id="btn_descarga">Descargar Imagen</button>
            <button id="btn_agregar">Agregar Globo de conversacion</button>
        </div>  
    </div>
    <!--div id="triangulo"></div-->
</body>
