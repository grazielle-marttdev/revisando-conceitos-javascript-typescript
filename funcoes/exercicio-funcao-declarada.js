function somarNumeros(num1, num2) {
    return num1 + num2;
}

somarNumeros(4, 8);


function dizerOla(nome) {
    return `Olá, ${nome}!`;
}

console.log(dizerOla("Grazielle"));


function calcularMaiorIdade(idade) {
    if (idade >= 18) {
        return "Você é maior de idade.";
    } else {
        return "Você é menor de idade.";
    }
}

console.log(calcularMaiorIdade(20));
console.log(calcularMaiorIdade(15));