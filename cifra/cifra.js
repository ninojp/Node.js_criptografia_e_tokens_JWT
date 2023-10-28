const mensagemSecreta = "minhamensagemsecreta"
// const mensagemSecreta = "alura"

console.log(mensagemSecreta);

function cifraMensagem(mensagem, movimentos){
    const mensagemCifrada = mensagem.split('').map(caractere =>{
        const codigoCaractere = caractere.charCodeAt(0);
        return String.fromCharCode(codigoCaractere + movimentos)
    });
    return mensagemCifrada.join('');
}
const msgCifrada = cifraMensagem(mensagemSecreta, 3);
// const msgCifrada = cifraMensagem(mensagemSecreta, 4);
console.log(msgCifrada);
//-----------------------------------------------------------------
function decifraMensagem(mensagem, movimentos){
    const mensagemDecifrada = mensagem.split('').map(caractere =>{
        const codigoCaractere = caractere.charCodeAt(0);
        return String.fromCharCode(codigoCaractere - movimentos)
    });
    return mensagemDecifrada.join('');
}
const mensagemDecifrada = decifraMensagem(msgCifrada, 3);
console.log(mensagemDecifrada);
//-----------------------------------------------------------------

//O charCodeAt() é um método usado para retornar o número que indica o valor Unicode do caractere no índice especificado.
const mensagem_A = "A";
const mensagem_a = "a";
let codAscii_A = mensagem_A.charCodeAt(0);
let codAscii_a = mensagem_a.charCodeAt(0);
console.log(codAscii_A); // 65
console.log(codAscii_a); // 97
//------------------------------------------------------------------

//Agora vamos para outro exemplo, dessa vez usamos um laço de repetição for para fazer a leitura e conversão da string “ALURA”.
//Vamos analisar a estrutura do código e o resultado.
const mensagem = "ALURA";
for (let i = 0; i < mensagem.length; i++) {
 console.log(mensagem.charCodeAt(i));
}// 65 - 76 - 85 - 82 - 65
//Em resumo, criamos um laço de repetição que faz a leitura de uma string e exibe no terminal as posições de cada letra na tabela Unicode.
//-------------------------------------------------------------------

//Para reverter a conversão que fizemos, ou até mesmo criar valores do tipo string, utilizamos um outro método chamado fromCharCode(); 
//ele possibilita retornar uma string criada ao utilizarmos a sequência de valores unicode de cada letra.
const mensagemDecimal = String.fromCharCode(65, 76, 85, 82, 65);
console.log(mensagemDecimal);

const mensagemHexa = String.fromCharCode(0x41, 0x4C, 0x55, 0x52, 0x41);
console.log(mensagemHexa);