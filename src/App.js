
import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import Home from "./pages/Home";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import ProductDetailPage from "./pages/ProductDetailsPage";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Routes>
                        <Route
                            path="/"
                            element={<Home />}
                        ></Route>
                        <Route
                            path="/LoginPage"
                            element={<LoginPage />}
                        ></Route>
                        <Route
                            path="/SignupPage"
                            element={<SignupPage />}
                        ></Route>
                        <Route path="/CartPage"
                            element={<CartPage />}>
                        </Route>
                        <Route path="/Checkout"
                        element={<Checkout />}>

                        </Route>
                        <Route path="/product-detail"
                        element={<ProductDetailPage />}>

                        </Route>
                    </Routes>
                </div>
            </Router>
        );
    }
}

export default App;