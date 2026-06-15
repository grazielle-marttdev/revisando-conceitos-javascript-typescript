// Funções declaradas
// são definidas usando a palavra-chave function seguida do nome da função. Elas podem ser chamadas antes de sua declaração no código, devido ao conceito de hoisting.

function somar(a, b) {
    return a + b;
}

console.log(somar(5, 10)); // 15

function calcularAreaRetangulo(base, altura) {
    return base * altura;
}

console.log(calcularAreaRetangulo(5, 10)); // 50

function ehPar(numero) {
    return numero % 2 === 0;
}

console.log(ehPar(7)); // false

function somarArray(numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    return soma;
}

console.log(somarArray([1, 2, 3, 4, 5])); // 15

function concatenarNomes(nomes) {
    return nomes.join(', ');
}

console.log(concatenarNomes(['João', 'Maria', 'Pedro'])); // João, Maria, Pedro