"use client"

import Navbar from "../Navbar";
import Title from "../Title";
import Footer from "../footer";
import Head from "next/head";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Head>
        <title>SAALIK-About</title>
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
                Discover the Untold Stories of Nepal
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-tight tracking-tight">
                <span className="text-white">SAALIK:</span>
              </h1>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase leading-tight tracking-tight">
                <span className="text-green-400 drop-shadow-[0_0_20px_rgba(0,230,118,0.5)]">
                  Myths are Messages from the Past
                </span>
              </h2>
              <hr className="h-px md:w-full w-[80%] my-8 bg-green-400 border-0 shadow-[0_0_10px_rgba(0,230,118,0.5)]" />
            </div>
          </div>
        </div>
      </div>
      {/* Enhanced What is SAALIK Section */}
      <section className="py-20 px-8 bg-gradient-to-br from-gray-50 to-white relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-3 pointer-events-none">
          <div className="absolute top-10 right-10 w-64 h-64 border border-green-200 rounded-full"></div>
          <div className="absolute bottom-20 left-10 w-48 h-48 border border-green-200 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left - Image placeholder */}
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center relative overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-bl from-green-400/10 to-transparent"></div>
              <div className="text-center space-y-4 z-10">
                <Image src="/img/patan.png" alt="SAALIK Heritage" width={200} height={200} className="mx-auto rounded-lg" />
                <p className="text-gray-600 text-sm">Cultural Heritage Visualization</p>
              </div>
            </div>
          </div>

          {/* Right - Enhanced Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-gray-900">
              WHAT IS <span className="text-green-500 relative">
                SAALIK
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-green-400 opacity-30"></span>
              </span>?
            </h2>
            
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                <span className="text-green-600 font-semibold">SAALIK</span> is a cultural tourism and heritage platform dedicated to <span className="text-green-600 border-b-2 border-green-200">preserving</span>, 
                promoting, and showcasing <span className="text-green-600 border-b-2 border-green-200">Nepal's statues and sculptures</span>. By blending technology 
                with tradition, we provide travelers, researchers, and culture enthusiasts with an 
                <span className="text-green-600 border-b-2 border-green-200">authentic</span> digital experience.
              </p>
              
              <p>
                Founded by a group of researchers and developers deeply in love with Nepal and the expression of her people, SAALIK concerns itself with digitization of Nepal's tangible and intangible heritages like <span className="text-green-600 border-b-2 border-green-200">sculptures, manuscripts, myths, legends, and writing scripts</span>.
              </p>
              
              <p>
                Our mission is to centralize and <span className="text-green-600 border-b-2 border-green-200">digitalize information</span> on 
                Nepal's cultural heritage, making it accessible worldwide. We envision becoming the 
                leading platform for digital heritage tourism and <span className="text-green-600 border-b-2 border-green-200">cultural preservation</span> in Nepal, 
                bridging the gap between history and innovation.
              </p>
              
              <p>
                SAALIK aims to work with regional bodies—both governmental and non-governmental—for that purpose. We are already in talks with several of Kathmandu district's municipalities, pitching our idea of a <span className="text-green-600 border-b-2 border-green-200">digital haven for heritages</span> located within those areas.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Enhanced Team Section */}
      <section className="py-20 px-8 bg-black relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-20 left-20 w-64 h-64 border border-green-400 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-green-400 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-4">
              OUR <span className="text-green-400 drop-shadow-[0_0_20px_rgba(0,230,118,0.5)]">TEAM</span>
            </h2>
            <hr className="h-px w-32 mx-auto bg-green-400 border-0 shadow-[0_0_10px_rgba(0,230,118,0.5)]" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center p-6 bg-gray-900/50 rounded-lg border border-green-400/20 hover:border-green-400/50 transition-all duration-300">
              <Image src='/img/patan.png' alt="Sarad Gaihre" height={100} width={100} className='rounded-full mb-4 border-2 border-green-400' />
              <h3 className="text-xl font-bold text-white mb-2">Sarad Gaihre</h3>
              <p className="text-green-400 font-semibold mb-4">CEO</p>
              
              <div className='flex space-x-3'>
                <a href="https://www.facebook.com/saalik" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-green-400 transition-colors'>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.042 4.388 23.094 10.125 24v-8.437h-3.047v-3.49h3.047v-2.66c0-3.025 1.793-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.494 0-1.953.928-1.953 1.873v2.296h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.042 24 12.073z" /></svg>
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-green-400 transition-colors'>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.499 6.203a3.008 3.008 0 00-2.116-2.118C19.555 3.579 12 3.579 12 3.579s-7.555 0-9.383.506A3.008 3.008 0 00.501 6.203 32.394 32.394 0 000 11.999a32.394 32.394 0 00.501 5.796 3.008 3.008 0 002.116 2.118c1.828.506 9.383.506 9.383.506s7.555 0 9.383-.506a3.008 3.008 0 002.116-2.118 32.394 32.394 0 00.501-5.796 32.394 32.394 0 00-.501-5.796zM9.545 15.454V8.545l6.364 3.455-6.364 3.454z" /></svg>
                </a>
                <a href="https://www.instagram.com/saalik0" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-green-400 transition-colors'>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 32 32" fill="currentColor">
                    <path d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center p-6 bg-gray-900/50 rounded-lg border border-green-400/20 hover:border-green-400/50 transition-all duration-300">
              <Image src='/img/patan.png' alt="Saugat Shrestha" height={100} width={100} className='rounded-full mb-4 border-2 border-green-400' />
              <h3 className="text-xl font-bold text-white mb-2">Saugat Shrestha</h3>
              <p className="text-green-400 font-semibold">Managing Director</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-gray-900/50 rounded-lg border border-green-400/20 hover:border-green-400/50 transition-all duration-300">
              <Image src='/img/patan.png' alt="Suman Dangal" height={100} width={100} className='rounded-full mb-4 border-2 border-green-400' />
              <h3 className="text-xl font-bold text-white mb-2">Suman Dangal</h3>
              <p className="text-green-400 font-semibold">Chairman</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-gray-900/50 rounded-lg border border-green-400/20 hover:border-green-400/50 transition-all duration-300">
              <Image src='/img/patan.png' alt="Aditya Bista" height={100} width={100} className='rounded-full mb-4 border-2 border-green-400' />
              <h3 className="text-xl font-bold text-white mb-2">Aditya Bista</h3>
              <p className="text-green-400 font-semibold">CFO</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Goals Section */}
      <section className="py-20 px-8 bg-gradient-to-br from-gray-50 to-white relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-3 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 border border-green-200 rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 border border-green-200 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-gray-900 mb-4">
              OUR <span className="text-green-500 relative">
                GOALS
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-green-400 opacity-30"></span>
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Digital Preservation</h3>
              <p className="text-gray-700 leading-relaxed">
                <span className="text-green-600 border-b border-green-200">Transcribe manuscripts</span>, <span className="text-green-600 border-b border-green-200">digitize sculptures</span>, and create comprehensive digital archives to preserve Nepal's cultural heritage for future generations.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Script Development</h3>
              <p className="text-gray-700 leading-relaxed">
                Create <span className="text-green-600 border-b border-green-200">fonts for indigenous scripts</span> and develop <span className="text-green-600 border-b border-green-200">unicode specifications</span> to make Nepal's endangered writing systems accessible on modern devices.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI-Powered Recognition</h3>
              <p className="text-gray-700 leading-relaxed">
                Develop <span className="text-green-600 border-b border-green-200">AI-based statue recognition</span> systems to help identify and interpret Nepal's complex sculptural heritage with advanced technology.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cultural Promotion</h3>
              <p className="text-gray-700 leading-relaxed">
                Promote <span className="text-green-600 border-b border-green-200">myths and legends</span> through digital storytelling and make Nepal's cultural heritage accessible to global audiences through innovative platforms.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Heritage Tourism</h3>
              <p className="text-gray-700 leading-relaxed">
                Bridge the gap between <span className="text-green-600 border-b border-green-200">history and innovation</span> through digital heritage tourism, creating immersive experiences for travelers and researchers.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Future Legacy</h3>
              <p className="text-gray-700 leading-relaxed">
                Ensure our culture is preserved for future generations by creating a <span className="text-green-600 border-b border-green-200">living digital ecosystem</span> that keeps traditions alive and accessible.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
