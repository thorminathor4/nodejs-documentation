const pageRenderer = require('./page-renderer.js');
const pageTemplate = require('./template.js');

pageRenderer.directory = 'pages/express';

const expressStyles = pageRenderer.loadFile('/express-styles.html');

const createAServer = pageRenderer.renderPage(pageTemplate, {
    TITLE: 'Create a Server - Node.js',
    STYLES: expressStyles,
    CONTENT: '/create-a-server.html'
});

const createARoute = pageRenderer.renderPage(pageTemplate, {
    TITLE: 'Create an Endpoint - Node.js',
    STYLES: expressStyles,
    CONTENT: '/create-a-route.html'
});

const sendAFile = pageRenderer.renderPage(pageTemplate, {
    TITLE: 'Send A File - Node.js',
    STYLES: expressStyles,
    CONTENT: '/send-a-file.html'
});

const usePathVariable = pageRenderer.renderPage(pageTemplate, {
    TITLE: 'Use Path Variable - Node.js',
    STYLES: expressStyles,
    CONTENT: '/use-path-variable.html'
});

const useQueryString = pageRenderer.renderPage(pageTemplate, {
    TITLE: 'Use Query String - Node.js',
    STYLES: expressStyles,
    CONTENT: '/use-query-string.html'
});

const useRequestBody = pageRenderer.renderPage(pageTemplate, {
    TITLE: 'Use Request Body - Node.js',
    STYLES: expressStyles,
    CONTENT: '/use-request-body.html'
});

const serverSideRendering = pageRenderer.renderPage(pageTemplate, {
    TITLE: 'Server Side Rendering - Node.js',
    STYLES: expressStyles,
    CONTENT: '/server-side-rendering.html'
});

const router = pageRenderer.renderPage(pageTemplate, {
    TITLE: 'Router - Node.js',
    STYLES: expressStyles,
    CONTENT: '/router.html'
});

const serverSideRedirection = pageRenderer.renderPage(pageTemplate, {
    TITLE: 'Server Side Redirection - Node.js',
    STYLES: expressStyles,
    CONTENT: '/server-side-redirection.html'
});

module.exports = {
    createAServer,
    createARoute,
    sendAFile,
    usePathVariable,
    useQueryString,
    useRequestBody,
    serverSideRendering,
    router,
    serverSideRedirection
}