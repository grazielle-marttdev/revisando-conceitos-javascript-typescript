const somarNumeros = (num1, num2) => num1 + num2;

console.log(somarNumeros(4, 8));

const calcularAreaRetangulo = (base, altura) => base * altura;

console.log(calcularAreaRetangulo(7, 16));

const ehPar = (numero) => numero % 2 === 0;

console.log(ehPar(13));

const somarArray = (numeros) => {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    return soma;
}

console.log(somarArray([1, 2, 3, 4, 5]));