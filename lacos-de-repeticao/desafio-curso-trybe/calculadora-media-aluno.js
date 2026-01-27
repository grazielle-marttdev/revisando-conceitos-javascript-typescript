const input = document.getElementById('nota');
const btnAdicionar = document.getElementById('btn-adicionar');
const btnCalcularMedia = document.getElementById('btn-calcular');
const lista = document.getElementById('notas');
const spanResultado = document.getElementById('resultado');

let notas = [];

btnAdicionar.addEventListener('click', () => {
    const nota = input.value;

    if (nota === '') return;

    if (Number.isNaN(Number(nota))) {
        spanResultado.className = 'calculadora__result';

        spanResultado.innerHTML = `
            <p>⚠️ Use ponto (.) para casas decimais.</p>
            <p>Exemplo válido: 7.5</p>`

        return;
    } else {
        spanResultado.innerHTML = '';
        spanResultado.classList.remove('calculadora__result');

        notas.push(Number(nota));
        console.log(notas);
    
        const item = document.createElement('li');
        item.classList.add('calculadora__note-item');
        item.textContent = nota;
        lista.appendChild(item);
    
        input.value = '';
    }
});

btnCalcularMedia.addEventListener('click', () => {
    if (notas.length === 0) {
        spanResultado.className = 'calculadora__result';
        
        spanResultado.innerHTML = `
            <p>Nenhuma nota foi adicionada.</p>
            <p>Adicione as notas para calcular a média!</p>`;
        return
    } 

    calcularMedia();
    notas = [];
    lista.innerHTML = '';
});

function calcularMedia() {
    let somatorioNotas = 0;

    for (let i = 0; i < notas.length; i += 1) {
        somatorioNotas += notas[i];
    }

    const media = somatorioNotas / notas.length;
    spanResultado.className = 'calculadora__result';

    spanResultado.innerHTML = `
        <p>Resultado da média:</p>
        <span class="calculadora__result-average">${media.toFixed(1)}</span>`

    if (media > 6) {
        spanResultado.innerHTML += `<p>A pessoa estudante está <span class="calculadora__result-status calculadora__result-status--approved">APROVADA</span></p>`;
    } else {
        spanResultado.innerHTML += `<p>A pessoa estudante está <span class="calculadora__result-status calculadora__result-status--failed">REPROVADA</span></p>`;
    }
};    