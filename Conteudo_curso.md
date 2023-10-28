# Node.js: criptografia e tokens JWT

## Aula 01 - Conhecendo Problema

### Aula 01 - Apresentação - Video 1

Nesta aula do curso de Node.js: criptografia e tokens JWT, ministrado por João Manoel, são apresentados os objetivos e conteúdos abordados no curso. O foco é fornecer os primeiros passos e considerações necessárias para o desenvolvimento seguro de aplicações em Node.js. Serão explorados temas como criptografia, hashes, encriptação simétrica e assimétrica, assinaturas e o token JWT (JSON Web Token). O curso é recomendado para iniciantes que desejam aprender sobre os fundamentos e os primeiros passos na criptografia em Node.js. É necessário ter concluído a Formação JavaScript para back-end oferecida pela Alura.

### Aula 01 - Origens da criptografia - Video 2

Nesta aula, discutimos a origem e história da criptografia. A criptografia sempre foi usada para manter informações acessíveis apenas para um número limitado de pessoas ou equipes. Um exemplo de técnica criptográfica discutida foi a Cifra de César, que consiste em deslocar as letras do alfabeto para criar uma mensagem cifrada. Com o avanço da tecnologia, foram desenvolvidas máquinas mecânicas e eletrônicas para realizar o processo de criptografia.

### Aula 01 - Por que “esconder” dados? - Video 3

Nesta aula, foi abordado o tema da criptografia e sua importância na proteção de informações sensíveis. A criptografia consiste em escrever informações de maneira oculta, utilizando técnicas e algoritmos para garantir a segurança e privacidade dos dados. Além disso, foram mencionados os conceitos de autorização e autenticação, que são fundamentais para o controle de acesso à informação e para garantir a segurança dos sistemas.

### Aula 01 - As cifras e suas fraquezas - Video 4

Nesta aula, o instrutor ensina como implementar uma parte simplificada da Cifra de César em um código JavaScript. Ele mostra como criar um arquivo JavaScript vazio no Visual Studio Code e como abrir o terminal para executar o código. Em seguida, ele cria uma variável com uma mensagem secreta e utiliza o console.log para exibi-la no terminal. Depois, ele cria uma função chamada "cifraMensagem" que recebe uma mensagem e uma quantidade de movimentos como parâmetros. Dentro dessa função, ele utiliza os métodos split, map e join para realizar o deslocamento dos caracteres da mensagem. Ele testa a função no terminal e exibe o resultado. Em seguida, ele cria uma nova função chamada "decifraMensagem" que realiza o processo inverso da função anterior. Ele testa essa função no terminal e exibe o resultado. O instrutor finaliza mencionando que essa implementação da Cifra de César é simples e desafia o espectador a estudar uma versão mais robusta.

- O charCodeAt() é um método usado para retornar o número que indica o valor Unicode do caractere no índice especificado.

> Atenção: o termo string é interpretado de forma diferente pelo JavaScript nos casos string.charCodeAt(index) e String.fromCharCode(num). No primeiro caso (em minúsculas), string se refere a uma sequência de caracteres, como por exemplo ”ALURA”. No segundo caso (com S maiúsculo), String se refere ao que chamamos de objeto global String. Você pode conferir mais informações sobre o objeto String na

### Aula 01 - Conclusão - Nessa aula, você aprendeu

As origens da criptografia e seus primeiros usos, isto é, sua utilização na comunicação militar e aplicações em conflitos;
Os conceitos e utilização das cifras, em especial a cifra de césar, que poderia ser realizada facilmente sem um poder computacional muito avançado;
Quais são os usos atuais que dependem da criptografia, tal qual sistemas de mensageria e armazenamento de informação pessoal;
A diferença entre Autorização e autenticação, isto é, a capacidade de confirmar uma permissão e identidade, respectivamente.

## Aula 02 - Utilizando o Módulo Crypto

### Aula 02 - Funções de hash - Video 1
