import React from 'react';
import { Clock, Globe, MessageSquare, TrendingUp } from 'lucide-react';

export default function Features() {
  return (
    <div id="features" className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-16 leading-tight">
          Achieve{' '}
          <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-transparent bg-clip-text">
            Instant Growth
          </span>{' '}
          with AI.
        </h2>

        {/* Feature Items */}
        {[
          {
            icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
            title: 'Grow Your Profile Faster',
            description:
              'Grow your profile more quickly by participating in every relevant conversation, ensuring you’re consistently seen and heard.',
          },
          {
            icon: <Clock className="w-6 h-6 text-blue-600" />,
            title: 'Reduce Time by 10x',
            description:
              'Engage with 100+ posts in minutes, helping your profile grow organically and giving you more time for what matters most.',
          },
          {
            icon: <MessageSquare className="w-6 h-6 text-blue-600" />,
            title: 'One Click Comment Generation',
            description:
              'One-click comment creation made easy. Pick your tone, and watch us generate a high-quality response in seconds.',
          },
          {
            icon: <Globe className="w-6 h-6 text-blue-600" />,
            title: 'Multilanguage Support',
            description:
              'Break language barriers with ease. Our extension supports multiple languages, allowing you to engage with a global audience.',
          },
        ].map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } items-center justify-start gap-16 mb-32`}
          >
            <div className="w-full md:w-3/5">
              <div className="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 flex gap-10 transform hover:scale-[1.02]">
                <div className="flex-1 min-w-[320px]">
                  <div className="rounded-xl p-4 bg-blue-50 inline-block mb-6">{feature.icon}</div>
                  <h3 className="text-3xl font-extrabold mb-4 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
                </div>
                <div className="w-80 aspect-video bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                  {/* Video placeholder */}
                  <video className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* CTA Button */}
        <div className="flex justify-center mt-16">
          <div className="relative group">
            <button className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                <div className="relative z-10 flex items-center space-x-2">
                  <span className="transition-all duration-500 group-hover:translate-x-1">
                    Download Now
                  </span>
                  <svg
                    className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                    data-slot="icon"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
