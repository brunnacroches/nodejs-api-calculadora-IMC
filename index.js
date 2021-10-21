const express = require('express');                 // importamos o express
const app = express();                              // importamos o express

const calculadoraIMC = require('./calculadoraIMC'); // importamos a nossa camada de servico e atribuimos a constante calc 

app.get('/', (req, res) => {                        // aqui comeca o metodo get, a parte central do projeto 
    let peso = req.query.peso;                      // aqui definimos a variavel peso atribuindo a elas valores vindos do front-end
    let altura = req.query.altura;                  // aqui definimos a variavel peso atribuindo a elas valores vindos do front-end

    let imc = calculadoraIMC.efetuarCalculoIMC(peso, altura); // chamamos a funcao efetuarCal... atraves da constante caclulaImc..
    //e passamos os valores de peso e altura para a funcao 
    // a funcao retorna o resultado do calculo do IMC para a variavel imc a qual esta atribuida ( LET IMC )

    res.json({imc: imc}); // para finalizar o metdo get enviamos uma resposta de volta ao front-end com o IMC formatado em JSON
});

app.listen(8080 , () => {  // finalizamos a nossa CAMADA REST temos o metodo LISTEN. Ele e responsavel por escutar todas as requisicoes HTTP feitas a nossa API
    let data = new Date();
    console.log('Servidor node iniciado em: ' + data);
});