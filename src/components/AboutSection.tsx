import { Heart, Zap, Target } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image/Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Decorative background */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/10" />
              
              {/* Main content card */}
              <div className="absolute inset-4 rounded-2xl bg-card card-shadow flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl">👨‍💻</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Gio</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {t('about.role')}
                  </p>
                  <div className="flex justify-center gap-6 text-sm">
                    <div className="text-center">
                      <p className="font-semibold text-foreground">3+</p>
                      <p className="text-muted-foreground text-xs">{t('about.experience')}</p>
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-foreground">50+</p>
                      <p className="text-muted-foreground text-xs">{t('about.projects')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-xl bg-card card-shadow flex items-center justify-center animate-float">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-xl bg-card card-shadow flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                <Heart className="w-8 h-8 text-primary" />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              {t('about.title')}{" "}
              <span className="gradient-text">{t('about.titleHighlight')}</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{t('about.intro')}</p>
              <p>{t('about.desc1')}</p>
              <p>{t('about.desc2')}</p>
            </div>

            {/* Values */}
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-card card-shadow">
                <Target className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm font-medium">{t('about.results')}</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-card card-shadow">
                <Zap className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm font-medium">{t('about.fast')}</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-card card-shadow">
                <Heart className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm font-medium">{t('about.personal')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
