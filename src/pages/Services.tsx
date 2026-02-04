import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { mainServices, processSteps } from "@/lib/services-data";
import { useTranslation, Trans } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  // Reconstruct mainServices with translations, filtering out the 4th service (index 3)
  const translatedServices = mainServices
    .slice(0, 3) // Keep only the first 3 services
    .map((service, index) => {
      const serviceKey = index === 0 ? 'aerial' : index === 1 ? 'media' : 'agency';
      const features = t(`services_page.items.${serviceKey}.features`, { returnObjects: true }) as string[];
      
      return {
        ...service,
        title: t(`services_page.items.${serviceKey}.title`),
        description: t(`services_page.items.${serviceKey}.description`),
        features: service.features.map((feature, i) => ({
          ...feature,
          text: features[i] || feature.text
        }))
      };
    });

  // Reconstruct processSteps with translations
  const translatedProcessSteps = processSteps.map((step, index) => {
    const stepKey = String(index + 1);
    return {
      ...step,
      title: t(`services_page.process.steps.${stepKey}.title`),
      description: t(`services_page.process.steps.${stepKey}.description`)
    };
  });

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
              {t('services_page.hero.subtitle')}
            </span>
            <h1 className="font-display font-bold text-5xl md:text-7xl text-foreground mb-6">
              <Trans i18nKey="services_page.hero.title">
                Comprehensive
                <span className="text-gradient"> Creative</span>
                <br />
                Solutions
              </Trans>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              {t('services_page.hero.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {translatedServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <span className="text-primary font-display font-bold text-sm uppercase tracking-wider">
                      {t('services_page.cta.service_label')} {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
                    {service.title}
                  </h2>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature) => (
                      <div
                        key={feature.text}
                        className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border"
                      >
                        <feature.icon className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground text-sm font-medium">
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button variant="hero" size="lg" asChild>
                    {index === 0 ? (
                      <Link to="/services/aerial">
                        {t('services_page.cta.learn_more')}
                        <ArrowRight className="ml-2" />
                      </Link>
                    ) : index === 1 ? (
                      <Link to="/services/media">
                        {t('services_page.cta.learn_more')}
                        <ArrowRight className="ml-2" />
                      </Link>
                    ) : index === 2 ? (
                      <Link to="/services/agency">
                        {t('services_page.cta.learn_more')}
                        <ArrowRight className="ml-2" />
                      </Link>
                    ) : index === 3 ? (
                      <Link to="/services/tech">
                        {t('services_page.cta.learn_more')}
                        <ArrowRight className="ml-2" />
                      </Link>
                    ) : (
                      <Link to="/contact">
                        {t('services_page.cta.learn_more')}
                        <ArrowRight className="ml-2" />
                      </Link>
                    )}
                  </Button>
                </div>

                {/* Visual Card */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className={`relative rounded-2xl bg-gradient-to-br ${service.gradient} p-2 border border-border overflow-hidden group`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(38_92%_50%/0.15)_0%,transparent_50%)]" />
                    <div className="relative aspect-video rounded-xl overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="flex flex-wrap gap-2">
                          {service.features.slice(0, 2).map((feature, i) => (
                            <motion.div
                              key={feature.text}
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: i * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10"
                            >
                              <feature.icon className="w-3 h-3 text-primary" />
                              <span className="text-white/90 text-xs font-medium">{feature.text}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 md:py-32 bg-card">
        <div className="container mx-auto px-6">
          <SectionHeader
            label={t('services_page.process.label')}
            title={t('services_page.process.title')}
            description={t('services_page.process.description')}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {translatedProcessSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-1/2" />
                )}
                
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border-2 border-primary mb-6">
                    <span className="font-display font-bold text-xl text-primary">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
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
              {t('services_page.cta.title')}
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              {t('services_page.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                {t('services_page.cta.quote')}
                <ArrowRight className="ml-2" />
              </Button>
              {/* Button hidden as per request
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/portfolio">{t('services_page.cta.work')}</Link>
              </Button>
              */}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
