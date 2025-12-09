import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, MapPin, Star, Shield, Award, Filter, ChevronDown, Grid, List, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';

const allVendors = [
  {
    id: 1,
    name: 'Apollo Healthcare Solutions',
    description: 'Premier multi-specialty hospital chain with cutting-edge technology and world-class medical professionals.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400',
    rating: 4.9,
    reviews: 2453,
    location: 'New York, USA',
    category: 'Hospitals',
    isPremium: true,
    isAccredited: true,
    isFeatured: true,
    isClaimed: true,
  },
  {
    id: 2,
    name: 'MedTech Diagnostics',
    description: 'Advanced diagnostic laboratory with AI-powered analysis and rapid result delivery.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400',
    rating: 4.8,
    reviews: 1829,
    location: 'London, UK',
    category: 'Diagnostics',
    isPremium: true,
    isAccredited: true,
    isFeatured: true,
    isClaimed: true,
  },
  {
    id: 3,
    name: 'Global Pharma Corp',
    description: 'Leading pharmaceutical distributor with worldwide network and quality assurance.',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400',
    rating: 4.7,
    reviews: 1456,
    location: 'Singapore',
    category: 'Pharmacy',
    isPremium: false,
    isAccredited: true,
    isFeatured: false,
    isClaimed: true,
  },
  {
    id: 4,
    name: 'HealthEquip International',
    description: 'Premium medical equipment supplier with ISO certified products and global shipping.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400',
    rating: 4.6,
    reviews: 987,
    location: 'Berlin, Germany',
    category: 'Medical Equipment',
    isPremium: true,
    isAccredited: true,
    isFeatured: true,
    isClaimed: false,
  },
  {
    id: 5,
    name: 'CareFirst Clinics',
    description: 'Network of family healthcare clinics providing comprehensive primary care services.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400',
    rating: 4.5,
    reviews: 756,
    location: 'Toronto, Canada',
    category: 'Clinics',
    isPremium: false,
    isAccredited: true,
    isFeatured: false,
    isClaimed: true,
  },
  {
    id: 6,
    name: 'MedSoft Solutions',
    description: 'Healthcare IT solutions provider specializing in EHR and hospital management systems.',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400',
    rating: 4.8,
    reviews: 543,
    location: 'San Francisco, USA',
    category: 'Healthcare IT',
    isPremium: true,
    isAccredited: false,
    isFeatured: true,
    isClaimed: true,
  },
  {
    id: 7,
    name: 'Unity Medical Center',
    description: 'State-of-the-art hospital with specialized departments for cardiology, neurology, and oncology.',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400',
    rating: 4.9,
    reviews: 3210,
    location: 'Dubai, UAE',
    category: 'Hospitals',
    isPremium: true,
    isAccredited: true,
    isFeatured: true,
    isClaimed: true,
  },
  {
    id: 8,
    name: 'BioLab Diagnostics',
    description: 'Comprehensive pathology services with home sample collection and online reports.',
    image: 'https://images.unsplash.com/photo-1581093458791-9d42e3c2fd45?w=400',
    rating: 4.4,
    reviews: 892,
    location: 'Mumbai, India',
    category: 'Diagnostics',
    isPremium: false,
    isAccredited: true,
    isFeatured: false,
    isClaimed: true,
  },
];

const categories = ['All', 'Hospitals', 'Clinics', 'Diagnostics', 'Pharmacy', 'Medical Equipment', 'Healthcare IT'];
const sortOptions = ['Relevance', 'Rating: High to Low', 'Rating: Low to High', 'Reviews: Most', 'Name: A-Z'];

