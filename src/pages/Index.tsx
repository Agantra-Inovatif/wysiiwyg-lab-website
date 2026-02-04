import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeader } from "@/components/SectionHeader";
import heroBg from "@/assets/hero-bg.jpg";
import { services, stats } from "@/lib/index-data";
import { useTranslation, Trans } from "react-i18next";

const Index = () => {
  const { t } = useTranslation();

  // Filter services to show only the first 3
  const visibleServices = services.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Aerial cinematography"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-overlay-gradient" />
          <div className="absolute inset-0 bg-background/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block text-primary font-medium uppercase tracking-widest text-sm mb-6">
                {t('hero.subtitle')}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-tight"
            >
              <Trans i18nKey="hero.title">
                Capturing
                <span className="text-gradient"> Stories</span>
                <br />
                From Every Angle
              </Trans>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10"
            >
              {t('hero.description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button variant="hero" size="xl" asChild>
                <Link to="/services">
                  {t('services.title')}
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl">
                <Play className="mr-2" />
                {t('hero.cta_showreel')}
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </section>


      {/* Services Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <SectionHeader
            label={t('services.label')}
            title={t('services.title')}
            description={t('services.description')}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleServices.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">
                {t('services.cta_all')}
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(38_92%_50%/0.1)_0%,transparent_70%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              {t('cta.description')}
            </p>
            <Button variant="hero" size="xl">
              {t('cta.button')}
              <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
