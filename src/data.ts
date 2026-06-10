import { Service, LocationInfo } from './types';

export const SERVICES: Service[] = [
  // 1. Spa & Massage (Wellness)
  {
    id: 'deep-tissue-massage',
    category: 'Spa & Massage',
    title: 'Deep Tissue Massage',
    duration: '45 / 90 Mins',
    price: 3200,
    description: 'A deep, therapeutic massage designed to release chronic muscle tension and target high-density physical blocks.',
    isWellness: true,
    isSalon: false,
    isBestSeller: true
  },
  {
    id: 'swedish-massage',
    category: 'Spa & Massage',
    title: 'Swedish Massage',
    duration: '45 Mins',
    price: 2800,
    description: 'A classic, relaxing massage using light-to-medium pressure to reduce muscle stiffness and improve circulation.',
    isWellness: true,
    isSalon: false,
    isBestSeller: false
  },
  {
    id: 'balinese-massage',
    category: 'Spa & Massage',
    title: 'Balinese Massage',
    duration: '45 / 90 Mins',
    price: 3000,
    description: 'A traditional holistic ritual combining gentle stretches, acupressure, and aromatherapy for ultimate relaxation.',
    isWellness: true,
    isSalon: false,
    isBestSeller: false
  },
  {
    id: 'thai-massage',
    category: 'Spa & Massage',
    title: 'Traditional Thai Massage',
    duration: '45 Mins',
    price: 2600,
    description: 'An interactive dry massage utilizing guided yoga stretches and deep point pressure to boost flexibility.',
    isWellness: true,
    isSalon: false,
    isBestSeller: false
  },
  {
    id: 'aromatherapy-massage',
    category: 'Spa & Massage',
    title: 'Aromatherapy Massage',
    duration: '45 / 90 Mins',
    price: 3400,
    description: 'Pairs therapeutic massage sweeps with custom organic botanical oils to restore nervous-system harmony.',
    isWellness: true,
    isSalon: false,
    isBestSeller: false
  },
  {
    id: 'hot-stone-massage',
    category: 'Spa & Massage',
    title: 'Hot Stone Massage',
    duration: '90 Mins',
    price: 4200,
    description: 'Heated local basalt river stones are systematically placed and massaged to melt away deep-seated tensions.',
    isWellness: true,
    isSalon: false,
    isBestSeller: false
  },
  {
    id: 'hot-oil-massage',
    category: 'Spa & Massage',
    title: 'Hot Oil Massage',
    duration: '45 Mins',
    price: 2900,
    description: 'Warm organic Ayurvedic infusions massage the body to deliver quick relief from severe physical exhaustion.',
    isWellness: true,
    isSalon: false,
    isBestSeller: false
  },
  {
    id: 'oil-therapy-massage',
    category: 'Spa & Massage',
    title: 'Oil Therapy Massage',
    duration: '45 Mins',
    price: 2900,
    description: 'Concentrated medicated oil sweeps targeting nervous pathways to restore physiological homeostasis.',
    isWellness: true,
    isSalon: false,
    isBestSeller: false
  },
  {
    id: 'four-hand-massage',
    category: 'Spa & Massage',
    title: 'Four Hand Massage',
    duration: '45 Mins',
    price: 4800,
    description: 'A synchronized sensory journey presented by two professional therapists working in seamless visual rhythm.',
    isWellness: true,
    isSalon: false,
    isBestSeller: false
  },
  {
    id: 'couple-massage',
    category: 'Spa & Massage',
    title: 'Couple Massage',
    duration: '60 / 90 Mins',
    price: 6500,
    description: 'Share a silent, sacred rejuvenation space with a partner, accompanied by twin therapist guidance.',
    isWellness: true,
    isSalon: false,
    isBestSeller: false
  },
  {
    id: 'head-massage',
    category: 'Spa & Massage',
    title: 'Head Massage',
    duration: '30 / 60 Mins',
    price: 1500,
    description: 'Focuses strictly on the scalp, neck, and crown, using nourishing oils to clear brain fog and mental load.',
    isWellness: true,
    isSalon: false,
    isBestSeller: false
  },
  {
    id: 'foot-massage',
    category: 'Spa & Massage',
    title: 'Foot Massage',
    duration: '30 / 60 Mins',
    price: 1500,
    description: 'An interactive reflexology session targeting foot pressure points to alleviate overall lower limb weariness.',
    isWellness: true,
    isSalon: false,
    isBestSeller: false
  },
  {
    id: 'hnsh-massage',
    category: 'Spa & Massage',
    title: 'Head, Neck, Shoulder & Back Massage',
    duration: '30 Mins',
    price: 1800,
    description: 'A rapid, target-specific rescue ritual to undo computer posture strain and neck stiffness.',
    isWellness: true,
    isSalon: false,
    isBestSeller: false
  },
  {
    id: 'steam-bath',
    category: 'Spa & Massage',
    title: 'Steam Bath',
    duration: '30 Mins',
    price: 900,
    description: 'A refreshing thermal steam session infused with lavender details to open skin pores and clear sinuses.',
    isWellness: true,
    isSalon: false,
    isBestSeller: false
  },

  // 2. Body Treatments (Wellness)
  {
    id: 'body-scrub',
    category: 'Body Treatments',
    title: 'Body Scrub',
    duration: '45 Mins',
    price: 2500,
    description: 'A deep exfoliating scrub with walnut or apricot granules to restore uniform smooth epidermal texture.',
    isWellness: true,
    isSalon: false,
    isBestSeller: false
  },
  {
    id: 'body-scrub-massage',
    category: 'Body Treatments',
    title: 'Body Scrub with Massage',
    duration: '90 Mins',
    price: 4500,
    description: 'A dual-action renewal ritual starting with a whole-body scrub followed by a hydrating oil finish.',
    isWellness: true,
    isSalon: false,
    isBestSeller: true
  },
  {
    id: 'full-body-massage-scrub',
    category: 'Body Treatments',
    title: 'Full Body Massage with Scrub',
    duration: '90 Mins',
    price: 4800,
    description: 'Combines a comprehensive traditional therapeutic massage followed by a total polishing exfoliation.',
    isWellness: true,
    isSalon: false,
    isBestSeller: false
  },
  {
    id: 'body-scrub-four-hand',
    category: 'Body Treatments',
    title: 'Body Scrub with Four Hand Massage',
    duration: '90 Mins',
    price: 6200,
    description: 'Deep physical exfoliation and twin-synchronized massage sweeps for unparalleled luxury.',
    isWellness: true,
    isSalon: false,
    isBestSeller: false
  },
  {
    id: 'body-polishing',
    category: 'Body Treatments',
    title: 'Body Polishing',
    duration: '120 Mins',
    price: 5500,
    description: 'The ultimate skin-renewing ritual utilizing botanical wraps, scrub, steam, and intense body milk massage.',
    isWellness: true,
    isSalon: false,
    isBestSeller: false
  },

  // 3. Spa Packages (Wellness)
  {
    id: 'pamper-me-spa-package',
    category: 'Spa Packages',
    title: 'Pamper Me Spa Package',
    duration: '1 hr 45 min',
    price: 5800,
    description: 'An elegant bespoke retreat grouping our signature body scrub, warm steam bath, and targeted back relief.',
    isWellness: true,
    isSalon: false,
    isBestSeller: true
  },
  {
    id: 'retreat-spa-package',
    category: 'Spa Packages',
    title: 'Retreat Spa Package',
    duration: '1 hr 45 min',
    price: 6000,
    description: 'Escape the rush with a customized package blending our full sensory Balinese massage and botanical facial touch.',
    isWellness: true,
    isSalon: false,
    isBestSeller: false
  },

  // 4. Women's Hair Services (Salon)
  {
    id: 'womens-haircut',
    category: "Women's Hair Services",
    title: 'Haircut',
    duration: '30 Mins',
    price: 1200,
    description: 'Designed around face mapping and hair density analysis to generate custom individual designs.',
    isWellness: false,
    isSalon: true,
    isBestSeller: false
  },
  {
    id: 'haircut-shampoo-blow-dry',
    category: "Women's Hair Services",
    title: 'Haircut + Shampoo + Blow Dry',
    duration: '30 Mins',
    price: 1800,
    description: 'The complete transformation package: precision cut, rejuvenating wash, and professional volume design.',
    isWellness: false,
    isSalon: true,
    isBestSeller: true
  },
  {
    id: 'hair-wash',
    category: "Women's Hair Services",
    title: 'Hair Wash',
    duration: '30 Mins',
    price: 500,
    description: 'Deep cleansing with luxurious pH-balanced shampoos, massaged carefully on the scalp.',
    isWellness: false,
    isSalon: true,
    isBestSeller: false
  },
  {
    id: 'hair-wash-blow-dry',
    category: "Women's Hair Services",
    title: 'Hair Wash & Blow Dry',
    duration: '30 Mins',
    price: 900,
    description: 'Cleanses excess oils and styles hair directly with warm heat tools for an instant high-gloss bounce.',
    isWellness: false,
    isSalon: true,
    isBestSeller: false
  },
  {
    id: 'blow-dry',
    category: "Women's Hair Services",
    title: 'Blow Dry',
    duration: '30 Mins',
    price: 700,
    description: 'Adds immediate structured volume and styling options prior to special reservation gatherings.',
    isWellness: false,
    isSalon: true,
    isBestSeller: false
  },
  {
    id: 'hair-ironing',
    category: "Women's Hair Services",
    title: 'Hair Ironing',
    duration: '30 Mins',
    price: 800,
    description: 'Thermal plate straightening to yield ultra-smooth, uniform silkiness across all hair shafts.',
    isWellness: false,
    isSalon: true,
    isBestSeller: false
  },
  {
    id: 'hair-wash-blow-dry-tongs',
    category: "Women's Hair Services",
    title: 'Hair Wash + Blow Dry + Tongs',
    duration: '30 Mins',
    price: 1500,
    description: 'Cleans, volumizes, and curls using professional barrel tongs to create gorgeous cascading waves.',
    isWellness: false,
    isSalon: true,
    isBestSeller: false
  },
  {
    id: 'hair-setting',
    category: "Women's Hair Services",
    title: 'Hair Setting',
    duration: '30 Mins',
    price: 1000,
    description: 'Custom styling and pins setup designed to complement your custom attire for celebratory events.',
    isWellness: false,
    isSalon: true,
    isBestSeller: false
  },

  // 5. Men's Grooming (Salon)
  {
    id: 'mens-haircut',
    category: "Men's Grooming",
    title: 'Haircut',
    duration: '30 Mins',
    price: 500,
    description: 'Classic or contemporary cuts designed around cranial structures and styling choices.',
    isWellness: false,
    isSalon: true,
    isBestSeller: false
  },
  {
    id: 'mens-haircut-wash',
    category: "Men's Grooming",
    title: 'Haircut + Wash',
    duration: '30 Mins',
    price: 700,
    description: 'Includes a customized precision haircut followed by an oil-clearing therapeutic wash.',
    isWellness: false,
    isSalon: true,
    isBestSeller: false
  },
  {
    id: 'beard-styling',
    category: "Men's Grooming",
    title: 'Beard Styling',
    duration: '30 Mins',
    price: 300,
    description: 'Beard shaping, line trims, and hot-towel essential oil finishing to smooth facial hair.',
    isWellness: false,
    isSalon: true,
    isBestSeller: false
  },
  {
    id: 'haircut-beard',
    category: "Men's Grooming",
    title: 'Haircut + Beard',
    duration: '45 Mins',
    price: 750,
    description: 'The definitive executive package: clean cranial trims paired with symmetric beard styling.',
    isWellness: false,
    isSalon: true,
    isBestSeller: true
  },

  // 6. Hair Colour Services (Salon)
  {
    id: 'root-touch-up',
    category: 'Hair Colour Services',
    title: 'Root Touch Up',
    duration: '30 Mins',
    price: 1500,
    description: 'Preserves seamless root coverage to match existing hair shades.',
    isWellness: false,
    isSalon: true,
    isBestSeller: false
  },
  {
    id: 'global-hair-colour',
    category: 'Hair Colour Services',
    title: 'Global Hair Colour',
    duration: '30 Mins',
    price: 3500,
    description: 'A uniform hair transformation in a spectrum of premium botanical tones.',
    isWellness: false,
    isSalon: true,
    isBestSeller: false
  },
  {
    id: 'hair-highlights',
    category: 'Hair Colour Services',
    title: 'Hair Highlights',
    duration: '30 Mins',
    price: 4500,
    description: 'Sections are colored to generate beautiful, sun-kissed contrast, depth, and character.',
    isWellness: false,
    isSalon: true,
    isBestSeller: true
  },
  {
    id: 'inoa-hair-colour',
    category: 'Hair Colour Services',
    title: 'INOA Ammonia Free Hair Colour',
    duration: '30 Mins',
    price: 3800,
    description: 'Premium absolute-zero ammonia formulation utilizing a protective oil delivery system.',
    isWellness: false,
    isSalon: true,
    isBestSeller: false
  },
  {
    id: 'fruit-vinegar-colour',
    category: 'Hair Colour Services',
    title: 'Fruit Vinegar Hair Colour',
    duration: '30 Mins',
    price: 2900,
    description: 'A highly organic hair glaze enriched with protective fruit acids to boost long-term pigment lock.',
    isWellness: false,
    isSalon: true,
    isBestSeller: false
  },
  {
    id: 'inoa-beard-colour',
    category: 'Hair Colour Services',
    title: 'INOA Beard Colour',
    duration: '30 Mins',
    price: 800,
    description: 'Restores the beard profile to a deep, natural gray-free look without skin staining.',
    isWellness: false,
    isSalon: true,
    isBestSeller: false
  },
  {
    id: 'fruit-vinegar-beard-colour',
    category: 'Hair Colour Services',
    title: 'Fruit Vinegar Beard Colour',
    duration: '30 Mins',
    price: 700,
    description: 'Gentle organic glaze to darken facial stubble while conditioning beard fibers.',
    isWellness: false,
    isSalon: true,
    isBestSeller: false
  },

  // 7. Hair Treatments (Salon)
  {
    id: 'hair-spa',
    category: 'Hair Treatments',
    title: 'Hair Spa',
    duration: '120 Mins',
    price: 2200,
    description: 'An hydration mask massage combined with therapeutic scalp steam to restore damaged strands.',
    isWellness: false,
    isSalon: true,
    isBestSeller: false
  },
  {
    id: 'keratin-spa',
    category: 'Hair Treatments',
    title: 'Keratin Spa',
    duration: '45 Mins',
    price: 2800,
    description: 'Quick-infuse protein mask treatment to restore strength and bounce to chemically tired curls.',
    isWellness: false,
    isSalon: true,
    isBestSeller: false
  },
  {
    id: 'keratin-treatment',
    category: 'Hair Treatments',
    title: 'Keratin Treatment',
    duration: '120 Mins',
    price: 5500,
    description: 'Restores lost keratin fibers deeply, cutting frizz and restoring mirror-like smoothness for months.',
    isWellness: false,
    isSalon: true,
    isBestSeller: true
  },
  {
    id: 'hair-smoothing',
    category: 'Hair Treatments',
    title: 'Hair Smoothing',
    duration: '120 Mins',
    price: 6000,
    description: 'Thermal alignment of hair bonds to dramatically smoothen, simplify, and flatten daily styling issues.',
    isWellness: false,
    isSalon: true,
    isBestSeller: false
  },
  {
    id: 'hair-botox',
    category: 'Hair Treatments',
    title: 'Hair Botox',
    duration: '120 Mins',
    price: 7500,
    description: 'Anti-aging dermal therapy for hair, filling strand voids with active nutrients and smoothing texture.',
    isWellness: false,
    isSalon: true,
    isBestSeller: false
  },
  {
    id: 'nanoplastia-treatment',
    category: 'Hair Treatments',
    title: 'Nanoplastia Treatment',
    duration: '120 Mins',
    price: 8000,
    description: 'A revolutionary nano-nutrient smoothing treatment that restructures hair from the inside out.',
    isWellness: false,
    isSalon: true,
    isBestSeller: false
  },
  {
    id: 'dandruff-treatment',
    category: 'Hair Treatments',
    title: 'Dandruff Treatment',
    duration: '45 Mins',
    price: 1800,
    description: 'Intense micro-cleansing using tea tree and zinc extracts to purify flaky dermis.',
    isWellness: false,
    isSalon: true,
    isBestSeller: false
  },

  // 8. Facials & Skin Care (Wellness)
  {
    id: 'fruit-facial',
    category: 'Facials & Skin Care',
    title: 'Fruit Facial',
    duration: '45 Mins',
    price: 1500,
    description: 'Contains natural organic fruit extracts to moisturize and naturally brighten sensitive skin.',
    isWellness: true,
    isSalon: false,
    isBestSeller: false
  },
  {
    id: 'diamond-facial',
    category: 'Facials & Skin Care',
    title: 'Diamond Facial',
    duration: '45 Mins',
    price: 2500,
    description: 'Exfoliating diamond dust scrub paired with hydrating face massages for a firm, radiant look.',
    isWellness: true,
    isSalon: false,
    isBestSeller: false
  },
  {
    id: 'raaga-facial',
    category: 'Facials & Skin Care',
    title: 'Raaga Facial',
    duration: '45 Mins',
    price: 2000,
    description: 'Infused with active botanicals to heal hyperpigmentation and balance skin moisture levels.',
    isWellness: true,
    isSalon: false,
    isBestSeller: false
  },
  {
    id: 'hydra-facial',
    category: 'Facials & Skin Care',
    title: 'Hydra Facial',
    duration: '60 Mins',
    price: 4505,
    description: 'Deep pore vacuum extraction followed by active hydration and oxygen serum injection.',
    isWellness: true,
    isSalon: false,
    isBestSeller: true
  },
  {
    id: 'o3-7-step-facial',
    category: 'Facials & Skin Care',
    title: 'O3+ 7 Step Facial',
    duration: '45 Mins',
    price: 3200,
    description: 'Professional 7-step dermal restoration focusing on hyperpigmentation control and light peel steps.',
    isWellness: true,
    isSalon: false,
    isBestSeller: false
  },
  {
    id: 'o3-10-step-facial',
    category: 'Facials & Skin Care',
    title: 'O3+ 10 Step Facial',
    duration: '45 Mins',
    price: 3800,
    description: 'The gold standard O3+ facial, complete with cold stone massage packs and intense multi-vitamin serums.',
    isWellness: true,
    isSalon: false,
    isBestSeller: false
  },
  {
    id: 'premium-facial',
    category: 'Facials & Skin Care',
    title: 'Premium Facial',
    duration: '45 Mins',
    price: 4000,
    description: 'Bespoke herbal luxury pairing saffron, honey, and cooling botanical masks.',
    isWellness: true,
    isSalon: false,
    isBestSeller: false
  },
  {
    id: 'face-clean-up',
    category: 'Facials & Skin Care',
    title: 'Face Clean Up',
    duration: '30 Mins',
    price: 1000,
    description: 'Quick micro-exfoliation and gentle blackhead extraction to restore clear skin appearance.',
    isWellness: true,
    isSalon: false,
    isBestSeller: false
  },
  {
    id: 'face-d-tan',
    category: 'Facials & Skin Care',
    title: 'Face D-Tan',
    duration: '45 Mins',
    price: 800,
    description: 'Targeted cooling masks to quickly relieve pigment buildup caused by sudden sun exposure.',
    isWellness: true,
    isSalon: false,
    isBestSeller: false
  },
  {
    id: 'face-d-tan-clean-up',
    category: 'Facials & Skin Care',
    title: 'Face D-Tan + Clean Up',
    duration: '45 Mins',
    price: 1600,
    description: 'Clears sun tanning and performs an extensive facial purification systematically.',
    isWellness: true,
    isSalon: false,
    isBestSeller: false
  },
  {
    id: 'face-scrub',
    category: 'Facials & Skin Care',
    title: 'Face Scrub',
    duration: '30 Mins',
    price: 800,
    description: 'Exfoliates superficial dry skin cells gently with micronized oat scrubs.',
    isWellness: true,
    isSalon: false,
    isBestSeller: false
  },
  {
    id: 'face-peel',
    category: 'Facials & Skin Care',
    title: 'Face Peel',
    duration: '45 Mins',
    price: 2200,
    description: 'Mild, nourishing organic enzyme peels to reveal smooth dermal glow safely.',
    isWellness: true,
    isSalon: false,
    isBestSeller: false
  },

  // 9. Waxing & Hair Removal (Salon)
  {
    id: 'full-body-waxing',
    category: 'Waxing & Hair Removal',
    title: 'Full Body Waxing',
    duration: '30 Mins',
    price: 2200,
    description: 'A smooth, full-body wax using organic chocolate or honey wax compounds to minimize irritation.',
    isWellness: false,
    isSalon: true,
    isBestSeller: false
  },
  {
    id: 'bikini-waxing',
    category: 'Waxing & Hair Removal',
    title: 'Bikini Waxing',
    duration: '30 Mins',
    price: 1500,
    description: 'Sensitive, ultra-hygienic strip waxing under expert professional guidance.',
    isWellness: false,
    isSalon: true,
    isBestSeller: false
  },
  {
    id: 'hand-underarm-waxing',
    category: 'Waxing & Hair Removal',
    title: 'Hand & Underarm Waxing',
    duration: '30 Mins',
    price: 600,
    description: 'Clears hair from arms and underarms with moisturizing aloe formulas.',
    isWellness: false,
    isSalon: true,
    isBestSeller: false
  },
  {
    id: 'leg-waxing',
    category: 'Waxing & Hair Removal',
    title: 'Leg Waxing',
    duration: '30 Mins',
    price: 800,
    description: 'Full leg waxing utilizing low-temperature nourishing cosmetic waxes.',
    isWellness: false,
    isSalon: true,
    isBestSeller: false
  },
  {
    id: 'underarm-waxing',
    category: 'Waxing & Hair Removal',
    title: 'Underarm Waxing',
    duration: '30 Mins',
    price: 300,
    description: 'Quick, precise underarm hair removal using soothening honey wax.',
    isWellness: false,
    isSalon: true,
    isBestSeller: false
  },
  {
    id: 'facial-waxing',
    category: 'Waxing & Hair Removal',
    title: 'Facial Waxing',
    duration: '20–30 Mins',
    price: 500,
    description: 'Fingertip-accurate hair clearance from sensitive facial regions.',
    isWellness: false,
    isSalon: true,
    isBestSeller: false
  },
  {
    id: 'upper-lip-waxing',
    category: 'Waxing & Hair Removal',
    title: 'Upper Lip Waxing',
    duration: '30 Mins',
    price: 150,
    description: 'Immediate silkiness for the upper lip area via gentle waxing.',
    isWellness: false,
    isSalon: true,
    isBestSeller: false
  },
  {
    id: 'threading',
    category: 'Waxing & Hair Removal',
    title: 'Threading',
    duration: '20 Mins',
    price: 100,
    description: 'Classic thread loops to groom and shape gorgeous eyebrow arches.',
    isWellness: false,
    isSalon: true,
    isBestSeller: false
  },
  {
    id: 'threading-upper-lip',
    category: 'Waxing & Hair Removal',
    title: 'Threading + Upper Lip',
    duration: '30 Mins',
    price: 200,
    description: 'A complete quick face-framing threading and upper lip grooming session.',
    isWellness: false,
    isSalon: true,
    isBestSeller: false
  },

  // 10. Manicure & Pedicure (Salon)
  {
    id: 'manicure',
    category: 'Manicure & Pedicure',
    title: 'Manicure',
    duration: '30 Mins',
    price: 800,
    description: 'Hand massage, nail filing, cuticle trimming, and custom breathable polish options.',
    isWellness: false,
    isSalon: true,
    isBestSeller: false
  },
  {
    id: 'pedicure',
    category: 'Manicure & Pedicure',
    title: 'Pedicure',
    duration: '30 Mins',
    price: 900,
    description: 'Foot soaking, deep exfoliating scrubs, filing, and foot massages for absolute walk comfort.',
    isWellness: false,
    isSalon: true,
    isBestSeller: false
  },
  {
    id: 'manicure-pedicure',
    category: 'Manicure & Pedicure',
    title: 'Manicure + Pedicure',
    duration: '60 Mins',
    price: 1500,
    description: 'A complete luxury dual-grooming package focused on complete extremity relief.',
    isWellness: false,
    isSalon: true,
    isBestSeller: true
  },
  {
    id: 'o3-manicure',
    category: 'Manicure & Pedicure',
    title: 'O3 Manicure',
    duration: '30 Mins',
    price: 1200,
    description: 'Uses professional O3+ hand packs and serum to deeply brighten the hand skin.',
    isWellness: false,
    isSalon: true,
    isBestSeller: false
  },
  {
    id: 'o3-pedicure',
    category: 'Manicure & Pedicure',
    title: 'O3 Pedicure',
    duration: '30 Mins',
    price: 1400,
    description: 'Advanced O3+ foot scrub and soothing mask designed to undo tanning and dry skin flakes.',
    isWellness: false,
    isSalon: true,
    isBestSeller: false
  },
  {
    id: 'o3-manicure-pedicure',
    category: 'Manicure & Pedicure',
    title: 'O3 Manicure + Pedicure',
    duration: '60 Mins',
    price: 2400,
    description: 'Complete O3+ premium active whitening and conditioning package for nails and skin.',
    isWellness: false,
    isSalon: true,
    isBestSeller: false
  },
  {
    id: 'raaga-manicure-pedicure',
    category: 'Manicure & Pedicure',
    title: 'Raaga Manicure + Pedicure',
    duration: '60 Mins',
    price: 2000,
    description: 'Indulgent botanical pedicure and manicure ritual using Raaga essential blends.',
    isWellness: false,
    isSalon: true,
    isBestSeller: false
  },

  // 11. Bleach & Body Care (Salon)
  {
    id: 'regular-bleach',
    category: 'Bleach & Body Care',
    title: 'Regular Bleach',
    duration: '30 Mins',
    price: 400,
    description: 'Light tan removal and uniform toning for the facial or hand profiles.',
    isWellness: false,
    isSalon: true,
    isBestSeller: false
  },
  {
    id: 'facial-bleach',
    category: 'Bleach & Body Care',
    title: 'Facial Bleach',
    duration: '30 Mins',
    price: 500,
    description: 'Gentle facial d-tan bleach to improve overall lightness and skin freshness safely.',
    isWellness: false,
    isSalon: true,
    isBestSeller: false
  },
  {
    id: 'body-bleach',
    category: 'Bleach & Body Care',
    title: 'Body Bleach',
    duration: '120 Mins',
    price: 2200,
    description: 'A comprehensive whole-body tan removal and skin lightening procedure.',
    isWellness: false,
    isSalon: true,
    isBestSeller: false
  },

  // 12. Wellness Memberships (Wellness)
  {
    id: 'membership-4',
    category: 'Wellness Memberships',
    title: '4 Session Spa Membership',
    duration: '4 Hrs Total',
    price: 11000,
    description: 'Includes 4 full hours of customizable body massage therapies over any chosen period.',
    isWellness: true,
    isSalon: false,
    isBestSeller: false
  },
  {
    id: 'membership-8',
    category: 'Wellness Memberships',
    title: '8 Session Spa Membership',
    duration: '9 Hrs Total',
    price: 20000,
    description: 'Our most valued package: provides 9 total hours of treatments with priority scheduling.',
    isWellness: true,
    isSalon: false,
    isBestSeller: true
  },
  {
    id: 'membership-14',
    category: 'Wellness Memberships',
    title: '14 Session Spa Membership',
    duration: '15 Hrs Total',
    price: 32000,
    description: 'Perfect for regular wellness seekers. Grants 15 hours of customizable relaxation.',
    isWellness: true,
    isSalon: false,
    isBestSeller: false
  },
  {
    id: 'membership-40',
    category: 'Wellness Memberships',
    title: '40 Session Spa Membership',
    duration: '40 Hrs Total',
    price: 85000,
    description: 'Designed for corporate groups or long-term therapeutic sequences. Includes family transfer rights.',
    isWellness: true,
    isSalon: false,
    isBestSeller: false
  },
  {
    id: 'membership-80',
    category: 'Wellness Memberships',
    title: '80 Session Spa Membership',
    duration: '80 Hrs Total',
    price: 150000,
    description: 'The ultimate wellness legacy. 80 fully customized spa sessions with elite suite preferences.',
    isWellness: true,
    isSalon: false,
    isBestSeller: false
  }
];

