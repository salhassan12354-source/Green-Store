/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, WarrantyPlan, Translation } from '../types';

export const LOGO_URL = "https://res.cloudinary.com/dozskgkr6/image/upload/v1776011907/gemini-2.5-flash-image_Use_the_uploaded_eagle_image_as_reference._Convert_it_into_sleek_minimalist_luxu-0_1_1_fxfegr.png";
export const DARK_LOGO_URL = "https://res.cloudinary.com/dozskgkr6/image/upload/v1776011907/gemini-2.5-flash-image_Use_the_uploaded_eagle_image_as_reference._Convert_it_into_sleek_minimalist_luxu-0_1_1_fxfegr.png";
export const GREEN_SIGNATURE_LOGO_URL = "https://res.cloudinary.com/dozskgkr6/image/upload/v1776011907/gemini-2.5-flash-image_Use_the_uploaded_eagle_image_as_reference._Convert_it_into_sleek_minimalist_luxu-0_1_1_fxfegr.png";

export const COLORS = {
  primary: "#1A4D2E", // Darker green as seen in the user's image
  white: "#FFFFFF",
  black: "#000000",
};

export const WARRANTY_PLANS: WarrantyPlan[] = [
  {
    id: 'silver',
    name: 'Silver',
    price: 0,
    duration: '3 months',
    features: ['Manufacturing defects only', 'Free with product']
  },
  {
    id: 'gold',
    name: 'Gold',
    price: 120,
    duration: 'Covers any issue',
    features: ['Free battery replacement', 'Extended coverage']
  },
  {
    id: 'diamond',
    name: 'Diamond',
    price: 180,
    duration: 'Silver + Gold',
    features: ['Limited maintenance and cleaning', 'Priority support']
  },
  {
    id: 'platinum',
    name: 'Platinum',
    price: 250,
    duration: '2 years',
    features: ['Full maintenance', 'Free battery replacement', 'All previous plans']
  }
];

export const SIGNATURE_WARRANTY_PLANS: WarrantyPlan[] = [
  {
    id: 'silver',
    name: 'Silver',
    price: 0,
    priceEG: 0,
    duration: '3 months',
    features: ['Manufacturing defects only', 'Free with product']
  },
  {
    id: 'gold',
    name: 'Gold',
    price: 180,
    priceEG: 2700,
    duration: 'Covers any issue',
    features: ['Free battery replacement', 'Extended coverage']
  },
  {
    id: 'diamond',
    name: 'Diamond',
    price: 240,
    priceEG: 4300,
    duration: 'Silver + Gold',
    features: ['Limited maintenance and cleaning', 'Priority support']
  },
  {
    id: 'platinum',
    name: 'Platinum',
    price: 350,
    priceEG: 6000,
    duration: '2 years',
    features: ['Full maintenance', 'Free battery replacement', 'All previous plans']
  }
];

