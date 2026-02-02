import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-24 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 -z-10"
        style={{ background: 'var(--gradient-hero)' }}
      />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-up opacity-0">
            <Sparkles size={16} />
            <span>{t('hero.badge')}</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-5xl md:text-6xl font-bold leading-tight mb-6 animate-fade-up opacity-0 stagger-1">
            {t('hero.headline')}{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">{t('hero.headlineHighlight')}</span>
            <br />
            <span className="text-muted-foreground">{t('hero.headlineEnd')}</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up opacity-0 stagger-2">
            {t('hero.subheadline')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0 stagger-3">
            <Button variant="hero" asChild>
              <a href="#portfolio">
                {t('hero.viewWork')}
                <ArrowRight size={18} />
              </a>
            </Button>
            <Button variant="heroOutline" asChild>
              <a href="#contact">
                {t('hero.getDemo')}
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-border/50 animate-fade-up opacity-0 stagger-4">
            <p className="text-sm text-muted-foreground mb-4">{t('hero.trustedBy')}</p>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">50+</p>
                <p className="text-sm text-muted-foreground">{t('hero.projects')}</p>
              </div>
              <div className="w-px h-12 bg-border hidden sm:block" />
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">98%</p>
                <p className="text-sm text-muted-foreground">{t('hero.satisfaction')}</p>
              </div>
              <div className="w-px h-12 bg-border hidden sm:block" />
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">{t('hero.days')}</p>
                <p className="text-sm text-muted-foreground">{t('hero.delivery')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
