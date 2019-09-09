let valor // nao inicializado
console.log(valor) // undefined

valor = null // ausência de valor
console.log(valor) // null
//console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco) // undefined
console.log(produto) // {}

produto.preco = 3.50
console.log(produto) // { preco: 3.5 }

produto.preco = undefined // evitar atribuir undefined
console.log(!!produto.preco) // false
// delete produto.preco > retirar o atributo preco do produto
console.log(produto) // { preco: undefined }

produto.preco = null // sem preço
console.log(!!produto.preco) // false
console.log(produto) // { preco: null }