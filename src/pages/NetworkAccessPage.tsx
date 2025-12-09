import { useState } from 'react';
import { Phone, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import { useAuth } from '@/contexts/AuthContext';

const NetworkAccessPage = () => {
  const { phoneVerified, setPhoneVerified } = useAuth();
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone) {
      setPhoneVerified(phone);
      setSubmitted(true);
    }
  };

  if (phoneVerified || submitted) {
    return (
      <Layout>
        <div className="min-h-[70vh] flex items-center justify-center bg-background">
          <div className="max-w-md mx-auto text-center p-8">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-secondary/10 flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-secondary" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-4">Request Submitted!</h1>
            <p className="text-muted-foreground mb-8">
              Thank you for your interest in joining our network. Someone from our team will contact you within 24-48 hours to discuss partnership opportunities.
            </p>
            <Button variant="outline" onClick={() => window.history.back()}>Go Back</Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-background via-muted to-background py-20">
        <div className="max-w-md mx-auto px-4 w-full">
          <div className="glass rounded-3xl p-8 shadow-card">
            <h1 className="text-2xl font-bold text-foreground mb-2 text-center">Get Network Access</h1>
            <p className="text-muted-foreground text-center mb-8">Enter your phone number to get started</p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="input-glass pl-12"
                  required
                />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full group">
                Submit <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NetworkAccessPage;
