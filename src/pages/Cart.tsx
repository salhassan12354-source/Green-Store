/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Trash2, ShoppingBag, AlertCircle, Shield, Package, CheckCircle2, Ticket, ArrowRight } from 'lucide-react';
import { useAppContext } from '../lib/store';
import { TRANSLATIONS, WARRANTY_PLANS, FREE_GIFT_IMAGE } from '../lib/constants';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { Input } from '../components/ui/input';
import { toast } from 'sonner';

const Cart = () => {
  const { language, products, cart, removeFromCart, convertPrice, getCurrencySymbol, country } = useAppContext();
  const t = (key: string) => TRANSLATIONS[key]?.[language] || key;

  const [discountCode, setDiscountCode] = useState('');

  const calculateSubtotal = () => {
    return cart.reduce((acc, item) => acc + convertPrice(item.totalPrice, item.productId), 0);
  };

  const getShippingFee = () => {
    return cart.reduce((acc, item) => {
      const product = products.find(p => p.id === item.productId);
      if (country === 'SA') return acc + (product?.shippingFee || 0);
      return acc + (product?.shippingFeeEG || 0);
    }, 0);
  };

  const calculateTotal = () => {
    return calculateSubtotal() + getShippingFee();
  };

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  const hasFreeGift = totalQuantity >= 5;

  const handleCheckout = () => {
    if (country === 'EG') {
      toast.error(t('egyptCheckoutError'), {
        duration: 5000,
      });
      return;
    }
    toast.success('Proceeding to secure checkout...', {
      description: 'You will be redirected to our payment gateway.',
    });
  };

  if (cart.length === 0) {
    return (
      <div className="py-48 bg-background text-center text-foreground">
        <div className="max-w-md mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-32 h-32 bg-foreground/5 rounded-full flex items-center justify-center mx-auto mb-10"
          >
            <ShoppingBag className="h-16 w-16 text-foreground/10" />
          </motion.div>
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-6">Your cart is empty</h2>
          <p className="text-foreground/60 mb-10 text-lg font-light">Explore our collections and find the perfect timepiece for you.</p>
          <Link to="/shop">
            <Button className="bg-primary text-primary-foreground hover:opacity-90 px-12 py-8 text-xl rounded-none font-bold uppercase tracking-widest shadow-xl">
              Start Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-24 bg-background min-h-screen text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-border/10 pb-12">
          <div>
            <span className="text-primary text-xs font-bold uppercase tracking-[0.4em] mb-4 block">{t('brandName')}</span>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-foreground leading-none">{t('cart')}</h1>
          </div>
          <div className="text-right rtl:text-left">
            <p className="text-foreground/40 text-sm uppercase tracking-widest mb-1">Items in cart</p>
            <p className="text-4xl font-black text-foreground">{totalQuantity}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-12">
            {cart.map((item) => {
              const product = products.find(p => p.id === item.productId);
              const warranty = WARRANTY_PLANS.find(w => w.id === item.warrantyId);
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col sm:flex-row gap-10 group relative"
                >
                  <div className="w-48 h-48 bg-foreground/5 flex-shrink-0 overflow-hidden relative group-hover:shadow-2xl transition-shadow duration-500">
                    <img src={product?.images[0] || `https://picsum.photos/seed/${item.productId}/300/300`} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                  </div>
                  <div className="flex-grow flex flex-col justify-between py-2">
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <h3 className="text-2xl font-black uppercase tracking-tight text-foreground mb-2">{item.name}</h3>
                          <Badge variant="outline" className="rounded-none border-primary/20 text-primary/60 text-[10px] uppercase tracking-widest px-3 py-1">
                            {product?.category || 'Premium'}
                          </Badge>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-foreground/20 hover:text-destructive hover:bg-destructive/5 transition-all"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Trash2 className="h-6 w-6" />
                        </Button>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                        <div className="flex items-center gap-3 text-sm text-foreground/60">
                          <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center">
                            <Shield className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="text-[10px] uppercase tracking-widest text-foreground/30 font-bold">{t('warranty')}</p>
                            <p className="font-medium">{warranty?.name}</p>
                          </div>
                        </div>
                        {item.greenCarePlus && (
                          <div className="flex items-center gap-3 text-sm text-foreground/60">
                            <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center">
                              <CheckCircle2 className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                              <p className="text-[10px] uppercase tracking-widest text-foreground/30 font-bold">Protection</p>
                              <p className="font-medium">{t('greenCarePlus')}</p>
                            </div>
                          </div>
                        )}
                        <div className="flex items-center gap-3 text-sm text-foreground/60">
                          <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center">
                            <Package className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="text-[10px] uppercase tracking-widest text-foreground/30 font-bold">Packaging</p>
                            <p className="font-medium">{item.boxType === 'special' ? t('specialBox') : t('standardBox')}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-end border-t border-border/5 pt-6">
                      <div className="flex items-center gap-4">
                        <span className="text-[10px] uppercase tracking-widest text-foreground/30 font-bold">Quantity</span>
                        <span className="text-xl font-bold">{item.quantity}</span>
                      </div>
                      <p className="text-3xl font-black text-foreground">
                        {convertPrice(item.totalPrice, item.productId).toLocaleString()} <span className="text-sm text-foreground/40 font-light">{getCurrencySymbol()}</span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {hasFreeGift && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-primary p-12 text-primary-foreground relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                  <div className="w-48 h-48 bg-white/10 flex-shrink-0 overflow-hidden shadow-2xl">
                    <img src={FREE_GIFT_IMAGE} alt="Free Gift" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="flex-grow text-center md:text-left rtl:md:text-right">
                    <Badge className="bg-white text-primary mb-6 rounded-none px-4 py-1 font-black uppercase tracking-widest">
                      {t('freeGift')}
                    </Badge>
                    <h3 className="text-4xl font-black uppercase tracking-tighter mb-4 leading-none">{t('freeGift')}</h3>
                    <p className="text-primary-foreground/80 text-lg font-light leading-relaxed">
                      {t('freeGiftOffer')}
                    </p>
                  </div>
                  <div className="text-6xl font-black text-white/20 uppercase italic tracking-tighter">
                    FREE
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-foreground/5 p-10 sticky top-32">
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-10 text-foreground">{t('orderSummary')}</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex justify-between text-foreground/60">
                  <span className="text-xs uppercase tracking-widest font-bold">{t('subtotal')}</span>
                  <span className="text-xl font-bold">{calculateSubtotal().toLocaleString()} {getCurrencySymbol()}</span>
                </div>
                <div className="flex justify-between text-foreground/60">
                  <span className="text-xs uppercase tracking-widest font-bold">{t('shipping')}</span>
                  <span className="text-xl font-bold">{getShippingFee() === 0 ? 'Free' : `${getShippingFee().toLocaleString()} ${getCurrencySymbol()}`}</span>
                </div>

                <div className="pt-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/30 mb-4 block">{t('discountCode')}</label>
                  <div className="flex gap-2">
                    <Input 
                      placeholder="GREEN2024" 
                      className="rounded-none bg-background border-none h-14 text-foreground text-lg px-6 focus-visible:ring-primary"
                      value={discountCode}
                      onChange={(e) => setDiscountCode(e.target.value)}
                    />
                    <Button variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-white h-14 px-8 font-bold uppercase tracking-widest transition-all">
                      {t('apply')}
                    </Button>
                  </div>
                </div>

                {country === 'EG' && (
                  <div className="p-6 bg-amber-500/5 border border-amber-500/10">
                    <p className="text-xs text-amber-600 flex items-start gap-3 leading-relaxed">
                      <AlertCircle className="h-5 w-5 flex-shrink-0 text-amber-500" />
                      {t('egyptNotice')}
                    </p>
                  </div>
                )}
                
                <Separator className="bg-foreground/10" />
                
                <div className="flex justify-between items-end">
                  <span className="text-xs uppercase tracking-[0.3em] font-black text-foreground/40 mb-1">{t('total')}</span>
                  <span className="text-5xl font-black text-primary tracking-tighter">
                    {calculateTotal().toLocaleString()} <span className="text-sm text-foreground/40 font-light">{getCurrencySymbol()}</span>
                  </span>
                </div>
              </div>

              <Button
                className="w-full bg-primary text-primary-foreground hover:opacity-90 h-20 text-2xl rounded-none font-black uppercase tracking-[0.2em] group shadow-2xl transition-all hover:-translate-y-1"
                onClick={handleCheckout}
              >
                {t('checkout')} <ArrowRight className="ml-4 h-6 w-6 transition-transform group-hover:translate-x-2 rtl:group-hover:-translate-x-2" />
              </Button>

              {country === 'EG' && (
                <p className="text-center text-sm text-destructive mt-6 font-bold uppercase tracking-widest">
                  {t('egyptCheckoutError')}
                </p>
              )}

              <div className="mt-12 space-y-6 border-t border-foreground/5 pt-8">
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-foreground/40 font-bold">
                  <Shield className="h-5 w-5 text-primary/40" />
                  Secure 256-bit SSL encrypted payment
                </div>
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-foreground/40 font-bold">
                  <Package className="h-5 w-5 text-primary/40" />
                  Premium global logistics network
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
