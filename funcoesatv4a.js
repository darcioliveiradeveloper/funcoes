function fibonacciN(n) {
    if (n <= 2) return 1;
    let a = 1, b = 1, resultado;
    for (let i = 3; i <= n; i++) {
      resultado = a + b;
      a = b;
      b = resultado;
    }
    return resultado;
  }
  console.log(fibonacciN(3)); // 2
  console.log(fibonacciN(6)); // 8
  