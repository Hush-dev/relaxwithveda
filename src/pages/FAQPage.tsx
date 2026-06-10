import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles, AlertCircle, Phone, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQPageProps {
  onOpenBooking: () => void;
  onNavigate: (page: string) => void;
}

interface FAQItem {
  question: string;
  answer: React.ReactNode;
  category: string;
}

export default function FAQPage({ onOpenBooking, onNavigate }: FAQPageProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const categories = ['All', 'Treatments', 'Reservations', 'Locations', 'Gift Cards'];

  const faqs: FAQItem[] = [
    {
      category: 'Treatments',
      question: 'What types of treatments do you offer?',
      answer: 'We offer an exquisite alignment of high-spec botanical salon craft (precision haircuts, organic hair colouring, and keratin spas) and traditional Ayurvedic wellness therapies (body treatments, hot basalt stone massages, and customized scalp rituals).'
    },
    {
      category: 'Locations',
      question: 'Are salon services available at all your sanctuaries?',
      answer: (
        <span>
          Salon services (haircuts, styling, and hair colouring) are available only at our <strong>Nagpur (Dharampeth)</strong> and <strong>Chandrapur (Civil Lines)</strong> sanctuaries. Our <strong>Tadoba Sanctuary (Moharli)</strong> is an exclusive wellness and spa retreat situated in the teakwood canopy, dedicated entirely to organic body therapies, sound baths, and nature restorations — styling and salon services are not available there.
        </span>
      )
    },
    {
      category: 'Reservations',
      question: 'Do I need to make a reservation in advance?',
      answer: 'Yes, we recommend booking a slot prior to your visit. Our spaces are curated to offer high-privacy, quiet solitude, and we schedule dedicated buffer minutes between clients to completely sanitize and prepare the sanctuary. You can request a booking directly through our website, and our concierge will confirm your slot via WhatsApp.'
    },
    {
      category: 'Gift Cards',
      question: 'How do Veda Gift Cards work and how do I redeem them?',
      answer: 'Veda Gift Cards can be purchased for a specific monetary value or a dedicated treatment. They are delivered as premium digital vouchers or beautiful physical gold-foil printed cards. Our vouchers never expire, are fully transferable, and can be redeemed across any of our Nagpur, Chandrapur, or Tadoba sanctuaries.'
    },
    {
      category: 'Reservations',
      question: 'What is your cancellation or rescheduling policy?',
      answer: 'We understand plans can change. To respect our therapists and other guests, we request that you notify us at least 4 hours in advance for cancellations or rescheduling. This allows us to reallocate the buffer time to other patrons seeking solitude.'
    },
    {
      category: 'Treatments',
      question: 'Do you use all-natural and organic ingredients?',
      answer: 'Absolutely. Grounded in biochemical integrity, all our signature massage oils, skin cleansers, and hair applications utilize pure, clean botanical formulations, raw essential oils, and toxin-free ingredients designed to nourish the scalp, skin, and nervous system.'
    },
    {
      category: 'Reservations',
      question: 'Can I request a preference for my therapist or a private session?',
      answer: 'Yes. During your online booking request or WhatsApp conversation with our concierge, you may mention specific therapist preferences (such as female/male specialist), requests for absolute silence, or any allergies you might have. Our team will tailor the experience to your sensory comfort.'
    }
  ];

  const filteredFaqs = activeCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <div className="pt-32 md:pt-36 pb-20 bg-sand-50 relative min-h-screen px-6 md:px-12 text-left">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Page Headings */}
        <div className="text-left border-b border-sand-200 pb-10">
          <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-sage-800 font-bold block mb-4">
            Help & FAQs
          </span>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-light text-sand-950 tracking-tight leading-none">
                Frequently Asked <br />
                <span className="font-serif text-sage-800 font-light">Questions.</span>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-xs sm:text-sm text-sand-800 font-sans font-light tracking-wide leading-relaxed">
                Everything you need to know about our luxury salon rituals, Ayurvedic healing therapy modules, and everything else across our three sanctuaries.
              </p>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex overflow-x-auto no-scrollbar scroll-smooth whitespace-nowrap gap-3 pb-4 border-b border-sand-250/50 justify-start lg:justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setExpandedIndex(null);
              }}
              className={`px-5 py-2.5 text-[10px] font-sans uppercase tracking-[0.15em] rounded-full transition-all cursor-pointer border shrink-0 ${
                activeCategory === cat
                  ? 'bg-sand-950 border-sand-950 text-sand-50 font-bold shadow-md'
                  : 'bg-white border-sand-200/80 hover:border-sand-400 text-sand-700 hover:text-sand-955'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ list with Accordions */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.map((faq, idx) => {
              const isExpanded = expandedIndex === idx;
              return (
                <motion.div
                  key={`${faq.question}-${idx}`}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white rounded-[1.5rem] border border-sand-200 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
                >
                  <button
                    onClick={() => toggleExpand(idx)}
                    className="w-full text-left px-6 py-5 sm:py-6 flex items-start gap-4 justify-between group cursor-pointer"
                  >
                    <div className="flex items-start gap-3.5">
                      <HelpCircle className="w-4.5 h-4.5 text-sage-800 shrink-0 mt-0.5" />
                      <span className="font-serif text-base sm:text-lg text-sand-950 font-light group-hover:text-sage-800 transition-colors">
                        {faq.question}
                      </span>
                    </div>
                    <div className="bg-sand-100 p-1.5 rounded-full text-sand-600 group-hover:text-sage-800 transition-colors">
                      <ChevronDown 
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                      />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-6 pb-6 pt-1 sm:px-14 border-t border-sand-100 text-xs sm:text-sm text-sand-750 font-sans font-light leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Call to action card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-sand-100/60 border border-sand-150 rounded-[2rem] p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-center justify-between text-left"
        >
          <div className="space-y-1.5 flex-1">
            <span className="text-[9px] uppercase tracking-[0.25em] font-mono text-sage-800 font-bold block">
              Still Have Questions?
            </span>
            <h3 className="font-serif text-lg sm:text-xl font-light text-sand-950 leading-tight">
              Get in touch with our sanctuary team
            </h3>
            <p className="text-xs text-sand-600 font-sans font-light leading-relaxed max-w-xl">
              Our service concierge handles all custom preferences, corporate gifting arrangements, and direct private reservations.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3.5 bg-sage-800 hover:bg-sage-900 text-white text-xs uppercase tracking-[0.18em] rounded-full font-bold cursor-pointer transition-all text-center w-full sm:w-auto shadow-sm hover:-translate-y-0.5 duration-300"
            >
              Book Now
            </button>
            <button
              onClick={() => onNavigate('sanctuaries')}
              className="px-6 py-3.5 border border-sand-300 hover:border-sand-400 hover:bg-sand-50 bg-white text-sand-800 text-xs uppercase tracking-[0.18em] rounded-full font-bold cursor-pointer transition-all text-center w-full sm:w-auto hover:-translate-y-0.5 duration-300"
            >
              Our Locations
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
