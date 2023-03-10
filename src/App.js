import Register from "./components/Register";
import ipConfig from "./ipConfig.json";
import {BrowserRouter, Route, Switch, } from "react-router-dom";
import Login from "./components/Login";
import Products from "./components/Products";
import Checkout from "./components/Checkout"

export const config = {
  endpoint: `http://${ipConfig.workspaceIp}:8082/api/v1`,
};

function App() {
  return (
    <div className="App">
      {/* TODO: CRIO_TASK_MODULE_LOGIN - To add configure routes and their mapping */}
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Products />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
