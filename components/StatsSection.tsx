import React from 'react'

interface StatsSectionProps {
  section?: 'brands' | 'pulse' | 'humans' | 'flavours'
}

export default function StatsSection({ section = 'pulse' }: StatsSectionProps) {
  const getStatsForSection = () => {
    switch(section) {
      case 'brands':
        return [
          { number: '123', label: 'Brands Created' },
          { number: '91', label: 'Brand Systems Delivered' },
          { number: '6', label: 'Industries Served' }
        ]
      case 'humans':
        return [
          { number: '10k+', label: 'Hirings Onboarded' },
          { number: '15+', label: 'Organizations Operational' },
          { number: '1L+', label: 'Trainings Delivered' }
        ]
      case 'flavours':
        return [
          { number: '19+', label: 'Brands Conceptualized' },
          { number: '6', label: 'Outlets Operational' },
          { number: '15+', label: 'Menus Curated' }
        ]
      case 'pulse':
        return [
          { number: '24', label: 'Setups Build' },
          { number: '15', label: 'Growth Engines Delivered' },
          { number: '6', label: 'Industries Served' }
        ]
      default:
        return [
          { number: '24', label: 'Setups Build' },
          { number: '15', label: 'Growth Engines Delivered' },
          { number: '6', label: 'Industries Served' }
        ]
    }
  }

  const stats = getStatsForSection()

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
