const express = require('express');
const fs = require('fs');
const path = require('path');
const React  = require('react');
const ReactDOMServer  = require('react-dom/server');
const {ServerStyleSheet} = require('styled-components') ; 

const apiRouter = new express.Router();

const App = require('../reactapp/src/App').default;

apiRouter.get('/', function(req, res, next) {
    fs.readFile(path.resolve('./reactApp/public/index.html'), 'utf8', (err, data) => {
        const sheet = new ServerStyleSheet();
        const html = ReactDOMServer.renderToString(sheet.collectStyles(<App />));
        const styles = sheet.getStyleTags();
        const page = data.replace(
            '<div id="root"></div>',
            `<div id="root">${html}</div>`
        ).replace(
            '</head>',
            `${styles}</head>`
        );

        return res.send(page);
    })
});

module.exports = apiRouter;