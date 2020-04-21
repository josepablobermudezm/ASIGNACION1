<?php

    require_once(__MDL_PATH . "mdl_twitter.php");
    require_once(__LIB_PATH . "message.php");

    class CTR_twitter{

        private $postdata;
        var $mssg;

        public function __construct(){
            $this->postdata = new MDL_twitter();
            $this->mssg = new Message();
        }

        public function obtener_tweets(){
            return $this->postdata->get_tweets();
        }

        public function obtener_tweet($id){
            return $this->postdata->buscarPosts($id);
        }

        function btn_save_click(){
            $postinfo = array();
            if($_POST['txt_post'] == ''){
                $postinfo[0] = strip_tags(trim(str_replace("'", "\"", $_POST['txt_img'])));
            }else{
                $postinfo[0] = strip_tags(trim(str_replace("'", "\"", $_POST['txt_post'])));
            }
            echo($postinfo[0]);
            $this->postdata->insertar_post($postinfo);
            $this->mssg->show_message("", "success", "success_insert");
        }

        function btn_edit_click($id){
            $postinfo = array();
            $postinfo[0] = strip_tags(trim(str_replace("'", "\"", $_POST['txt_postE'])));
            echo($postinfo[0]);
            $this->postdata->edit_post($postinfo, $id);
            $this->mssg->show_message("", "success", "success_insert");
        }

        function btn_delete_click($id){
            $this->postdata->eliminar_post($id);
        }

        function cargar_view(){
            require_once(__VWS_PATH . "twitter1.php");
        }

    }
?>