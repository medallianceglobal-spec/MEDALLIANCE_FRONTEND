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
    icon: Heart,
    title: 'Patient First',
    description: 'Every decision we make prioritizes patient safety and quality of care.',
  },
  {
    icon: Shield,
    title: 'Trust & Transparency',
    description: 'We verify every vendor to ensure only the best make it to our platform.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Connecting healthcare providers across 120+ countries worldwide.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We maintain the highest standards in everything we do.',
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
              Transforming Healthcare Connections Globally
            </h1>
            <p className="text-xl text-white/80 mb-8">
              We're on a mission to make quality healthcare accessible to everyone by connecting patients with the world's best healthcare providers.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold">50K+</div>
                <div className="text-white/70">Vendors</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold">120+</div>
                <div className="text-white/70">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold">1M+</div>
                <div className="text-white/70">Users</div>
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
                <p>
                  MedAlliance Global was born from a simple yet powerful idea: what if finding a trusted healthcare provider was as easy as a few clicks? Founded in 2015 by Dr. Sarah Mitchell, our platform has grown from a small directory to the world's leading healthcare vendor network.
                </p>
                <p>
                  Today, we connect millions of patients, healthcare professionals, and medical vendors across the globe. Our rigorous verification process ensures that every vendor on our platform meets the highest standards of quality and professionalism.
                </p>
                <p>
                  We believe that everyone deserves access to quality healthcare, regardless of where they are in the world. That's why we're committed to continuously expanding our network and improving our platform.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600"
                alt="Healthcare team"
                className="rounded-2xl shadow-card"
              />
              <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-6 shadow-card max-w-xs hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">Trusted Platform</div>
                    <div className="text-sm text-muted-foreground">99.9% Uptime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at MedAlliance Global
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-card rounded-2xl p-6 text-center hover:shadow-card transition-shadow animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Journey</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-center gap-8 mb-8 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="inline-block bg-card rounded-xl p-4 shadow-card">
                      <div className="text-primary font-bold">{milestone.year}</div>
                      <div className="text-foreground">{milestone.event}</div>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-primary shrink-0 z-10" />
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Leadership Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the people driving our mission forward
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary text-sm mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
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
