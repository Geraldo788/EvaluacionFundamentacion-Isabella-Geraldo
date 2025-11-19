/* Ejercicio 1: 
Temas: Fundamentos de programación · Operadores matemáticos · Arreglos · Función  declarada. 
Enunciado analítico: 

Un aprendiz recibe varias calificaciones y desea saber su rendimiento general. 
Se necesita  un programa que permita ingresar las notas obtenidas y calcule el promedio, 
además de  evaluar si el rendimiento es Alto, Medio o Bajo según rangos preestablecidos. 

Requerimientos: 
• Crear una función declarada calcularPromedio() que reciba un arreglo de notas. 
• Usar un ciclo para recorrer el arreglo. 
• Determinar el rendimiento con condicionales. 
• Retornar el promedio y el nivel de rendimiento. 

Entradas solicitadas por el programa: 
• Cantidad de notas. 
• Cada una de las notas. 

Salidas: 
• Promedio final. 
• Categoría de rendimiento. */

/*function calcularPromedio(notas) {
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    let promedio = suma / notas.length;

    let rendimiento;
    if (promedio >= 4.5) {
        rendimiento = "Alto";
    } else if (promedio >= 3.5) {
        rendimiento = "Medio";
    } else {
        rendimiento = "Bajo";
    }

    return { promedio: promedio, rendimiento: rendimiento };
}

let cantidad = parseInt(prompt("Ingrese la cantidad de notas: "));
let notas = [];

for (let i = 0; i < cantidad; i++) {
    let nota = parseFloat(prompt("Ingrese la nota " + (i + 1) + ": "));
    notas.push(nota);
}

let resultado = calcularPromedio(notas);
console.log("Promedio final: " + resultado.promedio.toFixed(2));
console.log("Categoría de rendimiento: " + resultado.rendimiento); */

// ==========================================================================================


import {
    promedio,
    rendimiento,
} from "./modulo/modulo1.js";

let cantidadnotas = parseInt(prompt("ingrese Cantidad de notas"))
const notas = [];

for (let i = 0; i < cantidadnotas; i++){
    console.log(i)
    notas.push(parseFloat(prompt(`Ingrese nota ${i}`)))
}

let calculo = promedio(notas);
let nivel = rendimiento(calculo);

alert(`Promedio: ${calculo}\nRendimiento: ${nivel}`);
