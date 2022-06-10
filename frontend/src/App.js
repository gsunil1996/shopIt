import React from 'react';
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from './components/Home';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
import ProductDetails from './components/product/ProductDetails';
import Login from './components/user/Login';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="container container-fluid">
          <Route path="/" component={Home} exact />
          <Route path="/search/:keyword" component={Home} />
          <Route path="/product/:id" component={ProductDetails} exact />

          <Route path="/login" component={Login} />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App
