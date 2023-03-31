console.group("Cuadrado") //este consol sirve para agrupar los log segun su funcion
const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4
const areaCuadrado = ladoCuadrado * ladoCuadrado

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado,
})

function calculoPerimetrocuadrado(lado){
    return {
        perimetro: lado * 4,
        area: lado * lado
    }
}

console.groupEnd("Cuadrado")

console.group("Triangulo")
const ladoTriangulo1 = 6
const ladoTriangulo2 = 6
const baseTriangulo = 4
const alturaTriangulo = 5.5

const perimetroTriangulo  = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2

function calculoPerimetroTriangulo(lado1, lado2, base, altura){
    return {
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2
    }
}

console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    baseTriangulo,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo,
})
console.groupEnd("Triangulo")

console.group("Circulo")

const radio = 5
const diametroCirculo = radio * 2
const pi = 3.1416
const perimetroCirculo = diametroCirculo * pi
const arearCirculo = (diametroCirculo ** 2) //asi tambien se puede expresar una potencia

function calcularCirculo (radio) {
    const diametro = radio * 2
    return {
        diametro: diametro,
        perimetro: diametro * Math.PI,
        area: (Math.pow(diametro, 2)) * Math.PI // el Math.pow me permite elevar el primer dato a la potencia del segundo dato y el Math.PI me arroja el numero PI de manera mas automatica y con mas decimales
    }
}

console.log ({
radio,
diametroCirculo,
pi,
perimetroCirculo,
arearCirculo,
    
})
console.groupEnd("Circulo")