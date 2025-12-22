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
  ShieldCheck,
  Info,
  Headphones,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import BlogsPreview from "./BlogsPreview";
import herobanner from "@/assets/hero_banner.png";
import { useState } from "react";
import TestimonialsSection from "./Testimonials";

/* ================= DATA ================= */

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

const featuredVendors = [
  {
    name: "Apollo Healthcare Solutions",
    description:
      "Premier multi-specialty hospital chain with cutting-edge technology",
    rating: "4.9",
    reviews: "2453",
    location: "New York, USA",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400",
  },
  {
    name: "MedTech Diagnostics",
    description:
      "Advanced diagnostic laboratory with AI-powered analysis",
    rating: "4.8",
    reviews: "1829",
    location: "London, UK",
    image:
      "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=400",
  },
  {
    name: "Global Pharma Corp",
    description:
      "Leading pharmaceutical distributor with worldwide network",
    rating: "4.7",
    reviews: "1456",
    location: "Singapore",
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400",
  },
  {
    name: "HealthCare Plus",
    description:
      "Comprehensive medical services with patient-first approach",
    rating: "4.7",
    reviews: "1321",
    location: "Berlin, Germany",
    image:
      "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400",
  },
  {
    name: "MediCare International",
    description:
      "Global healthcare provider with strong international presence",
    rating: "4.7",
    reviews: "1210",
    location: "Dubai, UAE",
    image:
      "https://images.unsplash.com/photo-1576602976047-174e57a47881?w=400",
  },
  {
    name: "Premier Health Group",
    description:
      "Trusted healthcare network delivering excellence in care",
    rating: "4.6",
    reviews: "1180",
    location: "Toronto, Canada",
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400",
  },
];

const howItWorks = [
  {
    icon: ShieldCheck,
    title: "Curated Healthcare Partners",
    description:
      "We onboard healthcare providers carefully, not aggressively.",
  },
  {
    icon: Info,
    title: "Clear Information, No Guesswork",
    description:
      "Patients get straightforward details to make informed decisions.",
  },
  {
    icon: Headphones,
    title: "Human Support When It Matters",
    description:
      "Real assistance, not automated healthcare confusion.",
  },
  {
    icon: TrendingUp,
    title: "Growing Responsibly",
    description:
      "Scale follows trust—not the other way around.",
  },
];

/* ================= COMPONENT ================= */

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchLocation, setSearchLocation] = useState("");

  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${herobanner})` }}
        />

        {/* Blue overlay + blur */}
        <div className="absolute inset-0 bg-navy/70 backdrop-blur-xs" />

        {/* Content */}
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

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                to={`/vendors?category=${encodeURIComponent(
                  cat.name.toLowerCase()
                )}`}
                className="text-center group"
              >
                <div className="transition-all duration-300 group-hover:scale-110">
                  <div className="mx-auto mb-3 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                    <cat.icon className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-sm font-medium">{cat.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PARTNERS */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
           Trusted HealthCare, Worldwide
          </h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            A curated network of verified medical partners across the globe.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredVendors.map((vendor) => (
              <div
                key={vendor.name}
                className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={vendor.image}
                    alt={vendor.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-emerald-500 text-white text-xs rounded-full flex items-center gap-1 shadow">
                      <Shield className="w-3 h-3" />
                      Verified
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">{vendor.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {vendor.description}
                  </p>
                  <div className="flex justify-between text-sm">
                    <span>
                      ⭐ {vendor.rating}
                    </span>
                    <span className="text-muted-foreground">
                      {vendor.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOGS */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <BlogsPreview />
        </div>
      </section>

      {/* HOW MEDALLIANCE WORKS */}
      <section className="py-20 bg-muted/30 ">
        <div className="container mx-auto px-4 -mt-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold">
              How MedAlliance Works
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((item) => (
              <div
                key={item.title}
                className="bg-card rounded-2xl p-6 border border-border"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/about">
              <Button className="gap-2">
                More details
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <TestimonialsSection/>

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
