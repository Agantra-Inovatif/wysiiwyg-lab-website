import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="py-32 md:py-40">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="font-display font-bold text-4xl md:text-6xl text-foreground mb-8 text-center">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            
            <div className="prose prose-lg prose-invert mx-auto text-muted-foreground">
              <p>Last updated: February 4, 2026</p>
              
              <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>

              <h2>Collecting and Using Your Personal Data</h2>
              <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to: Email address, First name and last name, Phone number, Usage Data.</p>
              
              <h2>Use of Your Personal Data</h2>
              <p>The Company may use Personal Data for the following purposes: to provide and maintain our Service, to manage Your Account, for the performance of a contract, to contact You, to provide You with news, special offers and general information about other goods, services and events which we offer.</p>

              <h2>Disclosure of Your Personal Data</h2>
              <p>We may share Your personal information in the following situations: with Service Providers, for business transfers, with Affiliates, with business partners, with other users.</p>

              <h2>Security of Your Personal Data</h2>
              <p>The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>

              <h2>Children's Privacy</h2>
              <p>Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13.</p>

              <h2>Changes to this Privacy Policy</h2>
              <p>We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.</p>


            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
