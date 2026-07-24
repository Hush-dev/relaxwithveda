import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Leaf, ArrowRight, Play, Award, ShieldCheck, Heart, Sparkles, Wind, Star, Instagram, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string, category?: string) => void;
  onOpenBooking: () => void;
  isSoundscapeOn: boolean;
  onToggleSoundscape: () => void;
}

const INSTAGRAM_POSTS = [
  {
    id: 1,
    imageUrl: "https://res.cloudinary.com/dqrq2oos0/image/upload/v1784928542/nag3_lya7qm.jpg",
    likes: "247",
    comments: "12",
    caption: "Raw sandstone facades & terracotta wellness pools designed to reconnect your circadian flow. Sanctuary I, Chandrapur. #VedaWellness #Sanctuary"
  },
  {
    id: 2,
    imageUrl: "https://res.cloudinary.com/dqrq2oos0/image/upload/v1784929204/IMG_1647.JPG_kmrp7q.jpg",
    likes: "189",
    comments: "8",
    caption: "Active molecules of sweet wild saffron and organic sweet almond oil to protect structural hair air-dried elasticity. #BotanicalWellness #OrganicSalon"
  },
  {
    id: 3,
    imageUrl: "https://res.cloudinary.com/dqrq2oos0/image/upload/v1784928542/nag4_kmul8y.jpg",
    likes: "412",
    comments: "28",
    caption: "Stepping into Tadoba Deciduous Baths. Sandalwood hot stone massage, private wood cabins, and wild bamboo showers. #TadobaRetreat #VedaBaths"
  },
  
];

