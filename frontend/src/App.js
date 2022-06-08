import React from 'react';
import "./App.css";
import Home from './components/Home';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';


const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App
