import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MessageCircle, 
  ChevronRight, 
  ChevronLeft, 
  Sparkles, 
  Volume2, 
  VolumeX, 
  Music,
  X
} from 'lucide-react';

interface FloatingContactProps {
  isSoundscapeOn: boolean;
  toggleSoundscape: () => void;
  soundscapeVolume: number;
  setSoundscapeVolume: (volume: number) => void;
}

// Animation variants to orchestrate clean fades that coordinate perfectly with the spring background morph
const openContentVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      delay: 0.15,
      duration: 0.15,
      ease: 'easeOut'
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.96,
    transition: {
      duration: 0.08,
      ease: 'easeIn'
    }
  }
};

const closedContentVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      delay: 0.12,
      duration: 0.12,
      ease: 'easeOut'
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.96,
    transition: {
      duration: 0.08,
      ease: 'easeIn'
    }
  }
};

export default function FloatingContact({
  isSoundscapeOn,
  toggleSoundscape,
  soundscapeVolume,
  setSoundscapeVolume
}: FloatingContactProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // General helpline details matching Veda VIP sanctuaries
   const PHONE_NUMBER = '+917276313253';
  const WHATSAPP_URL = 'https://wa.me/917276313253?text=Hello%20Veda%20Wellness%20%26%20Spa%2C%20I%20would%20like%20to%20arrange%20a%20sanctuary%20reservation.';

  return (
    <div className={`fixed right-0 z-45 select-none flex flex-col items-end pointer-events-none transition-all duration-500 ease-out ${isScrolled ? 'bottom-6' : 'bottom-10'}`}>
      <div className="relative flex flex-col items-end pointer-events-auto">
        
        {/* Toggleable companion sidebar panel */}
        <AnimatePresence>
          {isOpen ? (
            <motion.div
              key="open-panel"
              className="absolute bottom-0 right-0 mr-6 mb-0 w-[280px] p-4 flex flex-col gap-4 text-left z-50 pointer-events-auto"
            >
              {/* Animated morphing background card */}
              <motion.div
                layoutId="reach-out-bg"
                className="absolute inset-0 bg-white/85 border border-sage-800/20 rounded-xl shadow-[0_20px_50px_rgba(40,46,43,0.12),0_0_30px_rgba(126,139,131,0.2)] backdrop-blur-xl -z-10"
                transition={{ type: 'spring', damping: 26, stiffness: 210 }}
              />

              {/* Fading contents to eliminate visual scaling stretch */}
              <motion.div
                variants={openContentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex flex-col gap-4 w-full"
              >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-sand-200/60 pb-2">
                  <span className="text-[9px] font-mono tracking-[0.25em] uppercase text-sand-600">Contact Us</span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 hover:bg-black/5 rounded-full text-sand-600 hover:text-black transition-colors cursor-pointer"
                    title="Close"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Quick Concierge Contacts Group */}
                <div className="grid grid-cols-2 gap-2">
                  {/* WhatsApp */}
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 bg-[#f2f8f5] hover:bg-emerald-800 text-emerald-800 hover:text-white border border-emerald-100/50 rounded-lg shadow-sm transition-all duration-300 text-center cursor-pointer font-medium"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600 group-hover:text-white shrink-0" />
                    <span className="text-[11px] font-mono tracking-wider uppercase font-semibold">WhatsApp</span>
                  </a>

                  {/* Direct Call */}
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="flex items-center justify-center gap-2 py-2.5 bg-[#f8f7f5] hover:bg-sage-800 text-sage-800 hover:text-white border border-sand-200/50 rounded-lg shadow-sm transition-all duration-300 text-center cursor-pointer font-medium"
                  >
                    <Phone className="w-4 h-4 text-sage-600 group-hover:text-white shrink-0" />
                    <span className="text-[11px] font-mono tracking-wider uppercase font-semibold">Call</span>
                  </a>
                </div>

                {/* Zen Soundscape Section */}
                <div className="border-t border-sand-200/60 pt-3 flex flex-col gap-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider font-mono text-sand-800">Ambient Soundscape</span>
                    <button
                      onClick={toggleSoundscape}
                      className={`px-3 py-1 text-[9.5px] font-mono uppercase tracking-wider rounded-full border transition-all cursor-pointer ${
                        isSoundscapeOn 
                          ? 'bg-sage-800 text-sand-50 border-sage-700 hover:bg-sage-900' 
                          : 'bg-transparent text-sand-700 border-sand-300/80 hover:border-sand-400 hover:text-black'
                      }`}
                    >
                      {isSoundscapeOn ? 'Stop' : 'Play'}
                    </button>
                  </div>

                  {/* Slider */}
                  <AnimatePresence>
                    {isSoundscapeOn && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden flex items-center gap-2 bg-[#f8f7f5] p-2 rounded-lg border border-sand-200/40"
                      >
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.05"
                          value={soundscapeVolume}
                          onChange={(e) => setSoundscapeVolume(parseFloat(e.target.value))}
                          className="flex-grow accent-sage-800 h-1 rounded-full bg-sand-200 cursor-pointer appearance-none outline-none"
                          title="Volume"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          ) : (
            /* Vertical docked luxurious tab button peaking on the absolute right side */
            <motion.div
              key="closed-tab"
              onClick={() => setIsOpen(true)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.08 }}
              className={`absolute bottom-0 right-0 flex flex-col items-center cursor-pointer group select-none mr-0 z-50 pointer-events-auto transition-colors duration-300 ${
                isScrolled 
                  ? 'py-5 px-3 gap-3.5' 
                  : 'h-[50px] sm:h-[54px] w-12 sm:w-14 items-center justify-center'
              }`}
            >
              {/* Animated morphing background card */}
              <motion.div
                layoutId="reach-out-bg"
                className="absolute inset-0 bg-white/85 group-hover:bg-white border-l border-y border-sage-800/20 group-hover:border-sage-800/40 rounded-l-xl shadow-[0_8px_30px_rgba(0,0,0,0.06),0_0_20px_rgba(126,139,131,0.15)] group-hover:shadow-[0_8px_35px_rgba(0,0,0,0.1),0_0_30px_rgba(126,139,131,0.25)] backdrop-blur-xl -z-10 transition-[background-color,border-color,box-shadow] duration-300"
                transition={{ type: 'spring', damping: 26, stiffness: 210 }}
              />

              {/* Fading contents to eliminate visual scaling stretch */}
              <AnimatePresence mode="wait">
                {isScrolled ? (
                  <motion.div
                    key="scrolled-reach-out"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="flex flex-col items-center gap-3.5 w-full"
                  >
                    {/* Stacked vertical uppercase text */}
                    <div className="[writing-mode:vertical-rl] text-[9.5px] font-mono tracking-[0.25em] font-bold text-sand-800 uppercase select-none">
                      REACH OUT
                    </div>

                    {/* Clean arrow button */}
                    <div className="pt-2 border-t border-sand-200/60 w-full flex justify-center relative">
                      <ChevronLeft className="w-3.5 h-3.5 text-sand-700 group-hover:-translate-x-0.5 transition-transform duration-300" />
                      {isSoundscapeOn && (
                        <span className="absolute top-1.5 right-1 flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage-500 opacity-75" />
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-sage-500" />
                        </span>
                      )}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="top-chevron-only"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="flex items-center justify-center w-full h-full relative"
                  >
                    <ChevronLeft className="w-5 h-5 text-sand-700 group-hover:-translate-x-0.5 transition-transform duration-300" />
                    {isSoundscapeOn && (
                      <span className="absolute top-1.5 right-1.5 flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage-500 opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-sage-500" />
                      </span>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
