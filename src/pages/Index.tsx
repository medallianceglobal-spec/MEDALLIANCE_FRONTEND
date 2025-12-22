import { Link } from "react-router-dom";
import {
  Search,
  MapPin,
  ArrowRight,
  Globe,
  Heart,
  Zap,
  Building2,
  Shield,
  Plane,
  Ambulance,
  Cross,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { useState } from "react";

const categories = [
  { name: "Hospitals & Clinics", icon: Building2 },
  { name: "Diagnostics", icon: Heart },
  { name: "Pharmacy", icon: Shield },
  { name: "Medical Equipment", icon: Zap },
  { name: "Medical Tourism", icon: Globe },
  { name: "Air Ambulance", icon: Plane },
  { name: "Ground Ambulance", icon: Ambulance },
  { name: "Funeral Services", icon: Cross },
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchLocation, setSearchLocation] = useState("");

  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 gradient-hero" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Find Trusted{" "}
            <span className="block bg-gradient-to-r from-mint-light to-secondary bg-clip-text text-transparent">
              Healthcare Partners
            </span>
          </h1>

          <p className="text-white/80 mb-10 max-w-2xl mx-auto">
            Discover hospitals, diagnostics, medical equipment & more across the
            globe.
          </p>

          <div className="glass rounded-2xl p-4 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search services..."
                  className="w-full pl-12 py-4 rounded-xl bg-white/80"
                />
              </div>

              <div className="flex-1 relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  placeholder="City or Country"
                  className="w-full pl-12 py-4 rounded-xl bg-white/80"
                />
              </div>

              <Button variant="hero" size="lg">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Browse by Category
            </h2>
            <p className="text-muted-foreground">
              Explore healthcare services by specialization
            </p>
          </div>

          {/* All categories in grid - no scrolling */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                to={`/vendors?category=${cat.name.toLowerCase()}`}
                className="text-center group"
              >
                <div className="transition-all duration-300 group-hover:scale-110">
                  <div className="mx-auto mb-2 md:mb-3 w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                    <cat.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <p className="text-xs md:text-sm font-medium">{cat.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PARTNERS */}
<section className="py-20 bg-muted/30">
  <div className="container mx-auto px-4">
    <div className="flex justify-between items-center mb-10">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Featured Healthcare Partners
        </h2>
        <p className="text-muted-foreground">
          Top-rated and verified healthcare vendors from around the world
        </p>
      </div>
      <Link to="/vendors">
        <Button variant="outline" className="hidden md:flex items-center gap-2">
          View All Vendors
          <ArrowRight className="w-4 h-4" />
        </Button>
      </Link>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Card 1 */}
      <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group">
        <div className="relative h-48 overflow-hidden bg-gray-100">
          <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400"
            alt="Apollo Healthcare Solutions"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-medium rounded-full flex items-center gap-1">
              <Shield className="w-3 h-3" />
              Verified
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-bold text-lg mb-2">Apollo Healthcare Solutions</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Premier multi-specialty hospital chain with cutting-edge technology
          </p>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1">
              <span className="text-yellow-500">⭐</span>
              <span className="font-semibold">4.9</span>
              <span className="text-muted-foreground">(2453)</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>New York, USA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group">
        <div className="relative h-48 overflow-hidden bg-gray-100">
          <img
            src="https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=400"
            alt="MedTech Diagnostics"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-medium rounded-full flex items-center gap-1">
              <Shield className="w-3 h-3" />
              Verified
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-bold text-lg mb-2">MedTech Diagnostics</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Advanced diagnostic laboratory with AI-powered analysis
          </p>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1">
              <span className="text-yellow-500">⭐</span>
              <span className="font-semibold">4.8</span>
              <span className="text-muted-foreground">(1829)</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>London, UK</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group">
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-orange-200 to-orange-300">
          <img
            src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400"
            alt="Global Pharma Corp"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-medium rounded-full flex items-center gap-1">
              <Shield className="w-3 h-3" />
              Verified
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-bold text-lg mb-2">Global Pharma Corp</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Leading pharmaceutical distributor with worldwide network
          </p>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1">
              <span className="text-yellow-500">⭐</span>
              <span className="font-semibold">4.7</span>
              <span className="text-muted-foreground">(1456)</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Singapore</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group">
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-orange-200 to-orange-300">
          <img
            src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400
            alt="HealthCare Plus"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-medium rounded-full flex items-center gap-1">
              <Shield className="w-3 h-3" />
              Verified
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-bold text-lg mb-2">HealthCare Plus</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Comprehensive medical services with patient-first approach
          </p>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1">
              <span className="text-yellow-500">⭐</span>
              <span className="font-semibold">4.7</span>
              <span className="text-muted-foreground">(1456)</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Singapore</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card 5 */}
      <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group">
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-orange-200 to-orange-300">
          <img
            src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400"
            alt="MediCare International"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-medium rounded-full flex items-center gap-1">
              <Shield className="w-3 h-3" />
              Verified
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-bold text-lg mb-2">MediCare International</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Leading pharmaceutical distributor with worldwide network
          </p>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1">
              <span className="text-yellow-500">⭐</span>
              <span className="font-semibold">4.7</span>
              <span className="text-muted-foreground">(1456)</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Singapore</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card 6 */}
      <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group">
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-orange-200 to-orange-300">
          <img
            src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400"
            alt="Premier Health Group"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-medium rounded-full flex items-center gap-1">
              <Shield className="w-3 h-3" />
              Verified
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-bold text-lg mb-2">Premier Health Group</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Leading pharmaceutical distributor with worldwide network
          </p>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1">
              <span className="text-yellow-500">⭐</span>
              <span className="font-semibold">4.7</span>
              <span className="text-muted-foreground">(1456)</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Singapore</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card 7 */}
      <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group">
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-orange-200 to-orange-300">
          <img
            src="https://images.unsplash.com/photo-1576602976047-174e57a47881?w=400"
            alt="Advanced Medical Systems"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-medium rounded-full flex items-center gap-1">
              <Shield className="w-3 h-3" />
              Verified
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-bold text-lg mb-2">Advanced Medical Systems</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Leading pharmaceutical distributor with worldwide network
          </p>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1">
              <span className="text-yellow-500">⭐</span>
              <span className="font-semibold">4.7</span>
              <span className="text-muted-foreground">(1456)</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Singapore</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card 8 */}
      <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group">
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-orange-200 to-orange-300">
          <img
            src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400"
            alt="LifeCare Solutions"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-medium rounded-full flex items-center gap-1">
              <Shield className="w-3 h-3" />
              Verified
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-bold text-lg mb-2">LifeCare Solutions</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Leading pharmaceutical distributor with worldwide network
          </p>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1">
              <span className="text-yellow-500">⭐</span>
              <span className="font-semibold">4.7</span>
              <span className="text-muted-foreground">(1456)</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Singapore</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Mobile View All Button */}
    <div className="mt-8 text-center md:hidden">
      <Link to="/vendors">
        <Button variant="outline" className="flex items-center gap-2 mx-auto">
          View All Vendors
          <ArrowRight className="w-4 h-4" />
        </Button>
      </Link>
    </div>
  </div>
</section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to grow your healthcare business?
        </h2>
        <p className="mb-8 text-white/80">
          Join verified healthcare vendors worldwide.
        </p>
        <Link to="/register-company">
          <Button variant="glass" size="lg">
            Register Your Company
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Link>
      </section>
    </Layout>
  );
};

export default Index;
