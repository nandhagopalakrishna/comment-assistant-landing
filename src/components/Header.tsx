import { MessageSquare } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed w-full top-0 bg-white/80 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <MessageSquare className="w-6 h-6 text-blue-600" />
            <span className="ml-2 font-semibold text-gray-900">Comment Assistant</span>
          </div>
          <nav className="flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900" onClick={(e) => {
              e.preventDefault();
              document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' });
            }}>Features</a>
            <button className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700">
              Sign in
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}