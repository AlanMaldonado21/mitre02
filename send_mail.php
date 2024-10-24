<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recibir los datos del formulario
    $nombre = htmlspecialchars($_POST['nombre']);
    $apellido = htmlspecialchars($_POST['apellido']);
    $email = htmlspecialchars($_POST['email']);
    $telefono = htmlspecialchars($_POST['telefono']);
    $mensaje = htmlspecialchars($_POST['mensaje']);

    // Email al que se enviará el mensaje (tu correo)
    $to = "depositomitre@gmail.com"; 
    $subject = "Nuevo mensaje de contacto desde el formulario";

    // Cuerpo del mensaje
    $body = "Nombre: $nombre\nApellido: $apellido\nEmail: $email\nTeléfono: $telefono\nMensaje: $mensaje";

    // Cabeceras del email
    $headers = "From: $email";

    // Intentar enviar el email
    if (mail($to, $subject, $body, $headers)) {
        echo "Mensaje enviado correctamente.";
    } else {
        echo "Hubo un error al enviar el mensaje.";
    }
}
?>
