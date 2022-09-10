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
export const SearchContext = React.createContext('');
function App() {
  const [searchValue, setSearchValue] = React.useState('');
  return (
    <div className="App">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <main className="page">
          <div className="page__container _container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route exact path="/catalog/:id" element={<Product />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </div>
          <InfoMenu />
        </main>

        <Footer />
      </SearchContext.Provider>
    </div>
  );
}

export default App;
