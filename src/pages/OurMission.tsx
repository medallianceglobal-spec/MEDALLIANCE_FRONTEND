import { Globe, Heart, Shield, Users } from 'lucide-react';

const missionFeatures = [
  {
    icon: Globe,
    title: 'Global Reach',
    description:
      'Access leading hospitals and specialists across continents, without borders or barriers.',
  },
  {
    icon: Heart,
    title: 'Patient Care',
    description:
      'Every decision we make puts your safety, comfort, and outcomes first.',
  },
  {
    icon: Shield,
    title: 'Verified & Trusted Network',
    description:
      'We partner exclusively with accredited hospitals and certified medical professionals.',
  },
  {
    icon: Users,
    title: '24/7 Dedicated Support',
    description:
      'Real people, real help before, during and after your care journey.',
  },
];

const stats = [
  { value: '50+', label: 'Countries Served' },
  { value: '500+', label: 'Partner Hospitals' },
  { value: '10K+', label: 'Patients Helped' },
  { value: '24/7', label: 'Available Support' },
];

const OurMission = () => {
  return (
    <section className="py-20 bg-[#133B8A]/70 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-white/80 uppercase tracking-wider text-sm mb-3">
            ABOUT US
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-white/90 max-w-4xl mx-auto leading-relaxed">
            MedAlliance exists to make global healthcare simple, transparent, and
            accessible. We connect patients with trusted, world-class medical
            providers worldwide—removing complexity, delays, and uncertainty so
            you can focus on what matters most: your health.
          </p>
        </div>

        {/* Mission Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {missionFeatures.map((feature) => (
            <div
              key={feature.title}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurMission;
