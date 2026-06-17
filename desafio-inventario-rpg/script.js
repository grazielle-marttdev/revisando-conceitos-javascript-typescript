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

inventario.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.item}: ${item.quantidade}`;
    inventarioUl.appendChild(li);
});

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

inventario.forEach(item => {
    const option = document.createElement('option');
    option.value = item.item;
    option.textContent = item.item;
    selecionarItem.appendChild(option);
})

removerBtn.addEventListener("click", () => {
    const itemSelecionado = selecionarItem.value;

    inventario.forEach((item, index) => {
        if (item.item === itemSelecionado) {
            inventario.splice(index, 1);
        }
    });

    atualizarInventario();
    selecionarItem.value = '';
});

function atualizarInventario() {
    inventarioUl.innerHTML = '';
    
    inventario.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.item}: ${item.quantidade}`;
        inventarioUl.appendChild(li);
    });
}