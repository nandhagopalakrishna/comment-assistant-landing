import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Users, ArrowRight } from 'lucide-react';
import Header from './components/Header';
import Stats from './components/Stats';
import Features from './components/Features';
import FAQ from './components/FAQ';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
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
          path="/"
          element={
            <>
              <Header />
              <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-20 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Section */}
            <div className="text-left space-y-6">
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
                <span className="text-gray-600 font-medium text-sm">147 happy creators</span>
              </div>

              {/* Main heading */}
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-snug">
                Comment Smarter
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                  Grow Faster
                </span>
              </h1>

              {/* Description */}
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

            {/* Right Section - Placeholder for a demo video or image */}
            <div className="rounded-lg bg-gray-200 aspect-w-16 aspect-h-9 shadow-lg flex items-center justify-center">
              <p className="text-gray-500 font-medium">[Demo Video Placeholder]</p>
            </div>
          </div>
        </div>
      </div>
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