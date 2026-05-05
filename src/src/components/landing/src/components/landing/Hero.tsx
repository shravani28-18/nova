import React from "react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white px-6">
      <div className="text-center max-w-3xl">
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          NovaCore Digital
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-4">
          Building modern digital experiences for growing businesses
        </p>

        <p className="text-gray-400 mb-8">
          We help startups, creators, and businesses grow with websites, marketing, and AI automation.
        </p>

        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-lg font-semibold transition">
          Book a Free Consultation
        </button>

      </div>
    </section>
  );
};
