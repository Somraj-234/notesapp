<svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" fill="white" filter="url(#grain)" />
</svg>
