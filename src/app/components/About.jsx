"use client";

import { Fa42Group, FaDownload } from "react-icons/fa6";
import ParticleBackground from "./ParticleBackground";

export default function About() {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Anshika_Rai_CV.pdf'; // Place your CV.pdf in public folder
    link.download = 'Anshika_Rai_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="about"
      className="relative py-24 px-6 bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 transition-colors duration-300 overflow-hidden"
    >
      {/* Particle / animated background */}
      <ParticleBackground />
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-200 dark:bg-blue-900/30 rounded-full blur-3xl opacity-20 -top-48 -right-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-yellow-200 dark:bg-yellow-900/30 rounded-full blur-3xl opacity-20 -bottom-48 -left-48 animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Geometric decorative elements */}
        <svg className="absolute w-full h-full opacity-10 dark:opacity-5 animate-updown" viewBox="0 0 1000 1000">
          <circle cx="100" cy="100" r="50" stroke="currentColor" fill="none" className="text-blue-400"/>
          <circle cx="900" cy="900" r="30" stroke="currentColor" fill="none" className="text-yellow-400"/>
          <line x1="100" y1="100" x2="500" y2="500" stroke="currentColor" className="text-blue-300"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="flex items-center justify-center gap-3 mb-16">
           <span className="text-3xl"> 👩🏻</span>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
            About Me
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Profile Image */}
          <div className="flex justify-center">
            <img
              src="/image/Anshika.png"
              alt="Profile"
              className="w-64 h-72 rounded-lg object-cover shadow-lg border-4 border-gray-200 dark:border-gray-800 hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Right Side - About Content */}
          <div className="relative">
            {/* Gray Circle Background */}
            <div className="absolute inset-0 w-80 h-80 bg-gray-300 dark:bg-gray-700 rounded-full opacity-20 blur-2xl"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-4xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                I'm Anshika
              </h3>
              
              <p className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-6">
                Frontend Developer
              </p>

              <div className="p-8 mb-6">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  I'm a passionate developer with expertise in building modern web applications. I specialize in frontend development with a focus on creating seamless user experiences. My journey includes working with cutting-edge technologies like React, Next.js, and Tailwind CSS.
                </p>

                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  <span className="font-bold text-purple-600">Location:</span> Noida, Uttar Pradesh (India)
                </p>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                  <span className="font-bold text-purple-600">Email:</span> anshikarai2962@gmail.com
                </p>
              </div>

              {/* Resume Button */}
              <button 
                onClick={handleResumeDownload}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-purple-700 hover:bg-purple-800 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
              >
                <FaDownload size={20} />
                <span>Resume</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