export const GREEN_CARE_PLUS_PRICE = 60;
export const SPECIAL_BOX_PRICE = 100;
export const EGYPT_SHIPPING_FEE_SAR = 230; // Approx 3000 EGP
export const EGYPT_SHIPPING_FEE_EGP = 3000;

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'black-panther',
    name: 'Green Black Panther',
    price: 250,
    priceEG: 4000,
    description: 'A bold and powerful timepiece inspired by strength and agility. Features a sleek black design with premium accents.',
    images: ['https://res.cloudinary.com/dozskgkr6/image/upload/v1775973152/BCO.143b70a3-549f-4470-8a16-0bef4ce6c63d_lzncim.png'],
    stock: true,
    shippingFee: 25,
    shippingFeeEG: 3000,
    category: 'men',
    popularity: 96,
    customWarrantyPlans: [
      {
        id: 'silver',
        name: 'Silver',
        price: 0,
        priceEG: 0,
        duration: '3 months',
        features: ['Manufacturing defects only', 'Free with product']
      },
      {
        id: 'gold',
        name: 'Gold',
        price: 0,
        priceEG: 0,
        duration: 'Included',
        features: ['Covers any issue', 'Free battery replacement', 'Included with product']
      },
      {
        id: 'diamond',
        name: 'Diamond',
        price: 100,
        priceEG: 1500,
        duration: 'Silver + Gold',
        features: ['Limited maintenance and cleaning', 'Priority support']
      },
      {
        id: 'platinum',
        name: 'Platinum',
        price: 180,
        priceEG: 2800,
        duration: '2 years',
        features: ['Full maintenance', 'Free battery replacement', 'All previous plans']
      }
    ]
  },
  {
    id: 'gravion',
    name: 'Green Gravion',
    price: 179,
    priceEG: 2500,
    description: 'Elegant and versatile, the Gravion is designed for the modern individual who values both style and function.',
    images: ['https://res.cloudinary.com/dozskgkr6/image/upload/v1775973019/BCO.4bbbc26d-22cb-4332-8aaa-e00ee9cba93c_tpx7pl.png'],
    stock: true,
    shippingFee: 25,
    shippingFeeEG: 3000,
    category: 'men',
    popularity: 90,
  },
  {
    id: 'crownforge',
    name: 'Green Crownforge',
    price: 210,
    priceEG: 3200,
    description: 'Crafted with precision, the Crownforge represents the pinnacle of engineering and timeless design.',
    images: ['https://res.cloudinary.com/dozskgkr6/image/upload/v1775973271/BCO.32a26ac8-ee65-497a-b745-3b5ab9ee4463_ipmz6f.png'],
    stock: true,
    shippingFee: 25,
    shippingFeeEG: 3000,
    category: 'men',
    popularity: 94,
    customWarrantyPlans: [
      {
        id: 'silver',
        name: 'Silver',
        price: 0,
        priceEG: 0,
        duration: '3 months',
        features: ['Manufacturing defects only', 'Free with product']
      },
      {
        id: 'gold',
        name: 'Gold',
        price: 0,
        priceEG: 0,
        duration: 'Included',
        features: ['Covers any issue', 'Free battery replacement', 'Included with product']
      },
      {
        id: 'diamond',
        name: 'Diamond',
        price: 100,
        priceEG: 1500,
        duration: 'Silver + Gold',
        features: ['Limited maintenance and cleaning', 'Priority support']
      },
      {
        id: 'platinum',
        name: 'Platinum',
        price: 180,
        priceEG: 2800,
        duration: '2 years',
        features: ['Full maintenance', 'Free battery replacement', 'All previous plans']
      }
    ]
  },
  {
    id: 'azure-crown',
    name: 'Azure Crown',
    price: 270,
    priceEG: 4000,
    description: 'A Signature series masterpiece. The Azure Crown combines royal elegance with unmatched precision.',
    images: ['https://res.cloudinary.com/dozskgkr6/image/upload/v1775974035/BCO.7d0ca9be-4b3b-45a7-a3c7-69c0e3015059_dmcnsk.png'],
    stock: true,
    shippingFee: 25,
    shippingFeeEG: 3000,
    category: 'men',
    popularity: 99,
    isSignature: true,
    customWarrantyPlans: [
      {
        id: 'silver',
        name: 'Silver',
        price: 0,
        priceEG: 0,
        duration: '3 months',
        features: ['Manufacturing defects only', 'Free with product']
      },
      {
        id: 'gold',
        name: 'Gold',
        price: 0,
        priceEG: 0,
        duration: 'Included',
        features: ['Covers any issue', 'Free battery replacement', 'Included with product']
      },
      {
        id: 'platinum_custom',
        name: 'Platinum',
        price: 150,
        priceEG: 2400,
        duration: '2 years',
        features: ['Full maintenance', 'Free battery replacement', 'Priority service']
      },
      {
        id: 'palladium',
        name: 'Palladium',
        price: 300,
        priceEG: 4800,
        duration: '3 years',
        features: ['All Platinum services', 'Free battery replacement', 'Gift straps included', 'Elite concierge service']
      },
      {
        id: 'green_eagle',
        name: 'Green Eagle',
        price: 500,
        priceEG: 8000,
        duration: '5 years',
        features: ['Ultimate protection', 'Unlimited maintenance', 'VIP home service', 'Exclusive Green Eagle membership']
      }
    ]
  },
  {
    id: 'rm-786',
    name: 'Green RM‑786',
    price: 210,
    priceEG: 3400,
    description: 'A masterpiece of precision and elegance, featuring a stunning design and premium finish.',
    images: ['https://res.cloudinary.com/dozskgkr6/image/upload/v1775969399/Copilot_20260412_072018_kepb2l.png'],
    stock: true,
    shippingFee: 25,
    shippingFeeEG: 3000,
    category: 'men',
    popularity: 98,
  },
  {
    id: 'panthia',
    name: 'Green Panthia',
    price: 140,
    priceEG: 2300,
    description: 'Sophisticated style meets rugged durability. The Panthia is built for those who demand the best.',
    images: ['https://res.cloudinary.com/dozskgkr6/image/upload/v1775969400/Copilot_20260412_073404_xvhmui.png'],
    stock: true,
    shippingFee: 25,
    shippingFeeEG: 3000,
    category: 'women',
    popularity: 95,
  },
  {
    id: 'golden-crystaliana',
    name: 'Green Golden Crystaliana',
    price: 160,
    priceEG: 2600,
    description: 'A beautiful watch with a stunning golden design and elegant finish. Perfect for any occasion.',
    images: ['https://res.cloudinary.com/dozskgkr6/image/upload/v1775969399/Copilot_20260412_073448_n8eihe.png'],
    stock: true,
    shippingFee: 25,
    shippingFeeEG: 3000,
    category: 'men',
    popularity: 92,
  },
  {
    id: '1',
    name: 'Green GMT starbx',
    price: 138,
    priceEG: 2350,
    description: 'ساعة Green GMT StarBX الفاخرة، تصميم يجمع بين الأناقة والعملية مع ميزة توقيت جرينتش، مثالية للمسافرين وعشاق الساعات. شاملة الضمان الفضي مجاناً.',
    images: ['https://res.cloudinary.com/dozskgkr6/image/upload/v1776018214/BCO.f65f25e1-02b4-4ec9-af26-32d1aae7bfbf_osbswx.png'],
    stock: true,
    shippingFee: 25,
    shippingFeeEG: 3000,
    category: 'men',
    popularity: 85,
  },
  {
    id: '2',
    name: 'Green NUTUS',
    price: 160,
    priceEG: 2750,
    description: 'Sophisticated style meets rugged durability. The NUTUS is built for those who demand the best. Includes Gold Warranty for free.',
    images: ['https://res.cloudinary.com/dozskgkr6/image/upload/v1776018580/BCO.8e717dac-e5b3-4747-88c0-62c73b494da3_igj17b.png'],
    stock: true,
    shippingFee: 40,
    shippingFeeEG: 700,
    category: 'men',
    popularity: 92,
    customWarrantyPlans: [
      {
        id: 'silver',
        name: 'Silver',
        price: 0,
        priceEG: 0,
        duration: '3 months',
        features: ['Manufacturing defects only', 'Free with product']
      },
      {
        id: 'gold',
        name: 'Gold',
        price: 0,
        priceEG: 0,
        duration: 'Included',
        features: ['Covers any issue', 'Free battery replacement', 'Included with product']
      },
      {
        id: 'diamond',
        name: 'Diamond',
        price: 100,
        priceEG: 1500,
        duration: 'Silver + Gold',
        features: ['Limited maintenance and cleaning', 'Priority support']
      },
      {
        id: 'platinum',
        name: 'Platinum',
        price: 180,
        priceEG: 2800,
        duration: '2 years',
        features: ['Full maintenance', 'Free battery replacement', 'All previous plans']
      }
    ]
  },
  {
    id: '3',
    name: 'Green Daylux PINK',
    price: 110,
    priceEG: 1899,
    originalPrice: 140,
    originalPriceEG: 2150,
    description: 'A beautiful women\'s watch with a delicate pink dial and elegant design. Perfect for any occasion.',
    images: ['https://res.cloudinary.com/dozskgkr6/image/upload/v1775974251/BCO.28b71305-0721-457d-b963-03156478d9d3_bdcbxa.png'],
    stock: true,
    shippingFee: 30,
    shippingFeeEG: 600,
    category: 'women',
    popularity: 78,
  },
  {
    id: '4',
    name: 'Green Tiffany thin edtion',
    price: 165,
    priceEG: 2338,
    description: 'Ultra-thin and stylish, this men\'s watch features a classic Tiffany blue dial for a modern look. Includes Gold Warranty for free.',
    images: ['https://res.cloudinary.com/dozskgkr6/image/upload/v1776018524/BCO.32301135-067f-49e4-9400-6e6442f5bdc0_hr24ni.png'],
    stock: true,
    shippingFee: 20,
    shippingFeeEG: 400,
    category: 'men',
    popularity: 95,
    customWarrantyPlans: [
      {
        id: 'silver',
        name: 'Silver',
        price: 0,
        priceEG: 0,
        duration: '3 months',
        features: ['Manufacturing defects only', 'Free with product']
      },
      {
        id: 'gold',
        name: 'Gold',
        price: 0,
        priceEG: 0,
        duration: 'Included',
        features: ['Covers any issue', 'Free battery replacement', 'Included with product']
      },
      {
        id: 'diamond',
        name: 'Diamond',
        price: 100,
        priceEG: 1500,
        duration: 'Silver + Gold',
        features: ['Limited maintenance and cleaning', 'Priority support']
      },
      {
        id: 'platinum',
        name: 'Platinum',
        price: 180,
        priceEG: 2800,
        duration: '2 years',
        features: ['Full maintenance', 'Free battery replacement', 'All previous plans']
      }
    ]
  },
  {
    id: 'sig-1',
    name: 'Green casio edifice EFR-539L-7C',
    price: 570,
    priceEG: 8250,
    description: 'Exclusive Signature Edition. A powerful timepiece from the world-renowned Edifice collection. Includes Diamond Warranty for free.',
    images: ['https://res.cloudinary.com/dozskgkr6/image/upload/v1776018079/BCO.6410cfaa-aece-4ab4-a6c7-c6052f6e67c6_kqy1ow.png'],
    stock: true,
    shippingFee: 50,
    shippingFeeEG: 3000,
    category: 'men',
    popularity: 100,
    isSignature: true,
    customWarrantyPlans: [
      {
        id: 'diamond',
        name: 'Diamond',
        price: 0,
        priceEG: 0,
        duration: 'Included',
        features: ['Silver + Gold coverage', 'Limited maintenance', 'Included with product']
      },
      {
        id: 'platinum_custom',
        name: 'Platinum',
        price: 150,
        priceEG: 2400,
        duration: '2 years',
        features: ['Full maintenance', 'Free battery replacement', 'Priority service']
      },
      {
        id: 'palladium',
        name: 'Palladium',
        price: 300,
        priceEG: 4800,
        duration: '3 years',
        features: ['All Platinum services', 'Free battery replacement', 'Gift straps included', 'Elite concierge service']
      }
    ]
  },
  {
    id: 'sig-2',
    name: 'Green CASIO Edifice EFR-539D-1A',
    price: 589.99,
    priceEG: 9000,
    description: 'Signature Elite Series. Robust stainless steel design with precision Japanese movement. Includes Diamond Warranty for free.',
    images: ['https://res.cloudinary.com/dozskgkr6/image/upload/v1776018673/BCO.de6ebd5b-9e6b-4df3-8d08-fc01b9d58729_x4u73v.png'],
    stock: true,
    shippingFee: 50,
    shippingFeeEG: 3000,
    category: 'men',
    popularity: 98,
    isSignature: true,
    customWarrantyPlans: [
      {
        id: 'diamond',
        name: 'Diamond',
        price: 0,
        priceEG: 0,
        duration: 'Included',
        features: ['Silver + Gold coverage', 'Limited maintenance', 'Included with product']
      },
      {
        id: 'platinum_custom',
        name: 'Platinum',
        price: 150,
        priceEG: 2400,
        duration: '2 years',
        features: ['Full maintenance', 'Free battery replacement', 'Priority service']
      },
      {
        id: 'palladium',
        name: 'Palladium',
        price: 300,
        priceEG: 4800,
        duration: '3 years',
        features: ['All Platinum services', 'Free battery replacement', 'Gift straps included', 'Elite concierge service']
      }
    ]
  },
  {
    id: 'sig-3',
    name: 'Green Tommy Hilfiger 1792064',
    price: 1000,
    priceEG: 16000,
    description: 'Elite Signature Series. A masterpiece of design and precision by Tommy Hilfiger. Includes Gold Warranty.',
    images: ['https://res.cloudinary.com/dozskgkr6/image/upload/v1775971688/Copilot_20260412_082547_kita2s.png'],
    stock: true,
    shippingFee: 50,
    shippingFeeEG: 3000,
    category: 'men',
    popularity: 100,
    isSignature: true,
    customGreenCarePrice: {
      price: 180,
      priceEG: 2400
    },
    customWarrantyPlans: [
      {
        id: 'gold',
        name: 'Gold',
        price: 0,
        priceEG: 0,
        duration: 'Included',
        features: ['Covers any issue', 'Free battery replacement', 'Included with product']
      },
      {
        id: 'platinum_custom',
        name: 'Platinum',
        price: 200,
        priceEG: 3200,
        duration: '2 years',
        features: ['Full maintenance', 'Free battery replacement', 'Priority service']
      },
      {
        id: 'palladium',
        name: 'Palladium',
        price: 400,
        priceEG: 6400,
        duration: '3 years',
        features: ['All Platinum services', 'Free battery replacement', 'Gift straps included', 'Elite concierge service']
      },
      {
        id: 'green_eagle',
        name: 'Green Eagle',
        price: 600,
        priceEG: 9600,
        duration: '5 years',
        features: ['Ultimate protection', 'Unlimited maintenance', 'VIP home service', 'Exclusive Green Eagle membership']
      }
    ]
  }
];

