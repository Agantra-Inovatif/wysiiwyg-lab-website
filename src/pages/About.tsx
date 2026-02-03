import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, Target, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import aboutHero from "@/assets/portfolio-5.jpg";
import team1 from "@/assets/portfolio-1.jpg"; // Using existing portfolio image as placeholder
import team2 from "@/assets/portfolio-2.jpg"; // Using existing portfolio image as placeholder
import team3 from "@/assets/portfolio-3.jpg"; // Using existing portfolio image as placeholder
import team4 from "@/assets/portfolio-4.jpg"; // Using existing portfolio image as placeholder
import { useTranslation, Trans } from "react-i18next";

const teamMembers = [
  { 
    name: "Nicko Satria Utama", 
    role: "Founder", 
    image: team1,
    linkedin: "http://linkedin.com/in/nickotech2000"
  },
  { 
    name: "Airlangga Bhumintara Amitaba", 
    role: "Co-Founder", 
    image: team2,
    linkedin: "https://www.linkedin.com/in/airlanggaamitaba/"
  },
  { 
    name: "Basuki Priambodo", 
    role: "Co-Founder", 
    image: team3,
    linkedin: "https://www.linkedin.com"
  },
  { 
    name: "Rika Koesnandi", 
    role: "Co-Founder", 
    image: team4,
    linkedin: "https://www.linkedin.com"
  },
];

const About = () => {
  const { t } = useTranslation();

  const values = [
    { 
      icon: Target, 
      title: t('about_page.values.mission.title'), 
      description: t('about_page.values.mission.description') 
    },
    { 
      icon: Award, 
      title: t('about_page.values.vision.title'), 
      description: t('about_page.values.vision.description') 
    },
    { 
      icon: Users, 
      title: t('about_page.values.values.title'), 
      description: t('about_page.values.values.description') 
    },
  ];

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
              {t('about_page.hero.subtitle')}
            </span>
            <h1 className="font-display font-bold text-5xl md:text-7xl text-foreground mb-6">
              <Trans i18nKey="about_page.hero.title">
                Pioneering The
                <span className="text-gradient"> Future</span>
                <br />
                Of Visual Storytelling
              </Trans>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              {t('about_page.hero.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden aspect-video"
          >
            <img src={aboutHero} alt="Our Team" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display font-bold text-2xl text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 md:py-32 bg-card">
        <div className="container mx-auto px-6">
          <SectionHeader
            label={t('about_page.team.label')}
            title={t('about_page.team.title')}
            description={t('about_page.team.description')}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="relative rounded-xl overflow-hidden mb-4 aspect-[4/5]">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Linkedin className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <h4 className="font-display font-bold text-xl text-foreground group-hover:text-primary transition-colors">{member.name}</h4>
                  <p className="text-primary text-sm">{member.role}</p>
                </a>
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
              {t('about_page.cta.title')}
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              {t('about_page.cta.description')}
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                {t('about_page.cta.button')}
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

export default About;
