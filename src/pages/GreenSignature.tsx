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
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury Watch Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 flex justify-center"
          >
            <img 
              src={GREEN_SIGNATURE_LOGO_URL} 
              alt="Green Signature Logo" 
              className="h-32 md:h-48 object-contain drop-shadow-[0_0_30px_rgba(26,127,75,0.5)]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white mb-6"
          >
            {t('greenSignature')}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 font-medium max-w-2xl mx-auto leading-relaxed"
          >
            {t('greenSignatureDesc')}
          </motion.p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px flex-1 bg-primary/20" />
            <Sparkles className="text-primary h-6 w-6" />
            <h2 className="text-2xl font-black uppercase tracking-[0.3em]">{t('exclusiveCollection')}</h2>
            <div className="h-px flex-1 bg-primary/20" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {signatureProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
              >
                <Link to={`/product/${product.id}`}>
                  <Card className="group border-none shadow-none bg-transparent overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative aspect-[4/5] overflow-hidden bg-foreground/2 group-hover:shadow-[0_0_50px_rgba(26,127,75,0.2)] transition-all duration-700 border border-primary/10">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end p-8">
                          <Badge className="bg-primary text-white rounded-none px-6 py-2 font-black uppercase tracking-widest shadow-2xl w-full justify-center">{t('viewDetails')}</Badge>
                        </div>
                        <div className="absolute top-6 right-6">
                           <Badge className="bg-primary text-white rounded-none px-3 py-1 text-[10px] font-black uppercase tracking-widest shadow-xl">
                            {t('greenSignature')}
                          </Badge>
                        </div>
                      </div>
                      <div className="mt-8 space-y-2 text-center">
                        <h3 className="text-2xl font-black uppercase tracking-tight group-hover:text-primary transition-colors text-foreground leading-tight">{product.name}</h3>
                        <div className="flex items-center justify-center gap-3">
                          <p className="text-xl font-light text-foreground/40 tracking-tight">
                            {convertPrice(product.price, product.id).toLocaleString()} <span className="text-xs uppercase tracking-widest ml-1">{getCurrencySymbol()}</span>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
          
          {signatureProducts.length === 0 && (
            <div className="text-center py-20">
               <p className="text-xl text-muted-foreground font-medium">
                {t('greenSignatureBuilding')}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default GreenSignature;
