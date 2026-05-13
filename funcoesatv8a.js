const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Funções auxiliares
function fatorial(n) {
  if (n === 0) return 1;
  let resultado = 1;
  for (let i = 1; i <= n; i++) resultado *= i;
  return resultado;
}

function ePrimo(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function fibonacci(n) {
  let seq = [0, 1];
  for (let i = 2; i < n; i++) seq.push(seq[i - 1] + seq[i - 2]);
  return seq.slice(0, n);
}

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

function tabuada(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}

function collatz(n) {
  let etapas = 0;
  while (n !== 1) {
    if (n % 2 === 0) n = n / 2;
    else n = 3 * n + 1;
    etapas++;
  }
  return etapas;
}

function dado() {
  let tentativas = 0;
  let numero;
  do {
    numero = Math.floor(Math.random() * 6) + 1;
    tentativas++;
  } while (numero !== 6);
  return `Foram necessárias ${tentativas} tentativas para tirar o número 6.`;
}

// Menu principal
function menuPrincipal() {
  function mostrarMenu() {
    console.log("\n=== MENU PRINCIPAL ===");
    console.log("1 - Verificar Número Primo");
    console.log("2 - Calcular Fatorial");
    console.log("3 - Exibir N-ésimo termo de Fibonacci");
    console.log("4 - Sequência de Fibonacci");
    console.log("5 - Tabuada");
    console.log("6 - Sequência de Collatz");
    console.log("7 - Simulador de Dados");
    console.log("0 - Sair");
  }

  function processarOpcao(opcao) {
    switch (opcao) {
      case "1":
        rl.question("Digite um número: ", num => {
          console.log(ePrimo(parseInt(num)));
          mostrarMenu();
          rl.prompt();
        });
        break;
      case "2":
        rl.question("Digite um número: ", num => {
          console.log(fatorial(parseInt(num)));
          mostrarMenu();
          rl.prompt();
        });
        break;
      case "3":
        rl.question("Digite a posição: ", num => {
          console.log(fibonacciN(parseInt(num)));
          mostrarMenu();
          rl.prompt();
        });
        break;
      case "4":
        rl.question("Digite a quantidade: ", num => {
          console.log(fibonacci(parseInt(num)));
          mostrarMenu();
          rl.prompt();
        });
        break;
      case "5":
        rl.question("Digite um número: ", num => {
          tabuada(parseInt(num));
          mostrarMenu();
          rl.prompt();
        });
        break;
      case "6":
        rl.question("Digite um número: ", num => {
          console.log(collatz(parseInt(num)));
          mostrarMenu();
          rl.prompt();
        });
        break;
      case "7":
        console.log(dado());
        mostrarMenu();
        rl.prompt();
        break;
      case "0":
        console.log("Saindo do sistema...");
        rl.close();
        break;
      default:
        console.log("Opção inválida!");
        mostrarMenu();
        rl.prompt();
    }
  }

  mostrarMenu();
  rl.setPrompt("Escolha uma opção: ");
  rl.prompt();
  rl.on("line", processarOpcao);
}

menuPrincipal();
