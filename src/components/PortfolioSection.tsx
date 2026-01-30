import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const PortfolioSection = () => {
  const { t, language } = useLanguage();

  const projects = language === 'en' ? [
    {
      title: "TbilisiHeat - Heating Services",
      category: "Local Business",
      description:
        "A professional website for a heating and radiator services company. Clean design showcasing services, contact information, and customer trust signals.",
      goals: "Get more phone calls from local customers searching for heating repairs.",
      result: "40% increase in quote requests within the first month of launch.",
      initial: "T",
      isDemo: true,
      demoLink: "/heating-services",
    },
    {
      title: "Beauty Studio Nino",
      category: "Beauty Salon",
      description:
        "Elegant website for a beauty salon featuring service menu, pricing, photo gallery, and easy booking options.",
      goals: "Showcase services and make it easy for clients to see prices and book appointments.",
      result: "Professional online presence that converts visitors into paying customers.",
      initial: "B",
      isDemo: true,
      demoLink: "/beauty-salon",
    },
    {
      title: "AutoFix Garage",
      category: "Auto Services",
      description:
        "Modern website for an auto repair shop with service listings, location map, and contact form for quote requests.",
      goals: "Attract more local customers and make it easy to request service quotes online.",
      result: "Beautiful design that reflects the quality and professionalism of the business.",
      initial: "A",
    },
  ] : [
    {
      title: "თბილისიჰითი - გათბობის სერვისები",
      category: "ადგილობრივი ბიზნესი",
      description:
        "პროფესიონალური ვებსაიტი გათბობისა და რადიატორების სერვისის კომპანიისთვის. სუფთა დიზაინი სერვისებით და საკონტაქტო ინფორმაციით.",
      goals: "მეტი ტელეფონის ზარების მიღება ადგილობრივი კლიენტებისგან, რომლებიც გათბობის შეკეთებას ეძებენ.",
      result: "40%-ით მეტი მოთხოვნა გაშვებიდან პირველ თვეში.",
      initial: "თ",
      isDemo: true,
      demoLink: "/heating-services",
    },
    {
      title: "სილამაზის სტუდია ნინო",
      category: "სილამაზის სალონი",
      description:
        "ელეგანტური ვებსაიტი სილამაზის სალონისთვის სერვისების მენიუთი, ფასებით, ფოტო გალერეით და ჯავშნის ფუნქციით.",
      goals: "სერვისების ჩვენება და კლიენტებისთვის ფასების ნახვისა და ჯავშნის გამარტივება.",
      result: "პროფესიონალური ონლაინ პრეზენცია, რომელიც ვიზიტორებს მომხმარებლებად აქცევს.",
      initial: "ს",
      isDemo: true,
      demoLink: "/beauty-salon",
    },
    {
      title: "ავტოფიქსი - ავტოსერვისი",
      category: "ავტო სერვისები",
      description:
        "თანამედროვე ვებსაიტი ავტოსერვისისთვის სერვისების ჩამონათვალით, ლოკაციის რუკით და საკონტაქტო ფორმით.",
      goals: "მეტი ადგილობრივი კლიენტის მოზიდვა და სერვისის მოთხოვნის გამარტივება ონლაინ.",
      result: "ლამაზი დიზაინი, რომელიც ბიზნესის ხარისხსა და პროფესიონალიზმს ასახავს.",
      initial: "ა",
    },
  ];

  return (
    <section id="portfolio" className="section-padding bg-secondary/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t('portfolio.title')}{" "}
            <span className="gradient-text">{t('portfolio.titleHighlight')}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('portfolio.subtitle')}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
            >
              {/* Project Image */}
              <div className="aspect-[4/3] bg-secondary relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 rounded-2xl bg-card/90 backdrop-blur flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-primary">
                        {project.initial}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-foreground/80">
                      {project.category}
                    </p>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
                {project.isDemo && (
                  <p className="text-xs font-medium text-primary/70 mb-2">Demo Project</p>
                )}
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-3 mb-4">
                  <div>
                    <p className="text-xs font-medium text-primary uppercase tracking-wide mb-1">
                      {t('portfolio.goal')}
                    </p>
                    <p className="text-sm text-muted-foreground">{project.goals}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-primary uppercase tracking-wide mb-1">
                      {t('portfolio.result')}
                    </p>
                    <p className="text-sm text-muted-foreground">{project.result}</p>
                  </div>
                </div>

                {project.isDemo ? (
                  <Link to={project.demoLink}>
                    <Button variant="ghost" size="sm" className="w-full group/btn">
                      {t('portfolio.viewProject')}
                      <ExternalLink size={14} className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                ) : (
                  <Button variant="ghost" size="sm" className="w-full group/btn">
                    {t('portfolio.viewProject')}
                    <ExternalLink size={14} className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            {t('portfolio.cta')}
          </p>
          <Button asChild>
            <a href="#contact">{t('portfolio.ctaButton')}</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
