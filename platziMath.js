// let suma = 0

// function calcularPromedio(lista) {
//     for (let i = 0; i < lista.length; i++) {
//         suma = suma + lista[i];
//     }

    const promedio = suma / lista.length

 //calculando el promedio de un array con un ciclo for
 function calcularPromedioConMetodos (lista){
    function sumarElementos (valorAcumulado, nuevoValor) {
        return valorAcumulado + nuevoValor;
    }

    // const sumarElementos =
    // (valorAcumulado, nuevoValor) => valorAcumulado + nuevoValor // forma alternativa de escribir la funcion anterior con la arrow function "=>" hace que el valor de la constante se comporte con una funcion y lo que sigue a la arrow function es lo que retorna la funcion

    // const sumaLista = lista.reduce((a,b) => a + b) // forma mas comprimida donde la arrow function se usa directamente con el argumento del meto .reduce

    const sumaLista = lista.reduce(sumarElementos)

    const promedio = suma / sumaLista.length
 }

 