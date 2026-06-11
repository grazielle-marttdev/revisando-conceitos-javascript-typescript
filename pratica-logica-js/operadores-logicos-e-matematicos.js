console.log(true && false);
// O resultado é false, pois true é verdadeiro, mas false é falso, e a operação AND (&&) só retorna true se ambos os operandos forem verdadeiros.

console.log(true || false || false);
// O resultado é true, pois a operação OR (||) retorna true se pelo menos um dos operandos for verdadeiro. Neste caso, o primeiro operando é true, então o resultado é true.

console.log(!true && (false || true));
// O resultado é false, pois a operação NOT (!) inverte o valor de true para false, e a operação OR (||) retorna true, mas a operação AND (&&) entre false e true resulta em false.

console.log(10 + 5 * 2 - 3);
// O resultado é 17, pois a operação de multiplicação é realizada antes da adição e subtração, seguindo a ordem de operações matemáticas.

console.log(20 % 6);
// O resultado é 2, pois o operador de módulo (%) retorna o restante da divisão de 20 por 6. A divisão de 20 por 6 resulta em 3 com um restante de 2, então o resultado é 2.

// O resto da divisão de um número por outro é o valor que sobra após a divisão inteira. Por exemplo, ao dividir 20 por 6, o resultado inteiro é 3, e o restante é 2, pois 3 vezes 6 é igual a 18, e para chegar a 20, precisamos adicionar mais 2. 

// Portanto, o operador de módulo (%) retorna esse valor restante, que é 2 neste caso.

// ===================================

console.log(false || true && true);
// O resultado é true, pois a operação AND (&&) tem precedência sobre a operação OR (||). Primeiro, o AND é avaliado, resultando em true, e depois o OR é avaliado, resultando em true.

console.log(!(5 === 5) || (3 < 2));
// O resultado é false, pois a operação de comparação (===) retorna true, mas a operação NOT (!) inverte esse valor para false. A operação de comparação (3 < 2) retorna false, e a operação OR (||) entre false e false resulta em false.

console.log((true && false) || (!false && true));
// O resultado é true, pois a operação NOT (!) inverte o valor de false para true, e a operação AND (&&) entre true e true resulta em true. A operação AND (&&) entre true e false resulta em false, mas a operação OR (||) entre false e true resulta em true.

console.log(!(!true || false));
// O resultado é true, pois a operação NOT (!) inverte o valor de true para false, e a operação OR (||) entre false e false resulta em false. A operação NOT (!) inverte esse valor para true, resultando em true.

// ====================================

console.log(15 - (4 * 2) + 8);
// O resultado é 15, pois a operação de multiplicação é realizada antes da adição e subtração, seguindo a ordem de operações matemáticas.

console.log((3 + 5) * 2 - 4);
// O resultado é 12, pois a operação de adição é realizada primeiro, seguida pela multiplicação e depois pela subtração.

console.log(25 % 4 + 9);
// O resultado é 10, pois o operador de módulo (%) retorna o restante da divisão de 25 por 4, que é 1, e depois adicionamos 9, resultando em 10.

console.log(10 * 3 - (5 + 1) * 2);
// O resultado é 18, pois a operação de multiplicação é realizada antes da adição e subtração, seguindo a ordem de operações matemáticas. Primeiro, calculamos (5 + 1) que resulta em 6, depois multiplicamos por 2 para obter 12, e finalmente subtraímos de 10 * 3 (30) para obter o resultado final de 18.