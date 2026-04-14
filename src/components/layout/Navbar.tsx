/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link, useLocation } from 'react-router-dom';
import { 
  ShoppingBag, 
  Menu, 
  X, 
  ChevronDown, 
  Globe, 
  MapPin,
  Search,
  User,
  ShoppingCart,
  Home,
  Sparkles,
  FileText,
  Sun,
  Moon
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useAppContext } from '../../lib/store';
import { TRANSLATIONS, LOGO_URL, DARK_LOGO_URL } from '../../lib/constants';
import { Button, buttonVariants } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { cn } from '../../lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Badge } from '../ui/badge';

const Navbar = () => {
  const { language, setLanguage, country, setCountry, isDarkMode, toggleDarkMode, cart } = useAppContext();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = (key: string) => TRANSLATIONS[key]?.[language] || key;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cartItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const currentLogo = isDarkMode ? DARK_LOGO_URL : LOGO_URL;

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex items-center bg-primary text-white shadow-md",
        isScrolled ? "h-32" : "h-40"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src={currentLogo} 
            alt="Green Store" 
            className={cn(
              "transition-all duration-300 w-auto object-contain",
              isScrolled ? "h-28" : "h-36"
            )}
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium hover:text-white/80 transition-colors">{t('home')}</Link>
          <Link to="/shop" className="text-sm font-medium hover:text-white/80 transition-colors">{t('shop')}</Link>
          <Link to="/about" className="text-sm font-medium hover:text-white/80 transition-colors">{t('about')}</Link>
          <Link to="/policies" className="text-sm font-medium hover:text-white/80 transition-colors">{t('policies')}</Link>
        </div>

        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "text-white hover:bg-white/10")}>
              <Globe className="h-5 w-5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage('en')}>English</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('ar')}>العربية</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "text-white hover:bg-white/10")}>
              <MapPin className="h-5 w-5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setCountry('SA')}>
                {language === 'ar' ? 'المملكة العربية السعودية' : 'Saudi Arabia'}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setCountry('EG')}>
                {language === 'ar' ? 'مصر' : 'Egypt'}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleDarkMode}
            className="text-white hover:bg-white/10"
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          <Link 
            to="/cart" 
            className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "relative text-white hover:bg-white/10")}
          >
            <ShoppingCart className="h-5 w-5" />
            {cartItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-white text-primary text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
          </Link>

          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden text-white hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-primary border-b border-white/10 md:hidden overflow-hidden text-white"
          >
            <div className="flex flex-col p-4 gap-4">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium hover:text-white/80">{t('home')}</Link>
              <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium hover:text-white/80">{t('shop')}</Link>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium hover:text-white/80">{t('about')}</Link>
              <Link to="/policies" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium hover:text-white/80">{t('policies')}</Link>
              
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                  className="flex-1 bg-transparent border-white text-white hover:bg-white hover:text-primary"
                >
                  <Globe className="h-4 w-4 mr-2" />
                  {language === 'en' ? 'العربية' : 'English'}
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setCountry(country === 'SA' ? 'EG' : 'SA')}
                  className="flex-1 bg-transparent border-white text-white hover:bg-white hover:text-primary"
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  {country === 'SA' ? (language === 'ar' ? 'مصر' : 'Egypt') : (language === 'ar' ? 'السعودية' : 'KSA')}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
