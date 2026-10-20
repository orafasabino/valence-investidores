import React, { useState } from 'react';
import { 
  Sparkles, 
  TrendingUp, 
  ShieldCheck, 
  Gem, 
  Award, 
  Share2, 
  ArrowRight, 
  CheckCircle2, 
  ZoomIn, 
  ExternalLink,
  ChevronRight,
  ChevronDown,
  Clock,
  Layers,
  HeartHandshake,
  BarChart3,
  Users,
  Compass,
  Camera,
  PackageCheck,
  Menu,
  X
} from 'lucide-react';
import { photoShoots } from '../data/slidesData';

export default function DossierView({ slides, onOpenLightbox, onSwitchToPresentation }) {
  const [galleryFilter, setGalleryFilter] = useState('all'); // 'all' | 'museu' | 'unboxing'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const allPhotos = [
    ...photoShoots.unboxing.map(p => ({ ...p, shoot: 'unboxing' })),
    ...photoShoots.museuIpiranga.map(p => ({ ...p, shoot: 'museu' }))
  ];

  const filteredPhotos = galleryFilter === 'all' 
    ? allPhotos 
    : allPhotos.filter(p => p.shoot === galleryFilter);

  const sectionsList = [
    { id: 'capa', label: '01. Capa' },
    { id: 'ato-1', label: '02. Origem (Ato I)' },
    { id: 'ato-2', label: '03. Metamorfose' },
    { id: 'brand-equity', label: '04. Unboxing' },
    { id: 'galeria-ensaios', label: '📷 Ensaios Reais', highlight: true },
    { id: 'ecossistema', label: '05. Ecossistema' },
    { id: 'tracao', label: '06. Tração' },
    { id: 'founder-led', label: '07. Founder-Led' },
    { id: 'ato-3', label: '08. Espanha (Ato III)' },
    { id: 'trajetoria', label: '09. Trajetória' },
    { id: 'modelo-negocios', label: '10. Negócios' },
    { id: 'tese', label: '11. Tese Investidores' }
  ];

  return (
    <div className="min-h-screen bg-[#081B12] text-valence-cream font-sans selection:bg-valence-gold selection:text-valence-emerald overflow-x-hidden">
      
      {/* Editorial Subnav / Section Index - SEM ROLAGEM LATERAL */}
      <nav className="sticky top-[53px] sm:top-[61px] z-30 bg-valence-emerald/95 backdrop-blur-md border-b border-valence-gold/20 shadow-md">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2">
          
          {/* Versão Desktop / Tablet: Flex Wrap organizado, sem overflow horizontal */}
          <div className="hidden lg:flex flex-wrap items-center justify-between gap-1 text-[11px] xl:text-xs">
            <span className="text-valence-gold font-serif font-bold uppercase tracking-wider flex items-center gap-1 mr-1">
              <Compass className="w-3.5 h-3.5" /> Sumário:
            </span>
            {sectionsList.map((sec) => (
              <a 
                key={sec.id}
                href={`#${sec.id}`}
                className={`px-2 py-1 rounded-md transition-colors ${
                  sec.highlight 
                    ? 'bg-valence-gold/20 text-valence-gold font-semibold border border-valence-gold/30 hover:bg-valence-gold/30'
                    : 'text-valence-cream/75 hover:text-valence-gold hover:bg-valence-forest/30'
                }`}
              >
                {sec.label}
              </a>
            ))}
          </div>

          {/* Versão Mobile / Tablet Pequeno: Barra de Navegação Compacta e Sem Rolagem Lateral */}
          <div className="lg:hidden flex items-center justify-between gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-valence-deep border border-valence-gold/30 text-xs font-medium text-valence-gold hover:bg-valence-forest transition-colors"
              aria-expanded={mobileMenuOpen}
            >
              <Compass className="w-4 h-4" />
              <span>Sumário do Dossiê</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Atalhos rápidos para seções mais visitadas no mobile */}
            <div className="flex items-center gap-1.5 text-[11px]">
              <a 
                href="#brand-equity" 
                className="px-2 py-1 rounded bg-valence-forest/40 text-valence-cream/80 hover:text-valence-gold border border-valence-gold/15"
              >
                Unboxing
              </a>
              <a 
                href="#galeria-ensaios" 
                className="px-2 py-1 rounded bg-valence-gold/15 text-valence-gold font-medium border border-valence-gold/30"
              >
                📷 Fotos
              </a>
              <a 
                href="#tese" 
                className="px-2 py-1 rounded bg-valence-forest/40 text-valence-cream/80 hover:text-valence-gold border border-valence-gold/15"
              >
                Tese
              </a>
            </div>
          </div>

          {/* Dropdown Acordeão Mobile ao Clicar no Sumário */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-2 pt-2 border-t border-valence-gold/20 grid grid-cols-2 sm:grid-cols-3 gap-1.5 pb-2 animate-fadeIn">
              {sectionsList.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-2.5 py-1.5 rounded text-xs transition-colors block text-center truncate ${
                    sec.highlight
                      ? 'bg-valence-gold/20 text-valence-gold font-bold border border-valence-gold/40'
                      : 'bg-valence-deep/80 text-valence-cream/80 hover:text-valence-gold hover:bg-valence-forest'
                  }`}
                >
                  {sec.label}
                </a>
              ))}
            </div>
          )}

        </div>
      </nav>

      {/* Conteúdo Principal do Dossiê */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-16 sm:space-y-24">

        {/* 01. CAPA / PRIMEIRA DOBRA COM A CAIXA RECORTADA E CENTRALIZADA */}
        <section id="capa" className="relative pt-2 sm:pt-6 pb-8 sm:pb-12 border-b border-valence-gold/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-valence-gold/15 border border-valence-gold/30 text-xs text-valence-gold font-sans font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Mémorando de Investimento & Reposicionamento</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-valence-cream leading-[1.15] tracking-tight">
                VALENCE JOIAS
              </h1>

              <p className="text-xl sm:text-2xl lg:text-3xl font-serif text-valence-gold leading-snug">
                Da consolidação nativa digital à Alta Joalheria com ouro e diamantes importados.
              </p>

              <p className="text-sm sm:text-base text-valence-cream/80 font-sans leading-relaxed max-w-2xl">
                Apresentação executiva e tese estratégica de expansão de marca para atração de capital inteligente e consolidação no mercado de luxo internacional, unindo manufatura europeia, aquisição proprietária Founder-Led e alto valor patrimonial.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={onSwitchToPresentation}
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-valence-gold hover:bg-valence-gold-light text-valence-emerald font-bold text-xs sm:text-sm transition-all shadow-gold-glow"
                >
                  <span>Abrir no Modo Slides (16:9)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#galeria-ensaios"
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-valence-deep hover:bg-valence-forest text-valence-cream border border-valence-gold/30 text-xs sm:text-sm font-medium transition-colors"
                >
                  <Camera className="w-4 h-4 text-valence-gold" />
                  <span>Ver Fotos dos Ensaios Oficiais</span>
                </a>
              </div>

              {/* Highlights Cards Responsivos */}
              <div className="grid grid-cols-2 gap-3 sm:gap-6 pt-4 sm:pt-6 border-t border-valence-gold/20">
                <div className="bg-valence-deep/70 p-3 sm:p-4 rounded-xl border border-valence-gold/20 text-center sm:text-left">
                  <div className="text-[10px] sm:text-xs text-valence-gold uppercase tracking-wider font-semibold">Tração desde</div>
                  <div className="text-2xl sm:text-3xl font-serif text-valence-cream font-bold mt-0.5 sm:mt-1">2019</div>
                  <div className="text-[11px] sm:text-xs text-valence-cream/60 mt-0.5 truncate">Fundada como Sra. da Prata</div>
                </div>

                <div className="bg-valence-deep/70 p-3 sm:p-4 rounded-xl border border-valence-gold/20 text-center sm:text-left">
                  <div className="text-[10px] sm:text-xs text-valence-gold uppercase tracking-wider font-semibold">Comunidade</div>
                  <div className="text-2xl sm:text-3xl font-serif text-valence-cream font-bold mt-0.5 sm:mt-1">18.8k+</div>
                  <div className="text-[11px] sm:text-xs text-valence-cream/60 mt-0.5 truncate">Seguidores no ecossistema</div>
                </div>
              </div>
            </div>

            {/* FOTO DA PRIMEIRA DOBRA: D10D RECORTADA COM A CAIXA RIGOROSAMENTE CENTRALIZADA */}
            <div className="lg:col-span-5 flex justify-center">
              <div 
                className="relative group cursor-pointer overflow-hidden rounded-2xl border-2 border-valence-gold/40 shadow-2xl max-w-sm sm:max-w-md w-full"
                onClick={() => onOpenLightbox({ 
                  url: "/assets/d10d-unboxing-hero.jpg", 
                  caption: "Caixa Gaveta Valence Joias em Verde Esmeralda (Ensaio Oficial)" 
                })}
              >
                <img 
                  src="/assets/d10d-unboxing-hero.jpg" 
                  alt="Caixa Gaveta Valence Joias em Verde Esmeralda" 
                  className="w-full h-auto aspect-[4/5] object-cover object-center rounded-2xl transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-4 sm:p-6">
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <span className="text-[10px] sm:text-xs uppercase tracking-widest text-valence-gold font-sans font-semibold">
                        Ensaio Real de Unboxing
                      </span>
                      <h3 className="text-sm sm:text-base font-serif text-valence-cream mt-0.5">
                        Caixa Gaveta Valence em Verde Esmeralda
                      </h3>
                      <span className="text-[11px] sm:text-xs text-valence-cream/70">
                        Acabamento rígido com puxador em gorgurão
                      </span>
                    </div>
                    <div className="p-2 sm:p-2.5 rounded-full bg-valence-gold/20 text-valence-gold border border-valence-gold/40 group-hover:bg-valence-gold group-hover:text-valence-emerald transition-colors">
                      <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 02. ATO I: ORIGEM E VALIDAÇÃO */}
        <section id="ato-1" className="space-y-6 sm:space-y-8 scroll-mt-28">
          <div className="border-l-4 border-valence-gold pl-3 sm:pl-4">
            <span className="text-[11px] sm:text-xs uppercase tracking-widest text-valence-gold font-sans font-semibold">
              02 | ATO I — ORIGEM E VALIDAÇÃO DE MERCADO (2019–2021)
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-valence-cream mt-1">
              Nascida em 2019 como Sra. da Prata, a marca validou forte demanda e desejo orgânico
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {slides[1].points.map((pt, i) => (
              <div key={i} className="card-luxury p-5 sm:p-6 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-full bg-valence-gold/20 text-valence-gold flex items-center justify-center font-serif font-bold text-sm mb-3 border border-valence-gold/40">
                    {pt.num}
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl text-valence-cream font-semibold mb-2 sm:mb-3">
                    {pt.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-valence-cream/70 leading-relaxed font-sans">
                    {pt.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Metrics & Historical Prints */}
          <div className="bg-valence-deep/50 p-4 sm:p-6 rounded-2xl border border-valence-gold/20 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {slides[1].metrics.map((m, i) => (
                <div key={i} className="bg-valence-emerald/80 p-3 sm:p-4 rounded-xl border border-valence-gold/20 text-center">
                  <div className="text-2xl sm:text-3xl font-serif text-valence-gold font-bold">{m.value}</div>
                  <div className="text-[11px] sm:text-xs uppercase tracking-wider text-valence-cream font-semibold mt-1">{m.unit}</div>
                  <div className="text-[10px] sm:text-xs text-valence-cream/60 mt-1">{m.sub}</div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-5 flex items-center justify-center gap-3 sm:gap-4">
              {slides[1].images.map((img, i) => (
                <div 
                  key={i}
                  className="relative group cursor-pointer rounded-xl overflow-hidden border border-valence-gold/30 shadow-lg w-1/2 h-36 sm:h-44"
                  onClick={() => onOpenLightbox(img)}
                >
                  <img src={img.url} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-5 h-5 text-valence-gold" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-[11px] sm:text-xs text-valence-cream/40 italic">{slides[1].source}</div>
        </section>

        {/* 03. ATO II: METAMORFOSE PARA VALENCE JOIAS */}
        <section id="ato-2" className="space-y-6 sm:space-y-8 scroll-mt-28">
          <div className="border-l-4 border-valence-gold pl-3 sm:pl-4">
            <span className="text-[11px] sm:text-xs uppercase tracking-widest text-valence-gold font-sans font-semibold">
              03 | ATO II — METAMORFOSE PARA VALENCE JOIAS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-valence-cream mt-1">
              O rebranding de 2022 uniu bravura e sofisticação clássica
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              {slides[2].points.map((pt, i) => (
                <div key={i} className="card-luxury p-4 sm:p-5 rounded-xl">
                  <h3 className="font-serif text-base sm:text-lg text-valence-gold font-semibold flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-valence-gold/20 text-valence-gold flex items-center justify-center text-xs font-serif font-bold">
                      {pt.num}
                    </span>
                    {pt.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-valence-cream/80 mt-1.5 leading-relaxed pl-9">
                    {pt.text}
                  </p>
                </div>
              ))}

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-2">
                {slides[2].designPillars.map((dp, i) => (
                  <div key={i} className="bg-valence-deep p-3.5 sm:p-4 rounded-xl border border-valence-gold/20">
                    <div className="text-xs font-mono text-valence-gold tracking-widest">{dp.hex}</div>
                    <div className="text-sm sm:text-base font-serif text-valence-cream font-bold mt-1">{dp.title}</div>
                    <div className="text-[11px] sm:text-xs text-valence-cream/60 mt-1 leading-normal">{dp.meaning}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div 
                className="relative group cursor-pointer overflow-hidden rounded-2xl border border-valence-gold/40 shadow-2xl w-full max-w-md"
                onClick={() => onOpenLightbox(slides[2].images[0])}
              >
                <img 
                  src={slides[2].images[0].url} 
                  alt={slides[2].images[0].alt} 
                  className="w-full h-auto object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <div className="flex items-center justify-between w-full">
                    <span className="text-xs text-valence-cream font-serif">{slides[2].images[0].caption}</span>
                    <ZoomIn className="w-4 h-4 text-valence-gold" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-[11px] sm:text-xs text-valence-cream/40 italic">{slides[2].source}</div>
        </section>

        {/* 04. BRAND EQUITY: UNBOXING REAL E TANGIBILIZAÇÃO */}
        <section id="brand-equity" className="space-y-6 sm:space-y-8 scroll-mt-28">
          <div className="border-l-4 border-valence-gold pl-3 sm:pl-4">
            <span className="text-[11px] sm:text-xs uppercase tracking-widest text-valence-gold font-sans font-semibold">
              04 | BRAND EQUITY — TANGIBILIZAÇÃO DO LUXO & UNBOXING REAL
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-valence-cream mt-1">
              Cada ponto de contato foi desenhado para transformar a entrega em um ritual sensorial
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {slides[3].unboxingCards.map((card, i) => (
              <div key={i} className="card-luxury rounded-2xl overflow-hidden flex flex-col justify-between">
                <div>
                  <div 
                    className="relative h-56 sm:h-64 group cursor-pointer overflow-hidden border-b border-valence-gold/20"
                    onClick={() => onOpenLightbox({ url: card.img, caption: card.title })}
                  >
                    <img src={card.img} alt={card.title} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform" />
                    <div className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-valence-gold opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                    <span className="absolute bottom-3 left-3 px-3 py-1 rounded text-xs font-sans font-semibold bg-valence-deep/95 text-valence-gold border border-valence-gold/40 shadow-md">
                      {card.tag}
                    </span>
                  </div>

                  <div className="p-4 sm:p-6">
                    <h3 className="font-serif text-lg sm:text-xl text-valence-cream font-bold">{card.title}</h3>
                    <p className="text-xs sm:text-sm text-valence-cream/70 mt-2 leading-relaxed">{card.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-[11px] sm:text-xs text-valence-cream/40 italic">{slides[3].source}</div>
        </section>

        {/* NOVA SEÇÃO: GALERIA COMPLETA DOS DOIS ENSAIOS */}
        <section id="galeria-ensaios" className="bg-valence-deep/60 border border-valence-gold/30 rounded-3xl p-4 sm:p-8 lg:p-10 space-y-6 sm:space-y-8 scroll-mt-28 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-valence-gold/20 pb-5 sm:pb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-valence-gold/15 border border-valence-gold/30 text-xs text-valence-gold font-sans font-semibold uppercase mb-2">
                <Camera className="w-3.5 h-3.5" /> Acervo Visual de Alto Padrão
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-valence-cream">
                Ensaios Oficiais da Marca
              </h2>
              <p className="text-xs sm:text-sm text-valence-cream/70 mt-1 max-w-2xl">
                Fotografias reais que comprovam a sofisticação da experiência física (Unboxing) e o padrão estético internacional (Ensaio Conceitual com Modelo no Museu do Ipiranga).
              </p>
            </div>

            {/* Filter Buttons com Flex Wrap sem scroll horizontal */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 bg-valence-emerald/80 p-1.5 rounded-xl border border-valence-gold/30">
              <button
                onClick={() => setGalleryFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  galleryFilter === 'all'
                    ? 'bg-valence-gold text-valence-emerald font-bold'
                    : 'text-valence-cream/70 hover:text-valence-gold'
                }`}
              >
                Todos ({allPhotos.length})
              </button>
              <button
                onClick={() => setGalleryFilter('unboxing')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  galleryFilter === 'unboxing'
                    ? 'bg-valence-gold text-valence-emerald font-bold'
                    : 'text-valence-cream/70 hover:text-valence-gold'
                }`}
              >
                Unboxing Real
              </button>
              <button
                onClick={() => setGalleryFilter('museu')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  galleryFilter === 'museu'
                    ? 'bg-valence-gold text-valence-emerald font-bold'
                    : 'text-valence-cream/70 hover:text-valence-gold'
                }`}
              >
                Museu Ipiranga (Modelo)
              </button>
            </div>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
            {filteredPhotos.map((photo, i) => (
              <div
                key={i}
                className="group relative bg-valence-emerald/80 rounded-2xl overflow-hidden border border-valence-gold/25 shadow-lg cursor-pointer flex flex-col justify-between hover:border-valence-gold/60 transition-all hover:-translate-y-1"
                onClick={() => onOpenLightbox({ url: photo.url, caption: `${photo.title} — ${photo.category}` })}
              >
                <div className="relative h-56 sm:h-60 overflow-hidden">
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded text-[10px] font-sans font-bold bg-valence-deep/90 text-valence-gold border border-valence-gold/30">
                    {photo.category}
                  </div>

                  <div className="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 text-valence-gold opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-serif text-sm sm:text-base text-valence-cream font-semibold group-hover:text-valence-gold transition-colors">
                      {photo.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-valence-cream/65 mt-1 line-clamp-2 leading-relaxed">
                      {photo.description}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-valence-gold/15 flex items-center justify-between text-[11px] text-valence-gold font-medium">
                    <span>Clique para ampliar</span>
                    <ZoomIn className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 05. ECOSSISTEMA DIGITAL */}
        <section id="ecossistema" className="space-y-6 sm:space-y-8 scroll-mt-28">
          <div className="border-l-4 border-valence-gold pl-3 sm:pl-4">
            <span className="text-[11px] sm:text-xs uppercase tracking-widest text-valence-gold font-sans font-semibold">
              05 | ECOSSISTEMA DIGITAL (@VALENCEJOIAS)
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-valence-cream mt-1">
              Vitrine digital coesa que inspira desejo em 18,8 mil seguidores
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              {slides[4].points.map((pt, i) => (
                <div key={i} className="card-luxury p-4 sm:p-5 rounded-xl">
                  <h3 className="font-serif text-base sm:text-lg text-valence-gold font-semibold">{pt.title}</h3>
                  <p className="text-xs sm:text-sm text-valence-cream/80 mt-1 leading-relaxed">{pt.text}</p>
                </div>
              ))}

              <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-2">
                {slides[4].metrics.map((m, i) => (
                  <div key={i} className="bg-valence-deep p-3 sm:p-4 rounded-xl border border-valence-gold/20 text-center">
                    <div className="text-xl sm:text-2xl font-serif text-valence-gold font-bold">{m.value}</div>
                    <div className="text-[11px] sm:text-xs text-valence-cream font-medium mt-1">{m.unit}</div>
                    <div className="text-[9px] sm:text-[10px] text-valence-cream/60 mt-0.5">{m.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div 
                className="relative group cursor-pointer overflow-hidden rounded-2xl border border-valence-gold/40 shadow-2xl w-full max-w-md"
                onClick={() => onOpenLightbox(slides[4].images[0])}
              >
                <img src={slides[4].images[0].url} alt={slides[4].images[0].alt} className="w-full h-auto object-cover rounded-2xl group-hover:scale-105 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <div className="flex items-center justify-between w-full">
                    <span className="text-xs text-valence-cream font-serif">{slides[4].images[0].caption}</span>
                    <ZoomIn className="w-4 h-4 text-valence-gold" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-[11px] sm:text-xs text-valence-cream/40 italic">{slides[4].source}</div>
        </section>

        {/* 06. TRAÇÃO COMPROVADA */}
        <section id="tracao" className="space-y-6 sm:space-y-8 scroll-mt-28">
          <div className="border-l-4 border-valence-gold pl-3 sm:pl-4">
            <span className="text-[11px] sm:text-xs uppercase tracking-widest text-valence-gold font-sans font-semibold">
              06 | TRAÇÃO COMPROVADA — PERFORMANCE DE CONTEÚDO E DESEJO PELO OURO
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-valence-cream mt-1">
              O relançamento alcançou 46 mil visualizações e 7,8 mil interações em um único Reel
            </h2>
          </div>

          {/* Metric Grid Responsivo */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {slides[5].metrics.map((m, i) => (
              <div key={i} className="card-luxury p-4 sm:p-6 rounded-2xl text-center border-t-4 border-t-valence-gold">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-serif text-valence-gold font-bold">{m.value}</div>
                <div className="text-[11px] sm:text-xs font-semibold text-valence-cream uppercase tracking-wider mt-1.5 sm:mt-2">{m.unit}</div>
                <div className="text-[10px] sm:text-xs text-valence-cream/60 mt-0.5 sm:mt-1">{m.sub}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            <div className="lg:col-span-7 space-y-3 sm:space-y-4">
              {slides[5].points.map((pt, i) => (
                <div key={i} className="bg-valence-deep/70 p-4 sm:p-5 rounded-xl border border-valence-gold/20">
                  <h3 className="font-serif text-base sm:text-lg text-valence-gold font-semibold">{pt.title}</h3>
                  <p className="text-xs sm:text-sm text-valence-cream/80 mt-1 leading-relaxed">{pt.text}</p>
                </div>
              ))}
            </div>

            <div className="lg:col-span-5 flex gap-3 sm:gap-4 justify-center">
              {slides[5].images.map((img, i) => (
                <div 
                  key={i}
                  className="relative group cursor-pointer rounded-xl overflow-hidden border border-valence-gold/30 shadow-lg w-1/2 h-52 sm:h-64"
                  onClick={() => onOpenLightbox(img)}
                >
                  <img src={img.url} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-5 h-5 text-valence-gold" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-[11px] sm:text-xs text-valence-cream/40 italic">{slides[5].source}</div>
        </section>

        {/* 07. FOUNDER-LED GROWTH */}
        <section id="founder-led" className="space-y-6 sm:space-y-8 scroll-mt-28">
          <div className="border-l-4 border-valence-gold pl-3 sm:pl-4">
            <span className="text-[11px] sm:text-xs uppercase tracking-widest text-valence-gold font-sans font-semibold">
              07 | VANTAGEM COMPETITIVA — ESTRATÉGIA FOUNDER-LED GROWTH (VALENTIN JESSI)
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-valence-cream mt-1">
              A fundadora Jessica impulsiona a marca com 175,8 mil views mensais e 71,9% em Stories
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {slides[6].metrics.map((m, i) => (
              <div key={i} className="bg-valence-forest/50 p-3.5 sm:p-5 rounded-2xl border border-valence-gold/30 text-center">
                <div className="text-2xl sm:text-3xl font-serif text-valence-gold font-bold">{m.value}</div>
                <div className="text-[11px] sm:text-xs text-valence-cream font-medium mt-1">{m.unit}</div>
                <div className="text-[9px] sm:text-xs text-valence-cream/60 mt-0.5">{m.sub}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            <div className="lg:col-span-5">
              <div className="card-luxury p-5 sm:p-6 rounded-2xl border-valence-gold/40 space-y-3 sm:space-y-4">
                <div className="inline-block px-3 py-1 rounded text-xs font-sans font-bold bg-valence-gold/20 text-valence-gold uppercase">
                  {slides[6].founderDetails.role}
                </div>
                <h3 className="text-xl sm:text-2xl font-serif text-valence-cream font-bold">{slides[6].founderDetails.name}</h3>
                <p className="text-xs sm:text-sm text-valence-cream/80 leading-relaxed">{slides[6].founderDetails.bio}</p>
                <div className="pt-3 border-t border-valence-gold/20">
                  <p className="text-xs text-valence-gold font-serif italic">
                    {slides[6].founderDetails.advantage}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-3 sm:space-y-4">
              {slides[6].points.map((pt, i) => (
                <div key={i} className="bg-valence-deep/70 p-4 sm:p-5 rounded-xl border border-valence-gold/20">
                  <h3 className="font-serif text-base sm:text-lg text-valence-gold font-semibold">{pt.title}</h3>
                  <p className="text-xs sm:text-sm text-valence-cream/80 mt-1 leading-relaxed">{pt.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-[11px] sm:text-xs text-valence-cream/40 italic">{slides[6].source}</div>
        </section>

        {/* 08. ATO III: OURO, DIAMANTES E ESPANHA */}
        <section id="ato-3" className="space-y-6 sm:space-y-8 scroll-mt-28">
          <div className="border-l-4 border-valence-gold pl-3 sm:pl-4">
            <span className="text-[11px] sm:text-xs uppercase tracking-widest text-valence-gold font-sans font-semibold">
              08 | ATO III — OURO, DIAMANTES E ESPANHA
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-valence-cream mt-1">
              Reposicionamento para atuar na Alta Joalheria internacional
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              {slides[7].points.map((pt, i) => (
                <div key={i} className="card-luxury p-4 sm:p-5 rounded-xl">
                  <h3 className="font-serif text-base sm:text-lg text-valence-gold font-semibold">{pt.title}</h3>
                  <p className="text-xs sm:text-sm text-valence-cream/80 mt-1 leading-relaxed">{pt.text}</p>
                </div>
              ))}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2">
                {slides[7].strategicPillars.map((p, i) => (
                  <div key={i} className="bg-valence-deep p-3.5 sm:p-4 rounded-xl border border-valence-gold/20">
                    <div className="text-xs sm:text-sm font-serif text-valence-gold font-bold flex items-center gap-2">
                      <Gem className="w-4 h-4 text-valence-gold" />
                      {p.title}
                    </div>
                    <div className="text-xs text-valence-cream/70 mt-1 leading-relaxed">{p.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div 
                className="relative group cursor-pointer overflow-hidden rounded-2xl border border-valence-gold/40 shadow-2xl w-full max-w-md"
                onClick={() => onOpenLightbox(slides[7].images[0])}
              >
                <img src={slides[7].images[0].url} alt={slides[7].images[0].alt} className="w-full h-auto object-cover rounded-2xl group-hover:scale-105 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <div className="flex items-center justify-between w-full">
                    <span className="text-xs text-valence-cream font-serif">{slides[7].images[0].caption}</span>
                    <ZoomIn className="w-4 h-4 text-valence-gold" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-[11px] sm:text-xs text-valence-cream/40 italic">{slides[7].source}</div>
        </section>

        {/* 09. TRAJETÓRIA EVOLUTIVA */}
        <section id="trajetoria" className="space-y-6 sm:space-y-8 scroll-mt-28">
          <div className="border-l-4 border-valence-gold pl-3 sm:pl-4">
            <span className="text-[11px] sm:text-xs uppercase tracking-widest text-valence-gold font-sans font-semibold">
              09 | TRAJETÓRIA EVOLUTIVA — DA VALIDAÇÃO DIGITAL À MANUFATURA EUROPEIA
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-valence-cream mt-1">
              Três ciclos de maturação que pavimentam a ascensão segura à Alta Joalheria
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {slides[8].phases.map((ph, i) => (
              <div 
                key={i} 
                className={`card-luxury rounded-2xl p-5 sm:p-6 flex flex-col justify-between ${
                  ph.color === 'gold' ? 'border-valence-gold shadow-gold-glow' : 'border-valence-gold/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-valence-gold tracking-widest">{ph.phase}</span>
                    <span className="px-2.5 sm:px-3 py-1 rounded text-xs font-sans font-semibold bg-valence-gold/15 text-valence-gold border border-valence-gold/30">
                      {ph.period}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif text-valence-cream font-bold">{ph.name}</h3>
                  <p className="text-xs text-valence-gold-light font-sans font-medium mt-1">{ph.badge}</p>

                  <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 pt-3 sm:pt-4 border-t border-valence-gold/20">
                    {ph.items.map((item, idx) => (
                      <div key={idx} className="text-xs">
                        <span className="text-valence-gold font-semibold block text-xs sm:text-sm">{item.label}:</span>
                        <span className="text-valence-cream/70 leading-relaxed mt-0.5 block">{item.val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-[11px] sm:text-xs text-valence-cream/40 italic">{slides[8].source}</div>
        </section>

        {/* 10. ARQUITETURA DO MODELO DE NEGÓCIOS */}
        <section id="modelo-negocios" className="space-y-6 sm:space-y-8 scroll-mt-28">
          <div className="border-l-4 border-valence-gold pl-3 sm:pl-4">
            <span className="text-[11px] sm:text-xs uppercase tracking-widest text-valence-gold font-sans font-semibold">
              10 | ARQUITETURA DO MODELO DE NEGÓCIOS — COMO A VALENCE GERA E CAPTURA VALOR
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-valence-cream mt-1">
              Um modelo de negócios que une manufatura espanhola, venda consultiva e baixo CAC
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {slides[9].columns.map((col, i) => (
              <div key={i} className="card-luxury p-5 sm:p-6 rounded-2xl flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg sm:text-xl text-valence-gold font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-valence-gold flex-shrink-0" />
                    {col.pillar}
                  </h3>
                  
                  <div className="mt-4 space-y-3">
                    <div className="bg-valence-deep/80 p-3 sm:p-4 rounded-xl border border-valence-gold/15">
                      <span className="text-[11px] sm:text-xs uppercase tracking-wider text-valence-gold block font-sans font-semibold">
                        Operação na Nova Fase (Alta Joalheria):
                      </span>
                      <p className="text-xs text-valence-cream/80 mt-1 leading-relaxed">{col.operation}</p>
                    </div>

                    <div className="bg-valence-forest/50 p-3 sm:p-4 rounded-xl border border-valence-gold/15">
                      <span className="text-[11px] sm:text-xs uppercase tracking-wider text-valence-gold block font-sans font-semibold">
                        Impacto Econômico & Vantagem Competitiva:
                      </span>
                      <p className="text-xs text-valence-gold-light mt-1 leading-relaxed">{col.impact}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-[11px] sm:text-xs text-valence-cream/40 italic">{slides[9].source}</div>
        </section>

        {/* 11. TESE PARA INVESTIDORES */}
        <section id="tese" className="space-y-6 sm:space-y-8 scroll-mt-28">
          <div className="border-l-4 border-valence-gold pl-3 sm:pl-4">
            <span className="text-[11px] sm:text-xs uppercase tracking-widest text-valence-gold font-sans font-semibold">
              11 | TESE PARA INVESTIDORES — ESTRUTURA ABERTA
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-valence-cream mt-1">
              Visão de negócios focada na geração de valor sustentável
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              {slides[10].points.map((pt, i) => (
                <div key={i} className="card-luxury p-4 sm:p-5 rounded-xl">
                  <h3 className="font-serif text-base sm:text-lg text-valence-gold font-semibold">{pt.title}</h3>
                  <p className="text-xs sm:text-sm text-valence-cream/80 mt-1 leading-relaxed">{pt.text}</p>
                </div>
              ))}

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-2">
                {slides[10].allocationLevers.map((lev, i) => (
                  <div key={i} className="bg-valence-deep p-3.5 sm:p-4 rounded-xl border border-valence-gold/20">
                    <div className="text-xs sm:text-sm font-serif text-valence-gold font-bold">{lev.title}</div>
                    <div className="text-[11px] sm:text-xs text-valence-cream/70 mt-1 leading-normal">{lev.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div 
                className="relative group cursor-pointer overflow-hidden rounded-2xl border border-valence-gold/40 shadow-2xl w-full max-w-md"
                onClick={() => onOpenLightbox(slides[10].images[0])}
              >
                <img src={slides[10].images[0].url} alt={slides[10].images[0].alt} className="w-full h-auto object-cover rounded-2xl group-hover:scale-105 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <div className="flex items-center justify-between w-full">
                    <span className="text-xs text-valence-cream font-serif">{slides[10].images[0].caption}</span>
                    <ZoomIn className="w-4 h-4 text-valence-gold" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-[11px] sm:text-xs text-valence-cream/40 italic">{slides[10].source}</div>
        </section>

        {/* 12. FECHAMENTO & CONTATO COM FOTO DE ENCERRAMENTO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-valence-deep via-[#0c2a1d] to-[#071911] border border-valence-gold/30 rounded-3xl p-6 sm:p-10 lg:p-14 text-center space-y-6 sm:space-y-8 shadow-2xl">
          
          <img src="/assets/Valence-logo-branco.png" alt="Valence Logo" className="h-12 sm:h-16 w-auto mx-auto" />

          <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif text-valence-cream leading-tight">
              "A valentia de uma história construída desde 2019, agora lapidada na Alta Joalheria internacional."
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-valence-gold font-serif">
              VALENCE JOIAS — REPOSICIONAMENTO, PRODUÇÃO ESPANHOLA & VISÃO DE NEGÓCIOS
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
            {slides[11].socials.map((soc, i) => (
              <a
                key={i}
                href={soc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-valence-forest/50 hover:bg-valence-gold/20 border border-valence-gold/30 text-xs font-sans text-valence-gold transition-colors"
              >
                <span className="text-valence-cream/70">{soc.label}:</span>
                <span className="font-semibold">{soc.handle}</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-valence-gold/20 flex flex-col sm:flex-row items-center justify-between text-xs text-valence-cream/50 max-w-4xl mx-auto gap-4">
            <div>{slides[11].source}</div>
            <div className="flex items-center gap-4">
              <button 
                onClick={onSwitchToPresentation}
                className="text-valence-gold hover:underline flex items-center gap-1 font-medium"
              >
                <span>Ir para o Modo Slides (16:9)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
