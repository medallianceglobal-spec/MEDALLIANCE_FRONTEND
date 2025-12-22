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