import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  phoneVerified: boolean;
  userPhone: string | null;
  Login: () => void;
  logout: () => void;
  setPhoneVerified: (phone: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize state from localStorage
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const token = localStorage.getItem('auth_token');
    return !!token; // true if token exists, false otherwise
  });

  const [phoneVerified, setPhoneVerifiedState] = useState(() => {
    return localStorage.getItem('phone_verified') === 'true';
  });

  const [userPhone, setUserPhone] = useState<string | null>(() => {
    return localStorage.getItem('user_phone');
  });

  const Login = () => {
    setIsAuthenticated(true);
    // Token should already be set by your login function
  };

  const logout = () => {
    setIsAuthenticated(false);
    setPhoneVerifiedState(false);
    setUserPhone(null);
    
    // Clear localStorage
    localStorage.removeItem('auth_token');
    localStorage.removeItem('phone_verified');
    localStorage.removeItem('user_phone');
  };

  const setPhoneVerified = (phone: string) => {
    setPhoneVerifiedState(true);
    setUserPhone(phone);
    
    // Persist to localStorage
    localStorage.setItem('phone_verified', 'true');
    localStorage.setItem('user_phone', phone);
  };

  // Optional: Sync state with localStorage changes across tabs
  useEffect(() => {
    const handleStorageChange = () => {
      const token = localStorage.getItem('auth_token');
      setIsAuthenticated(!!token);
      
      const phoneVerified = localStorage.getItem('phone_verified') === 'true';
      setPhoneVerifiedState(phoneVerified);
      
      const phone = localStorage.getItem('user_phone');
      setUserPhone(phone);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, phoneVerified, userPhone, Login, logout, setPhoneVerified }}>
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