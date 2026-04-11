/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Check, Shield, Package, Info, AlertTriangle, Sparkles, Crown, Bird } from 'lucide-react';
import { useAppContext } from '../lib/store';
import { TRANSLATIONS, WARRANTY_PLANS, SIGNATURE_WARRANTY_PLANS, GREEN_CARE_PLUS_PRICE, SPECIAL_BOX_PRICE, GREEN_SIGNATURE_LOGO_URL } from '../lib/constants';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Label } from '../components/ui/label';
import { Checkbox } from '../components/ui/checkbox';
import { Separator } from '../components/ui/separator';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language, products, addToCart, convertPrice, getCurrencySymbol, country } = useAppContext();
  const t = (key: string) => TRANSLATIONS[key]?.[language] || key;

  const product = products.find((p) => p.id === id);

  const getOriginalPrice = () => {
    if (!product) return null;
    if (country === 'EG') return product.originalPriceEG;
    return product.originalPrice;
  };

  const originalPrice = getOriginalPrice();

  const [selectedWarranty, setSelectedWarranty] = useState<string>('silver');
  const [greenCarePlus, setGreenCarePlus] = useState(false);
  const [boxType, setBoxType] = useState<'standard' | 'special'>('standard');
  const [mainImage, setMainImage] = useState(product?.images[0] || '');

  if (!product) {
    return <div className="py-20 text-center font-black uppercase tracking-widest text-foreground/40">{t('productNotFound')}</div>;
  }

  const currentWarrantyPlans = product.customWarrantyPlans || (product.isSignature ? SIGNATURE_WARRANTY_PLANS : WARRANTY_PLANS);
  const warranty = currentWarrantyPlans.find(w => w.id === selectedWarranty) || currentWarrantyPlans[0];
  
  const getWarrantyPrice = (w: typeof warranty) => {
    if (country === 'EG' && w.priceEG) return w.priceEG;
    return convertPrice(w.price);
  };

  const getWarrantyIcon = (id: string) => {
    if (id === 'palladium') return <Crown className="h-5 w-5 text-amber-500" />;
    if (id === 'green_eagle') return <Bird className="h-5 w-5 text-primary" />;
    return <Shield className="h-5 w-5 text-primary" />;
  };

  const calculateTotal = () => {
    let total = product.price;
    total += warranty.price;
    if (greenCarePlus) total += GREEN_CARE_PLUS_PRICE;
    if (boxType === 'special') total += SPECIAL_BOX_PRICE;
    return total;
  };

  const handleAddToCart = () => {
    if (!product.stock) {
      toast.error(t('outOfStock'));
      return;
    }

    addToCart({
      id: Math.random().toString(36).substr(2, 9),
      productId: product.id,
      name: product.name,
      basePrice: product.price,
      quantity: 1,
      warrantyId: selectedWarranty,
      greenCarePlus,
      boxType,
      totalPrice: calculateTotal(),
    });

    toast.success(`${product.name} ${t('addedToCart')}`, {
      action: {
        label: t('cart'),
        onClick: () => navigate('/cart'),
      },
    });
  };

  return (
    <div className="py-24 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Image Gallery */}
          <div className="space-y-8">
            <motion.div 
              className="aspect-[4/5] bg-foreground/2 overflow-hidden relative group cursor-zoom-in"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={mainImage}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700" />
            </motion.div>
            <div className="grid grid-cols-4 gap-6">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setMainImage(img)}
                  className={`aspect-square overflow-hidden transition-all duration-500 relative ${mainImage === img ? 'ring-2 ring-primary ring-offset-4 ring-offset-background' : 'opacity-40 hover:opacity-100'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                  {mainImage === img && <div className="absolute inset-0 bg-primary/10" />}
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col relative">
            {product.isSignature && (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="absolute -top-12 right-0 md:-right-12 z-20"
              >
                <img 
                  src={GREEN_SIGNATURE_LOGO_URL} 
                  alt="Green Signature" 
                  className="h-24 w-24 object-contain drop-shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            )}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                {product.category && (
                  <Badge className="bg-primary text-white rounded-none px-4 py-1 text-[10px] font-black uppercase tracking-[0.2em]">
                    {t(product.category)}
                  </Badge>
                )}
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/30">{t('ref')} {product.id.toUpperCase()}</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 text-foreground leading-none">{product.name}</h1>
              
              <div className="flex items-baseline gap-6 mb-10">
                <p className="text-4xl font-black text-primary tracking-tighter">
                  {convertPrice(calculateTotal(), product.id).toLocaleString()} <span className="text-sm font-light text-foreground/40 uppercase tracking-widest">{getCurrencySymbol()}</span>
                </p>
                {originalPrice && (
                  <p className="text-xl text-foreground/20 line-through font-light">
                    {originalPrice.toLocaleString()} {getCurrencySymbol()}
                  </p>
                )}
              </div>
              
              {/* Shipping Fee Display */}
              <div className="p-6 bg-foreground/2 border border-border/5 mb-8">
                <p className="text-xs font-black uppercase tracking-[0.2em] flex items-center gap-3 text-foreground/60">
                  <Package className="h-5 w-5 text-primary/60" />
                  {t('shippingFee')}: <span className="text-foreground font-black">{country === 'SA' ? product.shippingFee : product.shippingFeeEG} {getCurrencySymbol()}</span>
                </p>
                {country === 'EG' && product.id === 'sig-3' && (
                  <p className="mt-2 text-[10px] font-bold text-primary uppercase tracking-widest">
                    يمكن الشحن إلى مصر بـ 1000 جنيه مصري
                  </p>
                )}
              </div>

              {country === 'EG' && (
                <div className="p-4 bg-amber-500/5 border border-amber-500/10 mb-8">
                  <p className="text-xs text-amber-600 flex items-start gap-3 leading-relaxed font-medium italic">
                    <Info className="h-5 w-5 flex-shrink-0 text-amber-500" /> {t('egyptNotice')}
                  </p>
                </div>
              )}
            </div>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-xl text-foreground/60 leading-relaxed font-light italic tracking-tight">
                "{product.description}"
              </p>
            </div>

            <Separator className="mb-12 bg-foreground/5" />

            {/* Warranty Selection */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-black uppercase tracking-[0.3em] text-xs flex items-center gap-3 text-foreground">
                  <Shield className="h-5 w-5 text-primary" /> {t('warranty')}
                </h3>
                <Link to="/policies" className="text-[10px] font-black uppercase tracking-widest text-foreground/30 hover:text-primary transition-colors underline underline-offset-4">{t('viewPolicy')}</Link>
              </div>
              <RadioGroup value={selectedWarranty} onValueChange={setSelectedWarranty} className="grid grid-cols-2 gap-6">
                {currentWarrantyPlans.map((plan) => (
                  <div key={plan.id}>
                    <RadioGroupItem value={plan.id} id={plan.id} className="peer sr-only" />
                      <Label
                        htmlFor={plan.id}
                        className={`flex flex-col p-6 border-2 rounded-none cursor-pointer transition-all duration-500 relative overflow-hidden group ${
                          selectedWarranty === plan.id 
                            ? 'border-primary bg-primary/10 shadow-xl scale-[1.02]' 
                            : 'border-border/10 bg-foreground/2 hover:border-primary/40'
                        }`}
                      >
                        <div className="flex justify-between items-start relative z-10 mb-4">
                          <div className="flex items-center gap-2">
                            {getWarrantyIcon(plan.id)}
                            <span className={`font-black uppercase tracking-widest text-xs ${selectedWarranty === plan.id ? 'text-primary' : 'text-foreground'}`}>
                              {t(plan.id)}
                            </span>
                          </div>
                          {selectedWarranty === plan.id && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="bg-primary text-white p-1 rounded-full"
                            >
                              <Check className="h-3 w-3" />
                            </motion.div>
                          )}
                        </div>
                        <span className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-4 ${selectedWarranty === plan.id ? 'text-primary/60' : 'text-foreground/30'}`}>
                          {t(plan.id + 'Duration')}
                        </span>
                        <span className={`text-lg font-black relative z-10 ${selectedWarranty === plan.id ? 'text-primary' : 'text-foreground'}`}>
                          +{getWarrantyPrice(plan).toLocaleString()} <span className="text-[10px] font-light opacity-40">{getCurrencySymbol()}</span>
                        </span>
                        
                        {/* Decorative background element for selected state */}
                        {selectedWarranty === plan.id && (
                          <motion.div 
                            layoutId="warranty-bg"
                            className="absolute inset-0 bg-primary/5 -z-0"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                          />
                        )}
                      </Label>
                  </div>
                ))}
              </RadioGroup>
              <div className="mt-6 p-4 bg-destructive/5 border border-destructive/10 flex items-start gap-3">
                <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <p className="text-[10px] text-destructive font-black uppercase tracking-widest leading-relaxed">
                    {t('securityNotice')}
                  </p>
                  <p className="text-[10px] text-destructive/60 font-bold uppercase tracking-widest leading-relaxed">
                    {t('voidWarranty')}
                  </p>
                </div>
              </div>
            </div>

            {/* Green Care Plus */}
            <div className="mb-12">
              <div className={`p-8 border border-dashed transition-all duration-700 relative overflow-hidden group ${greenCarePlus ? 'border-primary bg-primary/5 shadow-2xl' : 'border-border/10 bg-foreground/2'}`}>
                <div className="flex items-start gap-6 relative z-10">
                  <Checkbox 
                    id="greencare" 
                    checked={greenCarePlus} 
                    onCheckedChange={(checked) => setGreenCarePlus(checked as boolean)}
                    className="border-primary/40 data-[state=checked]:bg-primary data-[state=checked]:border-primary w-6 h-6 rounded-none"
                  />
                  <div className="grid gap-4 leading-none">
                    <label
                      htmlFor="greencare"
                      className="text-lg font-black uppercase tracking-widest leading-none flex items-center gap-4 text-foreground cursor-pointer"
                    >
                      {t('greenCarePlus')} 
                      <Badge className="bg-primary text-white rounded-none px-3 py-1 text-[8px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
                        <Sparkles className="h-3 w-3" /> {t('recommended')}
                      </Badge>
                    </label>
                    <p className="text-sm text-foreground/40 font-light leading-relaxed">
                      {t('greenCarePlusDesc')}
                    </p>
                    <p className="text-2xl font-black text-primary tracking-tighter">
                      +{convertPrice(GREEN_CARE_PLUS_PRICE).toLocaleString()} <span className="text-[10px] font-light text-foreground/40 uppercase tracking-widest">{getCurrencySymbol()}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Box Option */}
            <div className="mb-16">
              <h3 className="font-black uppercase tracking-[0.3em] text-xs mb-8 flex items-center gap-3 text-foreground">
                <Package className="h-5 w-5 text-primary" /> {t('boxOption')}
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <Button
                  variant="outline"
                  className={`justify-start h-auto p-8 rounded-none transition-all duration-500 border-border/10 ${boxType === 'standard' ? 'bg-primary text-primary-foreground border-primary shadow-2xl' : 'text-foreground hover:bg-foreground/2'}`}
                  onClick={() => setBoxType('standard')}
                >
                  <div className="text-left rtl:text-right flex items-center justify-between w-full">
                    <div>
                      <p className="font-black uppercase tracking-widest text-sm mb-2">{t('standardBox')}</p>
                      <p className={`text-xs font-light ${boxType === 'standard' ? 'text-white/60' : 'text-foreground/40'}`}>{t('standardLuxuryPackaging')}</p>
                    </div>
                    {boxType === 'standard' && <Check className="h-6 w-6" />}
                  </div>
                </Button>
                <Button
                  variant="outline"
                  className={`justify-start h-auto p-8 rounded-none transition-all duration-500 border-border/10 ${boxType === 'special' ? 'bg-primary text-primary-foreground border-primary shadow-2xl' : 'text-foreground hover:bg-foreground/2'}`}
                  onClick={() => setBoxType('special')}
                >
                  <div className="text-left rtl:text-right flex items-center justify-between w-full">
                    <div>
                      <p className="font-black uppercase tracking-widest text-sm mb-2">{t('specialBox')}</p>
                      <p className={`text-xs font-light ${boxType === 'special' ? 'text-white/60' : 'text-foreground/40'}`}>{t('specialBoxIncludes')}</p>
                    </div>
                    {boxType === 'special' && <Check className="h-6 w-6" />}
                  </div>
                </Button>
              </div>
            </div>

            {/* Add to Cart */}
            <Button
              size="lg"
              className={`w-full h-24 text-2xl rounded-none font-black uppercase tracking-[0.3em] shadow-2xl transition-all hover:-translate-y-1 ${
                product.stock 
                  ? 'bg-[#1A7F4B] hover:bg-[#14663c] text-white' 
                  : 'bg-foreground/10 text-foreground/20 cursor-not-allowed grayscale'
              }`}
              onClick={handleAddToCart}
              disabled={!product.stock}
            >
              {product.stock ? t('addToCart') : t('outOfStock')}
            </Button>
            
            <div className="mt-8 flex items-center justify-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-foreground/20">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" /> {t('secureCheckout')}
              </div>
              <div className="flex items-center gap-2">
                <Package className="h-4 w-4" /> {t('globalDelivery')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
