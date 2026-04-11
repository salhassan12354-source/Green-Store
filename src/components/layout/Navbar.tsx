/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { ShoppingCart, Globe, MapPin, Menu, X, Moon, Sun, Home, ShoppingBag, Info, FileText, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { useAppContext } from '../../lib/store';
import { TRANSLATIONS, LOGO_URL, DARK_LOGO_URL } from '../../lib/constants';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Badge } from '../ui/badge';

const Navbar = () => {
  const { language, setLanguage, country, setCountry, cart, isRTL, isDarkMode, toggleDarkMode } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);

  const t = (key: string) => TRANSLATIONS[key]?.[language] || key;

  const currentLogo = isDarkMode ? DARK_LOGO_URL : LOGO_URL;

  const languages = [
    { code: 'ar', name: 'العربية' },
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'it', name: 'Italiano' },
    { code: 'fr', name: 'Français' },
  ];

  const countries = [
    { code: 'SA', name: 'Saudi Arabia', flag: '🇸🇦' },
    { code: 'EG', name: 'Egypt', flag: '🇪🇬' },
  ];

  const navLinks = [
    { name: t('home'), path: '/', icon: Home },
    { name: t('shop'), path: '/shop', icon: ShoppingBag },
    { name: t('greenSignature'), path: '/green-signature', icon: Sparkles },
    { name: t('about'), path: '/about', icon: Info },
    { name: t('policies'), path: '/policies', icon: FileText },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo and Brand */}
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="relative">
                <img 
                  src={currentLogo} 
                  alt="Green Logo" 
                  className={`h-16 w-auto object-contain transition-all duration-700 group-hover:scale-110 ${isDarkMode ? 'drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]' : 'mix-blend-multiply'}`}
                  referrerPolicy="no-referrer"
                />
                {isDarkMode && (
                  <div className="absolute inset-0 bg-primary/5 blur-2xl -z-10 rounded-full" />
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter text-foreground uppercase leading-none">{t('brandName')}</span>
                <span className="text-[8px] font-bold tracking-[0.4em] text-primary uppercase mt-1">Horology</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10 lg:gap-14">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-foreground/40 hover:text-primary transition-all relative group"
              >
                <link.icon className="h-3.5 w-3.5" />
                <span>{link.name}</span>
                <span className="absolute -bottom-2 left-0 w-0 h-px bg-primary transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 border-r border-border/10 pr-6 rtl:border-r-0 rtl:border-l rtl:pr-0 rtl:pl-6">
              {/* Dark Mode Toggle */}
              <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="text-foreground/40 hover:text-primary transition-colors">
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>

              {/* Country Selector */}
              <DropdownMenu>
                <DropdownMenuTrigger
                  render={
                    <Button variant="ghost" size="sm" className="gap-2 text-foreground/40 hover:text-primary font-bold text-[10px] uppercase tracking-widest">
                      <MapPin className="h-4 w-4" />
                      <span>{countries.find((c) => c.code === country)?.flag}</span>
                    </Button>
                  }
                />
                <DropdownMenuContent align="end" className="rounded-none border-border/10 bg-background/95 backdrop-blur-xl">
                  {countries.map((c) => (
                    <DropdownMenuItem key={c.code} onClick={() => setCountry(c.code as any)} className="text-[10px] uppercase tracking-widest font-bold focus:bg-primary focus:text-white">
                      <span className="mr-2">{c.flag}</span> {c.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Language Selector */}
              <DropdownMenu>
                <DropdownMenuTrigger
                  render={
                    <Button variant="ghost" size="sm" className="gap-2 text-foreground/40 hover:text-primary font-bold text-[10px] uppercase tracking-widest">
                      <Globe className="h-4 w-4" />
                      <span className="uppercase">{language}</span>
                    </Button>
                  }
                />
                <DropdownMenuContent align="end" className="rounded-none border-border/10 bg-background/95 backdrop-blur-xl">
                  {languages.map((l) => (
                    <DropdownMenuItem key={l.code} onClick={() => setLanguage(l.code as any)} className="text-[10px] uppercase tracking-widest font-bold focus:bg-primary focus:text-white">
                      {l.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Cart */}
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative text-foreground/40 hover:text-primary transition-colors">
                <ShoppingCart className="h-6 w-6" />
                {cart.length > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-primary text-primary-foreground text-[10px] font-black rounded-full shadow-lg">
                    {cart.length}
                  </Badge>
                )}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cart.length > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-primary text-primary-foreground">
                    {cart.length}
                  </Badge>
                )}
              </Button>
            </Link>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger
                render={
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                }
              />
              <SheetContent side={isRTL ? 'right' : 'left'} className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-8 mt-12">
                  <div className="flex flex-col gap-6">
                    {navLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-4 text-2xl font-black uppercase tracking-tighter hover:text-primary transition-colors group"
                      >
                        <link.icon className="h-6 w-6 text-primary/40 group-hover:text-primary transition-colors" />
                        <span>{link.name}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="border-t pt-8 flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-500">{t('language')}</span>
                      <div className="flex gap-2 flex-wrap justify-end">
                        {languages.map((l) => (
                          <Button
                            key={l.code}
                            variant={language === l.code ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setLanguage(l.code as any)}
                            className={language === l.code ? 'bg-primary text-primary-foreground' : ''}
                          >
                            {l.name}
                          </Button>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground/60">{t('country')}</span>
                      <div className="flex gap-2">
                        {countries.map((c) => (
                          <Button
                            key={c.code}
                            variant={country === c.code ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setCountry(c.code as any)}
                            className={country === c.code ? 'bg-primary text-primary-foreground' : ''}
                          >
                            {c.flag}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
