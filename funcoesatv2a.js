function ePrimo(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
  console.log(ePrimo(7)); // true
  console.log(ePrimo(10)); // false
  