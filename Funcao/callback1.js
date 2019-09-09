const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimirNome(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimirNome)
fabricantes.forEach(fabricante => console.log(fabricante))