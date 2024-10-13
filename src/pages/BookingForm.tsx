import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { addAppointment } from '../db/database';

const services = [
  { id: 1, name: 'Wash and Go', duration: 60, price: 50 },
  { id: 2, name: 'Haircut', duration: 45, price: 35 },
  { id: 3, name: 'Color Treatment', duration: 120, price: 100 },
  { id: 4, name: 'Styling', duration: 30, price: 25 },
];

const BookingForm: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedDate = location.state?.date ? new Date(location.state.date) : new Date();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedService, setSelectedService] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const appointment = {
      client_name: name,
      phone,
      service: selectedService,
      date: format(selectedDate, 'yyyy-MM-dd')
    };
    addAppointment(appointment);
    console.log('Appointment booked:', appointment);
    navigate('/dashboard');
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-8 gradient-text">Book Your Appointment</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50 p-2"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50 p-2"
          />
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service</label>
          <select
            id="service"
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50 p-2"
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.id} value={service.name}>
                {service.name} - ${service.price} ({service.duration} min)
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Selected Date</label>
          <p className="mt-1 text-lg font-semibold">{format(selectedDate, 'MMMM d, yyyy')}</p>
        </div>
        <button type="submit" className="w-full gradient-button">
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default BookingForm;