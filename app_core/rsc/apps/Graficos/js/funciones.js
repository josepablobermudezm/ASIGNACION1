
function checkBox(cb) {
    var np;
    for (n = 0; n < 2; n++) {
        if (eval("document.form.contact[" + n + "].checked") == true) {
            document.form.contact[n].checked = false;
            if (n == cb) {
                document.form.contact[n].checked = true;
                np = n;
            }
        }
    }
    console.log(document.form.contact[np].id);
    if (document.form.contact[np].id == document.getElementById("Lineal").id) {
        document.getElementById("myChart").style = "opacity: 0;";
        document.getElementById("myChart3").style = "opacity: 0;";
        document.getElementById("myChart2").style = "opacity: 1;";
        document.getElementById("myChart4").style = "opacity: 1;";
    } else{
        document.getElementById("myChart").style = "opacity: 1;";
        document.getElementById("myChart3").style = "opacity: 1;";
        document.getElementById("myChart2").style = "opacity: 0;";
        document.getElementById("myChart4").style = "opacity: 0;";
    }
}



/*
<canvas id="myChart" width="400" height="200"></canvas>
    <script>
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [<?php echo obtenerNombre($conexion); ?>],
                datasets: [{
                    label: 'Precios',
                    data: [<?php echo obtenerCantidad($conexion); ?>],
                    backgroundColor: [<?php echo GenerarColumnasColor($conexion); ?>],
                    borderColor: [<?php echo GenerarColumnasColor($conexion); ?>],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    </script>



    <canvas id="myChart2" width="400" height="200"></canvas>
    <script>
        var ctx = document.getElementById('myChart2');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [<?php echo obtenerNombre($conexion); ?>],
                datasets: [{
                    label: "My First Dataset",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(75,192,192,0.4)",
                    borderColor: "rgba(75,192,192,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBorderBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [<?php echo obtenerCantidad($conexion); ?>],
                }]
            }
        });
    </script>

*/