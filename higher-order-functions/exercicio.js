function alterarNumero(num, callback) {
    return callback(num);
}

const dobrar = (n) => n * 2;
const triplicar = (n) => n * 3;
const quadruplicar = (n) => n * 4;

console.log(alterarNumero(5, dobrar));
console.log(alterarNumero(5, triplicar));
console.log(alterarNumero(5, quadruplicar));