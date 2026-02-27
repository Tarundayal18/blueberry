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
        return <StatsSection />
      case 'hr-home':
        return <StatsSection />
      case 'food-home':
        return <StatsSection />
      default:
        return <StatsSection />
    }
  }

  return (
    <div className="min-h-screen bg-white overflow-hidden flex flex-col lg:flex-row" style={{ fontFamily: 'Lato, sans-serif' }}>
      {/* Left Side - Header, Content, Stats */}
      <div className="flex-1 lg:w-[75%] flex flex-col">
        <Header />
        <div className="flex-1 px-4 sm:px-8 py-4 lg:px-12 relative flex flex-col justify-between">
          {renderContent()}
          {renderStats()}
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
