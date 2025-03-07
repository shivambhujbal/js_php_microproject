import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Truck } from 'lucide-react';

const DeliveryPage = () => {
  return (
    <div className="pt-20 min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 uppercase tracking-tight">Delivery Options</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-purple-900/30 p-8 rounded-lg">
            <div className="flex items-center mb-6">
              <Truck className="w-8 h-8 text-purple-400 mr-4" />
              <h2 className="text-2xl font-bold uppercase">Delivery</h2>
            </div>
            <p className="text-gray-300 mb-6">Get your favorite meals delivered right to your door.</p>
            <Link 
              to="/cart" 
              className="btn btn-primary w-full text-center"
            >
              Order Delivery
            </Link>
          </div>
          
          <div className="bg-purple-900/30 p-8 rounded-lg">
            <div className="flex items-center mb-6">
              <Clock className="w-8 h-8 text-purple-400 mr-4" />
              <h2 className="text-2xl font-bold uppercase">Pickup</h2>
            </div>
            <p className="text-gray-300 mb-6">Skip the line and pick up your order at your convenience.</p>
            <Link 
              to="/cart" 
              className="btn btn-primary w-full text-center"
            >
              Order Pickup
            </Link>
          </div>
        </div>
        
        <div className="bg-purple-900/30 p-8 rounded-lg">
          <div className="flex items-center mb-6">
            <MapPin className="w-8 h-8 text-purple-400 mr-4" />
            <h2 className="text-2xl font-bold uppercase">Find Nearest Location</h2>
          </div>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="location" className="block text-sm font-medium uppercase tracking-wide mb-2">
                Enter Zip Code or Address
              </label>
              <input
                type="text"
                id="location"
                className="w-full bg-white/10 border-2 border-purple-400 rounded-none p-3 text-white focus:outline-none focus:border-purple-300"
                placeholder="Enter your location"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Search Locations
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPage;