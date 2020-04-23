<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
require_once('mantenimiento.php');

$message = "";


?>

<!DOCTYPE html>

<head>
    <meta charset='utf-8'> <!-- Codificación de documento para uso de caracteres -->
    <title>LAB #3 PHP</title>
    <link rel='stylesheet' href='css/styles.css'>
    <link rel="stylesheet" href="css/alertify.min.css" />
    <link rel="stylesheet" href="css/themes/default.min.css" />

    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js"></script>
    <script src="js/alertify.min.js"></script>
    <script type="text/javascript" src="js/funciones.js"></script>
</head>

<body>
    <?php echo ($message != "") ? "<script> alertify.set('notifier','position', 'top-center'); alertify.success('$message');</script>" : ""; ?>
    <h2 id="title">GRAFICOS</h2>
    <form name="form">
        <input type="checkbox" id="Lineal" name="contact" onClick="javascript:checkBox(0)" value="1">Lineal<br>
        <input type="checkbox" id="Barras" name="contact" onClick="javascript:checkBox(1)" value="1" checked >Barras<br>
    </form>

    <div style="position:relative;"><canvas id="myChart" width="300" height="200"></canvas>
        <div style="position: absolute; top: 0; left: 0; right: 0; margin: 0 auto;"><canvas id="myChart2" style='opacity: 0;' width="300" height="200"></canvas></div>
    </div>
    <script>
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [<?php echo obtenerNombre($conexion); ?>],
                datasets: [{
                    label: 'Precios',
                    data: [<?php echo obtenerPrecio($conexion); ?>],
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
    <br><br><br>
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
                    data: [<?php echo obtenerPrecio($conexion); ?>],
                }]
            }
        });
    </script>
    <br><br><br>



    <div style="position:relative;"><canvas id="myChart3" width="400" height="200"></canvas>
        <div style="position: absolute; top: 0; left: 0; right: 0; margin: 0 auto;"><canvas id="myChart4" style='opacity: 0;' width="400" height="200"></canvas></div>
    </div>
    <script>
        var ctx = document.getElementById('myChart3').getContext('2d');
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
    <br><br><br>
    <script>
        var ctx = document.getElementById('myChart4');
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
</body>

</html>