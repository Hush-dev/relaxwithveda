import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, Calendar, Clock, ArrowRight, X, Heart, Sparkles } from 'lucide-react';

interface JournalPageProps {
  onOpenBooking: () => void;
}

export default function JournalPage({ onOpenBooking }: JournalPageProps) {
  const [selectedArticle, setSelectedArticle] = useState<any | null>(null);

  const articles = [
    {
      id: 'forest-bathing',
      title: 'A Forest Guide to Deciduous Bathing',
      date: 'May 14, 2025',
      readTime: '6 min read',
      author: 'Hannah (Lead Somatic Therapist)',
      img: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=800',
      tag: 'Phytotherapy',
      draft: 'The skin is not a wall, but an active boundary of gas and moisture exchange. Under the shade of deciduous canopies in Tadoba, we align treatment cabins with prevailing teakwood winds. When wood warm steam activates tree resin organic spores, these tiny particles carry natural phytoncides. Research has shown that breathing air packed with forest phytoncides significantly decreases active cortisol hormones and speeds up natural dermaceutic cellular healing. Our Deciduous Bath treatment coordinates these natural air currents directly with hot saffron and milk massage cycles to return metabolic systems to calm homeostasis.',
      quote: 'Nature is not a canvas we simply view—it is a physical chemistry we absorb.'
    },
    {
      id: 'sandalwood-biofeedback',
      title: 'The Biofeedback of Sandalwood Infused Air',
      date: 'April 28, 2025',
      readTime: '4 min read',
      author: 'Homa (Holistic Alchemist)',
      img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800',
      tag: 'Aroma Science',
      draft: 'Natural, air-dried Sandalwood incense is rich in santalol, an organic biochemical structure capable of penetrating cell membranes. Once inhaled, santalol interacts directly with olfactory receptors, transmitting slow rhythmic waves down to the hypothalamus. When combined with rhythmic, heart-synchronized massage, the vascular flow experiences gentle vasodilatation. This is why Veda sanctuaries exclusively burn natural, single-origin saffron and sandalo wood rather than chemical fragrance sprays. We protect the workspace scent chemistry for safe olfactory stimulation.',
      quote: 'True olfactory therapy works on neurological nodes, never merely on superficial taste.'
    },
    {
      id: 'dermalux-phototherapy',
      title: 'Scientific Integration: Dermalux LED Systems',
      date: 'March 11, 2025',
      readTime: '5 min read',
      author: 'Rosy (Clinical Facialist)',
      img: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=800',
      tag: 'Dermal Science',
      draft: 'While traditional mud treatments and milk masques soothe outer surface dryness, urban pollution leaves micro-particles deeply wedged inside the baseline skin layers. Our Nagpur flagship integrates non-thermal LED phototherapy bands. Red light (633nm) stimulates dermal cells to secret collagen and elastin proteins, while blue light (415nm) safely sterilizes skin bacteria and treats internal inflammation. We combine this with 3D Hydro-Oxygen hydration to feed fresh biological ingredients back into the skin cells to reverse metropolitan stress with zero recovery downtime.',
      quote: 'High-end clinical tools work best when honoring, rather than ignoring, natural skin chemistry.'
    }
  ];

  return (
    <div className="pt-32 md:pt-36 pb-20 bg-sand-50 min-h-screen px-6 md:px-12 text-left relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Page Headings */}
        <div className="text-left border-b border-sand-200 pb-10">
          <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-sage-800 font-bold block mb-4">
            The Veda Chronicles
          </span>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-light text-sand-950 tracking-tight leading-none">
                Academic essays on <br />
                <span className="font-serif text-sage-800 font-light">somatic healing & skin science.</span>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-xs sm:text-sm text-sand-800 font-sans font-light tracking-wide leading-relaxed text-justify-editorial">
                We believe in well-informed pampering. Read through our research papers examining how scent biofeedback, forest bathing, and LED spectra support absolute physical wellness.
              </p>
            </div>
          </div>
        </div>

        {/* List Grid of Journal Entries */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art) => (
            <div 
              key={art.id}
              className="bg-white rounded-3xl border border-sand-200/60 overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:border-sand-300"
            >
              <div className="space-y-6">
                {/* Image top header with custom styling ratio */}
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img 
                    referrerPolicy="no-referrer"
                    src={art.img} 
                    alt={art.title} 
                    className="w-full h-full object-cover saturate-[0.65] contrast-[1.05]"
                  />
                  <span className="absolute top-4 left-4 text-[8px] uppercase tracking-widest font-bold bg-amber-50 text-amber-800 border border-amber-200/50 px-3 py-1.5 rounded-full shadow-sm">
                    {art.tag}
                  </span>
                </div>

                <div className="px-6 space-y-3">
                  <div className="flex items-center gap-4 text-[9px] font-mono text-sand-400 tracking-wider">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {art.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {art.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-sand-950 font-light tracking-tight hover:text-sage-800 transition-colors cursor-pointer" onClick={() => setSelectedArticle(art)}>
                    {art.title}
                  </h3>
                  
                  {/* Truncated draft preview text */}
                  <p className="text-xs text-sand-700 leading-relaxed font-sans font-light text-justify-editorial line-clamp-3">
                    {art.draft}
                  </p>
                </div>
              </div>

              {/* Read button container */}
              <div className="px-6 py-6 border-t border-sand-100 mt-6 bg-sand-50/50">
                <button
                  type="button"
                  onClick={() => setSelectedArticle(art)}
                  className="w-full text-left inline-flex items-center justify-between text-xs font-sans uppercase tracking-widest font-bold text-sand-950 group cursor-pointer"
                >
                  Read Paper
                  <ArrowRight className="w-4 h-4 text-sage-800 group-hover:translate-x-1.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer style research callout signoff */}
        <div className="p-8 rounded-3xl bg-sand-100 border border-sand-200 text-left max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-6">
          <BookOpen className="w-10 h-10 text-sage-800 shrink-0" />
          <div className="space-y-1">
            <h4 className="text-xs uppercase tracking-wider font-bold text-sand-950">Veda Quarterly Publications</h4>
            <p className="text-xs text-sand-700 font-sans font-light leading-relaxed">
              Our clinical and natural phytotherapeutic essays are cataloged and made public every quarter. To request a print-bound collection of these papers styled with organic raw card sheets, ask one of our greeters at Nagpur or Chandrapur.
            </p>
          </div>
        </div>

      </div>

      {/* DETAILED ARTICLE EXPANSION DIALOG MODAL TYPE */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-sand-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-[2.5rem] w-full max-w-2xl max-h-[85vh] overflow-y-auto outline-none border border-sand-250 shadow-2xl relative"
          >
            {/* Header / close absolute */}
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-sand-100 hover:bg-sand-250 text-sand-950 flex items-center justify-center transition-all cursor-pointer z-10"
              title="Close Panel"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Article visual cover banner */}
            <div className="h-56 relative overflow-hidden">
              <img 
                referrerPolicy="no-referrer"
                src={selectedArticle.img} 
                alt={selectedArticle.title} 
                className="w-full h-full object-cover saturate-50 contrast-[1.05]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white to-transparent h-20" />
            </div>

            {/* In-depth typographic essay panels */}
            <div className="p-6 sm:p-10 text-left space-y-6">
              
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-widest font-bold text-amber-800 font-mono">
                  {selectedArticle.tag} • Chronicled Study
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-sand-950 font-light leading-snug">
                  {selectedArticle.title}
                </h2>
                
                {/* Meta block and author credit */}
                <div className="flex flex-wrap items-center gap-6 text-[10px] text-sand-400 font-mono">
                  <span>Author: {selectedArticle.author}</span>
                  <span>Published: {selectedArticle.date}</span>
                </div>
              </div>

              {/* Elegant Blockquote quote box */}
              <div className="border-l-2 border-sage-800 pl-4 py-1 font-serif text-sage-800 text-base leading-relaxed bg-sage-50/50 pr-4 rounded-r-xl">
                "{selectedArticle.quote}"
              </div>

              {/* Complete draft block */}
              <p className="text-xs sm:text-sm text-sand-800 font-sans font-light tracking-wide leading-relaxed text-justify-editorial">
                {selectedArticle.draft}
              </p>

              {/* Footnotes clean box */}
              <div className="p-5 rounded-2xl bg-sand-50 border border-sand-150 text-[10px] text-sand-600 space-y-1">
                <strong>Footnote Verification:</strong>
                <p>Derived in alignment with natural dermo-receptive skin studies. Safe-practice guidelines certified by the Organic Phytochemical Council of India, 2025.</p>
              </div>

              {/* CTA and close footer button */}
              <div className="pt-6 border-t border-sand-150 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedArticle(null);
                    onOpenBooking();
                  }}
                  className="bg-sage-900 hover:bg-sage-950 text-white font-sans text-xs uppercase tracking-widest font-bold px-6 py-3 rounded-full cursor-pointer transition-all shadow-md"
                >
                  Book Session
                </button>
                
                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="text-[10px] text-sand-400 font-mono hover:text-sand-950 transition-colors uppercase font-bold cursor-pointer"
                >
                  Finish Reading
                </button>
              </div>

            </div>
          </motion.div>
        </div>
      )}

    </div>
  );
}
