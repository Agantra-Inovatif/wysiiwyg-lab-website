import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PortfolioCard } from "@/components/PortfolioCard";
import { Button } from "@/components/ui/button";
import { categories, portfolioItems } from "@/lib/portfolio-data";
import { Lightbox } from "@/components/Lightbox";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-hero-gradient">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block text-primary font-medium uppercase tracking-widest text-sm mb-6">
              Our Work
            </span>
            <h1 className="font-display font-bold text-5xl md:text-7xl text-foreground mb-6">
              Crafted with
              <span className="text-gradient"> Passion</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Explore our collection of aerial cinematography, documentaries, 
              and commercial productions that showcase our creative excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "hero" : "outline"}
                size="lg"
                onClick={() => setActiveCategory(category)}
                className="min-w-[100px]"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredItems.map((item, index) => (
                <PortfolioCard
                  key={item.title}
                  image={item.image}
                  title={item.title}
                  category={item.category}
                  isVideo={item.isVideo}
                  index={index}
                  onClick={() => setSelectedItem(item)}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-muted-foreground text-lg">
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Projects Completed" },
              { value: "50M+", label: "Views Generated" },
              { value: "120+", label: "Happy Clients" },
              { value: "25+", label: "Countries Covered" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="font-display font-bold text-4xl md:text-5xl text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
              Ready to Create Your Story?
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Let's work together to bring your vision to life with stunning 
              visuals and compelling storytelling.
            </p>
            <Button variant="hero" size="xl">
              Start Your Project
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />

      <Lightbox
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        item={selectedItem}
      />
    </div>
  );
};

export default Portfolio;
