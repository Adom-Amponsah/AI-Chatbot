import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';

const TermsPage = () => {
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
            Terms of Service
          </h1>
          
          <div className="bg-black/50 backdrop-blur-md p-6 rounded-lg border border-white/10 shadow-lg">
            <p className="text-gray-300 mb-4">Last Updated: June 2, 2024</p>
            
            <h2 className="text-2xl text-white font-semibold mb-4">1. Description of Service</h2>
            <p className="text-gray-300 mb-4">
              Our Telegram AI Agent bot is designed to help you manage your schedule by connecting to your Google account to schedule meetings, send invites, and manage calendar events. The bot uses artificial intelligence to understand and process your scheduling requests through Telegram.
            </p>
            
            <h2 className="text-2xl text-white font-semibold mb-4">2. Google Account Authorization</h2>
            <p className="text-gray-300 mb-4">
              To use our Service, you will need to authorize the bot to access your Google Calendar. You acknowledge and agree that:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>You are granting our bot permission to view, create, and modify calendar events</li>
              <li>You have the legal right to provide access to the Google account you connect</li>
              <li>You can revoke this access at any time through your Google Account settings</li>
            </ul>
            
            <h2 className="text-2xl text-white font-semibold mb-4">3. Privacy Policy</h2>
            <p className="text-gray-300 mb-4">
              Your use of our Telegram bot is governed by our <a href="#/legal/privacy" className="text-[#00ff9d] hover:underline">Privacy Policy</a>, which is incorporated into these Terms by reference.
            </p>
            
            <h2 className="text-2xl text-white font-semibold mb-4">4. Contact Us</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions about these Terms, please contact us at support@telegram-ai-agent.com.
            </p>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </div>
  );
};

export default TermsPage;