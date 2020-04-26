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
<?php echo ($message != "") ? "<script> alertify.set('notifier','position', 'top-center'); alertify.success('$message');</script>" : ""; ?>
<!--div class="bubble" style=""></div-->
<div id="principal">
    <div id="left">
        <label id="titulo">ÁREA DE TRABAJO</label>
        <canvas id="lienzo" width="600" height="600">
        </canvas>
    </div>
    <div id="right"> 
        <div style="height: 50%; width: 100%;">
            <a id="download">
                <input type="file" name="txt_foto" class="campo_texto" id="txt_foto" accept="image/*">
            </a>
            <button id="btn_agregar_globo">Agregar Globo</button>
            <button id="btn_agregar_comentario">Agregar Comentario</button>
            <input  type="text" name="" id="txt_nombre" placeholder="Nombre de Imagen">
            <button id="btn_descarga">Descargar Imagen</button>
        </div>
        <div style="width: 100%; height: 50%; background-color: gray;"> 
            <div id="Caja_Globo" style="display: none;">
                <input type="text" id="txt_pos_x" name="" class="datos" placeholder="Posicion X" value="0">
                <input type="text" id="txt_pos_y" class="datos" placeholder="Posicion Y" value="0" >
                <label>Tamaño</label> 
                <br>
                <form name="form">
                    <input type="checkbox" id="1" name="contact" onClick="javascript:checkBox(0)" value="1" checked>1
                    <br>
                    <input type="checkbox" id="2" name="contact" onClick="javascript:checkBox(1)" value="1">2
                    <br>
                    <input type="checkbox" id="3" name="contact" onClick="javascript:checkBox(2)" value="1">3    
                </form>
                <button id="btn_terminado">Terminado</button>
            </div>
            <div id="Caja_Comentarios" style="display: none;">
                <input type="text" id="txt_comentario" name="txt_comentario" placeholder="Digite el comentario">
                <input type="text" id="txt_Com_X" name="" class="datos" placeholder="Posicion X" value="200">
                <br>
                <input type="text" id="txt_Com_Y" class="datos" placeholder="Posicion Y" value="100" >
                <br>
                <label>Tamaño</label>
                <select id="cmb_Tam" name="cmb_Tam">
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="14">14</option>
                    <option value="16">16</option>
                    <option value="18">18</option>
                </select>
                <br>
                <button id="btn_comentario">Añadir</button>
            </div>
        </div>
    </div>
</div>
