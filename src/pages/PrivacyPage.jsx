import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';

const PrivacyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-screen min-h-screen bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0">
        {/* Techno Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,157,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(157,0,255,0.1)_1px,transparent_1px)] bg-[length:40px_40px]" />
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00ff9d]/20 rounded-full filter blur-[100px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#9d00ff]/20 rounded-full filter blur-[100px] animate-float-delayed" />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
      </div>

      {/* Navbar */}
      <Navbar />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-screen min-h-screen py-20 px-4 animate-fade-in">
        <div className="w-full max-w-4xl mx-auto relative pt-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00ff9d] via-[#ffffff] to-[#9d00ff] mb-8">
            Privacy Policy
          </h1>
          
          <div className="bg-black/50 backdrop-blur-md p-6 rounded-lg border border-white/10 shadow-lg">
            <p className="text-gray-300 mb-4">Last Updated: June 2, 2024</p>
            
            <h2 className="text-2xl text-white font-semibold mb-4">Introduction</h2>
            <p className="text-gray-300 mb-4">
              This Privacy Policy describes how our Telegram AI Assistant Bot ("we", "our", or "us") collects, uses, and discloses your information when you use our service to schedule meetings through your Google account.
            </p>
            
            <h2 className="text-2xl text-white font-semibold mb-4">Google API Services User Data Policy</h2>
            <p className="text-gray-300 mb-4">
              Our use and transfer of information received from Google APIs to any other app will adhere to <a href="https://developers.google.com/terms/api-services-user-data-policy" className="text-[#00ff9d] hover:underline">Google API Services User Data Policy</a>, including the Limited Use requirements.
            </p>
            
            <h2 className="text-2xl text-white font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions about this Privacy Policy or how we handle your data with Google Calendar integration, please contact us at support@telegram-ai-agent.com.
            </p>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </div>
  );
};

export default PrivacyPage; 