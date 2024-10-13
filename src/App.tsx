import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Home from './pages/Home';
import Calendar from './pages/Calendar';
import BookingForm from './pages/BookingForm';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import OnlinePayment from './pages/OnlinePayment';
import StaffManagement from './pages/StaffManagement';
import ServiceCategories from './pages/ServiceCategories';
import RecurringAppointments from './pages/RecurringAppointments';
import Waitlist from './pages/Waitlist';
import ClientProfile from './pages/ClientProfile';
import ReviewsAndRatings from './pages/ReviewsAndRatings';
import AnalyticsDashboard from './pages/AnalyticsDashboard';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100">
          <Header />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/book" element={<BookingForm />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/payment" element={<OnlinePayment />} />
              <Route path="/staff" element={<StaffManagement />} />
              <Route path="/services" element={<ServiceCategories />} />
              <Route path="/recurring" element={<RecurringAppointments />} />
              <Route path="/waitlist" element={<Waitlist />} />
              <Route path="/profile" element={<ClientProfile />} />
              <Route path="/reviews" element={<ReviewsAndRatings />} />
              <Route path="/analytics" element={<AnalyticsDashboard />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;