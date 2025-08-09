"use client";
import { store } from "@powerpaywallet/store";
import { Appbar } from "@powerpaywallet/ui/appbar";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import Footer from "../components/footer";
import Link from "next/link";
const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  // We use a useEffect hook to trigger a state change after the component mounts.
  // This state change will add a class that starts the CSS animations.
  useEffect(() => {
    setIsVisible(true);
  }, []);



  return (
    <>
      <Provider store={store}>
        <Appbar status={"unauthenticated"} />
      </Provider>
      <div className={`bg-slate-50 text-slate-800 min-h-screen font-['Manrope'] ${isVisible ? 'is-visible' : ''}`}>
        {/* Hero Section - Full Screen */}
        <section className="min-h-screen flex items-center justify-center p-4 md:p-8 relative overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
          <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl stagger-items">
            <h1
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter leading-tight mb-4 text-slate-900 animate-on-load"
            >
              Your Finance,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Your Power.
              </span>
            </h1>
            <p
              className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-8 animate-on-load"
            >
              Experience a new level of financial control with PowerPay. The modern, secure, and intuitive digital wallet designed for today's world.
            </p>
            <div className="animate-on-load">
              <a
                href="/signup"
                className="inline-block px-10 py-4 text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Sign Up Now
              </a>
            </div>
          </div>
        </section>

        {/* Features Section - Full Screen */}
        <section className="min-h-screen flex items-center py-20 bg-white">
          <div className="container mx-auto px-4 stagger-items">
            <h2
              className="text-4xl font-extrabold text-center mb-12 text-slate-900 animate-on-load"
            >
              Core Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Feature 1 */}
              <div
                className="bg-slate-50 p-8 rounded-3xl shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-slate-100 border border-slate-200 animate-on-load"
              >
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap text-blue-500">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-slate-900">Instant Transfers</h3>
                <p className="text-slate-600">
                  Send money to anyone, anywhere, instantly. Our system ensures transactions are fast and seamless.
                </p>
              </div>

              {/* Feature 2 */}
              <div
                className="bg-slate-50 p-8 rounded-3xl shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-slate-100 border border-slate-200 animate-on-load"
              >
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check text-blue-500">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-slate-900">Maximum Security</h3>
                <p className="text-slate-600">
                  We use cutting-edge encryption to protect your data and funds, so you can transact with peace of mind.
                </p>
              </div>

              {/* Feature 3 */}
              <div
                className="bg-slate-50 p-8 rounded-3xl shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-slate-100 border border-slate-200 animate-on-load"
              >
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-piggy-bank text-blue-500">
                    <path d="M19 5c-1.5 0-2.8 1-3.5 2.5a3.5 3.5 0 1 1-3.5 3.5v1"></path>
                    <path d="M12 17a5 5 0 0 1-5 5H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h3a5 5 0 0 1 5 5v5z"></path>
                    <path d="M10 13a7 7 0 0 0 7-7"></path>
                    <circle cx="15.5" cy="9.5" r="3.5"></circle>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-slate-900">Customizable Budgeting</h3>
                <p className="text-slate-600">
                  Take control of your spending by setting personalized budgets and receiving real-time alerts to stay on track.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose PowerPay Section - Full Screen */}
        <section className="min-h-screen flex items-center py-20 bg-slate-100">
          <div className="container mx-auto px-4 max-w-6xl stagger-items">
            <h2
              className="text-4xl font-extrabold text-center mb-12 text-slate-900 animate-on-load"
            >
              Why Choose PowerPay?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="animate-on-load">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Focus on User Experience</h3>
                <p className="text-slate-600 mb-4">
                  We believe financial management should be simple, not complicated. Our application's design prioritizes a clean, intuitive interface that makes it easy for anyone to use, regardless of their technical background.
                </p>
                <p className="text-slate-600">
                  With a focus on user-centric design principles, we've created a seamless experience from sign-up to daily transactions, ensuring you have the power to manage your money efficiently.
                </p>
              </div>
              <div className="animate-on-load">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Built with Modern Technology</h3>
                <p className="text-slate-600 mb-4">
                  PowerPay is built with a modern and robust tech stack, including Next.js, React, and Tailwind CSS. This ensures the application is fast, scalable, and responsive on all devices.
                </p>
                <p className="text-slate-600">
                  As a final year project, it showcases a deep understanding of modern web development practices and a commitment to creating high-quality, performant applications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Project Details Section - Full Screen */}
        <section className="min-h-screen flex items-center py-20 bg-slate-200">
          <div className="container mx-auto px-4 text-center max-w-2xl stagger-items">
            <h2
              className="text-4xl font-extrabold mb-4 text-slate-900 animate-on-load"
            >
              An Open-Source Project
            </h2>
            <p
              className="text-lg text-slate-600 mb-8 animate-on-load"
            >
              This PowerPay application is an open-source project built by <Link href={"/about"} className="underline">Sarthak Kadam</Link>. Your support, feedback, and contributions are highly valued.
            </p>
            <div className="animate-on-load">
              <a
                href="https://github.com/venomhare/powerpaywallet" // TODO: Replace with your actual GitHub link
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 text-lg font-bold text-white bg-slate-900 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-500 focus:ring-opacity-50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github mr-3"><path d="M15 22s-2-2-4-2c-2 0-4 2-4 2s-2-2-4-2-4 2-4 2v-2c0-2 2-4 4-4s4 2 4 4c0-2-2-4-4-4s-4 2-4 2z"></path><path d="M12 11V3"></path><path d="M10 5l2-2 2 2"></path></svg>
                Star the Project on GitHub
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default HomePage