export const LOCATIONS: LocationInfo[] = [
  {
    name: 'Chandrapur',
    subtitle: 'Linen and Stone Sanctuary',
    isWellnessOnly: false,
    description: 'Our flagship retreat designed around high archways, warm clay tones, and water channels. Providing comprehensive hair designs, professional nails, and deeply relaxing traditional massage cabins side by side.',
    address: 'Veda Mansion, Civil Lines, Near VIP Guest House, Chandrapur - 442401',
    timing: '09:00 AM - 08:30 PM (Daily)',
    phone: '+91 94228 12345',
    coordinates: '20.0101, 79.3102',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop'
  },
  {
    name: 'Nagpur',
    subtitle: 'Metropolitan Silent Reserve',
    isWellnessOnly: false,
    description: 'A two-story minimalist architectural space created to escape urban white noise. Features state-of-the-art oxygen dermal rooms, high-heritage hair stylists, and absolute silence sound treatment domes.',
    address: 'Plot 12, VIP Road, Dharampeth Extension, Nagpur - 440010',
    timing: '10:00 AM - 09:00 PM (Daily)',
    phone: '+91 91589 54321',
    coordinates: '21.1458, 79.0882',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1200&auto=format&fit=crop'
  },
  {
    name: 'Tadoba',
    subtitle: 'Wilderness Bamboo Sanctuary',
    isWellnessOnly: true,
    description: 'An organic forest spa constructed from certified teak wood, bamboo, and terracotta tiles near the national tiger reserve. We strictly offer ancient Ayurvedic body massages and sound baths. Strictly no noisy hairdryers, chemical dyes, or acrylic nail work allowed here.',
    address: 'Veda Jungle Retreat, Moharli Gate Reserve, Forest Range, Tadoba - 442906',
    timing: '08:00 AM - 07:00 PM (Appt Only)',
    phone: '+91 98901 98901',
    coordinates: '20.2185, 79.3567',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=1200&auto=format&fit=crop'
  }
];

export const AMBIENT_IDEAS = [
  'Whispering bamboo grove soundtrack',
  'Pure saffron and natural wood oil aromas',
  'Water stream ripples within the lounge',
  'Zero blue-light lamps pre installed'
];
