<?php
require_once('../includes/Client.class.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_GET['correo_electronico']) && isset($_GET['nombre']) && isset($_GET['contraseña'])) {
    Client::create_client($_GET['correo_electronico'], $_GET['nombre'], $_GET['contraseña']);
}
?>
