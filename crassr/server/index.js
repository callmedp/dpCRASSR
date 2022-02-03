const Helmet = require('react-helmet').Helmet;
const createIsomorphicEnv = require('./browserEnv')
const express = require('express');
const PORT = process.env.PORT || 7789;
const app = express();
const serverRoutes = require('./routes');
const routes = require('routes/index').routes;
const matchRoutes = require('react-router-config').matchRoutes;
const render = require('./appHtml').default;
const store = require('store/index').default;
const fetchApiData = require('./apiFetch').default;
const jsdom = require("jsdom");
const path = require('path')

createIsomorphicEnv()

app.get(serverRoutes, (req, res) => {

    const branch = matchRoutes(routes, req.path) || [];

    branch.forEach(async ({ route, match }) => {
        if (route && route.actionGroup) {
            try {
                await new Promise((resolve, reject) => fetchApiData(store, match.params, route.actionGroup, resolve, reject));
            }
            catch (error) {

            }

            const appContent = render(req, routes);
            const preloadedState = store.getState();

            console.log("app Html", appContent);
            console.log("preloaded state", preloadedState);
            const { JSDOM } = jsdom;
            const helmet = Helmet.renderStatic();
    
            JSDOM.fromFile("./build/index.html").then(dom => {
                dom.window.document.getElementById("root").innerHTML = appContent;
                dom.window.document.head.insertAdjacentHTML( 'beforeend', helmet.meta.toString())
                console.log("dom content", dom.serialize())
                return res.send(dom.serialize());
            });
        }
    });
})


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
