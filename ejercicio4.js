/* Ejercicio 4: 
Temas: Condicionales · Operadores matemáticos · Funciones y modularización · Ciclos 
Enunciado analítico: 
Un comerciante necesita calcular el impuesto total de varios productos. Para cada producto  se debe ingresar su valor y aplicar un porcentaje de impuesto específico. El programa  procesará múltiples productos y debe acumular el total a pagar. 
Requerimientos:
• Crear una función declarada calcularImpuestoUnitario(valor, porcentaje). • Crear una función expresada const procesarImpuestos = function(){} que solicite la  cantidad de productos, pida cada valor y porcentaje, y use la función declarada. • Usar un ciclo para iterar. 
• Retornar el total final. 
Entradas solicitadas: 
• Cantidad de productos. 
• Valor de cada producto. 
• Porcentaje de impuesto. 
Salidas: 
• Impuesto total acumulado.  */


function calcularImpuestoUnitario(valor, porcentaje) {
    return valor * (porcentaje / 100);
}

const procesarImpuestos = function() {
    let cantidad = parseInt(prompt("Ingrese la cantidad de productos: "));
    let totalImpuesto = 0;

    for (let i = 0; i < cantidad; i++) {
        let valor = parseFloat(prompt("Ingrese el valor del producto " + (i + 1) + ": "));
        let porcentaje = parseFloat(prompt("Ingrese el porcentaje de impuesto para el producto " + (i + 1) + ": "));
        totalImpuesto += calcularImpuestoUnitario(valor, porcentaje);
    }

    return totalImpuesto;
};

let impuestoTotal = procesarImpuestos();
console.log("Impuesto total acumulado: " + impuestoTotal.toFixed(2));

