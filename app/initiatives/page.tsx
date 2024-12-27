"use client"

import Navbar from "../Navbar";
import Title from "../Title";
import Footer from "../footer";
{/*import Head from "next/head";
import Image from "next/image";*/}
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

      <div className="flex flex-col justify-center items-center m-5 p-5 my-10">
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
          <Title text="a" className="font-['openlipi-lichchhavi'] text-9xl md:text-9xl" />
          <Title text="b" className="font-['openlipi-lichchhavi'] text-9xl md:text-9xl" />
          <Title text="c" className="font-['openlipi-lichchhavi'] text-9xl md:text-9xl" />
          <Title text="d" className="font-['openlipi-lichchhavi'] text-9xl md:text-9xl" />
          <Title text="e" className="font-['openlipi-lichchhavi'] text-9xl md:text-9xl" />
        </div>
        <div className="m-4 w-[70%] flex flex-col md:flex-row justify-between">
          <Title text="f" className="font-['openlipi-lichchhavi'] text-9xl md:text-9xl" />
          <Title text="g" className="font-['openlipi-lichchhavi'] text-9xl md:text-9xl" />
          <Title text="h" className="font-['openlipi-lichchhavi'] text-9xl md:text-9xl" />
          <Title text="i" className="font-['openlipi-lichchhavi'] text-9xl md:text-9xl" />
          <Title text="j" className="font-['openlipi-lichchhavi'] text-9xl md:text-9xl" />
        </div>
        {/* <hr className="h-px w-[50%] my-10 bg-green-800 border-0" />*/}
      </div>
      <div className="flex flex-col justify-center items-center p-5 mt-10 bg-black">
        <Title text="openabhilekh" className="text-white" />
      </div>
      <Footer />
    </>
  )
}
