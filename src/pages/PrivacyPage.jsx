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
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00ff9d]/20 rounded-full filter blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#9d00ff]/20 rounded-full filter blur-[100px] animate-pulse" style={{animationDelay: '1s'}} />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
      </div>

      {/* Navbar */}
      <Navbar />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-screen min-h-screen py-20 px-4">
        <div className="w-full max-w-4xl mx-auto relative pt-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00ff9d] via-[#ffffff] to-[#9d00ff] mb-8 text-center">
            Privacy Policy
          </h1>
          
          <div className="bg-black/50 backdrop-blur-md p-8 rounded-lg border border-white/10 shadow-lg text-gray-300 leading-relaxed">
            <p className="text-gray-400 mb-6">Version 1.0 - November 26, 2024</p>
            
            <p className="mb-6">
              Qasemo technologies, a registered LLC doing business as MasterPa ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services, including our Telegram service powered by OpenAI. Please read this policy carefully to understand our practices regarding your information.
            </p>
            
            <h2 className="text-2xl text-white font-semibold mb-4 mt-8">1. Personal Data We Collect</h2>
            <p className="mb-4">We collect personal data relating to you ("Personal Data") as follows:</p>
            
            <h3 className="text-xl text-[#00ff9d] font-semibold mb-3">Personal Data You Provide:</h3>
            <p className="mb-3"><strong>Account Information:</strong> When you create an account with us, we collect information such as your name, contact information, account credentials, and payment information.</p>
            <p className="mb-3"><strong>User Content:</strong> We collect data you provide through our services, including messages and other content you upload.</p>
            <p className="mb-4"><strong>Communication Information:</strong> If you communicate with us via email or social media, we may collect your name, contact information, and message contents.</p>
            
            <h3 className="text-xl text-[#00ff9d] font-semibold mb-3">Personal Data We Receive from Your Use of the Services:</h3>
            <p className="mb-3"><strong>Log Data:</strong> Information your device sends when using our services, such as IP address, browser type, and interaction details.</p>
            <p className="mb-3"><strong>Usage Data:</strong> Information about how you use our services, including content engagement and feature usage.</p>
            <p className="mb-3"><strong>Device Information:</strong> Details about the device used to access our services.</p>
            <p className="mb-3"><strong>Location Information:</strong> General location derived from your IP address or precise location if opted in.</p>
            <p className="mb-6"><strong>Information from Other Sources:</strong> We may receive additional information from partners to enhance security and service quality.</p>
            
            <h2 className="text-2xl text-white font-semibold mb-4 mt-8">2. How We Use Personal Data</h2>
            <p className="mb-4">We may use Personal Data for the following purposes:</p>
            <ul className="list-disc list-inside mb-6 space-y-2 ml-4">
              <li>To provide and maintain our services.</li>
              <li>To improve and develop new features.</li>
              <li>To communicate with you about updates or changes.</li>
              <li>To prevent fraud and ensure security.</li>
              <li>To comply with legal obligations.</li>
            </ul>
            
            <h2 className="text-2xl text-white font-semibold mb-4 mt-8">3. Disclosure of Personal Data</h2>
            <p className="mb-4">We may disclose your Personal Data in the following circumstances:</p>
            <p className="mb-3"><strong>Vendors and Service Providers:</strong> To assist in business operations.</p>
            <p className="mb-3"><strong>Business Transfers:</strong> In the event of a merger or acquisition.</p>
            <p className="mb-3"><strong>Government Authorities:</strong> As required by law or to protect rights.</p>
            <p className="mb-6"><strong>Affiliates:</strong> For consistent service delivery across affiliated entities.</p>
            
            <h2 className="text-2xl text-white font-semibold mb-4 mt-8">4. Retention of Personal Data</h2>
            <p className="mb-6">
              We retain Personal Data only as long as necessary for service provision or legal compliance. Retention periods depend on factors like data sensitivity and legal requirements.
            </p>
            
            <h2 className="text-2xl text-white font-semibold mb-4 mt-8">5. Your Rights</h2>
            <p className="mb-4">Depending on your location, you may have rights such as:</p>
            <ul className="list-disc list-inside mb-6 space-y-2 ml-4">
              <li>Accessing or correcting your Personal Data.</li>
              <li>Deleting your Personal Data.</li>
              <li>Objecting to data processing.</li>
            </ul>
            <p className="mb-6">You can exercise these rights by contacting us at mymasterpa@gmail.com.</p>
            
            <h2 className="text-2xl text-white font-semibold mb-4 mt-8">6. Children</h2>
            <p className="mb-6">
              Our services are not intended for children under 13. We do not knowingly collect data from children under this age.
            </p>
            
            <h2 className="text-2xl text-white font-semibold mb-4 mt-8">7. Security</h2>
            <p className="mb-6">
              We implement measures to protect your data but cannot guarantee complete security due to inherent internet risks.
            </p>
            
            <h2 className="text-2xl text-white font-semibold mb-4 mt-8">8. Changes to This Privacy Policy</h2>
            <p className="mb-6">
              We may update this policy periodically. Changes will be posted with an updated effective date.
            </p>
            
            <h2 className="text-2xl text-white font-semibold mb-4 mt-8">9. Contact Us</h2>
            <p className="mb-6">
              If you have questions or concerns about this Privacy Policy, please contact us at <a href="mailto:mymasterpa@gmail.com" className="text-[#00ff9d] hover:underline">mymasterpa@gmail.com</a>.
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