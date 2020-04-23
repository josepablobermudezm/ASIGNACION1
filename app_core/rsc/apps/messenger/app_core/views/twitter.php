<?php
   require_once(__LIB_PATH . "html.php");
   $html = new HTML();
   $twitter = new CTR_twitter(); //variable del Controlador

    if(isset($_POST['btn_Resp'])){
        $twitter->Save_Resp();
    }

    //Evento click (PUBLICAR) se activa al hacer click en el boton via POST
    if(isset($_POST['btn_save'])){ 
        $twitter->btn_save_click();
    }

    if(isset($_POST['btn_delete'])){ 
        $twitter->btn_delete_click($_POST['id_post']);
    }

    if(isset($_POST['btn_edit'])){ 
        $twitter->btn_edit_click();
    }

    
?>

<div id="panel_app">
  <div id="user_box">
  </div>

  <!--En el siguiente bloque imprimimos EL FORMULARIO HTML de envio de posts -->

  <div id="post_box">
      <form method="post">
	      <br>
	      <?php echo $html->html_textarea(4, 6, "txt_post", "txt_post", "textarea", "", 1, "", "placeholder='Escribe algo!'","required") ?>
	      <input type="file" name="txt_file" id="txt_file">
	      <?php echo $html->html_input_button("button","btn_save","btn_save","boton","Publicar",2,"","onclick='publicarAjax()'"); ?>
	      <?php echo $html->html_input_button("button","btn_search","btn_search","boton","Buscar",2,"","onclick='buscarAjax()'"); ?>
      <?php echo $html->html_form_end(); ?>
  </div>



 <?php  

  //Almacenará ya sea todos los tweets o los filtrados por la búsqueda
  //dependiendo de si presionamos el botón buscar
    $tweets = ""; 

    if(isset($_POST['btn_search'])){ 
        $tweets = $twitter->obtener_tweets_filtro();
    }else{ 
        $tweets = $twitter->obtener_tweets();
    }

  ?>

  <div id="main_panel">

    <?php foreach ($tweets as $t) { ?>
            <div id="cont">
                <div class='post_block'>
                    <span class='post_text' id='post_<?php echo $t[0]; ?>'>
                        <div class='published_date'>
                            <span>Publicado el <?php echo $t[2]; ?></span>
                        </div>
                    </span>
                    <div id='content_post_<?php echo $t[0]; ?>'>
                        <div class='post_detail'><?php echo $t[1]; ?></div><br/>
                    </div>
                    <button id='btn_delete' type='button' class='boton_crud' name='btn_delete' onclick='eliminarAjax(<?php echo$t[0] ?>)'>X</button>
                    <button id='btn_edit'   type='button' name='btn_edit' class='boton_crud' onclick='editarAjax(<?php echo $t[0] ?>)'>✓</button>
                    <button id='btn_Resp'   type='button' name='btn_Resp' onclick='GuardarRespuesta(<?php echo $t[0] ?>)'>Responder</button>
                </div>
             </div>

    <?php } ?>
   
  </div>


</div>




