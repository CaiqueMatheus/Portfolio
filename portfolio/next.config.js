// next.config.js 
const withSass = require ('@zeit/next-sass') 
module.exports = withSass({
    /* opções de configuração aqui */ 
    cssModules: true
})