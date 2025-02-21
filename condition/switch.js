let nota = 10

// switch com return
// switch (true) {
//     case (nota === 10):
//         return console.log(`sua nota foi ${nota}, acima da média!`);
//     default:
//         return console.log(`sua nota foi ${nota}, por isso reprovou!`);
// }

switch (nota) {
    case 10: return console.log(`sua nota foi ${nota}, acima da média!`)
    default: return console.log(`sua nota foi ${nota}, por isso reprovou!`)
}

// uso de break
// switch (true) {
//     case (nota === 10):
//         console.log(`sua nota foi ${nota}, acima da média!`);
//         break
//     default:
//         console.log(`sua nota foi ${nota}, por isso reprovou!`);
//         break
// }