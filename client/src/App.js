import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavBar";
import Electronics from "./pages/Electronics";
import Cart from "./pages/Cart";
import Signup from "./pages/Signup";
import Login from "./pages/Login";


function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Login} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/Electronics" component={Electronics} />
        <Route exact path="/Cart" component={Cart} />
      </div>
    </Router>
  );
}
 
export default App;
