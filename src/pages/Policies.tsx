/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { useAppContext } from '../lib/store';
import { TRANSLATIONS, WARRANTY_PLANS } from '../lib/constants';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Shield, Truck, Lock, RotateCcw, AlertTriangle } from 'lucide-react';

const Policies = () => {
  const { language } = useAppContext();
  const t = (key: string) => TRANSLATIONS[key]?.[language] || key;

  return (
    <div className="py-12 bg-background min-h-screen text-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-foreground">{t('policies')}</h1>
          <p className="text-foreground/60">
            Transparent, fair, and designed to protect our customers. Please read our policies carefully.
          </p>
        </header>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {/* Warranty Policy */}
          <AccordionItem value="warranty" className="border border-border/20 px-6 py-2 bg-background">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-4 text-left rtl:text-right">
                <Shield className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-foreground">{t('warrantyPolicy')}</h3>
                  <p className="text-sm text-foreground/50 font-normal">{t('warrantyDesc')}</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-6 pb-8">
              <div className="space-y-8">
                <div className="p-4 bg-destructive/10 border border-destructive/20 flex items-start gap-4">
                  <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0" />
                  <p className="text-sm text-destructive font-bold">
                    {t('warrantyWarning')}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {WARRANTY_PLANS.map((plan) => (
                    <div key={plan.id} className="p-6 border border-border/10 bg-foreground/5">
                      <h4 className="text-lg font-black uppercase text-primary mb-2">{plan.name} {t('warranty')}</h4>
                      <p className="text-sm font-bold mb-4 text-foreground">{plan.duration}</p>
                      <ul className="space-y-2">
                        {plan.features.map((f, i) => (
                          <li key={i} className="text-sm text-foreground/70 flex items-center gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full" /> {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold uppercase tracking-wider text-sm text-foreground">{t('greenCarePlusTitle')}</h4>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {t('greenCarePlusDesc')}
                  </p>
                  <ul className="list-disc list-inside text-sm text-foreground/70 space-y-1 ml-4 rtl:mr-4">
                    <li>{t('greenShield')}</li>
                    <li>{t('greenBezelShield')}</li>
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Shipping Policy */}
          <AccordionItem value="shipping" className="border border-border/20 px-6 py-2 bg-background">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-4 text-left rtl:text-right">
                <Truck className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-foreground">{t('shippingPolicy')}</h3>
                  <p className="text-sm text-foreground/50 font-normal">{t('shippingDesc')}</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-6 pb-8 space-y-6">
              <div className="space-y-4">
                <h4 className="font-bold uppercase tracking-wider text-sm text-foreground">{t('shippingPolicy')}</h4>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {t('shippingPolicyContent')}
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-bold uppercase tracking-wider text-sm text-foreground">{t('generalShipping')}</h4>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {t('generalShippingDesc')}
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Privacy Policy */}
          <AccordionItem value="privacy" className="border border-border/20 px-6 py-2 bg-background">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-4 text-left rtl:text-right">
                <Lock className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-foreground">{t('privacyPolicy')}</h3>
                  <p className="text-sm text-foreground/50 font-normal">{t('privacyDesc')}</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-6 pb-8">
              <p className="text-sm text-foreground/70 leading-relaxed">
                {t('privacyContent')}
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* Return Policy */}
          <AccordionItem value="returns" className="border border-border/20 px-6 py-2 bg-background">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-4 text-left rtl:text-right">
                <RotateCcw className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-foreground">{t('returnPolicy')}</h3>
                  <p className="text-sm text-foreground/50 font-normal">{t('returnDesc')}</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-6 pb-8">
              <p className="text-sm text-foreground/70 leading-relaxed">
                {t('returnContent')}
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Policies;
