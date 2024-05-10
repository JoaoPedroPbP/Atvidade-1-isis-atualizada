
function mostrarProdutos() {
    const produtosSection = document.getElementById('produtos');
    produtosSection.style.display = 'block';
}

function adicionarAoCarrinho(nome, preco) {
    const item = { nome: nome, preco: preco };
    carrinho.push(item);
    atualizarCarrinho();
}


function atualizarCarrinho() {
    const carrinhoElemento = document.getElementById('carrinho');
    carrinhoElemento.innerHTML = '';
    carrinho.forEach(item => {
        const itemElemento = document.createElement('div');
        itemElemento.textContent = `${item.nome} - R$ ${item.preco}`;
        carrinhoElemento.appendChild(itemElemento);
    });
}

const carrinho = [];


