import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 uppercase tracking-tight text-shadow">
          Delicious
          <span className="text-purple-400"> Food </span>
          At Doorstep
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-shadow">Experience warm catering that pushes the boundaries of flavor</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#menu"
            className="btn btn-primary"
          >
            View Menu
          </a>
          <a 
            href="#rewards"
            className="btn bg-white text-black hover:bg-gray-100"
          >
            Join Rewards
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default Hero;