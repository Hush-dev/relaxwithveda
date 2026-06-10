import React from 'react';
import { Star, Shield, HelpCircle, ArrowRight, Award, Flame, Feather } from 'lucide-react';

interface TeamPageProps {
  onOpenBooking: () => void;
}

export default function TeamPage({ onOpenBooking }: TeamPageProps) {
  
  const therapists = [
    {
      name: 'Rosy',
      role: 'Master Aesthetic Facialist',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
      loc: 'Nagpur & Chandrapur',
      cert: 'Licensed Clinical Phytotherapy (12 Yrs)',
      bio: 'Rosy specializes in anti-pollution skin dynamics. She leads our Dermalux LED and 3D Hydro-Oxygen chambers, carefully tuning the pneumatic vapor pressure to treat metropolitan cell fatigue.'
    },
    {
      name: 'Hannah',
      role: 'Lead Somatic & Deep Tissue Therapist',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop',
      loc: 'Tadoba Forest Canopy',
      cert: 'Ayurvedic Marma Mastery — Kerala (14 Yrs)',
      bio: 'Hannah operates primarily under the shade of our deciduous Tadoba reserve. Her treatment includes warm basalt stone alignments, sandalo wood incense, and breathing-guided decompression.'
    },
    {
      name: 'Angelika',
      role: 'Chief Hair Architect & Scalp Botanist',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
      loc: 'Nagpur Flagship',
      cert: 'Advanced Color Dynamics — Milan (9 Yrs)',
      bio: 'Specializing in non-synthetic pigmentations and custom face-mapping haircuts, Angelika uses cold-pressed almond glazes to build beautiful sculptural dimension without damaging follicle health.'
    },
    {
      name: 'Homa',
      role: 'Holistic Phytotherapist & Alchemist',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop',
      loc: 'All Locations',
      cert: 'Distinction in Herbal Pharmacognosy (16 Yrs)',
      bio: 'Homa hand-mixes our onsite organic saffrons, clay masques, and raw botanical masks on the day of your reservation. She tests each composition to ensure it respects absolute skin sensitivity guidelines.'
    }
  ];

  return (
    <div className="pt-32 md:pt-36 pb-20 bg-sand-50 min-h-screen px-6 md:px-12 text-left">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Page Headings */}
        <div className="text-left border-b border-sand-200 pb-10">
          <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-sage-800 font-bold block mb-4">
            Master Stylists and Therapists
          </span>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-light text-sand-950 tracking-tight leading-none">
                Handcrafted care, <br />
                <span className="font-serif text-sage-800 font-light">guided by clinical excellence.</span>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-xs sm:text-sm text-sand-800 font-sans font-light tracking-wide leading-relaxed text-justify-editorial">
                We do not employ mechanical massagers or formulaic treatments. Each of our therapists has spent over a decade perfecting rhythmic touch, phytochemistry, and organic scalp architecture.
              </p>
            </div>
          </div>
        </div>

        {/* Master list of specialists with grid spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {therapists.map((therapist) => (
            <div 
              key={therapist.name}
              className="bg-white rounded-3xl border border-sand-200/60 p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:border-sand-300"
            >
              <div className="space-y-5">
                {/* Rounded avatar layout matching high end luxury standards */}
                <div className="aspect-[4/5] rounded-2xl overflow-hidden relative shadow-sm border border-sand-100">
                  <img 
                    referrerPolicy="no-referrer"
                    src={therapist.avatar} 
                    alt={therapist.name} 
                    className="w-full h-full object-cover saturate-50 contrast-[1.05]"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-sand-955/75 to-transparent h-12" />
                  
                  {/* Floating location tag */}
                  <span className="absolute bottom-3 left-3 text-[8px] uppercase tracking-widest bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md text-sand-950 font-bold border border-sand-200/50">
                    {therapist.loc}
                  </span>
                </div>

                <div className="space-y-1 text-left">
                  <h3 className="font-serif text-xl text-sand-950 font-light">{therapist.name}</h3>
                  <p className="text-[10px] text-sage-800 uppercase tracking-wider font-bold">
                    {therapist.role}
                  </p>
                </div>

                {/* Credentials list */}
                <div className="flex items-center gap-1 text-[9px] uppercase tracking-wider font-mono text-sand-400 font-bold">
                  <Award className="w-3.5 h-3.5 text-sage-800" />
                  <span>{therapist.cert}</span>
                </div>

                {/* Narrative Bio */}
                <p className="text-xs text-sand-700 leading-relaxed font-sans font-light text-justify-editorial">
                  {therapist.bio}
                </p>
              </div>

              {/* Action trigger and link to booking system */}
              <div className="pt-6 mt-6 border-t border-sand-100">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="w-full text-center bg-sand-50 hover:bg-sand-950 hover:text-white border border-sand-200 hover:border-sand-950 text-sand-800 text-[9px] font-sans font-bold uppercase tracking-widest py-2.5 rounded-full transition-all cursor-pointer"
                >
                  Book {therapist.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sensory Alignment Philosophy banner */}
        <div className="bg-sand-100 border border-sand-200 rounded-[2.5rem] p-8 md:p-12 text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-sage-800 text-[10px] uppercase tracking-widest font-bold">
              <Feather className="w-4 h-4 animate-bounce" />
              Rhythmic Solitude Code
            </div>
            <h3 className="font-serif text-3xl font-light text-sand-950 leading-tight">
              Honoring clean boundaries and steady breath
            </h3>
            <p className="text-xs sm:text-sm text-sand-800 font-sans font-light tracking-wide leading-relaxed">
              We operate as a safe space for skin recovery and follicle repair. No chemical ingredients or synthetic additives are used in our treatments, ensuring health protection for guests and safe working conditions for our dedicated specialists.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-end">
            <button
              onClick={onOpenBooking}
              className="bg-sage-900 hover:bg-sage-950 text-white font-sans text-xs uppercase tracking-[0.2em] px-8 py-4.5 rounded-full transition-all cursor-pointer flex items-center gap-2.5 shadow-md font-bold"
            >
              Book Space
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
