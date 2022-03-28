import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePageContainer from 'components/Homepage/homepage';
import { getHomepageActions } from "../apiHandler/homepageApi";

import Path1Container from "components/Path1Component/path1"
import Path2Container from "components/Path2Component/path2"
import NotFoundContainer from "components/NotFound/notFound"

const DesktopAppRouter = () => {
    console.log("desktop app router")
    return (
    <div>
        <Switch>
                <Route path="/" exact="true" render={(props) => <HomePageContainer {...props} />} />
                <Route path="/path-1" exact="true" render={(props) => <Path1Container {...props} />} />
                <Route path="/path-2" exact="true" render={(props) => <Path2Container {...props} />} />
                <Route path="*" exact="true" render={(props) => <NotFoundContainer {...props} />} />
        </Switch>
    </div>
)};


export default DesktopAppRouter;