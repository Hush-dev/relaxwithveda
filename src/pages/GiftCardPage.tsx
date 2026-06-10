import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Gift, Sparkles, Check, Send, Heart, Eye, Search, ChevronDown } from 'lucide-react';
import { SERVICES } from '../data';

interface GiftCardPageProps {
  onOpenBooking: () => void;
  onConfigureGiftCard: (config: any) => void;
}

export default function GiftCardPage({ onOpenBooking, onConfigureGiftCard }: GiftCardPageProps) {
  const [giftType, setGiftType] = useState<'amount' | 'service'>('amount');
  const [selectedAmount, setSelectedAmount] = useState<number>(5000);
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES[0].id);
  const [recipientName, setRecipientName] = useState<string>('');
  const [senderName, setSenderName] = useState<string>('');
  const [personalMessage, setPersonalMessage] = useState<string>('');
  const [cardTheme, setCardTheme] = useState<'gold' | 'sage' | 'charcoal'>('gold');
  const [isCommitted, setIsCommitted] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState<boolean>(false);

  // Pre-configured elegant amounts
  const presetAmounts = [3000, 5000, 10000, 15000];

  const currentService = SERVICES.find(s => s.id === selectedServiceId) || SERVICES[0];

  const filteredServices = SERVICES.filter(s => 
    s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (s.description && s.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleGenerateVoucher = () => {
    onConfigureGiftCard({
      giftType,
      amount: giftType === 'amount' ? selectedAmount : currentService.price,
      serviceTitle: giftType === 'service' ? currentService.title : undefined,
      recipientName: recipientName || 'Beloved Companion',
      senderName: senderName || 'A Kind Soul',
      personalMessage: personalMessage || 'May this return you to peace.',
      cardTheme
    });
    setIsCommitted(true);
    onOpenBooking();
  };

  const getThemeClasses = () => {
    switch (cardTheme) {
      case 'sage':
        return {
          bg: 'bg-gradient-to-br from-sage-900 to-sage-700 text-sand-100',
          foilLine: 'border-sage-400/40',
          accent: 'text-amber-100',
          tag: 'bg-sage-800/80'
        };
      case 'charcoal':
        return {
          bg: 'bg-gradient-to-br from-stone-900 via-stone-950 to-stone-900 text-sand-50',
          foilLine: 'border-stone-700/60',
          accent: 'text-amber-200',
          tag: 'bg-stone-800/80'
        };
      default: // gold
        return {
          bg: 'bg-gradient-to-br from-[#1C1A17] via-[#2F2A21] to-[#1C1A17] text-amber-50',
          foilLine: 'border-[#4E4431]/60',
          accent: 'text-amber-400',
          tag: 'bg-[#3A3325]'
        };
    }
  };

  const themeClasses = getThemeClasses();

  return (
    <div className="pt-32 md:pt-36 pb-20 bg-sand-50 min-h-screen px-6 md:px-12 text-left">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Headings */}
        <div className="text-left border-b border-sand-200 pb-10 mb-12">
          <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-sage-800 font-bold block mb-4">
            Foil Vouchers
          </span>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-light text-sand-950 tracking-tight leading-none">
                Give the <br />
                <span className="font-serif text-sage-800 font-light">gift of restoration.</span>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-xs sm:text-sm text-sand-800 font-sans font-light tracking-wide leading-relaxed text-justify-editorial">
                Gift a moment of pure wellness. Choose a value or specific treatment — delivered as a beautifully crafted physical or digital voucher.
              </p>
            </div>
          </div>
        </div>

        {/* Desk grid layout: Left Editor, Right Live Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* EDITOR COLUMN */}
          <div className="lg:col-span-6 space-y-8 bg-white p-6 sm:p-10 rounded-[2.5rem] border border-sand-200 shadow-xl">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-full bg-sage-50 text-sage-800 flex items-center justify-center">
                <Gift className="w-4 h-4" />
              </span>
              <h2 className="font-serif text-2xl font-light text-sand-950">Create a Gift Card</h2>
            </div>

            {/* Selector: Monetary vs Treatment */}
            <div className="space-y-3">
              <label className="text-[10px] uppercase tracking-widest font-mono text-sand-400 font-bold block">
                1. Gift Type
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setGiftType('amount')}
                  className={`py-3.5 rounded-xl font-sans text-[11px] uppercase tracking-widest font-bold border transition-all cursor-pointer ${
                    giftType === 'amount'
                      ? 'bg-sand-950 border-sand-950 text-white'
                      : 'border-sand-300 hover:border-sand-500 text-sand-800'
                  }`}
                >
                  Specific Amount
                </button>
                <button
                  type="button"
                  onClick={() => setGiftType('service')}
                  className={`py-3.5 rounded-xl font-sans text-[11px] uppercase tracking-widest font-bold border transition-all cursor-pointer ${
                    giftType === 'service'
                      ? 'bg-sand-950 border-sand-950 text-white'
                      : 'border-sand-300 hover:border-sand-500 text-sand-800'
                  }`}
                >
                  Holistic Service
                </button>
              </div>
            </div>

            {/* Sub-inputs based on toggle */}
            {giftType === 'amount' ? (
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-widest font-mono text-sand-400 font-bold block">
                  2. Select Amount
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {presetAmounts.map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => setSelectedAmount(amt)}
                      className={`py-2 px-1 rounded-lg text-xs font-serif font-bold border transition-all cursor-pointer ${
                        selectedAmount === amt
                          ? 'bg-sage-800 border-sage-800 text-white'
                          : 'bg-sand-50 border-sand-200 text-sand-800 hover:border-sand-300'
                      }`}
                    >
                      ₹{amt.toLocaleString()}
                    </button>
                  ))}
                </div>
                
                {/* Custom numeric slider */}
                <div className="space-y-1 pt-2">
                  <div className="flex justify-between text-xs text-sand-700 font-sans font-light">
                    <span>Or slide to select:</span>
                    <strong className="font-serif text-sand-950">₹{selectedAmount.toLocaleString()}</strong>
                  </div>
                  <input
                    type="range"
                    min="1500"
                    max="30000"
                    step="500"
                    value={selectedAmount}
                    onChange={(e) => setSelectedAmount(Number(e.target.value))}
                    className="w-full accent-sage-800 cursor-pointer h-1 bg-sand-200 rounded-lg appearance-none"
                  />
                  <div className="flex justify-between text-[9px] text-sand-400 font-mono">
                    <span>Min: ₹1,500</span>
                    <span>Max: ₹30,000</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-3 relative">
                <label className="text-[10px] uppercase tracking-widest font-mono text-sand-400 font-bold block">
                  2. Select a Service
                </label>
                
                {/* Custom Searchable Dropdown */}
                <div className="relative">
                  {/* Select Trigger Card */}
                  <div
                    onClick={() => setServiceDropdownOpen(!serviceDropdownOpen)}
                    className="w-full bg-sand-50 border border-sand-200 hover:border-sand-300 focus-within:border-sage-800 rounded-xl p-4 flex items-center justify-between cursor-pointer transition-colors duration-250 select-none"
                  >
                    <div className="flex flex-col text-left">
                      <span className="text-[9px] uppercase tracking-wider font-mono text-sand-400">
                        {currentService.category}
                      </span>
                      <span className="text-xs font-sans font-semibold text-sand-950 mt-0.5">
                        {currentService.title}
                      </span>
                      <span className="text-[10px] text-sand-600 font-sans font-light mt-0.5">
                        {currentService.duration}
                      </span>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-sand-400 transition-transform duration-300 shrink-0 ml-4 ${serviceDropdownOpen ? 'rotate-180' : ''}`} />
                  </div>

                  {/* Backdrop Click-Overlay for closing the dropdown safely */}
                  {serviceDropdownOpen && (
                    <div 
                      className="fixed inset-0 z-40 bg-transparent" 
                      onClick={() => {
                        setServiceDropdownOpen(false);
                        setSearchQuery('');
                      }} 
                    />
                  )}

                  {/* Dropdown Popover */}
                  <AnimatePresence>
                    {serviceDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                        transition={{ duration: 0.15, ease: 'easeOut' }}
                        className="absolute left-0 right-0 mt-2 bg-white border border-sand-200 rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col max-h-80"
                      >
                        {/* Sticky Search Input */}
                        <div className="sticky top-0 bg-white p-3 border-b border-sand-150 z-10 flex items-center gap-2">
                          <Search className="w-3.5 h-3.5 text-sand-400 shrink-0" />
                          <input
                            type="text"
                            placeholder="Search services (e.g. massage, salon, facial)..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-transparent text-xs text-sand-950 placeholder-sand-400 outline-none font-sans"
                            autoFocus
                          />
                        </div>

                        {/* List of Filtered Services */}
                        <div className="overflow-y-auto divide-y divide-sand-100 max-h-60 scrollbar-thin">
                          {filteredServices.map((s) => {
                            const isSelected = s.id === selectedServiceId;
                            return (
                              <button
                                key={s.id}
                                type="button"
                                onClick={() => {
                                  setSelectedServiceId(s.id);
                                  setServiceDropdownOpen(false);
                                  setSearchQuery('');
                                }}
                                className={`w-full text-left p-3.5 hover:bg-sand-50/70 transition-all flex flex-col gap-1 cursor-pointer transition-colors duration-150 ${
                                  isSelected ? 'bg-sand-50/90' : ''
                                }`}
                              >
                                <span className={`text-[11px] font-sans font-semibold tracking-wide block ${isSelected ? 'text-sage-800' : 'text-sand-950'}`}>
                                  {s.title}
                                </span>
                                <div className="flex items-center gap-2 text-[9px] text-sand-500 font-sans">
                                  <span className="uppercase tracking-widest font-mono text-[8px] bg-sand-100/80 px-1.5 py-0.5 rounded text-sand-600 font-bold">
                                    {s.category}
                                  </span>
                                  <span>•</span>
                                  <span>{s.duration}</span>
                                </div>
                              </button>
                            );
                          })}

                          {filteredServices.length === 0 && (
                            <div className="text-center py-8 text-xs text-sand-400 font-sans">
                              No matching therapies found.
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <p className="text-[10px] text-sand-600 leading-relaxed font-sans font-light">
                  Note: If Tadoba is the chosen location, only wellness services are availability.
                </p>
              </div>
            )}

            {/* Recipient Details Form */}
            <div className="space-y-4 pt-2">
              <label className="text-[10px] uppercase tracking-widest font-mono text-sand-400 font-bold block">
                3. Personalise Your Card
              </label>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <span className="text-[9px] uppercase tracking-wider font-mono text-sand-400 block">TO</span>
                  <input
                    type="text"
                    required
                    placeholder="E.g. Roselia Vance"
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    className="w-full bg-sand-50 border border-sand-200 focus:border-sage-800 rounded-xl px-4 py-3 text-xs text-sand-950 placeholder-sand-300 font-sans transition-all outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] uppercase tracking-wider font-mono text-sand-400 block">FROM</span>
                  <input
                    type="text"
                    required
                    placeholder="E.g. Arthur Vance"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    className="w-full bg-sand-50 border border-sand-200 focus:border-sage-800 rounded-xl px-4 py-3 text-xs text-sand-950 placeholder-sand-300 font-sans transition-all outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[9px] uppercase tracking-wider font-mono text-sand-400 block">Personal Message</span>
                <textarea
                  rows={2}
                  maxLength={120}
                  placeholder="Write a short personal message..."
                  value={personalMessage}
                  onChange={(e) => setPersonalMessage(e.target.value)}
                  className="w-full bg-sand-50 border border-sand-200 focus:border-sage-800 rounded-xl px-4 py-3 text-xs text-sand-950 placeholder-sand-300 font-sans transition-all outline-none resize-none"
                />
                <div className="text-right text-[8px] text-sand-400 font-mono">
                  {personalMessage.length}/120 characters
                </div>
              </div>
            </div>

            {/* Styling theme switcher */}
            <div className="space-y-3 pt-2">
              <label className="text-[10px] uppercase tracking-widest font-mono text-sand-400 font-bold block">
                4. Card Theme
              </label>
              <div className="flex gap-4">
                {['gold', 'sage', 'charcoal'].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setCardTheme(t as any)}
                    className={`px-4 py-2 text-[10px] uppercase tracking-widest font-mono rounded-lg border transition-all cursor-pointer ${
                      cardTheme === t
                        ? 'bg-sand-950 border-sand-950 text-white font-bold'
                        : 'border-sand-200 bg-sand-50 text-sand-600'
                    }`}
                  >
                    {t} Palette
                  </button>
                ))}
              </div>
            </div>

            {/* Action commit button */}
            <button
              onClick={handleGenerateVoucher}
              className="w-full bg-sage-800 hover:bg-sage-900 border border-sage-800 text-white font-sans text-xs uppercase tracking-[0.25em] font-bold py-4.5 rounded-full shadow-lg hover:-translate-y-0.5 transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4 text-amber-200" />
              Generate Gift Card
            </button>
          </div>

          {/* REAL-TIME PREVIEW COLUMN */}
          <div className="lg:col-span-6 space-y-6 lg:sticky lg:top-28">
            <h3 className="text-[10px] uppercase tracking-widest font-mono text-sand-405 font-bold block flex items-center gap-1.5">
              <Eye className="w-4 h-4 text-sage-800 animate-pulse" />
              Live Foil Letterpress Preview
            </h3>

            {/* VOUCHER CONTAINER */}
            <div className={`w-full aspect-[16/10] sm:aspect-[1.78] rounded-[2.2rem] p-6 sm:p-9 flex flex-col justify-between items-stretch border shadow-2xl relative overflow-hidden text-left bg-size-200 transition-all duration-700 ${themeClasses.bg} ${themeClasses.foilLine}`}>
              
              {/* Gold foil decorative waterlines mirroring premium letterpress */}
              <div className="absolute inset-4 rounded-[1.8rem] border pointer-events-none opacity-40 border-dashed" style={{ borderColor: 'inherit' }} />
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />

              {/* Card Header row */}
              <div className="flex items-start justify-between relative z-10">
                <div className="space-y-1">
                  <span className="font-serif text-2xl font-light tracking-[0.1em] text-sand-50 block">veda</span>
                  <span className="text-[7px] uppercase tracking-[0.3em] font-sans block opacity-60">wellness & spa sanctuaries</span>
                </div>
                <div className={`p-2 rounded-full uppercase text-[7px] tracking-widest font-bold ${themeClasses.tag}`}>
                  № V7094-X
                </div>
              </div>

              {/* Message body section */}
              <div className="space-y-2 py-4 relative z-10 text-center">
                <p className="font-serif text-xs opacity-85 leading-relaxed max-w-sm mx-auto">
                  "{personalMessage || 'May this return your body directly back to peacefulness.'}"
                </p>
                <div className="h-[1px] w-12 bg-white/25 mx-auto" />
                <span className="text-[9px] uppercase tracking-widest font-mono font-bold block opacity-70">
                  A Gift of Healing
                </span>
              </div>

              {/* Recipient / Sender, Price Row */}
              <div className="flex items-end justify-between relative z-10">
                <div className="space-y-1">
                  <div className="text-[7px] font-mono uppercase opacity-50 tracking-wider">Recipient Card</div>
                  <div className="font-serif text-base font-light">
                    {recipientName || 'Beloved Companion'}
                  </div>
                  <div className="text-[8px] font-sans opacity-60">
                    With warmth from {senderName || 'A Kind Soul'}
                  </div>
                </div>

                <div className="text-right flex flex-col items-end">
                  <div className="text-[7px] font-mono uppercase opacity-50 tracking-wider">Voucher Worth</div>
                  <div className={`font-serif text-2xl font-bold ${themeClasses.accent}`}>
                    {giftType === 'amount' ? `₹${selectedAmount.toLocaleString()}` : `Bespoke`}
                  </div>
                  <div className="text-[7px] font-mono uppercase opacity-75 tracking-widest block max-w-[150px] truncate">
                    {giftType === 'amount' ? 'MONETARY SPEND' : currentService.title}
                  </div>
                </div>
              </div>
            </div>

            {/* Helpful Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-4.5 rounded-2xl border border-sand-200 flex items-start gap-3">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-[11px] leading-relaxed text-sand-700">
                  <strong>Permanent Validity</strong>: Veda gift vouchers never expire — redeem anytime across any location.
                </p>
              </div>
              <div className="bg-white p-4.5 rounded-2xl border border-sand-200 flex items-start gap-3">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-[11px] leading-relaxed text-sand-700">
                  <strong>Transferable Title</strong>: Vouchers are transferable and redeemable across Nagpur, Chandrapur, and Tadoba.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
