// map() -> transforma cada item do array
const numeros = [1, 2, 3, 4];
console.log('O array numeros antes:', numeros);


const dobrados = numeros.map(n => n * 2);
console.log('O array numeros agora:', dobrados, '\n');


// filter() -> filtra elementos com base em uma condição
const numerosInteiros = [1, 2, 3, 4];
console.log('O array numerosInteiros antes:', numerosInteiros);

const pares = numerosInteiros.filter(n => n % 2 === 0);
console.log('O array numerosInteiros agora:', pares, '\n');


// find() -> retorna o primeiro elemento que satisfaz a condição
const usuarios = [
    { nome: 'Ana', ativo: false },
    { nome: 'João', ativo: true }
];

const usuarioAtivo = usuarios.find(u => u.ativo);
console.log('Usuário ativo:', usuarioAtivo, '\n');


// reduce() -> reduz todos os valores a um único resultado
const listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const soma = listaNumeros.reduce((acumulador, numero) => {
    return acumulador + numero;
}, 0);

console.log('A soma total do array listaNumeros é igual a:', soma, '\n');

// ====================================================================

// Exercício 1 – Transformação

// Crie um array só com os nomes.
// Crie um array com os preços com 10% de desconto.

const produtos = [
    { nome: 'Notebook', preco: 4000 },
    { nome: 'Mouse', preco: 100 }
];

const nomeProdutos = produtos.map(produto => produto.nome);
console.log('Array com o nome dos produtos: ', nomeProdutos);

const precoProdutosComDesconto = produtos.map(produto => produto.preco * 0.10);
console.log('Array com preço dos produtos com 10% de desconto:', precoProdutosComDesconto, '\n');


// Exercício 2 – Filtro

// Filtre apenas maiores de idade.

const users = [
    { nome: "Ana", idade: 17 },
    { nome: "Carlos", idade: 22 },
    { nome: "Marina", idade: 15 }
];

const maiorIdade = users.filter(user => user.idade >= 18);
console.log('Usuário com mais de 18 anos:');
console.table(maiorIdade);


// Exercício 3 – Find

// Usando o mesmo array acima:
// Encontre o primeiro usuário menor de idade.

const menorIdade = users.find(user => user.idade < 18);
console.log('\nUsuário com menos de 18 anos:');
console.table(menorIdade);


// Exercício 4 – Reduce (nível importante)

// Calcule o valor total dos pedidos.

const pedidos = [
    { produto: "Camisa", preco: 50 },
    { produto: "Calça", preco: 120 },
    { produto: "Tênis", preco: 200 }
];

const totalPedidos = pedidos.reduce((acumulador, pedido) => {
    return acumulador + pedido.preco;
}, 0);

console.log('\nValor total dos pedidos: R$', totalPedidos.toFixed(2));