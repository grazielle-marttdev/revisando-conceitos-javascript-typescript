const listaFilmes = document.getElementById("lista-filmes");
const listaFilmes2000 = document.getElementById("lista-filmes-2000");

const filmesStudioGhibli = [
    { titulo: "A Viagem de Chihiro", ano: 2001 },
    { titulo: "Meu Amigo Totoro", ano: 1988 },
    { titulo: "O Castelo Animado", ano: 2004 },
    { titulo: "Princesa Mononoke", ano: 1997 },
    { titulo: "O Serviço de Entregas da Kiki", ano: 1989 },
    { titulo: "O Castelo no Céu", ano: 1986 },
    { titulo: "O Menino e a Garça", ano: 2023 }
];

// Função para renderizar filmes em uma lista específica
function renderizarFilmes(filmes, container) {
    container.innerHTML = ""; // Limpa o container antes de renderizar
    filmes.forEach(filme => {
        const li = document.createElement("li");
        li.innerHTML = `<span><strong>${filme.titulo}</strong> (${filme.ano})</span>`;
        container.appendChild(li);
    });
}

// Renderiza todos os filmes
renderizarFilmes(filmesStudioGhibli, listaFilmes);

// Filtra e renderiza filmes lançados a partir de 2000
const filmesRecentes = filmesStudioGhibli.filter(filme => filme.ano >= 2000);
renderizarFilmes(filmesRecentes, listaFilmes2000);