const pageRenderer = require('./page-renderer.js');
const pageTemplate = require('./template.js');

pageRenderer.directory = 'pages';

const frontpage = pageRenderer.renderPage(pageTemplate, {
    TITLE: 'Node.js Documentation',
    STYLES: '/frontpage/frontpage-styles.html',
    CONTENT: '/frontpage/frontpage.html'
});

const REST_API = pageRenderer.renderPage(pageTemplate, {
    TITLE: 'REST API - Node.js',
    STYLES: '/REST-API/REST-API-styles.html',
    CONTENT: '/REST-API/REST-API.html'
});

const nodeVsBrowser = pageRenderer.renderPage(pageTemplate, {
    TITLE: 'Node.js vs A Browser',
    STYLES: '/bonus/bonus-styles.html',
    CONTENT: '/bonus/node-vs-browser.html'
});

console.log('Importing Page Builder');
module.exports = {
    frontpage,
    REST_API,
    nodeVsBrowser
}