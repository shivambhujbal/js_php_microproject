import React, { useState } from 'react';
import { CreditCard, MapPin } from 'lucide-react';

const CheckoutPage = () => {
  const [step, setStep] = useState<'address' | 'payment'>('address');

  return (
    <div className="pt-20 min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 uppercase tracking-tight">Checkout</h1>
        
        <div className="flex mb-8">
          <button 
            className={`py-2 px-4 w-1/2 font-bold uppercase tracking-wide ${
              step === 'address' ? 'text-purple-400 border-b-2 border-purple-400' : 'text-gray-400'
            }`}
            onClick={() => setStep('address')}
          >
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Address</span>
            </div>
          </button>
          <button 
            className={`py-2 px-4 w-1/2 font-bold uppercase tracking-wide ${
              step === 'payment' ? 'text-purple-400 border-b-2 border-purple-400' : 'text-gray-400'
            }`}
            onClick={() => setStep('payment')}
          >
            <div className="flex items-center justify-center gap-2">
              <CreditCard className="w-5 h-5" />
              <span>Payment</span>
            </div>
          </button>
        </div>

        {step === 'address' ? (
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium uppercase tracking-wide mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full bg-white/10 border-2 border-purple-400 rounded-none p-3 text-white focus:outline-none focus:border-purple-300"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium uppercase tracking-wide mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full bg-white/10 border-2 border-purple-400 rounded-none p-3 text-white focus:outline-none focus:border-purple-300"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="address" className="block text-sm font-medium uppercase tracking-wide mb-2">
                Street Address
              </label>
              <input
                type="text"
                id="address"
                className="w-full bg-white/10 border-2 border-purple-400 rounded-none p-3 text-white focus:outline-none focus:border-purple-300"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="city" className="block text-sm font-medium uppercase tracking-wide mb-2">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  className="w-full bg-white/10 border-2 border-purple-400 rounded-none p-3 text-white focus:outline-none focus:border-purple-300"
                />
              </div>
              <div>
                <label htmlFor="state" className="block text-sm font-medium uppercase tracking-wide mb-2">
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  className="w-full bg-white/10 border-2 border-purple-400 rounded-none p-3 text-white focus:outline-none focus:border-purple-300"
                />
              </div>
              <div>
                <label htmlFor="zipCode" className="block text-sm font-medium uppercase tracking-wide mb-2">
                  ZIP Code
                </label>
                <input
                  type="text"
                  id="zipCode"
                  className="w-full bg-white/10 border-2 border-purple-400 rounded-none p-3 text-white focus:outline-none focus:border-purple-300"
                />
              </div>
            </div>
            
            <button
              type="button"
              className="btn btn-primary w-full"
              onClick={() => setStep('payment')}
            >
              Continue to Payment
            </button>
          </form>
        ) : (
          <form className="space-y-6">
            <div>
              <label htmlFor="cardNumber" className="block text-sm font-medium uppercase tracking-wide mb-2">
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                className="w-full bg-white/10 border-2 border-purple-400 rounded-none p-3 text-white focus:outline-none focus:border-purple-300"
                placeholder="1234 5678 9012 3456"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="expiry" className="block text-sm font-medium uppercase tracking-wide mb-2">
                  Expiry Date
                </label>
                <input
                  type="text"
                  id="expiry"
                  className="w-full bg-white/10 border-2 border-purple-400 rounded-none p-3 text-white focus:outline-none focus:border-purple-300"
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <label htmlFor="cvv" className="block text-sm font-medium uppercase tracking-wide mb-2">
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  className="w-full bg-white/10 border-2 border-purple-400 rounded-none p-3 text-white focus:outline-none focus:border-purple-300"
                  placeholder="123"
                />
              </div>
            </div>
            
            <button
              type="submit"
              className="btn btn-primary w-full"
            >
              Place Order
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;