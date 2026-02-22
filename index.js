import express from "express";

const host = 'localhost';
const porta = 3000;

const server = express(); // oferecendo ao desenvolvedor um servidor HTTP em modo Express

server.use(express.static('public')); // Permite que o Navegador acesse os arquivos css
// rota principal
server.get('/', (requisicao, resposta) => {
    resposta.send(`
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8"> 
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Primeiro Programa para a internet usando node + express</title>
    </head>
    <body>
        <h1>Primeiro Programa para a internet usando node + express</h1>
        <h2>Bem vindo a Pagina inicial do meu servidor express</h2>
        <p>Para acessar a hora atual, clique <a href="/horaAtual">aqui</a></p>
        <p>Para acessar a tabela, clique <a href="/tabela">aqui</a></p>
        
    </body>
    </html>
    `);
});
server.get('/horaAtual', (requisicao, resposta) => {
    const dataAtual = new Date();
    const horaAtual = dataAtual.getHours() + ":" + dataAtual.getMinutes() + ":" + dataAtual.getSeconds();
    resposta.send(`
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8"> 
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hora Atual</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                
                color: red;
                text-align: center;
                padding: 250px;

        </style>
    </head>
    <body>
        <h1>Hora Atual</h1>
        <h2>A hora atual é: ${horaAtual}</h2>
    </body>
    </html>
    `);
});
server.get('/tabela', (requisicao, resposta) => {
    resposta.send(`
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tabelas</title>
    <style>
        table {
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid black;
            padding: 8px;
            text-align: center;
        }
        .Titulo {
            background-color: black;
            color: white;
        }
        .Titulo2 {
            background-color: lightgray;
        }
        .Titulo3 {
            background-color: lightblue;
        }
        .Titulo4 {
            background-color: lightgreen;
        }
            
    </style>

</head>
<body>

<table border="2">

    <thead>
        <tr class="Titulo">
            <th>Faixa Etária</th>
            <th>Sexo</th>
            <th>Reajuste</th>
            <th>Desconto<br>
            (Até 10 anos na Empresa)
            </th>
            <th>Acrescimo<br>
            (Mais de 10 anos na Empresa)
            </th>
        </tr>
  <tbody>
    <tr class="Titulo2">
        <td rowspan="2">18 - 39</td>
        <td>M</td>
        <td>10%</td>
        <td>10,00</td>
        <td>17,00</td>
    </tr>

    <tr class="Titulo2">
        <td>F</td>
        <td>8%</td>
        <td>11,00</td>
        <td>16,00</td>
    </tr>
</tbody>
<tbody>
    <tr class="Titulo3">
        <td rowspan="2">40 - 69</td>
        <td>M</td>
        <td>8%</td>
        <td>5,00</td>
        <td>15,00</td>
    </tr>

    <tr class="Titulo3">
        <td>F</td>
        <td>10%</td>
        <td>7,00</td>
        <td>14,00</td>
    </tr>
</tbody>
<tbody>
    <tr class="Titulo4">
        <td rowspan="2">70 - 99</td>
        <td>M</td>
        <td>15%</td>
        <td>15,00</td>
        <td>13,00</td>
    </tr>
    <tr class="Titulo4">
        <td>F</td>
        <td>17%</td>
        <td>17,00</td>
        <td>12,00</td>
    </tr>
</tbody>
</body>
</html>
`);
});

server.listen(porta, host, () => {
  console.log(`Servidor rodando em http://${host}:${porta}`);
});