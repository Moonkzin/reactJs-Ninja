'use strict'

const path = require('path')


/*
Configuração apra desenvolvimento:
Passando a entrada dessa forma, faz com que funcione em qualquer sistema operacional,
soculcionando os problemas de barras, etc.
O output, cria um arquivo na raiz, chamada de "dist", neste caso.
Porem, para o desenvolvimento, deve-se apssar o "statc", neste caso,
pois o próprio cria um arquivo temporário, para ser utilizado em desenvolvimento.
depois, para criar o arquivo final, basta usar o comando webpack, no terminal.
*/
module.exports = {
    entry: path.join(__dirname, 'src', 'index'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    }
}