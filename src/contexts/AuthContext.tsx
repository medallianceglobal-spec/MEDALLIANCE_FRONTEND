import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  phoneVerified: boolean;
  userPhone: string | null;
  login: () => void;
  logout: () => void;
  setPhoneVerified: (phone: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [phoneVerified, setPhoneVerifiedState] = useState(false);
  const [userPhone, setUserPhone] = useState<string | null>(null);

  const login = () => setIsAuthenticated(true);
  const logout = () => {
    setIsAuthenticated(false);
    setPhoneVerifiedState(false);
    setUserPhone(null);
  };
  const setPhoneVerified = (phone: string) => {
    setPhoneVerifiedState(true);
    setUserPhone(phone);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, phoneVerified, userPhone, login, logout, setPhoneVerified }}>
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
