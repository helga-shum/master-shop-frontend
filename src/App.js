import './App.css';
import './scss/main.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import React from 'react';

import Catalog from './pages/Catalog';
import Product from './pages/Product';
import InfoMenu from './components/InfoMenu';
import Checkout from './pages/Checkout';
function App() {
  const [searchValue, setSearchValue] = React.useState('');
  return (
    <div className="App">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <main className="page">
        <div className="page__container _container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/catalog"
              element={<Catalog searchValue={searchValue} setSearchValue={setSearchValue} />}
            />
            <Route path="/product" element={<Product />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
        <InfoMenu />
      </main>

      <Footer />
    </div>
  );
}

export default App;
