import './App.css';
import './scss/main.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

import React from 'react';
import PageSide from './components/PageSide';
import Catalog from './pages/Catalog';
import Product from './pages/Product';
import InfoMenu from './components/InfoMenu';
import Checkout from './pages/Checkout';
function App() {
  return (
    <div className="App">
      <Header />

      <main className="page">
        <div className="page__container _container">
          <PageSide />
          <Product />
        </div>
        <InfoMenu />
      </main>

      <Footer />
    </div>
  );
}

export default App;
