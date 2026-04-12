/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Clock, Gift, ShoppingBag as CartIcon } from 'lucide-react';
import { useAppContext } from '../lib/store';
import { TRANSLATIONS, LOGO_URL, DARK_LOGO_URL, FREE_GIFT_IMAGE } from '../lib/constants';
import { Button, buttonVariants } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { cn } from '../lib/utils';

const Home = () => {
  const { language, products, isDarkMode, convertPrice, getCurrencySymbol, addToCart } = useAppContext();
  const t = (key: string) => TRANSLATIONS[key]?.[language] || key;

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-10" />
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.2 }}
            transition={{ duration: 1.5 }}
            src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=2000"
            alt="Luxury Watch"
            className="w-full h-full object-cover grayscale"
          />
        </div>

        <div className="relative z-20 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-7xl md:text-[10rem] font-black tracking-tighter uppercase leading-none mb-6"
          >
            {t('brandName')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            {t('heroSubtitle')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              to="/shop" 
              className={cn(buttonVariants({ size: "lg" }), "bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full")}
            >
              {t('exploreCollection')}
            </Link>
            <Link 
              to="/green-signature" 
              className={cn(buttonVariants({ size: "lg", variant: "outline" }), "px-8 py-6 text-lg rounded-full")}
            >
              {t('greenSignature')}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('featuredTimepieces')}</h2>
            <p className="text-muted-foreground">{t('exclusiveCollection')}</p>
          </div>
          <Link 
            to="/shop" 
            className={cn(buttonVariants({ variant: "ghost" }), "group")}
          >
            {t('viewAll')} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.slice(0, 4).map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-card rounded-2xl border border-border overflow-hidden"
            >
              <Link to={`/product/${product.id}`}>
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {product.isNew && (
                    <Badge className="absolute top-4 left-4 bg-primary text-white">
                      {t('newArrival')}
                    </Badge>
                  )}
                </div>
                <div className="p-6 pb-0">
                  <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                </div>
              </Link>
              <div className="p-6 pt-2">
                <div className="flex items-center justify-between">
                  <p className="text-primary font-bold">
                    {convertPrice(product.price, product.id).toLocaleString()} {getCurrencySymbol()}
                  </p>
                  <Button 
                    size="sm" 
                    variant="secondary"
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart({
                        id: Math.random().toString(36).substr(2, 9),
                        productId: product.id,
                        name: product.name,
                        basePrice: product.price,
                        quantity: 1,
                        greenCarePlus: false,
                        boxType: 'standard',
                        totalPrice: product.price
                      });
                    }}
                  >
                    <CartIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">{t('warrantyStrengthTitle')}</h3>
              <p className="text-muted-foreground">
                {t('warrantyStrengthDesc')}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">{t('craftsmanship')}</h3>
              <p className="text-muted-foreground">
                {t('craftsmanshipDesc')}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">{t('innovation')}</h3>
              <p className="text-muted-foreground">
                {t('innovationDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">{t('orderNow')}</h2>
          <p className="text-xl opacity-90 mb-10">
            "{t('quote')}"
          </p>
          <Link 
            to="/shop" 
            className={cn(buttonVariants({ size: "lg", variant: "secondary" }), "px-12 py-6 text-lg rounded-full")}
          >
            {t('exploreCollection')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
