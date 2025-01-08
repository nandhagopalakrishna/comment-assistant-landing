<<<<<<< HEAD
import React from 'react';
import { MessageSquare, ArrowRight } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed w-full top-0 bg-gradient-to-r from-white to-gray-100/80 backdrop-blur-md border-b border-gray-200 z-50 px-2 sm:px-0">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center flex-shrink-0 min-w-0 max-w-[60%] sm:max-w-none">
            <img 
              src="https://i.imghippo.com/files/Hvzj9133uY.png" 
              alt="Comment Assistant Logo" 
              className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 transition-transform duration-200 hover:scale-110"
            />
            <span className="ml-2 font-semibold text-gray-900 text-xs sm:text-base leading-tight">
              <span className="block sm:inline">Comment</span>
              <span className="block sm:inline sm:ml-1">Assistant</span>
=======
import { MessageSquare } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed w-full top-0 bg-gradient-to-r from-white to-gray-100/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <img 
              src="https://i.imghippo.com/files/Hvzj9133uY.png" 
              alt="Comment Assistant Logo" 
              className="w-6 h-6 transition-transform duration-200 hover:scale-110"
            />
            <span className="ml-2 font-semibold text-gray-900 text-lg hover:text-blue-600 transition-colors duration-200">
              Comment Assistant
>>>>>>> bb40f04c97eb192b0564d6c33e0973ce8e30352b
            </span>
          </div>

          {/* Navigation Section */}
<<<<<<< HEAD
          <nav className="hidden md:flex items-center space-x-6">
=======
          <nav className="flex items-center space-x-6">
>>>>>>> bb40f04c97eb192b0564d6c33e0973ce8e30352b
            <a
              href="#features"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Pricing
            </a>
            {/* CTA Button */}
            <button className="flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
<<<<<<< HEAD
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 48 48"
                className="h-5 w-5"
              >
                <path fill="#4caf50" d="M44,24c0,11.044-8.956,20-20,20S4,35.044,4,24S12.956,4,24,4S44,12.956,44,24z"></path>
                <path fill="#ffc107" d="M24,4v20l8,4l-8.843,16c0.317,0,0.526,0,0.843,0c11.053,0,20-8.947,20-20S35.053,4,24,4z"></path>
                <path fill="#4caf50" d="M44,24c0,11.044-8.956,20-20,20S4,35.044,4,24S12.956,4,24,4S44,12.956,44,24z"></path>
                <path fill="#ffc107" d="M24,4v20l8,4l-8.843,16c0.317,0,0.526,0,0.843,0c11.053,0,20-8.947,20-20S35.053,4,24,4z"></path>
                <path fill="#f44336" d="M41.84,15H24v13l-3-1L7.16,13.26H7.14C10.68,7.69,16.91,4,24,4C31.8,4,38.55,8.48,41.84,15z"></path>
                <path fill="#dd2c00" d="M7.158,13.264l8.843,14.862L21,27L7.158,13.264z"></path>
                <path fill="#558b2f" d="M23.157,44l8.934-16.059L28,25L23.157,44z"></path>
                <path fill="#f9a825" d="M41.865,15H24l-1.579,4.58L41.865,15z"></path>
                <path fill="#fff" d="M33,24c0,4.969-4.031,9-9,9s-9-4.031-9-9s4.031-9,9-9S33,19.031,33,24z"></path>
                <path fill="#2196f3" d="M31,24c0,3.867-3.133,7-7,7s-7-3.133-7-7s3.133-7,7-7S31,20.133,31,24z"></path>
              </svg>
              <a href="/waitlist" className="text-white">Join Waitlist</a>
            </button>
          </nav>
          
          {/* Mobile Download Button */}
          <button className="md:hidden flex items-center gap-2 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-4 py-2.5 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900 text-sm whitespace-nowrap">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" className="h-4 w-4 flex-shrink-0">
              <path fill="#4caf50" d="M44,24c0,11.044-8.956,20-20,20S4,35.044,4,24S12.956,4,24,4S44,12.956,44,24z"></path>
              <path fill="#ffc107" d="M24,4v20l8,4l-8.843,16c0.317,0,0.526,0,0.843,0c11.053,0,20-8.947,20-20S35.053,4,24,4z"></path>
              <path fill="#4caf50" d="M44,24c0,11.044-8.956,20-20,20S4,35.044,4,24S12.956,4,24,4S44,12.956,44,24z"></path>
              <path fill="#ffc107" d="M24,4v20l8,4l-8.843,16c0.317,0,0.526,0,0.843,0c11.053,0,20-8.947,20-20S35.053,4,24,4z"></path>
              <path fill="#f44336" d="M41.84,15H24v13l-3-1L7.16,13.26H7.14C10.68,7.69,16.91,4,24,4C31.8,4,38.55,8.48,41.84,15z"></path>
              <path fill="#dd2c00" d="M7.158,13.264l8.843,14.862L21,27L7.158,13.264z"></path>
              <path fill="#558b2f" d="M23.157,44l8.934-16.059L28,25L23.157,44z"></path>
              <path fill="#f9a825" d="M41.865,15H24l-1.579,4.58L41.865,15z"></path>
              <path fill="#fff" d="M33,24c0,4.969-4.031,9-9,9s-9-4.031-9-9s4.031-9,9-9S33,19.031,33,24z"></path>
              <path fill="#2196f3" d="M31,24c0,3.867-3.133,7-7,7s-7-3.133-7-7s3.133-7,7-7S31,20.133,31,24z"></path>
            </svg>
            <a href="/waitlist" className="text-white">Join Waitlist</a>
          </button>
