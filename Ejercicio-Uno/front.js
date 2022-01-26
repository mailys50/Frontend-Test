let startRank = parseInt(document.getElementById("start").value);
let endRank = parseInt(document.getElementById("end").value);

let enter = document.getElementById("enter");
enter.addEventListener("click", functionEnter);

const getPrime = (startRank, endRank) => {
  let result;
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
      result = i;
      return result;
    }
    return result;
  }
  return result;
};
console.log(8, getPrime());

function functionEnter() {
  console.log((document.getElementById("root").innerHTML = getPrime()));
}
