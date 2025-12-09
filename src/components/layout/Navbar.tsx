import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import logo from '@/assets/logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Find Vendors', path: '/vendors' },
    { name: 'About Us', path: '/about' },
  ];

  const actionLinks = [
    { name: 'Vendor Dashboard', path: '/vendor-dashboard' },
    { name: 'Get Network Access', path: '/network-access' },
    { name: 'Register Company', path: '/register-company' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={logo} 
              alt="MedAlliance Global" 
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-medium transition-all duration-300 hover:text-primary ${
                  isActive(link.path) 
                    ? 'text-primary' 
                    : 'text-foreground/80'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
                )}
              </Link>
            ))}

            {/* Dropdown for Business Actions */}
            <div 
              className="relative"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <button className="flex items-center gap-1 font-medium text-foreground/80 hover:text-primary transition-colors">
                For Business
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              {showDropdown && (
                <div className="absolute top-full left-0 mt-2 w-56 py-2 glass rounded-xl shadow-card animate-fade-in">
                  {actionLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Search and Auth */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-foreground/70">
              <Search className="h-5 w-5" />
            </Button>
            
            {isAuthenticated ? (
              <Button variant="outline" onClick={logout}>
                Sign Out
              </Button>
            ) : (
              <Link to="/auth">
                <Button variant="hero">
                  Get Started
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-xl font-medium transition-all ${
                    isActive(link.path)
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground/80 hover:bg-muted'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-border my-2" />
              {actionLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 rounded-xl font-medium text-foreground/80 hover:bg-muted transition-all"
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-border my-2" />
              {isAuthenticated ? (
                <Button variant="outline" onClick={() => { logout(); setIsOpen(false); }} className="mx-4">
                  Sign Out
                </Button>
              ) : (
                <Link to="/auth" onClick={() => setIsOpen(false)} className="mx-4">
                  <Button variant="hero" className="w-full">
                    Get Started
                  </Button>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
