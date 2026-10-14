let usuario = "admin";
let contrasena = "1234";

if (usuario === "admin") {
    if (contrasena === "1234") {
        console.log("9. Acceso concedido");
    } else {
        console.log("9. Contraseña incorrecta");
    }
} else {
    console.log("9. Usuario no encontrado");
}