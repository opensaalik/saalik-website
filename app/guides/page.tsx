"use client"

import Navbar from "../Navbar";
import Title from "../Title";
import Footer from "../footer";
import Head from "next/head";
import Image from "next/image";

export default function Guides() {
  return (
    <>
      <Head>
        <title>SAALIK-Guides</title>
      </Head>
      <Navbar className="text-white" />
      
      {/* Enhanced Hero Section */}
      <div className="h-lvh relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 border border-green-400 rounded-full"></div>
          <div className="absolute bottom-40 right-20 w-64 h-64 border border-green-400 rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 border border-green-400 rounded-full"></div>
        </div>
        
        <div className="bg-gradient-to-br from-black via-green-900/20 to-black bg-cover h-full w-full">
          <div className="text-white flex justify-center items-center h-screen relative z-10">
            <div className="flex flex-col items-center text-center space-y-6">
              <p className="text-green-400 text-sm tracking-widest uppercase mb-4">
                Navigate Nepal&apos;s Cultural Heritage
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-tight tracking-tight">
                <span className="text-white">HERITAGE</span>
              </h1>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase leading-tight tracking-tight">
                <span className="text-green-400 drop-shadow-[0_0_20px_rgba(0,230,118,0.5)]">
                  EXPLORATION GUIDES
                </span>
              </h2>
              <hr className="h-px md:w-full w-[80%] my-8 bg-green-400 border-0 shadow-[0_0_10px_rgba(0,230,118,0.5)]" />
            </div>
          </div>
        </div>
      </div>

      {/* Guide Categories Section */}
      <section className="py-20 px-8 bg-gradient-to-br from-gray-50 to-white relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-3 pointer-events-none">
          <div className="absolute top-10 right-10 w-64 h-64 border border-green-200 rounded-full"></div>
          <div className="absolute bottom-20 left-10 w-48 h-48 border border-green-200 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-gray-900 mb-4">
              EXPLORE <span className="text-green-500 relative">
                NEPAL&apos;S HERITAGE
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-green-400 opacity-30"></span>
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Discover the rich cultural tapestry of Nepal through our comprehensive guides to sculptures, manuscripts, and ancient traditions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sculpture Guide */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-green-100 hover:shadow-xl transition-all duration-300 group">
              <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center relative overflow-hidden">
                <Image src="/img/sculpture.jpg" alt="Ancient Sculptures" width={300} height={200} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Sculpture Recognition Guide</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Learn to identify and understand Nepal&apos;s intricate stone and metal sculptures. From <span className="text-green-600 border-b border-green-200">Hindu deities</span> to <span className="text-green-600 border-b border-green-200">Buddhist iconography</span>.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-semibold text-sm">25+ Sculptures</span>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors text-sm font-medium">
                    Explore →
                  </button>
                </div>
              </div>
            </div>

            {/* Manuscript Guide */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-green-100 hover:shadow-xl transition-all duration-300 group">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center relative overflow-hidden">
                <div className="text-center space-y-4 z-10">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-blue-700 font-medium">Ancient Manuscripts</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Manuscript Reading Guide</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Decode ancient <span className="text-green-600 border-b border-green-200">Lichchhavi scripts</span> and understand the stories preserved in Nepal&apos;s historical manuscripts and palm leaf texts.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-semibold text-sm">15+ Scripts</span>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors text-sm font-medium">
                    Explore →
                  </button>
                </div>
              </div>
            </div>

            {/* Cultural Sites Guide */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-green-100 hover:shadow-xl transition-all duration-300 group">
              <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center relative overflow-hidden">
                <Image src="/img/patan.png" alt="Cultural Sites" width={300} height={200} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Heritage Sites Guide</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Navigate through <span className="text-green-600 border-b border-green-200">UNESCO World Heritage Sites</span> and discover hidden cultural gems across the Kathmandu Valley.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-semibold text-sm">7+ Sites</span>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors text-sm font-medium">
                    Explore →
                  </button>
                </div>
              </div>
            </div>

            {/* Mythology Guide */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-green-100 hover:shadow-xl transition-all duration-300 group">
              <div className="h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center relative overflow-hidden">
                <div className="text-center space-y-4 z-10">
                  <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-orange-700 font-medium">Sacred Stories</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Mythology & Legends Guide</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Uncover the <span className="text-green-600 border-b border-green-200">sacred stories</span> and mythological narratives that shaped Nepal&apos;s cultural identity through centuries.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-semibold text-sm">20+ Stories</span>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors text-sm font-medium">
                    Explore →
                  </button>
                </div>
              </div>
            </div>

            {/* Digital Tools Guide */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-green-100 hover:shadow-xl transition-all duration-300 group">
              <div className="h-48 bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center relative overflow-hidden">
                <div className="text-center space-y-4 z-10">
                  <div className="w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-teal-700 font-medium">Digital Tools</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Digital Heritage Tools</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Learn to use our <span className="text-green-600 border-b border-green-200">AI recognition tools</span> and digital platforms for heritage exploration and research.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-semibold text-sm">5+ Tools</span>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors text-sm font-medium">
                    Explore →
                  </button>
                </div>
              </div>
            </div>

            {/* Research Guide */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-green-100 hover:shadow-xl transition-all duration-300 group">
              <div className="h-48 bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center relative overflow-hidden">
                <div className="text-center space-y-4 z-10">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-red-700 font-medium">Research Methods</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Research Methodology Guide</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Master the techniques for <span className="text-green-600 border-b border-green-200">cultural heritage research</span> and contribute to Nepal&apos;s digital preservation efforts.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-semibold text-sm">10+ Methods</span>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors text-sm font-medium">
                    Explore →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}