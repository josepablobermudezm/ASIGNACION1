window.addEventListener('load', miFuncionLoad, false);

function miFuncionLoad() {

    var boton = document.getElementById('calc');
    boton.addEventListener('click', calcular, false);
}


function calcular() {
    var d1 = document.getElementById("date1");
    var d2 = document.getElementById("date2");
    var lb = document.getElementById("idlabel");

    var dt1 = new Date(d1.value);
    var dt2 = new Date(d2.value);

    var res =  Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
    
    var resF = (res/30);

    lb.innerHTML = "Diferencia: Mes " + (parseInt(resF))+ " Días  " + (resF<1?res:(res-parseInt(resF)*30));
}


function daysInMonth (month, year) { 
    return new Date(year, month, 0).getDate(); 
} 