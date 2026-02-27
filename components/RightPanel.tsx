'use client'

import React from 'react'
import Image from 'next/image'

interface RightPanelProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function RightPanel({ activeTab, setActiveTab }: RightPanelProps) {
  const getTabContent = () => {
    const tabs = [
      { id: 'marketing', label: 'MARKETING', color: '#09094C', number: '04' },
      { id: 'branding', label: 'BRANDING', color: '#B9B9FF', number: '01' },
      { id: 'hr-home', label: 'HR HOME PAGE', color: '#464196', number: '02' },
      { id: 'food-home', label: 'FOOD HOME PAGE', color: '#09094C', number: '03' }
    ]
    
    return tabs.filter(tab => tab.id !== activeTab)
  }

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId)
  }

  const tabs = getTabContent()

  return (
    <>
      {/* Desktop Version - Full Screen */}
      <aside className="hidden lg:flex w-full h-screen sticky top-0">
        <div className="flex w-full h-full">
          {tabs.map((tab, index) => (
            <div 
              key={tab.id}
              className="flex-1 flex flex-col items-center justify-between p-6 relative overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-105"
              style={{ background: tab.color }}
              onClick={() => handleTabClick(tab.id)}
            >
              <div className="text-white text-6xl font-black absolute top-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
                {tab.label}
              </div>
              <div className="flex-1 flex items-center justify-center">
                {/* Empty space where image was */}
              </div>
              <div className="relative h-full flex items-end pb-6">
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px bg-white transition-all duration-500 group-hover:h-50 h-0"></div>
                <div className="text-white text-4xl font-black opacity-30 absolute bottom-0 left-1/2 transform -translate-x-1/2 transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-60">{tab.number}</div>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Mobile/Tablet Version - Bottom Navigation */}
      <aside className="lg:hidden w-full h-auto">
        <div className="flex h-20">
          {tabs.map((tab, index) => (
            <div 
              key={tab.id}
              className="flex-1 flex flex-col items-center justify-center p-2 relative cursor-pointer transition-all duration-500 hover:scale-105"
              style={{ background: tab.color }}
              onClick={() => handleTabClick(tab.id)}
            >
              <div className="text-white text-xs font-black mb-1 text-center leading-tight">{tab.label}</div>
              <div className="text-white text-lg font-black opacity-30">{tab.number}</div>
            </div>
          ))}
        </div>
      </aside>
    </>
  )
}
