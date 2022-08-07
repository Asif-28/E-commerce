// import Product from "./pages/Product";

import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Login";
import Product from "./pages/Product";

import Navbar from "./components/Navbar";
import ProductList from "./pages/ProductList";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Redirect,
  Navigate,
} from "react-router-dom";
const App = () => {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </Router>
  );
};

export default App;
