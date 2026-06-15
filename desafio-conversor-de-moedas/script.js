// Definir taxas de câmbio fixas
// ex: 1 EUR = 1.1 USD, 1 USD = 5.6 BRL
const taxasDeCambio = {
    "EUR-USD": 1.16,
    "USD-BRL": 5.07,
    "EUR-BRL": 5.88,
    "USD-EUR": 0.86,
    "BRL-USD": 0.20,
    "BRL-EUR": 0.17
};

const valorInput = document.getElementById("valorInput");
const selectMoedaOrigem = document.getElementById("moedaOrigem");
const selectMoedaDestino = document.getElementById("moedaDestino");
const buttonConverter = document.getElementById("converterBtn");
const divResultado = document.getElementById("resultado");

buttonConverter.addEventListener("click", () => {
    const valor = parseFloat(valorInput.value);
    const moedaOrigem = selectMoedaOrigem.value;
    const moedaDestino = selectMoedaDestino.value;
    const chave = `${moedaOrigem}-${moedaDestino}`;
    const taxa = taxasDeCambio[chave];

    divResultado.innerHTML = ""; // Limpar resultado anterior

    if (isNaN(valor) || valor <= 0) {
        divResultado.innerHTML = `<p>Por favor, insira um valor válido para conversão.</p>`;
        return;
    }

    if (!taxa) {
        divResultado.innerHTML = `<p>Não foi possível realizar a conversão. Verifique se as moedas selecionadas não são iguais.</p>`;
        return;
    }

    const valorConvertido = valor * taxa;
    divResultado.innerHTML = `<p>O valor convertido é de: <strong>${valorConvertido.toFixed(2)} ${moedaDestino}</strong></p>`;
})