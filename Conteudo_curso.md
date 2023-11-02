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

Nesta aula, o professor aborda o conceito de cifra sem retorno e introduz as funções de hash como uma alternativa. Ele explica que as funções de hash são processos irreversíveis de embaralhamento e encurtamento de informações. Existem diversos tipos de funções de hash, como MD5, SHA1 e SHA-256. Uma das principais aplicações das funções de hash é o armazenamento seguro de senhas. Ao invés de guardar as senhas em formato legível, é possível armazenar apenas as hashes das senhas. O professor ressalta que o ideal seria que nem mesmo as hashes fossem visíveis para terceiros, mas essa abordagem já é uma fundação para a segurança de sistemas.

### Aula 02 - Utilizando funções de hash - Video 2

Nesta aula do curso de Node.js: criptografia e tokens JWT, aprendemos como utilizar o módulo crypto para implementar a funcionalidade de hash em um projeto. O instrutor mostrou como importar as funções do módulo crypto, configurar o arquivo package.json para permitir a utilização do módulo com a sintaxe de importação do ES6 e criar uma função chamada criaHash que recebe uma senha como parâmetro e retorna a hash correspondente a essa senha. Também foi criada uma classe chamada Usuario, que possui um construtor para armazenar o nome e a hash correspondente à senha do usuário, e um método autentica para verificar se o nome e a senha fornecidos são válidos. A utilização da hash aumenta a segurança do sistema de autenticação, tornando mais difícil para um invasor obter a senha original a partir da hash armazenada.

### Aula 02 - Para saber mais: tipos de hash

