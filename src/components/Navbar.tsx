
import React from 'react';
import { Bell, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            RideCompare<span className="text-blue-400">.AI</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
          <Button className="bg-white text-black hover:bg-gray-200">
            Login
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
