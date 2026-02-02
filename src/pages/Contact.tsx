import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";

const Contact = () => {
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
              Contact Us
            </span>
            <h1 className="font-display font-bold text-5xl md:text-7xl text-foreground mb-6">
              Get In
              <span className="text-gradient"> Touch</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Have a project in mind or just want to say hello? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Details Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card p-8 md:p-12 rounded-2xl border border-border"
            >
              <h2 className="font-display font-bold text-3xl text-foreground mb-2">Send us a message</h2>
              <p className="text-muted-foreground mb-8">We'll get back to you as soon as possible.</p>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <Input placeholder="Your Name" />
                  <Input type="email" placeholder="Your Email" />
                </div>
                <Input placeholder="Subject" />
                <Textarea placeholder="Your Message" rows={6} />
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Send Message
                  <ArrowRight className="ml-2" />
                </Button>
              </form>
            </motion.div>

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <SectionHeader
                label="Contact Info"
                title="Our Offices"
                description="Reach out to our regional partners."
                className="text-left items-start"
                titleClassName="text-3xl"
              />
              
              {/* Indonesia Partner */}
              <div className="space-y-4">
                <h3 className="font-display font-bold text-xl text-foreground">PT Raksaka Teknologi Indonesia (Indonesian Partner) for Asia Region</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-border group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <a href="mailto:info@raksakateknologi.com" className="text-muted-foreground group-hover:text-foreground transition-colors">info@raksakateknologi.com</a>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-border group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <a href="https://wa.me/628884900250" target="_blank" rel="noopener noreferrer" className="text-muted-foreground group-hover:text-foreground transition-colors">+62 888 4900 250</a>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-border group-hover:bg-primary/20 transition-colors">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-muted-foreground">Surabaya, Indonesia</span>
                  </div>
                </div>
              </div>

              {/* European Partner */}
              <div className="space-y-4">
                <h3 className="font-display font-bold text-xl text-foreground">Agantra Inovatif OÜ (European Partner) for EU, UK and USA region</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-border group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <a href="mailto:info@nextmantra.com" className="text-muted-foreground group-hover:text-foreground transition-colors">info@nextmantra.com</a>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-border group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <a href="https://wa.me/37253194019" target="_blank" rel="noopener noreferrer" className="text-muted-foreground group-hover:text-foreground transition-colors">+372 5319 4019</a>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-border group-hover:bg-primary/20 transition-colors">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-muted-foreground">Tallinn, Estonia</span>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Surabaya Map */}
            <div className="rounded-2xl overflow-hidden border border-border aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63323.104017142075!2d112.67148437751182!3d-7.275617589210644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbf8381ac47f%3A0x3027a76e352be40!2sSurabaya%2C%20East%20Java%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1770040069524!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            {/* Tallinn Map */}
            <div className="rounded-2xl overflow-hidden border border-border aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d130325.6606667543!2d24.637686649999998!3d59.437222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46929499df5616bf%3A0x400b36d18fc6270!2sTallinn%2C%20Estonia!5e0!3m2!1sen!2sid!4v1708900000000!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
