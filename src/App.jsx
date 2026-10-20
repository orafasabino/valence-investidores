import React, { useState } from 'react';
import Header from './components/Header';
import SlideDeckView from './components/SlideDeckView';
import DossierView from './components/DossierView';
import Lightbox from './components/Lightbox';
import { slidesData } from './data/slidesData';

export default function App() {
  // 'dossier' is now the default view mode as requested
  const [viewMode, setViewMode] = useState('dossier'); // 'dossier' | 'presentation'
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lightboxImage, setLightboxImage] = useState(null);

  const handleJumpSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
    if (viewMode !== 'presentation') {
      setViewMode('presentation');
    }
  };

  return (
    <div className="min-h-screen bg-valence-emerald flex flex-col font-sans selection:bg-valence-gold selection:text-valence-emerald overflow-x-hidden">
      <Header
        viewMode={viewMode}
        setViewMode={setViewMode}
        currentSlide={currentSlide}
        totalSlides={slidesData.length}
        onJumpSlide={handleJumpSlide}
        slides={slidesData}
      />

      <main className="flex-1 w-full overflow-x-hidden">
        {viewMode === 'presentation' ? (
          <SlideDeckView
            slides={slidesData}
            currentSlide={currentSlide}
            setCurrentSlide={setCurrentSlide}
            onOpenLightbox={(img) => setLightboxImage(img)}
          />
        ) : (
          <DossierView
            slides={slidesData}
            onOpenLightbox={(img) => setLightboxImage(img)}
            onSwitchToPresentation={() => setViewMode('presentation')}
          />
        )}
      </main>

      <Lightbox
        image={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />
    </div>
  );
}
