const inventarioUl = document.getElementById("inventario");
const adicionarBtn = document.getElementById("adicionarBtn");
const selecionarItem = document.getElementById("selecionarItem");
const removerBtn = document.getElementById("removerBtn");

const inventario = [
    { item: "Espada de ferro", quantidade: 1 },
    { item: "Diamante", quantidade: 3 },
    { item: "Tocha", quantidade: 32 },
    { item: "Carvão", quantidade: 48 },
    { item: "Pedregulho", quantidade: 64 },
    { item: "Picareta", quantidade: 2 }
];

function atualizarInventario() {
    // Limpar lista e select
    inventarioUl.innerHTML = '';
    selecionarItem.innerHTML = '<option value="">Selecione um item</option>';
    
    inventario.forEach((item, index) => {
        // Atualizar lista visual (Slots)
        const li = document.createElement('li');

        const nomeSpan = document.createElement('span');
        nomeSpan.textContent = item.item;
        nomeSpan.classList.add('item-name');
        
        const qtdSpan = document.createElement('span');
        qtdSpan.textContent = `x${item.quantidade}`;
        qtdSpan.classList.add('item-quantity');
        
        li.appendChild(nomeSpan);
        li.appendChild(qtdSpan);
        inventarioUl.appendChild(li);

        // Atualizar Select
        const option = document.createElement('option');
        option.value = index; // Usando index para ser mais preciso
        option.textContent = item.item;
        selecionarItem.appendChild(option);
    });
}

adicionarBtn.addEventListener("click", () => {
    const itemInput = document.getElementById("itemInput");
    const quantidadeInput = document.getElementById("quantidadeInput");
    
    if (itemInput.value && quantidadeInput.value) {
        const novoItem = {
            item: itemInput.value,
            quantidade: parseInt(quantidadeInput.value)
        }

        inventario.push(novoItem);
        atualizarInventario();

        itemInput.value = '';
        quantidadeInput.value = '';
    }
});

removerBtn.addEventListener("click", () => {
    const indexSelecionado = selecionarItem.value;

    if (indexSelecionado !== "") {
        inventario.splice(parseInt(indexSelecionado), 1);
        atualizarInventario();
    }
});

// Inicialização
atualizarInventario();