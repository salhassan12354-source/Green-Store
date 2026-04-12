/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { useAppContext } from '../lib/store';
import { TRANSLATIONS, LOGO_URL, DARK_LOGO_URL } from '../lib/constants';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '../components/ui/select';
import { Filter, SortAsc, Users, Search, ShoppingCart } from 'lucide-react';
import { Input } from '../components/ui/input';
import { cn } from '../lib/utils';

const Shop = () => {
  const { language, products, convertPrice, getCurrencySymbol, addToCart } = useAppContext();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const t = (key: string) => TRANSLATIONS[key]?.[language] || key;

  const filteredProducts = products
    .filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return 0;
    });

  const categories = ['all', ...new Set(products.map(p => p.category))];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-bold mb-2">{t('shop')}</h1>
          <p className="text-muted-foreground">{t('exclusiveCollection')}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder={t('searchProducts')}
              className="pl-10 w-full sm:w-64"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">{t('featured')}</SelectItem>
              <SelectItem value="price-low">{t('priceLowToHigh')}</SelectItem>
              <SelectItem value="price-high">{t('priceHighToLow')}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-12">
        {categories.map(category => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
            className="capitalize rounded-full"
          >
            {category === 'all' ? t('all') : category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="group bg-card rounded-2xl border border-border overflow-hidden"
          >
            <Link to={`/product/${product.id}`}>
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
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
                  <ShoppingCart className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