export const FREE_GIFT_IMAGE = "https://ae-pic-a1.aliexpress-media.com/kf/S0b635672fe1b462e9083712f5a8d546ff.jpeg_220x220q75.jpeg_.avif";

export const TRANSLATIONS: Translation = {
  home: { ar: 'الرئيسية', en: 'Home', es: 'Inicio', it: 'Home', fr: 'Accueil' },
  shop: { ar: 'المتجر', en: 'Shop', es: 'Tienda', it: 'Negozio', fr: 'Boutique' },
  about: { ar: 'من نحن', en: 'About Us', es: 'Sobre nosotros', it: 'Chi siamo', fr: 'À propos' },
  cart: { ar: 'السلة', en: 'Cart', es: 'Carrito', it: 'Carrello', fr: 'Panier' },
  policies: { ar: 'السياسات', en: 'Policies', es: 'Políticas', it: 'Politiche', fr: 'Politiques' },
  warranty: { ar: 'الضمان', en: 'Warranty', es: 'Garantía', it: 'Garanzia', fr: 'Garantie' },
  shipping: { ar: 'الشحن', en: 'Shipping', es: 'Envío', it: 'Spedizione', fr: 'Livraison' },
  privacy: { ar: 'الخصوصية', en: 'Privacy', es: 'Privacidad', it: 'Privacy', fr: 'Confidentialité' },
  returns: { ar: 'الاسترجاع', en: 'Returns', es: 'Devoluciones', it: 'Resi', fr: 'Retours' },
  addToCart: { ar: 'إضافة للسلة', en: 'Add to Cart', es: 'Añadir al carrito', it: 'Aggiungi al carrello', fr: 'Ajouter au panier' },
  checkout: { ar: 'إتمام الشراء', en: 'Checkout', es: 'Pagar', it: 'Checkout', fr: 'Paiement' },
  total: { ar: 'الإجمالي', en: 'Total', es: 'Total', it: 'Totale', fr: 'Total' },
  currency_SA: { ar: 'ريال', en: 'SAR', es: 'SAR', it: 'SAR', fr: 'SAR' },
  currency_EG: { ar: 'ج.م', en: 'EGP', es: 'EGP', it: 'EGP', fr: 'EGP' },
  shippingFee: { ar: 'سعر الشحن', en: 'Shipping Fee', es: 'Costo de envío', it: 'Costo di spedizione', fr: 'Frais de port' },
  egyptNotice: { 
    ar: 'المتجر لا يشحن إلى مصر حالياً. يمكننا الشحن إلى نقطة في المملكة حسب رغبتك وتتولى إحضارها.', 
    en: 'We do not ship directly to Egypt currently. We can ship to a point in KSA of your choice.', 
    es: 'No enviamos directamente a Egipto actualmente. Podemos enviar a un punto en KSA de su elección.', 
    it: 'Al momento non spediamo direttamente in Egitto. Possiamo spedire in un punto in KSA di tua scelta.', 
    fr: 'Nous n\'expédions pas directement en Égypte pour le moment. Nous pouvons expédier vers un point en Arabie Saoudite de votre choix.' 
  },
  egyptCheckoutError: { 
    ar: 'خدمة الشحن إلى مصر غير متوفرة حالياً.', 
    en: 'Shipping to Egypt is currently unavailable.', 
    es: 'El envío a Egipto no está disponible actualmente.', 
    it: 'La spedizione in Egitto non è al momento disponibile.', 
    fr: 'La livraison en Égypte n\'est pas disponible pour le moment.' 
  },
  shippingPolicyContent: {
    ar: 'المتجر لا يشحن إلى مصر حالياً، لكننا نتقبل الطلبات من مصر ويمكننا شحن الطلبية إلى نقطة في المملكة العربية السعودية حسب رغبة العميل، ويتولى العميل إحضارها من السعودية. سعر الشحن يتحمله الزبون فقط. سعر الشحن الوحيد الذي يتحمله المتجر هو في حالة وجود عطل مصنعي؛ حيث يرسل الزبون الساعة للمتجر في الرياض (على حسابه) ويتم إصلاحها وإعادة إرسالها على حساب المتجر.',
    en: 'The store does not ship to Egypt currently, but we accept orders from Egypt and can ship the order to a point in Saudi Arabia according to the customer\'s desire, and the customer is responsible for bringing it from Saudi Arabia. The shipping price is borne by the customer only. The only shipping price borne by the store is in the event of a manufacturing defect; where the customer sends the watch to the store in Riyadh (at his expense) and it is repaired and resent at the store\'s expense.',
    es: 'La tienda no envía a Egipto actualmente, pero aceptamos pedidos de Egipto y podemos enviar el pedido a un punto en Arabia Saudita según el deseo del cliente, y el cliente es responsable de traerlo de Arabia Saudita. El precio del envío corre a cargo únicamente del cliente. El único precio de envío a cargo de la tienda es en caso de un defecto de fabricación; donde el cliente envía el reloj a la tienda en Riad (a su cargo) y es reparado y reenviado a cargo de la tienda.',
    it: 'Il negozio non spedisce attualmente in Egitto, ma accettiamo ordini dall\'Egitto e possiamo spedire l\'ordine in un punto in Arabia Saudita secondo il desiderio del cliente, e il cliente è responsabile di portarlo dall\'Arabia Saudita. Il prezzo della spedizione è a carico del solo cliente. L\'unico prezzo di spedizione a carico del negozio è in caso di difetto di fabbricazione; dove il cliente invia l\'orologio al negozio a Riyadh (a sue spese) e viene riparato e rispedito a spese del negozio.',
    fr: 'Le magasin n\'expédie pas actuellement en Égypte, mais nous acceptons les commandes d\'Égypte et pouvons expédier la commande vers un point en Arabie Saoudite selon le souhait du client, et le client est responsable de l\'apporter d\'Arabie Saoudite. Le prix de l\'expédition est à la charge du client uniquement. Le seul prix d\'expédition à la charge du magasin est en cas de défaut de fabrication ; où le cliente envoie la montre au magasin à Riyad (à ses frais) et elle est réparée et renvoyée aux frais du magasin.'
  },
  greenCarePlusLimited: { ar: 'جرين كير بلس (ليمتيد اديشن)', en: 'Green Care Plus (Limited Edition)', es: 'Green Care Plus (Limited Edition)', it: 'Green Care Plus (Limited Edition)', fr: 'Green Care Plus (Limited Edition)' },
  greenCarePlusLimitedDesc: { ar: 'حماية كاملة لساعتك: جرين شيلد المقوى وجرين بازل شيلد المقوى', en: 'Full protection for your watch: Reinforced Green Shield and Reinforced Green Bezel Shield', es: 'Protección completa', it: 'Protezione completa', fr: 'Protection complète' },
  greenCarePlus: { ar: 'جرين كير بلس', en: 'Green Care Plus', es: 'Green Care Plus', it: 'Green Care Plus', fr: 'Green Care Plus' },
  boxOption: { ar: 'خيار الصندوق', en: 'Box Option', es: 'Opción de caja', it: 'Opzione scatola', fr: 'Option de boîte' },
  standardBox: { ar: 'صندوق الشركة القياسي (مجاني)', en: 'Standard Company Box (Free)', es: 'Caja estándar (Gratis)', it: 'Scatola standard (Gratis)', fr: 'Boîte standard (Gratuit)' },
  specialBox: { ar: 'صندوق خاص (+100 SAR)', en: 'Special Box (+100 SAR)', es: 'Caja especial (+100 SAR)', it: 'Scatola speciale (+100 SAR)', fr: 'Boîte speciale (+100 SAR)' },
  warrantyPolicy: { ar: 'سياسة الضمان (الضمان الفضي مجاني)', en: 'Warranty Policy (Silver is Free)', es: 'Política de garantía', it: 'Politica di garanzia', fr: 'Politique de garantie' },
  warrantyDesc: { ar: 'الضمان الفضي مجاني مع المنتج ويشمل أي مشاكل مصنعية. يمكنك ترقية خطة الضمان للحصول على مميزات إضافية.', en: 'Silver warranty is free with the product and covers manufacturing defects. You can upgrade your plan for extra features.', es: 'Detalles de nuestros planes de protección', it: 'Dettagli sui nostri piani di protezione', fr: 'Détails sur nos plans de protection' },
  warrantyWarning: { 
    ar: 'هام: أي محاولة من قبل العميل لفتح الساعة تلغي الضمان تماماً. المتجر غير مسؤول عن أي ضرر ناتج عن ذلك.', 
    en: 'IMPORTANT: Any attempt by the customer to open the watch voids the warranty completely. The store is not responsible for any damage caused by this.',
    es: 'IMPORTANTE: Cualquier intento por parte del cliente de abrir el reloj anula la garantía por completo. La tienda no es responsable de ningún daño causado por esto.',
    it: 'IMPORTANTE: Qualsiasi tentativo da parte del cliente di aprire l\'orologio annulla completamente la garanzia. Il negozio non è responsabile per eventuali danni causati da questo.',
    fr: 'IMPORTANT : Toute tentative du client d\'ouvrir la montre annule complètement la garantie. Le magasin n\'est pas responsable des dommages causés par cela.'
  },
  greenCarePlusTitle: { ar: 'جرين كير بلس (إضافة مستقلة)', en: 'Green Care Plus (Independent Add-on)', es: 'Green Care Plus (Complemento independiente)', it: 'Green Care Plus (Componente aggiuntivo indipendente)', fr: 'Green Care Plus (Add-on indépendant)' },
  greenCarePlusDesc: { 
    ar: 'جرين كير بلس هي طبقة حماية مستقلة يمكن إضافتها إلى أي عملية شراء. وهي تشمل:', 
    en: 'Green Care Plus is an independent protection layer that can be added to any purchase. It includes:',
    es: 'Green Care Plus es una capa de protección independiente que se puede agregar a cualquier compra. Incluye:',
    it: 'Green Care Plus è uno strato di protezione indipendente che può essere aggiunto a qualsiasi acquisto. Include:',
    fr: 'Green Care Plus est une couche de protection indépendante qui peut être ajoutée à tout achat. Elle comprend :'
  },
  greenShield: { ar: 'جرين شيلد: حماية متقدمة للزجاج مطبقة سائلًا (طبقة مضادة للخدش).', en: 'Green Shield: Advanced liquid-applied glass protection (anti-scratch layer).', es: 'Green Shield: Protección de vidrio avanzada aplicada en líquido (capa antiarañazos).', it: 'Green Shield: Protezione avanzata del vetro applicata a liquido (strato antigraffio).', fr: 'Green Shield : Protection avancée du verre appliquée par liquide (couche anti-rayures).' },
  greenBezelShield: { ar: 'جرين بيزل شيلد: حماية متخصصة للإطار لمنع الاحتكاك والصدمات.', en: 'Green Bezel Shield: Specialized frame protection to prevent scuffs and impacts.', es: 'Green Bezel Shield: Protección de marco especializada para evitar raspaduras e impactos.', it: 'Green Bezel Shield: Protezione specializzata del telaio per prevenire graffi e urti.', fr: 'Green Bezel Shield : Protection de cadre spécialisée pour éviter les éraflures et les impacts.' },
  shippingPolicy: { ar: 'سياسة الشحن', en: 'Shipping Policy', es: 'Política de envío', it: 'Politica di spedizione', fr: 'Politique de livraison' },
  shippingDesc: { ar: 'أوقات التسليم ومعلومات التتبع', en: 'Delivery times and tracking info', es: 'Tiempos de entrega e información de seguimiento', it: 'Tempi di consegna e informazioni di tracciamento', fr: 'Délais de livraison et informations de suivi' },
  generalShipping: { ar: 'الشحن العام', en: 'General Shipping', es: 'Envío general', it: 'Spedizione generale', fr: 'Expédition générale' },
  generalShippingDesc: { 
    ar: 'فقط متجر جرين الرسمي يرسل روابط التتبع عبر الرسائل القصيرة أو البريد الإلكتروني. المتجر غير مسؤول عن الروابط المزيفة من مصادر غير معروفة. تحقق دائماً من المرسل قبل النقر.', 
    en: 'Only the official Green store sends tracking links via SMS or Email. The store is not responsible for fake links from unknown sources. Always verify the sender before clicking.',
    es: 'Solo la tienda oficial de Green envía enlaces de seguimiento por SMS o correo electrónico. La tienda no es responsable de enlaces falsos de fuentes desconocidas. Verifique siempre el remitente antes de hacer clic.',
    it: 'Solo il negozio ufficiale Green invia link di tracciamento tramite SMS o e-mail. Il negozio non è responsabile per link falsi da fonti sconosciute. Verifica sempre il mittente prima di cliccare.',
    fr: 'Seul le magasin officiel Green envoie des liens de suivi par SMS ou par e-mail. Le magasin n\'est pas responsable des faux liens provenant de sources inconnues. Vérifiez toujours l\'expéditeur avant de cliquer.'
  },
  privacyPolicy: { ar: 'سياسة الخصوصية', en: 'Privacy Policy', es: 'Política de privacidad', it: 'Politica sulla privacy', fr: 'Politique de confidentialité' },
  privacyDesc: { ar: 'كيف نحمي بياناتك', en: 'How we protect your data', es: 'Cómo protegemos sus datos', it: 'Come proteggiamo i tuoi dati', fr: 'Comment nous protégeons vos données' },
  privacyContent: {
    ar: 'في جرين، خصوصيتك هي أولويتنا. بيانات العملاء محمية وآمنة باستخدام تشفير قياسي في الصناعة. نحن لا نشارك معلوماتك الشخصية أبداً مع أطراف ثالثة إلا حسب الضرورة لمعالجة طلبك (على سبيل المثال، مع شركات الشحن). يتم التعامل مع معلومات الدفع الخاصة بك بواسطة بوابات دفع آمنة ومتوافقة مع PCI ولا يتم تخزينها أبداً على خوادمنا.',
    en: 'At Green, your privacy is our priority. Customer data is protected and secure using industry-standard encryption. We never share your personal information with third parties except as required to process your order (e.g., with shipping carriers). Your payment information is handled by secure, PCI-compliant payment gateways and is never stored on our servers.',
    es: 'En Green, su privacidad es nuestra prioridad. Los datos de los clientes están protegidos y seguros mediante el cifrado estándar de la industria. Nunca compartimos su información personal con terceros, excepto cuando sea necesario para procesar su pedido (por ejemplo, con transportistas). Su información de pago es manejada por pasarelas de pago seguras que cumplen con PCI y nunca se almacena en nuestros servidores.',
    it: 'In Green, la tua privacy è la nostra priorità. I dati dei clienti sono protetti e sicuri utilizzando la crittografia standard del settore. Non condividiamo mai le tue informazioni personali con terze parti se non per quanto necessario per elaborare il tuo ordine (ad esempio, con i corrieri). Le tue informazioni di pagamento sono gestite da gateway di pagamento sicuri e conformi a PCI e non vengono mai memorizzate sui nostri server.',
    fr: 'Chez Green, votre vie privée est notre priorité. Les données des clients sont protégées et sécurisées à l\'aide d\'un cryptage standard de l\'industrie. Nous ne partageons jamais vos informations personnelles avec des tiers, sauf si cela est nécessaire pour traiter votre commande (par exemple, avec des transporteurs). Vos informations de paiement sont traitées par des passerelles de paiement sécurisées et conformes à la norme PCI et ne sont jamais stockées sur nos serveurs.'
  },
  returnPolicy: { ar: 'سياسة الاسترجاع', en: 'Return Policy', es: 'Política de devoluciones', it: 'Politica di reso', fr: 'Politique de retour' },
  returnDesc: { ar: 'شروط الاسترجاع والاستبدال', en: 'Returns and exchange conditions', es: 'Condiciones de devolución y cambio', it: 'Condizioni di reso e cambio', fr: 'Conditions de retour et d\'échange' },
  returnContent: {
    ar: 'نحن نقدم سياسة إرجاع لمدة 14 يوماً للعناصر غير المستخدمة في عبوتها الأصلية. يجب أن يكون العنصر في نفس الحالة التي استلمته بها، غير ملبوس أو غير مستخدم، مع الملصقات، وفي عبوته الأصلية. ستحتاج أيضاً إلى الإيصال أو إثبات الشراء. يرجى ملاحظة أن تكاليف الشحن للإرجاع هي مسؤولية العميل ما لم يكن العنصر معيباً.',
    en: 'We offer a 14-day return policy for unused items in their original packaging. The item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You’ll also need the receipt or proof of purchase. Please note that shipping costs for returns are the responsibility of the customer unless the item is defective.',
    es: 'Ofrecemos una política de devolución de 14 días para artículos sin usar en su embalaje original. El artículo debe estar en las mismas condiciones en que lo recibió, sin usar, con etiquetas y en su embalaje original. También necesitará el recibo o comprobante de compra. Tenga en cuenta que los costos de envío de las devoluciones son responsabilidad del cliente, a menos que el artículo sea defectuoso.',
    it: 'Offriamo una politica di reso di 14 giorni per articoli non utilizzati nella loro confezione originale. L\'articolo deve essere nelle stesse condizioni in cui lo hai ricevuto, non indossato o non utilizzato, con etichette e nella sua confezione originale. Avrai anche bisogno della ricevuta o della prova d\'acquisto. Si prega di notare che le spese di spedizione per i resi sono a carico del cliente a meno che l\'articolo non sia difettoso.',
    fr: 'Nous offrons une politique de retour de 14 jours pour les articles non utilisés dans leur emballage d\'origine. L\'article deve essere nello stesso stato in cui lo hai ricevuto, non indossato o non utilizzato, con le etichette e nella sua confezione originale. Avrai anche bisogno della ricevuta o di una prova d\'acquisto. Si prega di notare che le spese di spedizione per i resi sono a carico del cliente, a meno che l\'articolo non sia difettoso.'
  },
  viewPolicy: { ar: 'عرض السياسة', en: 'View Policy', es: 'Ver política', it: 'Visualizza politica', fr: 'Voir la politique' },
  aboutTitle: { ar: 'قصة جرين: إرث من الفخامة', en: 'The Story of Green: A Legacy of Luxury', es: 'La historia de Green', it: 'La storia di Green', fr: 'L\'histoire de Green' },
  aboutSubtitle: { 
    ar: 'ولدت جرين من شغف بالدقة والتزام بالأناقة الخالدة، وهي تمثل قمة صناعة الساعات الفاخرة في الشرق الأوسط. نحن لا نصنع ساعات فحسب، بل نصنع تحفاً فنية تروي قصص النجاح والتميز.', 
    en: 'Born from a passion for precision and a commitment to timeless elegance, Green represents the pinnacle of luxury horology in the Middle East. We don\'t just make watches; we craft masterpieces that tell stories of success and excellence.',
    es: 'Nacido de una pasión por la precisión.',
    it: 'Nato dalla passione per la precisione.',
    fr: 'Né d\'une passion pour la précision.'
  },
  whyTrustUsTitle: { ar: 'لماذا يثق بنا عملاؤنا؟', en: 'Why Do Our Customers Trust Us?', es: '¿Por qué confían en nosotros?', it: 'Perché fidarsi di noi?', fr: 'Pourquoi nous faire confiance ?' },
  whyTrustUsDesc: { 
    ar: 'الثقة هي حجر الزاوية في علاقتنا مع عملائنا. نحن نلتزم بالشفافية المطلقة في كل تفاصيل منتجاتنا، من مصدر المواد إلى دقة المحركات. كل ساعة تمر باختبارات صارمة لضمان أنها تستحق أن تحمل اسم جرين.', 
    en: 'Trust is the cornerstone of our relationship with our customers. We are committed to absolute transparency in every detail of our products, from the source of materials to the precision of the movements. Every watch undergoes rigorous testing to ensure it deserves to bear the Green name.',
    es: 'La confianza es fundamental.',
    it: 'La fiducia è fondamentale.',
    fr: 'La confiance est fondamentale.'
  },
  ourStandardsTitle: { ar: 'معاييرنا الدقيقة', en: 'Our Precise Standards', es: 'Nuestros estándares', it: 'I nostri standard', fr: 'Nos normes' },
  ourStandardsDesc: { 
    ar: 'نحن نتبع أعلى المعايير العالمية في صناعة الساعات. نستخدم الفولاذ المقاوم للصدأ 316L، وكريستال الياقوت المقاوم للخدش، ومحركات أوتوماتيكية دقيقة. كل قطعة يتم تجميعها وفحصها يدوياً لضمان كمال الأداء.', 
    en: 'We follow the highest international standards in watchmaking. We use 316L stainless steel, scratch-resistant sapphire crystal, and precise automatic movements. Each piece is manually assembled and inspected to ensure perfect performance.',
    es: 'Seguimos los más altos estándares.',
    it: 'Seguiamo i più alti standard.',
    fr: 'Nous suivons les normes les plus élevées.'
  },
  productExcellenceTitle: { ar: 'روعة وقوة منتجاتنا', en: 'The Excellence and Power of Our Products', es: 'Excelencia de productos', it: 'Eccellenza dei prodotti', fr: 'Excellence des produits' },
  productExcellenceDesc: { 
    ar: 'تتميز ساعات جرين بتصميم يجمع بين القوة والجمال. إنها مصممة لتتحمل ظروف الحياة اليومية مع الحفاظ على بريقها وأناقتها. كل تفصيلة في الساعة، من العقارب إلى السوار، تعكس التزامنا بالكمال.', 
    en: 'Green watches feature a design that combines strength and beauty. They are designed to withstand daily life conditions while maintaining their brilliance and elegance. Every detail of the watch, from the hands to the bracelet, reflects our commitment to perfection.',
    es: 'Diseño que combina fuerza y belleza.',
    it: 'Design che unisce forza e bellezza.',
    fr: 'Design alliant force et beauté.'
  },
  warrantyStrengthTitle: { ar: 'قوة ضمانتنا', en: 'The Strength of Our Warranty', es: 'Fuerza de garantía', it: 'Forza della garanzia', fr: 'Force de la garantie' },
  warrantyStrengthDesc: { 
    ar: 'نحن نؤمن بجودة منتجاتنا، ولذلك نقدم أقوى أنظمة الضمان في السوق. ضماننا ليس مجرد ورقة، بل هو التزام منا بالوقوف خلف كل ساعة نبيعها، مما يمنحك راحة البال الكاملة عند الشراء.', 
    en: 'We believe in the quality of our products, which is why we offer the strongest warranty systems in the market. Our warranty is not just a paper; it is our commitment to stand behind every watch we sell, giving you complete peace of mind when purchasing.',
    es: 'Creemos en la calidad.',
    it: 'Crediamo nella qualità.',
    fr: 'Nous croyons en la qualité.'
  },
  philosophyTitle: { ar: 'فلسفتنا', en: 'Our Philosophy', es: 'Filosofía', it: 'Filosofia', fr: 'Philosophie' },
  philosophyDesc1: { 
    ar: 'في جرين، نؤمن بأن الساعة هي أكثر من مجرد أداة لمعرفة الوقت. إنها انعكاس لرحلة المرء، ورمز للإنجاز، وإرث يتم توارثه عبر الأجيال.', 
    en: 'At Green, we believe that a watch is more than just a tool for telling time. It is a reflection of one\'s journey, a symbol of achievement, and a legacy to be passed down through generations.',
    es: 'Más que una herramienta.',
    it: 'Più di uno strumento.',
    fr: 'Plus qu\'un outil.'
  },
  philosophyDesc2: { 
    ar: 'نحن نستورد فقط أجود المواد لضمان أن كل ساعة تحمل اسم جرين تلبي معاييرنا الصارمة للتميز وتدوم مدى الحياة.', 
    en: 'We source only the finest materials to ensure that every timepiece bearing the Green name meets our rigorous standards of excellence and lasts a lifetime.',
    es: 'Obtenemos solo los mejores materiales para garantizar que cada reloj que lleve el nombre Green cumpla con nuestros rigurosos estándares de excelencia.',
    it: 'Selezioniamo solo i materiali migliori per garantire che ogni segnatempo che porta il nome Green soddisfi i nostri rigorosi standard di eccellenza.',
    fr: 'Nous ne sélectionnons que les meilleurs matériaux pour garantir que chaque garde-temps portant le nom Green réponde à nos normes d\'excellence rigoureuses.'
  },
  detailTitle: { ar: 'الاهتمام بالتفاصيل', en: 'Attention to Detail', es: 'Atención al detalle', it: 'Attenzione ai dettagli', fr: 'Attention aux détails' },
  detailDesc: { 
    ar: 'يتم مراعاة كل منحنى وكل حلقة وكل دقة بدقة. يمزج مصممونا بين الجماليات الكلاسيكية والابتكار الحديث لإنشاء ساعات معاصرة وخالدة.', 
    en: 'Every curve, every link, and every tick is meticulously considered. Our designers blend classic aesthetics with modern innovation to create watches that are both contemporary and timeless.',
    es: 'Cada curva, cada eslabón y cada tic se consideran meticulosamente. Nuestros diseñadores combinan la estética clásica con la innovación moderna para crear relojes que son a la vez contemporáneos y atemporales.',
    it: 'Ogni curva, ogni maglia e ogni battito sono meticolosamente considerati. I nostri designer fondono l\'estetica classica con l\'innovazione moderna per creare orologi contemporanei e senza tempo.',
    fr: 'Chaque courbe, chaque maillon et chaque tic-tac est méticuleusement étudié. Nos designers allient esthétique classique et innovation moderne pour créer des montres à la fois contemporaines et intemporelles.'
  },
  qualityInspected: { ar: 'فحص الجودة 100%', en: '100% Quality Inspected', es: '100% Calidad inspeccionada', it: '100% Qualità controllata', fr: '100% Qualité inspectée' },
  premiumSupport: { ar: 'دعم متميز 24/7', en: '24/7 Premium Support', es: 'Soporte Premium 24/7', it: 'Supporto Premium 24/7', fr: 'Support Premium 24/7' },
  quote: { 
    ar: 'الفخامة الحقيقية لا تتعلق بأن يتم ملاحظتك، بل تتعلق بأن يتم تذكرك.', 
    en: 'True luxury is not about being noticed, it\'s about being remembered.',
    es: 'El verdadero lujo no se trata de ser notado, se trata de ser recordado.',
    it: 'Il vero lusso non consiste nell\'essere notati, ma nell\'essere ricordati.',
    fr: 'Le vrai luxe ne consiste pas à être remarqué, mais à être mémorisé.'
  },
  greenPromise: { ar: 'وعد جرين', en: 'The Green Promise', es: 'La promesa de Green', it: 'La promessa di Green', fr: 'La promesse de Green' },
  orderSummary: { ar: 'ملخص الطلب', en: 'Order Summary', es: 'Resumen del pedido', it: 'Riepilogo ordine', fr: 'Récapitulatif de la commande' },
  subtotal: { ar: 'المجموع الفرعي', en: 'Subtotal', es: 'Subtotal', it: 'Subtotale', fr: 'Sous-total' },
  discountCode: { ar: 'كود الخصم', en: 'Discount Code', es: 'Código de descuento', it: 'Codice sconto', fr: 'Code promo' },
  apply: { ar: 'تطبيق', en: 'Apply', es: 'Aplicar', it: 'Applica', fr: 'Appliquer' },
  freeGiftOffer: { ar: 'عرض جرين: اشترِ 5 ساعات أو أكثر واحصل على هذه الساعة مجاناً', en: 'Green offer: buy 5 watches or more and take this for free', es: 'Oferta Green: compra 5 relojes o más y llévate este gratis', it: 'Offerta Green: acquista 5 orologi o più e ricevi questo in omaggio', fr: 'Offre Green : achetez 5 montres ou plus et recevez celle-ci gratuitement' },
  freeGift: { ar: 'هدية مجانية', en: 'Free Gift', es: 'Regalo gratis', it: 'Regalo gratuito', fr: 'Cadeau gratuit' },
  men: { ar: 'رجالي', en: 'Men', es: 'Hombres', it: 'Uomini', fr: 'Hommes' },
  women: { ar: 'نسائي', en: 'Women', es: 'Mujeres', it: 'Donne', fr: 'Femmes' },
  outOfStock: { ar: 'نفذت الكمية', en: 'Out of Stock', es: 'Agotado', it: 'Esaurito', fr: 'Rupture de stock' },
  brandName: { ar: 'جرين', en: 'Green', es: 'Green', it: 'Green', fr: 'Green' },
  heroSubtitle: { 
    ar: 'قمة الفخامة في عالم الساعات. دقة هندسية لمن ينشدون التميز.', 
    en: 'The pinnacle of luxury horology. Precision engineered for those who demand excellence.',
    es: 'La cima de la relojería de lujo. Ingeniería de precisión para quienes exigen la excelencia.',
    it: 'L\'apice dell\'orologeria di lusso. Ingegneria di precisione per chi esige l\'eccellenza.',
    fr: 'Le summum de l\'horlogerie de luxe. Une ingénierie de précision pour ceux qui exigent l\'excellence.'
  },
  footerDesc: {
    ar: 'إعادة تعريف الفخامة من خلال الدقة والاستدامة والتصميم الخالد. جرين هي أكثر من مجرد ساعة؛ إنها بيان للتميز.',
    en: 'Redefining luxury through precision, sustainability, and timeless design. Green is more than a watch; it\'s a statement of excellence.',
    es: 'Redefiniendo el lujo a través de la precisión, la sostenibilidad y el diseño atemporal. Green es más que un reloj; es una declaración de excelencia.',
    it: 'Ridefinire il lusso attraverso precisione, sostenibilità e design senza tempo. Green è più di un orologio; è una dichiarazione di eccellenza.',
    fr: 'Redéfinir le luxe par la précision, la durabilité et un design intemporel. Green est plus qu\'une montre ; c\'est une affirmation d\'excellence.'
  },
  contact: { ar: 'اتصل بنا', en: 'Contact', es: 'Contacto', it: 'Contatti', fr: 'Contact' },
  riyadhLocation: { ar: 'الرياض، المملكة العربية السعودية', en: 'Riyadh, Saudi Arabia', es: 'Riad, Arabia Saudita', it: 'Riad, Arabia Saudita', fr: 'Riyad, Arabie Saoudite' },
  premiumWatches: { ar: 'للساعات الفاخرة', en: 'Premium Watches', es: 'Relojes Premium', it: 'Orologi Premium', fr: 'Montres Premium' },
  allRightsReserved: { ar: 'جميع الحقوق محفوظة', en: 'All rights reserved', es: 'Todos los derechos reservados', it: 'Tutti i diritti riservati', fr: 'Tous droits réservés' },
  darkMode: { ar: 'الوضع الليلي', en: 'Dark Mode', es: 'Modo oscuro', it: 'Modalità scura', fr: 'Mode sombre' },
  lightMode: { ar: 'الوضع العادي', en: 'Light Mode', es: 'Modo claro', it: 'Modalità chiara', fr: 'Mode clair' },
  excellence: { ar: 'التميز', en: 'Excellence', es: 'Excelencia', it: 'Eccellenza', fr: 'Excellence' },
  scrollExplore: { ar: 'اكتشف المزيد', en: 'Scroll to explore', es: 'Explorar', it: 'Esplora', fr: 'Explorer' },
  newArrival: { ar: 'وصل حديثاً', en: 'New Arrival', es: 'Nuevo', it: 'Nuovo', fr: 'Nouveau' },
  featuredTimepieces: { ar: 'ساعات مختارة', en: 'Featured Timepieces', es: 'Destacados', it: 'In primo piano', fr: 'Vedettes' },
  viewDetails: { ar: 'عرض التفاصيل', en: 'View Details', es: 'Ver detalles', it: 'Dettagli', fr: 'Détails' },
  securePayment: { ar: 'دفع آمن ومحمي', en: 'Secure & Encrypted Payment', es: 'Pago seguro', it: 'Pagamento sicuro', fr: 'Paiement sécurisé' },
  globalDelivery: { ar: 'توصيل عالمي', en: 'Global Delivery', es: 'Entrega global', it: 'Consegna globale', fr: 'Livraison mondiale' },
  orderNow: { ar: 'اطلب الآن', en: 'Order Now', es: 'Ordenar', it: 'Ordina', fr: 'Commander' },
  exclusiveCollection: { ar: 'مجموعة حصرية', en: 'Exclusive Collection', es: 'Exclusivo', it: 'Esclusivo', fr: 'Exclusif' },
  exquisiteTimepieces: { ar: 'ساعات فاخرة', en: 'Exquisite Timepieces', es: 'Exquisito', it: 'Squisito', fr: 'Exquis' },
  collection: { ar: 'المجموعة', en: 'Collection', es: 'Colección', it: 'Collezione', fr: 'Collection' },
  secureCheckout: { ar: 'دفع آمن', en: 'Secure Checkout', es: 'Pago seguro', it: 'Pagamento sicuro', fr: 'Paiement sécurisé' },
  ref: { ar: 'مرجع', en: 'Ref', es: 'Ref', it: 'Rif', fr: 'Réf' },
  recommended: { ar: 'موصى به', en: 'Recommended', es: 'Recomendado', it: 'Consigliato', fr: 'Recommandé' },
  securityNotice: { ar: 'تنبيه أمني', en: 'Security Notice', es: 'Seguridad', it: 'Sicurezza', fr: 'Sécurité' },
  voidWarranty: { ar: 'أي محاولة لفتح هيكل الساعة تلغي الضمان تماماً.', en: 'Any attempt to open the watch casing voids the warranty completely.', es: 'Anula garantía.', it: 'Annulla garanzia.', fr: 'Annule garantie.' },
  standardLuxuryPackaging: { ar: 'تغليف فاخر قياسي', en: 'Standard luxury packaging', es: 'Embalaje estándar', it: 'Imballaggio standard', fr: 'Emballage standard' },
  specialBoxIncludes: { ar: 'يشمل محفظة أو عطر أو قماش تلميع', en: 'Includes Wallet OR Perfume OR Polishing Cloth', es: 'Incluye extras', it: 'Include extra', fr: 'Inclut extras' },
  exploreCollection: { ar: 'اكتشف المجموعة', en: 'Explore Collection', es: 'Explorar', it: 'Esplora', fr: 'Explorer' },
  brandValues: { ar: 'قيم العلامة التجارية', en: 'Brand Values', es: 'Valores', it: 'Valori', fr: 'Valeurs' },
  craftsmanship: { ar: 'الحرفية', en: 'Craftsmanship', es: 'Artesanía', it: 'Artigianato', fr: 'Artisanat' },
  craftsmanshipDesc: { ar: 'كل ساعة يتم تجميعها يدوياً بدقة متناهية.', en: 'Every watch is manually assembled with extreme precision.', es: 'Ensamblado a mano.', it: 'Assemblato a mano.', fr: 'Assemblé à la main.' },
  innovation: { ar: 'الابتكار', en: 'Innovation', es: 'Innovación', it: 'Innovazione', fr: 'Innovation' },
  innovationDesc: { ar: 'نمزج بين التصاميم الكلاسيكية والتقنيات الحديثة.', en: 'We blend classic designs with modern technologies.', es: 'Diseño moderno.', it: 'Design moderno.', fr: 'Design moderne.' },
  sustainability: { ar: 'الاستدامة', en: 'Sustainability', es: 'Sostenibilidad', it: 'Sostenibilità', fr: 'Durabilité' },
  sustainabilityDesc: { ar: 'ملتزمون بممارسات أخلاقية ومواد مستدامة.', en: 'Committed to ethical practices and sustainable materials.', es: 'Sostenible.', it: 'Sostenibile.', fr: 'Durable.' },
  limitedEdition: { ar: 'إصدار محدود', en: 'Limited Edition', es: 'Limitado', it: 'Limitato', fr: 'Limité' },
  limitedEditionDesc: { ar: 'قطع حصرية مصممة لمن يقدرون الندرة.', en: 'Exclusive pieces designed for those who appreciate rarity.', es: 'Exclusivo.', it: 'Esclusivo.', fr: 'Exclusif.' },
  giftNotice: { ar: 'هدية مجانية عند شراء 5 ساعات أو أكثر', en: 'Free gift when buying 5 watches or more', es: 'Regalo gratis.', it: 'Regalo gratis.', fr: 'Cadeau gratuit.' },
  greenSignature: { ar: 'جرين سيجنتشر', en: 'Green Signature', es: 'Green Signature', it: 'Green Signature', fr: 'Green Signature' },
  greenSignatureDesc: { 
    ar: 'اخترنا بعناية ساعات قوية من أفضل البراندات العالمية والمعروفة', 
    en: 'We have carefully selected powerful watches from the best international and well-known brands',
    es: 'Hemos seleccionado cuidadosamente relojes potentes de las mejores marcas internacionales y conocidas',
    it: 'Abbiamo selezionato con cura orologi potenti dei migliori marchi internazionali e conosciuti',
    fr: 'Nous avons soigneusement sélectionné des montres puissantes parmi les meilleures marques internationales et reconnues'
  },
  greenSignatureBuilding: { 
    ar: 'جاري إضافة المنتجات من أجلكم زبائننا الكبار', 
    en: 'Products are being added for you, our valued customers',
    es: 'Se están añadiendo productos para ustedes, nuestros valiosos clientes',
    it: 'I prodotti vengono aggiunti per voi, i nostri stimati clienti',
    fr: 'Des produits sont en cours d\'ajout pour vous, nos précieux clients'
  },
  palladium: {
    ar: 'بلاديومي',
    en: 'Palladium',
    es: 'Paladio',
    it: 'Palladio',
    fr: 'Palladium',
  },
  green_eagle: {
    ar: 'ضمان جرين ايجيل',
    en: 'Green Eagle Warranty',
    es: 'Garantía Green Eagle',
    it: 'Garanzia Green Eagle',
    fr: 'Garantie Green Eagle',
  },
  palladiumDuration: {
    ar: '5 سنوات - النخبوية المطلقة',
    en: '5 Years - Absolute Elitism',
    es: '5 años - Elitismo absoluto',
    it: '5 anni - Elitismo assoluto',
    fr: '5 ans - Élitismo absolu',
  },
  green_eagleDuration: {
    ar: 'مدى الحياة - حماية النسر',
    en: 'Lifetime - Eagle Protection',
    es: 'De por vida - Protección Águila',
    it: 'A vita - Protezione Aquila',
    fr: 'À vie - Protection Aigle',
  },
  platinum_custom: {
    ar: 'بلاتيني',
    en: 'Platinum',
    es: 'Platino',
    it: 'Platino',
    fr: 'Platine',
  },
  platinum_customDuration: {
    ar: '3 سنوات - خدمة متميزة',
    en: '3 Years - Premium Service',
    es: '3 años - Servicio premium',
    it: '3 años - Servizio premium',
    fr: '3 ans - Service premium',
  },
  sortBy: { ar: 'ترتيب حسب', en: 'Sort by', es: 'Ordenar por', it: 'Ordina per', fr: 'Trier par' },
  priceLowHigh: { ar: 'السعر: من الأقل للأعلى', en: 'Price: Low to High', es: 'Precio: Menor a Mayor', it: 'Prezzo: dal più basso al più alto', fr: 'Prix : du moins cher au plus cher' },
  priceHighLow: { ar: 'السعر: من الأعلى للأقل', en: 'Price: High to Low', es: 'Precio: Mayor a Menor', it: 'Prezzo: dal più alto al più basso', fr: 'Prix : du plus cher au moins cher' },
  popularity: { ar: 'الأكثر شعبية', en: 'Popularity', es: 'Popularidad', it: 'Popolarità', fr: 'Popularité' },
  bestSelling: { ar: 'الأكثر مبيعاً', en: 'Best Selling', es: 'Más vendidos', it: 'I più venduti', fr: 'Meilleures ventes' },
  gender: { ar: 'الجنس', en: 'Gender', es: 'Género', it: 'Genere', fr: 'Sexe' },
  allCollections: { ar: 'جميع المجموعات', en: 'All Collections', es: 'Todas las colecciones', it: 'Tutte le collezioni', fr: 'Toutes les collections' },
  newArrivals: { ar: 'وصل حديثاً', en: 'New Arrivals', es: 'Novedades', it: 'Nuovi arrivi', fr: 'Nouveautés' },
  bestSellers: { ar: 'الأكثر مبيعاً', en: 'Best Sellers', es: 'Más vendidos', it: 'I più venduti', fr: 'Meilleures ventes' },
  all: { ar: 'الكل', en: 'All', es: 'Todos', it: 'Tutti', fr: 'Tout' },
  shipToEgypt: { ar: 'شحن إلى عنوانك المصري (+3000 ج.م)', en: 'Ship to your Egyptian address (+3000 EGP)', es: 'Enviar a Egipto (+3000 EGP)', it: 'Spedisci in Egitto (+3000 EGP)', fr: 'Expédier en Égypte (+3000 EGP)' },
  silver: { ar: 'فضي (مجاني)', en: 'Silver (Free)', es: 'Plata (Gratis)', it: 'Argento (Gratis)', fr: 'Argent (Gratuit)' },
  gold: { ar: 'ذهبي', en: 'Gold', es: 'Oro', it: 'Oro', fr: 'Or' },
  diamond: { ar: 'الماسي', en: 'Diamond', es: 'Diamante', it: 'Diamante', fr: 'Diamant' },
  platinum: { ar: 'بلاتيني', en: 'Platinum', es: 'Platino', it: 'Platino', fr: 'Platine' },
  silverDuration: { ar: '3 أشهر - عيوب مصنعية فقط', en: '3 Months - Mfg defects only', es: '3 meses', it: '3 mesi', fr: '3 mois' },
  goldDuration: { ar: 'يشمل أي مشكلة', en: 'Covers any issue', es: 'Cualquier problema', it: 'Qualsiasi problema', fr: 'Tout problème' },
  diamondDuration: { ar: 'فضي + ذهبي', en: 'Silver + Gold', es: 'Plata + Oro', it: 'Argento + Oro', fr: 'Argent + Or' },
  platinumDuration: { ar: 'سنتان - صيانة كاملة', en: '2 Years - Full maintenance', es: '2 años', it: '2 anni', fr: '2 ans' },
  included: { ar: 'مشمول', en: 'Included', es: 'Incluido', it: 'Incluso', fr: 'Inclus' },
  free: { ar: 'مجاني', en: 'Free', es: 'Gratis', it: 'Gratis', fr: 'Gratuit' },
  reviews: { ar: 'التقييمات', en: 'Reviews', es: 'Reseñas', it: 'Recensioni', fr: 'Avis' },
  writeReview: { ar: 'اكتب تقييماً', en: 'Write a Review', es: 'Escribir una reseña', it: 'Scrivi una recensione', fr: 'Écrire un avis' },
  rating: { ar: 'التقييم', en: 'Rating', es: 'Calificación', it: 'Valutazione', fr: 'Note' },
  comment: { ar: 'التعليق', en: 'Comment', es: 'Comentario', it: 'Commento', fr: 'Commentaire' },
  submit: { ar: 'إرسال', en: 'Submit', es: 'Enviar', it: 'Invia', fr: 'Envoyer' },
  name: { ar: 'الاسم', en: 'Name', es: 'Nombre', it: 'Nome', fr: 'Nom' },
  averageRating: { ar: 'متوسط التقييم', en: 'Average Rating', es: 'Calificación promedio', it: 'Valutazione media', fr: 'Note moyenne' },
  noReviews: { ar: 'لا توجد تقييمات بعد. كن أول من يقيم!', en: 'No reviews yet. Be the first to review!', es: 'No hay reseñas aún.', it: 'Nessuna recensione ancora.', fr: 'Pas encore d\'avis.' },
  reviewSuccess: { ar: 'تم إضافة تقييمك بنجاح!', en: 'Review submitted successfully!', es: 'Reseña enviada con éxito.', it: 'Recensione inviata con successo.', fr: 'Avis envoyé avec succès.' },
};
