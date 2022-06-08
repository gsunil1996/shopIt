import React from 'react';
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from './components/Home';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="container container-fluid">
          <Route path="/" component={Home} exact />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App
