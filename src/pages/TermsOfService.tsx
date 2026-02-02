import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const TermsOfService = () => {
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
              Terms of <span className="text-gradient">Service</span>
            </h1>
            
            <div className="prose prose-lg prose-invert mx-auto text-muted-foreground">
              <p>Last updated: July 26, 2024</p>
              
              <p>Please read these terms and conditions carefully before using Our Service.</p>

              <h2>Interpretation and Definitions</h2>
              <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
              
              <h2>Acknowledgment</h2>
              <p>These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.</p>
              
              <h2>Intellectual Property</h2>
              <p>The Service and its original content (excluding Content provided by You or other users), features and functionality are and will remain the exclusive property of the Company and its licensors. The Service is protected by copyright, trademark, and other laws of both the Country and foreign countries.</p>

              <h2>Links to Other Websites</h2>
              <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company. The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services.</p>

              <h2>Termination</h2>
              <p>We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.</p>

              <h2>Governing Law</h2>
              <p>The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.</p>

              <h2>Contact Us</h2>
              <p>If you have any questions about these Terms and Conditions, You can contact us by email: info@wysiiwyg.com</p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
