import React from 'react';
import { Truck, Users, Gift, Clock } from 'lucide-react';

const Services = () => {
  const features = [
    {
      icon: <Truck className="w-12 h-12 text-purple-400" />,
      title: "Free Delivery",
      description: "On orders over $50"
    },
    {
      icon: <Users className="w-12 h-12 text-purple-400" />,
      title: "Group Orders",
      description: "Perfect for office parties"
    },
    {
      icon: <Gift className="w-12 h-12 text-purple-400" />,
      title: "Reward Points",
      description: "Earn on every order"
    },
    {
      icon: <Clock className="w-12 h-12 text-purple-400" />,
      title: "24/7 Service",
      description: "We're always here"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-black to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center text-white p-6 rounded-lg backdrop-blur-sm bg-white/5">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 uppercase tracking-wide">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;