'use client'

import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { useRouter } from 'next/navigation';



const clients = [
  {
    name: "Great Product, No Sales System",
    duration: "Founders build strong products but lack a structured revenue engine to sell consistently.",
    service: "360° marketing",
    logoFull: (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
        <div style={{ position: "relative", width: 64, height: 32 }}>
          <div style={{
            position: "absolute", left: 0, top: 0,
            width: 32, height: 32, borderRadius: "50%",
            border: "2px solid #09094c", background: "transparent"
          }} />
          <div style={{
            position: "absolute", left: 18, top: 0,
            width: 32, height: 32, borderRadius: "50%",
            border: "2px solid #09094c", background: "white"
          }} />
        </div>
        <span style={{ fontSize: 9, letterSpacing: "0.15em", fontFamily: "Georgia, serif", color: "#09094c", fontWeight: 600 }}>ARTISTAGTY</span>
      </div>
    )
  },
  {
    name: "Unclear Go-To-Market Direction",
    duration: "Businesses enter markets without validated positioning, segments, or pricing strategy.",
    service: "Web Design",
    logoFull: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
        <circle cx="26" cy="14" r="6" stroke="#09094c" strokeWidth="1.8" fill="none" />
        <circle cx="14" cy="34" r="6" stroke="#09094c" strokeWidth="1.8" fill="none" />
        <circle cx="38" cy="34" r="6" stroke="#09094c" strokeWidth="1.8" fill="none" />
        <circle cx="26" cy="26" r="3" stroke="#09094c" strokeWidth="1.5" fill="none" />
        <line x1="26" y1="20" x2="26" y2="23" stroke="#09094c" strokeWidth="1.5" />
        <line x1="19" y1="30" x2="23" y2="28" stroke="#09094c" strokeWidth="1.5" />
        <line x1="33" y1="30" x2="29" y2="28" stroke="#09094c" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    name: "Sales Execution Gaps",
    duration: "Hiring sales teams without process, training, and measurement leads to inconsistent results.",
    service: "360° marketing",
    logoFull: (
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <svg width="36" height="40" viewBox="0 0 36 40" fill="none">
          <path d="M6 36 Q9 10 18 8 Q27 10 30 36" stroke="#09094c" strokeWidth="1.8" fill="none" strokeLinecap="round" />
          <path d="M16 34 Q13 20 20 14" stroke="#09094c" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <ellipse cx="18" cy="36" rx="12" ry="3" stroke="#09094c" strokeWidth="1.5" fill="none" />
        </svg>
        <div>
          <div style={{ fontSize: 17, fontWeight: 700, color: "#09094c", lineHeight: 1.15, fontFamily: "Georgia, serif" }}>coffee</div>
          <div style={{ fontSize: 17, fontWeight: 700, color: "#09094c", lineHeight: 1.15, fontFamily: "Georgia, serif" }}>bloom</div>
        </div>
      </div>
    )
  },
  {
    name: "Marketing Without Revenue Impact",
    duration: "Campaigns generate visibility but fail to convert into qualified pipeline.",
    service: "Web Optimization",
    logoFull: (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
        <div style={{ display: "flex", gap: 5, marginBottom: 3 }}>
          {[...Array(5)].map((_, i) => (
            <div key={i} style={{ width: 4, height: 4, borderRadius: "50%", background: "#09094c" }} />
          ))}
        </div>
        <div style={{
          fontSize: 22, fontWeight: 800, color: "#09094c",
          fontFamily: "Georgia, serif", letterSpacing: "0.04em",
          fontStyle: "italic", borderBottom: "2px solid #09094c", paddingBottom: 1
        }}>MINIMAL</div>
        <div style={{ fontSize: 7, letterSpacing: "0.35em", color: "#09094c", fontFamily: "sans-serif" }}>RESTAURANT</div>
      </div>
    )
  }
];

