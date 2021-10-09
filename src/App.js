import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Bootstrap Components/Header";
import Home from "./Components/Home";
import About from "./Pages/About";
import { Assignment } from "./Pages/Assignment";
import Categories from "./Pages/Categories";
import Offers from "./Pages/Offers";
import Care from "./Pages/Care";
import Cart from "./Pages/Cart/Cart";





function App() {
  return (
    <>
    <Router>

    <Switch>

    <Route path="/ecommerce-shopping-cart" exact><Home/></Route> 
    <Route path="/offers" exact><Offers/></Route> 
    <Route path="/categories" exact><Categories/></Route> 
    <Route path="/about-us" exact><About/></Route> 
    {/* <Route path="/assignment" exact><Assignment/></Route>  */}
    <Route path="/cart" exact><Cart/></Route> 
    <Route path="/help" exact><Care/> </Route>

    </Switch> 
    


    
    </Router>
    </>
  );
}

export default App;
