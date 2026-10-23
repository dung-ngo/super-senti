import React from 'react';

interface MascotProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showDialogue?: boolean;
  dialogueText?: string;
  className?: string;
}

/**
 * Pixel-art animal mascot: "Pip" the Sentience Scout
 * An original pixel woodland companion representing non-human animals.
 */
export const PipAnimalMascot: React.FC<{ size?: 'sm' | 'md' | 'lg' | 'hero'; className?: string }> = ({
  size = 'md',
  className = '',
}) => {
  const dimMap = {
    sm: 'w-8 h-8',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
    hero: 'w-28 h-28 md:w-32 md:h-32',
  };

  return (
    <div
      className={`inline-flex items-center justify-center shrink-0 ${dimMap[size]} ${className}`}
      title="Pip — The Animal Welfare Mascot"
      role="img"
      aria-label="Pip the pixel animal scout mascot"
    >
      <svg
        viewBox="0 0 24 24"
        className="w-full h-full drop-shadow-sm"
        style={{ imageRendering: 'pixelated' }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outline / Base Shadows */}
        <rect x="5" y="2" width="4" height="6" fill="#1c1917" />
        <rect x="15" y="2" width="4" height="6" fill="#1c1917" />
        <rect x="4" y="6" width="16" height="12" fill="#1c1917" />
        <rect x="6" y="18" width="12" height="4" fill="#1c1917" />

        {/* Ear Fur Inner */}
        <rect x="6" y="3" width="2" height="4" fill="#fca5a5" />
        <rect x="16" y="3" width="2" height="4" fill="#fca5a5" />

        {/* Head Main Coat (Warm Tawny Amber) */}
        <rect x="5" y="7" width="14" height="10" fill="#ea580c" />
        <rect x="7" y="5" width="10" height="2" fill="#ea580c" />

        {/* Cheeks / Muzzle Cream */}
        <rect x="7" y="11" width="10" height="5" fill="#fef3c7" />
        <rect x="9" y="10" width="6" height="2" fill="#fef3c7" />

        {/* Pixel Eyes */}
        <rect x="7" y="9" width="2" height="2" fill="#1c1917" />
        <rect x="15" y="9" width="2" height="2" fill="#1c1917" />
        {/* Eye catchlights */}
        <rect x="7" y="9" width="1" height="1" fill="#ffffff" />
        <rect x="15" y="9" width="1" height="1" fill="#ffffff" />

        {/* Nose */}
        <rect x="11" y="11" width="2" height="1.5" fill="#1c1917" />

        {/* Scout Forest Bandana */}
        <rect x="6" y="16" width="12" height="2" fill="#1b4332" />
        <rect x="10" y="18" width="4" height="2" fill="#2d6a4f" />
        <rect x="11" y="20" width="2" height="1" fill="#40916c" />

        {/* Paws */}
        <rect x="7" y="19" width="3" height="2" fill="#fed7aa" />
        <rect x="14" y="19" width="3" height="2" fill="#fed7aa" />
      </svg>
    </div>
  );
};

/**
 * Pixel-art digital mind mascot: "Byte" the Synthetic Sentinel
 * An original pixel cyber-bot representing hypothetical digital minds.
 */
export const ByteRobotMascot: React.FC<{ size?: 'sm' | 'md' | 'lg' | 'hero'; className?: string }> = ({
  size = 'md',
  className = '',
}) => {
  const dimMap = {
    sm: 'w-8 h-8',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
    hero: 'w-28 h-28 md:w-32 md:h-32',
  };

  return (
    <div
      className={`inline-flex items-center justify-center shrink-0 ${dimMap[size]} ${className}`}
      title="Byte — The Digital Mind Mascot"
      role="img"
      aria-label="Byte the pixel digital mind mascot"
    >
      <svg
        viewBox="0 0 24 24"
        className="w-full h-full drop-shadow-sm"
        style={{ imageRendering: 'pixelated' }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Antenna Spark (Yellow/Gold pixel star) */}
        <rect x="11" y="1" width="2" height="2" fill="#facc15" />
        <rect x="10" y="2" width="4" height="1" fill="#fef08a" />
        <rect x="11" y="3" width="2" height="3" fill="#0f766e" />

        {/* Chassis Outer Outline */}
        <rect x="4" y="6" width="16" height="14" fill="#1c1917" />

        {/* Chassis Body (Teal / Cyan Soft Matrix) */}
        <rect x="5" y="7" width="14" height="12" fill="#0d9488" />
        <rect x="6" y="8" width="12" height="1" fill="#2dd4bf" />

        {/* Digital Screen Visor (Deep Navy) */}
        <rect x="6" y="9" width="12" height="7" fill="#042f2e" />

        {/* Friendly Expressive Pixel Eyes (Glow Teal) */}
        <rect x="8" y="11" width="2" height="3" fill="#5eead4" />
        <rect x="14" y="11" width="2" height="3" fill="#5eead4" />
        <rect x="9" y="11" width="1" height="1" fill="#ffffff" />
        <rect x="15" y="11" width="1" height="1" fill="#ffffff" />

        {/* Gentle Digital Smile */}
        <rect x="10" y="14" width="4" height="1" fill="#2dd4bf" />

        {/* Spark Wings / Antenna ears */}
        <rect x="3" y="10" width="1" height="4" fill="#1c1917" />
        <rect x="2" y="11" width="1" height="2" fill="#14b8a6" />
        <rect x="20" y="10" width="1" height="4" fill="#1c1917" />
        <rect x="21" y="11" width="1" height="2" fill="#14b8a6" />

        {/* Base Treads / Feet */}
        <rect x="6" y="20" width="4" height="2" fill="#115e59" />
        <rect x="14" y="20" width="4" height="2" fill="#115e59" />
      </svg>
    </div>
  );
};

/**
 * Combined Mascot Duo Display with optional speech bubble
 */
export const MascotDuo: React.FC<MascotProps> = ({
  size = 'md',
  showDialogue = false,
  dialogueText = 'Together for all potentially sentient beings!',
  className = '',
}) => {
  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <div className="flex items-center justify-center gap-4 relative">
        {/* Pip: Biological Animal Mascot */}
        <div className="relative group">
          <PipAnimalMascot size={size} />
          <div className="sr-only">Pip (Animal Welfare Mascot)</div>
        </div>

        {/* Intersecting Paw & Spark Bridge Icon */}
        <div className="flex flex-col items-center justify-center text-emerald-800">
          <div className="w-8 h-8 rounded-full bg-emerald-100 border border-stone-800 flex items-center justify-center pixel-box-sm">
            <span className="text-xs" aria-hidden="true">🐾⚡</span>
          </div>
        </div>

        {/* Byte: Digital Mind Mascot */}
        <div className="relative group">
          <ByteRobotMascot size={size} />
          <div className="sr-only">Byte (Digital Mind Mascot)</div>
        </div>
      </div>

      {showDialogue && (
        <div className="relative bg-white text-stone-900 border-2 border-stone-900 px-3.5 py-1.5 rounded-lg pixel-box text-xs max-w-xs text-center font-medium mt-1">
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-t-2 border-l-2 border-stone-900 rotate-45" />
          {dialogueText}
        </div>
      )}
    </div>
  );
};
