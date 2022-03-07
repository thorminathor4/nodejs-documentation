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

const functionalIteration = pageRenderer.renderPage(pageTemplate, {
    TITLE: 'Functional Iteration - Node.js',
    STYLES: javascriptStyles,
    CONTENT: '/functional-iteration.html'
});

const destructuring = pageRenderer.renderPage(pageTemplate, {
    TITLE: 'Destructuring - Node.js',
    STYLES: javascriptStyles,
    CONTENT: '/destructuring.html'
});

module.exports = {
    variableDeclaration,
    typeCoercion,
    functionalIteration,
    destructuring
}