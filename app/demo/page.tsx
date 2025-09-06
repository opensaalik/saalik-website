"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function DemoPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "THE EMERGING STATUE OF",
      subtitle: "STATUE OF काली",
      description: "Discover the Untold Stories of Nepal"
    },
    {
      title: "THE MYSTICAL TEMPLE OF",
      subtitle: "TEMPLE OF शिव",
      description: "Ancient Heritage in Digital Form"
    },
    {
      title: "THE SACRED SCULPTURE OF",
      subtitle: "SCULPTURE OF विष्णु",
      description: "Preserving Culture Through Technology"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 border border-green-400 rounded-full"></div>
        <div className="absolute bottom-40 right-20 w-64 h-64 border border-green-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 border border-green-400 rounded-full"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between px-8 py-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 border-2 border-green-400 rounded-full flex items-center justify-center">
            <div className="w-6 h-6 bg-green-400 rounded-full"></div>
          </div>
          <span className="text-xl font-bold tracking-wider">SAALIK</span>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-green-400 border-b-2 border-green-400 pb-1 font-semibold">HOME</Link>
          <Link href="/stories" className="hover:text-green-400 transition-colors">STORIES</Link>
          <Link href="/guide" className="hover:text-green-400 transition-colors">GUIDE BOOKING</Link>
          <Link href="/contact" className="hover:text-green-400 transition-colors">CONTACT</Link>
        </div>

        <div className="md:hidden">
          <button className="w-8 h-8 flex flex-col justify-center space-y-1">
            <div className="w-full h-0.5 bg-white"></div>
            <div className="w-full h-0.5 bg-white"></div>
            <div className="w-full h-0.5 bg-white"></div>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-8">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-green-400 text-sm tracking-widest uppercase">
              {slides[currentSlide].description}
            </p>
            
            <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-tight tracking-tight">
                <span className="text-white">{slides[currentSlide].title}</span>
              </h1>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-tight tracking-tight">
                <span className="text-green-400 drop-shadow-[0_0_20px_rgba(0,230,118,0.5)]">
                  {slides[currentSlide].subtitle}
                </span>
              </h2>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center space-x-6">
              <button 
                onClick={prevSlide}
                className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center hover:border-green-400 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-green-400' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextSlide}
                className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center hover:border-green-400 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Content - Statue Image */}
          <div className="relative">
            <div className="relative w-full h-96 md:h-[600px]">
              {/* Placeholder for statue image */}
              <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-green-400/20 to-transparent"></div>
                <div className="text-center space-y-4 z-10">
                  <div className="w-32 h-32 mx-auto bg-gray-600 rounded-full flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-400 text-sm">Statue Image Placeholder</p>
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-green-400/10 blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is SAALIK Section */}
      <section className="py-20 px-8 bg-black/50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Sculpture Image */}
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-bl from-green-400/20 to-transparent"></div>
              <div className="text-center space-y-4 z-10">
                <div className="w-32 h-32 mx-auto bg-gray-600 rounded-full flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-400 text-sm">Sculpture Image Placeholder</p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight">
              WHAT IS <span className="text-green-400 drop-shadow-[0_0_20px_rgba(0,230,118,0.5)]">SAALIK?</span>
            </h2>
            
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                <span className="text-green-400 font-semibold">SAALIK</span> is a cultural tourism and heritage platform dedicated to <span className="text-green-400 underline">preserving</span>, 
                promoting, and showcasing <span className="text-green-400 underline">Nepal's statues and sculptures</span>. By blending technology 
                with tradition, we provide travelers, researchers, and culture enthusiasts with an 
                <span className="text-green-400 underline">authentic</span> digital experience.
              </p>
              
              <p>
                Our mission is to centralize and <span className="text-green-400 underline">digitalize information</span> on 
                Nepal's cultural heritage, making it accessible worldwide. We envision becoming the 
                leading platform for digital heritage tourism and <span className="text-green-400 underline">cultural preservation</span> in Nepal, 
                bridging the gap between history and innovation.
              </p>
              
              <p>
                With features such as <span className="text-green-400 underline">AI-based statue recognition</span>, a verified <span className="text-green-400 underline">guide booking system</span>, 
                personalized <span className="text-green-400 underline">travel itineraries</span>, <span className="text-green-400 underline">emergency help support</span>, and a <span className="text-green-400 underline">community-driven donation system</span>, 
                SAALIK is committed to safeguarding Nepal's timeless legacy while empowering travelers and 
                local communities alike.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Untold Stories Section */}
      <section className="py-20 px-8 relative">
        {/* Background collage placeholder */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-r from-gray-800 to-gray-900 flex items-center justify-center">
            <div className="grid grid-cols-3 gap-4 w-full h-full max-w-4xl">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-gray-700 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight">
            UNTOLD <span className="text-green-400 drop-shadow-[0_0_20px_rgba(0,230,118,0.5)]">STORIES</span>
          </h2>
          
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
            <p>
              Browse through <span className="text-green-400 font-semibold">SAALIK's</span> ever-growing <span className="text-green-400 underline">database of statues</span> and 
              <span className="text-green-400 underline">sculptures</span> from across Nepal, where each piece carries a <span className="text-green-400 underline">story of 
              kings, gods, artisans, and civilizations</span>.
            </p>
            
            <p>
              More than just stone and metal, these statues embody centuries of history, faith, and 
              craftsmanship inviting you to <span className="text-green-400 underline">explore the cultural heartbeat of 
              Nepal</span>.
            </p>
          </div>

          <button className="bg-gradient-to-r from-green-400 to-green-500 text-black font-bold py-4 px-12 rounded-full text-lg uppercase tracking-wider hover:from-green-500 hover:to-green-600 transition-all duration-300 shadow-[0_0_30px_rgba(0,230,118,0.3)] hover:shadow-[0_0_40px_rgba(0,230,118,0.5)]">
            Coming Soon
          </button>
        </div>
      </section>

      {/* Back to main site */}
      <div className="fixed bottom-8 right-8 z-50">
        <Link 
          href="/"
          className="bg-green-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-green-500 transition-colors shadow-lg"
        >
          ← Back to Main Site
        </Link>
      </div>
    </div>
  );
}

