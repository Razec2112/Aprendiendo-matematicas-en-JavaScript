const cantidadArticulos = document.querySelector(".solicitud-input")
const cantidadSubmit = document.querySelector(".solicitudButton")
const subtitulo = document.querySelector(".solicitud label")
const precioProductos = document.querySelector(".precioProductos")
const contenedorCalculos = document.querySelector(".productosDescuentos")
const descuentosIndividuales = document.querySelector (".descuentos")
const precioConDescuento = document.querySelector (".precioConDescuento")
const descuentoIndividual = document.querySelector (".dineroAhorrado")
const botonReset = document.querySelector (".botonReset")
const botonCalcular = document.querySelector (".botonCalcular")

botonCalcular.addEventListener("click", realizarCalculos)
botonReset.addEventListener("click", reset)

function iniciarCalculo (){
    cantidadArticulos.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            mostrarTodo()
        }
    })
    cantidadSubmit.addEventListener("click", mostrarTodo)
}

function mostrarTodo () {
    if (cantidadArticulos.value > 0 && cantidadArticulos.value <= 10) {
        cantidadArticulos.classList.add("disabled")
        cantidadSubmit.classList.add("disabled")
        subtitulo.classList.add("disabled")

        for (let i = 0; i < cantidadArticulos.value; i++) {
            contenedorCalculos.classList.remove("disabled")
            botonReset.classList.remove("disabled")
            botonCalcular.classList.remove("disabled")
            

            const product = document.createElement(`input`)
            product.classList.add (`product`)
            precioProductos.appendChild(product)
            product.setAttribute("type", "number")

            const descuento = document.createElement(`input`)
            descuento.classList.add (`descuento`)
            descuentosIndividuales.appendChild(descuento)
            product.setAttribute("type", "number")
        }

    } else {
        alert("cantidad no admitida")
    }
}

iniciarCalculo()

function realizarCalculos () {
const conjuntoDeProductos = document.getElementsByClassName("product")
const conjuntoDeDescuentos = document.getElementsByClassName("descuento")

    for (let i = 0; i < conjuntoDeProductos.length; i++) {
        const aPagarIndividual = document.createElement("p")
        aPagarIndividual.classList.add (`aPagar`)
        aPagarIndividual.innerText= (conjuntoDeProductos[i].value*(100-conjuntoDeDescuentos[i].value))/100
        precioConDescuento.appendChild(aPagarIndividual)
    
        const ahorroIndividual = document.createElement("p")
        ahorroIndividual.classList.add (`descuento`)
        ahorroIndividual.innerText=(conjuntoDeProductos[i].value-((conjuntoDeProductos[i].value*(100-conjuntoDeDescuentos[i].value))/100))
        descuentoIndividual.appendChild(ahorroIndividual)

        if (!conjuntoDeProductos[i].value || !conjuntoDeDescuentos[i].value) {
            alert("por favor llena todas las casillas")
            return false
        } else if (conjuntoDeDescuentos[i].value > 100) {
            alert("el valor de el descuento debe ser un numero entre 0 y 100")
            return false
        }
    }
    precioConDescuento.classList.remove("disabled")
    descuentoIndividual.classList.remove("disabled")
    botonCalcular.classList.add("disabled")
    sumaTotal()
}

function sumaTotal() {
    const arrayPagos = document.getElementsByClassName("aPagar")
    const arrayDescuentos = document.getElementsByClassName ("descuento")
    const totalPagos = document.querySelector(".totalPagar")
    const totalDescuentos = document.querySelector(".totalAhorrado")
    const contenedorResultados = document.querySelector(".resultados")

    contenedorResultados.classList.remove("disabled")
    let sumaDePagos = 0
    let sumaDeDescuentos = 0


    for (let i = 0; i < arrayPagos.length; i++) {
        sumaDePagos = Number(sumaDePagos)+ Number(arrayPagos[i].innerText)
    }

    for (let i = 0; i < arrayDescuentos.length; i++) {
        sumaDeDescuentos = Number(sumaDeDescuentos)+Number(arrayDescuentos[i].innerText)
    }

    totalPagos.innerText = sumaDePagos
    totalDescuentos.innerText = sumaDeDescuentos
}

function reset() {
    location.reload()
}