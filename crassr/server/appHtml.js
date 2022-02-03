
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store/index';
import React from 'react';
import { renderRoutes } from 'react-router-config';

const render = (req, routes) => {
    const context = { serverRender: true }
    const appHtml = ReactDOMServer.renderToString(
        < Provider store={store}>
            <StaticRouter location={req.url} context={context}>
                {renderRoutes(routes)}
            </StaticRouter>
        </ Provider>
    );

    return appHtml;
}

export default render;