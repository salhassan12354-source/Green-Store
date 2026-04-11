/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { useAppContext } from '../lib/store';
import { TRANSLATIONS, LOGO_URL, DARK_LOGO_URL } from '../lib/constants';

const About = () => {
  const { language, isDarkMode } = useAppContext();
  const t = (key: string) => TRANSLATIONS[key]?.[language] || key;

  const currentLogo = isDarkMode ? DARK_LOGO_URL : LOGO_URL;

  return (
    <div className="bg-background text-foreground">
      {/* Hero */}
      <section className="relative py-48 bg-luxury-gradient overflow-hidden border-b border-border/10">
        <div className="absolute inset-0 z-0 opacity-5">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border border-foreground/10" />
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-primary text-xs font-black uppercase tracking-[0.8em] mb-12 block">{t('brandName')}</span>
            <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-12 leading-none text-foreground">
              {t('aboutTitle')}
            </h1>
            <p className="text-2xl md:text-4xl text-foreground/40 font-light leading-tight max-w-3xl mx-auto italic tracking-tight">
              "{t('aboutSubtitle')}"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy & Story */}
      <section className="py-48">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-32 items-center mb-48">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="text-primary text-xs font-black uppercase tracking-[0.5em] mb-8 block">{t('philosophyTitle')}</span>
              <h2 className="text-5xl md:text-7xl font-black mb-12 uppercase tracking-tighter text-foreground leading-none">{t('philosophyTitle')}</h2>
              <p className="text-foreground/60 text-xl md:text-2xl leading-relaxed mb-10 font-light tracking-tight">
                {t('philosophyDesc1')}
              </p>
              <p className="text-foreground/60 text-xl md:text-2xl leading-relaxed font-light tracking-tight">
                {t('philosophyDesc2')}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="relative aspect-square bg-foreground/2 flex items-center justify-center p-24 overflow-hidden group"
            >
              <img src={currentLogo} alt="Green Brand" className="w-full h-auto opacity-10 grayscale group-hover:scale-110 transition-transform duration-[3000ms]" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 border border-primary/10 m-12" />
              <div className="absolute top-0 left-0 w-full h-full bg-luxury-gradient opacity-5" />
            </motion.div>
          </div>

          {/* Detailed Sections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 lg:gap-32">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-4xl font-black uppercase tracking-tighter text-foreground leading-none">{t('whyTrustUsTitle')}</h3>
              <p className="text-foreground/40 text-lg md:text-xl leading-relaxed font-light">
                {t('whyTrustUsDesc')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <h3 className="text-4xl font-black uppercase tracking-tighter text-foreground leading-none">{t('ourStandardsTitle')}</h3>
              <p className="text-foreground/40 text-lg md:text-xl leading-relaxed font-light">
                {t('ourStandardsDesc')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              <h3 className="text-4xl font-black uppercase tracking-tighter text-foreground leading-none">{t('productExcellenceTitle')}</h3>
              <p className="text-foreground/40 text-lg md:text-xl leading-relaxed font-light">
                {t('productExcellenceDesc')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="space-y-8"
            >
              <h3 className="text-4xl font-black uppercase tracking-tighter text-foreground leading-none">{t('warrantyStrengthTitle')}</h3>
              <p className="text-foreground/40 text-lg md:text-xl leading-relaxed font-light">
                {t('warrantyStrengthDesc')}
              </p>
            </motion.div>
          </div>

          {/* Attention to Detail Section */}
          <div className="mt-48 grid grid-cols-1 md:grid-cols-2 gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 md:order-1 relative aspect-[4/5] bg-foreground/2 flex items-center justify-center p-24 overflow-hidden"
            >
              <img src={currentLogo} alt="Green Detail" className="w-full h-auto opacity-10 grayscale scale-150" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 border border-primary/10 m-12" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <span className="text-primary text-xs font-black uppercase tracking-[0.5em] mb-8 block">{t('detailTitle')}</span>
              <h2 className="text-5xl md:text-7xl font-black mb-12 uppercase tracking-tighter text-foreground leading-none">{t('detailTitle')}</h2>
              <p className="text-foreground/60 text-xl md:text-2xl leading-relaxed mb-12 font-light tracking-tight">
                {t('detailDesc')}
              </p>
              <div className="grid grid-cols-2 gap-12 mt-16">
                <div className="border-l-4 border-primary/20 pl-10">
                  <h4 className="text-6xl font-black text-primary mb-4 tracking-tighter">100%</h4>
                  <p className="text-xs text-foreground/40 uppercase font-black tracking-[0.3em]">{t('qualityInspected')}</p>
                </div>
                <div className="border-l-4 border-primary/20 pl-10">
                  <h4 className="text-6xl font-black text-primary mb-4 tracking-tighter">24/7</h4>
                  <p className="text-xs text-foreground/40 uppercase font-black tracking-[0.3em]">{t('premiumSupport')}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-48 bg-primary text-primary-foreground text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border border-white/10" />
            ))}
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-white/20 text-[12rem] font-serif mb-0 block leading-none select-none pointer-events-none">"</span>
            <h3 className="text-4xl md:text-6xl font-light italic leading-tight mb-16 tracking-tight -mt-20">
              {t('quote')}
            </h3>
            <div className="w-24 h-px bg-white/30 mx-auto mb-8" />
            <p className="uppercase tracking-[0.5em] text-sm font-black text-white/60">{t('greenPromise')}</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
