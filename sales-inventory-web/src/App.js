import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Index from './components/index';
import AddToShoppingCartComponent from './components/addToShoppingCartComponent';
import DeliveryDashboardComponent from "./components/DeliveryDashboardComponent";
import AddDeliveryDetailsComponent from "./components/AddDeliveryDetailsComponent";
function App() {
    return (
        <Router>
            <div>
                <Route path="/" exact
                    component={Index}></Route>
                <Route path="/make-order" exact
                    component={AddToShoppingCartComponent}></Route>
                <Route path="/delivery" exact
                       component={DeliveryDashboardComponent}></Route>
                <Route path="/addDelivery" exact
                       component={AddDeliveryDetailsComponent}></Route>
            </div>
        </Router>
    );
}

export default App;
