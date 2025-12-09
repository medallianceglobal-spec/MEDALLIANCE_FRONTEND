import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, TrendingUp, Users, Award, Star, BarChart3, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import { useAuth } from '@/contexts/AuthContext';

const services = [
  { icon: TrendingUp, title: 'Lead Generation', description: 'Get qualified leads from healthcare seekers' },
  { icon: Users, title: 'Network Access', description: 'Connect with healthcare professionals worldwide' },
  { icon: Award, title: 'Featured Listings', description: 'Get premium visibility in search results' },
  { icon: Star, title: 'Reviews & Ratings', description: 'Build trust with verified reviews' },
  { icon: BarChart3, title: 'Analytics Dashboard', description: 'Track your performance and ROI' },
  { icon: Zap, title: 'Priority Support', description: '24/7 dedicated account manager' },
];

const VendorDashboardPage = () => {
  const { phoneVerified, setPhoneVerified } = useAuth();
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone) setPhoneVerified(phone);
  };

  if (!phoneVerified) {
    return (
      <Layout>
        <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-background via-muted to-background py-20">
          <div className="max-w-md mx-auto px-4 w-full">
            <div className="glass rounded-3xl p-8 shadow-card">
              <h1 className="text-2xl font-bold text-foreground mb-2 text-center">Vendor Dashboard</h1>
              <p className="text-muted-foreground text-center mb-8">Enter your phone number to access</p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} className="input-glass pl-12" required />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full">Continue</Button>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-16 bg-gradient-to-r from-navy via-primary/80 to-secondary/80">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Grow Your Healthcare Business</h1>
          <p className="text-white/80 max-w-2xl mx-auto">Join thousands of vendors leveraging MedAlliance Global to reach more customers</p>
        </div>
      </section>
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service) => (
              <div key={service.title} className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/register-company">
              <Button variant="hero" size="lg" className="group">
                Register Your Company <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VendorDashboardPage;
