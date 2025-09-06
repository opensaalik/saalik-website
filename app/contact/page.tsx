"use client";

import Navbar from "../Navbar";
import Footer from "../footer";
import Head from "next/head";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>SAALIK - Reach Us</title>
      </Head>
      <Navbar className="text-white" />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-black via-green-900/20 to-black">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 border border-green-400 rounded-full"></div>
          <div className="absolute bottom-40 right-20 w-64 h-64 border border-green-400 rounded-full"></div>
        </div>
        <div className="max-w-6xl mx-auto px-6 py-20 text-center relative z-10">
          <p className="text-green-400 tracking-widest uppercase mb-3 text-sm">We'd love to hear from you</p>
          <h1 className="text-4xl md:text-6xl font-black text-white">Reach Us</h1>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">Questions, partnerships, or feedback about Nepal's cultural heritage—drop us a line and we'll get back to you.</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
        {/* Contact Details */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Contact Details</h2>
            <p className="text-gray-600 mt-2">Prefer email or a quick call? Use the details below.</p>
          </div>
          <div className="rounded-lg border border-green-100 p-6 bg-white shadow-sm">
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start">
                <span className="w-6 h-6 text-green-600 mr-3">📧</span>
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:evanzzshrestha7@gmail.com" className="text-green-600 hover:underline">evanzzshrestha7@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start">
                <span className="w-6 h-6 text-green-600 mr-3">📞</span>
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+977-9840836892" className="text-green-600 hover:underline">+977 9840836892</a>
                </div>
              </div>
              <div className="flex items-start">
                <span className="w-6 h-6 text-green-600 mr-3">📍</span>
                <div>
                  <p className="font-medium">Address</p>
                  <p>SAALIK TECH PVT. LTD., Kathmandu, Nepal</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-green-100 p-6 bg-white shadow-sm">
            <h3 className="font-bold text-gray-900 mb-2">Follow Us</h3>
            <div className="space-y-2 text-gray-700">
              <a href="https://www.facebook.com/saalik" target="_blank" rel="noopener noreferrer" className="block hover:text-green-600">Facebook</a>
              <a href="https://www.instagram.com/saalik0" target="_blank" rel="noopener noreferrer" className="block hover:text-green-600">Instagram</a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="block hover:text-green-600">YouTube</a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="rounded-lg border border-green-100 p-6 bg-white shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Send a Message</h2>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Subject</label>
              <input type="text" required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500" placeholder="What is this about?" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea required rows={5} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500" placeholder="Write your message here..." />
            </div>
            <button type="submit" className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition-colors">Send</button>
            <p className="text-xs text-gray-500">This form is a demo and does not send emails yet.</p>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
