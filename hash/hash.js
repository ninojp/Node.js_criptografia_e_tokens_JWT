"use strict";
import { createHash } from "crypto";

function criaHash(senha) {
    return createHash("sha256").update(senha).digest("hex");
}
console.log(criaHash("uma String Qualquer"));

class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        this.hash = criaHash(senha);
    }
    autentica(nome, senha) {
        if (nome === this.nome && this.hash === criaHash(senha)) {
            console.log("Usuário autenticado com sucesso");
            return true;
        }else{
            console.log("Usuário ou senha Incorreto!");
            return false;
        }
    }
}
const usuario = new Usuario("Nino JP", "minhaSenha");

console.log(usuario);

usuario.autentica("Nino JP", "minhaSenha");//Sucesso
usuario.autentica("nino", "minhaSenha");//fracasso
usuario.autentica("Nino JP", "minhasenha");//fracasso