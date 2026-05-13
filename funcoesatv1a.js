function fatorial(n) {
    if (n === 0) return 1;
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
      resultado *= i;
    }
    return resultado;
  }
  console.log(fatorial(5)); // 120

