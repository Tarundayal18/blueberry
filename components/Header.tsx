import React from 'react'

export default function Header() {
  return (
    <header className="px-4 sm:px-8 md:px-16 py-4 sm:py-6 flex justify-between items-center">
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="w-8 h-8 sm:w-10 sm:h-12 md:w-12 md:h-12 rounded-full flex items-center justify-center" style={{ background: '#464196' }}>
          <span className="text-white text-sm sm:text-base md:text-xl">✦</span>
        </div>
        <div className="text-sm sm:text-base md:text-lg font-black" style={{ color: '#464196' }}>
          <div>GROOVORY</div>
          <div>FEST 2025</div>
        </div>
      </div>
      
      {/* <button 
        className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full font-bold text-xs sm:text-sm border-2 transition-all hover:bg-opacity-90 bg-white"
        style={{ borderColor: '#464196', color: '#464196' }}
      >
        BUY TICKETS
      </button> */}
    </header>
  )
}
