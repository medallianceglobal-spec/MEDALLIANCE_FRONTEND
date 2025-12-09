import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, Building2, MapPin, FileText, Image, CreditCard, Check, ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import { useAuth } from '@/contexts/AuthContext';

const steps = ['Basic Info', 'Company Details', 'Documents', 'Pricing'];
const categories = ['Hospitals', 'Clinics', 'Diagnostics', 'Pharmacy', 'Medical Equipment', 'Healthcare IT'];

const RegisterCompanyPage = () => {
  const { phoneVerified, setPhoneVerified } = useAuth();
  const [phone, setPhone] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'pro' | null>(null);
  const navigate = useNavigate();

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone) setPhoneVerified(phone);
  };

  if (!phoneVerified) {
    return (
      <Layout>
        <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-background via-muted to-background py-20">
          <div className="max-w-md mx-auto px-4 w-full">
            <div className="glass rounded-3xl p-8 shadow-card">
              <h1 className="text-2xl font-bold text-foreground mb-2 text-center">Register Your Company</h1>
              <p className="text-muted-foreground text-center mb-8">Enter your phone number to start</p>
              <form onSubmit={handlePhoneSubmit} className="space-y-6">
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

  const handleNext = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
    else navigate('/vendor-dashboard');
  };

  return (
    <Layout>
      <div className="min-h-screen bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          {/* Progress */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-between">
              {steps.map((step, idx) => (
                <div key={step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${idx <= currentStep ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                    {idx < currentStep ? <Check className="h-5 w-5" /> : idx + 1}
                  </div>
                  {idx < steps.length - 1 && <div className={`w-16 md:w-24 h-1 mx-2 ${idx < currentStep ? 'bg-primary' : 'bg-muted'}`} />}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-sm">
              {steps.map((step, idx) => (
                <span key={step} className={idx <= currentStep ? 'text-primary font-medium' : 'text-muted-foreground'}>{step}</span>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-3xl p-8 shadow-card">
              {currentStep === 0 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-foreground mb-6">Basic Information</h2>
                  <input placeholder="Company Name" className="input-glass" />
                  <input placeholder="Full Address" className="input-glass" />
                  <input placeholder="Registration Number" className="input-glass" />
                  <input placeholder="GST Number" className="input-glass" />
                </div>
              )}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-foreground mb-6">Company Details</h2>
                  <input placeholder="Specialization" className="input-glass" />
                  <select className="input-glass">
                    <option>Select Category</option>
                    {categories.map(c => <option key={c}>{c}</option>)}
                  </select>
                  <input placeholder="Sub-categories (comma separated)" className="input-glass" />
                </div>
              )}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-foreground mb-6">Documents & Media</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {['Company Banner', 'Logo', 'Images', 'KYC Documents'].map(doc => (
                      <div key={doc} className="border-2 border-dashed border-border rounded-xl p-6 text-center cursor-pointer hover:border-primary transition-colors">
                        <Image className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                        <span className="text-sm text-muted-foreground">{doc}</span>
                      </div>
                    ))}
                  </div>
                  <input placeholder="PAN Number" className="input-glass" />
                  <input placeholder="Aadhar Number" className="input-glass" />
                </div>
              )}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-foreground mb-6">Choose Your Plan</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div onClick={() => setSelectedPlan('basic')} className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${selectedPlan === 'basic' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}`}>
                      <h3 className="text-lg font-bold mb-2">Basic</h3>
                      <div className="text-3xl font-bold text-primary mb-4">$500<span className="text-sm text-muted-foreground">/year</span></div>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Basic listing</li><li>• Standard support</li><li>• Analytics dashboard</li>
                      </ul>
                    </div>
                    <div onClick={() => setSelectedPlan('pro')} className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${selectedPlan === 'pro' ? 'border-secondary bg-secondary/5' : 'border-border hover:border-secondary/50'}`}>
                      <div className="text-xs font-semibold text-secondary mb-2">RECOMMENDED</div>
                      <h3 className="text-lg font-bold mb-2">Pro</h3>
                      <div className="text-3xl font-bold text-secondary mb-4">$2000<span className="text-sm text-muted-foreground">/year</span></div>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Featured listing</li><li>• Priority support</li><li>• Advanced analytics</li><li>• Lead generation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between mt-8 pt-6 border-t border-border">
                <Button variant="ghost" onClick={() => setCurrentStep(Math.max(0, currentStep - 1))} disabled={currentStep === 0}>
                  <ArrowLeft className="h-4 w-4" /> Back
                </Button>
                <Button variant="hero" onClick={handleNext}>
                  {currentStep === steps.length - 1 ? 'Complete Registration' : 'Continue'} <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RegisterCompanyPage;
