'use trict'

/*
Não esquecer de dar o require nas classes necessárias.
o ReactDOM.Render, serve para fazer aparecer na tela
e virá dentro da div que tenha o data-js="app"
usando reactDOM
*/

var Title = require('./app')
var React = require('react')
var ReactDOM = require('react-dom')

console.log('webpack está funcionando!!!!!!!')


ReactDOM.render(
    React.createElement(Title),
    document.querySelector('[data-js="app"]')
)