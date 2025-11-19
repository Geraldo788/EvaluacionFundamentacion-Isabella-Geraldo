const promedio = (notas) => {
    let nota = 0
    for (let i = 0; i < notas.length; i++){
    nota = nota + notas[i]
}

return nota / notas.length
}


const rendimiento = (promedio) => {
    let nivel;

    // Convertimos el promedio a un rango
    switch (true) {
        case (promedio >= 4.5):
            nivel = "Alto";
            break;

        case (promedio >= 3.5):
            nivel = "Medio";
            break;

        default:
            nivel = "Bajo";
            break;
    }

    return nivel;
};



export {promedio, rendimiento}