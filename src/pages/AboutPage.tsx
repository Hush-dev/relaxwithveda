import React from 'react';
import { motion } from 'motion/react';
import { Compass, ShieldCheck, ArrowRight, Quote, Sparkles, Sprout, Calendar, Trees, Droplet } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
}

export default function AboutPage({ onNavigate, onOpenBooking }: AboutPageProps) {
  const founders = [
    {
      name: 'Aman Singh',
      role: 'Founder & Visionary Director',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
      bio: 'Envisions each sanctuary’s structural acoustics and sandstone layouts, rejecting synthetic noise for natural rhythm.',
      signature: 'Aman Singh'
    },
    {
      name: 'Dr. Anjali Sen',
      role: 'Co-Founder & Chief Alchemist',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
      bio: 'Formulates daily botanical hair glazes and therapeutic oils extracted from organically grown forest flora.',
      signature: 'Dr. Anjali Sen'
    }
  ];

  const philosophyPillars = [
    {
      icon: <Sprout className="w-5 h-5 text-sage-800" />,
      title: 'Pristine Botanicals',
      desc: 'No synthetic chemicals or artificial stabilizers. Raw pastes and oils are pressed fresh on the morning of your therapy.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-sage-800" />,
      title: 'Absolute Silence',
      desc: 'Soundproofing grids, ambient sonic drones, and voluntary silence cues designed to trigger cognitive winding.'
    }
  ];

  const milestones = [
    { value: '2018', label: 'First Sanctuary'},
    { value: '0%', label: 'Synthetic Elements'},
    { value: '3', label: 'Sanctuaries Built'}
  ];

  return (
    <div className="pt-32 md:pt-36 pb-0 bg-sand-50 min-h-screen px-6 md:px-12 text-left">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Page Header */}
        <div className="border-b border-sand-200 pb-10">
          <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-sage-800 font-bold block mb-4">
            The Veda Philosophy
          </span>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-sand-950 tracking-tight leading-none">
                Conscious healing <br />
                <span className="font-serif text-sage-800 font-light">built for the modern spirit.</span>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-xs sm:text-sm text-sand-600 font-sans font-light tracking-wide leading-relaxed">
                We combine traditional Indian Ayurvedic science with pristine botanical compounds inside raw, low-frequency architectural sanctuaries.
              </p>
            </div>
          </div>
        </div>

        {/* Horizontal Hero Landscape Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-[16rem] sm:h-[22rem] md:h-[28rem] rounded-[2rem] overflow-hidden border border-sand-200 bg-sand-100 shadow-md relative group"
        >
          <img 
            src="https://res.cloudinary.com/dqrq2oos0/image/upload/q_auto/f_auto/v1781081798/about_us_hero_image_vedqhi.webp" 
            alt="Veda Serene Sanctuary Spaces" 
            className="w-full h-full object-cover saturate-50 brightness-[0.93] group-hover:scale-101 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-sage-900/5 mix-blend-color" />
        </motion.div>

        {/* Section 1: How It Started & Quick Stats (Streamlined Layout) */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
        >
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-8 bg-sage-800/30" />
              <span className="text-[9px] uppercase tracking-[0.2em] font-mono text-sage-800 font-semibold">Our Journey</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-sand-950 tracking-tight leading-tight">
              Where quiet solitude <br />
              <span className="font-serif text-sage-800">found physical foundation.</span>
            </h2>
            
            <div className="space-y-4 text-xs sm:text-sm text-sand-700 font-sans font-light tracking-wide leading-relaxed">
              <p>
                Founded in 2018 in the historic sandstone lands of Chandrapur, Veda was built as an antidote to modern sensory overload. Our first treatment room was constructed stone-by-stone beneath running water lines — proving that natural texture accelerates nervous system recovery.
              </p>
              <p>
                Today, our architectural philosophy and daily-pressed botanical formulations remain consistent across Nagpur (Dharampeth), the Tadoba forest canopy, and Chandrapur.
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {milestones.map((m, idx) => (
                <div key={idx} className="bg-white/80 p-4 rounded-2xl border border-sand-150 flex flex-col gap-1 hover:border-sand-250 transition-colors">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[9px] uppercase tracking-wider font-mono text-sand-400 font-semibold">{m.label}</span>
                  </div>
                  <span className="text-xl sm:text-2xl font-serif font-light text-sand-950 mt-1">{m.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/5] sm:aspect-[4/5] lg:aspect-[2/3] lg:h-[34rem] w-full rounded-[2.5rem] overflow-hidden border border-sand-200 shadow-xl relative group">
              <img 
                src="https://res.cloudinary.com/dqrq2oos0/image/upload/q_auto/f_auto/v1781081799/about_us_image_cn57f5.jpg" 
                alt="Veda Chandrapur Origin Sanctuary" 
                className="w-full h-full object-cover saturate-50 brightness-[0.94] group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-sage-900/5 mix-blend-color" />
              <div className="absolute bottom-6 left-6 right-6 bg-black/40 backdrop-blur-md p-5 rounded-2xl border border-white/10">
                <span className="text-[8px] uppercase tracking-widest font-mono text-amber-100 font-bold block mb-0.5">FOUNDERS STONE</span>
                <p className="text-[10px] text-sand-100 font-sans font-light leading-relaxed">
                  Our raw sandstone sanctuary in Chandrapur—where the Veda design law was born.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section 2: Minds Behind It (Founders) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8"
        >
          <div className="text-left">
            <span className="text-[10px] uppercase tracking-[0.25em] font-sans font-bold text-sage-800 block mb-2">
              The Minds Behind Veda
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-light text-sand-950 tracking-tight leading-none">
              Science aligned with heritage.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {founders.map((founder, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-sand-200 p-6 sm:p-8 flex flex-col sm:flex-row gap-6 sm:gap-8 items-start hover:shadow-lg transition-all duration-200"
              >
                {/* Rectangular photo frame */}
                <div className="w-full h-64 sm:w-44 sm:h-56 rounded-2xl overflow-hidden bg-sand-50 border border-sand-150 shrink-0 relative shadow-sm">
                  <img 
                    src={founder.avatar} 
                    alt={founder.name} 
                    className="w-full h-full object-cover saturate-0 contrast-[1.05]"
                  />
                  <div className="absolute inset-0 bg-sage-900/5 mix-blend-color" />
                </div>

                <div className="space-y-2 flex-1 text-left w-full">
                  <div>
                    <h3 className="font-serif text-lg font-light text-sand-950 leading-tight">{founder.name}</h3>
                    <p className="text-[9px] uppercase tracking-widest font-mono text-sage-800 font-bold">
                      {founder.role}
                    </p>
                  </div>
                  
                  <p className="text-xs text-sand-600 font-sans font-light leading-relaxed">
                    {founder.bio}
                  </p>
                  

                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Section 3: Motto & Pillars (Bento Style) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-sand-100/50 border border-sand-200 rounded-[2rem] p-6 md:p-10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-sage-800/5 rounded-full blur-3xl pointer-events-none" />
          <Quote className="absolute top-6 right-6 md:top-8 md:right-8 w-12 h-12 md:w-16 md:h-16 text-sage-800/10 pointer-events-none" />
          
          <div className="max-w-4xl space-y-6 relative z-10">
            <span className="text-[9px] uppercase tracking-[0.25em] font-mono text-sage-800 font-bold block">
              Our Vision
            </span>
            
            <div className="space-y-4">
              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-light text-sand-950 tracking-tight leading-relaxed italic pr-6">
                "Restoring the human nervous system to baseline calm through botanical integrity, clean daylight design, and sacred silence."
              </h3>
            </div>

           
            
          </div>
        </motion.div>



      </div>

      {/* FIND A SANCTUARY NEAR YOU */}
      <section className="mt-20 py-16 bg-white border-t border-sand-200/60 -mx-6 md:-mx-12 px-6 md:px-12 flex flex-col justify-center relative">
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
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-sand-950 tracking-tight leading-tight max-w-3xl mx-auto">
            Find Veda Wellness & Spa In Your City
          </h2>
          
          {/* 3 Location Cards */}
          <div className="grid grid-cols-3 gap-2 sm:gap-8 md:gap-12 max-w-4xl mx-auto pt-4">
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
                <h3 className="font-serif text-sm sm:text-base text-sand-950 group-hover:text-sage-800 transition-colors">
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
                <h3 className="font-serif text-sm sm:text-base text-sand-950 group-hover:text-sage-800 transition-colors">
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
                <h3 className="font-serif text-sm sm:text-base text-sand-950 group-hover:text-sage-800 transition-colors">
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
