import React from 'react'; 
import 'bulma/css/bulma.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Navbar from './components/Navbar'; 
import HeroSection from './components/HeroSection'; 
import ProductList from './components/ProductList'; 
import ServicesSection from './components/ServicesSection'; 
import ContactPage from './components/ContactPage'; 
import AboutUsSection from './components/AboutUsSection'; 
import './app.css'; 

const App = () => { 
  return ( 
    <Router> 
      <Navbar /> 
      <Routes> 
        <Route path="/" element={<HeroSection />} /> 
        <Route path="/products" element={<ProductList />} /> 
        <Route path="/services" element={<ServicesSection />} /> 
        <Route path="/contact" element={<ContactPage />} /> 
        <Route path="/about-us" element={<AboutUsSection />} /> 
      </Routes> 
    </Router> 
  ); 
}; 

export default App;
