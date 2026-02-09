// Desestruturação de arrays 
const numeros = [10, 20, 30];

const [a, b, c] = numeros;
const [, segundo] = numeros;

console.log(`a = ${a}, b = ${b}, c = ${c}`);
console.log(`Pulando posições: segundo = ${segundo}`);

// Desestruturação de objetos
const pessoa = {
    nome: 'Grazi',
    idade: 20
}

const { nome, idade } = pessoa;
const { nome: nomeUsuario } = pessoa;

console.log(`Agora posso acessar o nome assim: ${nome}`);
console.log(`Renomeando a propriedade: ${nomeUsuario}`);


// Spread em arrays
const aa = [1, 2];
const bb = [3, 4];

const juntos = [...aa, ...bb];

console.log(`O spread faz os dois arrays se tornarem um só [${juntos}]`); // É uma cópia

// Spread em objetos
const usuario = {
    nome: 'Grazi',
    idade: 20
}

const atualizado = {
    ...usuario,
    idade: 21
};

console.log(`A idade que era ${usuario.idade}, agora foi atualizada para ${atualizado.idade}`);
// Propriedades repetidas são sobrescritas da direita para a esquerda


// Desestruturação + Spread
const usuarioInfo = {
    nome: 'Grazi',
    idade: 20,
    cidade: 'Luziânia'
};

const { nome: nomeDoUsuario, ...resto } = usuarioInfo;

console.log(`Nome é extraído: ${nomeDoUsuario}`);
console.log('O resto vira um objeto:', resto);