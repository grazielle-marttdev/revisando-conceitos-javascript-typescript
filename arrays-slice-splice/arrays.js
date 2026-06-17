const filmes = [
    { titulo: "O Senhor dos Anés", ano: 2001 },
    { titulo: "Matrix", ano: 1999 },
    { titulo: "Godzilla", ano: 2014 },
    { titulo: "A Origem", ano: 2010 },
    { titulo: "Jussaric Park", ano: 1993 }
];

console.log("Filmes disponíveis:\n");

// Exibe os filmes
filmes.forEach(filme => {
    // Desestrutuação de cada filme
    const { titulo, ano } = filme;

    console.log(`Título: ${titulo}, Ano: ${ano}`);
});

// Adiciona um novo filme
filmes.push({ titulo: "Star Wars: Uma Nova Esperança", ano: 1977 });
console.log("Adiciona um novo filme:");
console.table(filmes);


// Remove o último filme
filmes.pop();
console.log("Remove o último filme:");
console.table(filmes);

// Remove o Segundo filme
filmes.splice(1, 1);
console.log("Remove o segundo filme:");
console.table(filmes);