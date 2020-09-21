# Truffle-Solidity-Ethereum
Projeto desenvolvimento Smart Contracts Framewrok Truffle, Solidity - Ethereum

* Clone o projeto para uma pasta de sua escolha colque no terminal

* `git clone https://github.com/fcd007/Truffle-Solidity-Ethereum.git`
* `cd Truffle-Solidity-Ethereum`

* Inicializar o projeto Truffle no terminal dentro da pasta do projeto clonado
* `truffle init`

* Realizando o deploy do projeto - smart contract truffle
* Entre com o comando `truffle deploy`

*Observe o aplicativo Truffle: os blocos e smart contracts*

* Adicione a configuração Truffle da rede local desenvolvimento dentro do arquivo truffle.config.js

`development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 7545, // Standard Ethereum port (default: none)
      network_id: "*", // Any network (default: none)
    },`
    
* Caso não tenha certeza da porta padrão de desenvolvimento, execute o aplicativo do Truffle
navegue até as configurações, entre em SERVER - observe o campo port number.

* Realizando o deploy --reset- configurar rede local no deploy
* Entre com o comando `truffle deploy --reset`

* Verificando as configurações do deploy --reset- rede local no deploy
* Entre com o comando `truffle networks`
