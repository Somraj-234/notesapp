import React from "react";

type StickyNoteProps = {
  rotate?: number;
  className?: string;
  content?: string;
  primaryColor?: string;
  secondaryColor?: string;
};

const StickyNote = ({
  rotate = 0,
  className = "",
  primaryColor = "#FCB46D",
  secondaryColor = "#F5AD65",
  content = "Complete 4 chapters till Tuesday, Assignment submissin on Monday",
}: StickyNoteProps) => {
  return (
    <div
      className="relative max-w-50 h-50"
      style={{
        transform: `rotate(${rotate}deg)`,
      }}
    >
      {/* Progressive blur background now behind the sticky note */}
      <div className="progressive-blur-container absolute -right-3 rotate-[-5deg] top-3 w-50 h-64 z-0 opacity-25 blur-md pointer-events-none">
        <div className="blur-filter"></div>
        <div className="blur-filter"></div>
        <div className="blur-filter"></div>
        <div className="blur-filter"></div>
        <div className="blur-filter"></div>
        <div className="blur-filter"></div>
        <div className="blur-filter"></div>
        <div className="gradient"></div>
      </div>
      <div
        className={`w-50 h-50 z-10 relative ${className}`}
        style={{
          backgroundColor: primaryColor,
        }}
      >
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-25 z-10">
          <filter id="grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="4"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" fill="white" filter="url(#grain)" />
        </svg>

        <div
          className="w-full h-10 mb-4"
          style={{ backgroundColor: secondaryColor }}
        />
        <p className="text-xs p-4 z-20">{content}</p>
      </div>
    </div>
  );
};

export default StickyNote;
