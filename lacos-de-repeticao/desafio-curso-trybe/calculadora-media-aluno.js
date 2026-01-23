const input = document.getElementById('nota');
const btnAdicionar = document.getElementById('btn-adicionar');
const btnCalcularMedia = document.getElementById('btn-calcular');
const lista = document.getElementById('notas');
const spanResultado = document.getElementById('resultado');

let notas = [];

btnAdicionar.addEventListener('click', () => {
    const nota = input.value;

    if (nota === '') return;

    notas.push(Number(nota));
    console.log(notas);

    const item = document.createElement('li');
    item.textContent = nota;
    lista.appendChild(item);

    input.value = '';
});

btnCalcularMedia.addEventListener('click', () => {
    if (notas.length === 0) {
        spanResultado.innerHTML = `
            <p>Nenhuma nota foi adicionada.</p>
            <p>Adicione as notas para calcular a média!</p>`;
        return
    } 

    calcularMedia();
    notas = [];
});

function calcularMedia() {
    let somatorioNotas = 0;

    for (let i = 0; i < notas.length; i += 1) {
        somatorioNotas += notas[i];
    }

    const media = somatorioNotas / notas.length;
    spanResultado.innerHTML = `<p>Resultado da média: ${media.toFixed(1)}</p>`

    if (media > 6) {
        spanResultado.innerHTML += `<p>A pessoa estudante está APROVADA</P>`;
    } else {
        spanResultado.innerHTML += `<p>A pessoa estudante está REPROVADA</p>`;
    }
};