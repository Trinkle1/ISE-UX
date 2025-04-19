import {
  Eye,
  Moon,
  PaintBucket,
  RotateCcw,
  Sun,
  Type,
  ZoomIn,
  ZoomOut
} from 'lucide-react';
import { useEffect, useState } from 'react';

export default function AccessibilityTools() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [isGrayscale, setIsGrayscale] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isNegativeContrast, setIsNegativeContrast] = useState(false);
  const [isLightBackground, setIsLightBackground] = useState(false);
  const [areLinksUnderlined, setAreLinksUnderlined] = useState(false);
  const [isReadableFont, setIsReadableFont] = useState(false);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
    document.documentElement.classList.toggle('grayscale', isGrayscale);
    document.documentElement.classList.toggle('high-contrast', isHighContrast);
    document.documentElement.classList.toggle('negative-contrast', isNegativeContrast);
    document.documentElement.classList.toggle('light-background', isLightBackground);
    document.documentElement.classList.toggle('links-underline', areLinksUnderlined);
    document.documentElement.classList.toggle('readable-font', isReadableFont);
  }, [
    fontSize, 
    isGrayscale, 
    isHighContrast, 
    isNegativeContrast, 
    isLightBackground, 
    areLinksUnderlined,
    isReadableFont
  ]);

  const resetAll = () => {
    setFontSize(100);
    setIsGrayscale(false);
    setIsHighContrast(false);
    setIsNegativeContrast(false);
    setIsLightBackground(false);
    setAreLinksUnderlined(false);
    setIsReadableFont(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-12 right-10 bg-burgundy-600 text-white p-1 rounded-full shadow-lg hover:bg-burgundy-700 transition-colors z-50"
        aria-label="Open Accessibility Tools"
      >
        <Eye className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-end p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-72 overflow-hidden">
            <div className="bg-burgundy-600 text-white px-4 py-3 flex justify-between items-center">
              <h2 className="text-lg font-semibold">Accessibility Tools</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200"
                aria-label="Close Accessibility Tools"
              >
                ×
              </button>
            </div>

            <div className="p-4 space-y-4">
              <button
                onClick={() => setFontSize(prev => Math.min(prev + 10, 200))}
                className="flex items-center space-x-3 w-full hover:bg-gray-100 p-2 rounded"
              >
                <ZoomIn className="w-5 h-5" />
                <span>Increase Text</span>
              </button>

              <button
                onClick={() => setFontSize(prev => Math.max(prev - 10, 50))}
                className="flex items-center space-x-3 w-full hover:bg-gray-100 p-2 rounded"
              >
                <ZoomOut className="w-5 h-5" />
                <span>Decrease Text</span>
              </button>

              <button
                onClick={() => setIsGrayscale(prev => !prev)}
                className={`flex items-center space-x-3 w-full hover:bg-gray-100 p-2 rounded ${isGrayscale ? 'bg-gray-200' : ''}`}
              >
                <PaintBucket className="w-5 h-5" />
                <span>Grayscale</span>
              </button>

              <button
                onClick={() => setIsHighContrast(prev => !prev)}
                className={`flex items-center space-x-3 w-full hover:bg-gray-100 p-2 rounded ${isHighContrast ? 'bg-gray-200' : ''}`}
              >
                <Sun className="w-5 h-5" />
                <span>High Contrast</span>
              </button>

              <button
                onClick={() => setIsNegativeContrast(prev => !prev)}
                className={`flex items-center space-x-3 w-full hover:bg-gray-100 p-2 rounded ${isNegativeContrast ? 'bg-gray-200' : ''}`}
              >
                <Moon className="w-5 h-5" />
                <span>Negative Contrast</span>
              </button>

              <button
                onClick={() => setIsLightBackground(prev => !prev)}
                className={`flex items-center space-x-3 w-full hover:bg-gray-100 p-2 rounded ${isLightBackground ? 'bg-gray-200' : ''}`}
              >
                <Sun className="w-5 h-5" />
                <span>Light Background</span>
              </button>
              <button
                onClick={() => setIsReadableFont(prev => !prev)}
                className={`flex items-center space-x-3 w-full hover:bg-gray-100 p-2 rounded ${isReadableFont ? 'bg-gray-200' : ''}`}
              >
                <Type className="w-5 h-5" />
                <span>Readable Font</span>
              </button>

              <button
                onClick={resetAll}
                className="flex items-center space-x-3 w-full hover:bg-gray-100 p-2 rounded text-gray-600"
              >
                <RotateCcw className="w-5 h-5" />
                <span>Reset</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
