'use strict';
// import { jwt } from "jsonwebtoken"; NÃO pode ser dentro das chaves
import jwt from "jsonwebtoken";
const chaveSecreta = 'chaveSuperSecreta';

const token = jwt.sign(
    {
        apelido: "Ninojp",
        curso: "Segurança e Node.js"
    }, 
    chaveSecreta
);
console.log(token);

const tokenDecodificado = jwt.verify(token, chaveSecreta);
console.log(tokenDecodificado);