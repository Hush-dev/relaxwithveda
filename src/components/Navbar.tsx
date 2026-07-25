import { useState, useEffect } from 'react';
import { Menu, X, Globe, Calendar, Gift, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
}

export default function Navbar({ currentPage, onNavigate, onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileLocationsOpen, setIsMobileLocationsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (page: string) => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // If a location detail is currently active, expand mobile layout as well
  useEffect(() => {
    if (currentPage.startsWith('location-')) {
      setIsMobileLocationsOpen(true);
    }
  }, [currentPage]);

  // Reset mobile locations dropdown state when the navigation menu closes
  useEffect(() => {
    if (!isMobileMenuOpen) {
      setIsMobileLocationsOpen(false);
    }
  }, [isMobileMenuOpen]);

  const isTransparent = currentPage === 'home' && !isScrolled && !isMobileMenuOpen;

  return (
    <>
      <nav
        id="app-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isTransparent
            ? 'bg-transparent border-transparent py-3'
            : 'bg-sand-50/95 backdrop-blur-md border-b border-sand-200/50 py-1 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo Section */}
          <div 
            onClick={() => handleLinkClick('home')}
            className="flex items-center cursor-pointer group py-1"
          >
            <img
              src={
                isTransparent
                  ? 'https://res.cloudinary.com/dqrq2oos0/image/upload/q_auto/f_auto/v1781004422/veda_logo_light_l5m8fy.webp'
                  : 'https://res.cloudinary.com/dqrq2oos0/image/upload/q_auto/f_auto/v1781004421/veda_logo_dark_klywa3.webp'
              }
              alt="Veda Wellness & Spa"
              referrerPolicy="no-referrer"
              className="h-16 md:h-20 w-auto object-contain transition-all duration-500 group-hover:scale-105"
            />
          </div>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenBooking}
              className={`hidden sm:flex items-center gap-2 px-6 py-2.5 text-[11px] uppercase tracking-[0.18em] rounded-full transition-all duration-500 shadow-md cursor-pointer font-bold ${
                isTransparent
                  ? 'bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-sand-950 border border-white/20'
                  : 'bg-sage-800 text-sand-50 hover:bg-sage-900 border border-sage-700'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              Book Now
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 transition-colors duration-300 cursor-pointer ${
                isTransparent ? 'text-white hover:text-sand-100' : 'text-sand-800 hover:text-sand-950'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </nav>

      {/* Unified Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-48 bg-sand-50/98 backdrop-blur-md pt-24 lg:pt-32 px-6 sm:px-12 pb-6 lg:pb-10 flex flex-col justify-between overflow-y-auto text-left"
          >
            <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-between mt-2 lg:mt-4">
              
              {/* DESKTOP VIEW NAV CONTENT (lg and up) */}
              <div className="hidden lg:grid grid-cols-2 gap-12 lg:gap-24">
                
                {/* Left Column: Premium Links */}
                <div className="flex flex-col gap-6 md:gap-7 font-serif text-2xl md:text-4xl tracking-wide font-light text-sand-950">
                  <button 
                    onClick={() => handleLinkClick('about')}
                    className={`text-left py-0.5 hover:pl-4 transition-all duration-300 flex items-center gap-4 group cursor-pointer ${
                      currentPage === 'about' ? 'text-sage-800 font-bold border-l-2 border-sage-800 pl-4' : 'text-sand-800'
                    }`}
                  >
                    <span>About Us</span>
                  </button>

                  <button 
                    onClick={() => handleLinkClick('treatments')}
                    className={`text-left py-0.5 hover:pl-4 transition-all duration-300 flex items-center gap-4 group cursor-pointer ${
                      currentPage === 'treatments' ? 'text-sage-800 font-bold border-l-2 border-sage-800 pl-4' : 'text-sand-800'
                    }`}
                  >
                    <span>Services</span>
                  </button>

                  <button 
                    onClick={() => handleLinkClick('giftcard')}
                    className={`text-left py-0.5 hover:pl-4 transition-all duration-300 flex items-center gap-4 group cursor-pointer ${
                      currentPage === 'giftcard' ? 'text-sage-800 font-bold border-l-2 border-sage-800 pl-4' : 'text-sand-800'
                    }`}
                  >
                    <span>Gift Card</span>
                  </button>

                  <button 
                    onClick={() => handleLinkClick('faq')}
                    className={`text-left py-0.5 hover:pl-4 transition-all duration-300 flex items-center gap-4 group cursor-pointer ${
                      currentPage === 'faq' ? 'text-sage-800 font-bold border-l-2 border-sage-800 pl-4' : 'text-sand-800'
                    }`}
                  >
                    <span>FAQs</span>
                  </button>
                </div>

                {/* Right Column: Sanctuaries directory */}
                <div className="flex flex-col gap-6">
                  <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-sand-400 border-b border-sand-200 pb-2">Sanctuaries</h4>
                  <div className="flex flex-col gap-4 font-serif text-lg md:text-xl text-sand-800">
                    {[
                      { id: 'location-nagpur', label: 'Nagpur Sanctuary • Dharampeth' },
                      { id: 'location-chandrapur', label: 'Chandrapur Sanctuary • Civil Lines' },
                      { id: 'location-tadoba', label: 'Tadoba Sanctuary • Moharli' }
                    ].map((loc) => (
                      <button
                        key={loc.id}
                        onClick={() => handleLinkClick(loc.id)}
                        className={`text-left hover:text-sage-800 hover:pl-2 transition-all duration-300 py-0.5 cursor-pointer ${
                          currentPage === loc.id ? 'text-sage-800 font-bold border-l border-sage-800 pl-2' : ''
                        }`}
                      >
                        {loc.label}
                      </button>
                    ))}
                  </div>

                  {/* Operational Notes */}
                  <div className="mt-4 text-[11px] text-sand-500 font-sans leading-relaxed tracking-wide space-y-1">
                    <p className="font-medium text-sand-700">Operating Hours</p>
                    <p>Open Daily: 10:00 AM – 10:00 PM</p>
                    <p>Prior reservation recommended.</p>
                  </div>
                </div>

              </div>

              {/* MOBILE VIEW NAV CONTENT (Below lg) */}
              <div className="flex lg:hidden flex-col gap-3.5 font-serif text-xl sm:text-2xl tracking-wide font-light text-sand-950">
                <button 
                  onClick={() => handleLinkClick('about')}
                  className={`text-left py-1 hover:pl-2 transition-all duration-300 flex items-center justify-between cursor-pointer ${
                    currentPage === 'about' ? 'text-sage-800 font-bold border-l-2 border-sage-800 pl-3' : 'pl-0 text-sand-800'
                  }`}
                >
                  <span>About Us</span>
                </button>

                <button 
                  onClick={() => handleLinkClick('treatments')}
                  className={`text-left py-1 hover:pl-2 transition-all duration-300 flex items-center justify-between cursor-pointer ${
                    currentPage === 'treatments' ? 'text-sage-800 font-bold border-l-2 border-sage-800 pl-3' : 'pl-0 text-sand-800'
                  }`}
                >
                  <span>Services</span>
                </button>

                {/* Collapsible Mobile Locations list */}
                <div className="flex flex-col">
                  <button 
                    onClick={() => setIsMobileLocationsOpen(!isMobileLocationsOpen)}
                    className={`text-left py-1 hover:pl-2 transition-all duration-350 flex items-center justify-between cursor-pointer ${
                      currentPage.startsWith('location-') ? 'text-sage-800 font-bold border-l-2 border-sage-800 pl-3' : 'pl-0 text-sand-800'
                    }`}
                  >
                    <span>Locations</span>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isMobileLocationsOpen ? 'rotate-180 text-sage-800' : 'text-sand-400'}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isMobileLocationsOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="pl-4 flex flex-col gap-3 py-2 border-l border-sand-200 mt-1.5 text-sm font-sans text-sand-700 tracking-wide"
                      >
                        {[
                          { id: 'location-nagpur', label: 'Nagpur Sanctuary' },
                          { id: 'location-chandrapur', label: 'Chandrapur Sanctuary' },
                          { id: 'location-tadoba', label: 'Tadoba Sanctuary' }
                        ].map((loc) => (
                          <button
                            key={loc.id}
                            onClick={() => handleLinkClick(loc.id)}
                            className={`text-left py-0.5 hover:text-sage-800 transition-colors cursor-pointer ${
                              currentPage === loc.id ? 'text-sage-800 font-semibold border-l border-sage-800 pl-2' : ''
                            }`}
                          >
                            {loc.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <button 
                  onClick={() => handleLinkClick('giftcard')}
                  className={`text-left py-1 hover:pl-2 transition-all duration-300 flex items-center justify-between cursor-pointer ${
                    currentPage === 'giftcard' ? 'text-sage-800 font-bold border-l-2 border-sage-800 pl-3' : 'pl-0 text-sand-800'
                  }`}
                >
                  <span>Gift Card</span>
                </button>

                <button 
                  onClick={() => handleLinkClick('faq')}
                  className={`text-left py-1 hover:pl-2 transition-all duration-300 flex items-center justify-between cursor-pointer ${
                    currentPage === 'faq' ? 'text-sage-800 font-bold border-l-2 border-sage-800 pl-3' : 'pl-0 text-sand-800'
                  }`}
                >
                  <span>FAQs</span>
                </button>
              </div>

              {/* Bottom Quick Actions and Footer */}
              <div className="flex flex-col sm:flex-row gap-4 pt-5 border-t border-sand-200/60 mt-5 lg:mt-12 w-full items-center justify-between">
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onOpenBooking();
                    }}
                    className="w-full sm:w-auto px-8 py-3 flex items-center justify-center gap-2 bg-sage-800 text-white text-xs uppercase tracking-[0.18em] rounded-xl font-bold cursor-pointer hover:bg-sage-900 transition-colors"
                  >
                    <Calendar className="w-4 h-4" />
                    Book Now
                  </button>
                  
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      handleLinkClick('giftcard');
                    }}
                    className="w-full sm:w-auto px-8 py-3 flex items-center justify-center gap-2 border border-sand-300 text-sand-800 text-xs uppercase tracking-[0.18em] rounded-xl bg-sand-100 font-bold cursor-pointer hover:bg-sand-150 transition-colors"
                  >
                    <Gift className="w-4 h-4" />
                    Send a Gift Card
                  </button>
                </div>

                <div className="text-[10px] uppercase tracking-[0.2em] text-sand-400 font-mono mt-4 sm:mt-0">
                  Nagpur • Chandrapur • Tadoba
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
