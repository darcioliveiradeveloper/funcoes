// Questão 4 - O `N`-ésimo Termo de Fibonacci
// Crie uma função que receba um número inteiro positivo `n` e retorne o valor
// correspondente à `n`-ésima posição na sequência de Fibonacci.
// Exemplo 1: fibonacci(3) deve retornar 2. (A sequência até a posição 3 é: 1, 1, 2)
// Exemplo 2: fibonacci(6) deve retornar 8. (A sequência até a posição 6 é: 1, 1, 2, 3, 5,8)


function fibonacci(n) { // Define a função que recebe um número inteiro positivo n
    if (n <= 0) { // Verifica se n é um número não positivo
        return 0; // Retorna 0 para números não positivos
    } else if (n === 1 || n === 2) { // Verifica se n é 1 ou 2
        return 1; // Os dois primeiros termos da sequência são 1
    } else { // Para n maior que 2, calcula os termos da sequência
        let a = 1, b = 1, temp; // Inicializa as variáveis para os dois primeiros termos e uma variável temporária
        for (let i = 3; i < n; i++) { // Itera a partir do terceiro termo até o n-ésimo termo
            temp = a + b; // Calcula o próximo termo
            a = b; // Atualiza o valor de a para o próximo ciclo
            b = temp; // Atualiza o valor de b para o próximo ciclo
        } // Após o loop, temp contém o n-ésimo termo da sequência
        return temp; // Retorna o n-ésimo termo da sequência
    } // Fim da função
} // Fim da definição da função

// Testando a função
console.log(fibonacci(3)); // Deve retornar 2
console.log(fibonacci(6)); // Deve retornar 8

