const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de plástico', preco: 18.99, fragil: true},
]

const fragil = produto => produto.fragil
const caro = produto => produto.preco >= 500

console.log(produtos.filter(fragil).filter(caro))