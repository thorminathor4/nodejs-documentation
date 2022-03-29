const router = require("express").Router();

const nodeJsPages = require("../page-renderer/node-js-pages.js");
const javascriptPages = require("../page-renderer/javascript-pages.js");
const expressPages = require("../page-renderer/express-pages.js");
const otherPages = require("../page-renderer/other-pages.js");

router.get('/', (req, res) => res.send(otherPages.frontpage));

router.get('/basics-of-nodejs', (req, res) => res.send(nodeJsPages.basicsOfNodeJs));
router.get('/importing-exporting-modules', (req, res) => res.send(nodeJsPages.importingExportingModules));
router.get('/file-system', (req, res) => res.send(nodeJsPages.fileSystem));
router.get('/npm-and-projects', (req, res) => res.send(nodeJsPages.npmAndProjects));
router.get('/nodemon', (req, res) => res.send(nodeJsPages.nodemon));
router.get('/use-environment-variables', (req, res) => res.send(nodeJsPages.useEnvironmentVariables));
router.get('/cross-environment', (req, res) => res.send(nodeJsPages.crossEnvironment));

router.get('/variable-declaration', (req, res) => res.send(javascriptPages.variableDeclaration));
router.get('/type-coercion', (req, res) => res.send(javascriptPages.typeCoercion));
router.get('/array-manipulation', (req, res) => res.send(javascriptPages.arrayManipulation));
router.get('/destructuring', (req, res) => res.send(javascriptPages.destructuring));
router.get('/increment-decrement', (req, res) => res.send(javascriptPages.incrementDecrement));
router.get('/spread-operator', (req, res) => res.send(javascriptPages.spreadOperator));

router.get('/create-a-server', (req, res) => res.send(expressPages.createAServer));
router.get('/create-a-route', (req, res) => res.send(expressPages.createARoute));
router.get('/send-a-file', (req, res) => res.send(expressPages.sendAFile));
router.get('/path-variable', (req, res) => res.send(expressPages.usePathVariable));
router.get('/query-string', (req, res) => res.send(expressPages.useQueryString));
router.get('/request-body', (req, res) => res.send(expressPages.useRequestBody));
router.get('/server-side-rendering', (req, res) => res.send(expressPages.serverSideRendering));
router.get('/router', (req, res) => res.send(expressPages.router));
router.get('/redirection', (req, res) => res.send(expressPages.serverSideRedirection));

router.get('/REST-API', (req, res) => res.send(otherPages.REST_API));
router.get('/node-vs-browser', (req, res) => res.send(otherPages.nodeVsBrowser));

module.exports = router;