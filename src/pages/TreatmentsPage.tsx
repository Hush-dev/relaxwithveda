import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, Check, Plus, ShoppingBag, Search, X } from 'lucide-react';
import { SERVICES } from '../data';
import { Service } from '../types';

interface TreatmentsPageProps {
  selectedServices: Service[];
  onToggleService: (service: Service) => void;
  onOpenBooking: () => void;
  initialCategory?: string;
}

export default function TreatmentsPage({ selectedServices, onToggleService, onOpenBooking, initialCategory }: TreatmentsPageProps) {
  const [activeTab, setActiveTab] = useState<string>(initialCategory || 'Spa & Massage');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    if (initialCategory) {
      setActiveTab(initialCategory);
    }
  }, [initialCategory]);

  const categories = [
    { id: 'Spa & Massage', title: 'Spa & Massage' },
    { id: 'Body Treatments', title: 'Body Treatments' },
    { id: 'Spa Packages', title: 'Spa Packages' },
    { id: "Women's Hair Services", title: "Women's Hair" },
    { id: "Men's Grooming", title: "Men's Grooming" },
    { id: 'Hair Colour Services', title: 'Hair Colour' },
    { id: 'Hair Treatments', title: 'Hair Treatments' },
    { id: 'Facials & Skin Care', title: 'Facials & Skin' },
    { id: 'Waxing & Hair Removal', title: 'Waxing & Removal' },
    { id: 'Manicure & Pedicure', title: 'Manicure & Pedi' },
    { id: 'Bleach & Body Care', title: 'Bleach & Body' },
    { id: 'Wellness Memberships', title: 'Memberships' }
  ];

  const filteredServices = SERVICES.filter(s => {
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      return (
        s.title.toLowerCase().includes(query) ||
        s.description.toLowerCase().includes(query) ||
        s.category.toLowerCase().includes(query)
      );
    }
    return s.category === activeTab;
  });

  const isSelected = (id: string) => selectedServices.some(s => s.id === id);

  return (
    <div className="pt-32 md:pt-36 pb-20 px-6 md:px-12 bg-sand-50 min-h-screen relative">
      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Editorial Subheader and Headings */}
        <div className="text-left border-b border-sand-200 pb-10 mb-12">
          <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-sage-800 font-bold block mb-4">
            Our Services
          </span>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-light text-sand-955 tracking-tight leading-none">
                Our restorative <br />
                <span className="font-serif text-sage-800 font-light">therapies & styling rituals.</span>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-xs sm:text-sm text-sand-800 font-sans font-light tracking-wide leading-relaxed text-justify-editorial">
                Every session is crafted around organic oils and tactile excellence. Select your treatments and we'll send them directly to our concierge team.
              </p>
            </div>
          </div>
        </div>

        {/* Search Service Field */}
        <div id="service-search-container" className="max-w-md mx-auto mb-10 relative">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <Search className="w-4 h-4 text-sand-400" />
            </span>
            <input
              id="service-search-input"
              type="text"
              placeholder="Search treatments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-11 py-3 bg-white border border-sand-200/80 rounded-full text-xs placeholder-sand-400/80 focus:outline-none focus:ring-1 focus:ring-sage-800 focus:border-sage-800 transition-all shadow-sm text-sand-950 font-sans"
            />
            {searchQuery && (
              <button
                id="clear-search-button"
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-sand-400 hover:text-sand-700 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          {searchQuery && (
            <p className="text-center text-[10px] text-sand-500 font-mono mt-3 uppercase tracking-widest">
              Results for "{searchQuery}"
            </p>
          )}
        </div>

        {/* Categories Tab Bar Row */}
        <div className="flex border-b border-sand-250/50 mb-12 overflow-x-auto no-scrollbar scroll-smooth whitespace-nowrap gap-3 pb-4 justify-start lg:justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveTab(cat.id);
                setSearchQuery(''); // clear search when explicitly switching tabs
              }}
              className={`px-5 py-2.5 text-[10px] font-sans uppercase tracking-[0.15em] rounded-full transition-all cursor-pointer border ${
                activeTab === cat.id && !searchQuery
                  ? 'bg-sand-950 border-sand-950 text-sand-50 font-bold shadow-md'
                  : 'bg-white border-sand-200/80 hover:border-sand-400 text-sand-700 hover:text-sand-955'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Treatments List Catalog */}
        <AnimatePresence mode="wait">
          <motion.div
            key={searchQuery ? 'search-results' : activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className={`grid grid-cols-1 ${filteredServices.length > 0 ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-8 lg:gap-10 max-w-6xl mx-auto`}
          >
            {filteredServices.length > 0 ? (
              filteredServices.map((service) => {
                const selected = isSelected(service.id);

                return (
                  <div
                    key={service.id}
                    className={`bg-white rounded-[2rem] overflow-hidden hover:shadow-xl transition-all duration-300 border flex flex-col justify-between hover:border-sand-300 min-h-[280px] p-8 ${
                      selected ? 'ring-1 ring-sage-800 border-sage-800 shadow-md' : 'border-sand-200/60'
                    }`}
                  >
                    {/* Body Content */}
                    <div className="flex flex-col justify-start space-y-4 text-left">
                      <div className="flex justify-between items-start gap-4">
                        <h3 className="font-serif text-2xl font-light text-sand-950 tracking-tight leading-snug">
                          {service.title}
                        </h3>
                        {service.isBestSeller && (
                          <div id={`bestseller-tag-${service.id}`} className="px-2.5 py-1 bg-amber-50/70 text-amber-800 border border-amber-200/50 rounded-full whitespace-nowrap shrink-0">
                            <span className="text-[8px] uppercase tracking-[0.12em] font-mono font-bold">Best Seller</span>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-1.5 text-[10px] text-sand-400 tracking-wider uppercase font-mono font-medium">
                        <Clock className="w-3.5 h-3.5 text-sage-800" strokeWidth={1.5} />
                        <span>{service.duration}</span>
                      </div>

                      <p className="text-xs sm:text-sm text-sand-700 font-sans font-light tracking-wide leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Card Action select button */}
                    <div className="pt-6 border-t border-sand-100 flex items-center justify-end mt-6">
                      <button
                        onClick={() => onToggleService(service)}
                        className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all border cursor-pointer ${
                          selected
                            ? 'bg-sage-800 border-sage-800 text-sand-50 shadow-sm'
                            : 'bg-transparent border-sand-300 hover:border-sand-950 text-sand-800'
                        }`}
                      >
                        {selected ? (
                          <>
                            <Check className="w-3.5 h-3.5 animate-pulse" />
                            Selected
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5 text-sage-800" />
                            Add to Booking
                          </>
                        )}
                      </button>
                    </div>

                  </div>
                );
              })
            ) : (
              <div className="col-span-full py-16 text-center">
                <p className="text-sand-400 text-sm font-sans font-light">
                  No treatments found. Try a different search term.
                </p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-4 px-6 py-2 border border-sand-300 hover:border-sand-950 text-sans text-xs uppercase tracking-widest font-medium rounded-full cursor-pointer transition-all"
                >
                  Clear Search
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

