import React from 'react';
import { Home, User, Settings, Mail, HelpCircle } from 'lucide-react';

const VerticalNavbar : React.FC = () => {
  return (
    <nav className="h-screen w-64 bg-gray-800 text-white p-4 fixed left-0 top-0">
      <div className="mb-8">
        <h1 className="text-xl font-bold">Welcome</h1>
      </div>
      
      <ul className="space-y-4">
        <li>
          <a href="#" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-700 transition-colors">
            <Home size={20} />
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-700 transition-colors">
            <User size={20} />
            <span>Profile</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-700 transition-colors">
            <Mail size={20} />
            <span>Messages</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-700 transition-colors">
            <Settings size={20} />
            <span>Settings</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-700 transition-colors">
            <HelpCircle size={20} />
            <span>Help</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default VerticalNavbar;