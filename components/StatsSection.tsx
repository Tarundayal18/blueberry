import React from 'react'

export default function StatsSection() {
  const stats = [
    { number: '12', label: 'LIVE SHOWS' },
    { number: '13', label: 'FOOD EVENTS' },
    { number: '10', label: 'WORKSHOPS' }
  ]

  return (
    <section className="py-6 px-4">
      <div className="flex flex-col md:flex-row justify-around items-center gap-6 md:gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="text-center flex flex-col items-center">
            {/* Horizontal line above number */}
            <div 
              className="h-1 w-16 mb-3"
              style={{ background: '#464196' }}
            />
            
            {/* Large number */}
            <div 
              className="text-4xl md:text-5xl font-black mb-2 leading-none"
              style={{ color: '#09094C' }}
            >
              {stat.number}
            </div>
            
            {/* Label */}
            <p 
              className="text-xs sm:text-sm font-black tracking-wider"
              style={{ color: '#464196' }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
