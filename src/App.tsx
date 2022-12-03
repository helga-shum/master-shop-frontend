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
import { Registration } from './pages/Registration/Registration';
import { Login } from './pages/Login/Login';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthMe, selectAuth } from './redux/slices/authSlice';
import LikedProducts from './pages/LikedProducts';
function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectAuth);
  React.useEffect(() => {
    //@ts-ignore
    dispatch(fetchAuthMe());
  }, []);
  return (
    <div className="App">
      <Header />
      <main className="page">
        <div className="page__container _container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:id" element={<Product />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/liked" element={<LikedProducts />} />
          </Routes>
        </div>
        <InfoMenu />
      </main>

      <Footer />
    </div>
  );
}

export default App;
