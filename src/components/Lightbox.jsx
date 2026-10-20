import React from 'react';
import { X, ZoomIn } from 'lucide-react';

export default function Lightbox({ image, onClose }) {
  if (!image) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative max-w-5xl max-h-[90vh] flex flex-col items-center bg-valence-deep border border-valence-gold/40 rounded-xl p-4 overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-valence-emerald/80 text-valence-cream hover:text-valence-gold hover:bg-valence-forest transition-colors border border-valence-gold/30"
          title="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-auto max-h-[75vh] flex items-center justify-center rounded-lg">
          <img 
            src={image.url} 
            alt={image.alt || 'Imagem ampliada'} 
            className="object-contain max-h-[75vh] w-auto rounded shadow-lg transition-transform duration-300 hover:scale-[1.02]"
          />
        </div>

        {image.caption && (
          <div className="mt-3 text-center">
            <p className="text-valence-gold font-serif text-lg tracking-wide">{image.caption}</p>
            {image.alt && image.alt !== image.caption && (
              <p className="text-xs text-valence-cream/60 mt-0.5">{image.alt}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
