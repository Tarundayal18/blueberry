'use client'

import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation';
import { QuoteModal } from '../QuoteModal'
import { LazyHeroVideo } from './LazyHeroVideo'



const clients = [
  {
    name: "Low Online Visibility",
    duration: "Customers can’t find you on Google, maps, or review sites.",
  },
  {
    name: "Outdated Experience",
    duration: "The menu, ambiance, or service feel stale and don’t match customer expectations.",
  },
  {
    name: "Lack of Loyalty",
    duration: "First-time visitors don’t become repeat patrons",
  },
  {
    name: "Ineffective Marketing Spend",
    duration: "Advertising and promotions fail to drive significant sales.",
  },
    {
    name: "No Delivery Strategy",
    duration: "Restaurants miss revenue by not optimising Zomato, Swiggy listings, ratings, and online order experience.",
  },
  {
    name: "Inconsistent Guest Experience",
    duration: "Service quality varies by shift or staff — making it impossible to build a reliable brand reputation.",
  },
  {
    name: "Poor Cost Management",
    duration: "Rising food and labour costs eat into margins with no visibility into where money is actually leaking.",
  },
  {
    name: "Weak Social Presence",
    duration: "No consistent content, reviews strategy, or community building — leaving the brand invisible online.",
  },
   
];

