<?php
/*para eliminar y editar envio por parametros los id en post*/
?>

<body>
    <div id='page'>
        <section id='main'>
            <section id='device'>
                <div id='main_screen'>
                    <div id='topbar'><span id='lbl_time_top' onclick="calendario()"></span></div>
                    <input type="date" id="start">
                    <div id='panel'>
                        <div id='panel_icons'>
                            <div id='graficos' class='icons' style="background:url('app_core/rsc/apps/graficos/icon.png');">
                                <div class='label_icon'>Graficos</div>
                            </div>

                            <div id='messenger' class='icons' style="background:url('app_core/rsc/apps/messenger/icon.png') no-repeat;">
                                <div class='label_icon'>Messenger</div>
                            </div>

                            <div id='formulario2' class='icons' style="background:url('app_core/rsc/apps/formulario2/icon.png') no-repeat;">
                                <div class='label_icon'>Formulario</div>
                            </div>

                            <div id='comic' class='icons' style="background:url('app_core/rsc/apps/comic/icon.png') no-repeat;">
                                <div class='label_icon'>Crear Comic</div>
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