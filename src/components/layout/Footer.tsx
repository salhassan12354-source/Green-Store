/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { useAppContext } from '../../lib/store';
import { TRANSLATIONS, LOGO_URL, DARK_LOGO_URL } from '../../lib/constants';

const Footer = () => {
  const { language, isDarkMode } = useAppContext();
  const t = (key: string) => TRANSLATIONS[key]?.[language] || key;

  const currentLogo = isDarkMode ? DARK_LOGO_URL : LOGO_URL;

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-4 mb-8 group">
              <img 
                src={currentLogo} 
                alt="Green Logo" 
                className={`h-12 w-auto object-contain transition-transform duration-700 group-hover:scale-110 ${isDarkMode ? 'drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]' : 'mix-blend-multiply'}`}
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tighter uppercase text-foreground leading-none">{t('brandName')}</span>
                <span className="text-[6px] font-bold tracking-[0.4em] text-primary uppercase mt-1">Horology</span>
              </div>
            </Link>
            <p className="text-foreground/40 text-sm leading-relaxed mb-8 font-light italic">
              "{t('footerDesc')}"
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-foreground/20 hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-foreground/20 hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-foreground/20 hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-8 text-foreground">{t('shop')}</h4>
            <ul className="space-y-4">
              <li><Link to="/shop" className="text-sm text-foreground/40 hover:text-primary transition-colors font-light tracking-tight">{t('allCollections')}</Link></li>
              <li><Link to="/green-signature" className="text-sm text-foreground/40 hover:text-primary transition-colors font-light tracking-tight">{t('greenSignature')}</Link></li>
              <li><Link to="/shop" className="text-sm text-foreground/40 hover:text-primary transition-colors font-light tracking-tight">{t('newArrivals')}</Link></li>
              <li><Link to="/shop" className="text-sm text-foreground/40 hover:text-primary transition-colors font-light tracking-tight">{t('bestSellers')}</Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-8 text-foreground">{t('policies')}</h4>
            <ul className="space-y-4">
              <li><Link to="/policies" className="text-sm text-foreground/40 hover:text-primary transition-colors font-light tracking-tight">{t('shippingPolicy')}</Link></li>
              <li><Link to="/policies" className="text-sm text-foreground/40 hover:text-primary transition-colors font-light tracking-tight">{t('privacyPolicy')}</Link></li>
              <li><Link to="/policies" className="text-sm text-foreground/40 hover:text-primary transition-colors font-light tracking-tight">{t('returnPolicy')}</Link></li>
              <li><Link to="/policies" className="text-sm text-foreground/40 hover:text-primary transition-colors font-light tracking-tight">{t('warrantyPolicy')}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-8 text-foreground">{t('contact')}</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 text-sm text-foreground/40 font-light tracking-tight">
                <div className="w-8 h-8 rounded-full bg-foreground/5 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-3.5 w-3.5 text-primary" />
                </div>
                info@green-watches.com
              </li>
              <li className="flex items-center gap-4 text-sm text-foreground/40 font-light tracking-tight">
                <div className="w-8 h-8 rounded-full bg-foreground/5 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-3.5 w-3.5 text-primary" />
                </div>
                +966 50 000 0000
              </li>
              <li className="flex items-center gap-4 text-sm text-foreground/40 font-light tracking-tight">
                <div className="w-8 h-8 rounded-full bg-foreground/5 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                </div>
                {t('riyadhLocation')}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/5 mt-24 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/20">
            © {currentYear} {t('brandName')} {t('premiumWatches')}. {t('allRightsReserved')}.
          </p>
          <div className="flex gap-8 items-center grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-3 w-auto" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-5 w-auto" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4 w-auto" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
