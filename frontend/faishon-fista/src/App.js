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
import { CssBaseline } from '@mui/material';
import Results from './components/results/Results';
import Story from './components/story/Story';
import BuddyWallet from './components/buddyWallet/BuddyWallet';
import VirtualTryOnPage from './components/virtualtryon/VirtualTryOnPage';


function App() {
  return (
    <Router>
      <div className="App">
      <CssBaseline />
        <Navigation />
        <Story/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<MenBody />} />
          <Route path="/women" element={<WomenBody />} />
          <Route path="/kids" element={<KidsBody />} />
          <Route path="/homeandliving" element={<HomeAndLiving />} />
          <Route path="/shoppingbuddy" element={<BuddyWallet />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/filtermen" element={<FilterMen />} />
          <Route path="/results" element={<Results/>} />
          <Route path="/virtualtryon" element={<VirtualTryOnPage />} />
        </Routes>
        <Footer />
        <hr />
      </div>
    </Router> 
  );
}

export default App;
