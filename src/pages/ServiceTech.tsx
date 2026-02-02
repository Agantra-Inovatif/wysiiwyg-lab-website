import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Cpu, Database, Map, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import heroBg from "@/assets/portfolio-4.jpg"; // Reusing an existing asset

const features = [
  {
    icon: Map,
    title: "LiDAR Mapping & Photogrammetry",
    description: "Create highly accurate 3D models and topographical maps of large areas for surveying, construction, and urban planning."
  },
  {
    icon: Cpu,
    title: "Asset Inspection",
    description: "Utilize automated drone flights and high-resolution imaging to inspect critical infrastructure like towers, bridges, and pipelines safely."
  },
  {
    icon: Database,
    title: "Digital Twins",
    description: "Build precise digital replicas of physical assets to simulate performance, predict maintenance needs, and optimize operations."
  },
  {
    icon: BarChart,
    title: "Data Analytics",
    description: "Turn raw aerial data into actionable insights with our advanced processing and reporting tools."
  }
];

const ServiceTech = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Technology & Logistics Solutions"
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
              Service 04
            </span>
            <h1 className="font-display font-bold text-5xl md:text-7xl text-foreground mb-6">
              Technology &
              <span className="text-gradient"> Logistics</span>
              <br />
              Solutions
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Data-driven insights from the sky. Optimizing operations with precision aerial intelligence.
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
                label="The Innovation"
                title="Intelligence Above All"
                description=""
                className="text-left items-start mb-6"
              />
              <div className="prose prose-lg prose-invert text-muted-foreground">
                <p className="mb-6">
                  The modern world runs on data. But some of the most valuable data is hard to reach. Traditional methods of surveying and inspection are slow, dangerous, and expensive. We're changing that.
                </p>
                <p className="mb-6">
                  WYSIIWYG Lab's "Technology & Logistics Solutions" division leverages cutting-edge drone technology to capture precise data from the air. We don't just take pictures; we measure, map, and model the physical world with millimeter-level accuracy.
                </p>
                <p>
                  From monitoring the progress of a construction mega-project to inspecting miles of power lines in remote terrain, our solutions provide businesses with the intelligence they need to make informed decisions. We turn the sky into a data source, helping you optimize logistics, ensure safety, and drive efficiency.
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
                    <Cpu className="w-24 h-24 text-primary/40" />
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
            label="Capabilities"
            title="Precision Engineering"
            description="Advanced tools for complex industrial challenges."
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
              Industries We Serve
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Construction & Engineering",
                "Energy & Utilities",
                "Agriculture & Forestry",
                "Mining & Aggregates",
                "Logistics & Supply Chain",
                "Urban Planning & Government"
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
            Optimize Your Operations
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Discover how aerial intelligence can save you time, money, and risk.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Request a Demo
              <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceTech;
