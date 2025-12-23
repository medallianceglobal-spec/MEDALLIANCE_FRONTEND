import { ShieldCheck, Info, Headphones, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const howItWorks = [
  {
    icon: ShieldCheck,
    title: 'Curated Healthcare Partners',
    description:
      'We onboard healthcare providers carefully, not aggressively.',
  },
  {
    icon: Info,
    title: 'Clear Information, No Guesswork',
    description:
      'Patients get straightforward details to make informed decisions.',
  },
  {
    icon: Headphones,
    title: 'Human Support When It Matters',
    description:
      'Real assistance, not automated healthcare confusion.',
  },
  {
    icon: TrendingUp,
    title: 'Growing Responsibly',
    description:
      'Scale follows trust—not the other way around.',
  },
];

const HowMedAllianceWorks = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">

        {/* ABOUT US */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <p className="text-primary uppercase tracking-wider text-sm mb-3">
            ABOUT US
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            HealthCare Simplified
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-4">
            MedAlliance helps people find the right healthcare, wherever they are.
            We connect patients with trusted hospitals and healthcare providers
            around the world, making it easier to explore verified options,
            understand what’s right for them, and take the next step with
            confidence.
          </p>

          <p className="font-medium text-foreground">
            Thoughtful Care. Trusted connections.
          </p>
        </div>

        {/* HOW IT WORKS HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-primary uppercase tracking-wider text-sm mb-3">
            HOW IT WORKS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How MedAlliance Works
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {howItWorks.map((item) => (
            <div
              key={item.title}
              className="bg-card rounded-2xl p-6 border border-border hover:shadow-md transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      
        <div className="mt-14 text-center">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition group"
          >
            More details
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default HowMedAllianceWorks;
