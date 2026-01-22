const numeros = [1, 2, 3, 4, 5, 6, 7];

const novaListaNumeros = numeros.slice(3, 7);

console.log(novaListaNumeros);
console.log(numeros);

console.log(numeros.slice(0, 2));

numeros.splice(2, 1);
console.log(numeros);
