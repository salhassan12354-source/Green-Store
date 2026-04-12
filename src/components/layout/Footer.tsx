/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { useAppContext } from '../../lib/store';
import { TRANSLATIONS, LOGO_URL, DARK_LOGO_URL } from '../../lib/constants';

const Footer = () => {
  const { language } = useAppContext();
  const t = (key: string) => TRANSLATIONS[key]?.[language] || key;

  return (
    <footer className="bg-background border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <h3 className="text-xl font-bold">{t('brandName')}</h3>
          <p className="text-muted-foreground text-sm">
            {t('heroSubtitle')}
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4">{t('quickLinks')}</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">{t('home')}</Link></li>
            <li><Link to="/shop" className="hover:text-primary transition-colors">{t('shop')}</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">{t('about')}</Link></li>
            <li><Link to="/policies" className="hover:text-primary transition-colors">{t('policies')}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">{t('customerService')}</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/policies" className="hover:text-primary transition-colors">{t('shippingPolicy')}</Link></li>
            <li><Link to="/policies" className="hover:text-primary transition-colors">{t('returnPolicy')}</Link></li>
            <li><Link to="/policies" className="hover:text-primary transition-colors">{t('privacyPolicy')}</Link></li>
            <li><Link to="/policies" className="hover:text-primary transition-colors">{t('termsConditions')}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">{t('contactUs')}</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@greenstore.com</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +966 50 000 0000</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Riyadh, Saudi Arabia</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} {t('brandName')}. {t('allRightsReserved')}.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary transition-colors">Instagram</a>
          <a href="#" className="hover:text-primary transition-colors">Twitter</a>
          <a href="#" className="hover:text-primary transition-colors">Facebook</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
