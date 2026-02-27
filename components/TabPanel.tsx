'use client'

import React from 'react'
import Image from 'next/image'

interface TabPanelProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function TabPanel({ activeTab, setActiveTab }: TabPanelProps) {
  const tabs = [
    { id: 'about', label: 'ABOUT', color: 'bg-orange-500', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=300&fit=crop', number: '08' },
    { id: 'agenda', label: 'AGENDA', color: 'bg-purple-600', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=300&fit=crop', number: '02' },
    { id: 'tickets', label: 'TICKETS', color: 'bg-blue-600', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=200&h=300&fit=crop', number: '15' },
  ]

  const content = {
    about: {
      title: 'ABOUT GROOVORY FEST',
      description: 'Experience the ultimate music and culture festival. Join thousands of festival-goers for an unforgettable weekend of live performances, food, and workshops.',
      details: ['Music performances', 'Cultural experiences', 'Food vendors', 'Interactive workshops']
    },
    agenda: {
      title: 'FESTIVAL AGENDA',
      description: 'Check out our full schedule and plan your festival experience. From morning workshops to late-night performances.',
      details: ['12 LIVE SHOWS', '13 FOOD EVENTS', '10 WORKSHOPS', 'Special performances throughout the day']
    },
    tickets: {
      title: 'GET YOUR TICKETS',
      description: 'Secure your spot at Groovory Fest 2025. Limited tickets available!',
      details: ['Early Bird: $45', 'General: $65', 'VIP: $120', 'Group discounts available']
    }
  }

  const activeContent = content[activeTab as keyof typeof content]
  const activeTabData = tabs.find(t => t.id === activeTab)

  return (
    <div className="hidden lg:flex w-96 h-screen sticky top-0 gap-0">
      {/* Tab Buttons */}
      <div className="flex flex-col gap-0">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 ${tab.color} flex items-center justify-center cursor-pointer transition-all duration-300 hover:opacity-90 relative group`}
          >
            <div 
              className="absolute text-white text-xl font-black whitespace-nowrap"
              style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', opacity: activeTab === tab.id ? 1 : 0.7 }}
            >
              {tab.label}
            </div>
            {/* Tab Indicator */}
            {activeTab === tab.id && (
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-white" />
            )}
          </button>
        ))}
      </div>

      {/* Content Panel */}
      <div className={`flex-1 bg-gradient-to-b from-gray-50 to-white p-8 flex flex-col overflow-y-auto ${activeTabData?.color}`}>
        <div className="text-white">
          {/* Tab Content Header */}
          <div className="mb-8">
            <h2 className="text-2xl font-black mb-4">{activeContent.title}</h2>
            <p className="text-sm leading-relaxed opacity-90">{activeContent.description}</p>
          </div>

          {/* Image Display */}
          <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
            <div className="relative w-full h-64">
              <Image 
                src={activeTabData?.image || ''}
                alt={activeTabData?.label}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Details List */}
          <div className="space-y-3 mb-8">
            {activeContent.details.map((detail, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="text-lg font-black mt-1">✦</div>
                <p className="text-sm">{detail}</p>
              </div>
            ))}
          </div>

          {/* Number Display */}
          <div className="flex justify-center">
            <div className="text-6xl font-black opacity-20">{activeTabData?.number}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
