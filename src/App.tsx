import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Volume2, 
  VolumeX, 
  Sparkles, 
  Award, 
  ShieldCheck, 
  Heart, 
  Music, 
  AlertCircle,
  Wind,
  Compass,
  ArrowRight,
  ShoppingBag
} from 'lucide-react';

import Navbar from './components/Navbar';
import BookingSystem from './components/BookingSystem';
import FloatingContact from './components/FloatingContact';

// Pages import
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import TreatmentsPage from './pages/TreatmentsPage';
import SanctuariesPage from './pages/SanctuariesPage';
import GiftCardPage from './pages/GiftCardPage';
import TeamPage from './pages/TeamPage';
import JournalPage from './pages/JournalPage';
import LocationChandrapurPage from './pages/LocationChandrapurPage';
import LocationNagpurPage from './pages/LocationNagpurPage';
import LocationTadobaPage from './pages/LocationTadobaPage';
import FAQPage from './pages/FAQPage';

import { Service } from './types';
import { SERVICES } from './data';

// Web Audio API Synthesizer variables (lazily initialized on first user interaction)
let audioCtx: AudioContext | null = null;
let droneOsc: OscillatorNode | null = null;
let lfoOsc: OscillatorNode | null = null;
let lowpassFilter: BiquadFilterNode | null = null;
let masterGain: GainNode | null = null;

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [activeTreatmentCategory, setActiveTreatmentCategory] = useState<string>('Spa & Massage');
  const [selectedServices, setSelectedServices] = useState<Service[]>([]);
  const [giftCardConfig, setGiftCardConfig] = useState<any>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isSoundscapeOn, setIsSoundscapeOn] = useState(false);
  const [soundscapeVolume, setSoundscapeVolume] = useState(0.2);
  const [selectedLocationForBooking, setSelectedLocationForBooking] = useState<'Chandrapur' | 'Nagpur' | 'Tadoba' | ''>('');

  const [showBackToTop, setShowBackToTop] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Web Audio Synth Logic to generate peaceful brownian surf & drone hum
  const toggleSoundscape = () => {
    if (!isSoundscapeOn) {
      try {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        if (!audioCtx) {
          audioCtx = new AudioContextClass();
        }
        
        if (audioCtx.state === 'suspended') {
          audioCtx.resume();
        }

        // 1. Create a quiet ambient hum drone (110Hz or A2, the root note of earth)
        droneOsc = audioCtx.createOscillator();
        droneOsc.type = 'triangle';
        droneOsc.frequency.setValueAtTime(110, audioCtx.currentTime); // Deep calming root

        // 2. Create an LFO to oscillate the drone's amplitude (simulating slow wave movement)
        lfoOsc = audioCtx.createOscillator();
        lfoOsc.type = 'sine';
        lfoOsc.frequency.setValueAtTime(0.12, audioCtx.currentTime); // Slow cycle (~8s)

        const lfoGain = audioCtx.createGain();
        lfoGain.gain.setValueAtTime(0.3, audioCtx.currentTime);

        // 3. Lowpass Filter to make the sound extremely warm, velvety and zero-harshness
        lowpassFilter = audioCtx.createBiquadFilter();
        lowpassFilter.type = 'lowpass';
        lowpassFilter.frequency.setValueAtTime(220, audioCtx.currentTime); // cut off high frequencies
        lowpassFilter.Q.setValueAtTime(1, audioCtx.currentTime);

        // 4. Master Gain Node
        masterGain = audioCtx.createGain();
        masterGain.gain.setValueAtTime(soundscapeVolume * 0.15, audioCtx.currentTime); // safe gentle background level

        // Connections
        lfoOsc.connect(lfoGain);
        lfoGain.connect(masterGain.gain); // Modulate Master gain with LFO
        
        droneOsc.connect(lowpassFilter);
        lowpassFilter.connect(masterGain);
        masterGain.connect(audioCtx.destination);

        droneOsc.start();
        lfoOsc.start();

        setIsSoundscapeOn(true);
      } catch (err) {
        console.warn("Could not start ambient digital synth:", err);
      }
    } else {
      // Disconnect everything
      try {
        if (droneOsc) droneOsc.stop();
        if (lfoOsc) lfoOsc.stop();
        if (droneOsc) droneOsc.disconnect();
        if (lfoOsc) lfoOsc.disconnect();
        if (lowpassFilter) lowpassFilter.disconnect();
        if (masterGain) masterGain.disconnect();
      } catch (e) {}
      setIsSoundscapeOn(false);
    }
  };

  // Adjust volume real-time
  useEffect(() => {
    if (masterGain && audioCtx) {
      masterGain.gain.setValueAtTime(soundscapeVolume * 0.15, audioCtx.currentTime);
    }
  }, [soundscapeVolume]);

  const handleToggleService = (service: Service) => {
    setSelectedServices(prev => {
      const exists = prev.some(s => s.id === service.id);
      if (exists) {
        return prev.filter(s => s.id !== service.id);
      } else {
        return [...prev, service];
      }
    });
  };

  const handleRemoveService = (service: Service) => {
    setSelectedServices(prev => prev.filter(s => s.id !== service.id));
  };

  const handleNavigate = (page: string, category?: string) => {
    if (page === 'treatments') {
      setActiveTreatmentCategory(category || 'Spa & Massage');
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const renderActivePage = () => {
    switch (currentPage) {
      case 'about':
        return (
          <AboutPage 
            onNavigate={handleNavigate}
            onOpenBooking={() => {
              setSelectedLocationForBooking('');
              setIsBookingOpen(true);
            }}
          />
        );
      case 'treatments':
        return (
          <TreatmentsPage 
            selectedServices={selectedServices}
            onToggleService={handleToggleService}
            onOpenBooking={() => setIsBookingOpen(true)}
            initialCategory={activeTreatmentCategory}
          />
        );
      case 'sanctuaries':
        return (
          <SanctuariesPage 
            onNavigate={handleNavigate}
            onOpenBooking={() => {
              setSelectedLocationForBooking('');
              setIsBookingOpen(true);
            }}
          />
        );
      case 'location-chandrapur':
        return (
          <LocationChandrapurPage
            onOpenBookingWithLocation={(loc) => {
              setSelectedLocationForBooking(loc);
              setIsBookingOpen(true);
            }}
            onNavigate={handleNavigate}
          />
        );
      case 'location-nagpur':
        return (
          <LocationNagpurPage
            onOpenBookingWithLocation={(loc) => {
              setSelectedLocationForBooking(loc);
              setIsBookingOpen(true);
            }}
            onNavigate={handleNavigate}
          />
        );
      case 'location-tadoba':
        return (
          <LocationTadobaPage
            onOpenBookingWithLocation={(loc) => {
              setSelectedLocationForBooking(loc);
              setIsBookingOpen(true);
            }}
            onNavigate={handleNavigate}
          />
        );
      case 'giftcard':
        return (
          <GiftCardPage 
            onOpenBooking={() => setIsBookingOpen(true)}
            onConfigureGiftCard={(config) => setGiftCardConfig(config)}
          />
        );
      case 'team':
        return (
          <TeamPage 
            onOpenBooking={() => {
              setSelectedLocationForBooking('');
              setIsBookingOpen(true);
            }}
          />
        );
      case 'journal':
        return (
          <JournalPage 
            onOpenBooking={() => {
              setSelectedLocationForBooking('');
              setIsBookingOpen(true);
            }}
          />
        );
      case 'faq':
        return (
          <FAQPage
            onNavigate={handleNavigate}
            onOpenBooking={() => {
              setSelectedLocationForBooking('');
              setIsBookingOpen(true);
            }}
          />
        );
      default:
        return (
          <Home 
            onNavigate={handleNavigate}
            onOpenBooking={() => {
              setSelectedLocationForBooking('');
              setIsBookingOpen(true);
            }}
            isSoundscapeOn={isSoundscapeOn}
            onToggleSoundscape={toggleSoundscape}
          />
        );
    }
  };

  return (
    <div className="relative min-h-screen bg-sand-50 selection:bg-sage-200 selection:text-sage-900 transition-colors duration-500">
      
     
      {/* Shared Header Navigation */}
      <Navbar 
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBooking={() => {
          setSelectedLocationForBooking('');
          setIsBookingOpen(true);
        }}
      />

      {/* Pages Container with clean exit/entry dynamics */}
      <main className="min-h-[80vh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45 }}
          >
            {renderActivePage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Unified Bookings Drawer/Dialog */}
      <BookingSystem 
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedServices={selectedServices}
        onRemoveService={handleRemoveService}
        onAddService={handleToggleService}
        giftCardConfig={giftCardConfig}
        onClearGiftCard={() => setGiftCardConfig(null)}
        defaultLocation={selectedLocationForBooking}
      />

      {/* Unified Veda Sanctuary Lounge Companion */}
      <FloatingContact 
        isSoundscapeOn={isSoundscapeOn}
        toggleSoundscape={toggleSoundscape}
        soundscapeVolume={soundscapeVolume}
        setSoundscapeVolume={setSoundscapeVolume}
      />

      {/* Real-time Floating Bag / Counter */}
      <AnimatePresence>
        {currentPage === 'treatments' && selectedServices.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 50, x: '-50%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="fixed bottom-8 left-1/2 z-20 bg-sand-950 text-sand-100 py-3.5 px-8 rounded-full flex items-center gap-8 shadow-2xl border border-sand-850 w-[92%] sm:w-auto"
          >
            <div className="flex flex-col text-left">
              <span className="text-[10px] uppercase font-mono tracking-widest text-sand-400">
                Selected Treatments ({selectedServices.length})
              </span>
            </div>
            <button
              onClick={() => setIsBookingOpen(true)}
              className="bg-sage-700 hover:bg-sage-650 text-white font-sans text-[10px] uppercase tracking-[0.2em] font-medium px-6 py-2.5 rounded-full transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Book Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>



      {/* High-End Editorial Footer */}
      <footer className="bg-sand-950 text-sand-300 py-16 px-6 md:px-12 border-t border-sand-900 relative overflow-hidden text-left">
        <div className="absolute left-[-20%] bottom-[-20%] w-96 h-96 rounded-full bg-sage-900/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-sand-800 pb-16">
          
          {/* Column 1: Brand & Vibe */}
          <div className="md:col-span-4 flex flex-col items-start gap-4">
            <div 
              onClick={() => handleNavigate('home')}
              className="cursor-pointer group py-1"
            >
              <img
                src="https://res.cloudinary.com/dqrq2oos0/image/upload/q_auto/f_auto/v1781004422/veda_logo_light_l5m8fy.webp"
                alt="Veda Wellness & Spa"
                referrerPolicy="no-referrer"
                className="h-16 md:h-20 w-auto object-contain transition-all duration-500 group-hover:scale-105"
              />
            </div>
            <p className="text-xs text-sand-400 font-sans font-light tracking-wide leading-relaxed mt-2">
              Luxury salon and Ayurvedic wellness sanctuary. Rooted in botanical craft. Present in Nagpur, Chandrapur, and Tadoba.
            </p>
          </div>

          {/* Column 2: Route Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.25em] text-sand-450 font-bold mb-5 text-sand-400">Index</h4>
            <ul className="space-y-3.5 text-xs text-sand-300 font-sans font-light tracking-wide">
              <li>
                <button onClick={() => handleNavigate('home')} className="hover:text-white transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('about')} className="hover:text-white transition-colors cursor-pointer">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('treatments')} className="hover:text-white transition-colors cursor-pointer">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('location-nagpur')} className="hover:text-white transition-colors cursor-pointer">
                  Nagpur
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('location-chandrapur')} className="hover:text-white transition-colors cursor-pointer">
                  Chandrapur
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('location-tadoba')} className="hover:text-white transition-colors cursor-pointer">
                  Tadoba
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('giftcard')} className="hover:text-white transition-colors cursor-pointer">
                  Gift Cards
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('faq')} className="hover:text-white transition-colors cursor-pointer">
                  FAQs
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Gifting & Reservations */}
          <div className="md:col-span-5 flex flex-col justify-start md:items-end gap-6">
            <div className="md:text-right space-y-2">
              <h4 className="text-[10px] font-mono uppercase tracking-[0.25em] text-sand-400 font-bold">Book & Gift</h4>
              <p className="text-xs text-sand-400 font-sans font-light leading-relaxed max-w-sm md:ml-auto">
                Book a treatment at any of our three sanctuaries, or gift a wellness experience to someone special.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full md:justify-end">
              <button
                onClick={() => {
                  setSelectedLocationForBooking('');
                  setIsBookingOpen(true);
                }}
                className="flex-1 sm:flex-none bg-sage-800 hover:bg-sage-700 text-white font-sans font-bold text-[10px] uppercase tracking-[0.2em] px-6 py-4 rounded-full transition-all duration-300 shadow-md cursor-pointer text-center"
              >
                Book a Treatment
              </button>
              
              <button
                onClick={() => handleNavigate('giftcard')}
                className="flex-1 sm:flex-none border border-sand-800 hover:border-sand-500 hover:bg-white/5 text-white font-sans font-bold text-[10px] uppercase tracking-[0.2em] px-6 py-4 rounded-full transition-all duration-300 cursor-pointer text-center"
              >
                Send a Gift Card
              </button>
            </div>
          </div>

        </div>

        {/* Closing details & credentials */}
        <div className="max-w-7xl mx-auto w-full pt-8 flex flex-col md:flex-row items-center justify-between text-[10px] font-sans uppercase tracking-[0.25em] text-sand-500 text-center md:text-left gap-4">
          <div>
            &copy; 2026 VEDA WELLNESS & SPA. All Rights Reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Designed by <a href="https://heysocial.in" target="_blank" rel="noreferrer" className="underline hover:text-white transition-colors">HeySocial</a></span>
          </div>
        </div>

      </footer>

    </div>
  );
}
