
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store/index';
import React from 'react';
import App from '../src/App'

const statusHandler = (req, routes) => {
    const context = {}
    
    ReactDOMServer.renderToString(
        < Provider store={store}>
            <StaticRouter location={req.url} context={context}>
                <App></App>
            </StaticRouter>
        </ Provider>
    );

    console.log("Server Context", context);

    return context.status;
}

export default statusHandler;