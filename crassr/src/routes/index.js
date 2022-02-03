import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePageContainer from 'components/Homepage/homepage';
import { getHomepageActions } from "../apiHandler/homepageApi";
import RouteMiddleware from "./routeMiddleware"

const DesktopAppRouter = () => {
    console.log("desktop app router")
    return (
    <div>
        <Switch>
            {routes.map((route, i) => <RouteMiddleware key = {i} route = {route} />
            )}
        </Switch>
    </div>
)};

export const routes = [
    {
        path: '/',
        Component: HomePageContainer,
        actionGroup: getHomepageActions,
        exact: true,
        signed: true
    }
]

export default DesktopAppRouter;