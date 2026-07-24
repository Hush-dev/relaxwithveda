import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ClipboardCheck, ArrowRight, Bell, Sparkles, MessageSquare, Trash2, Calendar, MapPin, Clock, Plus, Search } from 'lucide-react';
import { Service, BookingState } from '../types';
import { LOCATIONS, SERVICES } from '../data';

interface BookingSystemProps {
  isOpen: boolean;
  onClose: () => void;
  selectedServices: Service[];
  onRemoveService: (service: Service) => void;
  onAddService: (service: Service) => void;
  giftCardConfig: any;
  onClearGiftCard: () => void;
  defaultLocation: 'Chandrapur' | 'Nagpur' | 'Tadoba' | '';
}

export default function BookingSystem({
  isOpen,
  onClose,
  selectedServices,
  onRemoveService,
  onAddService,
  giftCardConfig,
  onClearGiftCard,
  defaultLocation
}: BookingSystemProps) {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState<'Chandrapur' | 'Nagpur' | 'Tadoba' | ''>('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');
  const [locationError, setLocationError] = useState<string | null>(null);

  // Direct service search states
  const [serviceSearchQuery, setServiceSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Prevent background scrolling and horizontal scrollbars when reservation modal is open
  useEffect(() => {
    if (isOpen) {
      const originalStyle = document.body.style.overflow;
      const originalOverflowX = document.body.style.overflowX;
      document.body.style.overflow = 'hidden';
      document.body.style.overflowX = 'hidden';
      document.documentElement.style.overflowX = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
        document.body.style.overflowX = originalOverflowX;
        document.documentElement.style.overflowX = '';
      };
    }
  }, [isOpen]);

  // Sync default location updates immediately
  useEffect(() => {
    if (defaultLocation) {
      setLocation(defaultLocation);
    }
  }, [defaultLocation]);

  // Sync sanity check: Tadoba wellness rules
  useEffect(() => {
    if (location === 'Tadoba') {
      const hasSalonServices = selectedServices.some(s => s.isSalon);
      
      if (hasSalonServices) {
        setLocationError(
          "Tadoba offers wellness services only — no salon services. Please remove salon items or switch to Nagpur or Chandrapur."
        );
      } else {
        setLocationError(null);
      }
    } else {
      setLocationError(null);
    }
  }, [location, selectedServices]);

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();

    if (locationError) {
      alert("Please adjust your location or treatment menu before reserving. Tadoba is wellness-only.");
      return;
    }

    if (!location) {
      alert("Please select a Veda sanctuary location.");
      return;
    }

    // Determine target WhatsApp phone from selected location info
    const locationObj = LOCATIONS.find(l => l.name === location);
    const targetPhone = locationObj ? locationObj.phone.replace(/[^0-9]/g, '') : '919422812345';

    // Build highly polished WhatsApp message
    const isAmountVoucher = giftCardConfig && (giftCardConfig.type === 'amount' || giftCardConfig.giftType === 'amount');
    const voucherVal = giftCardConfig ? (giftCardConfig.val || giftCardConfig.amount) : 0;
    const recipient = giftCardConfig ? (giftCardConfig.receiverName || giftCardConfig.recipientName) : '';
    const sender = giftCardConfig ? giftCardConfig.senderName : '';

    let message = `✨ *VEDA — WELLNESS & SPA RESERVATION* ✨\n\n`;
    message += `👤 *Client Name:* ${fullName}\n`;
    message += `📞 *Contact Phone:* ${phoneNumber}\n`;
    message += `📍 *Selected Sanctuary:* ${location} Space\n`;
    message += `📅 *Preferred Date:* ${date}\n`;
    message += `⏰ *Preferred Time:* ${time}\n\n`;

    if (selectedServices.length > 0) {
      message += `🌸 *Selected Treatments:* \n`;
      selectedServices.forEach((s, i) => {
        message += `  ${i + 1}. _${s.title}_ (${s.duration})\n`;
      });
      message += `\n`;
    }

    if (giftCardConfig) {
      message += `🎁 *Connected Gift Voucher:* \n`;
      if (isAmountVoucher) {
        message += `  - Custom Amount Voucher: *₹${Number(voucherVal).toLocaleString()}*\n`;
      } else {
        const giftTitle = giftCardConfig.val || giftCardConfig.serviceTitle || '';
        message += `  - Treatment Gift: *${giftTitle}*\n`;
      }
      message += `  - To: ${recipient}\n`;
      message += `  - From: ${sender}\n`;
      if (giftCardConfig.message || giftCardConfig.personalMessage) {
        message += `  - Vow: "${giftCardConfig.message || giftCardConfig.personalMessage}"\n`;
      }
      message += `\n`;
    }

    if (notes) {
      message += `🌿 *Special Veda Vows:* "${notes}"\n\n`;
    }

    if (isAmountVoucher) {
      message += `💳 *Grand Voucher Total:* ₹${Number(voucherVal).toLocaleString()} (Tax Inclusive)\n\n`;
    } else if (selectedServices.length > 0) {
      message += `💳 *Grand Book Summary:* Price on consultation/inquiry\n\n`;
    }

    message += `_This reservation will automatically prompt our concierge desk at ${location} to allocate your silent chambers. We will reply with confirmed therapist slots soon!_`;

    const encodedText = encodeURIComponent(message);
    const url = `https://wa.me/${targetPhone}?text=${encodedText}`;
    
    // Open in new tab seamlessly
    window.open(url, '_blank');
  };

  const hasItems = selectedServices.length > 0 || giftCardConfig;

  // Filter services to show in direct-add section
  const searchedProducts = SERVICES.filter(s => {
    // Under all conditions, exclude already selected ones
    if (selectedServices.some(sel => sel.id === s.id)) return false;
    
    // If search is empty, suggest recommended (best seller) services
    if (!serviceSearchQuery.trim()) {
      return s.isBestSeller;
    }
    
    const query = serviceSearchQuery.toLowerCase();
    return (
      s.title.toLowerCase().includes(query) ||
      s.category.toLowerCase().includes(query) ||
      s.description.toLowerCase().includes(query)
    );
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Layer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-sand-950/60 backdrop-blur-sm z-[100] pointer-events-auto"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="fixed top-0 right-0 h-[100dvh] w-full sm:max-w-md bg-sand-50 shadow-2xl z-[110] flex flex-col justify-between overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-sand-200 p-6 sm:p-8 pb-5 bg-sand-50/90 backdrop-blur-md z-30 shrink-0">
              <div>
                <h3 className="font-serif text-2xl font-light text-sand-950 tracking-tight">Book Your Visit</h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 border border-sand-200 hover:border-sand-950 rounded-full text-sand-600 hover:text-sand-950 transition-all cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Content Container */}
            <div className="flex-grow overflow-y-auto overflow-x-hidden px-4 sm:px-8 py-5 space-y-6 min-w-0 max-w-full">

              {/* Warnings details inside scroll space */}
              {locationError && (
                <div className="mb-6 p-4 rounded-xl bg-orange-50 border border-orange-200/80 text-xs text-orange-900 leading-normal font-sans">
                  {locationError}
                </div>
              )}

              {/* Basket list section if has items */}
              {hasItems ? (
                <div className="space-y-4 mb-4">
                  <span className="text-[10px] uppercase tracking-widest text-[#7E8B83] font-mono font-bold block">Your Selected Treatments</span>
                  
                  {/* Selected Services mapped */}
                  {selectedServices.map((service) => (
                    <div key={service.id} className="flex items-start justify-between gap-3 p-3 bg-white border border-sand-200 rounded-xl relative group shadow-sm">
                      <div className="text-left min-w-0 flex-grow">
                        <span className="text-[8px] uppercase tracking-wider text-sage-700 font-mono font-bold bg-sage-50 px-1.5 py-0.5 rounded-md">
                          {service.category}
                        </span>
                        <h4 className="text-xs font-serif font-semibold text-sand-950 mt-1">{service.title}</h4>
                        <div className="flex gap-3 text-[9px] text-sand-400 font-mono uppercase tracking-wider mt-1.5">
                          <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-sage-800" />{service.duration}</span>
                          {/* <span className="text-sand-600 font-bold font-sans animate-fade-in">₹{service.price.toLocaleString()}</span> */}
                        </div>
                      </div>
                      <button
                        onClick={() => onRemoveService(service)}
                        className="p-1.5 bg-sand-50 hover:bg-red-50 text-sand-400 hover:text-red-600 rounded-lg transition-colors cursor-pointer"
                        title="Remove service"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}

                  {/* Connected Giftcard if has any */}
                  {giftCardConfig && (
                    <div className="p-3 bg-white border border-dashed border-sage-500 bg-sage-50/30 rounded-xl relative">
                      <div className="flex items-start justify-between gap-3">
                        <div className="text-left min-w-0 flex-grow">
                          <span className="inline-block px-1.5 py-0.5 bg-sage-700 text-[8px] uppercase tracking-wider text-white rounded font-bold mb-1">
                            Added Voucher
                          </span>
                          <h4 className="text-xs font-serif font-medium text-sand-950">
                            {giftCardConfig.type === 'amount' || giftCardConfig.giftType === 'amount'
                              ? `Gift Voucher (Value: ₹${Number(giftCardConfig.val || giftCardConfig.amount).toLocaleString()})` 
                              : `Treatment Gift: ${giftCardConfig.val || giftCardConfig.serviceTitle}`}
                          </h4>
                          <span className="text-[9px] text-sand-400 font-mono block mt-1">
                            For: {giftCardConfig.receiverName || giftCardConfig.recipientName} • From: {giftCardConfig.senderName}
                          </span>
                        </div>
                        <button
                          onClick={onClearGiftCard}
                          className="p-1 text-sand-400 hover:text-red-650 transition-colors cursor-pointer"
                          title="Remove voucher"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Quick summary calculation price — only if it's a cash voucher */}
                  {(giftCardConfig?.type === 'amount' || giftCardConfig?.giftType === 'amount') && (
                    <div className="border-t border-sand-200 pt-3 flex items-center justify-between text-xs text-sand-800 font-sans font-light">
                      <span>Voucher Subtotal:</span>
                      <span className="font-serif font-bold text-base text-sand-955">
                        ₹{Number(giftCardConfig.val || giftCardConfig.amount).toLocaleString()}
                      </span>
                    </div>
                  )}
                </div>
              ) : (
                <div className="p-8 text-center bg-sand-120/40 rounded-2xl mb-4 border border-sand-200/55">
                  <p className="text-xs font-sans text-sand-500 font-light tracking-wide leading-relaxed">
                    No treatments added yet. Search below or browse our services menu.
                  </p>
                </div>
              )}

              {/* Direct Search & Add Service Section */}
              <div className="mb-8 p-4 bg-white border border-sand-200/60 rounded-2xl shadow-sm">
                <span className="text-[9px] uppercase tracking-widest text-[#7E8B83] font-mono font-bold block mb-2">
                  {serviceSearchQuery.trim() ? "Search Results" : "Popular Treatments"}
                </span>
                
                <div className="relative flex items-center mb-3">
                  <span className="absolute left-3 text-sand-400">
                    <Search className="w-3.5 h-3.5" />
                  </span>
                  <input
                    type="text"
                    placeholder="Search & add more services..."
                    value={serviceSearchQuery}
                    onChange={(e) => setServiceSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    className="w-full pl-9 pr-8 py-2 px-3 bg-sand-50/50 border border-sand-200 text-xs rounded-xl focus:outline-none focus:ring-1 focus:ring-sage-700 focus:border-sage-700 placeholder-sand-400"
                  />
                  {serviceSearchQuery && (
                    <button
                      type="button"
                      onClick={() => setServiceSearchQuery('')}
                      className="absolute right-3 text-sand-400 hover:text-sand-700 cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Suggested/Found List */}
                <div className="max-h-[170px] overflow-y-auto divide-y divide-sand-100 pr-1 select-none">
                  {searchedProducts.length > 0 ? (
                    searchedProducts.slice(0, 5).map((service) => (
                      <div key={service.id} className="py-2 flex items-center justify-between text-left gap-3 group">
                        <div className="min-w-0 flex-grow">
                          <span className="text-[7.5px] uppercase tracking-wider text-sage-800 font-mono block font-bold mb-0.5">
                            {service.category}
                          </span>
                          <h5 className="text-[11px] font-semibold text-sand-950 truncate">
                            {service.title}
                          </h5>
                          <p className="text-[9px] text-sand-400 font-mono">
                            {service.duration}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            if (onAddService) {
                              onAddService(service);
                            }
                          }}
                          className="p-1.5 bg-sage-50 text-sage-800 hover:bg-sage-800 hover:text-sand-50 rounded-lg transition-all cursor-pointer font-bold shrink-0 shadow-sm flex items-center justify-center p-1.5"
                          title="Add Service"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))
                  ) : (
                    <div className="py-3 text-center text-[10px] text-sand-400 font-sans font-light">
                      No treatments match your search query. Try typing another treatment or clearing the search text to view suggested list.
                    </div>
                  )}
                </div>
              </div>

              {/* Appointment Booking Form */}
              <form onSubmit={handleWhatsAppBooking} className="space-y-4 text-left min-w-0 max-w-full">
                <span className="text-[10px] uppercase tracking-widest text-sand-400 font-bold block">Your Details</span>

                {/* Name */}
                <div className="space-y-1 min-w-0">
                  <label className="text-[9px] uppercase tracking-widest text-sand-500 font-bold block">Full Name</label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full max-w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-sand-200 rounded-xl text-base sm:text-sm focus:outline-none focus:ring-1 focus:ring-sage-700 box-border block"
                    placeholder="Your Full Name"
                  />
                </div>

                {/* Contact Phone */}
                <div className="space-y-1 min-w-0">
                  <label className="text-[9px] uppercase tracking-widest text-sand-500 font-bold block">WhatsApp Number</label>
                  <input
                    type="tel"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full max-w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-sand-200 rounded-xl text-base sm:text-sm focus:outline-none focus:ring-1 focus:ring-sage-700 box-border block"
                    placeholder="Mobile Number (e.g., +91...)"
                  />
                </div>

                {/* Sanctuary Select with Tadoba rule integration */}
                <div className="space-y-1 min-w-0">
                  <label className="text-[9px] uppercase tracking-widest text-sand-500 font-bold block">Choose Location</label>
                  <select
                    required
                    value={location}
                    onChange={(e: any) => setLocation(e.target.value)}
                    className="w-full max-w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-sand-200 rounded-xl text-base sm:text-sm text-sand-800 focus:outline-none focus:ring-1 focus:ring-sage-700 tracking-wide box-border block"
                  >
                    <option value="">Select a Sanctuary Location</option>
                    <option value="Nagpur">Nagpur (Salon & Wellness Spa)</option>
                    <option value="Chandrapur">Chandrapur (Salon & Wellness Spa)</option>
                    <option value="Tadoba">Tadoba (Wellness Spa only)</option>
                  </select>
                </div>

                {/* Date & Time selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 min-w-0 max-w-full w-full">
                  <div className="space-y-1 min-w-0 w-full">
                    <label className="text-[9px] uppercase tracking-widest text-sand-500 font-bold block">Preferred Date</label>
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full max-w-full min-w-0 px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-sand-200 rounded-xl text-base sm:text-sm focus:outline-none focus:ring-1 focus:ring-sage-700 box-border block appearance-none"
                    />
                  </div>
                  <div className="space-y-1 min-w-0 w-full">
                    <label className="text-[9px] uppercase tracking-widest text-sand-500 font-bold block">Preferred Time</label>
                    <input
                      type="time"
                      required
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full max-w-full min-w-0 px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-sand-200 rounded-xl text-base sm:text-sm focus:outline-none focus:ring-1 focus:ring-sage-700 box-border block appearance-none"
                    />
                  </div>
                </div>

                {/* Special Request or Silence note fields */}
                <div className="space-y-1 min-w-0">
                  <label className="text-[9px] uppercase tracking-widest text-sand-500 font-bold block">Special requests</label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full max-w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-sand-200 rounded-xl text-base sm:text-sm focus:outline-none focus:ring-1 focus:ring-sage-700 leading-normal box-border block"
                    placeholder="e.g., Prefer silence, specific therapist, or any allergies..."
                  />
                </div>

                {/* Form submit with WhatsApp redirection info */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={!!locationError || !fullName || !phoneNumber || !location || !date || !time}
                    className="w-full flex items-center justify-center gap-2 bg-sage-800 disabled:bg-sand-300 disabled:text-sand-400 disabled:cursor-not-allowed hover:bg-sage-900 text-sand-50 text-[11px] uppercase tracking-[0.2em] py-4 rounded-xl transition-all duration-300 font-bold cursor-pointer font-sans"
                  >
                    <MessageSquare className="w-4 h-4 text-amber-200" />
                    Reserve via WhatsApp
                  </button>
                  <span className="text-[8.5px] text-center block text-sand-400 tracking-wider uppercase mt-2 font-mono">
                    You will be redirected with prefilled message
                  </span>
                </div>

              </form>
            </div>

            {/* Quick trust assurances footer */}
            <div className="text-center py-4 bg-sand-50/90 border-t border-sand-150 flex items-center justify-center gap-1 text-[9.5px] uppercase tracking-widest text-[#7E8B83] font-semibold shrink-0">
              <ClipboardCheck className="w-3.5 h-3.5 text-sage-800" />
              We confirm within 15 minutes
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
