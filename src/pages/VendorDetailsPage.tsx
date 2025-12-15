import { useParams, Link } from "react-router-dom";
import {
  MapPin,
  Star,
  Shield,
  Award,
  Phone,
  Mail,
  Globe,
  Clock,
  ChevronRight,
  Heart,
  Share2,
  MessageCircle,
  CheckCircle,
  Camera,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { useState, useEffect } from "react";
import { fetchCompanyById } from "@/utils/api/company";
import { CompanyResponse } from "@/models/company/companyModels";

const VendorDetailsPage = () => {
  const { id } = useParams();
  const [vendor, setVendor] = useState<CompanyResponse | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [loading, setLoading] = useState(true);

  // -------------------------------
  // ⭐ Fetch Company by ID
  // -------------------------------
  useEffect(() => {
    async function loadVendor() {
      try {
        if (!id) return;

        const response = await fetchCompanyById(id);
        if (response.success) {
          setVendor(response.company);
        }
      } catch (error) {
        console.error("Error loading vendor details:", error);
      } finally {
        setLoading(false);
      }
    }

    loadVendor();
  }, [id]);

  // -------------------------------
  // ⭐ Loading State
  // -------------------------------
  if (loading) {
    return (
      <Layout>
        <div className="py-32 text-center text-muted-foreground">
          Loading vendor details...
        </div>
      </Layout>
    );
  }

  // If vendor not found
  if (!vendor) {
    return (
      <Layout>
        <div className="py-32 text-center text-red-500">
          Vendor not found.
        </div>
      </Layout>
    );
  }

  // Utility: render stars
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < Math.floor(rating)
            ? "fill-amber-400 text-amber-400"
            : "fill-muted text-muted"
          }`}
      />
    ));
  };

  // -------------------------------
  // ⭐ UI Starts Here
  // -------------------------------

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-muted/50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/vendors" className="hover:text-primary">Vendors</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{vendor.name}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-background py-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden h-80 md:h-96">
                <img
                  src={vendor.images?.[activeImage]?.imageUrl}
                  alt={vendor.name}
                  className="w-full h-full object-cover"
                />

                {/* Premium / Accredited badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {vendor.isPremium && (
                    <span className="px-3 py-1.5 rounded-full bg-amber-500 text-white text-sm font-semibold flex items-center gap-1">
                      <Award className="h-4 w-4" /> Premium
                    </span>
                  )}
                  {vendor.isAccredited && (
                    <span className="px-3 py-1.5 rounded-full bg-secondary text-white text-sm font-semibold flex items-center gap-1">
                      <Shield className="h-4 w-4" /> Accredited
                    </span>
                  )}
                </div>

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-black/50 text-white text-sm flex items-center gap-2">
                  <Camera className="h-4 w-4" />
                  {activeImage + 1} / {vendor.images?.length || 0}
                </div>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-3">
                {vendor.images?.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`rounded-xl overflow-hidden h-20 transition-all ${activeImage === idx ? "ring-2 ring-primary" : "opacity-70 hover:opacity-100"
                      }`}
                  >
                    <img
                      src={img.imageUrl}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Info Section */}
            <div className="space-y-6">
              <div>
                <p className="text-primary font-medium mb-2">
                  {vendor.category?.name}
                </p>
                <h1 className="text-3xl md:text-4xl font-bold">{vendor.name}</h1>
                <p className="text-muted-foreground">{vendor.tagline}</p>
              </div>

              {/* Rating Section */}
              <div className="flex items-center gap-4">
                <div className="flex gap-1">{renderStars(vendor.rating)}</div>
                <span className="text-2xl font-bold">{vendor.rating}</span>
                <span className="text-muted-foreground">
                  ({vendor.totalReviews} reviews)
                </span>
              </div>

              {/* Quick Info */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <span>{vendor.fullAddress}</span>
                </div>

                {vendor.phone && (
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <a href={`tel:${vendor.phone}`} className="hover:text-primary">
                      {vendor.phone}
                    </a>
                  </div>
                )}

                {vendor.email && (
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href={`mailto:${vendor.email}`} className="hover:text-primary">
                      {vendor.email}
                    </a>
                  </div>
                )}

                {vendor.website && (
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-primary" />
                    <a
                      href={`https://${vendor.website}`}
                      target="_blank"
                      className="hover:text-primary"
                    >
                      {vendor.website}
                    </a>
                  </div>
                )}

                {vendor.workingHours && (
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>{vendor.workingHours}</span>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3 pt-4">
                <Button variant="hero" size="lg" className="flex-1">
                  <Phone className="h-5 w-5" />
                  Contact Now
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="h-5 w-5" /> Save
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="h-5 w-5" /> Share
                </Button>
              </div>

              {/* Accreditations */}
              {vendor.accreditations?.length > 0 && (
                <div className="pt-4">
                  <p className="text-sm font-semibold mb-3">
                    Accreditations & Certifications
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {vendor.accreditations.map((acc) => (
                      <span
                        key={acc.id}
                        className="px-3 py-1.5 rounded-full bg-muted text-muted-foreground text-sm flex items-center gap-1"
                      >
                        <CheckCircle className="h-3.5 w-3.5 text-secondary" />
                        {acc.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* About + Reviews */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <div className="bg-card rounded-2xl p-6 md:p-8">
                <h2 className="text-xl font-bold mb-4">
                  About {vendor.name}
                </h2>
                <div className="prose prose-sm max-w-none text-muted-foreground">
                  {vendor.longDescription?.split("\n").map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Reviews */}
              <div className="bg-card rounded-2xl p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">Reviews & Ratings</h2>
                  <Button variant="outline" size="sm">
                    <MessageCircle className="h-4 w-4" />
                    Write a Review
                  </Button>
                </div>

                <div className="space-y-6">
                  {vendor.reviews
                    ?.slice(0, showAllReviews ? vendor.reviews.length : 3)
                    .map((review) => (
                      <div
                        key={review.id}
                        className="border-b pb-6 last:border-0 last:pb-0"
                      >
                        <div className="flex items-start gap-4">
                          {/* <img
                            src={review.authorAvatar}
                            alt={review.authorName}
                            className="w-12 h-12 rounded-full object-cover"
                          /> */}
                          <div className="flex-1">
                            <div className="flex justify-between mb-1">
                              <h4 className="font-semibold">{review.authorName}</h4>
                              <span className="text-sm text-muted-foreground">
                                {review.createdAt}
                              </span>
                            </div>

                            <div className="flex gap-1 mb-2">
                              {renderStars(review.rating)}
                            </div>

                            <p className="text-muted-foreground text-sm mb-3">
                              {review.comment}
                            </p>

                            {/* <button className="text-sm text-primary hover:underline">
                              Helpful ({review.helpfulCount})
                            </button> */}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>

                {vendor.reviews && vendor.reviews.length > 3 && (
                  <Button
                    variant="ghost"
                    className="w-full mt-6"
                    onClick={() => setShowAllReviews(!showAllReviews)}
                  >
                    {showAllReviews
                      ? "Show Less"
                      : `View All ${vendor.totalReviews} Reviews`}
                  </Button>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Specializations */}
              {vendor.specializations && vendor.specializations.length > 0 && (
                <div className="bg-card rounded-2xl p-6">
                  <h3 className="font-bold mb-4">Specializations</h3>
                  <div className="flex flex-wrap gap-2">
                    {vendor.specializations.map((item) => (
                      <span
                        key={item.specialization.id}
                        className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium"
                      >
                        {item.specialization.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Sub Categories → Services */}
              {vendor.subCategories && vendor.subCategories.length > 0 && (
                <div className="bg-card rounded-2xl p-6">
                  <h3 className="font-bold mb-4">Services</h3>
                  <div className="space-y-2">
                    {vendor.subCategories.map((item) => (
                      <div key={item.subCategory.id} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        {item.subCategory.name}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Location Map Paceholder */}
              <div className="bg-card rounded-2xl p-6">
                <h3 className="font-bold mb-4">Location</h3>
                <div className="aspect-video rounded-xl bg-muted flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  {vendor.fullAddress}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VendorDetailsPage;
