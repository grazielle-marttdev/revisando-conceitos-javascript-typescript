const pedidos = [
    { 
        id: 1,
        cliente: "Ana",
        itens: [
            { nome: "Camiseta", preco: 40, quantidade: 3 },
            { nome: "Calça Jeans", preco: 120, quantidade: 1 }
        ], 
        status: "pendente"
    },
    {
        id: 2,
        cliente: "Bruno",
        itens: [
            { nome: "Tênis Esportivo", preco: 250, quantidade: 1 },
        ],
        status: "pago"
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
        status: "cancelado"
    },
    {
        id: 4,
        cliente: "Daniel",
        itens: { nome: "Meias Kit c/3", preco: 25, quantidade: 4 },
        status: "pago"
    }
]

// Calcular o total de um pedido
function calcularTotalPedido(preco, quantidade) {
    return preco * quantidade;
}
// console.log(calcularTotalPedido(25, 4));

// Mudar o status de um pedido
function mudarStatusPedido(IdCliente, atualizarStatus) {
    pedidos.forEach(pedido => {
        if (IdCliente === pedido.id) {
            pedido.status = atualizarStatus;
        }
    })
}

// console.log(`O cliente possui status como "${pedidos[0].status}"`);

// mudarStatusPedido(pedidos[0].id, "pago");

// console.log(`Status atualizado. O pedido do cliente agora está "${pedidos[0].status}".`);


// listar pedidos por status
function listarPedidos(status) {
    pedidos.filter(pedido => {
        if (status === pedido.status) {
            console.table(pedido.itens);
        }
    })
}

listarPedidos("cancelado");