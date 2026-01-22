// Exercício 1: Crie um array simples (nomes, números, qualquer coisa).

const arrayDeFlores = ["Lírio", "Rosa", "Tulipa", "Girassol", "Margarida", "Violeta"];

// Exercício 2: Utilize um loop "for" para percorrer esse array e imprimir cada item no console.
console.log("Imprimindo a lista de flores:");
for (let i = 0; i < arrayDeFlores.length; i++) {
    console.log(`Esta é a flor: ${arrayDeFlores[i]}, posição: ${i}.`);
}