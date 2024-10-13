import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Star, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Home: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter signup logic
    console.log('Newsletter signup:', email);
    setEmail('');
    alert('Thank you for signing up!');
  };

  return (
    <div className="text-center">
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-6 gradient-text">Welcome to Glamour Scheduler</h1>
        <p className="text-xl mb-8">Book your cosmetology appointment with ease</p>
        <Link to="/calendar" className="gradient-button">
          Book Now
        </Link>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 gradient-text">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Calendar className="w-12 h-12 text-pink-500 mb-4" />}
            title="Easy Booking"
            description="Schedule your appointments with just a few clicks"
          />
          <FeatureCard
            icon={<Clock className="w-12 h-12 text-pink-500 mb-4" />}
            title="Flexible Hours"
            description="Find the perfect time slot that fits your schedule"
          />
          <FeatureCard
            icon={<Star className="w-12 h-12 text-pink-500 mb-4" />}
            title="Top-notch Service"
            description="Experience the best in beauty and wellness"
          />
        </div>
      </section>

      <section className="relative py-16 overflow-hidden mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-purple-100 skew-y-3"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4 gradient-text">About Our Stylist</h2>
              <p className="text-gray-700 leading-relaxed">
                Meet Sarah, our expert stylist with over 10 years of experience in the beauty industry. 
                Sarah's passion for hair and makeup artistry has earned her a loyal clientele and numerous 
                accolades. Her innovative techniques and attention to detail ensure that every client leaves 
                our salon feeling confident and beautiful.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-64 h-64 relative">
                <div className="absolute inset-0 bg-pink-200 rounded-full animate-pulse"></div>
                <img
                  src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                  alt="Stylist"
                  className="absolute inset-0 w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 gradient-text">Join Our Newsletter</h2>
        <p className="text-gray-600 mb-6">Stay updated with our latest offers and beauty tips!</p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-grow rounded-md border-gray-300 shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50 p-2"
          />
          <button type="submit" className="gradient-button">
            Subscribe
          </button>
        </form>
      </section>

      <footer className="bg-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-semibold gradient-text mb-2">Glamour Scheduler</h3>
              <p className="text-gray-600">Making beauty appointments easy</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-pink-500">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500">
                <Twitter size={24} />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Glamour Scheduler. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
      <div className="flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Home;