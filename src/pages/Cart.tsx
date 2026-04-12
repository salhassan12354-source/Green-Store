/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Trash2, ShoppingBag, AlertCircle, Shield, Package, CheckCircle2, Ticket, ArrowRight } from 'lucide-react';
import { useAppContext } from '../lib/store';
import { TRANSLATIONS, WARRANTY_PLANS, SIGNATURE_WARRANTY_PLANS, FREE_GIFT_IMAGE, GREEN_CARE_PLUS_PRICE, SPECIAL_BOX_PRICE } from '../lib/constants';
import { Button, buttonVariants } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { Input } from '../components/ui/input';
import { toast } from 'sonner';
import { cn } from '../lib/utils';

const Cart = () => {
  const { language, products, cart, removeFromCart, convertPrice, getCurrencySymbol, country } = useAppContext();
  const t = (key: string) => TRANSLATIONS[key]?.[language] || key;

  const [discountCode, setDiscountCode] = useState('');

  const calculateSubtotal = () => {
    return cart.reduce((acc, item) => {
      const product = products.find(p => p.id === item.productId);
      let itemTotal = convertPrice(item.totalPrice, item.productId);
      
      // Adjust for custom Green Care Plus price if applicable
      if (item.greenCarePlus && product?.customGreenCarePrice) {
        const standardPrice = convertPrice(GREEN_CARE_PLUS_PRICE);
        const customPrice = country === 'EG' ? product.customGreenCarePrice.priceEG : convertPrice(product.customGreenCarePrice.price);
        // item.totalPrice already includes product.customGreenCarePrice.price (base)
        // but convertPrice might not handle the EG specific price correctly if it's a fixed value
        // Let's re-calculate more carefully
        let base = product.price;
        const warranty = (product.customWarrantyPlans || (product.isSignature ? SIGNATURE_WARRANTY_PLANS : WARRANTY_PLANS)).find(w => w.id === item.warrantyId);
        base += warranty?.price || 0;
        if (item.boxType === 'special') base += SPECIAL_BOX_PRICE;
        
        let convertedBase = convertPrice(base, product.id);
        let carePrice = country === 'EG' ? product.customGreenCarePrice.priceEG : convertPrice(product.customGreenCarePrice.price);
        itemTotal = convertedBase + carePrice;
      }

      if (item.shipToEgypt) {
        itemTotal += 3000;
      }
      return acc + itemTotal;
    }, 0);
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
      <div className="py-24 px-4 text-center">
        <div className="max-w-md mx-auto">
          <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground mb-6" />
          <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
          <p className="text-muted-foreground mb-8">Explore our collections and find the perfect timepiece for you.</p>
          <Link 
            to="/shop" 
            className={cn(buttonVariants({ size: "lg" }), "bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg inline-block")}
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-12">{t('cart')}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          {cart.map((item) => {
            const product = products.find(p => p.id === item.productId);
            const warranty = WARRANTY_PLANS.find(w => w.id === item.warrantyId);
            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col sm:flex-row gap-6 p-6 bg-card rounded-2xl border border-border"
              >
                <div className="w-32 h-32 bg-muted rounded-xl overflow-hidden flex-shrink-0">
                  <img src={product?.images[0] || `https://picsum.photos/seed/${item.productId}/300/300`} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">{product?.category}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-muted-foreground hover:text-destructive"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 className="h-5 w-5" />
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Shield className="h-4 w-4" />
                      <span>{warranty?.name}</span>
                    </div>
                    {item.greenCarePlus && (
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4" />
                        <span>{product?.customGreenCarePrice ? t('greenCarePlusLimited') : t('greenCarePlus')}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Package className="h-4 w-4" />
                      <span>{item.boxType === 'special' ? t('specialBox') : t('standardBox')}</span>
                    </div>
                    {item.shipToEgypt && (
                      <div className="flex items-center gap-2 text-primary font-medium">
                        <ArrowRight className="h-4 w-4" />
                        <span>{t('shipToEgypt')}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-border">
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground">Quantity:</span>
                      <span className="font-bold">{item.quantity}</span>
                    </div>
                    <p className="text-xl font-bold">
                      {(() => {
                        const product = products.find(p => p.id === item.productId);
                        let base = item.totalPrice;
                        let converted = convertPrice(base, item.productId);
                        
                        if (item.greenCarePlus && product?.customGreenCarePrice) {
                          let baseWithoutCare = product.price;
                          const warranty = (product.customWarrantyPlans || (product.isSignature ? SIGNATURE_WARRANTY_PLANS : WARRANTY_PLANS)).find(w => w.id === item.warrantyId);
                          baseWithoutCare += warranty?.price || 0;
                          if (item.boxType === 'special') baseWithoutCare += SPECIAL_BOX_PRICE;
                          
                          let convertedBase = convertPrice(baseWithoutCare, product.id);
                          let carePrice = country === 'EG' ? product.customGreenCarePrice.priceEG : convertPrice(product.customGreenCarePrice.price);
                          converted = convertedBase + carePrice;
                        }

                        return (converted + (item.shipToEgypt ? 3000 : 0)).toLocaleString();
                      })()} {getCurrencySymbol()}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {hasFreeGift && (
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-center">
              <div className="w-24 h-24 bg-muted rounded-xl overflow-hidden flex-shrink-0">
                <img src={FREE_GIFT_IMAGE} alt="Free Gift" className="w-full h-full object-cover" />
              </div>
              <div className="flex-grow text-center md:text-left">
                <Badge className="mb-2">{t('freeGift')}</Badge>
                <h3 className="text-lg font-bold mb-1">{t('freeGift')}</h3>
                <p className="text-sm text-muted-foreground">
                  {t('freeGiftOffer')}
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-card rounded-2xl border border-border p-8 sticky top-24">
            <h2 className="text-xl font-bold mb-8">{t('orderSummary')}</h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-muted-foreground">
                <span>{t('subtotal')}</span>
                <span>{calculateSubtotal().toLocaleString()} {getCurrencySymbol()}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>{t('shipping')}</span>
                <span>{getShippingFee() === 0 ? 'Free' : `${getShippingFee().toLocaleString()} ${getCurrencySymbol()}`}</span>
              </div>

              <div className="pt-4">
                <div className="flex gap-2">
                  <Input 
                    placeholder={t('discountCode')} 
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                  />
                  <Button variant="outline">{t('apply')}</Button>
                </div>
              </div>

              {country === 'EG' && (
                <div className="p-4 bg-amber-500/10 rounded-xl">
                  <p className="text-xs text-amber-600 flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 flex-shrink-0" />
                    {t('egyptNotice')}
                  </p>
                </div>
              )}
              
              <Separator />
              
              <div className="flex justify-between items-center pt-2">
                <span className="font-bold">{t('total')}</span>
                <span className="text-2xl font-bold text-primary">
                  {calculateTotal().toLocaleString()} {getCurrencySymbol()}
                </span>
              </div>
            </div>

            <Button
              className="w-full bg-primary hover:bg-primary/90 h-12 text-lg font-bold"
              onClick={handleCheckout}
            >
              {t('checkout')}
            </Button>

            {country === 'EG' && (
              <p className="text-center text-xs text-destructive mt-4 font-medium">
                {t('egyptCheckoutError')}
              </p>
            )}

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <Shield className="h-4 w-4" />
                Secure 256-bit SSL encrypted payment
              </div>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <Package className="h-4 w-4" />
                Premium global logistics network
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
