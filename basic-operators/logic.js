// e = &&
// ou = ||
// não = !

let idade = 15
let dinheiro = true
let carro = true
let moto = true

//               comparação, 'e' da logica, !diferente de true, ou ||
let podeBeber = (idade >= 18 && dinheiro) && !carro || !moto

console.log(podeBeber)

let menino = 15
//                condição   
const xequeMate = menino >= 18 ? console.log('vai trabalhar ou estudar') : console.log(' pode jogar video game ')

console.log(xequeMate)
