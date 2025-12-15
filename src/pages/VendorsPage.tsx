import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  Search,
  MapPin,
  Star,
  Shield,
  Award,
  Filter,
  ChevronDown,
  Grid,
  List,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { fetchCompanyList } from "@/utils/api/company";
import { CompanyResponse } from "@/models/company/companyModels";

const categories = [
  "All",
  "Hospitals",
  "Clinics",
  "Diagnostics",
  "Pharmacy",
  "Medical Equipment",
  "Healthcare IT",
];

const sortOptions = [
  "Relevance",
  "Rating: High to Low",
  "Rating: Low to High",
  "Reviews: Most",
  "Name: A-Z",
];

const VendorsPage = () => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");

  const [vendors, setVendors] = useState<CompanyResponse[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Relevance");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);

  const [filters, setFilters] = useState({
    premium: false,
    accredited: false,
    featured: false,
    claimed: false,
  });

  // -----------------------------
  // 🔥 Fetch vendors from backend
  // -----------------------------
  useEffect(() => {
    async function loadVendors() {
      try {
        const response = await fetchCompanyList({ page: 1, limit: 100 });
        if (response.success) {
          setVendors(response.companies);
        }
      } catch (error) {
        console.error("Error fetching company list:", error);
      } finally {
        setLoading(false);
      }
    }

    loadVendors();
  }, []);

  // -----------------------------
  // 🔁 Map backend → UI format
  // -----------------------------
  const uiVendors = vendors.map((v) => ({
    id: v.id,
    name: v.name,
    description: v.description,
    image: v.images?.[0]?.imageUrl || "/placeholder.png",
    rating: v.rating,
    reviews: v.totalReviews,
    location: `${v.city}, ${v.country}`,
    category: v.category?.name || "Other",
    isPremium: v.isPremium,
    isAccredited: v.isAccredited,
    isFeatured: v.isFeatured,
    isClaimed: true, // optionally map from DB later
  }));

  // -----------------------------
  // 🔍 Filtering logic
  // -----------------------------
  const filteredVendors = uiVendors.filter((vendor) => {
    const matchesSearch =
      vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vendor.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || vendor.category === selectedCategory;

    const matchesPremium = !filters.premium || vendor.isPremium;
    const matchesAccredited = !filters.accredited || vendor.isAccredited;
    const matchesFeatured = !filters.featured || vendor.isFeatured;
    const matchesClaimed = !filters.claimed || vendor.isClaimed;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesPremium &&
      matchesAccredited &&
      matchesFeatured &&
      matchesClaimed
    );
  });

  // -----------------------------
  // 🔽 Sorting logic
  // -----------------------------
  const sortedVendors = [...filteredVendors].sort((a, b) => {
    switch (sortBy) {
      case "Rating: High to Low":
        return b.rating - a.rating;
      case "Rating: Low to High":
        return a.rating - b.rating;
      case "Reviews: Most":
        return b.reviews - a.reviews;
      case "Name: A-Z":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const activeFiltersCount = Object.values(filters).filter(Boolean).length;

  // -----------------------------
  // ⏳ Loading State
  // -----------------------------
  if (loading) {
    return (
      <Layout>
        <div className="py-32 text-center text-muted-foreground">
          Loading vendors...
        </div>
      </Layout>
    );
  }

  // -----------------------------
  // MAIN RETURN (Unchanged UI)
  // -----------------------------
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
              <Button variant="hero" size="lg">
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
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/80 text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Toolbar */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
            <p className="text-muted-foreground">
              Showing{" "}
              <span className="font-semibold text-foreground">
                {sortedVendors.length}
              </span>{" "}
              vendors
            </p>

            <div className="flex items-center gap-3 flex-wrap">
              {/* Filters Button */}
              <Button
                variant={showFilters ? "default" : "outline"}
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
                      className={`w-full px-4 py-2 text-left text-sm ${
                        sortBy === option
                          ? "bg-primary/10 text-primary"
                          : "hover:bg-muted"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* View Mode */}
              <div className="flex items-center gap-1 p-1 bg-muted rounded-lg">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-md ${
                    viewMode === "grid"
                      ? "bg-card shadow-sm"
                      : "hover:bg-card/50"
                  }`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-md ${
                    viewMode === "list"
                      ? "bg-card shadow-sm"
                      : "hover:bg-card/50"
                  }`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Vendor Grid / List */}
          {sortedVendors.length > 0 ? (
            <div
              className={
                viewMode === "grid"
                  ? "grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                  : "space-y-4"
              }
            >
              {sortedVendors.map((vendor, index) => (
                <Link
                  key={vendor.id}
                  to={`/vendors/${vendor.id}`}
                  className={`group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1 ${
                    viewMode === "list" ? "flex flex-col md:flex-row" : ""
                  }`}
                >
                  <div
                    className={`relative overflow-hidden ${
                      viewMode === "list"
                        ? "md:w-64 h-48 md:h-auto"
                        : "h-48"
                    }`}
                  >
                    <img
                      src={vendor.image}
                      alt={vendor.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      {vendor.isPremium && (
                        <span className="px-3 py-1.5 rounded-md bg-amber-500 text-white text-xs font-bold flex items-center gap-1">
                          <Award className="h-3 w-3" /> Recommended
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
                    <div className="text-xs text-primary font-medium mb-1">
                      {vendor.category}
                    </div>
                    <h3 className="font-bold mb-2 group-hover:text-primary">
                      {vendor.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {vendor.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                        <span className="font-semibold">{vendor.rating}</span>
                        <span className="text-muted-foreground text-sm">
                          ({vendor.reviews})
                        </span>
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
              <h3 className="text-xl font-semibold mb-2">No vendors found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filters
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                  setFilters({
                    premium: false,
                    accredited: false,
                    featured: false,
                    claimed: false,
                  });
                }}
              >
                <X className="h-4 w-4" /> Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default VendorsPage;
