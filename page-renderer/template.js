const fs = require('fs');
const pageRenderer = require('./page-renderer.js');

pageRenderer.directory = 'components';

const headerTemplate = pageRenderer.loadFile('/header/header.html');
const header = pageRenderer.renderPage(headerTemplate, {NAVBAR: '/navbar/navbar.html'});

pageRenderer.directory = 'pages/template';

const pageTemplateTemplate = pageRenderer.loadFile('/template.html')
const pageTemplate = pageRenderer.renderPage(pageTemplateTemplate, {HEADER: header});

module.exports = pageTemplate;