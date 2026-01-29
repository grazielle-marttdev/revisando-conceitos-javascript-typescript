const pedidos = [
    { 
        id: 1,
        cliente: "Ana",
        itens: [
            { nome: "Camiseta", preco: 40, quantidade: 3 },
            { nome: "Calça Jeans", preco: 120, quantidade: 1 }
        ], 
        status: "pendente",
        calcularTotalPedido: function() {
            let total = 0;

            this.itens.forEach(item => {
                total += item.preco * item.quantidade;
            });
            return total.toFixed(2);
        }
    },
    {
        id: 2,
        cliente: "Bruno",
        itens: [
            { nome: "Tênis Esportivo", preco: 250, quantidade: 1 },
        ],
        status: "pago",
        calcularTotalPedido: function() {
            let total = 0;

            this.itens.forEach(item => {
                total += item.preco * item.quantidade;
            });
            return total.toFixed(2);
        }
    },
    {
        id: 3,
        cliente: "Carla",
        itens: [
            { nome: "Calça Jeans", preco: 120, quantidade: 2 },
            { nome: "Vestido Flores", preco: 150, quantidade: 1 },
            { nome: "Cinto de Couro", preco: 45, quantidade: 1 },
            { nome: "Brincos de Prata", preco: 30, quantidade: 2 }
        ],
        status: "cancelado",
        calcularTotalPedido: function() {
            let total = 0;

            this.itens.forEach(item => {
                total += item.preco * item.quantidade;
            });
            return total.toFixed(2);
        }
    },
    {
        id: 4,
        cliente: "Daniel",
        itens: [
            { nome: "Meias Kit c/3", preco: 25, quantidade: 4 }
        ],
        status: "pago",
        calcularTotalPedido: function() {
            let total = 0;

            this.itens.forEach(item => {
                total += item.preco * item.quantidade;
            });
            return total.toFixed(2);
        }
    }
]

// Método dentro do objeto para calcular o total do pedido da Ana
console.log(`Total do pedido da Ana: R$ ${pedidos[0].calcularTotalPedido()}`);

// Calcular o total de um pedido
function calcularTotalPedido(preco, quantidade) {
    const total =  preco * quantidade;

    if (total >= 200) {
        const totalComDesconto = total * 0.9; // Aplica 10% de desconto
        console.log('Parabéns, você recebeu um desconto de 10%!');
        return totalComDesconto.toFixed(2);
    }

    return total.toFixed(2);
}

console.log(`Total do pedido: R$ ${calcularTotalPedido(120, 2)}`);

// Mudar o status de um pedido
function mudarStatusPedido(IdCliente, atualizarStatus) {
    pedidos.forEach(pedido => {
        if (IdCliente === pedido.id) {
            pedido.status = atualizarStatus;
        }
    });
}

console.log(`O cliente possui status como "${pedidos[0].status}"`);
mudarStatusPedido(pedidos[0].id, "pago");
console.log(`Status atualizado. O pedido do cliente agora está "${pedidos[0].status}".`);

// listar pedidos por status
function listarPedidos(status) {
    pedidos.forEach(pedido => {
        if (pedido.status === status) {
            console.log(`Pedido ID: ${pedido.id}, Cliente: ${pedido.cliente}, Status: ${pedido.status}`);
            console.table(pedido.itens);
        }
    });
}

listarPedidos("pago");

// Remover um pedido pelo ID
const removerPedido = (IdCliente) => {
    const index = pedidos.findIndex(pedido => pedido.id === IdCliente);

    if (index !== -1) {
        pedidos.splice(index, 1);
        console.log(`Pedido com ID ${IdCliente} removido com sucesso.`);
    } else {
        console.log(`Pedido com ID ${IdCliente} não encontrado.`);
    }
}

removerPedido(3);
console.table(pedidos);