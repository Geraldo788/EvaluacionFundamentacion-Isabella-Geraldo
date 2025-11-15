/*Temas: Operadores lógicos · Condicionales · Función expresada. 

Enunciado analítico: 
Una empresa maneja un sistema básico de autenticación. 
El aprendiz debe programar un  validador que permita 
el ingreso solo si el usuario cumple dos condiciones: 

1. Es mayor de edad.
2. Tiene una contraseña válida (comparación exacta). 

El sistema debe proporcionar mensajes claros de aceptación o rechazo. 
Requerimientos: 
• Crear una función expresada const validarAcceso = function(){}. 
• Validar edad con operadores relacionales. 
• Validar contraseña con comparación estricta.
• Usar operadores lógicos para evaluar ambas condiciones. 
• Devolver un mensaje indicando si el acceso fue concedido o denegado. 

Entradas solicitadas: 
• Edad del usuario. 
• Contraseña digitada. 

Salidas: 
• Mensaje de acceso. */

const validarAcceso = function(edad, contrasena) {
    const contrasenaValida = "Geraldo123";
    if (edad >= 18 && contrasena === contrasenaValida) {
        return "Acceso concedido.";
    } else {
        return "Acceso denegado.";
    }
};

let edad = parseInt(prompt("Ingrese su edad: "));
let contrasena = prompt("Ingrese su contraseña: ");
let mensaje = validarAcceso(edad, contrasena);
console.log(mensaje);

    
    




