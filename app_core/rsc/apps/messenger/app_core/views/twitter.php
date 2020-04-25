<?php
require_once(__LIB_PATH . "html.php");
$html = new HTML();
   $twitter = new CTR_twitter(); //variable del Controlador

   if(isset($_POST['btn_Resp'])){
     if(sizeof($twitter->Validar_Resp($_POST['id_respuesta'])) != 1){
      $twitter->Save_Resp();
     }
    
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
     $cont=4; 
     $resp = "";
     $band = 0;
     if(isset($_POST['btn_search'])){ 
      $tweets = $twitter->obtener_tweets_filtro();
      $band = 1;
    }else{ 
      $tweets = $twitter->obtener_tweets();
      $band = 0;
    }

    ?>

    <div id="main_panel">
      <?php foreach ($tweets as $t) { $resp = $twitter->filtrarRespuestas($t[0]); ?>
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
          <button id='btn_Resp'   type='button' name='btn_Resp' onclick='GuardarRespuesta(<?php echo $t[0] ?>,<?php echo $t[0] ?>)'>Responder</button>
        </div>
        <?php 
        if(sizeof($resp) > 0 && $band == 0){
          foreach ($resp as $r){ ?>
            <div class='post_block' style= 'margin-left:<?php echo $cont.'%' ?>; width: auto;'>
              <span class='post_text' id='post_<?php echo $r[0]; ?>'>
                <div class='published_date'>
                  <span>Publicado el <?php echo $r[2]; ?></span>
                </div>
              </span>
              <div id='content_post_<?php echo $r[0]; ?>'>
                <div class='post_detail'><?php echo $r[1]; ?></div><br/>
              </div>
              <button id='btn_delete' type='button' class='boton_crud' name='btn_delete' onclick='eliminarAjax(<?php echo$r[0] ?>)'>X</button>
              <button id='btn_edit'   type='button' name='btn_edit' class='boton_crud' onclick='editarAjax(<?php echo $r[0] ?>)'>✓</button>
              <button id='btn_Resp'   type='button' name='btn_Resp' onclick='GuardarRespuesta(<?php echo $r[0] ?>, <?php echo $t[0] ?>)'>Responder</button>
            </div>
            <?php 
            $cont += 4;
          }
        }
        $cont=4;
        /*$twitter->getRespuestas()="";
        $twitter->getRespuestas()=array();*/
        ?> 
      <?php } ?>
    </div>
  </div>




