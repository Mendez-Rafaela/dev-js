let nota = 6

// declara o if ( fica a condição ) { retorno da função }
if (nota === 10) {
  return console.log(`sua nota foi ${nota}, acima da média!`);
} else if (nota >= 7) {
  return console.log(`sua nota foi ${nota}, está aprovado`);
} else if (nota >= 4.5) {
  return console.log(
    `sua nota foi ${nota}, venha na secretária agendar a recuperação`
  );
} else {
  return console.log(`sua nota foi ${nota}, por isso reprovou!`);
}