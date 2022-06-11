import React, { useEffect } from 'react';
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from './components/Home';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
import ProductDetails from './components/product/ProductDetails';
import Login from './components/user/Login';
import Register from './components/user/Register';

import { loadUser } from "./redux/actions/userActions";
import store from "./redux/store";
import Profile from './components/user/Profile';


const App = () => {

  useEffect(() => {
    store.dispatch(loadUser());
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="container container-fluid">
          <Route path="/" component={Home} exact />
          <Route path="/search/:keyword" component={Home} />
          <Route path="/product/:id" component={ProductDetails} exact />

          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/me" component={Profile} exact />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App