export default function Home({ onNavigate, onOpenBooking, isSoundscapeOn, onToggleSoundscape }: HomeProps) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [instaIndex, setInstaIndex] = useState(0);

  const nextSlide = () => {
    setInstaIndex((prev) => (prev + 1) % INSTAGRAM_POSTS.length);
  };

  const prevSlide = () => {
    setInstaIndex((prev) => (prev - 1 + INSTAGRAM_POSTS.length) % INSTAGRAM_POSTS.length);
  };

  return (
    <div className="pb-0">
      {/* 1. CINEMATIC HERO COVER WITH IMMERSIVE TEXTURES */}
      <section className="relative h-screen flex flex-col justify-center items-center px-6 md:px-12 overflow-hidden bg-sand-50">
        <div className="absolute inset-0 z-0 bg-cover bg-center opacity-90 transition-transform duration-[10s] ease-out hover:scale-105" 
          style={{ backgroundImage: 'url("https://res.cloudinary.com/dqrq2oos0/image/upload/q_auto/f_auto/v1781002532/hero_img_2_rblxhv.jpg")' }}
        />
        {/* Soft, custom premium color grade overlay centered for maximum readability of centered text */}
        <div className="absolute inset-0 z-0 bg-black/40" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-sand-50 to-transparent" />

        <div className="max-w-4xl mx-auto w-full relative z-10 text-center text-white space-y-8 flex flex-col items-center">
          <div className="space-y-6 max-w-3xl flex flex-col items-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.15 }}
              className="font-serif text-5xl sm:text-6xl md:text-8xl tracking-tight leading-[0.95] font-light"
            >
              Built to heal. <br />
              <span className="font-serif font-light text-amber-100">Made to restore.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="text-sm md:text-base text-sand-200 font-sans font-light tracking-wide max-w-xl mx-auto leading-relaxed"
            >
              Luxury salon and Ayurvedic wellness across Nagpur, Chandrapur, and Tadoba — crafted to restore mind, body, and spirit.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.45 }}
            className="flex flex-col items-center gap-5 pt-4"
          >
            <button
              onClick={onOpenBooking}
              className="bg-white hover:bg-sand-50 text-sand-950 font-sans font-bold text-xs uppercase tracking-[0.2em] px-10 py-5 rounded-full transition-all duration-300 shadow-2xl cursor-pointer hover:-translate-y-0.5 active:scale-95"
            >
              Book Now
            </button>
          </motion.div>
        </div>

        {/* Floating Google Reviews Trust Badge at Bottom Left */}
        <div className="absolute bottom-10 left-6 md:left-12 z-10 flex items-center">
          <a 
            href="https://share.google/WpeMUhrLfkmNgO21S"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-col items-start gap-1.5 px-3.5 py-2.5 rounded-xl bg-black/30 backdrop-blur-md border border-white/10 hover:bg-black/45 hover:border-white/20 transition-all duration-300 group cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 animate-pulse" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <div className="flex items-center gap-0.5">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
                <span className="relative inline-block w-3 h-3">
                  <Star className="absolute top-0 left-0 w-3 h-3 text-amber-400 fill-amber-400" style={{ clipPath: 'polygon(0 0, 60% 0, 60% 100%, 0% 100%)' }} />
                  <Star className="absolute top-0 left-0 w-3 h-3 text-white/30" style={{ clipPath: 'polygon(60% 0, 100% 0, 100% 100%, 60% 100%)' }} />
                </span>
              </div>
            </div>
            <span className="text-[9.5px] uppercase tracking-[0.15em] font-sans text-sand-100">
              4.6/5 <span className="text-sand-300 font-light underline underline-offset-2 decoration-sand-300/40 hover:text-white group-hover:decoration-white/60 transition-colors">(146 Reviews)</span>
            </span>
          </a>
        </div>

        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center cursor-pointer">
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="text-white/60 hover:text-white transition-colors duration-300"
          >
            <svg 
              className="w-5 h-5 sm:w-6 sm:h-6" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* FIND A SANCTUARY NEAR YOU */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-12%" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="py-12 bg-white border-b border-sand-200/60 px-6 md:px-12 flex flex-col justify-center min-h-[35vh] relative z-20"
      >
        <div className="max-w-7xl mx-auto w-full text-center space-y-8">
          {/* Header Divider */}
          <div className="flex items-center justify-center gap-6">
            <div className="h-[1px] w-16 sm:w-32 bg-sage-800/20" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-sans font-bold text-sage-800">
              Find Us Near You
            </span>
            <div className="h-[1px] w-16 sm:w-32 bg-sage-800/20" />
          </div>
          
          {/* Serif Title */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-sand-950 tracking-tight leading-tight max-w-3xl mx-auto">
            Find Veda Wellness & Spa In Your City
          </h2>
          
          {/* 3 Location Cards */}
          <div className="grid grid-cols-3 gap-2 sm:gap-8 md:gap-12 max-w-5xl mx-auto pt-6">
            {/* Nagpur */}
            <motion.div 
              onClick={() => onNavigate('location-nagpur')}
              whileHover={{ y: -6 }}
              className="group cursor-pointer flex flex-col items-center space-y-3 sm:space-y-4 p-2 sm:p-4 rounded-3xl transition-all duration-300 hover:bg-sand-50"
            >
              {/* Image Container */}
              <div className="w-14 h-14 sm:w-20 sm:h-20 flex items-center justify-center rounded-2xl overflow-hidden bg-sand-50 border border-sand-150 group-hover:bg-white group-hover:border-sage-800/50 shadow-sm transition-all duration-300">
                <img 
                  src="https://res.cloudinary.com/dqrq2oos0/image/upload/v1781003855/nagpur_location_image_l8ajl8.webp" 
                  alt="Nagpur Sanctuary" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="text-center">
                <h3 className="font-serif text-sm sm:text-lg text-sand-950 group-hover:text-sage-800 transition-colors">
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
      </motion.section>

      {/* 2. THE EDITORIAL WELCOME LETTER */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-12%" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="py-24 bg-sand-50 border-b border-sand-200/50 relative px-6 md:px-12"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-7 space-y-8 text-left">
            <span className="text-[10px] uppercase tracking-[0.25em] font-sans font-bold text-sage-800 block">The Veda Story</span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-sand-950 tracking-tight leading-none">
              Where stillness <br />
              <span className="font-serif text-sage-800">found its form.</span>
            </h2>
            <div className="space-y-6 text-xs sm:text-sm text-sand-800 font-sans font-light tracking-wide leading-relaxed text-justify-editorial">
              <p>
                Veda was founded in 2018 in Chandrapur — built from raw sandstone, warm terracotta, and open skylit water streams. Our flagship sanctuary pioneered the fusion of botanical salon craft and Ayurvedic bodywork in Central India.
              </p>
              <p>
                Every element was designed to restore natural rhythm — a sensory philosophy that now defines every Veda location across Nagpur and Tadoba.
              </p>
            </div>
            
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onNavigate('about')} 
                className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-widest font-bold text-sand-950 hover:text-sage-800 transition-colors cursor-pointer group border border-sand-300 rounded-full px-6 py-3 hover:bg-sand-100/50"
              >
                Read Our Story
                <ArrowRight className="w-4 h-4 text-sage-800 group-hover:translate-x-1.5 transition-transform" />
              </button>
              <button 
                onClick={() => onNavigate('sanctuaries')} 
                className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-widest font-bold text-sand-950 hover:text-sage-800 transition-colors cursor-pointer group px-6 py-3"
              >
                Explore Sanctuaries
                <ArrowRight className="w-4 h-4 text-sage-800 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-sand-200 shadow-xl">
              <img 
                referrerPolicy="no-referrer"
                src="https://res.cloudinary.com/dqrq2oos0/image/upload/q_auto/f_auto/v1781081799/about_us_image_cn57f5.jpg" 
                alt="Veda Chandrapur Origin Sanctuary" 
                className="w-full h-full object-cover saturate-75 brightness-[0.93]"
              />
              <div className="absolute inset-0 bg-sage-900/10 mix-blend-color" />
            </div>

            {/* floating badge badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl max-w-[210px] border border-sand-200 text-left">
            
              <p className="text-[10px] text-sand-650 leading-relaxed font-sans font-light">
                Chandrapur Flagship — founded 2018. Central India's first stone-clad wellness sanctuary.
              </p>
            </div>
          </div>

        </div>
      </motion.section>

      {/* 3. EXPERIENCE JOURNEY — BRIDGING BEAUTY & WELLNESS (BENTO PATTERN) */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-12%" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="py-24 bg-sand-100 px-6 md:px-12 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] uppercase tracking-[0.25em] text-sage-800 font-bold block mb-3">Our Services</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-tight text-sand-950">
              Where Luxury Salon  <br />
              <span className="font-serif text-sage-800">meets Organic Wellness</span>
            </h2>
          </div>

          {/* Bento-style grid - Simplified text and premium imagery */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Bento Block 1: Wellness Services */}
            <div className="md:col-span-7 bg-white rounded-3xl p-8 border border-sand-200 flex flex-col justify-between hover:shadow-lg transition-all duration-300 min-h-[380px] group">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center h-full">
                <div className="sm:col-span-7 flex flex-col justify-between h-full py-2 space-y-6">
                  <div className="space-y-3">
                    <h3 className="font-serif text-2xl sm:text-3xl font-light text-sand-950 leading-tight">Wellness Therapies</h3>
                    <p className="text-xs text-sand-650 font-sans font-light leading-relaxed">
                      Restore balance with signature Ayurvedic body therapies, hot basalt stone massage, and custom botanical treatments — designed to heal from within.
                    </p>
                  </div>
                  <div>
                    <button 
                      onClick={() => onNavigate('treatments', 'Spa & Massage')}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-sage-800 font-sans cursor-pointer group-hover:underline"
                    >
                      Explore Treatments <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
                <div className="sm:col-span-5 aspect-[4/5] rounded-2xl overflow-hidden shadow-sm">
                  <img 
                    referrerPolicy="no-referrer"
                    src="https://res.cloudinary.com/dqrq2oos0/image/upload/q_auto/f_auto/v1781006467/wellness_service_image_azmegn.jpg" 
                    alt="Therapeutic wellness service" 
                    className="w-full h-full object-cover saturate-[0.7] group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Bento Block 2: Women Grooming */}
            <div className="md:col-span-5 rounded-3xl text-sand-50 text-left flex flex-col justify-end hover:shadow-lg transition-all duration-300 min-h-[380px] relative overflow-hidden group cursor-pointer" onClick={() => onNavigate('treatments', "Women's Hair Services")}>
              <img 
                referrerPolicy="no-referrer"
                src="https://res.cloudinary.com/dqrq2oos0/image/upload/q_auto/f_auto/v1781015015/women_service_image_amovgx.webp" 
                alt="Women grooming service" 
                className="absolute inset-0 w-full h-full object-cover saturate-[0.75] brightness-[0.75] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sand-950/75 via-sand-950/20 to-transparent z-0" />
              
              <div className="p-8 relative z-10 space-y-4">
                <div className="space-y-1.5">
                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-white leading-tight">Women Grooming</h3>
                  <p className="text-xs text-sand-200 font-sans font-light leading-relaxed max-w-xs">
                    Premium haircare, protective botanical colouring, expert styling, and revitalising treatments crafted exclusively for women.
                  </p>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-100 font-sans group-hover:underline">
                  Women's Services <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            {/* Bento Block 3: Men Grooming */}
            <div className="md:col-span-5 rounded-3xl text-sand-50 text-left flex flex-col justify-end hover:shadow-lg transition-all duration-300 min-h-[380px] relative overflow-hidden group cursor-pointer" onClick={() => onNavigate('treatments', "Men's Grooming")}>
              <img 
                referrerPolicy="no-referrer"
                src="https://res.cloudinary.com/dqrq2oos0/image/upload/q_auto/f_auto/v1781015008/men_service_image_d92j9u.webp" 
                alt="Men grooming service" 
                className="absolute inset-0 w-full h-full object-cover saturate-[0.75] brightness-[0.75] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sand-950/75 via-sand-950/20 to-transparent z-0" />

              <div className="p-8 relative z-10 space-y-4">
                <div className="space-y-1.5">
                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-white leading-tight">Men Grooming</h3>
                  <p className="text-xs text-sand-200 font-sans font-light leading-relaxed max-w-xs">
                    Precision haircuts, beard grooming, and therapeutic scalp treatments tailored for the modern man.
                  </p>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-100 font-sans group-hover:underline">
                  Men's Services <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            {/* Bento Block 4: Gift Voucher / Gift Card */}
            <div className="md:col-span-7 bg-sand-200/40 rounded-3xl p-8 border border-sand-300/60 flex flex-col justify-between hover:shadow-lg transition-all duration-300 min-h-[380px] group">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center h-full">
                <div className="sm:col-span-7 flex flex-col justify-between h-full py-2 space-y-6">
                  <div className="space-y-3">
                    <h3 className="font-serif text-2xl sm:text-3xl font-light text-sand-950 leading-tight">Gift Cards</h3>
                    <p className="text-xs text-sand-700 font-sans font-light leading-relaxed">
                      Give the gift of luxury wellness. Available as gold-foil printed cards or premium digital vouchers.
                    </p>
                  </div>
                  <div>
                    <button 
                      onClick={() => onNavigate('giftcard')}
                      className="bg-sage-800 hover:bg-sage-900 text-white font-sans font-bold text-[10px] uppercase tracking-[0.2em] px-6 py-3 rounded-full transition-all duration-300 cursor-pointer shadow-md"
                    >
                      Buy Gift Card
                    </button>
                  </div>
                </div>
                <div className="sm:col-span-5 aspect-[4/5] rounded-2xl overflow-hidden shadow-sm">
                  <img 
                    referrerPolicy="no-referrer"
                    src="https://res.cloudinary.com/dqrq2oos0/image/upload/v1784928542/nag4_kmul8y.jpg" 
                    alt="Luxury gift card wrap" 
                    className="w-full h-full object-cover saturate-[0.8] group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </motion.section>

      {/* 4. THE EDITORIAL HONORS & SEALS BANNER */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="py-10 sm:py-14 bg-[#f5f1ea] border-y border-sand-200/60 relative"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-4 divide-x divide-sand-300/60 text-center">
          <div className="flex flex-col items-center justify-center px-1 sm:px-4">
            <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-sand-950 tracking-tight leading-none">
              8+
            </span>
            <span className="text-[8px] sm:text-[10px] md:text-xs uppercase tracking-[0.2em] text-sand-500 mt-2 sm:mt-3 font-sans font-medium">
              Treatments
            </span>
          </div>
          <div className="flex flex-col items-center justify-center px-1 sm:px-4">
            <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-sand-950 tracking-tight leading-none">
              3
            </span>
            <span className="text-[8px] sm:text-[10px] md:text-xs uppercase tracking-[0.2em] text-sand-500 mt-2 sm:mt-3 font-sans font-medium">
              Sanctuaries
            </span>
          </div>
          <div className="flex flex-col items-center justify-center px-1 sm:px-4">
            <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-sand-950 tracking-tight leading-none">
              12
            </span>
            <span className="text-[8px] sm:text-[10px] md:text-xs uppercase tracking-[0.2em] text-sand-500 mt-2 sm:mt-3 font-sans font-medium">
              Years of Service
            </span>
          </div>
          <div className="flex flex-col items-center justify-center px-1 sm:px-4">
            <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-sand-950 tracking-tight leading-none">
              2k+
            </span>
            <span className="text-[8px] sm:text-[10px] md:text-xs uppercase tracking-[0.2em] text-sand-500 mt-2 sm:mt-3 font-sans font-medium">
              Happy Guests
            </span>
          </div>
        </div>
      </motion.section>

      {/* 5. INTEGRATED INSTAGRAM GALLERY / CAROUSEL BLOCK */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-12%" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="py-24 bg-sand-50 relative px-6 md:px-12 overflow-hidden border-b border-sand-200"
      >
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
            <div className="space-y-3 text-left">
              <span className="text-[10px] uppercase tracking-[0.25em] text-sage-800 font-bold flex items-center gap-2">
                @relax_with_veda
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-tight text-sand-950">
                Inside the Sanctuary
              </h2>
              <p className="text-xs sm:text-sm text-sand-800 font-sans font-light tracking-wide max-w-xl">
                A daily visual journal of our spaces, rituals, and botanical formulations — straight from our Nagpur, Chandrapur, and Tadoba locations.
              </p>
            </div>
            
            {/* Carousel Navigation Buttons */}
            <div className="flex items-center gap-3">
              <button 
                onClick={prevSlide}
                className="p-3.5 rounded-full border border-sand-250 bg-white hover:bg-sand-100 transition-colors text-sand-950 shadow-sm cursor-pointer hover:scale-105 active:scale-95"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button 
                onClick={nextSlide}
                className="p-3.5 rounded-full border border-sand-250 bg-white hover:bg-sand-100 transition-colors text-sand-950 shadow-sm cursor-pointer hover:scale-105 active:scale-95"
                aria-label="Next image"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Carousel Slider */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[0, 1, 2].map((offset) => {
              const postIndex = (instaIndex + offset) % INSTAGRAM_POSTS.length;
              const post = INSTAGRAM_POSTS[postIndex];
              return (
                <motion.div 
                  key={`${post.id}-${postIndex}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: offset * 0.1 }}
                  className={`group relative aspect-square rounded-[2rem] overflow-hidden bg-sand-100 border border-sand-200/60 shadow-md ${
                    offset === 1 ? 'hidden sm:block' : offset === 2 ? 'hidden md:block' : ''
                  }`}
                >
                  <img 
                    referrerPolicy="no-referrer"
                    src={post.imageUrl} 
                    alt={post.caption} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 saturate-75 brightness-[0.95]"
                  />
                  
                  {/* Handle label at bottom right of every image */}
                  <div className="absolute bottom-5 right-5 bg-black/40 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-[10px] font-mono tracking-widest text-white/95 uppercase select-none pointer-events-none">
                    @relax_with_veda
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Instagram Follow Row Button */}
          <div className="pt-4 text-center">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-sand-950 hover:bg-sand-900 text-white font-sans font-bold text-xs uppercase tracking-[0.2em] px-10 py-5 rounded-full transition-all duration-300 shadow-xl cursor-pointer hover:-translate-y-0.5 active:scale-95"
            >
              Follow us on Instagram
            </a>
          </div>

        </div>
      </motion.section>
    </div>
  );
}
