/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'ar' | 'en' | 'es' | 'it' | 'fr';

export type Country = 'SA' | 'EG';

export interface WarrantyPlan {
  id: string;
  name: string;
  price: number;
  priceEG?: number;
  duration: string;
  features: string[];
}

export interface Product {
  id: string;
  name: string;
  price: number;
  priceEG?: number;
  originalPrice?: number;
  originalPriceEG?: number;
  description: string;
  images: string[];
  stock: boolean;
  shippingFee?: number;
  shippingFeeEG?: number;
  category?: 'men' | 'women';
  popularity?: number;
  isSignature?: boolean;
  customWarrantyPlans?: WarrantyPlan[];
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  basePrice: number;
  quantity: number;
  warrantyId?: string;
  greenCarePlus: boolean;
  boxType: 'standard' | 'special';
  totalPrice: number;
}

export interface Translation {
  [key: string]: {
    [lang in Language]: string;
  };
}
