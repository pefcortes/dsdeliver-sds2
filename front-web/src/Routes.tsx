import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home/Index";
import Orders from "./Orders/Index";
import Navbar from "./Navbar/Index";

function Routes() {
    return (
    <BrowserRouter>
    <Navbar />
    <Switch>
        <Route path="/orders">
            <Orders />
        </Route>
        <Route path="/">
            <Home />
        </Route>
    </Switch>
    </BrowserRouter>
    )
}

export default Routes;