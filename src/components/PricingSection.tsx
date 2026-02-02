import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const PricingSection = () => {
  const { t } = useLanguage();

  const pricingPlans = [
    {
      name: t('pricing.starter.name'),
      price: "₾299",
      description: t('pricing.starter.desc'),
      features: [
        t('pricing.starter.feature1'),
        t('pricing.starter.feature2'),
        t('pricing.starter.feature3'),
        t('pricing.starter.feature4'),
        t('pricing.starter.feature5'),
      ],
      popular: false,
    },
    {
      name: t('pricing.business.name'),
      price: "₾599",
      description: t('pricing.business.desc'),
      features: [
        t('pricing.business.feature1'),
        t('pricing.business.feature2'),
        t('pricing.business.feature3'),
        t('pricing.business.feature4'),
        t('pricing.business.feature5'),
        t('pricing.business.feature6'),
        t('pricing.business.feature7'),
      ],
      popular: true,
    },
  ];

  return (
    <section id="pricing" className="section-padding">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t('pricing.title')}{" "}
            <span className="gradient-text">{t('pricing.titleHighlight')}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('pricing.subtitle')}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-2xl p-8 ${
                plan.popular
                  ? "border-2 border-primary card-shadow-hover"
                  : "border border-border card-shadow"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-block px-4 py-1 text-sm font-medium text-primary-foreground bg-primary rounded-full">
                    {t('pricing.popular')}
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{t('pricing.oneTime')}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} className="text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.popular ? "default" : "outline"}
                className="w-full"
                asChild
              >
                <a href="#contact">{t('pricing.getStarted')}</a>
              </Button>
            </div>
          ))}
        </div>

        {/* Custom Note */}
        <p className="text-center text-muted-foreground mt-12 max-w-xl mx-auto">
          {t('pricing.custom')}{" "}
          <a href="#contact" className="text-primary hover:underline">
            {t('pricing.customCta')}
          </a>
          {t('pricing.customText')}
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
