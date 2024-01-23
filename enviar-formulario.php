<?php

// Recoger los datos del formulario
$nombre = $_POST['name'];
$email = $_POST['email'];
$asunto = $_POST['subject'];
$mensaje = $_POST['message'];

// Configurar los detalles del correo electrónico
$para = 'admin1@mandalestart.com';
$titulo = 'contacto';
$mensaje = "Nombre: $nombre\n\nEmail: $email\n\nAsunto: $asunto\n\nMensaje: $mensaje";

// Enviar el correo electrónico
mail($para, $titulo, $mensaje);

// Redirigir al usuario a una página de agradecimiento
header('Location: index.html');
?>
