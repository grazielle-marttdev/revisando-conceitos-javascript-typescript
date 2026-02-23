function somar(...numeros) {
    return numeros.reduce((acc, n) => acc + n, 0);
}

console.log(`A função somar não tem limite de números a serem somados: ${somar(1, 2, 3, 4, 5)}\n`);

// O parâmetro REST sempre fica por último na lista de parâmetros de uma função, pois agrupa argumentos em quantidade indefinida 
function parabenizarNomes(parabenizar, ...nomes) {
    console.log(parabenizar);
    console.log(nomes);
}

parabenizarNomes('Parabéns aos seguintes funcionários:', 'Ana', 'Carlos', 'Beatriz');


// DIFERENÇA ENTRE REST E SPREAD

// REST: recebe
function exemploRest(...args) {
    console.log('\nNo REST, um array é criado com os argumentos inseridos:', args);
}

exemploRest(1, "Oi", true, [1, 2, 3]);

// SPREAD: distribui/espalha
const numeros = [1, 2, 3];
console.log('\nE o operador spread espalha os elementos do array:', ...numeros);

// ============================================

// Crie uma função que:
// Receba vários números
// Retorne o maior deles
function maiorNumero(...numeros) {
    return Math.max(...numeros);
}

console.log('\nO maior número é:', maiorNumero(1, 2, 13, 40, 7));


// Crie uma função que:
// Receba um nome fixo
// Depois vários hobbies
// Retorne uma frase formatada
function hobbiesPessoa(nome, ...hobbies) {
    return `${nome} gosta de: ${hobbies.join(', ')}`;
}

console.log(hobbiesPessoa('\nGrazielle', 'cozinhar', 'viajar', 'ler', 'escrever','tocar teclado', 'ouvir música'));