export default function Food() {

  const router = useRouter();
  const pathname = usePathname();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState(0); // -1 left, 1 right
  const [hovered, setHovered] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const handleServiceClick = (serviceNumber: number) => {
    const serviceMap: { [key: number]: string } = {
      9: 'Restaurant_Setup_Strategy',
      8: 'Menu_Experience_Innovation'
    };

    const serviceName = serviceMap[serviceNumber];
    router.push(`/flavours/${serviceName}`);
  };

  // Staggered top offsets like in the screenshot (col1 lower, col2 middle, col3 top)
  const offsets = ["mt-16", "mt-8", "mt-0"];

  const goTo = (idx, dir) => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrentSlide(idx);
      setAnimating(false);
    }, 350);
  };

  const prevSlide = () => {
    const idx = (currentSlide - 1 + testimonials.length) % testimonials.length;
    goTo(idx, -1);
  };

  const nextSlide = () => {
    const idx = (currentSlide + 1) % testimonials.length;
    goTo(idx, 1);
  };

  const steps = [
    {
      number: '1',
      title: 'Local SEO & Digital Presence',
      duration: '10 min',
      description: 'We optimize your Google Business listing and website so hungry customers find you. We manage social media to engage the community.',
    },
    {
      number: '2',
      title: 'Promotion & Partnerships',
      duration: '7 days',
      description: 'We design promotions, loyalty programs, and local partnerships (e.g., with delivery apps or events) to attract diners.',
    },
    {
      number: '3',
      title: 'Customer Feedback Loop',
      duration: '14 days',
      description: 'We track reviews and feedback to continuously refine your menu and service offerings.',
    },
  ];

  const services = [
    {
      title: "Restaurant Setup & Strategy",
      description:
        "We advise on concept development, location analysis, and opening strategy to give you a strong launch and ongoing success plan.",
      icon: (
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="10" width="28" height="34" rx="2" />
          <path d="M8 10 L4 14 L4 48 L32 48 L36 44" />
          <line x1="14" y1="20" x2="30" y2="20" />
          <line x1="14" y1="26" x2="30" y2="26" />
          <line x1="14" y1="32" x2="22" y2="32" />
        </svg>
      ),
    },
    {
      title: "Menu & Experience Innovation",
      description:
        "We help craft an irresistible menu and brand experience. That includes engineering dishes that sell and aligning your service and décor with your brand story.",
      icon: (
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="28" width="10" height="18" rx="1" />
          <rect x="21" y="18" width="10" height="28" rx="1" />
          <rect x="36" y="10" width="10" height="36" rx="1" />
          <path d="M8 24 L23 14 L38 6" />
          <circle cx="23" cy="14" r="2" fill="currentColor" stroke="none" />
          <circle cx="38" cy="6" r="2" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
   
  ];

  const ArrowIcon = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="15" x2="15" y2="3" />
      <polyline points="6,3 15,3 15,12" />
    </svg>
  );




  const testimonials = [
    {
      quote:
        "Claim and optimize your listing with high-quality photos and accurate info.",
      role: "Google Profile Optimization",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      quote:
        "Run special promotions for local events or holidays to draw new customers.",
      role: "Seasonal Social Campaigns",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      quote:
        "Remove low-selling items and highlight popular dishes to improve sales.",
      role: "Menu Tweaks",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];




  return (
    <div>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');

        * {
          font-family: 'Lato', sans-serif;
        }

        .testimonials-section {
          font-family: 'Inter', sans-serif;
          position: relative;
          width: 100%;
          min-height: 340px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 60px 0 50px;
          overflow: hidden;
          background: white;
        }

        .slider-wrapper {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0;
          padding: 0 16px;
          position: relative;
          z-index: 2;
        }

        .arrow-btn {
          flex-shrink: 0;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255,255,255,0.85);
          border: 1.5px solid rgba(200,190,220,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #555;
          transition: all 0.2s ease;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          position: relative;
          z-index: 10;
        }

        .arrow-btn:hover {
          background: rgba(255,255,255,1);
          border-color: #7b6fc4;
          color: #464196;
          transform: scale(1.05);
          box-shadow: 0 4px 16px rgba(70,65,150,0.15);
        }

        .arrow-btn svg {
          width: 20px;
          height: 20px;
        }

        .card-container {
          flex: 1;
          max-width: 600px;
          min-width: 0;
          padding: 0 20px;
        }

        .card-wrapper {
          position: relative;
          padding-top: 36px;
        }

        .avatar-top {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 64px;
          height: 64px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid rgba(255,255,255,0.95);
          box-shadow: 0 4px 16px rgba(70,65,150,0.18);
          z-index: 5;
        }

        .testimonial-card {
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 48px 40px 32px;
          box-shadow: 0 8px 32px rgba(70, 65, 150, 0.1), 0 2px 8px rgba(0,0,0,0.06);
          border: 1px solid rgba(255,255,255,0.8);
          transition: opacity 0.35s ease, transform 0.35s ease;
          will-change: opacity, transform;
          text-align: center;
        }

        .card-enter {
          opacity: 0;
          transform: translateX(30px);
        }

        .card-enter-left {
          opacity: 0;
          transform: translateX(-30px);
        }

        .card-visible {
          opacity: 1;
          transform: translateX(0);
        }

        .card-exit {
          opacity: 0;
          transform: translateX(-30px);
        }

        .quote-text {
          font-size: 17px;
          font-weight: 500;
          color: #1a1a3e;
          line-height: 1.65;
          margin: 0 0 28px 0;
        }

        .author-row {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
        }

        .author-name {
          font-weight: 700;
          font-size: 15px;
          color: #1a1a3e;
          margin: 0 0 2px 0;
        }

        .author-role {
          font-size: 13px;
          color: #888;
          margin: 0;
          font-weight: 400;
        }

        .dots {
          display: flex;
          gap: 8px;
          justify-content: center;
          margin-top: 28px;
          position: relative;
          z-index: 2;
        }

        .dot {
          height: 8px;
          border-radius: 4px;
          background: rgba(255,255,255,0.5);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .dot.active {
          background: rgba(255,255,255,0.95);
          width: 28px;
        }

        .dot.inactive {
          width: 8px;
          background: rgba(255,255,255,0.45);
        }

        .dot.inactive:hover {
          background: rgba(255,255,255,0.7);
        }

        /* Responsive */
        @media (max-width: 600px) {
          .testimonials-section {
            padding: 40px 0 36px;
          }

          .testimonial-card {
            padding: 44px 22px 24px;
          }

          .quote-text {
            font-size: 15px;
            margin-bottom: 20px;
          }

          .card-container {
            padding: 0 8px;
          }

          .arrow-btn {
            width: 36px;
            height: 36px;
          }

          .arrow-btn svg {
            width: 16px;
            height: 16px;
          }
        }
      `}</style>
      <main className="min-h-screen overflow-hidden" style={{ fontFamily: 'Lato, sans-serif' }}>
        {/* Gradient Background with Boxes */}
        <div className="fixed inset-0 -z-10">
          {/* Main gradient using your colors */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#B9B9FF] via-white to-[#464196]" />

          {/* Animated background boxes - matching your design */}
          <div className="absolute inset-0">
            {/* Large background boxes with rounded corners */}
            <div className="absolute top-10 left-10 w-48 h-48 bg-[#464196]/8 rounded-2xl transform rotate-12" />
            <div className="absolute top-32 right-20 w-64 h-64 bg-[#B9B9FF]/15 rounded-3xl transform -rotate-6" />

            {/* Medium boxes */}
            <div className="absolute top-1/4 left-1/3 w-40 h-40 bg-[#464196]/12 rounded-2xl transform rotate-45" />
            <div className="absolute top-1/2 right-1/3 w-52 h-52 bg-[#B9B9FF]/18 rounded-3xl transform -rotate-12" />

            {/* Bottom section boxes */}
            <div className="absolute bottom-32 left-20 w-56 h-56 bg-[#464196]/10 rounded-2xl transform rotate-6" />
            <div className="absolute bottom-20 right-32 w-44 h-44 bg-[#09094C]/20 rounded-3xl transform -rotate-8" />

            {/* Small accent boxes */}
            <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-[#B9B9FF]/25 rounded-2xl transform rotate-15" />
            <div className="absolute bottom-1/4 left-1/4 w-36 h-36 bg-[#464196]/15 rounded-3xl transform -rotate-3" />

            {/* Extra decorative elements */}
            <div className="absolute top-2/3 left-16 w-28 h-28 bg-[#B9B9FF]/20 rounded-2xl transform rotate-30" />
            <div className="absolute bottom-1/3 right-16 w-40 h-40 bg-[#464196]/12 rounded-2xl transform -rotate-15" />

            {/* Tiny accent boxes */}
            <div className="absolute top-20 right-40 w-20 h-20 bg-[#09094C]/15 rounded-xl transform rotate-45" />
            <div className="absolute bottom-40 left-40 w-24 h-24 bg-[#B9B9FF]/30 rounded-xl transform -rotate-20" />
          </div>
        </div>

        {/* Navigation */}
        <nav className="relative z-10 sticky top-0 flex items-center justify-between px-6 md:px-12 py-4 backdrop-blur-sm">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <a href="/" className="cursor-pointer hover:opacity-80 transition-opacity">
              <img
                src="/blueberrie01.png"
                alt="Blueberrie"
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
              />
            </a>
          </div>

          {/* Center Links */}
          <div className="hidden md:flex gap-8">
            {[
              { name: 'BRANDS', href: '/brands' },
              { name: 'PULSE', href: '/pulse' },
              { name: 'HUMANS', href: '/humans' },
              { name: 'FLAVOURS', href: '/flavours' }
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm transition-colors relative ${pathname.includes(item.href)
                    ? 'text-[#09094C] font-semibold'
                    : 'text-[#464196] hover:text-[#09094C]'
                  }`}
              >
                {item.name}
                {pathname.includes(item.href) && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#09094C]"></div>
                )}
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
                {[
                  { name: 'BRANDS', href: '/brands' },
                  { name: 'PULSE', href: '/pulse' },
                  { name: 'HUMANS', href: '/humans' },
                  { name: 'FLAVOURS', href: '/flavours' }
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`px-6 py-3 transition-colors ${pathname.includes(item.href)
                        ? 'text-[#09094C] font-semibold bg-gray-50'
                        : 'text-[#464196] hover:text-[#09094C] hover:bg-gray-50'
                      }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          )}

          <div className="hidden md:flex gap-8">

          </div>
        </nav>

        {/* Hero Section */}
        <div className="relative z-5 flex flex-col items-center justify-center px-4 md:px-8 py-16 md:py-24 min-h-screen">
          {/* Main Heading */}
          <div className="text-center max-w-4xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#464196] mb-6 leading-tight">
              DELICIOUS FOOD
              <span className="block">EXCEPTIONAL</span>
              <span className="block">SERVICE</span>
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-[#464196] mb-8 leading-relaxed max-w-2xl mx-auto font-medium">
              Experience culinary excellence and innovation.
            </p>
          </div>

          {/* Featured Video Section */}
          <div className="relative mt-12 md:mt-16 w-full max-w-5xl px-4">

            {/* Video Card */}
            <div className="relative w-full rounded-3xl overflow-hidden shadow-[0_32px_80px_rgba(70,65,150,0.22)]" style={{ background: '#09094C' }}>


              <LazyHeroVideo src="/video/1/FOOD.mp4" />

              {/* Vignette overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(9,9,76,0.35)_100%)] pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#09094C]/50 to-transparent pointer-events-none" />

            </div>
          </div>

        </div>

        <section className="relative z-5 bg-white py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            {/* Section Badge */}
            <div className="flex items-center gap-2 mb-8">
              <div className="w-2 h-2 bg-[#464196] rounded-full" />
              <p className="text-[#464196] font-semibold text-3xl">Our Purpose</p>
            </div>

            {/* Main Content - Left Right Layout */}
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 md:gap-12 items-start">
              {/* Left Side - Our Purpose */}
              {/* <div></div> */}

              {/* Right Side - Description */}
              <div>
                <p className="text-base md:text-xl leading-relaxed" style={{ color: '#09094C' }}>
                  Transform your food business with expert marketing and menu development. For restaurants and food brands, getting customers in the door and keeping them coming back is everything. In fact, 98% of consumers use the internet to find local businesses. BlueBerrie ensures your eatery stands out online and delivers a memorable customer experience. </p>
              </div>
            </div>

          </div>
        </section>

        {/* /// Services */}

        <section className="bg-white py-20 border-t border-gray-200 font-sans">
          <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
        .services-section * { font-family: 'DM Sans', sans-serif; }
        .service-card { transition: border-color 0.2s; }
        .service-card:hover .arrow-icon { opacity: 1; color: #111; }
        .arrow-icon { transition: opacity 0.2s, color 0.2s; opacity: 0.4; }
        .icon-wrap { transition: opacity 0.2s; }
      `}</style>
          <div className="services-section max-w-5xl mx-auto px-6 md:px-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-2xl font-bold text-[#09094C] mb-4">
                Our Solutions
              </h2>
              {/* <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                I offer a comprehensive range of services to help your business succeed online
              </p> */}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-0 items-start">
              {services.map((service, idx) => {
                const col = idx % 2;
                const offsetClass = offsets[col];
                return (
                  <div
                    key={idx}
                    className={`service-card group relative pt-8 pb-10 border-t border-gray-300 hover:border-gray-800 ${idx >= 2 ? offsetClass + " mt-10" : offsetClass}`}
                    onMouseEnter={() => setHovered(idx)}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => handleServiceClick(idx + 8)}
                  >
                    {/* Arrow top-right */}
                    <div className="arrow-icon absolute top-8 right-0 flex items-center gap-2" style={{ color: '#09094C' }}>
                      <span className="text-sm font-medium">Know More</span>
                      <ArrowIcon />
                    </div>

                    {/* Icon */}
                    <div className="icon-wrap text-[#09094C] mb-6">
                      {service.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#09094C] mb-3 leading-snug">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm leading-relaxed" style={{ color: '#09094C' }}>
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Collaborations Section - White Background */}
        <section className="relative z-5 bg-white py-16 md:py-24 border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-4 md:px-8">

            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full" style={{ background: "#4338ca" }} />
                <p className="text-sm font-semibold" style={{ color: "#4338ca" }}>Challenges</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold" style={{ color: "#09094c", letterSpacing: "-0.02em" }}>
                We Understand Your Concerns
              </h2>
            </div>

            {/* Clients Grid */}
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {clients.map((client, idx) => (
                <div key={idx}>

                  {/* Top Info Card */}
                  <div className="rounded-xl p-5 mb-3" style={{ background: "#f3f4f6", height: 180 }}>
                    <p className="font-bold text-sm mb-1" style={{ color: "#09094c" }}>{client.name}</p>
                    <p className="text-xs" style={{ color: "#6b7280" }}>{client.duration}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        <section className="bg-white py-16 md:py-24 font-sans">
          <div className="max-w-6xl mx-auto px-6">

            {/* Section Header */}
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e264f] mb-4">
                Our Approach
              </h2>
              {/* <p className="text-lg text-[#464196] font-medium">
            My simple yet powerful workflow to offer you the best results.
          </p> */}
            </div>

            {/* Process Steps Container */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              {steps.map((step, idx) => (
                <div key={idx} className="relative">

                  {/* Number and Arrow Row */}
                  <div className="flex items-center mb-8">
                    <span className="text-5xl md:text-6xl font-bold text-[#3f51b5] mr-4">
                      {step.number}
                    </span>

                    {/* Horizontal Line with Arrow (Hidden on last step) */}
                    {idx !== steps.length - 1 && (
                      <div className="hidden md:flex flex-grow items-center ml-2">
                        <div className="h-[1.5px] w-full bg-[#3f51b5]"></div>
                        <div className="w-2 h-2 border-t-2 border-r-2 border-[#3f51b5] rotate-45 -ml-2"></div>
                      </div>
                    )}

                    {/* Extra Arrow for the final step to match image layout if needed */}
                    {idx === steps.length - 1 && (
                      <div className="hidden md:flex flex-grow items-center ml-2 opacity-100">
                        <div className="h-[1.5px] w-full bg-[#3f51b5]"></div>
                        <div className="w-2 h-2 border-t-2 border-r-2 border-[#3f51b5] rotate-45 -ml-2"></div>
                      </div>
                    )}
                  </div>

                  {/* Text Content */}
                  <div className="pr-4">
                    <div className="flex justify-between items-baseline mb-3">
                      <h3 className="text-xl font-bold text-[#1e264f]">{step.title}</h3>
                      {/* <span className="text-gray-400 text-sm">{step.duration}</span> */}
                    </div>
                    <p className="leading-relaxed text-sm md:text-base" style={{ color: '#09094C' }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex justify-center mt-16">
              <button className="px-10 py-3.5 bg-[#3f51b5] hover:bg-[#2e3b8a] text-white font-semibold rounded-lg transition-all shadow-md">
                Schedule intro call
              </button>
            </div>
          </div>
        </section>


        {/* Testimonials Slider Section */}
        <section className="testimonials-section">
          <div className="slider-wrapper">
            {/* Left Arrow */}
            <button className="arrow-btn" onClick={prevSlide} aria-label="Previous">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Card */}
            <div className="card-container">
              <div className="card-wrapper">
                <img
                  className="avatar-top"
                  src={testimonials[currentSlide].avatar}
                  alt={testimonials[currentSlide].author}
                />
                <div
                  className={`testimonial-card ${animating
                    ? direction > 0
                      ? "card-enter"
                      : "card-enter-left"
                    : "card-visible"
                    }`}
                >
                  <div className="author-row">
                   <p className="font-bold text-md text-[#09094C]">{testimonials[currentSlide].role}</p>
                  </div><br />
                  <p className="quote-text">
                    {testimonials[currentSlide].quote}
                  </p>

                </div>
              </div>
            </div>

            {/* Right Arrow */}
            <button className="arrow-btn" onClick={nextSlide} aria-label="Next">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots */}
          <div className="dots">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`dot ${idx === currentSlide ? "active" : "inactive"}`}
                onClick={() => goTo(idx, idx > currentSlide ? 1 : -1)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </section>


        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">

          {/* Background Layer - Section Only */}
          <div className="absolute inset-0 z-0">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br" />

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
              Add Flavours of <br />
              <span className="opacity-100">Growth to your Food Business with BlueBerrie</span>
            </h2>

            <p className="text-lg md:text-xl text-[#09094C]/80 mb-10 font-bold  max-w-2xl mx-auto leading-relaxed ">
              Hungry for growth? Reach out to BlueBerrie for a consultation. We'll help you cook up a strategy that turns diners into devoted fans.
            </p>

            <button 
              onClick={() => setIsQuoteModalOpen(true)}
              className="px-10 py-4 bg-white text-[#09094C] font-bold rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Let's Talk
            </button>
          </div>
        </section>
      
      {/* Quote Modal */}
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
      </main>

    </div>
  )
}
