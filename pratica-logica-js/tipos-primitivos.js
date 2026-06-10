// Tipos primitivos em JavaScript

// String
const nome = "Grazielle";
console.log(typeof nome); // Output: string

// Number
const idade = 20;
console.log(typeof idade); // Output: number

// Boolean
const isStudent = true;
console.log(typeof isStudent); // Output: boolean

// Undefined
// O tipo undefined é atribuído a uma variável que foi declarada, mas ainda não foi inicializada com um valor. Ele indica a ausência de um valor definido.
const undefinedValue = undefined;
console.log(typeof undefinedValue); // Output: undefined

// Null
// O tipo null é atribuído a uma variável que foi declarada e inicializada com o valor null. Ele representa a ausência intencional de um valor.
const nullValue = null;
console.log(typeof nullValue); // Output: object

// O resultado "object" para o tipo null é um comportamento histórico do JavaScript e é considerado um bug, mas não pode ser corrigido devido à compatibilidade com versões anteriores. Portanto, embora null seja um tipo primitivo, ele é identificado como um objeto pelo operador typeof.


// Symbol
// O tipo Symbol é um tipo de dado primitivo que representa um valor único e imutável. Ele é frequentemente usado para criar identificadores únicos para propriedades de objetos.
const symbolValue = Symbol("unique");
console.log(typeof symbolValue); // Output: symbol