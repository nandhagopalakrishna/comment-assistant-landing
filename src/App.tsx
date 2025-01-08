import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
>>>>>>> bb40f04c97eb192b0564d6c33e0973ce8e30352b
import { Users, ArrowRight } from 'lucide-react';
import Header from './components/Header';
import Stats from './components/Stats';
import Features from './components/Features';
import FAQ from './components/FAQ';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
<<<<<<< HEAD
import Waitlist from './pages/Waitlist';
=======
>>>>>>> bb40f04c97eb192b0564d6c33e0973ce8e30352b
import UserAvatar from './components/UserAvatar';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/privacy"
          element={<Privacy />}
        />
        <Route
          path="/terms"
          element={<Terms />}
        />
        <Route
<<<<<<< HEAD
          path="/waitlist"
          element={<Waitlist />}
        />
        <Route
=======
>>>>>>> bb40f04c97eb192b0564d6c33e0973ce8e30352b
          path="/"
          element={
            <>
              <Header />
<<<<<<< HEAD
              <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-gray-50 to-white pt-16 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-16 pb-12 sm:pb-16">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Left Section */}
                    <div className="text-left space-y-4 sm:space-y-6 fade-up visible">
=======
              <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-20 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Section */}
            <div className="text-left space-y-6">
>>>>>>> bb40f04c97eb192b0564d6c33e0973ce8e30352b
              {/* User count */}
              <div className="flex items-center">
                <div className="flex -space-x-2 mr-3">
                  {[
                    {
                      src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
                      name: 'Sarah Chen',
                      role: 'Product Designer',
                    },
                    {
                      src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
                      name: 'Michael Smith',
                      role: 'Marketing Lead',
                    },
                    {
                      src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
                      name: 'Emily Johnson',
                      role: 'Content Creator',
                    },
                    {
                      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
                      name: 'David Wilson',
                      role: 'Social Media Manager',
                    },
                  ].map((user, index) => (
                    <UserAvatar key={index} src={user.src} name={user.name} role={user.role} />
                  ))}
                </div>
<<<<<<< HEAD
                <span className="text-gray-600 font-medium text-sm">67+ happy Daily Posters</span>
              </div>

              {/* Main heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight sm:leading-snug mb-6 sm:mb-8">
=======
                <span className="text-gray-600 font-medium text-sm">147 happy creators</span>
              </div>

              {/* Main heading */}
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-snug">
>>>>>>> bb40f04c97eb192b0564d6c33e0973ce8e30352b
                Comment Smarter
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                  Grow Faster
                </span>
              </h1>

              {/* Description */}
<<<<<<< HEAD
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-md mb-8 sm:mb-10">
                Create viral, high-engagement AI-powered comments for{' '}
                <span className="font-medium text-gray-900">Twitter</span> &{' '}
                <span className="font-medium text-gray-900">LinkedIn</span> in one click.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                <Link to="/waitlist" className="w-full sm:w-auto relative inline-flex items-center justify-center px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-indigo-500 font-semibold text-base sm:text-lg rounded-lg shadow-lg hover:scale-105 focus:outline-none transition-all duration-300 hover:shadow-blue-500/50">
                  Get started for free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <div className="text-gray-500 text-sm flex flex-row items-center justify-center sm:justify-start gap-4">
=======
              <p className="text-lg sm:text-xl text-gray-600 max-w-md">
                Create viral, high-engagement AI-powered comments for{' '}
                <span className="font-medium text-black">Twitter</span> &{' '}
                <span className="font-medium text-black">LinkedIn</span> in one click.
              </p>

              {/* CTA Buttons */}
              <div className="space-y-4 sm:space-y-0 sm:flex sm:items-center sm:space-x-4">
                <button className="relative inline-flex items-center justify-center px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-indigo-500 font-semibold text-lg rounded-lg shadow-lg hover:scale-105 focus:outline-none">
                  Get started for free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <div className="text-gray-500 text-sm flex flex-col sm:flex-row sm:items-center sm:space-x-4">
>>>>>>> bb40f04c97eb192b0564d6c33e0973ce8e30352b
                  <span className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                    One-click signup
                  </span>
                  <span className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                    Completely Free
                  </span>
                </div>
              </div>
            </div>

<<<<<<< HEAD
            {/* Right Section - Demo GIF */}
            <div className="relative rounded-xl shadow-2xl overflow-hidden scale-in visible mt-8 lg:mt-0">
              <img
                src="https://i.imghippo.com/files/DBM5702.gif"
                alt="Comment Assistant Demo"
                className="w-full h-auto hover:scale-105 transition-all duration-700 ease-out object-cover"
              />
            </div>
          </div>
        </div>
              </div>
=======
            {/* Right Section - Placeholder for a demo video or image */}
            <div className="rounded-lg bg-gray-200 aspect-w-16 aspect-h-9 shadow-lg flex items-center justify-center">
              <p className="text-gray-500 font-medium">[Demo Video Placeholder]</p>
            </div>
          </div>
        </div>
      </div>
>>>>>>> bb40f04c97eb192b0564d6c33e0973ce8e30352b
              <Stats />
              <Features />
              <Pricing />
              <FAQ />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;