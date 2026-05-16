'use client'

import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import StatsSection from '@/components/StatsSection'
import RightPanel from '@/components/RightPanel'

const HeroSection = dynamic(() => import('@/components/HeroSection'))
const BrandingPage = dynamic(() => import('@/components/BrandingPage'))
const HRHomePage = dynamic(() => import('@/components/HRHomePage'))
const FoodHomePage = dynamic(() => import('@/components/FoodHomePage'))

export default function Home() {
  const [activeTab, setActiveTab] = useState('brands')

  const renderContent = () => {
    switch(activeTab) {
      case 'brands':
        return <BrandingPage />
      case 'humans':
        return <HRHomePage />
      case 'flavours':
        return <FoodHomePage />
      default:
        return <HeroSection />
    }
  }

  const renderStats = () => {
    switch(activeTab) {
      case 'brands':
        return <StatsSection section="brands" />
      case 'humans':
        return <StatsSection section="humans" />
      case 'flavours':
        return <StatsSection section="flavours" />
      default:
        return <StatsSection section="pulse" />
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
