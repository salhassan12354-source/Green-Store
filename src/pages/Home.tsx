/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Clock, Gift } from 'lucide-react';
import { useAppContext } from '../lib/store';
import { TRANSLATIONS, LOGO_URL, DARK_LOGO_URL, FREE_GIFT_IMAGE } from '../lib/constants';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

const Home = () => {
  const { language, products, isDarkMode, convertPrice, getCurrencySymbol } = useAppContext();
  const t = (key: string) => TRANSLATIONS[key]?.[language] || key;

  const currentLogo = isDarkMode ? DARK_LOGO_URL : LOGO_URL;

  return (
    <div className="overflow-hidden bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-luxury-gradient opacity-10" />
          <div className="grid grid-cols-12 h-full opacity-5">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border border-foreground/10" />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            <motion.div
              className="relative mb-12"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 1.5, ease: "easeOut" }}
            >
              <motion.img
                src={currentLogo}
                alt="Green Logo"
                className={`w-72 h-auto md:w-[600px] md:h-auto object-contain transition-all duration-1000 ${isDarkMode ? 'drop-shadow-[0_0_40px_rgba(255,255,255,0.05)]' : 'mix-blend-multiply'}`}
                referrerPolicy="no-referrer"
              />
              {isDarkMode && (
                <div className="absolute inset-0 bg-primary/5 blur-[100px] -z-10 rounded-full animate-pulse" />
              )}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              <span className="text-primary text-xs md:text-sm font-black uppercase tracking-[0.8em] mb-6 block">{t('brandName')}</span>
              <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter uppercase mb-8 text-foreground leading-none">
                Horology
              </h1>
              <p className="text-xl md:text-3xl text-foreground/40 max-w-3xl mx-auto mb-16 font-light italic tracking-tight">
                "{t('heroSubtitle')}"
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              <Link to="/shop">
                <Button size="lg" className="bg-primary text-primary-foreground hover:opacity-90 px-16 py-10 text-2xl rounded-none transition-all hover:px-20 font-black uppercase tracking-[0.2em] shadow-2xl">
                  {t('shop')} <ArrowRight className="ml-4 h-8 w-8 rtl:rotate-180 transition-transform group-hover:translate-x-2" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/20">{t('scrollExplore')}</span>
          <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-32 bg-foreground/2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Green Offer Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-32 bg-primary p-12 md:p-20 relative overflow-hidden group shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px] group-hover:bg-white/10 transition-colors duration-1000" />
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
              <div className="w-48 h-48 md:w-64 md:h-64 bg-white/5 backdrop-blur-2xl p-6 border border-white/10 shadow-2xl relative group-hover:scale-105 transition-transform duration-700 flex-shrink-0">
                <img src={FREE_GIFT_IMAGE} alt="Free Gift" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
              </div>
              <div className="flex-grow text-center lg:text-left rtl:lg:text-right">
                <Badge className="bg-white text-primary mb-6 font-black px-6 py-2 rounded-none uppercase tracking-[0.3em] text-xs">
                  {t('freeGift')}
                </Badge>
                <h3 className="text-3xl md:text-5xl xl:text-6xl font-black text-white uppercase tracking-tighter mb-8 leading-tight max-w-4xl">
                  {t('freeGiftOffer')}
                </h3>
                <Link to="/shop">
                  <Button variant="outline" className="border-white/40 text-white hover:bg-white hover:text-primary rounded-none px-12 py-8 text-lg font-black uppercase tracking-[0.2em] transition-all">
                    {t('exploreCollection')}
                  </Button>
                </Link>
              </div>
              <div className="hidden xl:block opacity-10 flex-shrink-0">
                <Gift className="h-48 w-48 text-white rotate-12" />
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.5em] text-primary mb-4 block">{t('exclusiveCollection')}</span>
              <h3 className="text-5xl md:text-7xl font-black text-foreground uppercase tracking-tighter leading-none">{t('featuredTimepieces')}</h3>
            </div>
            <Link to="/shop" className="group flex items-center gap-4 text-foreground/40 hover:text-primary transition-all">
              <span className="text-xs font-black uppercase tracking-[0.3em]">{t('viewAllCollections')}</span>
              <div className="w-12 h-12 rounded-full border border-foreground/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all">
                <ArrowRight className="h-5 w-5 rtl:rotate-180" />
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {products.slice(0, 4).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="group cursor-pointer"
              >
                <Link to={`/product/${product.id}`}>
                  <div className="relative aspect-[4/5] overflow-hidden bg-foreground/2 mb-8 group-hover:shadow-2xl transition-all duration-700">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700" />
                    <div className="absolute top-6 right-6">
                      <Badge className="bg-white/90 text-black font-black uppercase tracking-widest text-[10px] rounded-none px-3 py-1 shadow-xl">{t('newArrival')}</Badge>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-black text-2xl uppercase tracking-tight group-hover:text-primary transition-colors text-foreground leading-tight">{product.name}</h4>
                    <p className="text-foreground/40 font-light text-lg tracking-tight">
                      {convertPrice(product.price, product.id).toLocaleString()} <span className="text-sm uppercase tracking-widest ml-1">{getCurrencySymbol()}</span>
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-48 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[20rem] font-black text-foreground/[0.02] uppercase tracking-tighter whitespace-nowrap select-none pointer-events-none">
          {t('excellence')}
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
            <div className="text-center group">
              <div className="w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <Shield className="h-10 w-10 transition-transform group-hover:scale-110" />
              </div>
              <h4 className="text-2xl font-black uppercase tracking-tight mb-6 text-foreground">{t('warrantyStrengthTitle')}</h4>
              <p className="text-foreground/40 leading-relaxed font-light text-lg">
                {t('warrantyStrengthDesc')}
              </p>
            </div>
            <div className="text-center group">
              <div className="w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <Star className="h-10 w-10 transition-transform group-hover:scale-110" />
              </div>
              <h4 className="text-2xl font-black uppercase tracking-tight mb-6 text-foreground">{t('craftsmanship')}</h4>
              <p className="text-foreground/40 leading-relaxed font-light text-lg">
                {t('craftsmanshipDesc')}
              </p>
            </div>
            <div className="text-center group">
              <div className="w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <Clock className="h-10 w-10 transition-transform group-hover:scale-110" />
              </div>
              <h4 className="text-2xl font-black uppercase tracking-tight mb-6 text-foreground">{t('innovation')}</h4>
              <p className="text-foreground/40 leading-relaxed font-light text-lg">
                {t('innovationDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-64 bg-black text-white overflow-hidden group">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-10" />
          <img 
            src="https://ae-pic-a1.aliexpress-media.com/kf/S09cd0809ed0c4f58ab642af32d18974b8.jpg_220x220q75.jpg_.avif" 
            alt="Background" 
            className="w-full h-full object-cover grayscale opacity-50 transition-transform duration-[3000ms] group-hover:scale-110"
          />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 text-center z-20">
          <span className="text-primary text-xs font-black uppercase tracking-[0.6em] mb-8 block">{t('brandName')}</span>
          <h2 className="text-6xl md:text-9xl font-black mb-12 tracking-tighter uppercase leading-none">{t('orderNow')}</h2>
          <p className="text-xl md:text-3xl text-white/60 mb-16 font-light italic tracking-tight max-w-3xl mx-auto">
            "{t('quote')}"
          </p>
          <Link to="/shop">
            <Button size="lg" className="bg-white text-black hover:bg-primary hover:text-white px-20 py-12 text-2xl rounded-none font-black uppercase tracking-[0.2em] transition-all shadow-2xl">
              {t('exploreCollection')}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
