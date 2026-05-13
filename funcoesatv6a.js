function collatz(n) {
    let etapas = 0;
    while (n !== 1) {
      if (n % 2 === 0) {
        n = n / 2;
      } else {
        n = 3 * n + 1;
      }
      etapas++;
    }
    return etapas;
  }
  console.log(collatz(6)); // 8
  