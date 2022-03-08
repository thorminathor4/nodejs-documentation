const pageRenderer = require('./page-renderer.js');
const pageTemplate = require('./template.js');

pageRenderer.directory = 'pages/javascript';

const javascriptStyles = '/javascript-styles.html'

const variableDeclaration = pageRenderer.renderPage(pageTemplate, {
    TITLE: 'Variable Declaration - Node.js',
    STYLES: javascriptStyles,
    CONTENT: '/variable-declaration.html'
});

const typeCoercion = pageRenderer.renderPage(pageTemplate, {
    TITLE: 'Type Coercion - Node.js',
    STYLES: javascriptStyles,
    CONTENT: '/type-coercion.html'
});

const arrayManipulation = pageRenderer.renderPage(pageTemplate, {
    TITLE: 'Array Manipulation - Node.js',
    STYLES: javascriptStyles,
    CONTENT: '/array-manipulation.html'
});

const destructuring = pageRenderer.renderPage(pageTemplate, {
    TITLE: 'Destructuring - Node.js',
    STYLES: javascriptStyles,
    CONTENT: '/destructuring.html'
});

const incrementDecrement = pageRenderer.renderPage(pageTemplate, {
    TITLE: 'Increment & Decrement Operator - Node.js',
    STYLES: javascriptStyles,
    CONTENT: '/increment-decrement.html'
});

const spreadOperator = pageRenderer.renderPage(pageTemplate, {
    TITLE: 'Spread Operator - Node.js',
    STYLES: javascriptStyles,
    CONTENT: '/spread-operator.html'
});

module.exports = {
    variableDeclaration,
    typeCoercion,
    arrayManipulation,
    destructuring,
    incrementDecrement,
    spreadOperator
}