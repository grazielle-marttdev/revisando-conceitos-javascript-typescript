// map() -> Cria um novo array com os resultados da aplicação de uma função a cada elemento do array original
const filmes = [ 
    { titulo: "O Senhor dos Anés", ano: 2001 },
    { titulo: "Matrix", ano: 1999 },
    { titulo: "Godzilla", ano: 2014 },
    { titulo: "A Origem", ano: 2010 },
    { titulo: "Jussaric Park", ano: 1993 }
]

const titulos = filmes.map(filme => filme.titulo.toUpperCase());
console.log("Título dos filmes em uppercase:");
console.log(titulos);

// filter() -> Cria um novo array contendo apenas os elementos que passam em um teste implementado por uma função

const anos = filmes.filter(filme => filme.ano > 2000);
console.log("\nFilmes com ano de lançamento acima de 2000:");
console.table(anos);

// reduce() -> Aplica uma função a um acumulador e a cada elemento do array (da esquerda para a direita) para reduzir a um único valor
const numeros = [34, 8, 31, 12, 90, 146, 3];
const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log("\nSoma dos números da variável 'numeros':");
console.log(soma);

// find() -> Retorna o primeiro elemento do array que satisfaz a condição especificada
const filme = filmes.find(filme => filme.ano === 2010);
console.log("\nFilme com ano de lançamento igual a 2010:");
console.table(filme);

// spread operator (...) -> Permite que um iterável (como um array) seja expandido em locais onde múltiplos elementos são esperados
const filmesSciFi = [
    { titulo: "Star Wars: Uma Nova Esperança", ano: 1977 },
    { titulo: "Uma Odisseia no Espaço", ano: 1968 },
    { titulo: "Interestelar", ano: 2014 },
    { titulo: "Guerra dos Mundos", ano: 2005 }
];

const filmesFantasia = [
    { titulo: "O Mágico de Oz", ano: 1939 },
    { titulo: "A Viagem de Chihiro", ano: 2001 },
    { titulo: "Harry Potter e o Prisioneiro de Azkaban", ano: 2004 },
    { titulo: "A Bela e a Fera", ano: 1991 },
];

const juncaoFilmes = [...filmesSciFi, ...filmesFantasia];
console.log("\nJunção dos filmes de Ficção Científica e Fantasia:");
console.table(juncaoFilmes);