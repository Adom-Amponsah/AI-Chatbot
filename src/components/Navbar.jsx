import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00ff9d] to-[#9d00ff]">
              AI Assistant
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Home
            </Link>
            <Link to="/legal/privacy" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Privacy Policy
            </Link>
            <Link to="/legal/terms" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 