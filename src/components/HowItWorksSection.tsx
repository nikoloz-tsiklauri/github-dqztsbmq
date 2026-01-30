import { Send, Palette, CheckCircle, Rocket } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HowItWorksSection = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: Send,
      title: t('howItWorks.step1.title'),
      description: t('howItWorks.step1.desc'),
      step: "01",
    },
    {
      icon: Palette,
      title: t('howItWorks.step2.title'),
      description: t('howItWorks.step2.desc'),
      step: "02",
    },
    {
      icon: CheckCircle,
      title: t('howItWorks.step3.title'),
      description: t('howItWorks.step3.desc'),
      step: "03",
    },
    {
      icon: Rocket,
      title: t('howItWorks.step4.title'),
      description: t('howItWorks.step4.desc'),
      step: "04",
    },
  ];

  return (
    <section id="how-it-works" className="section-padding">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t('howItWorks.title')}{" "}
            <span className="gradient-text">{t('howItWorks.titleHighlight')}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('howItWorks.subtitle')}
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.step}
              className="relative group"
            >
              {/* Connector line (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
              )}
              
              <div className="bg-card rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 relative">
                {/* Step number */}
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