=======
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 48 48"
                className="h-5 w-5"
              >
                <defs>
                  <linearGradient id="a" x1="3.2173" y1="15" x2="44.7812" y2="15" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#d93025" />
                    <stop offset="1" stopColor="#ea4335" />
                  </linearGradient>
                  <linearGradient id="b" x1="20.7219" y1="47.6791" x2="41.5039" y2="11.6837" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#fcc934" />
                    <stop offset="1" stopColor="#fbbc04" />
                  </linearGradient>
                  <linearGradient id="c" x1="26.5981" y1="46.5015" x2="5.8161" y2="10.506" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#1e8e3e" />
                    <stop offset="1" stopColor="#34a853" />
                  </linearGradient>
                </defs>
                <circle cx="24" cy="23.9947" r="12" style={{ fill: '#fff' }} />
                <path
                  d="M3.2154,36A24,24,0,1,0,12,3.2154,24,24,0,0,0,3.2154,36ZM34.3923,18A12,12,0,1,1,18,13.6077,12,12,0,0,1,34.3923,18Z"
                  style={{ fill: 'none' }}
                />
                <path
                  d="M24,12H44.7812a23.9939,23.9939,0,0,0-41.5639.0029L13.6079,30l.0093-.0024A11.9852,11.9852,0,0,1,24,12Z"
                  style={{ fill: 'url(#a)' }}
                />
                <circle cx="24" cy="24" r="9.5" style={{ fill: '#1a73e8' }} />
                <path
                  d="M34.3913,30.0029,24.0007,48A23.994,23.994,0,0,0,44.78,12.0031H23.9989l-.0025.0093A11.985,11.985,0,0,1,34.3913,30.0029Z"
                  style={{ fill: 'url(#b)' }}
                />
                <path
                  d="M13.6086,30.0031,3.218,12.006A23.994,23.994,0,0,0,24.0025,48L34.3931,30.0029l-.0067-.0068a11.9852,11.9852,0,0,1-20.7778.007Z"
                  style={{ fill: 'url(#c)' }}
                />
              </svg>
              Download free
            </button>
          </nav>
>>>>>>> bb40f04c97eb192b0564d6c33e0973ce8e30352b
        </div>
      </div>
    </header>
  );
}