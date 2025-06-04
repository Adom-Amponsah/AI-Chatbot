import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';

const PrivacyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-screen min-h-screen bg-black relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="fixed inset-0 z-0">
        {/* Improved Techno Grid with Animation */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,157,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(157,0,255,0.1)_1px,transparent_1px)] bg-[length:40px_40px] animate-[grid-move_20s_linear_infinite]" />
        
        {/* Enhanced Glowing Orbs with Better Animation */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00ff9d]/10 rounded-full filter blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#9d00ff]/10 rounded-full filter blur-[120px] animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full filter blur-[120px] animate-pulse" />
        
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black" />
      </div>

      {/* Navbar */}
      <Navbar />
      
      {/* Enhanced Content with Better Animation and Layout */}
      <div className="relative z-10 flex flex-col items-center justify-center w-screen min-h-screen py-20 px-4 animate-fade-in">
        <div className="w-full max-w-4xl mx-auto relative pt-16">
          {/* Decorative Elements */}
          <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-[#00ff9d] to-[#9d00ff] blur-sm" />
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#00ff9d] to-[#9d00ff]" />

          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00ff9d] via-[#ffffff] to-[#9d00ff] mb-8 text-center animate-slide-up">
            Privacy Policy
          </h1>
          
          <div className="space-y-8 animate-slide-up delay-200">
            <div className="bg-black/50 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-lg text-gray-300 leading-relaxed hover:border-white/20 transition-all duration-300">
              <p className="text-gray-400 mb-6 inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10">Version 1.0 - November 26, 2024</p>
              
              <p className="mb-6 text-lg">
                Qasemo technologies, a registered LLC doing business as MasterPa ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services, including our Telegram service powered by OpenAI. Please read this policy carefully to understand our practices regarding your information.
              </p>
              
              <div className="space-y-12">
                {/* Section 1 */}
                <section className="group">
                  <h2 className="text-3xl text-white font-semibold mb-6 flex items-center space-x-3 group-hover:text-[#00ff9d] transition-colors duration-300">
                    <span className="inline-block w-8 h-[2px] bg-gradient-to-r from-[#00ff9d] to-[#9d00ff]"></span>
                    <span>Personal Data We Collect</span>
                  </h2>
                  
                  <div className="space-y-6 pl-11">
                    <h3 className="text-xl text-[#00ff9d] font-semibold mb-3">Personal Data You Provide:</h3>
                    <div className="space-y-4 bg-white/5 p-6 rounded-xl border border-white/10">
                      <p className="flex items-start"><span className="text-[#00ff9d] mr-2">•</span> <strong className="text-white">Account Information:</strong> When you create an account with us, we collect information such as your name, contact information, account credentials, and payment information.</p>
                      <p className="flex items-start"><span className="text-[#00ff9d] mr-2">•</span> <strong className="text-white">User Content:</strong> We collect data you provide through our services, including messages and other content you upload.</p>
                      <p className="flex items-start"><span className="text-[#00ff9d] mr-2">•</span> <strong className="text-white">Communication Information:</strong> If you communicate with us via email or social media, we may collect your name, contact information, and message contents.</p>
                    </div>

                    <h3 className="text-xl text-[#00ff9d] font-semibold mb-3">Personal Data We Receive from Your Use of the Services:</h3>
                    <div className="space-y-4 bg-white/5 p-6 rounded-xl border border-white/10">
                      <p className="flex items-start"><span className="text-[#00ff9d] mr-2">•</span> <strong className="text-white">Log Data:</strong> Information your device sends when using our services.</p>
                      <p className="flex items-start"><span className="text-[#00ff9d] mr-2">•</span> <strong className="text-white">Usage Data:</strong> Information about how you use our services.</p>
                      <p className="flex items-start"><span className="text-[#00ff9d] mr-2">•</span> <strong className="text-white">Device Information:</strong> Details about the device used to access our services.</p>
                      <p className="flex items-start"><span className="text-[#00ff9d] mr-2">•</span> <strong className="text-white">Location Information:</strong> General location derived from your IP address.</p>
                    </div>
                  </div>
                </section>

                {/* Section 2 */}
                <section className="group">
                  <h2 className="text-3xl text-white font-semibold mb-6 flex items-center space-x-3 group-hover:text-[#00ff9d] transition-colors duration-300">
                    <span className="inline-block w-8 h-[2px] bg-gradient-to-r from-[#00ff9d] to-[#9d00ff]"></span>
                    <span>How We Use Personal Data</span>
                  </h2>
                  
                  <div className="pl-11 space-y-4 bg-white/5 p-6 rounded-xl border border-white/10">
                    <p className="mb-4">We may use Personal Data for the following purposes:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start"><span className="text-[#00ff9d] mr-2">•</span> To provide and maintain our services</li>
                      <li className="flex items-start"><span className="text-[#00ff9d] mr-2">•</span> To improve and develop new features</li>
                      <li className="flex items-start"><span className="text-[#00ff9d] mr-2">•</span> To communicate with you about updates or changes</li>
                      <li className="flex items-start"><span className="text-[#00ff9d] mr-2">•</span> To prevent fraud and ensure security</li>
                      <li className="flex items-start"><span className="text-[#00ff9d] mr-2">•</span> To comply with legal obligations</li>
                    </ul>
                  </div>
                </section>

                {/* Section 3 */}
                <section className="group">
                  <h2 className="text-3xl text-white font-semibold mb-6 flex items-center space-x-3 group-hover:text-[#00ff9d] transition-colors duration-300">
                    <span className="inline-block w-8 h-[2px] bg-gradient-to-r from-[#00ff9d] to-[#9d00ff]"></span>
                    <span>Disclosure of Personal Data</span>
                  </h2>
                  
                  <div className="pl-11 space-y-4 bg-white/5 p-6 rounded-xl border border-white/10">
                    <p className="mb-4">We may disclose your Personal Data in the following circumstances:</p>
                    <p className="flex items-start"><span className="text-[#00ff9d] mr-2">•</span> <strong className="text-white">Vendors and Service Providers:</strong> To assist in business operations</p>
                    <p className="flex items-start"><span className="text-[#00ff9d] mr-2">•</span> <strong className="text-white">Business Transfers:</strong> In the event of a merger or acquisition</p>
                    <p className="flex items-start"><span className="text-[#00ff9d] mr-2">•</span> <strong className="text-white">Government Authorities:</strong> As required by law or to protect rights</p>
                    <p className="flex items-start"><span className="text-[#00ff9d] mr-2">•</span> <strong className="text-white">Affiliates:</strong> For consistent service delivery across affiliated entities</p>
                  </div>
                </section>

                {/* Section 4-9 */}
                <section className="group">
                  <h2 className="text-3xl text-white font-semibold mb-6 flex items-center space-x-3 group-hover:text-[#00ff9d] transition-colors duration-300">
                    <span className="inline-block w-8 h-[2px] bg-gradient-to-r from-[#00ff9d] to-[#9d00ff]"></span>
                    <span>Additional Information</span>
                  </h2>
                  
                  <div className="pl-11 space-y-8">
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                      <h3 className="text-xl text-[#00ff9d] font-semibold mb-3">Retention of Personal Data</h3>
                      <p className="mb-4">We retain Personal Data only as long as necessary for service provision or legal compliance. Retention periods depend on factors like data sensitivity and legal requirements.</p>
                    </div>

                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                      <h3 className="text-xl text-[#00ff9d] font-semibold mb-3">Your Rights</h3>
                      <p className="mb-4">Depending on your location, you may have rights such as:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Accessing or correcting your Personal Data</li>
                        <li>Deleting your Personal Data</li>
                        <li>Objecting to data processing</li>
                      </ul>
                      <p className="mt-4">You can exercise these rights by contacting us at <a href="mailto:mymasterpa@gmail.com" className="text-[#00ff9d] hover:underline transition-colors duration-300">mymasterpa@gmail.com</a>.</p>
                    </div>

                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                      <h3 className="text-xl text-[#00ff9d] font-semibold mb-3">Children</h3>
                      <p>Our services are not intended for children under 13. We do not knowingly collect data from children under this age.</p>
                    </div>

                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                      <h3 className="text-xl text-[#00ff9d] font-semibold mb-3">Security</h3>
                      <p>We implement measures to protect your data but cannot guarantee complete security due to inherent internet risks.</p>
                    </div>

                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                      <h3 className="text-xl text-[#00ff9d] font-semibold mb-3">Changes to This Privacy Policy</h3>
                      <p>We may update this policy periodically. Changes will be posted with an updated effective date.</p>
                    </div>

                    <div className="bg-white/5 p-6 rounded-xl border border-white/10 group/contact hover:border-[#00ff9d]/30 transition-all duration-300">
                      <h3 className="text-xl text-[#00ff9d] font-semibold mb-3 group-hover/contact:text-white transition-colors duration-300">Contact Us</h3>
                      <p className="mb-4">If you have questions or concerns about this Privacy Policy, please contact us at <a href="mailto:mymasterpa@gmail.com" className="text-[#00ff9d] hover:underline transition-colors duration-300">mymasterpa@gmail.com</a>.</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />
    </div>
  );
};

export default PrivacyPage;