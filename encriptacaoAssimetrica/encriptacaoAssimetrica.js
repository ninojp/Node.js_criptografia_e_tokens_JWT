'use strict';
import {generateKeyPairSync} from 'crypto';
import { publicEncrypt, privateDecrypt } from 'crypto';

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
console.log(publicKey, privateKey)
//-----------------------------------------------------------------------
const dadosCriptografados = publicEncrypt(
    publicKey,
    Buffer.from('Mensgem super Secreta')
);
console.log(dadosCriptografados.toString('hex'));

//---------------Transmissão -------------------------------------------
const dadosDecifrados = privateDecrypt(
    privateKey,
    dadosCriptografados
);
console.log(`Dados Decifrados:
${dadosDecifrados.toString('utf-8')}`);