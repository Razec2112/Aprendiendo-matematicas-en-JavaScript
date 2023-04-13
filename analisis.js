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
    const trabajosA = encontrarPersona(nombrePersona).trabajos

    proyeccion (trabajosA)

    function proyeccion (trabajos) {
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
}

//Análisis empresarial

const empresas = {};

for (persona of salarios) {
    for (trabajo of persona.trabajos) {
        if (!empresas[trabajo.empresa]) {
            empresas [trabajo.empresa] = {}
        }

        if (!empresas[trabajo.empresa][trabajo.year]){
            empresas[trabajo.empresa][trabajo.year] = []
        }

        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
    }
}

console.log(empresas)

function medianaEmpresaYear(nombre, year){
    if (!empresas[nombre]){
        console.warn("La empresa no existe")
    } else if (!empresas[nombre][year]){
        console.warn("la empresa no dio salarios ese año")
    } else {
        return PlatiMath.calcularMediana(empresas[nombre][year])
    }
}

function proyeccionEmpresarial (empresa) {
    const medianasEmpresa = []
    if (!empresas[empresa]){
        console.warn("La empresa no existe")
    }else {
        const years = Object.keys(empresas[empresa])
        for (let i = 0; i < years.length; i++) {
            medianasEmpresa.push (medianaEmpresaYear (empresa, years[i]));
        }
    }
    
    proyeccion (medianasEmpresa)

    function proyeccion (trabajos) {
        let crecimientoEnPorcentaje= []
    
        for (let i = 1; i < trabajos.length; i++) {
            const salarioActual = trabajos[i];
            const salarioAnterios = trabajos[i-1];
            const crecimiento = salarioActual-salarioAnterios 
            const porcentajeDeCrecimiento = crecimiento / salarioAnterios
            crecimientoEnPorcentaje.push (porcentajeDeCrecimiento)
    
        }
    
        const medianaCrecimiento = PlatiMath.calcularMediana(crecimientoEnPorcentaje)
        
        const ultimoSalario = trabajos[trabajos.length-1]
        const nuevoSalario = (ultimoSalario * medianaCrecimiento) + ultimoSalario
        
        console.log(medianaCrecimiento, ultimoSalario, nuevoSalario)
        }
}