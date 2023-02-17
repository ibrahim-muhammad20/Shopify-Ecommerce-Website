
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import { BrowserRouter as Router, Route, Routes,Switch, Link,  Navigate } from 'react-router-dom'
import React,{useState,useEffect} from "react";
import { useContext } from "react";
import { Context } from "./context/Context";
import Pay from "./components/Stripe.js/Pay";
import Successful from "./components/Stripe.js/Successful";
import Navbar from "./components/Navbar";
const App = () => {
  const { user } = useContext(Context);
  
  return(

    <Router>
      <Routes>
        <Route exact path="/" element={<Home/> }></Route>
        <Route exact path="/home" element={<Home/> }></Route>
        <Route exact path="/products/:category" element={!user?< Navigate to="/login"/>:<ProductList/> }></Route>
        <Route  path="/product/:id" element={!user?< Navigate to="/login"/>:<Product/> }></Route>
        <Route exact path="/login" element={<Login/> }></Route>
        <Route exact path="/cart" element={!user?< Navigate to="/"/>:<Cart/> }></Route>
        <Route exact path="/register" element={<Register/> }></Route>
      </Routes>
    </Router>
    
  //  <Home/>
  // <ProductList/>
  // <Product/>
  // <Register/>
  // <Login/>
  
  )
};

export default App;