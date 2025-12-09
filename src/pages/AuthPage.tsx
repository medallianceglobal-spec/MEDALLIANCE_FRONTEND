import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import logo from '@/assets/logo.jpg';

const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState<'left' | 'right'>('left');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  
  const navigate = useNavigate();
  const { login } = useAuth();

  const toggleAuth = () => {
    setAnimationDirection(isSignIn ? 'left' : 'right');
    setIsAnimating(true);
    
    setTimeout(() => {
      setIsSignIn(!isSignIn);
      setIsAnimating(false);
    }, 500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login();
    navigate('/');
  };

  const handleGoogleAuth = () => {
    // Google auth functionality to be added later
    console.log('Google auth clicked');
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-muted to-background">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Auth Container */}
      <div className="relative z-10 w-full max-w-md mx-4">
        {/* Logo */}
        <div className="text-center mb-8">
          <img src={logo} alt="MedAlliance Global" className="h-16 mx-auto mb-4" />
        </div>

        {/* Auth Card */}
        <div className="glass rounded-3xl p-8 shadow-card overflow-hidden">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-foreground mb-2">
              {isSignIn ? 'Welcome Back' : 'Create Account'}
            </h1>
            <p className="text-muted-foreground">
              {isSignIn 
                ? 'Sign in to access your healthcare network' 
                : 'Join the global healthcare community'}
            </p>
          </div>

          {/* Form Container with Animation */}
          <div className="relative">
            <div 
              className={`transition-all duration-500 ${
                isAnimating 
                  ? animationDirection === 'left' 
                    ? 'animate-slide-out-left' 
                    : 'animate-slide-out-right'
                  : animationDirection === 'left'
                    ? 'animate-slide-in-right'
                    : 'animate-slide-in-left'
              }`}
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Field - Sign Up Only */}
                {!isSignIn && (
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="input-glass pl-12"
                      required
                    />
                  </div>
                )}

                {/* Email Field */}
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="input-glass pl-12"
                    required
                  />
                </div>

                {/* Password Field */}
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="input-glass pl-12 pr-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>

                {/* Confirm Password - Sign Up Only */}
                {!isSignIn && (
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Confirm Password"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      className="input-glass pl-12"
                      required
                    />
                  </div>
                )}

                {/* Forgot Password - Sign In Only */}
                {isSignIn && (
                  <div className="text-right">
                    <button type="button" className="text-sm text-primary hover:underline">
                      Forgot Password?
                    </button>
                  </div>
                )}

                {/* Submit Button */}
                <Button type="submit" variant="hero" size="lg" className="w-full group">
                  {isSignIn ? 'Sign In' : 'Create Account'}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>

              {/* Divider */}
              <div className="flex items-center gap-4 my-6">
                <div className="flex-1 h-px bg-border" />
                <span className="text-sm text-muted-foreground">or continue with</span>
                <div className="flex-1 h-px bg-border" />
              </div>

              {/* Google Auth Button */}
              <Button
                type="button"
                variant="outline"
                size="lg"
                className="w-full"
                onClick={handleGoogleAuth}
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Google
              </Button>
            </div>
          </div>

          {/* Toggle Auth Mode */}
          <div className="text-center mt-8 pt-6 border-t border-border">
            <p className="text-muted-foreground">
              {isSignIn ? "Don't have an account?" : 'Already have an account?'}
              <button
                type="button"
                onClick={toggleAuth}
                className="ml-2 font-semibold text-primary hover:underline"
              >
                {isSignIn ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </div>
        </div>

        {/* Terms */}
        <p className="text-center text-xs text-muted-foreground mt-6 px-4">
          By continuing, you agree to our{' '}
          <a href="/terms" className="text-primary hover:underline">Terms of Service</a>
          {' '}and{' '}
          <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
