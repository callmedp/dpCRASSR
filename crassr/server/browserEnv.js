const jsdom = require("jsdom");


module.exports = function() {
    const { JSDOM } = jsdom;
    const { window } = new JSDOM(``, {
        url: "https://extramarks.com/",
    })
    const { document, navigator } = window
 
    global.document = document
    global.window = window
    global.navigator = navigator
    require('sessionstorage-polyfill')
    require('localstorage-polyfill')
}