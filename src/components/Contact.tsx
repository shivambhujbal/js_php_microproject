import React from 'react';
import { MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Find Us</h2>
          <p className="text-xl text-gray-400">Order ahead for pickup or delivery</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8 bg-purple-900/30 p-8 rounded-lg">
            <div className="flex items-center">
              <MapPin className="w-6 h-6 text-purple-400 mr-4" />
              <div>
                <h3 className="text-xl font-bold uppercase tracking-wide">Location</h3>
                <p className="text-gray-400">P J Ramchandani Marg, Taj Mahal Palace,Mumbai,Mumbai 400001,India</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold uppercase tracking-wide">Contact</h3>
              <div className="grid grid-cols-2 gap-4 text-gray-400">
                <div>
                  <p className="font-bold">+91 9421398207</p>
                </div>
                <div>
                  <p className="font-bold">+91 7798523996</p>
                  
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-6 bg-purple-900/30 p-8 rounded-lg">
            <div>
              <label htmlFor="name" className="block text-sm font-medium uppercase tracking-wide mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full bg-white/10 border-2 border-purple-400 rounded-none p-3 text-white focus:outline-none focus:border-purple-300"
                placeholder="Your Name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium uppercase tracking-wide mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full bg-white/10 border-2 border-purple-400 rounded-none p-3 text-white focus:outline-none focus:border-purple-300"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium uppercase tracking-wide mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-white/10 border-2 border-purple-400 rounded-none p-3 text-white focus:outline-none focus:border-purple-300"
                placeholder="Your Message"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full btn btn-primary"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;