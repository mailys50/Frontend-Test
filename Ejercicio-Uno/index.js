const readline = require("readline-sync");

const startRank = parseInt(
  readline.question("Inserte el numero de inicio de su rango:")
);
const endRank = parseInt(
  readline.question("Inserte el numero en el que culminara su rango")
);

console.log(
  `A introducido el siguiente rango del número  ${startRank} al número ${endRank}  y los números primos de este rango son:`
);

//Recorrer Array desde el rango inicial al rango fnal
for (let i = startRank; i <= endRank; i++) {
  let primeNumber = true;

  // recorrer array para identificar números no primos
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      primeNumber = false;
      break;
    }
  }

  if (i > 1 && primeNumber == true) {
   
    console.log(i);
  }
}
