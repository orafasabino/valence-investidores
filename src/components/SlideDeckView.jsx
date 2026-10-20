import React, { useEffect, useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  Sparkles, 
  TrendingUp, 
  ShieldCheck, 
  Gem, 
  Award, 
  Share2,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Layers,
  Compass,
  Camera
} from 'lucide-react';

export default function SlideDeckView({ 
  slides, 
  currentSlide, 
  setCurrentSlide, 
  onOpenLightbox 
}) {
  const slide = slides[currentSlide];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1));
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        setCurrentSlide(prev => Math.max(prev - 1, 0));
      } else if (e.key === 'Home') {
        e.preventDefault();
        setCurrentSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        setCurrentSlide(slides.length - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slides.length, setCurrentSlide]);

  return (
    <div className="relative flex flex-col min-h-[calc(100vh-53px)] sm:min-h-[calc(100vh-65px)] bg-[#081B12] valence-pattern-bg text-valence-cream overflow-hidden">
      
      {/* Slide Viewport (Responsive Presentation Canvas) */}
      <div className="flex-1 flex items-center justify-center p-2 sm:p-6 lg:p-8">
        <div className="relative w-full max-w-6xl min-h-[540px] md:min-h-0 md:aspect-[16/9] bg-gradient-to-br from-valence-deep/95 via-[#0c291c]/95 to-[#071911]/95 border border-valence-gold/30 rounded-2xl shadow-2xl p-4 sm:p-8 md:p-10 flex flex-col justify-between overflow-hidden">
          
          {/* Subtle Corner Accents (Luxury Gold Brackets) */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-4 h-4 sm:w-6 sm:h-6 border-t-2 border-l-2 border-valence-gold/40 pointer-events-none" />
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-4 h-4 sm:w-6 sm:h-6 border-t-2 border-r-2 border-valence-gold/40 pointer-events-none" />
          <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 w-4 h-4 sm:w-6 sm:h-6 border-b-2 border-l-2 border-valence-gold/40 pointer-events-none" />
          <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-4 h-4 sm:w-6 sm:h-6 border-b-2 border-r-2 border-valence-gold/40 pointer-events-none" />

          {/* Top Bar inside Slide */}
          <div className="flex items-center justify-between border-b border-valence-gold/20 pb-2.5 mb-3 sm:mb-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-sans font-semibold tracking-widest bg-valence-gold/15 text-valence-gold border border-valence-gold/40 uppercase">
                {slide.act}
              </span>
              <span className="text-[11px] sm:text-xs text-valence-cream/60 tracking-wider uppercase font-sans truncate max-w-[180px] sm:max-w-none">
                {slide.subtitle}
              </span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-serif text-valence-gold">
              <span className="hidden sm:inline">VALENCE JOIAS</span>
              <span className="hidden sm:inline text-valence-cream/30">•</span>
              <span className="text-valence-cream/80">{slide.slideNum} / 12</span>
            </div>
          </div>

          {/* Slide Dynamic Body Content */}
          <div className="flex-1 overflow-y-auto pr-1">
            
            {/* SLIDE 1: COVER COM A IMAGEM SOLICITADA (D10D295E...) */}
            {slide.id === 1 && (
              <div className="h-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 py-2">
                <div className="flex-1 space-y-3 sm:space-y-4 text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-valence-gold/10 border border-valence-gold/30 text-xs text-valence-gold font-sans">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Dossiê Executivo de Expansão</span>
                  </div>
                  
                  <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif text-valence-cream leading-tight">
                    TESE DE INVESTIMENTO & REPOSICIONAMENTO
                  </h1>
                  
                  <div className="flex items-center gap-4">
                    <img src="/assets/Valence-logo-branco.png" alt="Valence Logo" className="h-8 sm:h-9 w-auto" />
                  </div>

                  <p className="text-sm sm:text-lg font-serif text-valence-gold-light leading-relaxed max-w-xl">
                    Da consolidação nativa digital à Alta Joalheria com ouro e diamantes importados.
                  </p>

                  <div className="grid grid-cols-2 gap-2 sm:gap-4 pt-2 sm:pt-3 border-t border-valence-gold/20">
                    {slide.highlights.map((h, i) => (
                      <div key={i} className="bg-valence-emerald/60 p-2 sm:p-2.5 rounded-lg border border-valence-gold/20">
                        <div className="text-[9px] sm:text-[10px] text-valence-gold uppercase tracking-wider">{h.label}</div>
                        <div className="text-base sm:text-lg font-serif text-valence-cream font-bold">{h.value}</div>
                        <div className="text-[8px] sm:text-[9px] text-valence-cream/60 truncate">{h.detail}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full md:w-5/12 flex flex-col items-center">
                  <div 
                    className="relative group cursor-pointer overflow-hidden rounded-xl border border-valence-gold/40 shadow-2xl w-full max-w-xs sm:max-w-none"
                    onClick={() => onOpenLightbox(slide.images[0])}
                  >
                    <img 
                      src={slide.images[0].url} 
                      alt={slide.images[0].alt} 
                      className="w-full h-56 sm:h-64 md:h-80 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex items-end p-3 sm:p-4">
                      <div className="flex items-center justify-between w-full">
                        <div>
                          <span className="text-[9px] sm:text-[10px] text-valence-gold uppercase tracking-wider block font-sans">Ensaio Real Oficial</span>
                          <span className="text-[11px] sm:text-xs text-valence-cream font-serif">{slide.images[0].caption}</span>
                        </div>
                        <ZoomIn className="w-4 h-4 text-valence-gold" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SLIDE 2: ATO I */}
            {slide.id === 2 && (
              <div className="h-full flex flex-col justify-between py-2 space-y-3 sm:space-y-4">
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-valence-cream">
                    {slide.title}
                  </h2>
                  <p className="text-xs sm:text-sm md:text-base text-valence-gold-light font-serif mt-0.5 sm:mt-1">
                    {slide.headline}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
                  {slide.points.map((pt, i) => (
                    <div key={i} className="card-luxury p-3.5 sm:p-4 rounded-xl flex flex-col justify-between">
                      <div>
                        <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-valence-gold/20 text-valence-gold flex items-center justify-center font-serif font-bold text-xs sm:text-sm mb-1.5 sm:mb-2 border border-valence-gold/40">
                          {pt.num}
                        </div>
                        <h3 className="font-serif text-sm sm:text-base text-valence-cream font-semibold mb-1 sm:mb-2">
                          {pt.title}
                        </h3>
                        <p className="text-[11px] sm:text-xs text-valence-cream/70 leading-relaxed">
                          {pt.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Metrics + Image Proofs */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 pt-1 sm:pt-2">
                  <div className="col-span-1 md:col-span-2 grid grid-cols-3 gap-2">
                    {slide.metrics.map((m, i) => (
                      <div key={i} className="bg-valence-forest/50 p-2 sm:p-3 rounded-lg border border-valence-gold/20 text-center">
                        <div className="text-lg sm:text-2xl font-serif text-valence-gold font-bold">{m.value}</div>
                        <div className="text-[10px] sm:text-xs text-valence-cream font-medium">{m.unit}</div>
                        <div className="text-[9px] sm:text-[10px] text-valence-cream/50 mt-0.5 sm:mt-1">{m.sub}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-center gap-2 sm:gap-3">
                    {slide.images.map((img, i) => (
                      <div 
                        key={i} 
                        className="relative group cursor-pointer rounded-lg overflow-hidden border border-valence-gold/30 h-20 sm:h-24 w-1/2"
                        onClick={() => onOpenLightbox(img)}
                      >
                        <img src={img.url} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <ZoomIn className="w-4 h-4 text-valence-gold" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* SLIDE 3: ATO II */}
            {slide.id === 3 && (
              <div className="h-full flex flex-col md:flex-row gap-4 sm:gap-6 items-center justify-between py-2">
                <div className="flex-1 space-y-3 sm:space-y-4">
                  <div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-valence-cream">{slide.title}</h2>
                    <p className="text-xs sm:text-sm md:text-base text-valence-gold-light font-serif mt-0.5 sm:mt-1">{slide.headline}</p>
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    {slide.points.map((pt, i) => (
                      <div key={i} className="bg-valence-forest/40 p-2.5 sm:p-3.5 rounded-xl border border-valence-gold/20">
                        <h4 className="font-serif text-sm sm:text-base text-valence-gold font-semibold flex items-center gap-2">
                          <span className="text-[10px] sm:text-xs px-2 py-0.5 rounded bg-valence-gold/20 text-valence-gold">{pt.num}</span>
                          {pt.title}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-valence-cream/80 mt-1 leading-relaxed pl-6 sm:pl-7">{pt.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full md:w-5/12 flex flex-col items-center">
                  <div 
                    className="relative group cursor-pointer overflow-hidden rounded-xl border border-valence-gold/40 shadow-2xl w-full"
                    onClick={() => onOpenLightbox(slide.images[0])}
                  >
                    <img src={slide.images[0].url} alt={slide.images[0].alt} className="w-full h-56 sm:h-64 md:h-80 object-cover rounded-xl group-hover:scale-105 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3 sm:p-4">
                      <div className="flex items-center justify-between w-full">
                        <span className="text-[11px] sm:text-xs text-valence-cream font-serif">{slide.images[0].caption}</span>
                        <ZoomIn className="w-4 h-4 text-valence-gold" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SLIDE 4: BRAND EQUITY COM FOTOS REAIS DO ENSAIO UNBOXING */}
            {slide.id === 4 && (
              <div className="h-full flex flex-col justify-between py-2 space-y-3">
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-valence-cream">{slide.title}</h2>
                  <p className="text-xs sm:text-sm md:text-base text-valence-gold-light font-serif mt-0.5">{slide.headline}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
                  {slide.unboxingCards.map((card, i) => (
                    <div key={i} className="card-luxury rounded-xl overflow-hidden flex flex-col">
                      <div 
                        className="relative h-36 sm:h-44 group cursor-pointer overflow-hidden border-b border-valence-gold/20"
                        onClick={() => onOpenLightbox({ url: card.img, caption: card.title })}
                      >
                        <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                        <div className="absolute top-2 right-2 p-1.5 rounded-full bg-black/60 text-valence-gold opacity-0 group-hover:opacity-100 transition-opacity">
                          <ZoomIn className="w-3.5 h-3.5" />
                        </div>
                        <span className="absolute bottom-2 left-2 px-2.5 py-0.5 rounded text-[10px] font-sans font-semibold bg-valence-deep/95 text-valence-gold border border-valence-gold/40">
                          {card.tag}
                        </span>
                      </div>
                      <div className="p-3 sm:p-3.5 flex-1 flex flex-col justify-between">
                        <h4 className="font-serif text-sm sm:text-base text-valence-cream font-semibold">{card.title}</h4>
                        <p className="text-[11px] sm:text-xs text-valence-cream/70 mt-1 leading-relaxed">{card.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SLIDE 5: ECOSSISTEMA DIGITAL */}
            {slide.id === 5 && (
              <div className="h-full flex flex-col md:flex-row gap-4 sm:gap-6 items-center justify-between py-2">
                <div className="flex-1 space-y-3 sm:space-y-4">
                  <div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-valence-cream">{slide.title}</h2>
                    <p className="text-xs sm:text-sm md:text-base text-valence-gold-light font-serif mt-0.5 sm:mt-1">{slide.headline}</p>
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    {slide.points.map((pt, i) => (
                      <div key={i} className="bg-valence-forest/40 p-2.5 sm:p-3.5 rounded-xl border border-valence-gold/20">
                        <h4 className="font-serif text-xs sm:text-sm md:text-base text-valence-gold font-semibold">{pt.title}</h4>
                        <p className="text-[11px] sm:text-xs text-valence-cream/80 mt-0.5 sm:mt-1 leading-relaxed">{pt.text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-1 sm:pt-2">
                    {slide.metrics.map((m, i) => (
                      <div key={i} className="bg-valence-deep p-2 sm:p-3 rounded-lg border border-valence-gold/20 text-center">
                        <div className="text-base sm:text-xl font-serif text-valence-gold font-bold">{m.value}</div>
                        <div className="text-[10px] sm:text-xs text-valence-cream">{m.unit}</div>
                        <div className="text-[8px] sm:text-[10px] text-valence-cream/50 mt-0.5">{m.sub}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full md:w-5/12 flex flex-col items-center">
                  <div 
                    className="relative group cursor-pointer overflow-hidden rounded-xl border border-valence-gold/40 shadow-2xl w-full"
                    onClick={() => onOpenLightbox(slide.images[0])}
                  >
                    <img src={slide.images[0].url} alt={slide.images[0].alt} className="w-full h-56 sm:h-64 md:h-80 object-cover rounded-xl group-hover:scale-105 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3 sm:p-4">
                      <div className="flex items-center justify-between w-full">
                        <span className="text-[11px] sm:text-xs text-valence-cream font-serif">{slide.images[0].caption}</span>
                        <ZoomIn className="w-4 h-4 text-valence-gold" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SLIDE 6: TRAÇÃO COMPROVADA */}
            {slide.id === 6 && (
              <div className="h-full flex flex-col justify-between py-2 space-y-3 sm:space-y-4">
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-valence-cream">{slide.title}</h2>
                  <p className="text-xs sm:text-sm md:text-base text-valence-gold-light font-serif mt-0.5 sm:mt-1">{slide.headline}</p>
                </div>

                {/* Big Metric Banner */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
                  {slide.metrics.map((m, i) => (
                    <div key={i} className="card-luxury p-2.5 sm:p-3.5 rounded-xl text-center border-t-2 border-t-valence-gold">
                      <div className="text-lg sm:text-2xl lg:text-3xl font-serif text-valence-gold font-bold">{m.value}</div>
                      <div className="text-[10px] sm:text-xs font-semibold text-valence-cream uppercase tracking-wider mt-0.5 sm:mt-1">{m.unit}</div>
                      <div className="text-[8px] sm:text-[10px] text-valence-cream/60 mt-0.5">{m.sub}</div>
                    </div>
                  ))}
                </div>

                {/* 3 Text points + 2 images */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 items-center">
                  <div className="col-span-1 md:col-span-2 space-y-2">
                    {slide.points.map((pt, i) => (
                      <div key={i} className="bg-valence-forest/40 p-2 sm:p-3 rounded-lg border border-valence-gold/20">
                        <h4 className="font-serif text-xs sm:text-sm text-valence-gold font-semibold">{pt.title}</h4>
                        <p className="text-[11px] sm:text-xs text-valence-cream/70 mt-0.5 leading-relaxed">{pt.text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2 sm:gap-3 justify-center">
                    {slide.images.map((img, i) => (
                      <div 
                        key={i} 
                        className="relative group cursor-pointer rounded-lg overflow-hidden border border-valence-gold/30 h-32 sm:h-40 w-1/2"
                        onClick={() => onOpenLightbox(img)}
                      >
                        <img src={img.url} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <ZoomIn className="w-4 h-4 text-valence-gold" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* SLIDE 7: FOUNDER-LED GROWTH COM FOTO EDITORIAL */}
            {slide.id === 7 && (
              <div className="h-full flex flex-col justify-between py-2 space-y-2 sm:space-y-3">
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-valence-cream">{slide.title}</h2>
                  <p className="text-xs sm:text-sm md:text-base text-valence-gold-light font-serif mt-0.5">{slide.headline}</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
                  {slide.metrics.map((m, i) => (
                    <div key={i} className="bg-valence-forest/50 p-2 sm:p-2.5 rounded-xl border border-valence-gold/30 text-center">
                      <div className="text-lg sm:text-xl lg:text-2xl font-serif text-valence-gold font-bold">{m.value}</div>
                      <div className="text-[10px] sm:text-xs text-valence-cream font-medium mt-0.5">{m.unit}</div>
                      <div className="text-[8px] sm:text-[10px] text-valence-cream/60">{m.sub}</div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-center">
                  <div className="md:col-span-4 card-luxury p-3.5 sm:p-4 rounded-xl border-valence-gold/40 flex flex-col justify-between">
                    <div>
                      <div className="inline-block px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-sans font-bold bg-valence-gold/20 text-valence-gold uppercase mb-1.5">
                        {slide.founderDetails.role}
                      </div>
                      <h3 className="text-base sm:text-lg font-serif text-valence-cream font-bold">{slide.founderDetails.name}</h3>
                      <p className="text-[11px] sm:text-xs text-valence-cream/80 mt-1 leading-relaxed">{slide.founderDetails.bio}</p>
                    </div>
                    <div className="mt-2.5 pt-2 border-t border-valence-gold/20">
                      <span className="text-[10px] sm:text-[11px] text-valence-gold font-serif italic block">
                        "A confiança pessoal converte joias de alto valor sem intermediários."
                      </span>
                    </div>
                  </div>

                  <div className="md:col-span-5 space-y-1.5 sm:space-y-2">
                    {slide.points.map((pt, i) => (
                      <div key={i} className="bg-valence-deep/70 p-2.5 sm:p-3 rounded-lg border border-valence-gold/20">
                        <h4 className="font-serif text-[11px] sm:text-xs font-semibold text-valence-gold">{pt.title}</h4>
                        <p className="text-[10px] sm:text-[11px] text-valence-cream/70 mt-0.5 leading-relaxed">{pt.text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="md:col-span-3 flex justify-center">
                    <div 
                      className="relative group cursor-pointer overflow-hidden rounded-xl border border-valence-gold/30 shadow-lg w-full h-36 sm:h-44"
                      onClick={() => onOpenLightbox(slide.images[0])}
                    >
                      <img src={slide.images[0].url} alt={slide.images[0].alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2 sm:p-2.5">
                        <span className="text-[9px] sm:text-[10px] text-valence-gold font-serif">{slide.images[0].caption}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SLIDE 8: ATO III - OURO, DIAMANTES E ESPANHA */}
            {slide.id === 8 && (
              <div className="h-full flex flex-col md:flex-row gap-4 sm:gap-6 items-center justify-between py-2">
                <div className="flex-1 space-y-2 sm:space-y-3">
                  <div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-valence-cream">{slide.title}</h2>
                    <p className="text-xs sm:text-sm md:text-base text-valence-gold-light font-serif mt-0.5">{slide.headline}</p>
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    {slide.points.map((pt, i) => (
                      <div key={i} className="bg-valence-forest/40 p-2 sm:p-2.5 rounded-lg border border-valence-gold/20">
                        <h4 className="font-serif text-xs sm:text-sm text-valence-gold font-semibold">{pt.title}</h4>
                        <p className="text-[11px] sm:text-xs text-valence-cream/70 mt-0.5 leading-relaxed">{pt.text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    {slide.strategicPillars.map((p, i) => (
                      <div key={i} className="bg-valence-deep/80 p-2 sm:p-2.5 rounded-lg border border-valence-gold/20">
                        <div className="text-[11px] sm:text-xs font-serif text-valence-gold font-bold flex items-center gap-1.5">
                          <Gem className="w-3 h-3 text-valence-gold" />
                          {p.title}
                        </div>
                        <div className="text-[9px] sm:text-[10px] text-valence-cream/60 mt-0.5">{p.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full md:w-5/12 flex flex-col items-center gap-2 sm:gap-3">
                  <div 
                    className="relative group cursor-pointer overflow-hidden rounded-xl border border-valence-gold/40 shadow-2xl w-full h-48 sm:h-56 md:h-64"
                    onClick={() => onOpenLightbox(slide.images[0])}
                  >
                    <img src={slide.images[0].url} alt={slide.images[0].alt} className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2.5 sm:p-3">
                      <div className="flex items-center justify-between w-full">
                        <span className="text-[11px] sm:text-xs text-valence-cream font-serif">{slide.images[0].caption}</span>
                        <ZoomIn className="w-4 h-4 text-valence-gold" />
                      </div>
                    </div>
                  </div>

                  <div 
                    className="relative group cursor-pointer overflow-hidden rounded-lg border border-valence-gold/30 shadow-md w-full h-20 sm:h-24"
                    onClick={() => onOpenLightbox(slide.images[1])}
                  >
                    <img src={slide.images[1].url} alt={slide.images[1].alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-1.5 sm:p-2">
                      <span className="text-[9px] sm:text-[10px] text-valence-cream font-serif">{slide.images[1].caption}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SLIDE 9: TRAJETÓRIA EVOLUTIVA */}
            {slide.id === 9 && (
              <div className="h-full flex flex-col justify-between py-2 space-y-3 sm:space-y-4">
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-valence-cream">{slide.title}</h2>
                  <p className="text-xs sm:text-sm md:text-base text-valence-gold-light font-serif mt-0.5 sm:mt-1">{slide.headline}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
                  {slide.phases.map((ph, i) => (
                    <div 
                      key={i} 
                      className={`card-luxury rounded-xl p-4 sm:p-5 flex flex-col justify-between ${
                        ph.color === 'gold' ? 'border-valence-gold shadow-gold-glow' : 'border-valence-gold/20'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                          <span className="text-xs font-mono text-valence-gold tracking-widest">{ph.phase}</span>
                          <span className="px-2 py-0.5 rounded text-[10px] font-sans font-semibold bg-valence-gold/15 text-valence-gold border border-valence-gold/30">
                            {ph.period}
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-serif text-valence-cream font-bold">{ph.name}</h3>
                        <p className="text-[11px] sm:text-xs text-valence-gold-light font-sans font-medium mt-0.5">{ph.badge}</p>

                        <div className="mt-3 sm:mt-4 space-y-2 sm:space-y-3 pt-2 sm:pt-3 border-t border-valence-gold/20">
                          {ph.items.map((item, idx) => (
                            <div key={idx} className="text-xs">
                              <span className="text-valence-gold font-semibold block text-[11px] sm:text-xs">{item.label}:</span>
                              <span className="text-valence-cream/70 leading-relaxed text-[10px] sm:text-[11px]">{item.val}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SLIDE 10: ARQUITETURA DO MODELO DE NEGÓCIOS */}
            {slide.id === 10 && (
              <div className="h-full flex flex-col justify-between py-2 space-y-2 sm:space-y-3">
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-valence-cream">{slide.title}</h2>
                  <p className="text-xs sm:text-sm md:text-base text-valence-gold-light font-serif mt-0.5">{slide.headline}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                  {slide.columns.map((col, i) => (
                    <div key={i} className="card-luxury p-3 sm:p-4 rounded-xl flex flex-col justify-between">
                      <div>
                        <h4 className="font-serif text-sm sm:text-base text-valence-gold font-bold flex items-center gap-1.5 sm:gap-2">
                          <CheckCircle2 className="w-4 h-4 text-valence-gold flex-shrink-0" />
                          {col.pillar}
                        </h4>
                        
                        <div className="mt-2 sm:mt-3 space-y-1.5 sm:space-y-2 text-xs">
                          <div className="bg-valence-deep/80 p-2 sm:p-2.5 rounded-lg border border-valence-gold/15">
                            <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-valence-gold/80 block font-sans">
                              Operação na Nova Fase:
                            </span>
                            <p className="text-valence-cream/80 mt-0.5 leading-relaxed text-[10px] sm:text-xs">{col.operation}</p>
                          </div>

                          <div className="bg-valence-forest/50 p-2 sm:p-2.5 rounded-lg border border-valence-gold/15">
                            <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-valence-gold/80 block font-sans">
                              Impacto Econômico & Vantagem:
                            </span>
                            <p className="text-valence-gold-light mt-0.5 leading-relaxed text-[10px] sm:text-xs">{col.impact}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SLIDE 11: TESE PARA INVESTIDORES */}
            {slide.id === 11 && (
              <div className="h-full flex flex-col md:flex-row gap-4 sm:gap-6 items-center justify-between py-2">
                <div className="flex-1 space-y-3 sm:space-y-4">
                  <div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-valence-cream">{slide.title}</h2>
                    <p className="text-xs sm:text-sm md:text-base text-valence-gold-light font-serif mt-0.5 sm:mt-1">{slide.headline}</p>
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    {slide.points.map((pt, i) => (
                      <div key={i} className="bg-valence-forest/40 p-2.5 sm:p-3.5 rounded-xl border border-valence-gold/20">
                        <h4 className="font-serif text-sm sm:text-base text-valence-gold font-semibold">{pt.title}</h4>
                        <p className="text-[11px] sm:text-xs text-valence-cream/70 mt-0.5 sm:mt-1 leading-relaxed">{pt.text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-1 sm:pt-2">
                    {slide.allocationLevers.map((lev, i) => (
                      <div key={i} className="bg-valence-deep p-2 sm:p-2.5 rounded-lg border border-valence-gold/20">
                        <div className="text-[11px] sm:text-xs font-serif text-valence-gold font-bold">{lev.title}</div>
                        <div className="text-[9px] sm:text-[10px] text-valence-cream/60 mt-0.5 sm:mt-1 leading-normal">{lev.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full md:w-5/12 flex flex-col items-center">
                  <div 
                    className="relative group cursor-pointer overflow-hidden rounded-xl border border-valence-gold/40 shadow-2xl w-full"
                    onClick={() => onOpenLightbox(slide.images[0])}
                  >
                    <img src={slide.images[0].url} alt={slide.images[0].alt} className="w-full h-56 sm:h-64 md:h-80 object-cover rounded-xl group-hover:scale-105 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3 sm:p-4">
                      <div className="flex items-center justify-between w-full">
                        <span className="text-[11px] sm:text-xs text-valence-cream font-serif">{slide.images[0].caption}</span>
                        <ZoomIn className="w-4 h-4 text-valence-gold" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SLIDE 12: FECHAMENTO */}
            {slide.id === 12 && (
              <div className="h-full flex flex-col items-center justify-center text-center py-4 space-y-4 sm:space-y-5">
                <img src="/assets/Valence-logo-branco.png" alt="Valence Logo" className="h-10 sm:h-14 w-auto" />
                
                <div className="max-w-2xl space-y-2 sm:space-y-3 px-2">
                  <h2 className="text-xl sm:text-3xl md:text-4xl font-serif text-valence-cream leading-snug">
                    {slide.headline}
                  </h2>
                  <p className="text-xs sm:text-sm text-valence-gold-light font-serif">
                    {slide.title}
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-2">
                  {slide.socials.map((soc, i) => (
                    <a
                      key={i}
                      href={soc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-valence-forest/50 hover:bg-valence-gold/20 border border-valence-gold/30 text-[11px] sm:text-xs font-sans text-valence-gold transition-colors"
                    >
                      <span className="text-valence-cream/60">{soc.label}:</span>
                      <span className="font-semibold">{soc.handle}</span>
                    </a>
                  ))}
                </div>

                <div className="pt-2">
                  <img src={slide.mark} alt="Valence Mark" className="h-6 sm:h-8 w-auto opacity-70 mx-auto" />
                </div>
              </div>
            )}

          </div>

          {/* Slide Footer with Source & Page Indicator */}
          <div className="border-t border-valence-gold/20 pt-2.5 mt-2.5 flex items-center justify-between text-[10px] sm:text-[11px] text-valence-cream/50 font-sans">
            <div className="truncate max-w-[200px] sm:max-w-none">{slide.source}</div>
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline">Navegue com [←] e [→]</span>
              <span className="sm:hidden">{slide.slideNum}/12</span>
            </div>
          </div>

        </div>
      </div>

      {/* Floating Bottom Navigation Controls */}
      <div className="bg-valence-emerald/95 backdrop-blur-md border-t border-valence-gold/20 px-3 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between max-w-6xl mx-auto w-full">
        <button
          onClick={() => setCurrentSlide(prev => Math.max(prev - 1, 0))}
          disabled={currentSlide === 0}
          className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-valence-deep text-valence-cream hover:text-valence-gold hover:bg-valence-forest disabled:opacity-30 disabled:pointer-events-none border border-valence-gold/20 text-xs transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden xs:inline">Anterior</span>
        </button>

        {/* Dots de navegação numerados */}
        <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto max-w-[65vw] py-1 px-1">
          {slides.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setCurrentSlide(idx)}
              className={`w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 rounded-full text-[10px] sm:text-[11px] font-sans font-medium flex items-center justify-center transition-all ${
                idx === currentSlide
                  ? 'bg-valence-gold text-valence-emerald font-bold scale-110 shadow-gold-glow'
                  : 'bg-valence-deep/80 text-valence-cream/60 hover:text-valence-gold hover:bg-valence-forest'
              }`}
              title={`Slide ${s.slideNum}: ${s.subtitle}`}
            >
              {s.id}
            </button>
          ))}
        </div>

        <button
          onClick={() => setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1))}
          disabled={currentSlide === slides.length - 1}
          className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-valence-deep text-valence-cream hover:text-valence-gold hover:bg-valence-forest disabled:opacity-30 disabled:pointer-events-none border border-valence-gold/20 text-xs transition-colors"
        >
          <span className="hidden xs:inline">Próximo</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
