/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { useAppContext } from '../lib/store';
import { TRANSLATIONS } from '../lib/constants';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '../components/ui/select';
import { Filter, SortAsc, Users } from 'lucide-react';

const Shop = () => {
  const { language, products, convertPrice, getCurrencySymbol, country } = useAppContext();
  const t = (key: string) => TRANSLATIONS[key]?.[language] || key;

  const [sortBy, setSortBy] = useState('popularity');
  const [genderFilter, setGenderFilter] = useState('all');

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    // Filter by gender
    if (genderFilter !== 'all') {
      result = result.filter(p => p.category === genderFilter);
    }

    // Sort
    result.sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'popularity') return (b.popularity || 0) - (a.popularity || 0);
      return 0;
    });

    return result;
  }, [products, sortBy, genderFilter]);

  return (
    <div className="py-24 bg-background min-h-screen text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16 text-center">
          <span className="text-primary text-xs font-black uppercase tracking-[0.6em] mb-6 block">{t('collection')}</span>
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-8 text-foreground leading-none">{t('exquisiteTimepieces')}</h1>
          <p className="text-foreground/40 max-w-2xl mx-auto text-xl font-light italic tracking-tight">
            "{t('shopSubtitle')}"
          </p>
        </header>

        {/* Filters and Sorting */}
        <div className="mb-16 flex flex-col md:flex-row gap-6 items-center justify-between border-y border-border/5 py-8">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4">
              <Users className="h-4 w-4 text-primary" />
              <span className="text-[10px] font-black uppercase tracking-widest text-foreground/40">{t('gender')}:</span>
              <div className="flex gap-2">
                {['all', 'men', 'women'].map((g) => (
                  <button
                    key={g}
                    onClick={() => setGenderFilter(g)}
                    className={`text-[10px] font-black uppercase tracking-widest px-4 py-2 transition-all ${
                      genderFilter === g 
                        ? 'bg-primary text-white shadow-lg' 
                        : 'bg-foreground/2 text-foreground/40 hover:bg-foreground/5'
                    }`}
                  >
                    {t(g)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <SortAsc className="h-4 w-4 text-primary" />
            <span className="text-[10px] font-black uppercase tracking-widest text-foreground/40">{t('sortBy')}:</span>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[200px] rounded-none border-border/10 bg-foreground/2 text-[10px] font-black uppercase tracking-widest h-10">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="rounded-none border-border/10 bg-background/95 backdrop-blur-xl">
                <SelectItem value="popularity" className="text-[10px] font-black uppercase tracking-widest">{t('popularity')}</SelectItem>
                <SelectItem value="price-low" className="text-[10px] font-black uppercase tracking-widest">{t('priceLowHigh')}</SelectItem>
                <SelectItem value="price-high" className="text-[10px] font-black uppercase tracking-widest">{t('priceHighLow')}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
          <AnimatePresence mode="popLayout">
            {filteredAndSortedProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
              <Link to={`/product/${product.id}`}>
                <Card className="group border-none shadow-none bg-transparent overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/5] overflow-hidden bg-foreground/2 group-hover:shadow-2xl transition-all duration-700">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      {!product.stock && (
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center backdrop-blur-sm">
                          <Badge variant="destructive" className="text-xl px-6 py-2 rounded-none font-black uppercase tracking-widest">
                            {t('outOfStock')}
                          </Badge>
                        </div>
                      )}
                      {product.stock && (
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-700 flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <Badge className="bg-white text-black rounded-none px-6 py-2 font-black uppercase tracking-widest shadow-2xl">{t('viewDetails')}</Badge>
                        </div>
                      )}
                      <div className="absolute top-6 right-6">
                        {product.category && (
                          <Badge className="bg-primary text-white rounded-none px-3 py-1 text-[10px] font-black uppercase tracking-widest shadow-xl">
                            {t(product.category)}
                          </Badge>
                        )}
                        <Badge className="bg-white/90 text-black font-black uppercase tracking-widest text-[10px] rounded-none px-3 py-1 shadow-xl ml-2 rtl:ml-0 rtl:mr-2">{t('newArrival')}</Badge>
                      </div>
                    </div>
                      <div className="mt-8 space-y-2">
                        <h3 className="text-2xl font-black uppercase tracking-tight group-hover:text-primary transition-colors text-foreground leading-tight">{product.name}</h3>
                        <div className="flex items-center gap-3">
                          <p className="text-xl font-light text-foreground/40 tracking-tight">
                            {convertPrice(product.price, product.id).toLocaleString()} <span className="text-xs uppercase tracking-widest ml-1">{getCurrencySymbol()}</span>
                          </p>
                          {((country === 'EG' && product.originalPriceEG) || (country === 'SA' && product.originalPrice)) && (
                            <p className="text-sm text-foreground/20 line-through font-light">
                              {(country === 'EG' ? product.originalPriceEG : product.originalPrice)?.toLocaleString()} {getCurrencySymbol()}
                            </p>
                          )}
                        </div>
                      </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Shop;