const VendorsPage = () => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Relevance');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    premium: false,
    accredited: false,
    featured: false,
    claimed: false,
  });

  const filteredVendors = allVendors.filter((vendor) => {
    const matchesSearch = vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vendor.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || vendor.category === selectedCategory;
    const matchesPremium = !filters.premium || vendor.isPremium;
    const matchesAccredited = !filters.accredited || vendor.isAccredited;
    const matchesFeatured = !filters.featured || vendor.isFeatured;
    const matchesClaimed = !filters.claimed || vendor.isClaimed;
    
    return matchesSearch && matchesCategory && matchesPremium && matchesAccredited && matchesFeatured && matchesClaimed;
  });

  const sortedVendors = [...filteredVendors].sort((a, b) => {
    switch (sortBy) {
      case 'Rating: High to Low':
        return b.rating - a.rating;
      case 'Rating: Low to High':
        return a.rating - b.rating;
      case 'Reviews: Most':
        return b.reviews - a.reviews;
      case 'Name: A-Z':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const activeFiltersCount = Object.values(filters).filter(Boolean).length;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy via-primary/80 to-secondary/80 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1920')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
            Find Healthcare Vendors
          </h1>
          
          {/* Search Bar */}
          <div className="max-w-3xl mx-auto glass rounded-2xl p-3">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search vendors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/80 border-0 focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <Button variant="hero" size="lg" className="md:w-auto">
                <Search className="h-5 w-5" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Results */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted hover:bg-muted/80 text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Toolbar */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
            <p className="text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{sortedVendors.length}</span> vendors
            </p>

            <div className="flex items-center gap-3 flex-wrap">
              {/* Filter Button */}
              <Button
                variant={showFilters ? 'default' : 'outline'}
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="relative"
              >
                <Filter className="h-4 w-4" />
                Filters
                {activeFiltersCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-secondary text-white text-xs flex items-center justify-center">
                    {activeFiltersCount}
                  </span>
                )}
              </Button>

              {/* Sort Dropdown */}
              <div className="relative group">
                <Button variant="outline" size="sm" className="gap-2">
                  Sort: {sortBy}
                  <ChevronDown className="h-4 w-4" />
                </Button>
                <div className="absolute right-0 top-full mt-2 w-48 py-2 bg-card rounded-xl shadow-card border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
                  {sortOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => setSortBy(option)}
                      className={`w-full px-4 py-2 text-left text-sm transition-colors ${
                        sortBy === option ? 'bg-primary/10 text-primary' : 'hover:bg-muted'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-1 p-1 bg-muted rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid' ? 'bg-card shadow-sm' : 'hover:bg-card/50'
                  }`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'list' ? 'bg-card shadow-sm' : 'hover:bg-card/50'
                  }`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <div className="glass rounded-2xl p-6 mb-8 animate-fade-in">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Filters</h3>
                <button
                  onClick={() => setFilters({ premium: false, accredited: false, featured: false, claimed: false })}
                  className="text-sm text-primary hover:underline"
                >
                  Clear All
                </button>
              </div>
              <div className="flex flex-wrap gap-4">
                {[
                  { key: 'premium', label: 'Premium', icon: Award },
                  { key: 'accredited', label: 'Accredited', icon: Shield },
                  { key: 'featured', label: 'Featured', icon: Star },
                  { key: 'claimed', label: 'Claimed', icon: MapPin },
                ].map((filter) => (
                  <label
                    key={filter.key}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl border-2 cursor-pointer transition-all ${
                      filters[filter.key as keyof typeof filters]
                        ? 'border-primary bg-primary/10'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={filters[filter.key as keyof typeof filters]}
                      onChange={(e) => setFilters({ ...filters, [filter.key]: e.target.checked })}
                      className="sr-only"
                    />
                    <filter.icon className="h-4 w-4" />
                    {filter.label}
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Vendor Grid/List */}
          {sortedVendors.length > 0 ? (
            <div className={viewMode === 'grid' 
              ? 'grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' 
              : 'space-y-4'
            }>
              {sortedVendors.map((vendor, index) => (
                <Link
                  key={vendor.id}
                  to={`/vendors/${vendor.id}`}
                  className={`group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 animate-fade-in-up ${
                    viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className={`relative overflow-hidden ${viewMode === 'list' ? 'md:w-64 h-48 md:h-auto' : 'h-48'}`}>
                    <img
                      src={vendor.image}
                      alt={vendor.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
                      {vendor.isPremium && (
                        <span className="px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-white text-xs font-semibold flex items-center gap-1">
                          <Award className="h-3 w-3" /> Premium
                        </span>
                      )}
                      {vendor.isAccredited && (
                        <span className="px-2.5 py-1 rounded-full bg-secondary text-white text-xs font-semibold flex items-center gap-1">
                          <Shield className="h-3 w-3" /> Accredited
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="p-5 flex-1">
                    <div className="text-xs text-primary font-medium mb-1">{vendor.category}</div>
                    <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
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
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
                <Search className="h-10 w-10 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">No vendors found</h3>
              <p className="text-muted-foreground mb-6">Try adjusting your search or filters</p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                  setFilters({ premium: false, accredited: false, featured: false, claimed: false });
                }}
              >
                <X className="h-4 w-4" />
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default VendorsPage;
