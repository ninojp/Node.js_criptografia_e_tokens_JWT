'use strict';
import {generateKeyPairSync, createSign, createVerify} from 'crypto';
// Cria a chave Privada e publica, para encriptar
const { privateKey, publicKey } = generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
        type: 'spki',
        format: 'pem',
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
    },
});
// A mensagem a ser encriptada e enviada
let dados = 'Essa string vai ser assinada!';

// Criação da assinatura
const assinador = createSign('rsa-sha256');
assinador.update(dados);
const assinatura = assinador.sign(privateKey, 'hex');
console.log(`Assinatura: 
${assinatura}`);

// intermediário, Interseptádor
// dados += ' dados alterados';

// Envio da Mensagem + Assinatura e chave Pública
const verificador = createVerify('rsa-sha256');
verificador.update(dados);
const ehVerificado = verificador.verify(publicKey, assinatura, 'hex');
console.log(ehVerificado);
