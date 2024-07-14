import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Home from './components/body/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import MenBody from './components/Men.js/MenBody';
import WomenBody from './components/women/WomenBody';
import KidsBody from './components/kids/KidsBody';
import HomeAndLiving from './components/homeAndLiving/HomeAndLiving';
import LogIn from './components/login/LogIn';
import WishList from './components/wishlist/WishList';
import FilterMen from './components/filter/FilterMen';
import ThemeProvider from './components/theme/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/men" element={<MenBody />} />
            <Route path="/women" element={<WomenBody />} />
            <Route path="/kids" element={<KidsBody />} />
            <Route path="/homeandliving" element={<HomeAndLiving />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/filtermen" element={<FilterMen />} />
          </Routes>
          <Footer />
          <hr />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
