import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Users } from 'lucide-react';

interface PackageDetails {
  name: string;
  description: string;
  price: string;
  image: string;
  items: {
    category: string;
    dishes: string[];
  }[];
}

const Menu = () => {
  const [selectedPackage, setSelectedPackage] = useState<PackageDetails | null>(null);

  const menuCategories = [
    {
      name: "Wedding Platters",
      items: [
        {
          name: "Royal Wedding Package",
          description: "Complete wedding package with starters, main course, desserts. Serves 500+ guests",
          price: "$4999.99",
          image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          items: [
            {
              category: "Starters",
              dishes: [
                "Paneer Tikka",
                "Chicken Seekh Kebab",
                "Fish Amritsari",
                "Veg Spring Rolls",
                "Mushroom Galawat"
              ]
            },
            {
              category: "Main Course",
              dishes: [
                "Butter Chicken",
                "Mutton Rogan Josh",
                "Paneer Butter Masala",
                "Dal Makhani",
                "Mixed Veg Curry",
                "Biryani (Veg & Non-veg)"
              ]
            },
            {
              category: "Breads & Rice",
              dishes: [
                "Assorted Naan",
                "Butter Roti",
                "Jeera Rice",
                "Saffron Pulao"
              ]
            },
            {
              category: "Desserts",
              dishes: [
                "Gulab Jamun",
                "Rasmalai",
                "Ice Cream",
                "Gajar Ka Halwa"
              ]
            }
          ]
        },
        {
          name: "Premium Wedding Combo",
          description: "Deluxe selection of veg and non-veg dishes. Serves 300+ guests",
          price: "$3499.99",
          image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          items: [
            {
              category: "Starters",
              dishes: [
                "Hara Bhara Kebab",
                "Chicken Tikka",
                "Paneer Pakora",
                "Veg Cutlet"
              ]
            },
            {
              category: "Main Course",
              dishes: [
                "Chicken Curry",
                "Fish Curry",
                "Shahi Paneer",
                "Dal Tadka",
                "Mixed Veg",
                "Veg Biryani"
              ]
            },
            {
              category: "Breads & Rice",
              dishes: [
                "Plain Naan",
                "Butter Roti",
                "Steamed Rice",
                "Veg Pulao"
              ]
            },
            {
              category: "Desserts",
              dishes: [
                "Gulab Jamun",
                "Kheer",
                "Ice Cream"
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Party Packages",
      items: [
        {
          name: "Maharaja Feast",
          description: "Premium selection including kebabs, biryanis, and curries. Serves 100-150",
          price: "$1499.99",
          image: "https://images.unsplash.com/photo-1539755530862-00f623c00f52?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          items: [
            {
              category: "Starters",
              dishes: [
                "Tandoori Chicken",
                "Paneer Tikka",
                "Veg Seekh Kebab"
              ]
            },
            {
              category: "Main Course",
              dishes: [
                "Butter Chicken",
                "Paneer Makhani",
                "Dal Makhani",
                "Mixed Veg Curry"
              ]
            },
            {
              category: "Breads & Rice",
              dishes: [
                "Assorted Naan",
                "Jeera Rice",
                "Veg Biryani"
              ]
            },
            {
              category: "Desserts",
              dishes: [
                "Gulab Jamun",
                "Ice Cream"
              ]
            }
          ]
        },
        {
          name: "Corporate Lunch Package",
          description: "Perfect for office events with variety of starters and main course. Serves 50-75",
          price: "$899.99",
          image: "https://images.unsplash.com/photo-1576867757603-05b134ebc379?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          items: [
            {
              category: "Starters",
              dishes: [
                "Veg Spring Roll",
                "Paneer Pakora",
                "Chicken Tikka"
              ]
            },
            {
              category: "Main Course",
              dishes: [
                "Kadai Chicken",
                "Shahi Paneer",
                "Dal Tadka",
                "Veg Jalfrezi"
              ]
            },
            {
              category: "Breads & Rice",
              dishes: [
                "Butter Naan",
                "Jeera Rice",
                "Veg Pulao"
              ]
            },
            {
              category: "Desserts",
              dishes: [
                "Gulab Jamun",
                "Fruit Custard"
              ]
            }
          ]
        }
      ]
    }
  ];

  return (
    <section id="menu" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Catering Packages</h2>
          <p className="text-xl text-gray-400">Authentic Indian cuisine for every occasion</p>
        </div>

        {menuCategories.map((category, index) => (
          <div key={index} className="mb-16">
            <h3 className="text-3xl font-bold text-purple-400 mb-8 uppercase tracking-wide">{category.name}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="group relative overflow-hidden rounded-lg cursor-pointer"
                     onClick={() => setSelectedPackage(item)}>
                  <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex justify-between items-end">
                      <div>
                        <h4 className="text-2xl font-bold mb-2">{item.name}</h4>
                        <p className="text-gray-300 mb-4">{item.description}</p>
                      </div>
                      <span className="text-2xl font-bold text-purple-400">{item.price}</span>
                    </div>
                    <button className="w-full btn btn-primary mt-4">View Details</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {selectedPackage && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
            <div className="bg-black border-2 border-purple-600 p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative rounded-lg">
              <button 
                onClick={() => setSelectedPackage(null)}
                className="absolute top-4 right-4 text-white hover:text-purple-400"
              >
                <X size={24} />
              </button>
              
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">{selectedPackage.name}</h2>
                <p className="text-gray-400 mb-4">{selectedPackage.description}</p>
                <p className="text-2xl font-bold text-purple-400">{selectedPackage.price}</p>
              </div>

              <div className="space-y-6">
                {selectedPackage.items.map((category, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-bold text-purple-400 mb-3">{category.category}</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {category.dishes.map((dish, dishIndex) => (
                        <div key={dishIndex} className="bg-purple-900/30 p-3 rounded">
                          {dish}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-purple-600">
                <button className="w-full btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        )}
        </div>
      
        

        <div className="bg-black/30 p-8 rounded-lg mt-12">
          <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide">Custom Package</h3>
          <p className="text-gray-300 mb-6">Need a customized menu for your special occasion? Contact us for personalized catering solutions.</p>
          <div className="flex gap-4">
            <a href="#contact" className="btn btn-primary">Contact Us</a>
            <Link to="/full-menu" className="btn bg-white text-black hover:bg-gray-100">View Full Menu</Link>
          </div>
        </div>
    </section>
  );
};

export default Menu;