import Layout from '@/components/layout/Layout';
import OurMission from './OurMission.tsx';
import { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Globe,
  Heart,
  Shield,
  Users,
  Calendar,
  User,
} from 'lucide-react';

type BlogPost = {
  id: number;
  image: string;
  category: string;
  badge: string;
  title: string;
  description: string;
  tags: string[];
  author: string;
  date: string;
  content: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800',
    category: 'Updates',
    badge: '8',
    title: 'HealthCare Innovations',
    description:
      'See how cutting-edge air ambulance services are changing emergency response times globally.',
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
    `,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800',
    category: 'Trends',
    badge: '8',
    title: 'Top Hospitals Worldwide',
    description:
      'A look at the leading medical facilities making waves in patient care and research.',
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
    `,
  },
];

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

const BlogsPage = () => {
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

  if (selectedBlog) {
    return (
      <Layout>
        <div className="min-h-screen bg-background">
          <div className="bg-gradient-to-r from-primary to-secondary text-white py-8">
            <div className="container mx-auto px-4">
              <button
                onClick={() => setSelectedBlog(null)}
                className="flex items-center gap-2 text-white/80 hover:text-white"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Blogs
              </button>
            </div>
          </div>

          <div className="container mx-auto px-4 py-12">
            <article className="max-w-4xl mx-auto">
              <div className="mb-8">
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {selectedBlog.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {selectedBlog.author}
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs">
                    {selectedBlog.category}
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  {selectedBlog.title}
                </h1>
                <p className="text-xl text-muted-foreground">
                  {selectedBlog.description}
                </p>
              </div>

              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="w-full h-[400px] object-cover rounded-2xl mb-8"
              />

              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
              />

              <div className="mt-12 pt-8 border-t">
                <button
                  onClick={() => setSelectedBlog(null)}
                  className="flex items-center gap-2 text-primary font-medium"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Back to all blogs
                </button>
              </div>
            </article>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Latest Healthcare Insights
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Stay updated with the latest trends, innovations, and stories from
            the world of healthcare.
          </p>
        </section>

        {/* Blog Cards */}
        <section className="py-20">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 max-w-6xl">
            {blogPosts.map((post) => (
              <button
                key={post.id}
                onClick={() => setSelectedBlog(post)}
                className="text-left group"
              >
                <div className="bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition"
                  />
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {post.description}
                    </p>
                    <span className="flex items-center text-primary font-medium">
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>
      </div>
      <OurMission />
    </Layout>
  );
};

export default BlogsPage;
