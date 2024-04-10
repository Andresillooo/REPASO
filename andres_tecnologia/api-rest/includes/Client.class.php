<?php
require_once("Database.class.php");

class Client {
    public static function create_client($correo_electronico, $nombre, $contraseña) {
        $database = new Database();
        $conn = $database->getConnection();
        $stmt = $conn->prepare('INSERT INTO listado_clientes(correo_electronico, nombre, contraseña) VALUES (:correo_electronico, :nombre, :contraseña)');
        $stmt->bindParam(':correo_electronico', $correo_electronico);
        $stmt->bindParam(':nombre', $nombre);
        $stmt->bindParam(':contraseña', $contraseña);
        
        if ($stmt->execute()) {
            header('HTTP/1.1 201 Cliente creado correctamente');
        } else {
            header('HTTP/1.1 404 Cliente no se ha creado correctamente');
        }
    }
}
?>
