/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AppProvider, useAppContext } from './lib/store';
import { Toaster } from './components/ui/sonner';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import About from './pages/About';
import Policies from './pages/Policies';
import GreenSignature from './pages/GreenSignature';
import { MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const AppContent = () => {
  const { isRTL } = useAppContext();
  
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      <Navbar />
      <main className="pt-32 md:pt-40">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/green-signature" element={<GreenSignature />} />
        </Routes>
      </main>
      <Footer />
      <Toaster position="top-center" />
      
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/966500000000" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95 flex items-center justify-center"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <Router>
        <AppContent />
      </Router>
    </AppProvider>
  );
}
