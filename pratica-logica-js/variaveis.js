var nome = "João";

function saudacao() {
    return `Olá, ${nome}! Bem-vindo(a) ao curso de lógica de programação.`;
}

nome = "Maria"; // A variável nome foi atualizada para "Maria", ou seja, a variável é mutável, pois seu valor pode ser alterado durante a execução do programa.

console.log(saudacao());

let idade = 25;

function verificarIdade() {
    if (idade >= 18) {
        return "Você é maior de idade.";
    } else {
        return "Você é menor de idade.";
    }
}

idade = 17; // A variável idade foi atualizada para 17, ou seja, a variável é mutável, pois seu valor pode ser alterado durante a execução do programa.

console.log(verificarIdade());

const pi = 3.14;

function calcularCircunferencia(raio) {
    const resultado = 2 * pi * raio; 
    
    return `A circunferência de um círculo com raio ${raio} é: ${resultado.toFixed(1)}`;
    // o raio representa a distância do centro da circunferência até a borda
}

// pi é uma constante, ou seja, seu valor não pode ser alterado durante a execução do programa. Se tentarmos atribuir um novo valor a pi, ocorrerá um erro.

console.log(calcularCircunferencia(20)); // Circunferência de um círculo com raio 5
