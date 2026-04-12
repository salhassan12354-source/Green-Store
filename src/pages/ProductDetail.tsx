/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Check, Shield, Package, Info, AlertTriangle, Sparkles, Crown, Bird, Star } from 'lucide-react';
import { useAppContext } from '../lib/store';
import { TRANSLATIONS, WARRANTY_PLANS, SIGNATURE_WARRANTY_PLANS, GREEN_CARE_PLUS_PRICE, SPECIAL_BOX_PRICE, GREEN_SIGNATURE_LOGO_URL, LOGO_URL, DARK_LOGO_URL } from '../lib/constants';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Label } from '../components/ui/label';
import { Checkbox } from '../components/ui/checkbox';
import { Separator } from '../components/ui/separator';
import { Input } from '../components/ui/input';
import { toast } from 'sonner';
import { cn } from '../lib/utils';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language, products, addToCart, convertPrice, getCurrencySymbol, country, reviews, addReview } = useAppContext();
  const t = (key: string) => TRANSLATIONS[key]?.[language] || key;

  const product = products.find((p) => p.id === id);

  const getOriginalPrice = () => {
    if (!product) return null;
    if (country === 'EG') return product.originalPriceEG;
    return product.originalPrice;
  };

  const originalPrice = getOriginalPrice();

  const [selectedWarranty, setSelectedWarranty] = useState<string>(product.customWarrantyPlans?.[0]?.id || 'silver');
  const [greenCarePlus, setGreenCarePlus] = useState(false);
  const [boxType, setBoxType] = useState<'standard' | 'special'>('standard');
  const [shipToEgypt, setShipToEgypt] = useState(false);
  const [mainImage, setMainImage] = useState(product?.images[0] || '');
  
  // Review Form State
  const [reviewName, setReviewName] = useState('');
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewComment, setReviewComment] = useState('');

  if (!product) {
    return <div className="py-20 text-center">{t('productNotFound')}</div>;
  }

  const currentWarrantyPlans = product.customWarrantyPlans || (product.isSignature ? SIGNATURE_WARRANTY_PLANS : WARRANTY_PLANS);
  const warranty = currentWarrantyPlans.find(w => w.id === selectedWarranty) || currentWarrantyPlans[0];
  
  const getWarrantyPrice = (w: typeof warranty) => {
    if (country === 'EG' && w.priceEG) return w.priceEG;
    return convertPrice(w.price);
  };

  const calculateTotal = () => {
    let total = product.price;
    total += warranty.price;
    if (greenCarePlus) {
      total += product.customGreenCarePrice?.price || GREEN_CARE_PLUS_PRICE;
    }
    if (boxType === 'special') total += SPECIAL_BOX_PRICE;
    // Note: shipToEgypt fee is handled in convertPrice or separately in Cart
    return total;
  };

  const getDisplayTotal = () => {
    let total = calculateTotal();
    let converted = convertPrice(total, product.id);
    if (country === 'EG' && shipToEgypt) {
      converted += 3000;
    }
    return converted;
  };

  const handleAddToCart = () => {
    addToCart({
      id: Math.random().toString(36).substr(2, 9),
      productId: product.id,
      name: product.name,
      basePrice: product.price,
      quantity: 1,
      warrantyId: selectedWarranty,
      greenCarePlus,
      boxType,
      shipToEgypt: country === 'EG' ? shipToEgypt : false,
      totalPrice: calculateTotal(),
    });

    toast.success(`${product.name} ${t('addedToCart')}`, {
      action: {
        label: t('cart'),
        onClick: () => navigate('/cart'),
      },
    });
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewName || !reviewComment) {
      toast.error('Please fill in all fields');
      return;
    }

    addReview({
      productId: product.id,
      userName: reviewName,
      rating: reviewRating,
      comment: reviewComment,
    });

    setReviewName('');
    setReviewComment('');
    setReviewRating(5);
    toast.success(t('reviewSuccess'));
  };

  const productReviews = reviews.filter(r => r.productId === product.id);
  const avgRating = productReviews.length > 0 
    ? productReviews.reduce((acc, r) => acc + r.rating, 0) / productReviews.length 
    : 0;

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-square bg-muted rounded-2xl overflow-hidden">
            <img
              src={mainImage}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setMainImage(img)}
                className={cn(
                  "aspect-square rounded-lg overflow-hidden border-2 transition-all",
                  mainImage === img ? 'border-primary' : 'border-transparent opacity-60 hover:opacity-100'
                )}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <div className="flex items-baseline gap-4">
              <p className="text-3xl font-bold text-primary">
                {getDisplayTotal().toLocaleString()} {getCurrencySymbol()}
              </p>
              {originalPrice && (
                <p className="text-xl text-muted-foreground line-through">
                  {convertPrice(originalPrice, product.id).toLocaleString()} {getCurrencySymbol()}
                </p>
              )}
            </div>
            {country === 'EG' && (
              <p className="text-sm text-amber-600 mt-2 flex items-center gap-2">
                <Info className="h-4 w-4" /> {t('egyptNotice')}
              </p>
            )}
          </div>

          <div className="mb-8">
            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>
          </div>

          <Separator className="mb-8" />

          {/* Warranty Selection */}
          <div className="mb-8">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" /> {t('warranty')}
            </h3>
            <RadioGroup value={selectedWarranty} onValueChange={setSelectedWarranty} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {currentWarrantyPlans.map((plan) => (
                <div key={plan.id}>
                  <RadioGroupItem value={plan.id} id={plan.id} className="peer sr-only" />
                  <Label
                    htmlFor={plan.id}
                    className="flex flex-col p-4 border-2 rounded-xl cursor-pointer transition-all peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 hover:border-primary/50"
                  >
                    <span className="font-bold mb-1">{t(plan.id)}</span>
                    <span className="text-xs text-muted-foreground mb-2">{t(plan.id + 'Duration')}</span>
                    <span className="text-primary font-bold">
                      {plan.price === 0 ? t('included') : `+${getWarrantyPrice(plan).toLocaleString()} ${getCurrencySymbol()}`}
                    </span>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Egypt Shipping Option */}
          {country === 'EG' && (
            <div className="mb-8">
              <div className={cn(
                "p-6 rounded-xl border-2 transition-all",
                shipToEgypt ? 'border-primary bg-primary/5' : 'border-border'
              )}>
                <div className="flex items-start space-x-3">
                  <Checkbox 
                    id="shiptoegypt" 
                    checked={shipToEgypt} 
                    onCheckedChange={(checked) => setShipToEgypt(checked as boolean)}
                    className="mt-1"
                  />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="shiptoegypt"
                      className="text-lg font-bold leading-none flex items-center gap-2 cursor-pointer"
                    >
                      {t('shipToEgypt')}
                    </label>
                    <p className="text-sm text-muted-foreground">
                      {t('egyptNotice')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Green Care Plus */}
          <div className="mb-8">
            <div className={cn(
              "p-6 rounded-xl border-2 transition-all",
              greenCarePlus ? 'border-primary bg-primary/5' : 'border-border'
            )}>
              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="greencare" 
                  checked={greenCarePlus} 
                  onCheckedChange={(checked) => setGreenCarePlus(checked as boolean)}
                  className="mt-1"
                />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="greencare"
                    className="text-lg font-bold leading-none flex items-center gap-2 cursor-pointer"
                  >
                    {product.customGreenCarePrice ? t('greenCarePlusLimited') : t('greenCarePlus')} <Badge className="bg-primary text-white">{t('recommended')}</Badge>
                  </label>
                  <p className="text-sm text-muted-foreground">
                    {product.customGreenCarePrice ? t('greenCarePlusLimitedDesc') : t('greenCarePlusDesc')}
                  </p>
                  <p className="text-xl font-bold text-primary mt-2">
                    +{ (country === 'EG' && product.customGreenCarePrice) 
                        ? product.customGreenCarePrice.priceEG.toLocaleString() 
                        : convertPrice(product.customGreenCarePrice?.price || GREEN_CARE_PLUS_PRICE).toLocaleString() 
                     } {getCurrencySymbol()}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Box Option */}
          <div className="mb-10">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <Package className="h-5 w-5 text-primary" /> {t('boxOption')}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button
                variant="outline"
                className={cn(
                  "justify-start h-auto p-4 rounded-xl border-2",
                  boxType === 'standard' ? 'border-primary bg-primary/5' : 'border-border'
                )}
                onClick={() => setBoxType('standard')}
              >
                <div className="text-left rtl:text-right">
                  <p className="font-bold mb-1">{t('standardBox')}</p>
                  <p className="text-xs text-muted-foreground">{t('standardLuxuryPackaging')}</p>
                </div>
              </Button>
              <Button
                variant="outline"
                className={cn(
                  "justify-start h-auto p-4 rounded-xl border-2",
                  boxType === 'special' ? 'border-primary bg-primary/5' : 'border-border'
                )}
                onClick={() => setBoxType('special')}
              >
                <div className="text-left rtl:text-right">
                  <p className="font-bold mb-1">{t('specialBox')}</p>
                  <p className="text-xs text-muted-foreground">{t('specialBoxIncludes')}</p>
                </div>
              </Button>
            </div>
          </div>

          {/* Add to Cart */}
          <Button
            size="lg"
            className="w-full h-16 text-xl rounded-xl bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            onClick={handleAddToCart}
          >
            {t('addToCart')}
          </Button>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-24">
        <Separator className="mb-12" />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Review Summary & Form */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold mb-6">{t('reviews')}</h2>
            
            <div className="bg-muted/30 p-8 rounded-2xl mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl font-bold text-primary">{avgRating.toFixed(1)}</div>
                <div>
                  <div className="flex gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={cn(
                          "h-5 w-5",
                          star <= Math.round(avgRating) ? "fill-primary text-primary" : "text-muted-foreground"
                        )}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {productReviews.length} {t('reviews')}
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{t('averageRating')}</p>
            </div>

            <form onSubmit={handleReviewSubmit} className="space-y-4">
              <h3 className="text-xl font-bold mb-4">{t('writeReview')}</h3>
              <div className="space-y-2">
                <Label htmlFor="review-name">{t('name')}</Label>
                <Input
                  id="review-name"
                  value={reviewName}
                  onChange={(e) => setReviewName(e.target.value)}
                  placeholder={t('name')}
                  className="h-12"
                />
              </div>
              <div className="space-y-2">
                <Label>{t('rating')}</Label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setReviewRating(star)}
                      className="focus:outline-none transition-transform hover:scale-110"
                    >
                      <Star
                        className={cn(
                          "h-8 w-8",
                          star <= reviewRating ? "fill-primary text-primary" : "text-muted-foreground"
                        )}
                      />
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="review-comment">{t('comment')}</Label>
                <textarea
                  id="review-comment"
                  value={reviewComment}
                  onChange={(e) => setReviewComment(e.target.value)}
                  placeholder={t('comment')}
                  className="w-full min-h-[120px] rounded-lg border border-input bg-transparent px-3 py-2 text-base transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 md:text-sm"
                />
              </div>
              <Button type="submit" className="w-full h-12 bg-primary text-white">
                {t('submit')}
              </Button>
            </form>
          </div>

          {/* Individual Reviews List */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {productReviews.length > 0 ? (
                productReviews.map((review) => (
                  <div key={review.id} className="border-b border-border pb-8 last:border-0">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-bold text-lg">{review.userName}</h4>
                        <div className="flex gap-1 mt-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={cn(
                                "h-4 w-4",
                                star <= review.rating ? "fill-primary text-primary" : "text-muted-foreground"
                              )}
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {new Date(review.date).toLocaleDateString(language === 'ar' ? 'ar-EG' : 'en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {review.comment}
                    </p>
                  </div>
                ))
              ) : (
                <div className="text-center py-20 bg-muted/20 rounded-2xl">
                  <Sparkles className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">{t('noReviews')}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
