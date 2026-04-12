/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, Country, Product, CartItem } from '../types';
import { INITIAL_PRODUCTS, EGYPT_SHIPPING_FEE_SAR } from './constants';

interface Review {
  id: string;
  productId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  country: Country;
  setCountry: (country: Country) => void;
  products: Product[];
  setProducts: (products: Product[]) => void;
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  convertPrice: (priceInSar: number) => number;
  getCurrencySymbol: () => string;
  isRTL: boolean;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  reviews: Review[];
  addReview: (review: Omit<Review, 'id' | 'date'>) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');
  const [country, setCountry] = useState<Country>('SA');
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [reviews, setReviews] = useState<Review[]>([]);

  const isRTL = language === 'ar';

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isRTL]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const addToCart = (item: CartItem) => {
    setCart((prev) => [...prev, item]);
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const addReview = (review: Omit<Review, 'id' | 'date'>) => {
    const newReview: Review = {
      ...review,
      id: Math.random().toString(36).substr(2, 9),
      date: new Date().toISOString(),
    };
    setReviews((prev) => [newReview, ...prev]);
  };

  const convertPrice = (priceInSar: number, productId?: string) => {
    if (country === 'SA') return priceInSar;
    
    // If we have a product ID, look up the specific Egypt price
    if (productId) {
      const product = products.find(p => p.id === productId);
      if (product && product.priceEG) return product.priceEG;
    }
    
    // Fallback conversion rate for demo: 1 SAR = 13 EGP
    const egpRate = 13;
    const baseConverted = priceInSar * egpRate;
    return baseConverted;
  };

  const getCurrencySymbol = () => {
    return country === 'SA' ? 'SAR' : 'EGP';
  };

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        country,
        setCountry,
        products,
        setProducts,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        convertPrice,
        getCurrencySymbol,
        isRTL,
        isDarkMode,
        toggleDarkMode,
        reviews,
        addReview,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
};
