import React from 'react';
import { Presentation, BookOpen, Maximize2, Minimize2, ExternalLink } from 'lucide-react';

export default function Header({ 
  viewMode, 
  setViewMode, 
  currentSlide, 
  totalSlides, 
  onJumpSlide, 
  slides 
}) {
  const [isFullscreen, setIsFullscreen] = React.useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(err);
      });
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-valence-emerald/95 backdrop-blur-md border-b border-valence-gold/20 shadow-lg px-3 sm:px-6 lg:px-8 py-2.5 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Brand Logo & Title */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <img 
            src="/assets/Valence-logo-branco.png" 
            alt="Valence Joias" 
            className="h-7 sm:h-9 w-auto object-contain cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => onJumpSlide(0)}
          />
          <div className="hidden md:block pl-3 border-l border-valence-gold/30">
            <span className="block text-xs uppercase tracking-widest text-valence-gold font-sans font-medium">
              Tese de Investimento
            </span>
            <span className="block text-[11px] text-valence-cream/60 tracking-wider">
              Alta Joalheria Internacional
            </span>
          </div>
        </div>

        {/* View Mode Toggle (Apresentação vs Dossiê) */}
        <div className="flex items-center bg-valence-deep/90 p-1 rounded-full border border-valence-gold/30 shadow-inner">
          <button
            onClick={() => setViewMode('dossier')}
            className={`flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
              viewMode === 'dossier'
                ? 'bg-valence-gold text-valence-emerald shadow-md font-bold'
                : 'text-valence-cream/70 hover:text-valence-gold'
            }`}
            title="Versão Editorial / Landing Page"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Editorial</span>
          </button>

          <button
            onClick={() => setViewMode('presentation')}
            className={`flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
              viewMode === 'presentation'
                ? 'bg-valence-gold text-valence-emerald shadow-md font-bold'
                : 'text-valence-cream/70 hover:text-valence-gold'
            }`}
            title="Versão Slides 16:9"
          >
            <Presentation className="w-3.5 h-3.5" />
            <span>Slides</span>
          </button>
        </div>

        {/* Quick Tools & Jump */}
        <div className="flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
          {viewMode === 'presentation' && (
            <div className="hidden lg:flex items-center gap-2 bg-valence-forest/50 px-3 py-1.5 rounded-lg border border-valence-gold/20 text-xs">
              <span className="text-valence-cream/60">Slide:</span>
              <select
                value={currentSlide}
                onChange={(e) => onJumpSlide(Number(e.target.value))}
                className="bg-transparent text-valence-gold font-medium outline-none cursor-pointer"
              >
                {slides.map((s, idx) => (
                  <option key={s.id} value={idx} className="bg-valence-deep text-valence-cream">
                    {s.slideNum} - {s.act} ({s.subtitle})
                  </option>
                ))}
              </select>
              <span className="text-valence-cream/40">/ {totalSlides}</span>
            </div>
          )}

          {/* Fullscreen Button */}
          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-lg bg-valence-forest/40 hover:bg-valence-forest text-valence-cream/80 hover:text-valence-gold border border-valence-gold/20 transition-colors"
            title={isFullscreen ? "Sair da Tela Cheia" : "Tela Cheia"}
            aria-label="Alternar tela cheia"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          {/* Instagram Link */}
          <a
            href="https://instagram.com/valencejoias"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-valence-gold/10 hover:bg-valence-gold/20 text-valence-gold border border-valence-gold/30 text-xs font-medium transition-colors"
          >
            <span>@valencejoias</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

      </div>
    </header>
  );
}
