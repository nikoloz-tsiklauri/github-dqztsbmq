import { Search, Shield, Phone, Eye } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const WhyWebsiteSection = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Search,
      title: t('whyWebsite.found.title'),
      description: t('whyWebsite.found.desc'),
    },
    {
      icon: Shield,
      title: t('whyWebsite.trust.title'),
      description: t('whyWebsite.trust.desc'),
    },
    {
      icon: Phone,
      title: t('whyWebsite.calls.title'),
      description: t('whyWebsite.calls.desc'),
    },
    {
      icon: Eye,
      title: t('whyWebsite.services.title'),
      description: t('whyWebsite.services.desc'),
    },
  ];

  return (
    <section id="why-website" className="section-padding">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              {t('whyWebsite.title')}{" "}
              <span className="gradient-text">{t('whyWebsite.titleHighlight')}</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t('whyWebsite.desc1')}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t('whyWebsite.desc2')}
            </p>
          </div>

          {/* Right - Benefits Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex gap-4 p-5 rounded-xl bg-secondary/50 hover:bg-secondary/80 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <benefit.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWebsiteSection;
