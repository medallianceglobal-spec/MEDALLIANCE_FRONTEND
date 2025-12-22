import { useState } from 'react';
import { ArrowLeft, ArrowRight, Globe, Heart, Shield, Users, Calendar, User } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800',
    category: 'Updates',
    badge: '8',
    title: 'HealthCare Innovations',
    description: 'See how cutting-edge air ambulance services are changing emergency response times globally.',
    tags: ['Insights'],
    author: 'Dr. Sarah Mitchell',
    date: 'December 15, 2024',
    content: `
      <h2>Revolutionizing Emergency Response</h2>
      <p>The healthcare industry is witnessing a remarkable transformation in emergency response systems, particularly with the advent of cutting-edge air ambulance services. These innovations are not just about faster transportation; they're about saving lives through advanced medical technology and strategic deployment.</p>
      
      <h3>Advanced Medical Equipment on Board</h3>
      <p>Modern air ambulances are equipped with state-of-the-art medical equipment that rivals many hospital emergency rooms. From portable ultrasound machines to advanced life support systems, these flying ICUs can provide critical care during transport.</p>
      
      <h3>Response Time Improvements</h3>
      <p>Recent data shows that air ambulance services have reduced emergency response times by up to 60% in remote and rural areas. This dramatic improvement has led to significantly better patient outcomes, particularly in cases of trauma, stroke, and cardiac emergencies.</p>
      
      <h3>Global Impact</h3>
      <p>Countries across the globe are investing in air ambulance infrastructure. From mountain rescue operations in Switzerland to remote island coverage in the Pacific, these services are bridging geographical gaps in healthcare access.</p>
      
      <blockquote>
        "Air ambulance services have transformed emergency medicine, making the golden hour accessible to patients regardless of their location." - Dr. James Chen, Emergency Medicine Specialist
      </blockquote>
      
      <h3>The Future of Emergency Care</h3>
      <p>Looking ahead, innovations like drone-assisted medical deliveries and AI-powered dispatch systems promise to further enhance emergency response capabilities. The integration of telemedicine allows specialists to guide treatment even before the patient reaches the hospital.</p>
    `
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800',
    category: 'Trends',
    badge: '8',
    title: 'Top Hospitals Worldwide',
    description: 'A look at the leading medical facilities making waves in patient care and research.',
    tags: ['Spotlight'],
    author: 'Dr. Priya Sharma',
    date: 'December 18, 2024',
    content: `
      <h2>Excellence in Global Healthcare</h2>
      <p>The world's leading hospitals are setting new standards in patient care, research, and medical innovation. These institutions combine cutting-edge technology with compassionate care to deliver exceptional outcomes.</p>
      
      <h3>Mayo Clinic - USA</h3>
      <p>Consistently ranked as one of the top hospitals globally, Mayo Clinic excels in patient-centered care and groundbreaking research. Their integrated approach ensures that patients receive comprehensive treatment across multiple specialties.</p>
      
      <h3>Singapore General Hospital</h3>
      <p>SGH has become a beacon of healthcare excellence in Asia, known for its advanced technology and highly skilled medical professionals. The hospital's focus on continuous improvement and patient safety has made it a model for healthcare institutions worldwide.</p>
      
      <h3>Charité - Germany</h3>
      <p>Europe's largest university hospital, Charité combines centuries of medical tradition with cutting-edge innovation. Their research contributions have shaped modern medicine, while maintaining exceptional patient care standards.</p>
      
      <h3>Key Success Factors</h3>
      <ul>
        <li>Investment in advanced medical technology and equipment</li>
        <li>Continuous training and development of medical staff</li>
        <li>Strong focus on research and innovation</li>
        <li>Patient-centered care approaches</li>
        <li>International collaboration and knowledge sharing</li>
      </ul>
      
      <h3>Impact on Patient Care</h3>
      <p>These leading hospitals have significantly improved survival rates and quality of life for patients with complex conditions. Their innovative treatments and procedures often become the standard of care adopted globally.</p>
      
      <blockquote>
        "The best hospitals in the world share a common thread: they put patients first while pushing the boundaries of medical science." - Dr. Michael Roberts, Healthcare Administration
      </blockquote>
    `
  }
];

const missionFeatures = [
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Access leading hospitals and specialists across continents, without borders or barriers.'
  },
  {
    icon: Heart,
    title: 'Patient Care',
    description: 'Every decision we make puts your safety, comfort, and outcomes first.'
  },
  {
    icon: Shield,
    title: 'Verified & Trusted Network',
    description: 'We partner exclusively with accredited hospitals and certified medical professionals.'
  },
  {
    icon: Users,
    title: '24/7 Dedicated Support',
    description: 'Real people, real help before, during and after your care journey.'
  }
];

const stats = [
  { value: '50+', label: 'Countries Served' },
  { value: '500+', label: 'Partner Hospitals' },
  { value: '10K+', label: 'Patients Helped' },
  { value: '24/7', label: 'Available Support' }
];

const BlogsPage = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  if (selectedBlog) {
    return (
      <div className="min-h-screen bg-background">
        {/* Blog Detail Header */}
        <div className="bg-gradient-to-r from-primary to-secondary text-white py-8">
          <div className="container mx-auto px-4">
            <button
              onClick={() => setSelectedBlog(null)}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-4"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Blogs
            </button>
          </div>
        </div>

        {/* Blog Content */}
        <div className="container mx-auto px-4 py-12">
          <article className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {selectedBlog.date}
                </span>
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {selectedBlog.author}
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                  {selectedBlog.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {selectedBlog.title}
              </h1>
              <p className="text-xl text-muted-foreground">
                {selectedBlog.description}
              </p>
            </div>

            <div className="mb-8 rounded-2xl overflow-hidden">
              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="w-full h-[400px] object-cover"
              />
            </div>

            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
              style={{
                lineHeight: '1.8',
              }}
            />

            <div className="mt-12 pt-8 border-t border-border">
              <button
                onClick={() => setSelectedBlog(null)}
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to all blogs
              </button>
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Latest Healthcare Insights
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Stay updated with the latest trends, innovations, and stories from the world of healthcare.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <button
                key={post.id}
                onClick={() => setSelectedBlog(post)}
                className="group text-left w-full"
              >
                <div className="bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground font-semibold">
                        {post.badge}
                      </div>
                      <div className="flex gap-3 text-sm">
                        <span className="text-muted-foreground">{post.category}</span>
                        {post.tags.map((tag) => (
                          <span key={tag} className="text-muted-foreground">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {post.description}
                    </p>
                    <div className="flex items-center text-primary font-medium">
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* About Us / Mission Section */}
      <section className="py-20 bg-[#133B8A]/70 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <p className="text-white/80 uppercase tracking-wider text-sm mb-3">ABOUT US</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Mission</h2>
            <p className="text-lg text-white/90 max-w-4xl mx-auto leading-relaxed">
              MedAlliance exists to make global healthcare simple, transparent, and accessible. We connect patients with trusted, world-class medical providers worldwide—removing complexity, delays, and uncertainty so you can focus on what matters most: your health.
            </p>
          </div>

          {/* Mission Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {missionFeatures.map((feature, index) => (
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
                <div className="text-5xl md:text-6xl font-bold mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Explore More?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover healthcare providers worldwide or share your story with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button 
  className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium flex items-center justify-center gap-2 group"
>
  Explore Vendors
  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
</button>
            <button className="px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors font-medium">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogsPage;
