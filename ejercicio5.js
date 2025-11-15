/*Ejercicio 5:
Temas: Arreglos · Ciclos · Condicionales · Función flecha o modularizada.

Enunciado analítico:
El usuario tendrá un conjunto de valores (números o textos) y deberá consultar si un
elemento específico existe en el arreglo. Se debe recorrer manualmente la estructura sin
usar métodos avanzados como .includes().

Requerimientos:
• Crear una función flecha buscarElemento = (lista, elemento) => {}.
• Recorrer el arreglo con un ciclo.
• Retornar true/false según si encuentra el elemento.
• Mostrar un mensaje amigable indicando si fue hallado o no.
Entradas solicitadas:
• Cantidad de elementos.
• Los elementos del arreglo.
• Elemento a buscar.
Salidas:
• Confirmación de existencia del elemento. */

const buscarElemento = (lista, elemento) => {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === elemento) {
            return true;
        }
    }
    return false;
};

let cantidad = parseInt(prompt("Ingrese la cantidad de elementos: "));
let lista = [];
for (let i = 0; i < cantidad; i++) {
    lista.push(prompt("Ingrese el elemento " + (i + 1) + ": "));
}
let elemento = prompt("Ingrese el elemento a buscar: ");

let encontrado = buscarElemento(lista, elemento);
if (encontrado) {
    console.log("Si existe en el arreglo");
} else {
    console.log("No existe en el arreglo");
}
