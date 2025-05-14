function calcArea (h,w) {
    return (h*w)
}

calcArea (10,5)

console.log (calcArea (10,5))


let a = "Pedro"
let b = "Fernandes"

function concatenarstrings (a,b) {
    return (a+" "+b)
}

console.log (concatenarstrings("Pedro", "Fernandes"))

function somar (a,b) {
    return (a+b)
}

console.log (somar (10,5))

const soma = somar (25,5)

console.log (soma)

function raizQuadrada (num) {
    return Math.sqrt (num)
}

console.log ("a raiz quadrada de 4 é " + raizQuadrada (4))

function month (i) {
    switch (i) {
        case 1:
            return "janeiro"
        case 2:
            return "Fevereiro"
        case 3:
            return "Março"
        case 4:
            return "Abril"
        case 5:
            return "Maio"
    }
}

console.log (month(2))

function weekDays (d) {
    switch (d) {
        case 1:
            return "domingo"
        case 2:
            return "segunda-feira"
        case 3:
            return "terça-feira"
        case 4:
            return "quarta-feira"
        case 5:
            return "quinta-feira"
        case 6:
            return "sexta-feira"
        case 7:
            return "sábado"
        default:
            return "input not valid"
    }
}

console.log (weekDays(3))

let array = [1,2,3,4]
let equacao = ""

    for (let i = 0; i < array.length; i++) {
        equacao += array[i];
        
        
        if (i<array.length-1) {
            equacao+= " + "
        } else {
            equacao += " = "
        }


    }

    let sum = 0;

    for (let j = 0; j<array.length; j++) {
        sum += array[j]
    }

equacao += sum





    console.log (equacao);