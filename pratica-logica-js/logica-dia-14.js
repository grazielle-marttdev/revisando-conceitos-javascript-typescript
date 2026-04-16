/*
DIA 14 - Fundamentos e Condicionais

1. Conversor de Temperatura: Escreva uma função que recebe um valor e uma unidade ("C" para Celsius, "F" para Fahrenheit) e converte para a outra unidade.  
    * Fórmula: C = (F - 32) * 5/9 e F = C * 9/5 + 32.

2. Verificador de Triângulo: Escreva uma função que recebe três números (lados) e diz se eles podem formar um triângulo. Se sim, diga se é Equilátero (3 lados iguais), Isósceles (2 iguais) ou Escaleno (todos diferentes).
    * Dica de lógica: Para formar um triângulo, a soma de dois lados deve ser sempre maior que o terceiro lado.
*/

function converterTemperatura(valor, unidade) {
    // Se a unidade do valor for °C, converte-o para °F
    // Ou se a unidade do valor for °F, converte-o para °C
    
    if (unidade === 'C') {
        const resultado = valor * 9/5 + 32;
        return `Conversão de Celsius para Fahrenheit: ${valor}°C = ${resultado}°F`;
    } else if (unidade === 'F') {
        const resultado = (valor - 32) * 5/9;
        return `Conversão de Fahrenheit para Celsius: ${valor}°F = ${resultado}°C`;
    } else {
        return 'Unidade inválida. Escolha entre C ou F.'
    }
}

console.log(converterTemperatura(100, "C"));
console.log(converterTemperatura(212, "F"));

console.log(converterTemperatura(0, "C"));
console.log(converterTemperatura(32, "F"));

console.log(converterTemperatura(50, "F"));
console.log(converterTemperatura(30, "C"));

console.log("\n\n");
console.log("================ </> ================");
console.log("\n\n");



function verificarTriangulo(a, b, c) {
    // se a soma de dois lados forem maior que o terceiro lado, então temos um triângulo

    if (a + b > c && a + c > b && b + c > a ) {
        if (a === b && b === c) {
            return `Os valores ${a}, ${b} e ${c} formam um triângulo equilátero.`
        } else if (a === b || a === c || b === c) {
            return `Os valores ${a}, ${b} e ${c} formam um triângulo isósceles.`
        } else if (a !== b && a !== c && b !== c) {
            return `Os valores ${a}, ${b} e ${c} formam um triângulo escaleno.`
        }
    } else {
        return `Os valores ${a}, ${b} e ${c} não formam um triângulo.`
    }

}

console.log(verificarTriangulo(5, 10, 12)); // escaleno
console.log(verificarTriangulo(3, 4, 10)); // não é triângulo

console.log(verificarTriangulo(5, 5, 5)); // equilátero
console.log(verificarTriangulo(8, 8, 12)); // isósceles
console.log(verificarTriangulo(12, 3, 14)); // escaleno