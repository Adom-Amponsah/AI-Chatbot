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
    <div ref={containerRef} className="w-full min-h-screen max-w-full bg-black relative overflow-x-hidden">
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
            Build Trustworthy AI in African Contexts
            <div className="absolute inset-0 bg-gradient-to-r from-[#00ff9d]/20 to-[#9d00ff]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </h1>

          <p className="text-gray-400 text-xl md:text-2xl mb-12 animate-slide-up delay-200">
            We provide high-quality, ethically-labeled datasets across text, audio, image, satellite, and video—powered by local experts across Africa.
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
                Book a Demo
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
                Thank you! We received your request.
              </p>
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="fixed top-4 right-4 bg-red-500/90 text-white px-6 py-3 rounded-lg shadow-lg transform animate-slide-in-right">
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                Oops! Something went wrong. Please try again or email mymasterpa@gmail.com.
              </p>
            </div>
          )}
        </div>

        {/* Who We Help */}
        <section className="mt-32 max-w-4xl mx-auto px-4 animate-fade-in">
          <div className="relative">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#00ff9d] to-[#9d00ff] blur" />
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#00ff9d] via-[#ffffff] to-[#9d00ff] animate-slide-up">Who We Help</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black/60 rounded-2xl border border-white/10 p-8 shadow-lg flex flex-col items-center">
              <span className="mb-3">{/* Circuit SVG */}
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="18" cy="18" r="16" stroke="url(#circuit-grad)" strokeWidth="3" fill="#121212" />
                  <path d="M10 18h16M18 10v16" stroke="url(#circuit-grad)" strokeWidth="2" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="circuit-grad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#00ff9d" />
                      <stop offset="1" stopColor="#9d00ff" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <p className="text-lg text-gray-200 font-semibold">Startups / Enterprises</p>
              <p className="text-gray-400">Building AI tools for African users</p>
            </div>
            <div className="bg-black/60 rounded-2xl border border-white/10 p-8 shadow-lg flex flex-col items-center">
              <span className="mb-3">{/* Chip SVG */}
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="8" width="20" height="20" rx="4" fill="#18181b" stroke="url(#chip-grad)" strokeWidth="2" />
                  <rect x="14" y="14" width="8" height="8" rx="2" fill="url(#chip-grad)" />
                  <defs>
                    <linearGradient id="chip-grad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#00ff9d" />
                      <stop offset="1" stopColor="#9d00ff" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <p className="text-lg text-gray-200 font-semibold">Development Agencies</p>
              <p className="text-gray-400">Creating inclusive, ethical tech</p>
            </div>
            <div className="bg-black/60 rounded-2xl border border-white/10 p-8 shadow-lg flex flex-col items-center">
              <span className="mb-3">{/* Network SVG */}
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="18" cy="18" r="16" stroke="url(#net-grad)" strokeWidth="2" fill="#18181b" />
                  <circle cx="18" cy="18" r="5" fill="url(#net-grad)" />
                  <circle cx="8" cy="8" r="2" fill="#00ff9d" />
                  <circle cx="28" cy="8" r="2" fill="#9d00ff" />
                  <circle cx="8" cy="28" r="2" fill="#00ff9d" />
                  <circle cx="28" cy="28" r="2" fill="#9d00ff" />
                  <line x1="18" y1="13" x2="18" y2="8" stroke="#00ff9d" strokeWidth="1.5" />
                  <line x1="18" y1="23" x2="18" y2="28" stroke="#9d00ff" strokeWidth="1.5" />
                  <defs>
                    <linearGradient id="net-grad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#00ff9d" />
                      <stop offset="1" stopColor="#9d00ff" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <p className="text-lg text-gray-200 font-semibold">Governments</p>
              <p className="text-gray-400">Modernizing public services</p>
            </div>
            <div className="bg-black/60 rounded-2xl border border-white/10 p-8 shadow-lg flex flex-col items-center">
              <span className="mb-3">{/* Globe SVG */}
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="18" cy="18" r="16" stroke="url(#globe-grad)" strokeWidth="2" fill="#18181b" />
                  <ellipse cx="18" cy="18" rx="10" ry="16" stroke="url(#globe-grad)" strokeWidth="1.5" />
                  <ellipse cx="18" cy="18" rx="16" ry="10" stroke="url(#globe-grad)" strokeWidth="1.5" />
                  <defs>
                    <linearGradient id="globe-grad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#00ff9d" />
                      <stop offset="1" stopColor="#9d00ff" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <p className="text-lg text-gray-200 font-semibold">Global AI Firms</p>
              <p className="text-gray-400">Grounding models in real African data</p>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="mt-32 max-w-5xl mx-auto px-4 animate-fade-in">
          <div className="relative">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#00ff9d] to-[#9d00ff] blur" />
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#00ff9d] via-[#ffffff] to-[#9d00ff] animate-slide-up">What We Offer</h2>
          </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10"> */}

          <div className="w-screen max-w-none relative left-1/2 right-1/2 -translate-x-1/2 flex flex-col items-center py-8 bg-black/90">
            <h3 className="text-2xl font-semibold text-[#00ff9d] mb-8">Data Types</h3>
            <div className="flex flex-row justify-between items-end gap-8 w-full max-w-7xl px-4 overflow-x-auto">
              <div className="flex flex-col items-center flex-1 min-w-[150px]">
                <img src="https://images.unsplash.com/photo-1543285198-3af15c4592ce?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Text" className="w-36 h-36 object-cover mb-3 rounded-xl shadow-lg bg-zinc-900" />
                <span className="text-white font-bold text-lg">Text</span>
              </div>
              <div className="flex flex-col items-center flex-1 min-w-[150px]">
                <img src="https://images.unsplash.com/photo-1640521060189-e65a451b5c91?q=80&w=1278&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Audio" className="w-36 h-36 object-cover mb-3 rounded-xl shadow-lg bg-zinc-900" />
                <span className="text-white font-bold text-lg">Audio</span>
              </div>
              <div className="flex flex-col items-center flex-1 min-w-[150px]">
                <img src="https://images.unsplash.com/photo-1566438480900-0609be27a4be?q=80&w=694&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image" className="w-36 h-36 object-cover mb-3 rounded-xl shadow-lg bg-zinc-900" />
                <span className="text-white font-bold text-lg">Image</span>
              </div>
              <div className="flex flex-col items-center flex-1 min-w-[150px]">
                <img src="https://images.unsplash.com/photo-1590433333434-09df2b2a35a5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Satellite" className="w-36 h-36 object-cover mb-3 rounded-xl shadow-lg bg-zinc-900" />
                <span className="text-white font-bold text-lg">Satellite</span>
              </div>
              <div className="flex flex-col items-center flex-1 min-w-[150px]">
                <img src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1159&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Video" className="w-36 h-36 object-cover mb-3 rounded-xl shadow-lg bg-zinc-900" />
                <span className="text-white font-bold text-lg">Video</span>
              </div>
            </div>
          </div>
          {/* <div className="bg-black/60 rounded-2xl border border-white/10 p-8 shadow-lg flex flex-col items-start text-left gap-6 mt-8 w-full">

            </div> */}
          <div className="bg-black/60 rounded-2xl border border-white/10 p-8 shadow-lg flex flex-col items-center text-left gap-6">
            <h3 className="text-2xl font-semibold text-[#9d00ff] mb-2 text-center">Services</h3>

            <ul className="flex flex-col md:flex-row text-white gap-3">
              <li>✅ Data collection & annotation</li>
              <li>✅ Custom model building & evaluation</li>
              <li>✅ Secure, human-in-the-loop workflows</li>
            </ul>
          </div>

          {/* </div> */}
        </section>

        {/* Why Choose Us */}
        <section className="mt-32 max-w-5xl mx-auto px-4 animate-fade-in">
          <div className="relative">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#00ff9d] to-[#9d00ff] blur" />
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#00ff9d] via-[#ffffff] to-[#9d00ff] animate-slide-up">Why Choose Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/70 rounded-2xl border border-white/10 p-8 shadow-xl flex flex-col items-center">
              <span className="mb-3">{/* AI Brain SVG */}
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="18" cy="18" rx="14" ry="10" fill="#18181b" stroke="url(#brain-grad)" strokeWidth="2" />
                  <path d="M12 18c0-3 2-5 6-5s6 2 6 5-2 5-6 5-6-2-6-5z" fill="url(#brain-grad)" />
                  <defs>
                    <linearGradient id="brain-grad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#00ff9d" />
                      <stop offset="1" stopColor="#9d00ff" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <h3 className="font-semibold mb-2 text-lg text-[#00ff9d]">Local Expertise</h3>
              <p className="text-gray-300 text-center">Annotators trained across Africa, with deep cultural and language understanding</p>
            </div>
            <div className="bg-black/70 rounded-2xl border border-white/10 p-8 shadow-xl flex flex-col items-center">
              <span className="mb-3">{/* Lightning SVG */}
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="18,4 12,20 18,20 14,32 26,14 20,14 24,4" fill="url(#light-grad)" />
                  <defs>
                    <linearGradient id="light-grad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#00ff9d" />
                      <stop offset="1" stopColor="#9d00ff" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <h3 className="font-semibold mb-2 text-lg text-[#00ff9d]">Faster Turnaround</h3>
              <p className="text-gray-300 text-center">Lean teams, fast pipelines, live dashboards</p>
            </div>
            <div className="bg-black/70 rounded-2xl border border-white/10 p-8 shadow-xl flex flex-col items-center">
              <span className="mb-3">{/* Globe SVG */}
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="18" cy="18" r="16" stroke="url(#globe-grad)" strokeWidth="2" fill="#18181b" />
                  <ellipse cx="18" cy="18" rx="10" ry="16" stroke="url(#globe-grad)" strokeWidth="1.5" />
                  <ellipse cx="18" cy="18" rx="16" ry="10" stroke="url(#globe-grad)" strokeWidth="1.5" />
                  <defs>
                    <linearGradient id="globe-grad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#00ff9d" />
                      <stop offset="1" stopColor="#9d00ff" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <h3 className="font-semibold mb-2 text-lg text-[#00ff9d]">Multilingual Support</h3>
              <p className="text-gray-300 text-center">Text and audio labeling in over 10 African languages</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-black/70 rounded-2xl border border-white/10 p-8 shadow-xl flex flex-col items-center">
              <span className="mb-3">{/* Shield SVG */}
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 4l12 6v8c0 8-6 14-12 14S6 26 6 18V10l12-6z" fill="#18181b" stroke="url(#shield-grad)" strokeWidth="2" />
                  <defs>
                    <linearGradient id="shield-grad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#00ff9d" />
                      <stop offset="1" stopColor="#9d00ff" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <h3 className="font-semibold mb-2 text-lg text-[#9d00ff]">Ethical & Fair</h3>
              <p className="text-gray-300 text-center">Fair wages, psychological safety, consent-driven data sourcing</p>
            </div>
            <div className="bg-black/70 rounded-2xl border border-white/10 p-8 shadow-xl flex flex-col items-center">
              <span className="mb-3">{/* Coin SVG */}
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="18" cy="18" rx="14" ry="14" fill="#18181b" stroke="url(#coin-grad)" strokeWidth="2" />
                  <ellipse cx="18" cy="18" rx="8" ry="8" fill="url(#coin-grad)" />
                  <defs>
                    <linearGradient id="coin-grad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#00ff9d" />
                      <stop offset="1" stopColor="#9d00ff" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <h3 className="font-semibold mb-2 text-lg text-[#9d00ff]">Affordable Pricing</h3>
              <p className="text-gray-300 text-center">30–60% more cost-effective than global firms</p>
            </div>
          </div>
        </section>

        {/* Use Case Spotlight */}
        <section className="mt-32 max-w-4xl mx-auto px-4 animate-fade-in">
          <div className="relative">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#00ff9d] to-[#9d00ff] blur" />
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#00ff9d] via-[#ffffff] to-[#9d00ff] animate-slide-up">Use Case Spotlight: Education, Agri & Climate AI</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/60 rounded-2xl border border-white/10 p-8 shadow-lg flex flex-col items-center">
              <span className="mb-3">{/* Book SVG */}
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="6" y="8" width="24" height="20" rx="4" fill="#18181b" stroke="url(#book-grad)" strokeWidth="2" />
                  <path d="M18 8v20" stroke="url(#book-grad)" strokeWidth="2" />
                  <defs>
                    <linearGradient id="book-grad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#00ff9d" />
                      <stop offset="1" stopColor="#9d00ff" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <p className="text-lg text-gray-200 font-semibold mb-1">EdTech Chatbots</p>
              <p className="text-gray-400 text-center">Power your EdTech chatbot with BECE-grade, Ghana-labeled content</p>
            </div>
            <div className="bg-black/60 rounded-2xl border border-white/10 p-8 shadow-lg flex flex-col items-center">
              <span className="mb-3">{/* Plant SVG */}
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="18" cy="28" rx="8" ry="4" fill="#18181b" stroke="url(#plant-grad)" strokeWidth="2" />
                  <path d="M18 28V10M18 10c-4 0-8 4-8 8M18 10c4 0 8 4 8 8" stroke="url(#plant-grad)" strokeWidth="2" />
                  <defs>
                    <linearGradient id="plant-grad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#00ff9d" />
                      <stop offset="1" stopColor="#9d00ff" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <p className="text-lg text-gray-200 font-semibold mb-1">Agri AI</p>
              <p className="text-gray-400 text-center">Detect crop pests from farmer images in 48 hours</p>
            </div>
            <div className="bg-black/60 rounded-2xl border border-white/10 p-8 shadow-lg flex flex-col items-center">
              <span className="mb-3">{/* Satellite SVG */}
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="14" y="14" width="8" height="8" rx="2" fill="#18181b" stroke="url(#sat-grad)" strokeWidth="2" />
                  <rect x="10" y="10" width="4" height="4" rx="1" fill="url(#sat-grad)" />
                  <rect x="22" y="22" width="4" height="4" rx="1" fill="url(#sat-grad)" />
                  <line x1="18" y1="10" x2="18" y2="14" stroke="url(#sat-grad)" strokeWidth="2" />
                  <line x1="18" y1="22" x2="18" y2="26" stroke="url(#sat-grad)" strokeWidth="2" />
                  <defs>
                    <linearGradient id="sat-grad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#00ff9d" />
                      <stop offset="1" stopColor="#9d00ff" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <p className="text-lg text-gray-200 font-semibold mb-1">Climate & Mining</p>
              <p className="text-gray-400 text-center">Monitor illegal mining with labeled drone & satellite imagery</p>
            </div>
          </div>
        </section>

        {/* Build Smarter AI CTA */}
        <section className="mt-32 max-w-3xl mx-auto px-4 animate-fade-in">
          <div className="relative">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#00ff9d] to-[#9d00ff] blur" />
            <div className="rounded-3xl bg-gradient-to-br from-[#18181b] via-[#000] to-[#1a002a] border-2 border-[#00ff9d]/30 shadow-2xl p-10 md:p-14 flex flex-col items-center relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-0 top-0 w-40 h-40 bg-[#00ff9d]/10 rounded-full blur-2xl animate-float" />
                <div className="absolute right-0 bottom-0 w-40 h-40 bg-[#9d00ff]/10 rounded-full blur-2xl animate-float-delayed" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#00ff9d] via-[#ffffff] to-[#9d00ff] animate-slide-up z-10">Let’s Build Smarter AI, Together</h2>
              <p className="text-xl text-gray-300 mb-8 z-10">
                <span className="block mb-2">Want a taste before you commit?</span>
                <span className="flex flex-col md:flex-row md:space-x-4 items-center justify-center mt-2">
                  <a href="mailto:mymasterpa@gmail.com?subject=Book%20a%20Demo" className="inline-block px-6 py-3 mb-2 md:mb-0 bg-gradient-to-r from-[#00ff9d] to-[#9d00ff] rounded-lg text-white font-semibold shadow-lg hover:scale-105 hover:shadow-[0_0_40px_rgba(0,255,157,0.3)] focus:outline-none focus:ring-2 focus:ring-[#00ff9d] transition-all duration-300">Book a Demo</a>
                  <span className="text-gray-400 text-base mx-2">or</span>
                  <a href="mailto:mymasterpa@gmail.com?subject=Request%20a%20Pilot%20Project" className="inline-block px-6 py-3 bg-gradient-to-r from-[#9d00ff] to-[#00ff9d] rounded-lg text-white font-semibold shadow-lg hover:scale-105 hover:shadow-[0_0_40px_rgba(157,0,255,0.3)] focus:outline-none focus:ring-2 focus:ring-[#9d00ff] transition-all duration-300">Request a Pilot Project</a>
                </span>
              </p>
              <div className="flex flex-col items-center text-gray-400 text-base z-10 mt-2">
                <span className="flex items-center mb-1"><span className="text-xl mr-2"></span> <span>Trusted by teams building for Africa</span></span>
                <span className="text-sm">Partnered with innovators across Ghana, Kenya, Nigeria, and beyond.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info/Footer */}
        <footer className="my-32 py-10 border-t border-white/10 bg-gradient-to-br from-black via-[#18181b] to-[#1a002a] animate-fade-in">
          <div className="max-w-3xl mx-auto px-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8 mb-10">
              <div className="flex-1 flex flex-col items-center md:items-start">
                <div className="mb-4 text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00ff9d] to-[#9d00ff] flex items-center"><span className="mr-2"></span> Contact Us</div>
                <div className="mb-2 text-lg text-gray-200 flex items-center"><span className="mr-2"></span> <a href="mailto:mymasterpa@gmail.com" className="underline hover:text-[#00ff9d] transition-colors">mymasterpa@gmail.com</a></div>
                {/* <div className="mb-2 text-lg text-gray-200 flex items-center"><span className="mr-2"></span> <a href="https://www.masterpa.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#9d00ff] transition-colors">www.masterpa.com</a></div> */}
                <div className="mb-2 text-lg text-gray-200 flex items-center"><span className="mr-2"></span> Accra, Ghana <span className="mx-1">|</span> Remote-friendly</div>
              </div>
              <div className="flex-1 flex flex-col items-center md:items-end">
                <div className="bg-black/60 rounded-2xl border border-white/10 p-8 shadow-xl flex flex-col items-center w-full">
                  <span className="text-2xl text-gray-300 mb-2">Trusted by teams building for Africa</span>
                  <span className="text-gray-400 text-sm text-center">Partnered with innovators across Ghana, Kenya, Nigeria, and beyond.</span>
                </div>
              </div>
            </div>
            <div className="text-center text-gray-500 text-sm pt-6 border-t border-white/10">&copy; {new Date().getFullYear()} Masterpa. All rights reserved.</div>
          </div>
        </footer>
      </div>
      {/* Bottom Gradient */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" /> */}
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
