const adicionarBtn = document.getElementById('add-button');
const input = document.getElementById('item-input');
const list = document.getElementById('item-list');

// Função para atualizar o DOM 
function atualizarLista() {
    list.innerHTML = '';

    const items = JSON.parse(localStorage.getItem('crudItems')) || [];

    items.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.classList.add('item');
        listItem.innerHTML = `
            <span>${item}</span>
            <button class="remover-item">X</button>
        `;
        list.appendChild(listItem);

        const botao = listItem.querySelector('.remover-item');
        botao.addEventListener('click', () => {
            items.splice(index, 1);
            localStorage.setItem('crudItems', JSON.stringify(items));
            atualizarLista();
        })
        
    });
}

adicionarBtn.addEventListener('click', () => {
    if (input.value) {
        const items = JSON.parse(localStorage.getItem('crudItems')) || [];
        items.push(input.value);
        localStorage.setItem('crudItems', JSON.stringify(items));
        atualizarLista();
        input.value = '';
    }
});


atualizarLista();