MD5, SHA, SHA-0, SHA-1, SHA-2, SHA-3, RIPEMD-160, BLAKE2, BLAKE3.  
A família SHA-2 consiste em seis funções de hash com resumos (valores de hash) que são SHA-224, SHA-256, SHA-384, SHA-512, SHA-512/ 224, SHA-512/256. Elas são construídas com o intuito de serem muito resistentes à colisão.  
Para saber os detalhes, [Link](https://cursos.alura.com.br/course/nodejs-criptografia-tokens-jwt/task/107362)  

### Aula 02 - Qual a problemática da hash? - Video 3

Nesta aula, o professor aborda a problemática da segurança das senhas dos usuários. Ele menciona que, apesar de não ser trivial descobrir a senha a partir da hash armazenada, existem processos que podem chegar perto de decifrar a senha. Uma dessas vulnerabilidades é o ataque conhecido como Rainbow Table, onde o atacante cria uma lista de hashes comprometidas e compara com a hash do banco de dados para descobrir a senha original. O professor ressalta a importância de implementar medidas adicionais para garantir a segurança das hashes e menciona que essas soluções serão abordadas no próximo vídeo.

### Aula 02 - Adicionando “sal” na hash - Video 4

Nesta aula, foi discutida a vulnerabilidade de senhas comuns e apresentada uma solução chamada "Hash com sal". Foi mostrado como adicionar um parâmetro extra à função de hash para tornar o processo mais seguro. Foi demonstrada a implementação dessa solução em um código JavaScript, utilizando o módulo crypto. Além disso, foi explicado como utilizar a "Hash com sal" para autenticar usuários. Foram apresentados exemplos de autenticação bem-sucedida e mal-sucedida. No próximo vídeo, será abordado como transmitir essa informação de maneira segura.

### Aula 02 Conclusão - Nessa aula, você aprendeu

O que são funções de hash e seu funcionamento prático para gerar dados que não podem ser restaurados à seu valor original;
Quais são algumas de suas aplicações práticas, como o uso em sistemas de autenticação;
A implementar os métodos do módulo crypto, como o createHash;
Como utilizar o “sal” para melhorar a eficácia das hashes, aumentando drasticamente a quantidade de possibilidades existentes para um algoritmo de encriptação.

## Aula 03 - Transmissão de Dados

### Aula 03 - Transmitindo informações - Video 1

Nesta aula, foi abordado o tema da encriptação simétrica como forma de transmitir informações com mais segurança. Foi explicado que a função de hash não é adequada para transmitir informações, pois não pode ser decifrada. Para resolver esse problema, foi introduzido o conceito de encriptação simétrica, que utiliza um algoritmo de encriptação e uma chave compartilhada para cifrar e decifrar a mensagem. Ambas as partes envolvidas na comunicação precisam ter acesso à mesma chave. No próximo vídeo, será mostrado como a encriptação simétrica funciona na prática.

### Aula 03 - Encriptação simétrica - Video 2

Nesta aula, o instrutor ensina sobre encriptação simétrica utilizando o módulo crypto do Node.js. Ele mostra como criar uma cifra utilizando o algoritmo aes256 e como encriptar uma mensagem utilizando essa cifra. O instrutor também explica a importância de ter uma chave compartilhada e um vetor de inicialização para encriptar e decriptar a informação. Ele demonstra como utilizar os métodos createCipheriv, randomBytes e update para codificar a mensagem. Além disso, o instrutor mostra como decifrar a mensagem utilizando o método createDecipheriv e o método final. Ele também comenta sobre a transmissão da chave, vetor de inicialização e mensagem, e mostra como decifrar a mensagem utilizando a chave compartilhada. O instrutor ressalta que a chave é gerada aleatoriamente a cada execução do código, o que resulta em uma cifra diferente mesmo para a mesma mensagem.  

> crypto.createCipheriv(algoritmo, chave, iv, opcoes)  

- Percebemos então que o método aceita quatro parâmetros:
  - algoritmo: é um dado do tipo string que está interligado com a biblioteca de implementação dos protocolos SSL e TLS, a OpenSSL . Alguns dos exemplos foram utilizados no curso, como aes256 ou rsa. Nas versões mais recentes da OpenSSL o comando no terminal openssl list -cipher-algorithms mostra os algoritmos de cifra disponíveis.
  - chave (key): é a chave bruta usada pelo algoritmo e vetor de inicialização. A chave pode ser um KeyObject ou do tipo secret.
  - iv: o vetor de inicialização que é responsável por fornecer um estado inicial. O iv precisa ser único ou imprevisível. O ideal é que seja criptografado de forma aleatória e não precisa ser secreto. Caso não necessite de um vetor de inicialização, o iv pode ser do tipo null.
  - options (opções): o último parâmetro é um argumento opcional, que pode alterar o modo de operação da função, definindo algumas configurações específicas.

> Método crypto.createDecipheriv()
O método crypto.createDecipheriv() funciona de forma bem similar ao createCipheriv(). No entanto, a interface retorna um objeto Decipher e os parâmetros são os mesmos. Sua sintaxe é:

### Aula 03 - Encriptação assimétrica - Video 3

Nesta aula, foi abordado o conceito de encriptação assimétrica como uma solução para o compartilhamento seguro de chaves em ambientes de comunicação não seguros. Na encriptação assimétrica, utiliza-se um par de chaves: uma chave pública para criptografar as informações e uma chave privada para descriptografar os dados. A chave pública pode ser compartilhada livremente, enquanto a chave privada deve ser mantida em sigilo. Cada membro da comunicação deve possuir seu próprio par de chaves. No próximo vídeo, será mostrado como implementar e analisar o funcionamento da encriptação assimétrica.

### Aula 03 - Implementando o código - Video 4

Nesta aula, aprendemos como utilizar a criptografia assimétrica em JavaScript utilizando o módulo crypto. O objetivo foi gerar um par de chaves (chave pública e chave privada) e utilizar essas chaves para criptografar e descriptografar informações de maneira segura. Foi mostrado como criar um arquivo para implementar o código, importar a função generateKeyPairSync do módulo crypto para gerar o par de chaves, e utilizar os métodos publicEncrypt e privateDecrypt para realizar a criptografia e descriptografia, respectivamente. Também foi explicado como executar o programa no terminal e exibir os dados criptografados e descriptografados.

> crypto.generateKeyPairSync( type, options)

- type (tipo): É do tipo string e deve incluir um ou mais dos seguintes algoritmos: ‘rsa’, ‘dsa’, ‘ec’, ‘ed25519’, ‘ed448’, ‘x25519’, ‘x448’, ou ‘dh’.

- options (opções): É do tipo objeto. Ele pode conter os parâmetros modulusLength; publicExponent; divisorLength; namedCurve; prime; primeLength; generator; groupName; publicKeyEncoding; privateKeyEncoding.

### Aula 03 - Para saber mais: PGP (Pretty Good Privacy)

Pretty Good Privacy (PGP), em português “privacidade muito boa”, é um sistema de criptografia utilizado para enviar e-mails criptografados e criptografar arquivos confidenciais. Desde sua invenção em 1991, por Phil Zimmermann, o PGP se tornou o padrão de fato para segurança de e-mail. Além de criptografar e descriptografar emails, o PGP também é utilizado para assinar mensagens para que o receptor possa verificar a identidade do remetente, assim como a integridade do seu conteúdo, tendo assim a comprovação de que arquivos ou e-mails não foram modificados por terceiros.

A criptografia PGP utiliza uma combinação de duas formas de criptografia: criptografia de chave simétrica e criptografia de chave pública, em conjunto com combinação serial de hashing e compressão de dados, e cada passo utiliza algum dos vários algoritmos suportados. PGP usa uma chave privada que deve ser mantida secreta e uma chave pública que o receptor e remetente têm que compartilhar quando trocam mensagens.  
[Detalhes aqui](https://cursos.alura.com.br/course/nodejs-criptografia-tokens-jwt/task/107371)

### Aula 03 Conclusão - Nessa aula, você aprendeu

Como transmitir informações de forma mais segura utilizando o conceito de encriptação: a cifra moderna;
Os conceitos de chaves compartilhadas, públicas e privada. Sendo as compartilhadas um sistema de criptografia que mantém a chave entre o emissor e receptor da mensagem, ou seja, a mesma chave é utilizada para encriptar e desencriptar a mensagem ou arquivo; Já a chave pública funciona em conjunto com a privada, e atua como uma assinatura digital, ela pode ser compartilhada; Por outro lado, a chave privada é mantida em segredo e utilizada para desencriptar as mensagens ou arquivos autenticados pela chave pública;
Como a encriptação simétrica e assimétrica usam essas chaves para decifrar as mensagens de forma prática e segura;
A implementar essas funcionalidades dentro do Node com o módulo crypto.

## Aula 04 - Assinatura e JWT

### Aula 04 - Assinatura - Video 1

Nesta aula, foi abordado o conceito de assinatura digital como uma forma de validar a autoria de um documento ou informação. A assinatura digital utiliza uma chave privada para gerar uma hash do documento, e a chave pública é utilizada para verificar se a assinatura é válida e se a autoria é legítima. A assinatura digital é importante para garantir que uma mensagem foi gerada pela pessoa esperada e evitar que terceiros se passem por ela ou que a mensagem seja interceptada e alterada. Na próxima aula, será mostrado como implementar as assinaturas digitais em código.

### Aula 04 - Implementando uma assinatura - Video 2

Nesta aula, o instrutor ensina como implementar a assinatura digital em um projeto utilizando o Node.js. Ele explica como criar as chaves pública e privada, utilizando o módulo crypto, e como utilizar as funções generateKeyPairSync, createSign e createVerify para facilitar a implementação das assinaturas. O instrutor também mostra como assinar um documento e como verificar a assinatura. Ao final, ele faz um teste em que o documento é alterado antes da verificação, mostrando que a assinatura não é validada.

### Aula 04 - Sessões e tokens - Video 3

Nesta aula, o professor aborda os conceitos de sessões e tokens e sua relação com a segurança em sistemas. Ele explica que uma sessão é a quantidade de tempo em que o usuário está autenticado e conectado a um serviço ou sistema. Em seguida, é apresentada uma versão simplificada do protocolo HTTP para ilustrar o funcionamento das sessões. O professor também fala sobre o uso de tokens como uma alternativa ao uso de IDs. Ele explica que um token é uma hash de uma determinada informação e é enviado de volta para o usuário. O usuário guarda o token e o envia de volta ao servidor em suas requisições. O servidor valida o token decifrando a informação contida nele. O professor ressalta que tanto as sessões com IDs quanto o uso de tokens possuem vantagens e desvantagens, e é necessário estudar cada caso para determinar qual abordagem é mais adequada.

### Aula 04 - Token JWT - Video 4

Nesta aula, o instrutor discute sobre o JSON Web Token (JWT), que é um padrão aberto para transmitir informações de forma segura entre duas partes. O JWT é composto por cabeçalho, payload e assinatura. O cabeçalho contém informações sobre o token e o algoritmo utilizado, o payload contém os dados transmitidos e a assinatura garante a segurança do token. O instrutor menciona o site jwt.io, onde é possível realizar testes, visualizar informações e encontrar bibliotecas para implementar o JWT. Ele destaca a importância da assinatura e mostra como alterações podem invalidar o token. No próximo vídeo, será feita a implementação do JWT com uma biblioteca do jwt.io.

O JWT (JSON Web Token) é um token que usa a anotação do JSON para armazenar as informações e guarda o dado de forma parecida com os Objetos no JavaScript.

[JSON Web Token](https://jwt.io/introduction)
"O JWT é um padrão aberto que define uma forma segura de transmitir informação entre duas partes como um objeto JSON. Essa informação pode ser verificada e confiada, pois foi assinada digitalmente."  
O corpo desse token decodificado vai ser constituído de três partes: cabeçalho (Header), dados (payload) e assinatura.

[Componentes do JWT](https://www.brunobrito.net.br/jose-jwt-jws-jwe-jwa-jwk-jwks/)
Site com informações detalhas sobre o JWT e suas variações

[JWT Debuger](https://jwt.io/#debugger-io)  
Plataforma para debug e testes de Arquivos JWT

[Token.dev](https://token.dev/)
Outra Plataforma para debug e testes de Arquivos JWT

### Aula 04 - Implementando o token - Video 5

Nesta aula, o instrutor ensina como utilizar o token JWT (JSON Web Token) em um projeto Node.js. Ele mostra como instalar a dependência do JWT, criar um arquivo package.json e importar o pacote JWT no arquivo token.js. Em seguida, ele explica como criar um token usando o método sign() do JWT, passando um objeto com os dados desejados e uma chave secreta. O instrutor também mostra como decodificar o token usando o método verify() do JWT, passando o token e a chave secreta. Ao executar o código, é possível observar o token gerado e os dados decodificados. O instrutor ressalta a importância de manter a chave secreta em segredo para garantir a segurança do token. Ele menciona que o campo iat é adicionado automaticamente ao token e fornece informações sobre outros campos sugeridos em um token JWT.

### Aula 04 Conclusão - Nessa aula, você aprendeu

- Como funcionam as assinaturas no contexto digital para garantir a autoria e integridade de uma mensagem;
- O que é uma sessão e algumas formas como elas são implementadas - os identificadores únicos ou tokens;
- O que são tokens e como eles são utilizados para autenticação ou transmissão de informação de forma segura;
- O que é o token JWT. Seus parâmetros, campos e usos;
- Como implementar uma assinatura com o Node e utilizar uma biblioteca para utilizar o token JWT.

## Aula 05 - Conhecendo alguns ataques

### Aula 05 - Algoritmos criptográficos - Video 1

Nesta aula, o instrutor fala sobre algoritmos criptográficos. Ele explica que eles são usados em funções como createHash('SHA256') e na criação de chaves. Existem vários algoritmos criptográficos, e a hash é apenas um tipo de transformação. O instrutor compara as hashes MD4 e SHA256, mostrando que mesmo tendo a mesma entrada, elas possuem saídas diferentes devido aos diferentes algoritmos criptográficos. O tamanho da hash pode variar de acordo com o algoritmo utilizado. O instrutor apresenta uma tabela com alguns algoritmos criptográficos da família SHA, mostrando o tamanho de saída, a segurança contra ataques de colisão e extensão de comprimento, e a data de publicação de cada algoritmo. Ele menciona que as vulnerabilidades não estão diretamente relacionadas ao algoritmo, mas sim à vulnerabilidade dos sistemas que podem ser desenvolvidos. Ele promete falar mais sobre essas vulnerabilidades e fazer algumas demonstrações no próximo vídeo. 🎃👻

### Aula 05 - Ataques criptográficos - Video 2

Nesta aula, o professor aborda diferentes tipos de ataques de vulnerabilidade em aplicações ou sistemas, com foco principalmente em ataques de autenticação. Os tipos de ataques mencionados são:

Ataque de força bruta: tentativa exaustiva de todas as combinações possíveis de uma senha para obter acesso a um sistema.
Ataque de dicionário: uso de uma lista de senhas comuns e fracas para tentar obter acesso a um sistema.
Ataque de rainbow table: utilização de uma lista de hashes de senhas conhecidas e fracas para tentar obter acesso a um sistema. Esse tipo de ataque é utilizado quando as senhas são armazenadas como hashes em vez de serem armazenadas em texto simples. No próximo vídeo, o professor irá demonstrar um código para visualizar como esses ataques funcionam. 🎃👻

### Aula 05 - Ataque de força bruta - Video 3

Nesta aula, o instrutor ensina como simular um ataque de força bruta em um sistema de autenticação utilizando JavaScript. É mostrado como criar um arquivo chamado "forcaBruta.js" e modificar o código do usuário para realizar o ataque. Também é mencionado que existem formas de se proteger contra esse tipo de ataque.

### Aula 05 - Ataque de dicionário - Video 4

Nesta aula, o instrutor demonstrou o ataque de dicionário em um código simulado. Foi criada uma lista de senhas comuns e o código percorreu essa lista, tentando autenticar-se com cada senha. Caso a autenticação fosse bem-sucedida, a senha correta era exibida na tela. O instrutor mencionou que as formas de mitigar esse tipo de ataque são semelhantes às soluções do ataque de força bruta, como limitar o número de tentativas de autenticação e ter uma política de senha que não permita senhas comuns. No próximo vídeo, será demonstrado o ataque de "rainbow table". 🎃👻

### Aula 05 - Ataque rainbow table - Video 5

Nesta aula, o instrutor explica como implementar um ataque de "rainbow table". Ele mostra um código em que são definidas as hashes vazadas e como criar uma rainbow table com as senhas comuns. Em seguida, é mostrado como percorrer as hashes vazadas e compará-las com as da rainbow table para descobrir as senhas correspondentes. O instrutor menciona que a solução para esse tipo de ataque é utilizar uma hash com sal e ter mais aspectos que dificultem a descoberta da senha. Na próxima aula, serão abordados os fatores humanos e as políticas de senha.

### Aula 05 Conclusão - Nessa aula, você aprendeu

O que são exatamente os algoritmos criptográficos e quais parâmetros existem em cada um;
Alguns ataques (Rainbow Table, Força Bruta e Dicionário) e as vulnerabilidades que podemos estar sujeitos e devemos ter atenção enquanto implementamos soluções;
Quais recursos e atitudes podemos utilizar para mitigar problemas relacionados à nossa infraestrutura tecnológica.

## Aula 06 - Considerando a parte humana

### Aula 06 - Fatores humanos - Video 1

Nesta aula, o professor destaca a importância dos fatores humanos no desenvolvimento de aplicações e na segurança das mesmas. Ele menciona que, mesmo com sistemas técnicos seguros, é fundamental que os usuários e colaboradores adotem boas práticas para evitar brechas de segurança. São mencionados exemplos de más práticas, como o compartilhamento de credenciais de acesso entre usuários. O professor ressalta que identificar a origem do problema não serve para culpar, mas sim para investigar e lidar com a situação da melhor forma possível. Além disso, ele menciona que algumas más práticas podem ser reflexo de políticas de segurança mal implementadas. No próximo vídeo, será abordado o equilíbrio entre conveniência e segurança nessas situações.

### Aula 06 - Determinando requisitos - Video 2

Nesta aula, foi abordado o equilíbrio entre segurança e conveniência na autenticação de sistemas com múltiplos agentes e usuários. Foram discutidos os requisitos de senha, como tamanho, presença de letras maiúsculas e minúsculas, números e caracteres especiais, questionando sua necessidade e eficácia. Também foi destacada a importância de considerar a facilidade de memorização e a segurança das senhas. Além disso, foi mencionado que nem sempre as escolhas feitas em sistemas existentes garantem a máxima segurança criptográfica, sendo influenciadas pela expectativa dos usuários e sensação de segurança ao inserir uma senha. A próxima aula abordará as dependências e bibliotecas utilizadas em sistemas de segurança.

### Aula 06 - Dependências do projeto - Video 3

Nesta aula, o palestrante discute a importância de entender as dependências de código em um projeto, utilizando como exemplo a biblioteca JSON Web Token (JWT). Ele destaca a necessidade de verificar o código-fonte, as atualizações e as informações sobre os mantenedores das dependências, a fim de tomar decisões informadas e contribuir com as iniciativas. O palestrante menciona que o site do NPM possui informações sobre o pacote do JSON Web Token, incluindo o repositório onde o código está implementado. Ele ressalta que é possível verificar como foram implementados os códigos, já que a maioria dos códigos no site são abertos. Além disso, o palestrante menciona que o JSON Web Token é uma dependência para outros pacotes, e que é importante considerar as atualizações e como elas podem afetar a compatibilidade com o código existente. Ele destaca que alterações em dependências podem causar problemas em cascata. Por fim, o palestrante enfatiza a importância de saber em quem ou em que estamos dependendo, seja uma pessoa ou uma organização, e menciona que o JSON Web Token é mantido pela organização "auth0", trazendo mais confiança ao utilizá-lo como dependência.

### Aula 06 Conclusão - Nessa aula, você aprendeu

Fatores humanos e quais considerações devemos levar em conta quando estamos desenvolvendo sistemas;
Como escolher requisitos de forma crítica e ponderar sobre as decisões de segurança;
Os cuidados que devemos tomar com as dependências que utilizamos e tentar conhecer os riscos associados.
