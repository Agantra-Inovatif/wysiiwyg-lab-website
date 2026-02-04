import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Linkedin, Youtube } from "lucide-react";
import { useTranslation } from "react-i18next";

const TiktokIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">W</span>
              </div>
              <span className="font-display font-bold text-xl text-foreground">
                WYSIIWYG Lab
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <TiktokIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">{t('footer.quick_links')}</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Indonesia Partner */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">{t('footer.partner_id')}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <a href="mailto:info@raksakateknologi.com" className="hover:text-primary transition-colors">info@raksakateknologi.com</a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <a href="https://wa.me/628884900250" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  +62 888 4900 250
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <MapPin size={16} className="text-primary flex-shrink-0" />
                Surabaya, Indonesia
              </li>
            </ul>
          </div>

          {/* European Partner */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">{t('footer.partner_eu')}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <a href="mailto:info@nextmantra.com" className="hover:text-primary transition-colors">info@nextmantra.com</a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <a href="https://wa.me/37253194019" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  +372 5319 4019
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <MapPin size={16} className="text-primary flex-shrink-0" />
                Tallinn, Estonia
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            {t('footer.rights')}
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link to="/terms-of-service" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
