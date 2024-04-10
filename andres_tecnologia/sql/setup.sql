-- DROP DATABASE if exists code_pills;
CREATE DATABASE IF NOT EXISTS code_pills DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE code_pills;

CREATE TABLE IF NOT EXISTS listado_clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Correo_electronico VARCHAR(255) NOT NULL,
    Nombre VARCHAR(255) NOT NULL,
    Contraseña VARCHAR(255) NOT NULL
);


) ENGINE=InnoDB;
