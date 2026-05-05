'use client'

import React, { useState } from 'react'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import StatsSection from '@/components/StatsSection'
import RightPanel from '@/components/RightPanel'
import BrandingPage from '@/components/BrandingPage'
import HRHomePage from '@/components/HRHomePage'
import FoodHomePage from '@/components/FoodHomePage'

export default function Home() {
  const [activeTab, setActiveTab] = useState('marketing')

  const renderContent = () => {
    switch(activeTab) {
      case 'branding':
        return <BrandingPage />
      case 'hr-home':
        return <HRHomePage />
      case 'food-home':
        return <FoodHomePage />
      default:
        return <HeroSection />
    }
  }

  const renderStats = () => {
    switch(activeTab) {
      case 'branding':
        return <StatsSection section="branding" />
      case 'hr-home':
        return <StatsSection section="hr-home" />
      case 'food-home':
        return <StatsSection section="food-home" />
      default:
        return <StatsSection section="marketing" />
    }
  }

  return (
    <div className="h-screen bg-white overflow-hidden flex flex-col lg:flex-row" style={{ fontFamily: 'Lato, sans-serif' }}>
      {/* Left Side - Header, Content, Stats */}
      <div className="flex-1 lg:w-[75%] flex flex-col h-screen">
        <Header activeTab={activeTab} />
        <div className="flex-1 px-4 sm:px-8 py-4 lg:px-12 relative overflow-hidden">
          <div className="h-full flex flex-col">
            <div className="flex-1">
              {renderContent()}
            </div>
            {renderStats()}
          </div>
        </div>
      </div>
      
      {/* Right Side - Full Screen Tabs (Desktop Only) */}
      <div className="hidden lg:block lg:w-[25%]">
        <RightPanel activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      
      {/* Mobile Bottom Tabs */}
      <div className="lg:hidden">
        <RightPanel activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  )
}
