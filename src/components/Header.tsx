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
            </span>
          </div>

          {/* Navigation Section */}
          <nav className="flex items-center space-x-6">
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
        </div>
      </div>
    </header>
  );
}