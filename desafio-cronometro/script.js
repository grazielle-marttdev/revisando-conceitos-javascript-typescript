const timer = document.getElementById('timer');
const iniciarBtn = document.getElementById('iniciar');
const pararBtn = document.getElementById('parar');
const reiniciarBtn = document.getElementById('reiniciar');

let tempoRestante = 25;
let timerId = null;

timer.innerHTML = `<span>${tempoRestante}</span>`;

iniciarBtn.addEventListener('click', () => {
    timerId = setInterval(() => {
        timer.innerHTML = `<span>${tempoRestante}</span>`;
        
        // Diminui o contador
        tempoRestante--;
        
        // Parar o timer
        if (tempoRestante < 0) {
            clearInterval(timerId);
            timerId = null;
            timer.innerHTML = `<span>Tempo esgotado!</span>`;
            iniciarBtn.disabled = false;
        }
    }, 1000); // Executa a cada 1s 

    iniciarBtn.disabled = true;
});

pararBtn.addEventListener('click', () => {
    clearInterval(timerId);
    timerId = null;
    iniciarBtn.disabled = false;

    iniciarBtn.textContent = 'Continuar';
});

reiniciarBtn.addEventListener('click', () => {
    clearInterval(timerId);
    tempoRestante = 25;
    timer.innerHTML = `<span>${tempoRestante}</span>`;

    iniciarBtn.disabled = false;
    iniciarBtn.textContent = 'Iniciar';
});

