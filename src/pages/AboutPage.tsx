import { Link } from 'react-router-dom';
import { Users, Building2, Globe, Award, Heart, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';

const teamMembers = [
  {
    name: 'Dr. Sarah Mitchell',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300',
    bio: '20+ years in healthcare administration',
  },
  {
    name: 'James Chen',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300',
    bio: 'Former Google Health lead',
  },
  {
    name: 'Dr. Priya Sharma',
    role: 'Chief Medical Officer',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300',
    bio: 'Board-certified physician',
  },
  {
    name: 'Michael Roberts',
    role: 'VP of Operations',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300',
    bio: 'Healthcare logistics expert',
  },
];

const values = [
  {
    icon: '❤️',
    title: 'Patients Before Platforms',
    description: 'Healthcare isn\'t a transaction. Every decision we make prioritizes patient safety, clarity, and confidence.',
  },
  {
    icon: '🔍',
    title: 'Trust Through Transparency',
    description: 'We believe trust is earned. Our partner onboarding focuses on verification, clear information, and ethical practices.',
  },
  {
    icon: '🌍',
    title: 'Thoughtful Global Expansion',
    description: 'We grow intentionally—partner by partner, country by country—without compromising quality.',
  },
  {
    icon: '🛠️',
    title: 'Built to Improve',
    description: 'We listen closely, learn fast, and continuously refine the platform based on real patient and provider needs.',
  },
];

const milestones = [
  { year: '2015', event: 'MedAlliance Global founded' },
  { year: '2017', event: 'Reached 10,000 verified vendors' },
  { year: '2019', event: 'Expanded to 50 countries' },
  { year: '2021', event: '1 million monthly active users' },
  { year: '2023', event: '50,000+ vendors across 120+ countries' },
];

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-r from-navy via-primary/80 to-secondary/80 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Connecting People to Care, Anywhere in the World
            </h1>
            <p className="text-xl text-white/80 mb-4">
              Healthcare decisions are deeply human.
              MedAlliance exists to make them simpler, safer, and more transparent—by connecting patients with trusted healthcare providers across borders.
            </p>
            <p className="text-lg text-white/90 font-medium mb-8">
              Built with care. Designed for trust. Growing with purpose.
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">✓</div>
                <div className="text-white/90 font-medium">Carefully Onboarded Partners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">🌍</div>
                <div className="text-white/90 font-medium">Global Vision</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">❤️</div>
                <div className="text-white/90 font-medium">Patient-First Approach</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <h3 className="text-2xl font-bold text-foreground mb-4">Why MedAlliance Exists</h3>
                <p>
                  MedAlliance was created with one simple belief: finding the right healthcare should never feel confusing, risky, or out of reach.
                </p>
                <p>
                  For patients, navigating hospitals, doctors, and treatment options—especially across countries—can be overwhelming. For healthcare providers, reaching the right patients globally is equally challenging.
                </p>
                <p>
                  We built MedAlliance to bridge this gap.
                </p>
                <p>
                  Starting with a focused network of verified healthcare partners, we're creating a platform where trust, transparency, and human support come first. Every provider is carefully reviewed, and every interaction is designed to reduce uncertainty during critical healthcare moments.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600"
                alt="Healthcare collaboration"
                className="rounded-2xl shadow-card"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              What Guides Everything We Build
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-card rounded-2xl p-8 hover:shadow-card transition-shadow animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="font-bold text-foreground text-xl mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
     {/* Our Journey */}
<section className="py-20 bg-background">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Journey</h2>
      <p className="text-muted-foreground text-lg">Just Getting Started — With a Clear Direction</p>
    </div>
    <div className="max-w-3xl mx-auto">
      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
        
        {/* 2024 */}
        <div className="relative flex items-center gap-8 mb-8 flex-row">
          <div className="flex-1 text-right">
            <div className="inline-block bg-card rounded-xl p-4 shadow-card">
              <div className="text-primary font-bold">2024</div>
              <div className="text-foreground">MedAlliance concept shaped through real-world healthcare challenges.</div>
            </div>
          </div>
          <div className="w-4 h-4 rounded-full bg-primary shrink-0 z-10" />
          <div className="flex-1" />
        </div>

        {/* 2025 */}
        <div className="relative flex items-center gap-8 mb-8 flex-row-reverse">
          <div className="flex-1 text-left">
            <div className="inline-block bg-card rounded-xl p-4 shadow-card">
              <div className="text-primary font-bold">2025</div>
              <div className="text-foreground">Platform launched with early healthcare partners and patient-first design.</div>
            </div>
          </div>
          <div className="w-4 h-4 rounded-full bg-primary shrink-0 z-10" />
          <div className="flex-1" />
        </div>

        {/* Now */}
        <div className="relative flex items-center gap-8 mb-8 flex-row">
          <div className="flex-1 text-right">
            <div className="inline-block bg-card rounded-xl p-4 shadow-card">
              <div className="text-primary font-bold">Now</div>
              <div className="text-foreground">Expanding our verified network, improving the experience, and listening closely to users.</div>
            </div>
          </div>
          <div className="w-4 h-4 rounded-full bg-primary shrink-0 z-10" />
          <div className="flex-1" />
        </div>

        {/* What's Next */}
        <div className="relative flex items-center gap-8 mb-8 flex-row-reverse">
          <div className="flex-1 text-left">
            <div className="inline-block bg-card rounded-xl p-4 shadow-card">
              <div className="text-primary font-bold">What's Next</div>
              <div className="text-foreground">Deeper partnerships, smarter tools, and broader access—without losing the human touch.</div>
            </div>
          </div>
          <div className="w-4 h-4 rounded-full bg-primary shrink-0 z-10" />
          <div className="flex-1" />
        </div>

      </div>
    </div>
  </div>
</section>

      {/* Team */}
      {/* Closing Statement */}
<section className="py-20 bg-gradient-to-r from-primary to-secondary">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        Building Healthcare Connections That Feel Human
      </h2>
      <div className="space-y-6 text-lg text-white/90 leading-relaxed">
        <p>
          MedAlliance is not trying to be the biggest healthcare platform overnight.
          We're focused on becoming one of the most trusted.
        </p>
        <p>
          If you're a patient seeking clarity, a provider seeking meaningful reach, or a partner who believes healthcare deserves better systems—we're building this for you.
        </p>
        <p className="text-xl font-medium text-white pt-4">
          This is MedAlliance. And this is just the beginning.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* CTA */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Growing Network
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Whether you're a healthcare provider looking to expand your reach or a patient seeking quality care, MedAlliance Global is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register-company">
              <Button variant="hero" size="lg" className="group">
                Register Your Company
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/vendors">
              <Button variant="glass" size="lg">
                Explore Vendors
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;