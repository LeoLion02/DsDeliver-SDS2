import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Orders from "./Orders/Index";
import Home from "./Home/index";
import Navbar from "./Navbar/Index";


function Routes() {
      return  (
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