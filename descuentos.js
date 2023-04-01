const cantidadArticulos = document.querySelector(".solicitud-input")
const cantidadSubmit = document.querySelector(".solicitudButton")
const subtitulo = document.querySelector(".solicitud p")
const precioProductos = document.querySelector(".precioProductos")
const contenedorCalculos = document.querySelector(".productosDescuentos")
const descuentosIndividuales = document.querySelector (".descuentos")
const precioConDescuento = document.querySelector (".precioConDescuento")
const descuentoIndividual = document.querySelector (".dineroAhorrado")
const botonReset = document.querySelector (".botonReset")
const botonCalcular = document.querySelector (".botonCalcular")

botonCalcular.addEventListener("click", realizarCalculos)

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

            const descuento = document.createElement(`input`)
            descuento.classList.add (`descuento`)
            descuentosIndividuales.appendChild(descuento)
        }

    } else {
        alert("cantidad no admitida")
    }
}

iniciarCalculo()

function calculoMontoPagar(costo, discount) {
    return (costo*(100-discount)/100)
}

function calculoMontoAhorrado(costo, discount) {
    return (costo-(costo*(100-discount)/100))
}

function realizarCalculos () {
const conjuntoDeProductos = document.getElementsByClassName("product")
const conjuntoDeDescuentos = document.getElementsByClassName("descuento")

    precioConDescuento.classList.remove("disabled")
    descuentoIndividual.classList.remove("disabled")

    for (let i = 0; i < conjuntoDeProductos.length; i++) {
        const aPagarIndividual = document.createElement("p")
        aPagarIndividual.classList.add (`aPagar`)
        aPagarIndividual.innerText= (conjuntoDeProductos[i].value*(100-conjuntoDeDescuentos[i].value))/100
        precioConDescuento.appendChild(aPagarIndividual)
    
        const ahorroIndividual = document.createElement("p")
        ahorroIndividual.classList.add (`descuento`)
        ahorroIndividual.innerText=(conjuntoDeProductos[i].value-((conjuntoDeProductos[i].value*(100-conjuntoDeDescuentos[i].value))/100))
        descuentoIndividual.appendChild(ahorroIndividual)
    }
    sumaTotal()
}

function sumaTotal() {
    const conjuntoDePagos = do
}