<?php
require_once(__LIB_PATH . "html.php");
$html = new HTML();
$twitter = new CTR_twitter();

if (isset($_POST['btn_save'])) {
    $twitter->btn_save_click();
}

if (isset($_POST['btn_eliminar'])) {
    $twitter->btn_delete_click($_POST['id']);
}

if (isset($_POST['btn_edit'])) {
    $twitter->btn_edit_click($_POST['idE']);
}
/*para eliminar y editar envio por parametros los id en post*/
?>

<body>
    <div id='page'>
        <section id='main'>
            <section id='device'>
                <div id='main_screen'>
                    <div id='topbar'><span id='lbl_time_top'></span></div>
                    <input type="date" id="start">
                    <div id='panel'>
                        <div id='panel_icons'>
                            <div id='example' class='icons' style="background:url('app_core/rsc/apps/example/icon.png');">
                                <div class='label_icon'>Example APP</div>
                            </div>

                            <div id='bbgame' class='icons' style="background:url('app_core/rsc/apps/bbgame/icon.png') no-repeat;">
                                <div class='label_icon'>BB Game</div>
                            </div>

                            <div id='calendar' class='icons' style="background:url('app_core/rsc/apps/calendar/icon.png') no-repeat;">
                                <div class='label_icon'>Calendar</div>
                            </div>

                            <div id='messenger' class='icons' style="background:url('app_core/rsc/apps/messenger/icon.png') no-repeat;">
                                <div class='label_icon'>Messenger</div>
                            </div>

                            <div id='media' class='icons' style="background:url('app_core/rsc/apps/media/icon.png') no-repeat;">
                                <div class='label_icon'>Media</div>
                            </div>

                            <div id='memory' class='icons' style="background:url('app_core/rsc/apps/memory/icon.png') no-repeat;">
                                <div class='label_icon'>Memory Game</div>
                            </div>

                            <div id='formulario2' class='icons' style="background:url('app_core/rsc/apps/formulario2/icon.png') no-repeat;">
                                <div class='label_icon'>Formulario</div>
                            </div>

                            <label>
                                <div id='bck' class='icons2' style="background:url('background.png');">
                                    <div class='label_icon'>Background</div>
                                </div>
                            </label>

                        </div>
                    </div>
                    <div id='main_app'>
                        <button id="exit" onclick="closeApp()">X</button>
                        <iframe id="window_app" src="" width="100%" height="100%"> 
                        </iframe>
                    </div>
                </div>
            </section>
            <div id="cont_fondos">
                <label id="f_titulo">Seleccione el fondo deseado</label>
                <div id="fondos">
                    <div class="backs">
                        <img id="imagen" class="imagenes" src="app_core/rsc/pics/3.jpg">
                    </div>
                    <div class="backs">
                        <img id="imagen" class="imagenes" src="app_core/rsc/pics/4.jpg">
                    </div>
                    <div class="backs">
                        <img id="imagen" class="imagenes" src="app_core/rsc/pics/5.jpg">
                    </div>
                </div>
            </div>
        </section>
    </div>
</body>