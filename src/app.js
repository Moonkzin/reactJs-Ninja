'use strict'

/*
Não esquecer de dar o require, dessa forma será criado um h1, com o texto 'Titulo',
e exportando essa função
*/
var React = require('react')

var Title = React.createClass({
    render: function (){
        return React.createElement('h1', null, 'Título')
    }
})

module.exports = Title