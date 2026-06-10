import React from 'react';
import { MapPin, Phone, Clock, AlertTriangle, ArrowRight, ShieldCheck, Gem } from 'lucide-react';
import { motion } from 'motion/react';

interface SanctuariesPageProps {
  onOpenBooking: () => void;
  onNavigate: (page: string) => void;
}

export default function SanctuariesPage({ onOpenBooking, onNavigate }: SanctuariesPageProps) {
  
  // Custom richer location narratives
  const locationDetails = [
    {
      id: 'nagpur',
      name: 'Nagpur',
      type: 'Salon & Wellness Spa',
      tagline: 'The ultimate metropolitan restore.',
      description: 'Our flagship studio features tall sandstone pillars, double-thick acoustic clay shields, and custom light-spectrum treatment rooms. Complete with styling suites and silent pedicure basins.',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200',
      rule: 'Full salon and wellness spa services available.',
      timing: '10:00 - 21:00',
      phone: '+91 91234 56782'
    },
    {
      id: 'chandrapur',
      name: 'Chandrapur',
      type: 'Salon & Wellness Spa',
      tagline: 'Warm terracotta tiles & skylit courtyards.',
      description: 'Resting on red earthen bricks and rich iron oxide walls, Chandrapur is structured around a towering glass atrium. Includes dedicated steam chambers and private massage rooms.',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200',
      rule: 'Full salon and wellness spa services available.',
      timing: '10:05 - 20:30',
      phone: '+91 91234 56783'
    },
    {
      id: 'tadoba',
      name: 'Tadoba',
      type: 'Wellness Spa Sanctuary',
      tagline: 'Under the shade of ancient teakwood.',
      description: 'Built entirely on stilted timber and organic linen partitions, our Tadoba location functions as a deciduous wildlife retreat. Guests sit near open wood-fired mud pits and receive holistic sound baths.',
      image: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=1200',
      rule: 'Wellness and spa services only. Salon and styling services are not available here.',
      timing: '09:00 - 18:00',
      phone: '+91 91234 56781'
    }
  ];

  return (
    <div className="pt-32 md:pt-36 pb-20 bg-sand-50 relative min-h-screen px-6 md:px-12 text-left">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Page Headings */}
        <div className="text-left border-b border-sand-200 pb-10">
          <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-sage-800 font-bold block mb-4">
            Our Locations
          </span>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-light text-sand-950 tracking-tight leading-none">
                Step inside our <br />
                <span className="font-serif text-sage-800 font-light">spaces of solace.</span>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-xs sm:text-sm text-sand-800 font-sans font-light tracking-wide leading-relaxed text-justify-editorial">
                We design environments, not offices. Every space is built with natural materials, sandstone finishes, and acoustics engineered for deep calm.
              </p>
            </div>
          </div>
        </div>

        {/* FIND A SANCTUARY NEAR YOU */}
        <div className="py-12 bg-white border border-sand-200/60 rounded-[2.5rem] px-6 md:px-12 flex flex-col justify-center min-h-[35vh] relative z-20">
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
        </div>

        {/* Location Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locationDetails.map((loc) => {
            return (
              <div 
                key={loc.id}
                className="bg-white/30 border border-white/40 shadow-xl backdrop-blur-lg rounded-[2rem] overflow-hidden flex flex-col h-full hover:shadow-2xl hover:border-white/60 transition-all duration-300 group"
              >
                {/* 1. First: Image */}
                <div className="aspect-[16/10] overflow-hidden relative border-b border-sand-200/40">
                  <img 
                    referrerPolicy="no-referrer"
                    src={loc.image} 
                    alt={loc.name} 
                    className="w-full h-full object-cover saturate-75 brightness-[0.98] group-hover:scale-105 transition-transform duration-[6s] ease-out"
                  />
                  <div className="absolute inset-0 bg-sage-950/5 mix-blend-multiply pointer-events-none" />
                </div>

                {/* Content Container */}
                <div className="p-7 sm:p-8 flex flex-col flex-grow text-left space-y-5">
                  {/* Text Header stack */}
                  <div className="space-y-2">
                    {/* 2. The Location Name */}
                    <h3 className="font-serif text-2xl font-light text-sand-150 leading-tight">
                      {loc.name}
                    </h3>

                    {/* 4. Salon and Wellness Spa Type */}
                    <span className="text-[11px] font-sans uppercase tracking-[0.15em] text-sand-600 font-semibold block">
                      {loc.type}
                    </span>
                  </div>

                  {/* 5. Description */}
                  <div className="space-y-3.5 flex-grow">
                    <p className="text-xs sm:text-sm text-sand-850 font-sans font-light leading-relaxed">
                      {loc.description}
                    </p>
                    
                    {/* Subtle Rule card style */}
                    <div className="p-3.5 rounded-xl bg-sand-100/60 border border-sand-200/50 text-[11px] text-sand-800 font-sans font-light leading-relaxed">
                      <span className="text-[9px] uppercase tracking-wider font-mono text-sand-500 font-bold block mb-0.5">
                        Good to Know
                      </span>
                      {loc.rule}
                    </div>
                  </div>

                  {/* Timing & Number Info stack */}
                  <div className="border-t border-sand-200/60 pt-4 space-y-2.5">
                    {/* 6. Timing */}
                    <div className="flex items-center gap-2.5 text-xs text-sand-900 font-sans font-light">
                      <Clock className="w-4 h-4 text-sage-700/80 shrink-0" />
                      <div className="flex items-center gap-1.5 leading-none">
                        <span className="font-mono text-[9px] text-sand-400 uppercase tracking-widest font-bold">Hours:</span>
                        <span className="font-semibold">{loc.timing}</span>
                      </div>
                    </div>

                    {/* 7. Number */}
                    <div className="flex items-center gap-2.5 text-xs text-sand-900 font-sans font-light">
                      <Phone className="w-4 h-4 text-sage-700/80 shrink-0" />
                      <div className="flex items-center gap-1.5 leading-none">
                        <span className="font-mono text-[9px] text-sand-400 uppercase tracking-widest font-bold">Phone:</span>
                        <a href={`tel:${loc.phone}`} className="font-semibold hover:underline decoration-sage-700/40">
                          {loc.phone}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* 8. 1-2 words CTA */}
                  <div className="pt-2">
                    <button
                      onClick={() => onNavigate('location-' + loc.id)}
                      className="w-full bg-sage-800 hover:bg-sage-900 group-hover:bg-sand-950 group-hover:hover:bg-black text-white font-sans text-[10px] uppercase tracking-[0.2em] font-bold py-3.5 px-6 rounded-xl transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
                    >
                      View Location
                      <ArrowRight className="w-3.5 h-3.5 text-amber-200 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Unified Conduct Guidelines info */}
        <section className="bg-sage-900 text-sand-50 rounded-[2.5rem] p-8 md:p-12 text-left relative overflow-hidden shadow-2xl border border-sage-800">
          <div className="absolute inset-0 bg-cover opacity-10 pointer-events-none" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1200")' }} />
          <div className="max-w-4xl space-y-6 relative z-10">
            <span className="text-[10px] uppercase tracking-widest text-amber-200 font-bold block">
              Sanctuary Guidelines
            </span>
            <h3 className="font-serif text-3xl font-light text-sand-100 leading-tight">
              A few things to keep in mind
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className="space-y-1.5">
                <span className="text-[10px] uppercase font-mono tracking-widest text-sage-300 font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Mute Cellular Sounds
                </span>
                <p className="text-xs text-sand-200 font-sans font-light leading-relaxed">
                  Upon passing into the vestibule, we request guests to mute cellular ringer tones or sound generators. Calls are strictly directed to the visual garden courtyard only.
                </p>
              </div>

              <div className="space-y-1.5">
                <span className="text-[10px] uppercase font-mono tracking-widest text-sage-300 font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Arrive on Time
                </span>
                <p className="text-xs text-sand-200 font-sans font-light leading-relaxed">
                  We reserve buffer time between each session for sanitation. Please arrive 10 minutes early.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
