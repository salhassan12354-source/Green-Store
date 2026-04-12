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
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-12 text-center">{t('policies')}</h1>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {/* Warranty Policy */}
        <AccordionItem value="warranty" className="border rounded-xl px-4">
          <AccordionTrigger className="hover:no-underline">
            <div className="flex items-center gap-3 text-left rtl:text-right">
              <Shield className="h-5 w-5 text-primary" />
              <div>
                <h3 className="font-bold">{t('warrantyPolicy')}</h3>
                <p className="text-xs text-muted-foreground font-normal">{t('warrantyDesc')}</p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-4 pb-6">
            <div className="space-y-6">
              <div className="p-4 bg-amber-50 rounded-lg flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0" />
                <p className="text-sm text-amber-700">
                  {t('warrantyWarning')}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {WARRANTY_PLANS.map((plan) => (
                  <div key={plan.id} className="p-4 bg-muted rounded-lg">
                    <h4 className="font-bold text-primary mb-2">{plan.name} {t('warranty')}</h4>
                    <p className="text-sm font-bold mb-1">{plan.duration}</p>
                    <p className="text-xs font-bold text-primary mb-2">
                      {plan.price === 0 ? t('free') : `+${plan.price} SAR`}
                    </p>
                    <ul className="space-y-1">
                      {plan.features.map((f, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1 h-1 bg-primary rounded-full" /> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-sm">{t('greenCarePlusTitle')}</h4>
                <p className="text-sm text-muted-foreground">
                  {t('greenCarePlusDesc')}
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                  <li>{t('greenShield')}</li>
                  <li>{t('greenBezelShield')}</li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Shipping Policy */}
        <AccordionItem value="shipping" className="border rounded-xl px-4">
          <AccordionTrigger className="hover:no-underline">
            <div className="flex items-center gap-3 text-left rtl:text-right">
              <Truck className="h-5 w-5 text-primary" />
              <div>
                <h3 className="font-bold">{t('shippingPolicy')}</h3>
                <p className="text-xs text-muted-foreground font-normal">{t('shippingDesc')}</p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-4 pb-6 space-y-4">
            <div className="space-y-2">
              <h4 className="font-bold text-sm">{t('shippingPolicy')}</h4>
              <p className="text-sm text-muted-foreground">
                {t('shippingPolicyContent')}
              </p>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-bold text-sm">{t('generalShipping')}</h4>
              <p className="text-sm text-muted-foreground">
                {t('generalShippingDesc')}
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Privacy Policy */}
        <AccordionItem value="privacy" className="border rounded-xl px-4">
          <AccordionTrigger className="hover:no-underline">
            <div className="flex items-center gap-3 text-left rtl:text-right">
              <Lock className="h-5 w-5 text-primary" />
              <div>
                <h3 className="font-bold">{t('privacyPolicy')}</h3>
                <p className="text-xs text-muted-foreground font-normal">{t('privacyDesc')}</p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-4 pb-6">
            <p className="text-sm text-muted-foreground">
              {t('privacyContent')}
            </p>
          </AccordionContent>
        </AccordionItem>

        {/* Return Policy */}
        <AccordionItem value="returns" className="border rounded-xl px-4">
          <AccordionTrigger className="hover:no-underline">
            <div className="flex items-center gap-3 text-left rtl:text-right">
              <RotateCcw className="h-5 w-5 text-primary" />
              <div>
                <h3 className="font-bold">{t('returnPolicy')}</h3>
                <p className="text-xs text-muted-foreground font-normal">{t('returnDesc')}</p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-4 pb-6">
            <p className="text-sm text-muted-foreground">
              {t('returnContent')}
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Policies;
