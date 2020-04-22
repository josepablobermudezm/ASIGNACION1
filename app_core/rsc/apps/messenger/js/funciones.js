

function agregarDatos() {

    var newText = document.getElementById("newText").value;

    var msj = document.createElement("div");
    msj.id = "msj";
    var today = new Date();
    var time = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    if (newText != "") {
        msj.innerHTML = newText + "&nbsp" + time;

        var sheet = document.createElement('style')
        sheet.innerHTML = "#msj { border-radius: 8px;" 
            + "background-color: #007bff;" 
            +"text-align: center;"
            +"font-size: 15px;"
            +"color: #FFFFFF;" 
            +"margin-top: 5px;";
        document.body.appendChild(sheet);

        document.getElementById('cajaform').appendChild(msj);
        document.getElementById("newText").value = "";
    }
}