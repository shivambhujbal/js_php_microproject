import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { User } from "lucide-react";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [showAuth, setShowAuth] = useState(false);
  const [user, setUser] = useState(null); // Store logged-in user
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();


useEffect(() => {
  // Check if user is logged in
  const loggedInUser = localStorage.getItem('user'); // Get user from localStorage
  if (loggedInUser) {
    setUser(JSON.parse(loggedInUser));
  }
}, []);

const handleOrderNowClick = (e: React.MouseEvent) => {
  e.preventDefault();
  setShowAuth(true);
};

const handleLogout = () => {
  localStorage.removeItem('user'); // Remove user from localStorage
  setUser(null);
  navigate('/'); // Redirect to homepage after logout
};

return (
  <>
    <nav className={`bg-black fixed w-full z-50 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="text-3xl font-bold text-purple-600 uppercase tracking-wider">
              CATEREASE
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/full-menu" className="nav-link">Menu</Link>
            <Link to="/rewards" className="nav-link">Rewards</Link>

            {/* If user is logged in, show profile icon, else show Order Now button */}
            {user ? (
              <div className="relative">
                <button
                  className="text-white hover:text-purple-400 flex items-center"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  <User className="w-6 h-6" />
                </button>

                {/* Profile Dropdown */}
                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-black border border-purple-600 rounded-md shadow-lg">
                    <Link to="/profile" className="block px-4 py-2 text-white hover:bg-purple-600">
                      View Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-white hover:bg-purple-600"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button 
                className="btn btn-primary"
                onClick={handleOrderNowClick}
              >
                Order Now
              </button>
            )}

            <Link to="/cart" className="text-white hover:text-purple-400">
              <ShoppingCart className="w-6 h-6" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link to="/cart" className="text-white hover:text-purple-400">
              <ShoppingCart className="w-6 h-6" />
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-purple-400"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-black">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 nav-link">Home</Link>
              <Link to="/menu" className="block px-3 py-2 nav-link">Menu</Link>
              <Link to="/rewards" className="block px-3 py-2 nav-link">Rewards</Link>
              <button 
                className="w-full btn btn-primary mt-4"
                onClick={handleOrderNowClick}
              >
                Order Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>

    {showAuth && <AuthModal onClose={() => setShowAuth(false)} setUser={setUser} />}
  </>
);
};

interface AuthModalProps {
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   onClose();
  //   navigate('/cart');
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;
    const confirmPasswordInput = document.getElementById("confirmPassword") as HTMLInputElement;
  
    if (!isLogin && confirmPasswordInput.value !== password) {
      alert("Passwords do not match");
      return;
    }
  
    const url = isLogin
      ? "http://localhost/auth/login.php"
      : "http://localhost/auth/register.php";
  
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
  
    const data = await response.json();
    alert(data.message);
  
    if (data.message.includes("successful")) {
      onClose();
      if (isLogin) navigate("/cart");
    }
  };
  
  

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-black border-2 border-purple-600 p-8 max-w-md w-full relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-purple-400"
        >
          <X size={24} />
        </button>
        
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2 uppercase tracking-wide">
            {isLogin ? 'Log In' : 'Sign Up'}
          </h2>
          <p className="text-gray-400">
            {isLogin 
              ? 'Welcome back! Log in to your account.' 
              : 'Create an account to order and earn rewards.'}
          </p>
        </div>
        
        <div className="flex mb-8 border-b border-purple-900">
          <button 
            className={`py-2 px-4 w-1/2 font-bold uppercase tracking-wide ${isLogin ? 'text-purple-400 border-b-2 border-purple-400' : 'text-gray-400'}`}
            onClick={() => setIsLogin(true)}
          >
            Log In
          </button>
          <button 
            className={`py-2 px-4 w-1/2 font-bold uppercase tracking-wide ${!isLogin ? 'text-purple-400 border-b-2 border-purple-400' : 'text-gray-400'}`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>
        
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name Field - only visible on Sign Up */}
          {!isLogin && (
            <div>
              <label htmlFor="name" className="block text-sm font-medium uppercase tracking-wide mb-2 text-white">Name</label>
              <input
                type="text"
                id="name"
                className="w-full bg-white/10 border-2 border-purple-400 rounded-none p-3 text-white focus:outline-none focus:border-purple-300"
                placeholder="Enter your name"
              />
            </div>
          )}
  
          {/* Mobile Number Field - only visible on Sign Up */}
          {!isLogin && (
            <div>
              <label htmlFor="mobile" className="block text-sm font-medium uppercase tracking-wide mb-2 text-white">Mobile Number</label>
              <input
                type="tel"
                id="mobile"
                className="w-full bg-white/10 border-2 border-purple-400 rounded-none p-3 text-white focus:outline-none focus:border-purple-300"
                placeholder="Enter your mobile number"
              />
            </div>
          )}
          
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium uppercase tracking-wide mb-2 text-white">Email</label>
            <input
              type="email"
              id="email"
              className="w-full bg-white/10 border-2 border-purple-400 rounded-none p-3 text-white focus:outline-none focus:border-purple-300"
              placeholder="your@email.com"
            />
          </div>
          
          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium uppercase tracking-wide mb-2 text-white">Password</label>
            <input
              type="password"
              id="password"
              className="w-full bg-white/10 border-2 border-purple-400 rounded-none p-3 text-white focus:outline-none focus:border-purple-300"
              placeholder="••••••••"
            />
          </div>
          
          {/* Confirm Password Field (only visible on Sign Up) */}
          {!isLogin && (
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium uppercase tracking-wide mb-2 text-white">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full bg-white/10 border-2 border-purple-400 rounded-none p-3 text-white focus:outline-none focus:border-purple-300"
                placeholder="••••••••"
              />
            </div>
          )}
          
          {/* Forgot Password Link - only visible on Log In */}
          {isLogin && (
            <div className="flex justify-end">
              <a href="#" className="text-sm text-purple-400 hover:text-purple-300">Forgot password?</a>
            </div>
          )}
          
          <button
            type="submit"
            className="w-full btn btn-primary"
          >
            {isLogin ? 'Log In' : 'Sign Up'}
          </button>
        </form>
        
        <div className="mt-6 text-center text-gray-400">
          <p>
            {isLogin 
              ? "Don't have an account? " 
              : "Already have an account? "}
            <button 
              className="text-purple-400 hover:text-purple-300"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? 'Sign Up' : 'Log In'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );  
  
}  

export default Navbar;