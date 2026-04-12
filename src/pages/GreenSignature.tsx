/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../lib/store';
import { TRANSLATIONS, GREEN_SIGNATURE_LOGO_URL } from '../lib/constants';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { Sparkles } from 'lucide-react';

const GreenSignature = () => {
  const { language, products, convertPrice, getCurrencySymbol } = useAppContext();
  const t = (key: string) => TRANSLATIONS[key]?.[language] || key;

  const signatureProducts = products.filter(p => p.isSignature);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-50">
          <img 
            src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury Watch Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 flex justify-center"
          >
            <img 
              src={GREEN_SIGNATURE_LOGO_URL} 
              alt="Green Signature Logo" 
              className="h-32 md:h-40 object-contain"
            />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            {t('greenSignature')}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
          >
            {t('greenSignatureDesc')}
          </motion.p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl font-bold whitespace-nowrap">{t('exclusiveCollection')}</h2>
          <div className="h-px w-full bg-border" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {signatureProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link to={`/product/${product.id}`}>
                <Card className="overflow-hidden border-border bg-card group-hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="aspect-[4/5] overflow-hidden bg-muted">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{product.name}</h3>
                        <Badge variant="secondary">{t('greenSignature')}</Badge>
                      </div>
                      <p className="text-lg font-bold text-primary">
                        {convertPrice(product.price, product.id).toLocaleString()} {getCurrencySymbol()}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
        
        {signatureProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">
              {t('greenSignatureBuilding')}
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default GreenSignature;
