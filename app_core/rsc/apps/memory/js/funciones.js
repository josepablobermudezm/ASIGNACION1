
var vector_memoria = ["1", "2", "3", "4", "5", "6", "7", "8", "1", "2", "3", "4", "5", "6", "7", "8"];
var contador = 0;
var startTime = 0
var start = 0
var end = 0
var diff = 0
var timerID = 0


class Stack {
    constructor() {
        this.data = [];
        this.top = 0;
    }
    push(element) {
        this.data[this.top] = element;
        this.top = this.top + 1;
    }
    isEmpty() {
        return this.top === 0;
    }
    pop() {
        if (this.isEmpty() === false) {
            this.top = this.top - 1;
            return this.data.pop(); // removes the last element
        }
    }
}

Array.prototype.vector_memoria_baraja = function () {
    var i = this.length, j, temp;
    while (--i > 0) {
        j = Math.floor(Math.random() * (i + 1));
        temp = this[j];
        this[j] = this[i]
        this[i] = temp;
    }
}

function crearJuego() {
    contador = 0;
    vector_memoria.vector_memoria_baraja();

    for (var i = 0; i < vector_memoria.length; i++) {
        document.getElementById("t" + i).src = "img/" + vector_memoria[i] + ".png";
    }

    setTimeout(
        function () {
            for (var i = 0; i < vector_memoria.length; i++) {
                document.getElementById("t" + i).src = "img/blue.jpg";
            }
            chronoReset();
            chronoStart();
        }, 2000);
}

var stack = new Stack();

function comparar(ID) {
    for (var i = 0; i < vector_memoria.length; i++) {
        if (ID.id == "t" + i) {
            document.getElementById(ID.id).src = "img/" + vector_memoria[i] + ".png";
            stack.push(i);
        }
    }
    if (stack.top == 2) {
        var ficha1 = stack.pop();
        var ficha2 = stack.pop();

        if (vector_memoria[ficha1] != vector_memoria[ficha2]) {
            setTimeout(
                function () {
                    document.getElementById("t" + ficha1).src = "img/blue.jpg";
                    document.getElementById("t" + ficha2).src = "img/blue.jpg";
                }, 200);
        } else {
            contador += 2;
        }
    }
    if (contador == 16) {
        setTimeout(
            function () {
                alert("you won!");
                chronoStop();
                crearJuego();
            }, 100);
    }
}


function chrono(){
	end = new Date()
	diff = end - start
	diff = new Date(diff)
	var msec = diff.getMilliseconds()
	var sec = diff.getSeconds()
	var min = diff.getMinutes()
	var hr = diff.getHours()-18
	if (min < 10){
		min = "0" + min
	}
	if (sec < 10){
		sec = "0" + sec
	}
	if(msec < 10){
		msec = "00" +msec
	}
	else if(msec < 100){
		msec = "0" +msec
	}
	document.getElementById("chronotime").innerHTML = hr + ":" + min + ":" + sec + ":" + msec
	timerID = setTimeout("chrono()", 10)
}
function chronoStart(){
	document.chronoForm.startstop.value = "stop!"
	document.chronoForm.startstop.onclick = chronoStop
	document.chronoForm.reset.onclick = chronoReset
	start = new Date()
	chrono()
}
function chronoContinue(){
	document.chronoForm.startstop.value = "stop!"
	document.chronoForm.startstop.onclick = chronoStop
	document.chronoForm.reset.onclick = chronoReset
	start = new Date()-diff
	start = new Date(start)
	chrono()
}
function chronoReset(){
	document.getElementById("chronotime").innerHTML = "0:00:00:000"
	start = new Date()
}
function chronoStopReset(){
	document.getElementById("chronotime").innerHTML = "0:00:00:000"
	document.chronoForm.startstop.onclick = chronoStart
}
function chronoStop(){
	document.chronoForm.startstop.value = "start!"
	document.chronoForm.startstop.onclick = chronoContinue
	document.chronoForm.reset.onclick = chronoStopReset
	clearTimeout(timerID)
}