import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { href: "#services", label: t('nav.services') },
    { href: "#how-it-works", label: t('nav.howItWorks') },
    { href: "#why-website", label: t('nav.whyWebsite') },
    { href: "#portfolio", label: t('nav.portfolio') },
    { href: "#testimonials", label: t('nav.testimonials') },
    { href: "#pricing", label: t('nav.pricing') },
    { href: "#about", label: t('nav.about') },
    { href: "#contact", label: t('nav.contact') },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">GW</span>
            </div>
            <span className="font-semibold text-foreground">GeorgiaWeb</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Language Switcher & CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center bg-secondary rounded-lg p-1">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                  language === 'en'
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('ka')}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                  language === 'ka'
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                KA
              </button>
            </div>

            <Button size="sm" asChild>
              <a href="#contact">{t('nav.getStarted')}</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-4">
              {/* Mobile Language Switcher */}
              <div className="flex items-center gap-2 pb-4 border-b border-border/50">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    language === 'en'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-muted-foreground'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setLanguage('ka')}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    language === 'ka'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-muted-foreground'
                  }`}
                >
                  ქართული
                </button>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button size="sm" className="w-fit" asChild>
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                  {t('nav.getStarted')}
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
