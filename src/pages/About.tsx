/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { useAppContext } from '../lib/store';
import { TRANSLATIONS, LOGO_URL, DARK_LOGO_URL } from '../lib/constants';

const About = () => {
  const { language } = useAppContext();
  const t = (key: string) => TRANSLATIONS[key]?.[language] || key;

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">{t('aboutTitle')}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {t('aboutSubtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">{t('philosophyTitle')}</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            {t('philosophyDesc1')}
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t('philosophyDesc2')}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-muted rounded-2xl aspect-square flex items-center justify-center p-12"
        >
          <img src={LOGO_URL} alt="Green Brand" className="w-full h-auto opacity-20 grayscale" />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
        <div className="p-6 bg-card rounded-xl border border-border">
          <h3 className="font-bold mb-2">{t('whyTrustUsTitle')}</h3>
          <p className="text-sm text-muted-foreground">
            {t('whyTrustUsDesc')}
          </p>
        </div>
        <div className="p-6 bg-card rounded-xl border border-border">
          <h3 className="font-bold mb-2">{t('ourStandardsTitle')}</h3>
          <p className="text-sm text-muted-foreground">
            {t('ourStandardsDesc')}
          </p>
        </div>
        <div className="p-6 bg-card rounded-xl border border-border">
          <h3 className="font-bold mb-2">{t('productExcellenceTitle')}</h3>
          <p className="text-sm text-muted-foreground">
            {t('productExcellenceDesc')}
          </p>
        </div>
        <div className="p-6 bg-card rounded-xl border border-border">
          <h3 className="font-bold mb-2">{t('warrantyStrengthTitle')}</h3>
          <p className="text-sm text-muted-foreground">
            {t('warrantyStrengthDesc')}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-muted rounded-2xl aspect-[4/3] flex items-center justify-center p-12 order-2 md:order-1"
        >
          <img src={LOGO_URL} alt="Green Detail" className="w-full h-auto opacity-20 grayscale" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1 md:order-2"
        >
          <h2 className="text-3xl font-bold mb-6">{t('detailTitle')}</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            {t('detailDesc')}
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-4xl font-bold text-primary mb-1">100%</h4>
              <p className="text-sm text-muted-foreground">{t('qualityInspected')}</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-primary mb-1">24/7</h4>
              <p className="text-sm text-muted-foreground">{t('premiumSupport')}</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-24 py-16 bg-primary rounded-3xl text-primary-foreground text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-8 italic">
            "{t('quote')}"
          </h3>
          <p className="uppercase tracking-widest text-sm font-bold opacity-80">{t('greenPromise')}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
