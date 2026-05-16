import React from 'react'

interface HeaderProps {
  activeTab?: string
}

export default function Header({ activeTab }: HeaderProps) {
  const getPageName = () => {
    switch(activeTab) {
      case 'brands':
        return 'BRANDING';
      case 'humans':
        return 'HUMAN RESOURCES';
      case 'flavours':
        return 'FOOD AND BEVERAGES';
      case 'pulse':
        return 'MARKETING';
      default:
        return 'Pulse';
    }
  };

  return (
    <header className="px-4 sm:px-8 md:px-16 py-2 sm:py-3 flex justify-between items-center">
      <div className="flex items-center gap-2 sm:gap-3">
        {/* <div className="w-8 h-8 sm:w-10 sm:h-12 md:w-12 md:h-12 rounded-full flex items-center justify-center" style={{ background: '#464196' }}>
          <span className="text-white text-sm sm:text-base md:text-xl">✦</span>
        </div> */}
       <div className="flex items-center gap-3 sm:gap-4">
  {/* <Image
    src="/groovory-logo.png"   // public folder me image rakho
    alt="Groovory Fest 2025"
    width={180}
    height={60}
    className="object-contain"
    priority
  /> */}

   <img 
            src="/blueberrie01-small.png" 
            alt="Blueberrie" 
            width={64}
            height={64}
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
          />
          <div className="flex flex-col">
            <div className="text-lg sm:text-xl md:text-2xl font-black" style={{ color: '#464196' }}>
              {getPageName()}
            </div>
            <div className="text-sm sm:text-base md:text-md font-black" style={{ color: '#464196' }}>
              Consultancy Services
            </div>
          </div>
</div>
      </div>
      
      {/* Right side image */}
      <img 
        src="/blueberrie03-small.png" 
        alt="Blueberrie" 
        width={104}
        height={104}
        className="w-18 h-18 sm:w-22 sm:h-22 md:w-26 md:h-26 object-contain"
      />
      
      {/* <button 
        className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full font-bold text-xs sm:text-sm border-2 transition-all hover:bg-opacity-90 bg-white"
        style={{ borderColor: '#464196', color: '#464196' }}
      >
        BUY TICKETS
      </button> */}
    </header>
  )
}
