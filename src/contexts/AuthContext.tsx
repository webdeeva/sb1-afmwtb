import React, { createContext, useState, useContext, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'client' | 'staff';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (name: string, email: string, password: string, role: 'client' | 'staff') => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));

    // Fake staff credentials
    if (email === 'staff@example.com' && password === 'staffpass') {
      const staffUser: User = {
        id: '1',
        name: 'Staff Member',
        email: email,
        role: 'staff',
      };
      setUser(staffUser);
    } else {
      // For simplicity, treat all other logins as clients
      const clientUser: User = {
        id: '2',
        name: 'Client User',
        email: email,
        role: 'client',
      };
      setUser(clientUser);
    }
  };

  const logout = () => {
    setUser(null);
  };

  const register = async (name: string, email: string, password: string, role: 'client' | 'staff') => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));

    const newUser: User = {
      id: '3',
      name: name,
      email: email,
      role: role,
    };
    setUser(newUser);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};