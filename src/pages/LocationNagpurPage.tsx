import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Clock, AlertTriangle, Copy, Share2, MessageSquare, Check } from 'lucide-react';
import { LOCATIONS } from '../data';

interface LocationPageProps {
  onOpenBookingWithLocation: (loc: 'Chandrapur' | 'Nagpur' | 'Tadoba') => void;
  onNavigate: (page: string) => void;
}

const GALLERY_IMAGES = [
  'https://res.cloudinary.com/dqrq2oos0/image/upload/v1784928740/nag1_ezrdbu.jpg',
  'https://res.cloudinary.com/dqrq2oos0/image/upload/v1784928659/nag5_ovind2.jpg',
  'https://res.cloudinary.com/dqrq2oos0/image/upload/v1784928542/nag4_kmul8y.jpg'
];

const MAP_EMBED = 'https://maps.google.com/maps?q=Dharampeth,Nagpur,India&t=&z=14&ie=UTF8&iwloc=&output=embed';

export default function LocationNagpurPage({ onOpenBookingWithLocation, onNavigate }: LocationPageProps) {
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const locationData = LOCATIONS.find((loc) => loc.name === 'Nagpur') || LOCATIONS[1];

  // Dynamic SEO Injection (Document Title, Meta description & LocalBusiness JSON-LD)
  useEffect(() => {
    // 1. Title Dynamic Optimization
    const originalTitle = document.title;
    document.title = 'Veda Wellness & Spa, Nagpur | Luxury Massage & Soundscape Sanctuary';

    // 2. Meta Description Dynamic Injection
    const metaDesc = document.querySelector('meta[name="description"]');
    let originalDesc = '';
    if (metaDesc) {
      originalDesc = metaDesc.getAttribute('content') || '';
      metaDesc.setAttribute(
        'content',
        'Discover the best relaxing massage therapy, body scrub treatments, custom facials and luxury hair styling in Dharampeth, Nagpur at Veda Wellness & Spa.'
      );
    }

    // 3. Schema.org JSON-LD Structured Markup for search engines
    const ldJson = {
      '@context': 'https://schema.org',
      '@type': 'DaySpa',
      'name': 'Veda Wellness & Spa - Nagpur Sanctuary',
      'image': GALLERY_IMAGES[0],
      'description': 'A two-story minimalist architectural day spa designed in Nagpur to escape urban white noise. Features dynamic oxygen dermal rooms, high-heritage hair stylists, and sound treatment domes.',
      'telephone': locationData.phone,
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Plot 12, VIP Road, Dharampeth Extension',
        'addressLocality': 'Nagpur',
        'addressRegion': 'Maharashtra',
        'postalCode': '440010',
        'addressCountry': 'IN'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': '21.1458',
        'longitude': '79.0882'
      },
      'openingHours': 'Mo-Su 10:00-21:00',
      'priceRange': '₹₹'
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'ldjson-nagpur';
    script.innerHTML = JSON.stringify(ldJson);
    document.head.appendChild(script);

    return () => {
      // Cleanup
      document.title = originalTitle;
      if (metaDesc && originalDesc) {
        metaDesc.setAttribute('content', originalDesc);
      }
      const existingScript = document.getElementById('ldjson-nagpur');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [locationData]);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(locationData.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-28 md:pt-36 pb-16 bg-sand-50 min-h-screen text-left">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        
        {/* Editorial Title Banner */}
        <div className="border-b border-sand-200 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sage-800 text-[10px] uppercase tracking-widest font-bold">
              <span>Our Locations</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-sand-950 tracking-tight leading-none">
              Nagpur <span className="text-sage-800 font-serif">Sanctuary</span>
            </h1>
            <p className="font-sans text-xs sm:text-sm text-sand-600 font-light tracking-wide">
              — {locationData.subtitle} (Premium Salon & Day Spa)
            </p>
          </div>

          <button
            onClick={() => onOpenBookingWithLocation('Nagpur')}
            className="bg-sage-800 hover:bg-sage-900 text-white font-sans text-xs uppercase tracking-[0.2em] font-bold px-8 py-4 rounded-full transition-all shrink-0 cursor-pointer shadow-md"
          >
            Book Now
          </button>
        </div>

        {/* Dynamic Bento Block Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* COLUMN 1: Live Interactive Image Gallery */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="relative aspect-[16/10] sm:aspect-[1.7] rounded-3xl overflow-hidden border border-sand-200 shadow-lg bg-sand-100 group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImgIndex}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  referrerPolicy="no-referrer"
                  src={GALLERY_IMAGES[activeImgIndex]}
                  alt="Veda Nagpur Sanctuary minimalist design layout and treatment rooms"
                  className="w-full h-full object-cover saturate-75 brightness-[0.93]"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Thumbnails switcher */}
            <div className="grid grid-cols-3 gap-3">
              {GALLERY_IMAGES.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImgIndex(idx)}
                  className={`relative aspect-[16/10] rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer ${
                    activeImgIndex === idx
                      ? 'ring-2 ring-sage-800 border-transparent shadow'
                      : 'border-sand-200 hover:border-sand-400 saturate-50'
                  }`}
                >
                  <img
                    referrerPolicy="no-referrer"
                    src={img}
                    alt={`Veda Nagpur space preview ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* COLUMN 2: Fast Facts, Contact details, Rules */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6 bg-white p-6 sm:p-8 rounded-3xl border border-sand-200 shadow-md">
            <div className="space-y-6">
              <p className="text-sm text-sand-800 font-sans font-light leading-relaxed text-justify">
                {locationData.description} Escape the city's frantic pace. Features signature oxygen facial treatment chambers, dedicated aromatherapy systems, professional pedicure spaces, and absolute silence sound treatment domes.
              </p>

              {/* Contact actions */}
              <div className="space-y-4 border-t border-sand-100 pt-5 text-left">
                {/* Physical Address Block with Copy button */}
                <div className="flex items-start gap-3.5 group">
                  <MapPin className="w-5 h-5 text-sage-800 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-sand-400 uppercase tracking-widest block font-bold">Address</span>
                    <button
                      onClick={handleCopyAddress}
                      className="text-xs text-sand-800 text-left hover:text-sage-800 transition-colors flex items-center gap-1.5 font-light"
                      title="Copy Address"
                    >
                      <span className="underline">{locationData.address}</span>
                      {copied ? (
                        <span className="text-[9px] text-green-700 bg-green-50 px-1.5 py-0.5 rounded uppercase font-bold font-mono">Copied ✓</span>
                      ) : (
                        <Copy className="w-3 h-3 text-sand-300 shrink-0 select-none pointer-events-none group-hover:text-sand-400" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Instant Hotline */}
                <div className="flex items-center gap-3.5">
                  <Phone className="w-5 h-5 text-sage-800 shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono text-sand-400 uppercase tracking-widest block font-bold">Phone</span>
                    <a
                      href={`tel:${locationData.phone.replace(/\s+/g, '')}`}
                      className="text-xs text-sand-950 font-bold hover:underline"
                    >
                      {locationData.phone}
                    </a>
                  </div>
                </div>

                {/* Work hours */}
                <div className="flex items-center gap-3.5">
                  <Clock className="w-5 h-5 text-sage-800 shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono text-sand-400 uppercase tracking-widest block font-bold">Opening Hours</span>
                    <span className="text-xs text-sand-800 font-medium">
                      {locationData.timing}
                    </span>
                  </div>
                </div>
              </div>

              {/* Rules Block */}
              <div className="p-4 rounded-2xl bg-sand-100 border border-sand-200 flex items-start gap-3 text-xs leading-relaxed text-sand-700">
                <AlertTriangle className="w-4.5 h-4.5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[9px] uppercase tracking-wider text-sand-950 block font-bold mb-0.5 font-sans">Services Offered</strong>
                  <span>Salon and wellness spa service</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenBookingWithLocation('Nagpur')}
              className="w-full bg-sand-950 text-white font-sans text-[11px] uppercase tracking-[0.2em] font-medium py-3.5 rounded-2xl transition-all cursor-pointer text-center relative flex items-center justify-center gap-2 hover:bg-black"
            >
              <MessageSquare className="w-4 h-4 text-amber-200" />
              Book Space
            </button>
          </div>
        </div>

        {/* MAP EMBED */}
        <div className="w-full aspect-[21/9] min-h-[300px] max-h-[420px] rounded-[2rem] overflow-hidden border border-sand-200 shadow-sm">
          <iframe
            title="Route Map for Veda Wellness & Spa, Nagpur"
            src={MAP_EMBED}
            width="100%"
            height="100%"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="border-none opacity-90 saturate-75"
          />
        </div>

        {/* LOCAL KEYWORDS & SEO CONTENT BLOCK */}
        <section className="bg-white border border-sand-200 rounded-[2rem] p-8 md:p-12 space-y-8">
          <div className="max-w-4xl space-y-4">
            <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-sage-800 font-bold block">Our Services</span>
            <h2 className="font-serif text-2xl sm:text-3xl text-sand-950 font-light tracking-tight">
              A Minimalist Retreat: Best Spa and Wellness Center in Dharampeth, Nagpur
            </h2>
            <p className="font-sans text-sm text-sand-700 font-light leading-relaxed">
              Veda Wellness & Spa Nagpur stands as the ultimate urban oasis on VIP Road, Dharampeth. Melding traditional Ayurvedic wisdom with clinical dermo-facial therapies, our two-story design offers custom massage suites equipped with individual thermal steam rooms. Our team of experienced local massage therapists guarantees profound healing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-sand-100 pt-8 text-sm">
            <div className="space-y-3">
              <h3 className="font-serif font-medium text-sand-950">Specialty Therapies</h3>
              <ul className="space-y-2 text-sand-600 font-light">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sage-800 shrink-0" />
                  <span>Four-Hand synchronized master body therapies</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sage-800 shrink-0" />
                  <span>Full body scrub treatments</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sage-800 shrink-0" />
                  <span>Soundscape therapy beds</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-serif font-medium text-sand-950">Aesthetic Skin Solutions</h3>
              <ul className="space-y-2 text-sand-600 font-light">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sage-800 shrink-0" />
                  <span>O3+ brightening facials and D-Tan treatments</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sage-800 shrink-0" />
                  <span>Keratin spa, root touch-ups, and highlights</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sage-800 shrink-0" />
                  <span>Eco-conscious waxing, manicures, and medical pedicures</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

      </div>

      {/* FIND A SANCTUARY NEAR YOU */}
      <section className="py-16 bg-white border-t border-b border-sand-200/60 px-6 md:px-12 flex flex-col justify-center min-h-[35vh] relative z-20 mt-16 -mb-16">
        <div className="max-w-7xl mx-auto w-full text-center space-y-8">
          {/* Header Divider */}
          <div className="flex items-center justify-center gap-3 sm:gap-6">
            <div className="h-[1px] w-8 sm:w-32 bg-sage-800/20 shrink" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-sans font-bold text-sage-800 whitespace-nowrap">
              Find Us Near You
            </span>
            <div className="h-[1px] w-8 sm:w-32 bg-sage-800/20 shrink" />
          </div>
          
          {/* Serif Title */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-sand-950 tracking-tight leading-tight max-w-3xl mx-auto">
            Find Veda Wellness & Spa In Your City
          </h2>
          
          {/* 3 Location Cards */}
          <div className="grid grid-cols-3 gap-2 sm:gap-8 md:gap-12 max-w-5xl mx-auto pt-6">
            {/* Nagpur (Active) */}
            <motion.div 
              onClick={() => onNavigate('location-nagpur')}
              whileHover={{ y: -6 }}
              className="group cursor-pointer flex flex-col items-center space-y-3 sm:space-y-4 p-2 sm:p-4 rounded-3xl bg-sand-50 border border-sand-200 transition-all duration-300"
            >
              {/* Image Container (Active style) */}
              <div className="w-14 h-14 sm:w-20 sm:h-20 flex items-center justify-center rounded-2xl overflow-hidden bg-white border border-sage-800/50 shadow-sm transition-all duration-300">
                <img 
                  src="https://res.cloudinary.com/dqrq2oos0/image/upload/v1781003855/nagpur_location_image_l8ajl8.webp" 
                  alt="Nagpur Sanctuary" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="text-center">
                <h3 className="font-serif text-sm sm:text-lg text-sage-800 font-bold">
                  Nagpur
                </h3>
              </div>
            </motion.div>

            {/* Chandrapur */}
            <motion.div 
              onClick={() => onNavigate('location-chandrapur')}
              whileHover={{ y: -6 }}
              className="group cursor-pointer flex flex-col items-center space-y-3 sm:space-y-4 p-2 sm:p-4 rounded-3xl transition-all duration-300 hover:bg-sand-50"
            >
              {/* Image Container */}
              <div className="w-14 h-14 sm:w-20 sm:h-20 flex items-center justify-center rounded-2xl overflow-hidden bg-sand-50 border border-sand-150 group-hover:bg-white group-hover:border-sage-800/50 shadow-sm transition-all duration-300">
                <img 
                  src="https://res.cloudinary.com/dqrq2oos0/image/upload/v1781003855/chandrapurpur_location_image_zbnxlz.webp" 
                  alt="Chandrapur Sanctuary" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="text-center">
                <h3 className="font-serif text-sm sm:text-lg text-sand-950 group-hover:text-sage-800 transition-colors">
                  Chandrapur
                </h3>
              </div>
            </motion.div>

            {/* Tadoba */}
            <motion.div 
              onClick={() => onNavigate('location-tadoba')}
              whileHover={{ y: -6 }}
              className="group cursor-pointer flex flex-col items-center space-y-3 sm:space-y-4 p-2 sm:p-4 rounded-3xl transition-all duration-300 hover:bg-sand-50"
            >
              {/* Image Container */}
              <div className="w-14 h-14 sm:w-20 sm:h-20 flex items-center justify-center rounded-2xl overflow-hidden bg-sand-50 border border-sand-150 group-hover:bg-white group-hover:border-sage-800/50 shadow-sm transition-all duration-300">
                <img 
                  src="https://res.cloudinary.com/dqrq2oos0/image/upload/v1781003856/tadoba_location_image_sskbi3.webp" 
                  alt="Tadoba Sanctuary" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="text-center">
                <h3 className="font-serif text-sm sm:text-lg text-sand-950 group-hover:text-sage-800 transition-colors">
                  Tadoba
                </h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
