// analisis para Juanita


function encontrarPersona (personaEnBusqueda) {
    return salarios.find(persona => persona.name == personaEnBusqueda)

    // const persona = salarios.find((persona) => {
    //     return persona.name == personaEnBusqueda
    // })
    // return persona;
} 

function medianaPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos

    const salarios = trabajos.map(function (elemento) {
        return elemento.salario
    })

    const medianaSalarios = PlatiMath.calcularMediana (salarios)

    return medianaSalarios
}

function proyeccionPorPersona (nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos

    let crecimientoEnPorcentaje= []

    for (let i = 1; i < trabajos.length; i++) {
        const salarioActual = trabajos[i].salario;
        const salarioAnterios = trabajos[i-1].salario;
        const crecimiento = salarioActual-salarioAnterios 
        const porcentajeDeCrecimiento = crecimiento / salarioAnterios
        crecimientoEnPorcentaje.push (porcentajeDeCrecimiento)

    }

    const medianaCrecimiento = PlatiMath.calcularMediana(crecimientoEnPorcentaje)
    
    const ultimoSalario = trabajos[trabajos.length-1].salario
    const nuevoSalario = (ultimoSalario * medianaCrecimiento) + ultimoSalario
    
    console.log(medianaCrecimiento, ultimoSalario, nuevoSalario)
}