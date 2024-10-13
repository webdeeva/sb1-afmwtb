import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Scissors, Menu, X, Home, Calendar, User, LogIn, UserPlus, BarChart } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { to: '/', icon: <Home size={20} />, text: 'Home' },
    { to: '/calendar', icon: <Calendar size={20} />, text: 'Book' },
    ...(user
      ? [
          { to: '/profile', icon: <User size={20} />, text: 'Profile' },
          ...(user.role === 'staff'
            ? [
                { to: '/dashboard', icon: <BarChart size={20} />, text: 'Dashboard' },
                { to: '/staff', icon: <User size={20} />, text: 'Staff' },
                { to: '/analytics', icon: <BarChart size={20} />, text: 'Analytics' },
              ]
            : []),
          {
            to: '#',
            icon: <LogIn size={20} />,
            text: 'Logout',
            onClick: (e: React.MouseEvent) => {
              e.preventDefault();
              logout();
              setIsMenuOpen(false);
            },
          },
        ]
      : [
          { to: '/login', icon: <LogIn size={20} />, text: 'Login' },
          { to: '/register', icon: <UserPlus size={20} />, text: 'Register' },
        ]),
  ];

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Scissors className="text-pink-500 mr-2" />
          <h1 className="text-2xl font-bold gradient-text">Glamour Scheduler</h1>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                {item.onClick ? (
                  <button
                    onClick={item.onClick}
                    className="flex items-center text-gray-600 hover:text-pink-500"
                  >
                    {item.icon}
                    <span className="ml-1">{item.text}</span>
                  </button>
                ) : (
                  <Link to={item.to} className="flex items-center text-gray-600 hover:text-pink-500">
                    {item.icon}
                    <span className="ml-1">{item.text}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <button className="md:hidden text-gray-600" onClick={toggleMenu}>
          <Menu size={24} />
        </button>
      </div>
      {/* Mobile Side Menu */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-50 md:hidden`}
      >
        <div className="p-4">
          <button className="text-gray-600 mb-4" onClick={toggleMenu}>
            <X size={24} />
          </button>
          <ul className="space-y-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                {item.onClick ? (
                  <button
                    onClick={(e) => {
                      item.onClick(e);
                      toggleMenu();
                    }}
                    className="flex items-center text-gray-600 hover:text-pink-500"
                  >
                    {item.icon}
                    <span className="ml-2">{item.text}</span>
                  </button>
                ) : (
                  <Link
                    to={item.to}
                    className="flex items-center text-gray-600 hover:text-pink-500"
                    onClick={toggleMenu}
                  >
                    {item.icon}
                    <span className="ml-2">{item.text}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;