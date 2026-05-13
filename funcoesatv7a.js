function dado() {
    let tentativas = 0;
    let numero;
    do {
      numero = Math.floor(Math.random() * 6) + 1;
      tentativas++;
    } while (numero !== 6);
    return `Foram necessárias ${tentativas} tentativas para tirar o número 6.`;
  }
  console.log(dado());
  