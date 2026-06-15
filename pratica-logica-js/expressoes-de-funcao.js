// Expressões de Função
// são criadas atribuindo uma função a uma variável. Essas funções não têm nome (se forem anônimas) e não podem ser chamadas antes de sua definição no código, pois não são içadas.

const somar = function(a, b) {
    return a + b;
}

console.log(somar(5, 10)); // 15

const calcularAreaRetangulo = function(base, altura) {
    return base * altura;
}

console.log(calcularAreaRetangulo(7, 12)); // 84

const ehPar = function(numero) {
    return numero % 2 === 0;
}

console.log(ehPar(6)); // true

const somarArray = function(numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    return soma;
}

console.log(somarArray([1, 28, 45, 38, 15])); // 127

const concatenarNomes = function(nomes) {
    return nomes.join(', ');
}

console.log(concatenarNomes(['Grazielle', 'João', 'José', 'Maria', 'Bianca'])); // Grazielle, João, José, Maria, Bianca