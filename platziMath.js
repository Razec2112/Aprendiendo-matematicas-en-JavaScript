let suma = 0

// function calcularPromedio(lista) {
//     for (let i = 0; i < lista.length; i++) {
//         suma = suma + lista[i];
//     }


 //calculando el promedio de un array con un ciclo for
 function calcularPromedioConMetodos (lista){
    
    function sumarElementos (valorAcumulado, nuevoValor) {
        return valorAcumulado + nuevoValor;
    }

    // const sumarElementos =
    // (valorAcumulado, nuevoValor) => valorAcumulado + nuevoValor // forma alternativa de escribir la funcion anterior con la arrow function "=>" hace que el valor de la constante se comporte con una funcion y lo que sigue a la arrow function es lo que retorna la funcion

    // const sumaLista = lista.reduce((a,b) => a + b) // forma mas comprimida donde la arrow function se usa directamente con el argumento del meto

    const sumaLista = lista.reduce(sumarElementos)
    console.log (sumaLista)

    const promedio = sumaLista / lista.length

    console.log(promedio)
 }
//funcion para saber si un unmero es par o impar
 function esPar(lista){
    // if (lista.length % 2) {//el operador % nos devuelve el modulo de la division, osea el residuo si es par sera 0 y si es impar sera 1
    //     return false;
    // } else {
    //     return true;
    // }

    return !(lista.length % 2) //simplificacion del codigo anterior
 }

 function esImpar(lista) {
    return lista.length % 2
 }

 function calcularMediana (listaCualquiera){
    const lista = ordenarLista(listaCualquiera)
    const listaEsPar = esPar (lista);

    if (listaEsPar){
        const iniceMitadParMayor = lista.length /2
        const medianaParArray = [lista[iniceMitadParMayor-1], lista[iniceMitadParMayor]]
        const medianaPar = calcularPromedioConMetodos (medianaParArray)
        return medianaPar
        

    }else {
        const indiceImpar = Math.floor(lista.length / 2);
        const medianaImpar = lista[indiceImpar]
        return medianaImpar
    }
 }

 // el metodo sort se usa ejecuntando una funcion y depende del resultado se pasa hacia atras o adelante

 function ordenarLista(listaDesordenada) {
    function ordenarLista (valorAcumulado, nuevoValor) {

        // if (valorAcumulado > nuevoValor){
        //     return 1
        // } else if (valorAcumulado == nuevoValor) {
        //     return 0
        // } else {
        //     return -1
        // } //condicional para retornar el valor deseado
        // return -1 //si queremos que el valor se atrase (sirve cualquier nuemor negatico)
        // return 0 //si queremos que el valor se quede donde esta
        // return 1 //si queremos que el valor se mueva adelante (sirve cualquier numero positivo)

        return valorAcumulado - nuevoValor // simplificacion del condicional ya que si el valorAcumulado es mayor que el nuevo valor el resultado sera negativo y el valor se atrasa, y viceversa, para generar una lista de mayor a menor se invierte el return
    }

    const lista = listaDesordenada.sort(ordenarListaSort);
    const listaArrow = listaDesordenada.sort((a,b) => a-b); // version del ordenamiento donde se usa una arrow function como parametro de el metodo sort

    return lista;
 }