import { useCallback, useEffect, useRef, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { supabase } from "./lib/supabase";
import Navbar from './components/Navbar';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import './App.css'

function HomePage() {
  const containerRef = useRef(null);
  const [isClient, setIsClient] = useState(false);
  const [email, setEmail] = useState("");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollPos, setScrollPos] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');

  useEffect(() => {
    setIsClient(true);
    
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([
          { email, created_at: new Date().toISOString() }
        ]);

      if (error) throw error;

      setSubmitStatus('success');
      setEmail('');
    } catch (error) {
      console.error('Error submitting email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div ref={containerRef} className="w-screen min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 z-0">
        {/* Techno Grid */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(rgba(0,255,157,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(157,0,255,0.1)_1px,transparent_1px)] bg-[length:40px_40px]"
          style={{
            backgroundPositionX: `calc(${mousePos.x * 0.5}px)`,
            backgroundPositionY: `calc(${mousePos.y + scrollPos * 0.5}px)`,
          }}
        />
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00ff9d]/20 rounded-full filter blur-[100px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#9d00ff]/20 rounded-full filter blur-[100px] animate-float-delayed" />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
      </div>

      {/* Sparkles and Particles */}
      {isClient && (
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 120,
            particles: {
              number: {
                value: 80,
                density: {
                  enable: true,
                  area: 800,
                },
              },
              color: {
                value: ["#00ff9d", "#9d00ff", "#ffffff"],
              },
              shape: {
                type: ["circle", "star"],
              },
              opacity: {
                value: { min: 0.1, max: 0.5 },
                animation: {
                  enable: true,
                  speed: 1,
                  sync: false,
                },
              },
              size: {
                value: { min: 1, max: 3 },
                animation: {
                  enable: true,
                  speed: 2,
                  sync: false,
                },
              },
              links: {
                enable: true,
                distance: 150,
                color: "#00ff9d",
                opacity: 0.2,
                width: 1,
              },
              move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: true,
                straight: false,
                outModes: "out",
              },
            },
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "grab",
                },
                onClick: {
                  enable: true,
                  mode: "push",
                },
              },
              modes: {
                grab: {
                  distance: 200,
                  links: {
                    opacity: 0.5,
                  },
                },
                push: {
                  quantity: 4,
                },
              },
            },
          }}
        />
      )}
      
      {/* Navbar */}
      <Navbar />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-screen min-h-screen animate-fade-in">
        <div className="w-full max-w-4xl mx-auto text-center relative px-4 pt-16">
          {/* Decorative Elements */}
          <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-[#00ff9d] to-[#9d00ff] blur-sm" />
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#00ff9d] to-[#9d00ff]" />
          
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00ff9d] via-[#ffffff] to-[#9d00ff] mb-8 animate-slide-up relative group">
            Schedule Meetings Effortlessly with AI
            <div className="absolute inset-0 bg-gradient-to-r from-[#00ff9d]/20 to-[#9d00ff]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </h1>
          
          <p className="text-gray-400 text-xl md:text-2xl mb-12 animate-slide-up delay-200">
            Meet your AI-powered Telegram assistant that connects to your Google Calendar — just tell it who, when, and what, and it handles scheduling meetings, sending invites, and managing your calendar — so you can focus on what matters most.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-300">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00ff9d] to-[#9d00ff] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="relative px-6 py-3 bg-black/80 rounded-lg leading-none flex items-center text-white min-w-[300px] border border-white/10 focus:border-[#00ff9d]/50 transition-colors disabled:opacity-50"
                disabled={isSubmitting}
                required
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="relative group px-8 py-3 bg-gradient-to-r from-[#00ff9d] to-[#9d00ff] rounded-lg text-white font-semibold hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(0,255,157,0.3)] hover:shadow-[0_0_30px_rgba(0,255,157,0.5)] disabled:opacity-50 disabled:cursor-not-allowed min-w-[150px]"
            >
              <span className={`${isSubmitting ? 'opacity-0' : 'opacity-100'} transition-opacity`}>
                Join Waitlist
              </span>
              {isSubmitting && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
            </button>
          </form>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="fixed top-4 right-4 bg-green-500/90 text-white px-6 py-3 rounded-lg shadow-lg transform animate-slide-in-right">
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Successfully joined the waitlist!
              </p>
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="fixed top-4 right-4 bg-red-500/90 text-white px-6 py-3 rounded-lg shadow-lg transform animate-slide-in-right">
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                Failed to join. Please try again.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/legal/privacy" element={<PrivacyPage />} />
      <Route path="/legal/terms" element={<TermsPage />} />
    </Routes>
  );
}

export default App;
