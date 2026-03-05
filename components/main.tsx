'use client'

import { useState, useRef } from 'react'
import React from 'react'
import Image from 'next/image'
import { Plus, Lock, ArrowRight } from 'lucide-react'
import { motion, useInView, Variants } from 'framer-motion'
import { useSearchParams } from 'next/navigation'
import { pageData, pageData2, pageData3, pageData4, pageData5, pageData6, pageData7, pageData8, pageData9 } from '../data/pageData'
export default function Main() {
  const [email, setEmail] = useState('')
  const featuresRef = useRef(null)
  const servicesRef = useRef(null)
  const featuresInView = useInView(featuresRef, { once: true, amount: 0.2 })
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.1 })
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  // Get solution parameter from URL and select appropriate data
  const searchParams = useSearchParams();
  const solutionParam = searchParams.get('solution');

  // Select the appropriate page data based on solution parameter
  const getPageData = () => {
    switch(solutionParam) {
      case '2':
        return pageData2;
      case '3':
        return pageData3;
      case '4':
        return pageData4;
      case '5':
        return pageData5;
      case '6':
        return pageData6;
      case '7':
        return pageData7;
      case '8':
        return pageData8;
      case '9':
        return pageData9;
      default:
        return pageData;
    }
  };

  const currentData = getPageData();

  // Card animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const hoverVariants: Variants = {
    hover: {
      y: -8,
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
      transition: { duration: 0.3 },
    },
  }

  return (
    <main className="min-h-screen " style={{ fontFamily: 'Lato, sans-serif' }}>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');
        * {
          font-family: 'Lato', sans-serif !important;
        }
      `}</style>
      {/* Desktop & Tablet Layout */}

      {/* Navigation */}
      <nav className="relative z-10 sticky top-0 flex items-center justify-between px-6 md:px-12 py-4 backdrop-blur-sm">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: '#464196' }}>
            <div className="text-white font-black text-sm">✦</div>
          </div>
          <div className="text-sm md:text-base lg:text-lg font-black" style={{ color: '#464196' }}>
            <div>GROOVORY</div>
            <div>FEST 2025</div>
          </div>
        </div>

        {/* Center Links - Desktop Only */}
        <div className="hidden md:flex gap-8">
          {['BRANDING', 'HR HOME PAGE', 'FOOD HOME PAGE', 'MARKETING'].map((item) => (
            <a
              key={item}
              href="#"
              className="text-[#464196] hover:text-[#09094C] transition-colors text-sm font-black"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-[#464196] p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg md:hidden">
            <div className="flex flex-col py-2">
              {['BRANDING', 'HR HOME PAGE', 'FOOD HOME PAGE', 'MARKETING'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-[#464196] hover:text-[#09094C] transition-colors text-sm font-black px-6 py-3"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="hidden md:flex gap-8">

        </div>
      </nav>


      <div className="hidden sm:grid lg:grid-cols-2 gap-0 min-h-screen">
        {/* Left Section */}
        <section className="flex flex-col justify-center px-8 lg:px-16 py-16 lg:py-0 ">
          <div className="max-w-2xl">
            {/* Heading */}
            <h1 className="text-5xl lg:text-6xl font-bold text-black leading-tight mb-6 tracking-tight" style={{ color: '#09094C' }}>
              {currentData.hero.title}
            </h1>

            {/* Description */}
            <p className="text-lg mb-12 leading-relaxed font-light" style={{ color: '#464196' }}>
              {currentData.hero.subtitle}
            </p>

            {/* Email Input & CTA */}
            <div className="flex gap-4 mb-8">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-4 bg-white rounded-full text-black placeholder-[#464196] border-0 focus:outline-none focus:ring-2 focus:ring-[#464196] shadow-sm"
              />
              <button className="px-8 py-4 font-semibold rounded-full transition-colors shadow-md" style={{ background: '#464196', color: 'white' }}>
                {currentData.hero.buttonText}
              </button>
            </div>
          </div>
        </section>

        {/* Right Section - Image & Cards */}
        <section className="relative flex items-center justify-center p-8 lg:p-12 overflow-hidden">
          {/* Main Hero Image */}
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src="/hero-woman.jpg"
              alt="Professional woman"
              fill
              className="object-cover rounded-3xl"
              priority
            />

            {/* Mobile Accessibility Badge - Top Right */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute top-12 lg:top-20 right-6 lg:right-12 bg-white rounded-full px-6 py-3 shadow-lg flex items-center gap-3 z-10"
            >
              <span className="text-sm font-semibold text-black">Mobile accessibility</span>
              <div className="rounded-full p-2 flex-shrink-0" style={{ background: '#464196' }}>
                <Plus className="w-4 h-4 text-white" strokeWidth={3} />
              </div>
            </motion.div>

            {/* Enhanced Security Badge - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute right-6 lg:right-12 top-1/2 transform -translate-y-1/2 bg-white rounded-full px-6 py-3 shadow-lg flex items-center gap-3 z-10"
            >
              <span className="text-sm font-semibold text-black">Enhanced security</span>
              <div className="rounded-full p-2 flex-shrink-0" style={{ background: '#464196' }}>
                <Plus className="w-4 h-4 text-white" strokeWidth={3} />
              </div>
            </motion.div>

            {/* Expenses Card - Bottom Left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute bottom-12 lg:bottom-20 left-6 lg:left-12 bg-white rounded-2xl p-6 shadow-lg z-10 w-56"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-black font-semibold">Expenses</h3>
                <select className="text-xs text-[#464196] bg-transparent border-0 focus:outline-none cursor-pointer">
                  <option>Monthly</option>
                </select>
              </div>

              {/* Percentage */}
              <p className="text-4xl font-bold mb-6" style={{ color: '#464196' }}>85%</p>

              {/* Bar Chart */}
              <div className="flex items-end justify-between gap-2 h-24">
                <div className="flex-1 rounded-lg h-8" style={{ background: '#B9B9FF' }} />
                <div className="flex-1 rounded-lg h-16" style={{ background: '#464196' }} />
                <div className="flex-1 rounded-lg h-6" style={{ background: '#B9B9FF' }} />
                <div className="flex-1 rounded-lg h-14" style={{ background: '#464196' }} />
                <div className="flex-1 rounded-lg h-10" style={{ background: '#B9B9FF' }} />
                <div className="flex-1 rounded-lg h-20" style={{ background: '#464196' }} />
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Mobile Layout */}
      <div className="sm:hidden flex flex-col min-h-screen">
        {/* Mobile Hero Image */}
        <div className="relative w-full h-64 flex-shrink-0">
          <Image
            src="/hero-woman.jpg"
            alt="Professional woman"
            fill
            className="object-cover"
            priority
          />

          {/* Mobile Accessibility Badge */}
          <div className="absolute top-4 right-4 bg-white rounded-full px-4 py-2 shadow-lg flex items-center gap-2 z-10">
            <span className="text-xs font-semibold text-black">Mobile accessibility</span>
            <div className="rounded-full p-1.5 flex-shrink-0" style={{ background: '#464196' }}>
              <Plus className="w-3 h-3 text-white" strokeWidth={3} />
            </div>
          </div>
        </div>

        {/* Mobile Content Section */}
        <section className="flex-1 px-6 py-8  flex flex-col justify-between">
          <div>
            {/* Heading */}
            <h1 className="text-3xl font-bold leading-tight mb-4 tracking-tight" style={{ color: '#09094C' }}>
              {currentData.hero.title}
            </h1>

            {/* Description */}
            <p className="text-base mb-8 leading-relaxed font-light" style={{ color: '#464196' }}>
              {currentData.hero.subtitle}
            </p>
          </div>

          {/* Mobile Cards */}
          <div className="space-y-4 mb-8">
            {/* Enhanced Security Badge */}
            <div className="bg-white rounded-full px-4 py-2 shadow-md flex items-center gap-2 w-fit">
              <span className="text-xs font-semibold text-black">Enhanced security</span>
              <div className="rounded-full p-1.5 flex-shrink-0" style={{ background: '#464196' }}>
                <Plus className="w-3 h-3 text-white" strokeWidth={3} />
              </div>
            </div>

            {/* Expenses Card - Mobile */}
            <div className="bg-white rounded-xl p-4 shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-black font-semibold text-sm">Expenses</h3>
                <select className="text-xs text-[#464196] bg-transparent border-0 focus:outline-none cursor-pointer">
                  <option>Monthly</option>
                </select>
              </div>
              <p className="text-3xl font-bold mb-4" style={{ color: '#464196' }}>85%</p>
              <div className="flex items-end justify-between gap-1.5 h-16">
                <div className="flex-1 rounded-md h-6" style={{ background: '#B9B9FF' }} />
                <div className="flex-1 rounded-md h-12" style={{ background: '#464196' }} />
                <div className="flex-1 rounded-md h-5" style={{ background: '#B9B9FF' }} />
                <div className="flex-1 rounded-md h-10" style={{ background: '#464196' }} />
                <div className="flex-1 rounded-md h-8" style={{ background: '#B9B9FF' }} />
                <div className="flex-1 rounded-md h-16" style={{ background: '#464196' }} />
              </div>
            </div>
          </div>

          {/* Email Input & CTA */}
          <div className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-white rounded-full text-black placeholder-[#464196] border-0 focus:outline-none focus:ring-2 focus:ring-[#464196] text-sm shadow-sm"
            />
            <button className="w-full px-4 py-3 font-semibold rounded-full transition-colors text-sm shadow-md" style={{ background: '#464196', color: 'white' }}>
              Get start for free
            </button>
          </div>
        </section>
      </div>



      {/* Features Section - Desktop & Tablet */}
      <motion.div
        ref={featuresRef}
        initial="hidden"
        animate={featuresInView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="hidden sm:block rounded-3xl mx-8 lg:mx-16 my-16 lg:my-24 p-12 lg:p-20" style={{ background: '#464196' }}
      >
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight max-w-4xl mx-auto">
            {currentData.features.title}
          </h2>
          {/* <p className="text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: '#B9B9FF' }}>
            {currentData.features.description}
          </p> */}
        </div>

        {/* Features Grid: 2 cards left | image center | 2 cards right */}
        <div className="grid grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto items-stretch">
          {/* Left Column - 2 Cards stacked */}
          <div className="flex flex-col gap-8 lg:gap-12">
            {currentData.features.items.slice(0, 2).map((feature) => (
              <motion.div
                key={feature.id}
                variants={cardVariants}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)' }}
                className="rounded-2xl p-8 lg:p-10 cursor-pointer transition-all duration-300 flex flex-col justify-between flex-1" style={{ background: '#B9B9FF' }}
              >
                <div className="bg-white rounded-xl p-4 w-fit mb-6">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#464196" strokeWidth="2">
                    <path d={feature.icon} />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#09094C' }}>{feature.title}</h3>
                  <p className="leading-relaxed" style={{ color: '#464196' }}>{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center - Image */}
          <motion.div
            variants={cardVariants}
            className="flex items-center justify-center self-stretch"
          >
            <div className="relative w-full h-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/features-woman.jpg"
                alt="Woman with curly hair using laptop"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Right Column - 2 Cards stacked */}
          <div className="flex flex-col gap-8 lg:gap-12">
            {currentData.features.items.slice(2, 4).map((feature) => (
              <motion.div
                key={feature.id}
                variants={cardVariants}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)' }}
                className="rounded-2xl p-8 lg:p-10 cursor-pointer transition-all duration-300 flex flex-col justify-between flex-1" style={{ background: '#B9B9FF' }}
              >
                <div className="bg-white rounded-xl p-4 w-fit mb-6">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#464196" strokeWidth="2">
                    <path d={feature.icon} />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#09094C' }}>{feature.title}</h3>
                  <p className="leading-relaxed" style={{ color: '#464196' }}>{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </motion.div>

      {/* Our Purpose Section */}
      <section className="relative z-5 bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          {/* Section Badge */}
          <div className="flex items-center gap-2 mb-8">
            <div className="w-2 h-2 bg-[#464196] rounded-full" />
            <p className="text-[#464196] font-semibold text-sm">Our Solution</p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 md:gap-12 items-start">
            <div>
              {currentData.purpose && typeof currentData.purpose === 'object' && 'title' in currentData.purpose && currentData.purpose.title ? (
                <h2 
                  className="text-3xl md:text-4xl font-bold mb-4" 
                  style={{ color: '#09094C' }}
                  dangerouslySetInnerHTML={{ __html: currentData.purpose.title as string }}
                />
              ) : null}
              <p className="text-base md:text-xl text-gray-600 leading-relaxed">
                {currentData.purpose.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Mobile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="sm:hidden rounded-2xl mx-4 my-8 p-6" style={{ background: '#464196' }}
      >
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-white leading-tight mb-4">
            {currentData.features.title}
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: '#B9B9FF' }}>
            {currentData.features.description}
          </p>
        </div>

        {/* Features Image */}
        <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-8 shadow-lg">
          <Image
            src="/features-woman.jpg"
            alt="Woman with curly hair using laptop"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Features Cards */}
        <div className="space-y-4">
          {currentData.features.items.map((feature) => (
            <motion.div
              key={feature.id}
              whileHover={{ y: -4, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)' }}
              className="rounded-2xl p-6"
              style={{ background: '#B9B9FF' }}
            >
              <div className="bg-white rounded-lg p-3 w-fit mb-4">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#464196" strokeWidth="2">
                  <path d={feature.icon} />
                </svg>
              </div>
              <h3 className="font-bold mb-1" style={{ color: '#09094C' }}>{feature.title}</h3>
              <p style={{ color: '#464196' }}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Services Section */}
      <motion.section
        ref={servicesRef}
        initial="hidden"
        animate={servicesInView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="bg-white py-16 lg:py-24 px-4 lg:px-16"
      >
        {/* Desktop & Tablet Grid */}
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {currentData.services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)' }}
              className="bg-[#F3F3F3] rounded-2xl p-8 lg:p-10 relative cursor-pointer transition-all duration-300"
            >
              <div className="absolute top-6 left-6 w-2 h-2 bg-[#4F46E5] rounded-full"></div>
              <div className="absolute top-8 right-8 text-[#E8E8E8] text-6xl lg:text-7xl font-bold">{String(index + 1).padStart(2, '0')}</div>

              <div className="relative z-10 mb-6">
                <svg className="w-10 h-10 lg:w-12 lg:h-12" viewBox="0 0 24 24" fill="none" stroke={service.color} strokeWidth="1.5">
                  <path d={service.icon} />
                </svg>
              </div>

              <h3 className="text-xl lg:text-2xl font-bold text-black mb-3 mt-4">{service.title}</h3>
              <p className="text-[#666666] text-sm lg:text-base leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile Layout */}
        <motion.div
          className="sm:hidden grid grid-cols-1 gap-4"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Services Cards */}
          <div className="grid grid-cols-1 gap-4">
            {currentData.services.map((service) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -4, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
                className="bg-white rounded-xl p-6 cursor-pointer transition-all duration-300"
              >
                <div className="relative z-10 mb-4">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke={service.color} strokeWidth="1.5">
                    <path d={service.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-black mb-2">{service.title}</h3>
                <p className="text-base text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>



      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4 text-balance">
              {currentData.keyFeatures.title}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto text-balance">
              {currentData.keyFeatures.description}
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Section - Icon and Decorative Elements */}
            <div className="lg:col-span-4 animate-fade-in-left">
              <div className="relative h-96 flex items-center justify-center">
                {/* Decorative Background Shield */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Outermost Shield - Light Pink */}
                  <div className="absolute w-56 h-56 sm:w-64 sm:h-64 rounded-3xl bg-gradient-to-br from-pink-100 to-pink-50 opacity-60 transform -rotate-12"></div>
                  
                  {/* Middle Shield - Light Pink */}
                  <div className="absolute w-48 h-48 sm:w-56 sm:h-56 rounded-3xl bg-gradient-to-br from-pink-100 to-pink-50 opacity-80 transform rotate-6"></div>
                  
                  {/* Lock Icon Shield - Coral */}
                  <div className="relative z-10 w-40 h-40 sm:w-48 sm:h-48 rounded-3xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-2xl flex items-center justify-center transform hover:scale-105 transition-transform duration-300 animate-float">
                    <Lock className="w-20 h-20 sm:w-24 sm:h-24 text-white" strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            </div>

            {/* Center Section - Image */}
            <div className="lg:col-span-4 animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="relative h-96 sm:h-[450px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=600&fit=crop"
                  alt="Professional woman working on laptop with security focus"
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>

            {/* Right Section - Results Content */}
            <div className="lg:col-span-4 animate-fade-in-right">
              <div className="space-y-6">
                {/* Results Content */}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-2xl font-bold mb-4" style={{ color: '#09094C' }}>
                    Results
                  </h3>
                  <div className="space-y-4">
                    {currentData.keyFeatures.features.map((feature) => 
                      feature.results?.map((result: any, index: number) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#464196] rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-base text-gray-700 leading-relaxed">
                            <strong className="text-[#464196]">{result.title}:</strong> {result.description}
                          </p>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Background Layer - Section Only */}
        <div className="absolute inset-0 z-0">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br" style={{ background: pageData.cta.backgroundImage }} />

          {/* Your Dotted World Map Image */}
          <img
            src="/world.png"
            alt="World Map"
            className="absolute inset-0 w-full h-full object-contain opacity-40 mix-blend-screen"
          />

          {/* Center Glow Overlay (Optional: creates that professional look) */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(62,67,190,0.5)_100%)]" />
        </div>

        {/* Content Layer (This will scroll over the fixed background) */}
        <div className="relative z-10 w-full mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-8xl font-bold text-[#09094C] mb-6 tracking-tight">
            {currentData.cta.title}
          </h2>

          <p className="text-lg md:text-xl text-[#09094C]/80 mb-10 font-bold  max-w-2xl mx-auto leading-relaxed ">
            {currentData.cta.description}
          </p>

          <button className="px-10 py-4 bg-white text-[#09094C] font-bold rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            {currentData.cta.buttonText}
          </button>
        </div>
      </section>
    </main>
  )
}
