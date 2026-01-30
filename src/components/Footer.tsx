import { Heart, MessageCircle, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const handleWhatsApp = () => {
    window.open("https://wa.me/995555123456", "_blank");
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Tagline */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">GW</span>
              </div>
              <span className="font-semibold text-lg">GeorgiaWeb</span>
            </div>
            <p className="text-sm text-background/60 mb-4">
              {t('footer.tagline')}
            </p>
            <div className="flex items-center gap-2 text-sm text-background/60">
              <MapPin size={14} />
              <span>{t('footer.basedIn')}</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <a 
                href="mailto:hello@georgiaweb.ge" 
                className="flex items-center gap-2 text-sm text-background/80 hover:text-background transition-colors"
              >
                <Mail size={14} />
                hello@georgiaweb.ge
              </a>
              <button
                onClick={handleWhatsApp}
                className="flex items-center gap-2 text-sm text-background/80 hover:text-background transition-colors"
              >
                <MessageCircle size={14} />
                +995 555 123 456
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#services" className="block text-sm text-background/60 hover:text-background transition-colors">
                Services
              </a>
              <a href="#portfolio" className="block text-sm text-background/60 hover:text-background transition-colors">
                Portfolio
              </a>
              <a href="#pricing" className="block text-sm text-background/60 hover:text-background transition-colors">
                Pricing
              </a>
              <a href="#contact" className="block text-sm text-background/60 hover:text-background transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-background/50">
              © {currentYear} GeorgiaWeb. {t('footer.rights')}
            </p>
            <p className="text-sm text-background/50 flex items-center gap-1">
              {t('footer.madeWith')} <Heart size={14} className="text-primary" /> {t('footer.inTbilisi')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
