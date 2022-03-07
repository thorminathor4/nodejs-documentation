const pageRenderer = require('./page-renderer.js');
const pageTemplate = require('./template.js');

pageRenderer.directory = 'pages/node-js';

const nodeJsStyles = pageRenderer.loadFile('/node-js-styles.html');

const basicsOfNodeJs = pageRenderer.renderPage(pageTemplate, {
    TITLE: 'What is Node.js - Node.js',
    STYLES: nodeJsStyles,
    CONTENT: '/basics-of-nodejs.html'
});

const importingExportingModules = pageRenderer.renderPage(pageTemplate, {
    TITLE: 'Using Modules - Node.js',
    STYLES: nodeJsStyles,
    CONTENT: '/importing-exporting-modules.html'
});

const fileSystem = pageRenderer.renderPage(pageTemplate, {
    TITLE: 'File System - Node.js',
    STYLES: nodeJsStyles,
    CONTENT: '/file-system.html'
});

const npmAndProjects = pageRenderer.renderPage(pageTemplate, {
    TITLE: 'NPM & Projects - Node.js',
    STYLES: nodeJsStyles,
    CONTENT: '/npm-and-projects.html'
});

const nodemon = pageRenderer.renderPage(pageTemplate, {
    TITLE: 'Nodemon - Node.js',
    STYLES: nodeJsStyles,
    CONTENT: '/nodemon.html'
});

const useEnvironmentVariables = pageRenderer.renderPage(pageTemplate, {
    TITLE: 'Use Environment Variables - Node.js',
    STYLES: nodeJsStyles,
    CONTENT: '/use-environment-variables.html'
});

module.exports = {
    basicsOfNodeJs,
    importingExportingModules,
    fileSystem,
    npmAndProjects,
    nodemon,
    useEnvironmentVariables
}