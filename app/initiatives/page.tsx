"use client"

import Navbar from "../Navbar";
import Title from "../Title";
import Footer from "../footer";
{/*import Head from "next/head";
import Image from "next/image";*/}

import localFont from 'next/font/local';

const openlipi = localFont({
  src: '../../public/fonts/openlipi-lichchhavi-bold.ttf',
})

export default function About() {
  return (
    <>
      <Navbar className="text-white" />
      <div className="h-lvh">
        <div className="bg-black bg-cover h-full w-full">
          <div className="text-white flex justify-center items-center h-screen">
            <div className="flex flex-col items-center">
              <Title className="text-white" text="SAALIK: Commited to Preservation" />
              <hr className="h-px md:w-full w-[80%] my-8 bg-green-800 border-0" />
            </div>
          </div>
        </div>
      </div >

      <div id="openlipi" className="flex flex-col justify-center items-center m-5 p-5 my-10">
        <Title text="openlipi" />
        <p className="w-[80%] md:text-lg">
          openlipi is an on-going open-source initiative by Saalik. It aims to develop font system for endangered Nepali writing scripts. Currently, we're working on the Lichchhavi script (this is a sample of the glyphs that we've completed currently). Ultimately, we aim to draft a proposal to the Unicode Consortium to include Nepal's scripts in its standard.
        </p>
        <br />
        <br />
        <p className="w-[80%] text-center md:text-lg">
          Here are samples of the font:
        </p>
        <div className="m-4 w-[70%] flex flex-col md:flex-row justify-between">
          <Title text="a" className={`${openlipi.className} text-9xl md:text-9xl`} />
          <Title text="b" className={`${openlipi.className} text-9xl md:text-9xl`} />
          <Title text="c" className={`${openlipi.className} text-9xl md:text-9xl`} />
          <Title text="d" className={`${openlipi.className} text-9xl md:text-9xl`} />
          <Title text="e" className={`${openlipi.className} text-9xl md:text-9xl`} />
        </div>
        <div className="m-4 w-[70%] flex flex-col md:flex-row justify-between">
          <Title text="f" className={`${openlipi.className} text-9xl md:text-9xl`} />
          <Title text="g" className={`${openlipi.className} text-9xl md:text-9xl`} />
          <Title text="h" className={`${openlipi.className} text-9xl md:text-9xl`} />
          <Title text="i" className={`${openlipi.className} text-9xl md:text-9xl`} />
          <Title text="l" className={`${openlipi.className} text-9xl md:text-9xl`} />
        </div>
        {/* <hr className="h-px w-[50%] my-10 bg-green-800 border-0" />*/}
      </div>

      <div id="openabhilekh" className="relative overflow-hidden bg-black py-16">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-20 left-20 w-64 h-64 border border-green-400 rounded-full" />
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-green-400 rounded-full" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6">
          <Title text="openabhilekh" className="text-white" />
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="rounded-xl border border-green-400/20 bg-gray-900/40 p-6 leading-relaxed text-gray-200 space-y-4">
              <p>
                openabhilekh is our long‑term effort to document, digitize, and preserve Nepal’s manuscript and
                inscription heritage. We focus on careful transcription, rich metadata, and open access so that
                researchers, students, and culture enthusiasts can explore these sources online.
              </p>
              <p>
                Alongside digitization, we are prototyping <span className="text-green-400 font-semibold">transliteration</span> utilities that convert
                indigenous scripts into Devanagari or English. This complements <span className="text-green-400 font-semibold">openlipi</span>, our
                font and standardization initiative aimed at representing endangered scripts accurately in the modern
                stack.
              </p>
            </div>
            <div className="space-y-4">
              <div className="rounded-xl border border-green-400/20 bg-gray-900/40 p-6 text-gray-200">
                <h3 className="text-lg font-semibold text-white mb-3">What we’re building</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.285 6.709a1 1 0 010 1.414l-9.19 9.19a1 1 0 01-1.414 0l-5.966-5.966a1 1 0 111.414-1.414l5.259 5.259 8.483-8.483a1 1 0 011.414 0z"/></svg>
                    Digitization pipeline for manuscripts and stone/metal inscriptions
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.285 6.709a1 1 0 010 1.414l-9.19 9.19a1 1 0 01-1.414 0l-5.966-5.966a1 1 0 111.414-1.414l5.259 5.259 8.483-8.483a1 1 0 011.414 0z"/></svg>
                    Searchable online archive with imagery, transcriptions, and metadata
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.285 6.709a1 1 0 010 1.414l-9.19 9.19a1 1 0 01-1.414 0l-5.966-5.966a1 1 0 111.414-1.414l5.259 5.259 8.483-8.483a1 1 0 011.414 0z"/></svg>
                    Experimental transliteration tools between scripts
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="rounded-lg border border-green-400/20 bg-gray-900/40 p-3">
                  <p className="text-green-400 text-sm font-semibold">Digitize</p>
                  <p className="text-gray-300 text-xs">Scan + catalog</p>
                </div>
                <div className="rounded-lg border border-green-400/20 bg-gray-900/40 p-3">
                  <p className="text-green-400 text-sm font-semibold">Transcribe</p>
                  <p className="text-gray-300 text-xs">Type + annotate</p>
                </div>
                <div className="rounded-lg border border-green-400/20 bg-gray-900/40 p-3">
                  <p className="text-green-400 text-sm font-semibold">Publish</p>
                  <p className="text-gray-300 text-xs">Share openly</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <a href="/contact" className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors">Partner with us</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
