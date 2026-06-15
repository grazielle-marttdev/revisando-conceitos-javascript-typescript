// switch/case
// O switch/case é uma estrutura de controle de fluxo que permite executar diferentes blocos de código com base no valor de uma expressão. Ele é útil quando você tem várias condições para verificar e deseja evitar o uso excessivo de if/else.

let diaDaSemana = 3;

switch (diaDaSemana) {
    case 1:
        console.log("Segunda-feira");
        break;
    case 2:
        console.log("Terça-feira");
        break;
    case 3:
        console.log("Quarta-feira");
        break;
    case 4:
        console.log("Quinta-feira");
        break;  
    case 5:
        console.log("Sexta-feira");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Dia inválido");
}

