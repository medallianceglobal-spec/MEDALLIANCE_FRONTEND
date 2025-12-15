import { Link } from 'react-router-dom';
import { Search, MapPin, Star, Shield, Award, Users, ArrowRight, CheckCircle, TrendingUp, Globe, Heart, Zap, Building2, Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import { useState } from 'react';

const categories = [
  { name: 'Hospitals', icon: Building2, count: '2,500+' },
  { name: 'Clinics', icon: Stethoscope, count: '8,000+' },
  { name: 'Diagnostics', icon: Heart, count: '3,200+' },
  { name: 'Pharmacy', icon: Shield, count: '5,600+' },
  { name: 'Medical Equipment', icon: Zap, count: '1,800+' },
  { name: 'Healthcare IT', icon: Globe, count: '900+' },
];


const featuredVendors = [
  {
    id: 1,
    name: 'Apollo Healthcare Solutions',
    description: 'Premier multi-specialty hospital chain with cutting-edge technology',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400',
    rating: 4.9,
    reviews: 2453,
    location: 'New York, USA',
    isPremium: true,
    isAccredited: true,
  },
  {
    id: 2,
    name: 'MedTech Diagnostics',
    description: 'Advanced diagnostic laboratory with AI-powered analysis',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400',
    rating: 4.8,
    reviews: 1829,
    location: 'London, UK',
    isPremium: true,
    isAccredited: true,
  },
  {
    id: 3,
    name: 'Global Pharma Corp',
    description: 'Leading pharmaceutical distributor with worldwide network',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400',
    rating: 4.7,
    reviews: 1456,
    location: 'Singapore',
    isPremium: false,
    isAccredited: true,
  },
  {
    id: 4,
    name: 'Global Pharma Corp',
    description: 'Leading pharmaceutical distributor with worldwide network',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400',
    rating: 4.7,
    reviews: 1456,
    location: 'Singapore',
    isPremium: false,
    isAccredited: true,
  },
  {
    id: 5,
    name: 'Global Pharma Corp',
    description: 'Leading pharmaceutical distributor with worldwide network',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400',
    rating: 4.7,
    reviews: 1456,
    location: 'Singapore',
    isPremium: false,
    isAccredited: true,
  },
  {
    id: 6,
    name: 'Global Pharma Corp',
    description: 'Leading pharmaceutical distributor with worldwide network',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400',
    rating: 4.7,
    reviews: 1456,
    location: 'Singapore',
    isPremium: false,
    isAccredited: true,
  },
  {
    id: 7,
    name: 'Global Pharma Corp',
    description: 'Leading pharmaceutical distributor with worldwide network',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400',
    rating: 4.7,
    reviews: 1456,
    location: 'Singapore',
    isPremium: false,
    isAccredited: true,
  },
  {
    id: 8,
    name: 'Global Pharma Corp',
    description: 'Leading pharmaceutical distributor with worldwide network',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400',
    rating: 4.7,
    reviews: 1456,
    location: 'Singapore',
    isPremium: false,
    isAccredited: true,
  },
];



const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchLocation, setSearchLocation] = useState('');

  const handleSearch = () => {
    if (searchQuery || searchLocation) {
      window.location.href = `/vendors?q=${searchQuery}&location=${searchLocation}`;
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1920')] bg-cover bg-center opacity-10" />
        
        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-secondary/20 rounded-full blur-2xl animate-float hidden lg:block" />
        <div className="absolute bottom-40 left-20 w-48 h-48 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in-up">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">Trusted by 50,000+ Healthcare Professionals</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Find Trusted
              <span className="block bg-gradient-to-r from-mint-light to-secondary bg-clip-text text-transparent">
                Healthcare Partners
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              The world's leading directory connecting healthcare providers, medical vendors, and patients across 120+ countries.
            </p>

            {/* Search Box */}
            <div className="glass rounded-2xl p-3 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex flex-col md:flex-row gap-3">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search hospitals, clinics, equipment..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/80 border-0 focus:ring-2 focus:ring-primary/30 transition-all"
                  />
                </div>
                <div className="flex-1 relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="City or Country"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/80 border-0 focus:ring-2 focus:ring-primary/30 transition-all"
                  />
                </div>
                <Button variant="hero" size="lg" onClick={handleSearch} className="md:w-auto w-full">
                  <Search className="h-5 w-5" />
                  Search
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-3 mt-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <span className="text-white/60 text-sm mt-2">Popular:</span>
              {['Hospitals', 'Diagnostic Labs', 'Pharmacies', 'Medical Equipment'].map((item) => (
                <Link
                  key={item}
                  to={`/vendors?category=${item.toLowerCase()}`}
                  className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm transition-all duration-300 hover:scale-105"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Browse by Category
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive directory of healthcare vendors across various specializations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Link
                key={category.name}
                to={`/vendors?category=${category.name.toLowerCase()}`}
                className="card-glass group cursor-pointer text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <category.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.count}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Vendors */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Featured Healthcare Partners
              </h2>
              <p className="text-muted-foreground">
                Top-rated and verified healthcare vendors from around the world
              </p>
            </div>
            <Link to="/vendors">
              <Button variant="outline" className="group">
                View All Vendors
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredVendors.map((vendor, index) => (
              <Link
                key={vendor.id}
                to={`/vendors/${vendor.id}`}
                className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={vendor.image}
                    alt={vendor.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {vendor.isPremium && (
                      <span className="px-3 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-white text-xs font-semibold flex items-center gap-1">
                        <Award className="h-3 w-3" /> Premium
                      </span>
                    )}
                    {vendor.isAccredited && (
                      <span className="px-3 py-1 rounded-full bg-secondary text-white text-xs font-semibold flex items-center gap-1">
                        <Shield className="h-3 w-3" /> Accredited
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    {vendor.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {vendor.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      <span className="font-semibold text-foreground">{vendor.rating}</span>
                      <span className="text-muted-foreground text-sm">({vendor.reviews})</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <MapPin className="h-4 w-4" />
                      {vendor.location}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-sky to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1920')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Grow Your Healthcare Business?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Join thousands of healthcare vendors already on our platform. Get discovered by healthcare providers worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register-company">
                <Button variant="glass" size="lg" className="group">
                  Register Your Company
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/vendor-dashboard">
                <Button variant="glass-dark" size="lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
