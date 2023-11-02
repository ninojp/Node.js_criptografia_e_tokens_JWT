"use strict";
import { createHash } from "crypto";

class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        this.hash = this.criaHash(senha);
    }
    criaHash(senha) {
        return createHash("sha256").update(senha).digest("hex");
    }
    autentica(nome, senha) {
        if (nome === this.nome && this.hash === this.criaHash(senha)) {
            console.log("Usuário autenticado com sucesso");
            return true;
        }else{
            // console.log("Usuário ou senha Incorreto!");
            return false;
        }
    }
}
const usuario = new Usuario("Nino JP", "1337");

for(let senhaTeste=0; senhaTeste < 10000 ; senhaTeste++){
    if(usuario.autentica("Nino JP", senhaTeste.toString())){
        console.log(`A Senha do usuário é: ${senhaTeste}`);
    }
}