export default function Marketing() {

  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState(0); // -1 left, 1 right
  const [hovered, setHovered] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleServiceClick = (serviceNumber: number) => {
    console.log(`Service ${serviceNumber} clicked - redirecting to submain`);
    router.push(`/submain?solution=${serviceNumber}`);
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
      title: 'Audit Before Action',
      duration: '10 min',
      description: 'We diagnose revenue leaks, market gaps, and structural inefficiencies before recommending strategy',
    },
    {
      number: '2',
      title: 'Build for Sustainability',
      duration: '7 days',
      description: 'Every sales system we design includes documented processes, KPI dashboards, and repeatable frameworks.',
    },
    {
      number: '3',
      title: 'Integrated Execution',
      duration: '14 days',
      description: 'Marketing campaigns, CRM systems, sales scripts, and performance metrics operate under one unified plan',
    },
  ];

  const services = [
    {
      title: "Build–Operate–Transfer Sales Engine",
      description:
        "We build your entire sales ecosystem from scratch — strategy, hiring, training, tools, execution, and performance tracking. We operate it for a defined period (typically 3–6 months), optimize results, and then transfer a fully functioning revenue engine to your leadership team.",
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
      title: "Go-to-Market Strategy & Sales Enablement",
      description:
        "We conduct deep market research, define ideal customer segments, craft positioning and pricing strategy, and align sales processes with launch execution. This ensures your product enters the market with clarity and measurable traction.",
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
    {
      title: "Digital Marketing & Automation",
      description:
        "We implement SEO, paid acquisition, content strategy, and marketing automation systems that feed high-quality leads into your sales funnel and nurture them until conversion.",
      icon: (
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <line x1="26" y1="4" x2="26" y2="12" />
          <line x1="10" y1="12" x2="42" y2="12" />
          <line x1="14" y1="12" x2="14" y2="44" />
          <line x1="38" y1="12" x2="38" y2="44" />
          <line x1="6" y1="44" x2="46" y2="44" />
          <rect x="20" y="28" width="12" height="16" />
          <path d="M10 12 L26 4 L42 12" />
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
        "Identify immediate leakage points and improve conversion rates.",
      role: "Sales Funnel Audi",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      quote:
        "Implement structured tracking, dashboards, and automation workflows.",
      role: "CRM Optimization",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      quote:
        "Reallocate marketing spend toward channels with measurable ROI.",
      role: "Campaign Performance Review",
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
            <img 
              src="/blueberrie01.png" 
              alt="Blueberrie" 
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
            />
          </div>

          {/* Center Links - Desktop Only */}
          <div className="hidden md:flex gap-8">
            {['BRANDING', 'HR HOME PAGE', 'FOOD HOME PAGE', 'MARKETING'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[#464196] hover:text-[#09094C] transition-colors text-sm"
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
                    className="text-[#464196] hover:text-[#09094C] transition-colors text-sm px-6 py-3"
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

        {/* Hero Section */}
         <div className="relative z-5 flex flex-col items-center justify-center px-4 md:px-8 py-16 md:py-24 min-h-screen">
          {/* Main Heading */}
          <div className="text-center max-w-4xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#464196] mb-6 leading-tight">
              BUILD THE RIGHT
              <span className="block">REVENUE DRIVERS</span>
              <span className="block">WITH BLUEBERRIE</span>
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-[#464196] mb-8 leading-relaxed max-w-2xl mx-auto font-medium">
              See the schedule and set times.
            </p>
          </div>

          {/* Featured Video Card */}
          <div className="relative mt-12 md:mt-16 w-full max-w-2xl px-4">
            {/* Decorative background blur effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#B9B9FF]/30 to-[#464196]/30 rounded-3xl md:rounded-4xl blur-2xl" />

            {/* Glass morphism card */}
            <div className="relative bg-white/85 backdrop-blur-xl border border-white/70 rounded-3xl md:rounded-4xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow">
              {/* Video Thumbnail Area */}
              <div className="w-full aspect-video md:aspect-auto md:h-64 bg-gradient-to-br from-[#B9B9FF] via-white to-[#464196] flex items-center justify-center relative overflow-hidden">
                {/* Gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#464196]/20 to-transparent" />

                {/* Video content area */}
                <div className="relative z-10 text-center">
                  {/* Play button icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full mb-4 transition-colors cursor-pointer" style={{ background: '#464196' }}>
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>

                  <p className="text-[#464196] font-black text-base md:text-lg">Featured Campaign</p>
                  <p className="text-[#464196]/70 text-xs md:text-xs mt-2">Click to watch our latest digital marketing reel</p>
                </div>
              </div>

              {/* Card Footer */}
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
                  Drive predictable revenue with strategic sales architecture, not random marketing activity. At BlueBerrie, we design, build, and operationalize complete revenue engines — from go-to-market strategy to sales team execution. Whether you are launching a new company or scaling an existing one, we ensure your sales and marketing ecosystem works as one integrated growth machine.
                </p>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-0 items-start">
              {services.map((service, idx) => {
                const col = idx % 3;
                const offsetClass = offsets[col];
                return (
                  <div
                    key={idx}
                    className={`service-card group relative pt-8 pb-10 border-t border-gray-300 hover:border-gray-800 ${idx >= 3 ? offsetClass + " mt-10" : offsetClass}`}
                    onMouseEnter={() => setHovered(idx)}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => handleServiceClick(idx + 1)}
                  >
                    {/* Arrow top-right */}
                    <div className="arrow-icon absolute top-8 right-0" style={{ color: '#09094C' }}>
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
                  <div className="rounded-xl p-5 mb-3" style={{ background: "#f3f4f6", minHeight: 130 }}>
                    <p className="font-bold text-sm mb-1" style={{ color: "#09094c" }}>{client.name}</p>
                    <p className="text-xs mb-4" style={{ color: "#6b7280" }}>{client.duration}</p>
                    {/* <span className="inline-block bg-white rounded-full px-3 py-1 text-xs font-medium border border-gray-200" style={{ color: "#09094c" }}>
                      {client.service}
                    </span> */}
                  </div>

                  {/* Logo Card */}
                  <div className="rounded-xl p-5 flex items-center justify-center" style={{ background: "#f3f4f6", height: 140, minHeight: 140 }}>
                    <div className="bg-white rounded-full flex items-center justify-center w-full  py-5 px-6">
                      {client.logoFull}
                    </div>
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
                    <p className="author-role">{testimonials[currentSlide].role}</p>
                  </div><br/>
                  <p className="quote-text">
                    &ldquo;{testimonials[currentSlide].quote}&rdquo;
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
              Boost your <br />
              <span className="opacity-100">Business with BlueBerrie</span>
            </h2>

          <p className="text-lg md:text-xl text-[#09094C]/80 mb-10 font-bold  max-w-2xl mx-auto leading-relaxed ">
              Ready to build a revenue engine that actually delivers? Connect with BlueBerrie for a strategic consultation and discover how we can design, <br className="hidden md:block" />
               operate, and scale your sales ecosystem.
            </p>

          <button className="px-10 py-4 bg-white text-[#09094C] font-bold rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              CTA
            </button>
          </div>
        </section>
      </main>

    </div>
  )
}

