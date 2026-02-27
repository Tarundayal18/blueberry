import React from 'react'

// Inline styles for keyframe animations
const animationStyles = `
  @keyframes shapeShift {
    0%   { transform: rotate(0deg) scale(1); }
    25%  { transform: rotate(90deg) scale(1.2); }
    50%  { transform: rotate(180deg) scale(0.85); }
    75%  { transform: rotate(270deg) scale(1.15); }
    100% { transform: rotate(360deg) scale(1); }
  }

  .shape-anim {
    animation: shapeShift 0.4s steps(1, end) infinite;
  }

  @keyframes shapeShift1 {
    0%   { content: ''; opacity: 1; }
    25%  { opacity: 0.6; }
    50%  { opacity: 1; }
    75%  { opacity: 0.4; }
    100% { opacity: 1; }
  }
`

// SVG shape variants — 4 shapes that cycle
const shapes = [
  // Starburst (many spikes)
  (color: string, size: number) => (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {[0,30,60,90,120,150,180,210,240,270,300,330].map((angle, i) => {
        const rad = (angle * Math.PI) / 180
        const x2 = 20 + 18 * Math.cos(rad)
        const y2 = 20 + 18 * Math.sin(rad)
        return <line key={i} x1="20" y1="20" x2={x2} y2={y2} stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
      })}
    </svg>
  ),
  // 4-point cross / plus shape
  (color: string, size: number) => (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" y1="2" x2="20" y2="38" stroke={color} strokeWidth="3" strokeLinecap="round"/>
      <line x1="2" y1="20" x2="38" y2="20" stroke={color} strokeWidth="3" strokeLinecap="round"/>
      <line x1="8" y1="8" x2="32" y2="32" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <line x1="32" y1="8" x2="8" y2="32" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  // 5-point star
  (color: string, size: number) => (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon
        points="20,3 24.7,15.5 38,15.5 27.3,23.5 31.1,36 20,28 8.9,36 12.7,23.5 2,15.5 15.3,15.5"
        fill={color}
      />
    </svg>
  ),
  // X shape
  (color: string, size: number) => (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="6" y1="6" x2="34" y2="34" stroke={color} strokeWidth="4" strokeLinecap="round"/>
      <line x1="34" y1="6" x2="6" y2="34" stroke={color} strokeWidth="4" strokeLinecap="round"/>
    </svg>
  ),
]

// Component that cycles through 4 shapes every 0.4s, starting at different index
function CyclingShape({ color, size, initialIndex = 0 }: { color: string; size: number; initialIndex?: number }) {
  const [shapeIndex, setShapeIndex] = React.useState(initialIndex)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setShapeIndex(prev => (prev + 1) % 4)
    }, 400)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{ display: 'inline-block' }}>
      {shapes[shapeIndex](color, size)}
    </div>
  )
}

export default function HeroSection() {
  const shapeColor = '#7B00FF'
  const shapeColorLight = '#9B30FF'

  return (
    <section className="relative py-6 sm:py-8 flex-1 flex items-center">
      <style>{animationStyles}</style>

      {/* === Decorative Cycling Shapes === */}

      {/* Top-left starburst (small) */}
      <div className="absolute" style={{ top: '10%', left: '28%', opacity: 0.85 }}>
        <CyclingShape color={shapeColor} size={28} initialIndex={0} />
      </div>

      {/* Top-right star */}
      <div className="absolute" style={{ top: '8%', right: '18%', opacity: 0.9 }}>
        <CyclingShape color={shapeColor} size={36} initialIndex={1} />
      </div>

      {/* Left-middle cross */}
      <div className="absolute" style={{ top: '40%', left: '6%', opacity: 0.85 }}>
        <CyclingShape color={shapeColor} size={42} initialIndex={2} />
      </div>

      {/* Right-middle starburst */}
      <div className="absolute" style={{ top: '55%', right: '7%', opacity: 0.85 }}>
        <CyclingShape color={shapeColorLight} size={32} initialIndex={3} />
      </div>

      {/* Bottom-left starburst */}
      <div className="absolute" style={{ bottom: '12%', left: '22%', opacity: 0.85 }}>
        <CyclingShape color={shapeColor} size={34} initialIndex={1} />
      </div>

      {/* Bottom-right X */}
      <div className="absolute" style={{ bottom: '12%', right: '20%', opacity: 0.8 }}>
        <CyclingShape color={shapeColor} size={26} initialIndex={2} />
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-10 px-4">
        {/* Food Badge */}
        <div 
          className="inline-block px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-black mb-4 sm:mb-6 text-white tracking-wider"
          style={{ background: '#09094C' }}
        >
          FOOD HOME PAGE
        </div>

        {/* Main Headline */}
        <h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-3 sm:mb-4 leading-tight"
          style={{ color: '#464196' }}
        >
          DELICIOUS FOOD<br />
          EXCEPTIONAL<br />
          SERVICE
        </h1>

        {/* Subheading */}
        <p 
          className="text-base sm:text-lg md:text-xl font-medium"
          style={{ color: '#464196' }}
        >
          Experience culinary excellence and innovation.
        </p>

        <button 
          onClick={() => window.location.href = '/food'}
          className="mt-8 px-6 py-3 bg-[#464196] hover:bg-[#09094C] text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105"
        >
          View Food-Home Page
        </button>
      </div>

      
    </section>
  )
}
