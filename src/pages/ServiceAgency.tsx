import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Users, Briefcase, Layers, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import heroBg from "@/assets/portfolio-3.jpg"; // Reusing an existing asset

const features = [
  {
    icon: Users,
    title: "Team Augmentation",
    description: "Seamlessly integrate our creative experts into your existing workflows to scale your production capabilities instantly."
  },
  {
    icon: Briefcase,
    title: "White-Label Solutions",
    description: "We work behind the scenes, delivering premium content under your brand name, allowing you to expand your service offerings."
  },
  {
    icon: Layers,
    title: "Full-Stack Production",
    description: "From creative direction to post-production, we handle the heavy lifting so you can focus on client relationships and strategy."
  },
  {
    icon: Zap,
    title: "Rapid Scalability",
    description: "Whether you need a single videographer or a full film crew, we can scale our resources up or down to match your project needs."
  }
];

const ServiceAgency = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Digital Agency Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-overlay-gradient" />
          <div className="absolute inset-0 bg-background/60" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block text-primary font-medium uppercase tracking-widest text-sm mb-6">
              Service 03
            </span>
            <h1 className="font-display font-bold text-5xl md:text-7xl text-foreground mb-6">
              Digital Agency as a
              <span className="text-gradient"> Service</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Your on-demand creative powerhouse. Scale your agency without the overhead.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Story Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <SectionHeader
                label="The Concept"
                title="Growth Without Limits"
                description=""
                className="text-left items-start mb-6"
              />
              <div className="prose prose-lg prose-invert text-muted-foreground">
                <p className="mb-6">
                  In the fast-paced world of digital marketing, agility is key. Agencies are constantly under pressure to deliver more content, faster, and at a higher quality. But building an in-house production team is expensive, time-consuming, and risky.
                </p>
                <p className="mb-6">
                  That's where WYSIIWYG Lab comes in. We offer "Digital Agency as a Service" (DAaaS)—a flexible, scalable solution that gives you access to a world-class creative team whenever you need it. Think of us as your secret weapon.
                </p>
                <p>
                  We don't just execute tasks; we partner with you. We understand the nuances of agency life—the tight deadlines, the demanding clients, and the need for perfection. We integrate seamlessly with your brand, adopting your processes and culture to deliver work that feels like it was made in-house, but with the polish of a specialized production studio.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-card border border-border">
                 {/* Placeholder for a vertical image or video */}
                 <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background flex items-center justify-center">
                    <Users className="w-24 h-24 text-primary/40" />
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <SectionHeader
            label="Benefits"
            title="Why Partner With Us"
            description="Expand your capabilities and profitability with our white-label solutions."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background p-8 rounded-xl border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Areas */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-12 text-center">
              Who We Help
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Marketing & Advertising Agencies",
                "PR & Communications Firms",
                "Event Management Companies",
                "Real Estate Brokerages",
                "Corporate Marketing Departments",
                "Startups & Tech Companies"
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
            Scale Your Agency Today
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Let's discuss how we can become your trusted production partner.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Partner With Us
              <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceAgency;
