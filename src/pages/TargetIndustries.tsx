import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Car, Coffee, Factory, Sprout, Hammer, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import heroBg from "@/assets/portfolio-6.jpg"; // Reusing an existing asset
import { useTranslation, Trans } from "react-i18next";

const TargetIndustries = () => {
  const { t } = useTranslation();

  const industries = [
    { icon: Building2, key: "hotel", service: "service03" },
    { icon: Sprout, key: "plantation", service: "service01" },
    { icon: Hammer, key: "mining", service: "service01" },
    { icon: Leaf, key: "green", service: "service01" },
    { icon: Car, key: "car", service: "service02" },
    { icon: Coffee, key: "cafe", service: "service02" },
    { icon: Factory, key: "factory", service: "service03" },
  ];

  const serviceGroups = [
    { key: "service01", industries: industries.filter(i => i.service === "service01") },
    { key: "service02", industries: industries.filter(i => i.service === "service02") },
    { key: "service03", industries: industries.filter(i => i.service === "service03") },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Target Industries"
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
              {t('industries_page.hero.subtitle')}
            </span>
            <h1 className="font-display font-bold text-5xl md:text-7xl text-foreground mb-6">
              <Trans i18nKey="industries_page.hero.title">
                Industries We
                <span className="text-gradient"> Serve</span>
              </Trans>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              {t('industries_page.hero.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="space-y-20">
            {serviceGroups.map(group => (
              <div key={group.key}>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-8 border-l-4 border-primary pl-4">
                  {t(`industries_page.groups.${group.key}`)}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {group.industries.map((industry, index) => (
                    <motion.div
                      key={industry.key}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all group"
                    >
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                        <industry.icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="font-display font-bold text-2xl text-foreground mb-4">
                        {t(`industries_page.items.${industry.key}.title`)}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-0">
                        {t(`industries_page.items.${industry.key}.description`)}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-card border-t border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
              {t('industries_page.cta.title')}
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              {t('industries_page.cta.description')}
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                {t('industries_page.cta.button')}
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TargetIndustries;
