const produto = {
    nome: "Celular",
    preco: 1500,
    desconto(percentual) {
        const desconto = (this.preco * percentual) / 100
        return this.preco - desconto;
    }
};

console.log(produto.desconto(20));

const usuarios = [
    { nome: "Ana", idade: 25 },
    { nome: "Bruno", idade: 30 },
    { nome: "Carla", idade: 28 },
    { nome: "Daniel", idade: 35 }
];

usuarios.forEach(usuario => {
    console.log(usuario.nome);
});

const playlist = {
    nome: "Minha Playlist",
    musicas: [ "Musica1", "Musica2", "Musica3" ],
    listarMusicas() {
        this.musicas.forEach(musica => { 
            console.log(musica);
            
        })
    }
};

playlist.listarMusicas();
