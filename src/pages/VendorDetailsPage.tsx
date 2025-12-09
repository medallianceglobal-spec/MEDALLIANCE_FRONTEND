import { useParams, Link } from 'react-router-dom';
import { MapPin, Star, Shield, Award, Phone, Mail, Globe, Clock, ChevronRight, Heart, Share2, MessageCircle, CheckCircle, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import { useState } from 'react';

const vendorData = {
  id: 1,
  name: 'Apollo Healthcare Solutions',
  tagline: 'Excellence in Healthcare, Compassion in Care',
  description: 'Apollo Healthcare Solutions is a premier multi-specialty hospital chain that has been at the forefront of healthcare innovation for over two decades. With state-of-the-art facilities, world-class medical professionals, and a patient-centric approach, we deliver exceptional healthcare services across multiple specialties.',
  longDescription: `At Apollo Healthcare Solutions, we believe that every patient deserves the highest quality of care. Our commitment to excellence is reflected in our cutting-edge medical technology, rigorous quality standards, and compassionate healthcare delivery.

Our facilities are equipped with the latest diagnostic and treatment equipment, enabling our team of expert physicians to provide accurate diagnoses and effective treatments. From routine health check-ups to complex surgical procedures, we offer comprehensive healthcare services under one roof.

Our team comprises internationally trained doctors, skilled nurses, and dedicated support staff who work together to ensure optimal patient outcomes. We maintain the highest standards of hygiene and safety, following international protocols to create a healing environment for our patients.`,
  images: [
    'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800',
    'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800',
    'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800',
    'https://images.unsplash.com/photo-1581093458791-9d42e3c2fd45?w=800',
  ],
  rating: 4.9,
  totalReviews: 2453,
  location: 'New York, USA',
  fullAddress: '123 Healthcare Plaza, Medical District, New York, NY 10001, USA',
  phone: '+1 (234) 567-8900',
  email: 'info@apollohealthcare.com',
  website: 'www.apollohealthcare.com',
  workingHours: '24/7 Emergency | OPD: 8:00 AM - 8:00 PM',
  isPremium: true,
  isAccredited: true,
  isFeatured: true,
  category: 'Hospitals',
  specializations: [
    'Cardiology',
    'Neurology',
    'Oncology',
    'Orthopedics',
    'Pediatrics',
    'Gastroenterology',
    'Nephrology',
    'Pulmonology',
  ],
  subCategories: [
    'Multi-Specialty Hospital',
    'Emergency Care',
    'Surgical Center',
    'Diagnostic Center',
    'Rehabilitation',
  ],
  accreditations: [
    'JCI Accredited',
    'NABH Certified',
    'ISO 9001:2015',
    'NABL Certified Lab',
  ],
  reviews: [
    {
      id: 1,
      author: 'Dr. Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
      rating: 5,
      date: '2024-01-15',
      comment: 'Exceptional facilities and highly professional staff. The patient care is outstanding and the technology is state-of-the-art.',
      helpful: 45,
    },
    {
      id: 2,
      author: 'Sarah Williams',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
      rating: 5,
      date: '2024-01-10',
      comment: 'Had a great experience with the cardiology department. The doctors were very thorough and caring.',
      helpful: 32,
    },
    {
      id: 3,
      author: 'Robert Johnson',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
      rating: 4,
      date: '2024-01-05',
      comment: 'Good overall experience. The wait times could be improved but the quality of care is excellent.',
      helpful: 18,
    },
  ],
};

const VendorDetailsPage = () => {
  const { id } = useParams();
  const [activeImage, setActiveImage] = useState(0);
  const [showAllReviews, setShowAllReviews] = useState(false);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating)
            ? 'fill-amber-400 text-amber-400'
            : 'fill-muted text-muted'
        }`}
      />
    ));
  };

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-muted/50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/vendors" className="hover:text-primary transition-colors">Vendors</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{vendorData.name}</span>
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
                  src={vendorData.images[activeImage]}
                  alt={vendorData.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {vendorData.isPremium && (
                    <span className="px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-white text-sm font-semibold flex items-center gap-1">
                      <Award className="h-4 w-4" /> Premium
                    </span>
                  )}
                  {vendorData.isAccredited && (
                    <span className="px-3 py-1.5 rounded-full bg-secondary text-white text-sm font-semibold flex items-center gap-1">
                      <Shield className="h-4 w-4" /> Accredited
                    </span>
                  )}
                </div>
                <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 text-white text-sm">
                  <Camera className="h-4 w-4" />
                  {activeImage + 1} / {vendorData.images.length}
                </div>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {vendorData.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`rounded-xl overflow-hidden h-20 transition-all ${
                      activeImage === idx ? 'ring-2 ring-primary' : 'opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="space-y-6">
              <div>
                <p className="text-primary font-medium mb-2">{vendorData.category}</p>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {vendorData.name}
                </h1>
                <p className="text-muted-foreground">{vendorData.tagline}</p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {renderStars(vendorData.rating)}
                </div>
                <span className="text-2xl font-bold text-foreground">{vendorData.rating}</span>
                <span className="text-muted-foreground">({vendorData.totalReviews} reviews)</span>
              </div>

              {/* Quick Info */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground">{vendorData.fullAddress}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary shrink-0" />
                  <a href={`tel:${vendorData.phone}`} className="text-foreground hover:text-primary transition-colors">
                    {vendorData.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary shrink-0" />
                  <a href={`mailto:${vendorData.email}`} className="text-foreground hover:text-primary transition-colors">
                    {vendorData.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-primary shrink-0" />
                  <a href={`https://${vendorData.website}`} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                    {vendorData.website}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-foreground">{vendorData.workingHours}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3 pt-4">
                <Button variant="hero" size="lg" className="flex-1 md:flex-none">
                  <Phone className="h-5 w-5" />
                  Contact Now
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="h-5 w-5" />
                  Save
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="h-5 w-5" />
                  Share
                </Button>
              </div>

              {/* Accreditations */}
              <div className="pt-4">
                <p className="text-sm font-semibold text-foreground mb-3">Accreditations & Certifications</p>
                <div className="flex flex-wrap gap-2">
                  {vendorData.accreditations.map((acc) => (
                    <span
                      key={acc}
                      className="px-3 py-1.5 rounded-full bg-muted text-muted-foreground text-sm flex items-center gap-1"
                    >
                      <CheckCircle className="h-3.5 w-3.5 text-secondary" />
                      {acc}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description & Details */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <div className="bg-card rounded-2xl p-6 md:p-8">
                <h2 className="text-xl font-bold text-foreground mb-4">About {vendorData.name}</h2>
                <div className="prose prose-sm max-w-none text-muted-foreground">
                  {vendorData.longDescription.split('\n\n').map((para, idx) => (
                    <p key={idx} className="mb-4">{para}</p>
                  ))}
                </div>
              </div>

              {/* Reviews */}
              <div className="bg-card rounded-2xl p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-foreground">Reviews & Ratings</h2>
                  <Button variant="outline" size="sm">
                    <MessageCircle className="h-4 w-4" />
                    Write a Review
                  </Button>
                </div>

                <div className="space-y-6">
                  {vendorData.reviews.slice(0, showAllReviews ? undefined : 3).map((review) => (
                    <div key={review.id} className="border-b border-border pb-6 last:border-0 last:pb-0">
                      <div className="flex items-start gap-4">
                        <img
                          src={review.avatar}
                          alt={review.author}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-semibold text-foreground">{review.author}</h4>
                            <span className="text-sm text-muted-foreground">{review.date}</span>
                          </div>
                          <div className="flex items-center gap-1 mb-2">
                            {renderStars(review.rating)}
                          </div>
                          <p className="text-muted-foreground text-sm mb-3">{review.comment}</p>
                          <button className="text-sm text-primary hover:underline">
                            Helpful ({review.helpful})
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {vendorData.reviews.length > 3 && (
                  <Button
                    variant="ghost"
                    className="w-full mt-6"
                    onClick={() => setShowAllReviews(!showAllReviews)}
                  >
                    {showAllReviews ? 'Show Less' : `View All ${vendorData.totalReviews} Reviews`}
                  </Button>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Specializations */}
              <div className="bg-card rounded-2xl p-6">
                <h3 className="font-bold text-foreground mb-4">Specializations</h3>
                <div className="flex flex-wrap gap-2">
                  {vendorData.specializations.map((spec) => (
                    <span
                      key={spec}
                      className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Sub Categories */}
              <div className="bg-card rounded-2xl p-6">
                <h3 className="font-bold text-foreground mb-4">Services</h3>
                <div className="space-y-2">
                  {vendorData.subCategories.map((sub) => (
                    <div key={sub} className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      {sub}
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-card rounded-2xl p-6">
                <h3 className="font-bold text-foreground mb-4">Location</h3>
                <div className="aspect-video rounded-xl bg-muted flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground mt-3">{vendorData.fullAddress}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VendorDetailsPage;
