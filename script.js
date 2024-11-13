/*

FAÇA UM CALCULADORA EM JAVASCRIPT, COM AS OPERAÇÕES DE SOMA, SUBTRAÇÃO, MULTIPLICAÇÃO, DIVISÃO, EXPONENCIAÇÃO E RAIZ QUADRADA. 

O USUÁRIO É QUEM DEFINE QUAL A OPERAÇÃO SERÁ REALIZADA.

OS NÚMEROS DEVEM SER INSERIDOS VIA PROMPT E A SAÍDA DEVE SER POR CAIXA DE DIÁLOGO.

AO FINAL DE CADA OPERAÇÃO, O PROGRAMA DEVE PERGUNTAR AO USUÁRIO SE ELE DESEJA UMA NOVA OPERAÇÃO.

EM CASO NEGATIVO, ENCERRE O PROGRAMA, EM CASO AFIRMATIVO, RECOMECE TODO O PROCESSO.

*/
do {

let escolha = parseInt(prompt("Escolha a operação desejada!" + "\n" + "\n"
    + "1 - SOMA" + "\n"
    + "2 - SUBTRAÇÃO" + "\n"
    + "3 - MULTIPLICAÇÃO" + "\n"
    + "4 - DIVISÃO" + "\n"
    + "5 - EXPONENCIAÇÃO" + "\n"
    + "6 - RAIZ QUADRADA" + "\n"
));

switch(escolha){
    case 1 : {
        let num1 = parseInt(prompt("Digite o primeiro número: "));
        let num2 = parseInt(prompt("Digite o segundo número: "));
        let resultado = num1 + num2;
        alert (" O resultado de " + num1 + " somado com " + num2 + " são " + resultado + ".");
        break
    }

    case 2 : {
        let num1 = parseInt(prompt("Digite o primeiro número: "));
        let num2 = parseInt(prompt("Digite o segundo número: "));
        let resultado = num1 - num2;
        alert (" O resultado de " + num1 + " subtraído com " + num2 + " são " + resultado + ".");
        break
    }

    case 3 : {
        let num1 = parseInt(prompt("Digite o primeiro número: "));
        let num2 = parseInt(prompt("Digite o segundo número: "));
        let resultado = num1 * num2;
        alert (" O resultado de " + num1 + " multiplicado por " + num2 + " são " + resultado + ".");
        break
    }

    case 4 : {
        let num1 = parseInt(prompt("Digite o primeiro número: "));
        let num2 = parseInt(prompt("Digite o segundo número: "));
        let resultado = num1 / num2;
        alert (" O resultado de " + num1 + " dividido por " + num2 + " são " + resultado + ".");
        break
    }

    case 5 : {
        let num1 = parseInt(prompt("Digite o primeiro número: "));
        let num2 = parseInt(prompt("Digite o segundo número: "));
        let resultado = Math.pow(num1, num2);
        alert (" O resultado da exponenciação de " + num1 + " com " + num2 + " são " + resultado + ".");
        break
    }

    case 6 : {
        let num1 = parseInt(prompt("Digite o número para saber a raiz quadrada: "));
        let resultado = Math.sqrt(num1);
        alert (" O resultado da raiz quadrada de " + num1 + " são " + resultado + ".");
        break
    }
}
    } 
    
    while (confirm("Deseja fazer uma nova operação?"));

     alert("ENCERRANDO O PROGRAMA ...");