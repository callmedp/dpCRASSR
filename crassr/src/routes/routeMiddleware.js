import { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import getCookieElement from "utils/cookie";

const RouteMiddleware = (props) => {

    const { route : { path, signed, exact, Component} } = props;
    const token = getCookieElement('token');
 
    return (
            ((signed && token) || !signed) ?  
                <Route path={path} exact={exact} render={(props) => <Component {...props}  />} /> :
                <Route render={() => <div>You cannot have access to the content!</div>} />
    )
}

export default RouteMiddleware;