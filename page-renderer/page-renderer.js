const fs = require('fs');

const pageRenderer = {
    directory: '',
    loadFile: function(file){
        return fs.readFileSync('./public/' + this.directory + file).toString();
    },
    renderPage: function(page, replacements){
        for(key in replacements){
            let replacement = replacements[key];
            if(replacement[0] === '/'){
                replacement = this.loadFile(replacement);
            }
            page = page.replace('%%' + key + '%%', replacement);
        }
        return page;
    }
}

module.exports = pageRenderer;