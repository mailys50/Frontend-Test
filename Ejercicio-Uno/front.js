const buttonEnter = document.querySelector("#enter");
buttonEnter.addEventListener("click", () => {
  let startRank = document.querySelector("#start");
  let endRank = document.querySelector("#end");
  startRank = parseInt(startRank.value);
  endRank = parseInt(endRank.value);
  console.log(1, startRank);
  console.log(2, endRank);
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
      document.querySelector("#root").innerHTML += "-" + i;
    }
  }
});

const getPrime = (startRank, endRank) => {
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
      return (document.querySelector("#root").innerHTML = i);
    }
  }
};
