import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2 } from 'lucide-react';

const CartPage = () => {
  const cartItems = [
    {
      id: 1,
      name: "Royal Wedding Package",
      price: 4999.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 2,
      name: "Corporate lunch package",
      price: 34.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    }
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const deliveryFee = 4.99;
  const total = subtotal + tax + deliveryFee;

  return (
    <div className="pt-20 min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 uppercase tracking-tight">Your Cart</h1>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-purple-900/30 p-6 rounded-lg flex gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <button className="text-gray-400 hover:text-red-500">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-purple-400 font-bold mt-1">${item.price.toFixed(2)}</p>
                  <div className="flex items-center mt-4">
                    <button className="p-1 hover:text-purple-400">
                      <Minus className="w-5 h-5" />
                    </button>
                    <span className="mx-4 font-bold">{item.quantity}</span>
                    <button className="p-1 hover:text-purple-400">
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-purple-900/30 p-6 rounded-lg h-fit">
            <h2 className="text-2xl font-bold mb-6 uppercase">Order Summary</h2>
            <div className="space-y-4 text-gray-300">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>₹{tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>₹{deliveryFee.toFixed(2)}</span>
              </div>
              <div className="border-t border-purple-600 pt-4 flex justify-between text-white font-bold">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>
            <Link
              to="/checkout"
              className="btn btn-primary w-full text-center mt-6"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;