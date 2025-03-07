import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-purple-400 uppercase tracking-wide mb-4">CATEREASE</h3>
            <p className="text-gray-400">Delicious food at dooestep</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold uppercase tracking-wide mb-4">Menu</h4>
            <ul className="space-y-2">
              <li><a href="#featured" className="text-gray-400 hover:text-purple-400">Featured</a></li>
              <li><a href="#combos" className="text-gray-400 hover:text-purple-400">Party Packs</a></li>
              <li><a href="#specialties" className="text-gray-400 hover:text-purple-400">Specialties</a></li>
              <li><a href="#drinks" className="text-gray-400 hover:text-purple-400">Drinks</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold uppercase tracking-wide mb-4">About</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-purple-400">Our Story</a></li>
              <li><a href="#careers" className="text-gray-400 hover:text-purple-400">Careers</a></li>
          
              <li><a href="#contact" className="text-gray-400 hover:text-purple-400">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold uppercase tracking-wide mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://x.com/ShivamB1249x" className="text-gray-400 hover:text-purple-400">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-purple-900 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} N4 technology Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;