import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useThemeHook } from './GlobalComponents/ThemeProvider';
import Header from './components/Header';
//import { Router } from "@reach/router";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//Pages
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import ProductDetails from "./Pages/ProductDetails";
import SignIn from "./Pages/SignIn";
import Register from "./Pages/Register";
import MyAccount from "./Pages/MyAccount";


function App() {
  const [theme] = useThemeHook();
  return (
    <main className={theme? 'bg-black': 'bg-light-2'} style={{ height: '100vh', overflowY: 'auto'}}>
      <Header/>
      {/*<Router>
        <Home path="/" />
        <MyAccount path="my-account" />
        <SignIn path="sign-in"/>
        <Register path="register"/>
        <ProductDetails path="product-details/:productId"/>
        <Cart path="/cart" />
      </Router>*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product-details/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </main>
  );
}

export default App;
