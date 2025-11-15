/* Ejercicio 3:
Temas: Control de flujos (ciclos) · Operadores matemáticos · Función flecha.

Enunciado analítico:
Se necesita generar la tabla de multiplicar de un número ingresado por el usuario. El
programa debe mostrar resultados del 1 al 10. Este ejercicio permite evaluar el manejo de
ciclos y operaciones matemáticas.

Requerimientos:
• Crear una función flecha generarTabla = (numero) => {}.
• Usar un ciclo for.
• Retornar o mostrar los resultados en un arreglo.
Entradas solicitadas:
• Número base de la tabla.
Salidas:
• Arreglo con los resultados 1×n hasta 10×n. */

const generarTabla = (numero) => {
    let tabla = [];
    for (let i = 1; i <= 10; i++) {
        tabla.push(numero * i);
    }
    return tabla;
};

let numero = parseInt(prompt("Ingrese el número de la tabla: "));
let resultados = generarTabla(numero);
console.log(resultados);

