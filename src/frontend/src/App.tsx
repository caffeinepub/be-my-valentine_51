import { useState, useEffect } from 'react';
import { ValentineLayout } from './features/valentine/components/ValentineLayout';
import { Page1, Page2, Page3, Page4, Page5 } from './features/valentine/ValentinePages';
import { AmbientLayer } from './features/valentine/components/AmbientLayer';
import { LoadingOverlay } from './features/valentine/components/LoadingOverlay';
import { MusicControls } from './features/valentine/components/MusicControls';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const nextPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      {showLoading && <LoadingOverlay />}
      <AmbientLayer />
      <ValentineLayout>
        <MusicControls />
        <div className="relative z-10">
          {currentPage === 1 && <Page1 onNext={() => nextPage(2)} />}
          {currentPage === 2 && <Page2 onNext={() => nextPage(3)} />}
          {currentPage === 3 && <Page3 onNext={() => nextPage(4)} />}
          {currentPage === 4 && <Page4 onNext={() => nextPage(5)} />}
          {currentPage === 5 && <Page5 />}
        </div>
      </ValentineLayout>
    </>
  );
}

export default App;
