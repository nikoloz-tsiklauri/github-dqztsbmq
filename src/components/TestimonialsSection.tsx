import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const TestimonialsSection = () => {
  const { t, language } = useLanguage();

  const testimonials = language === 'en' ? [
    {
      name: "Davit Khachidze",
      business: "TbilisiHeat - Heating Services",
      avatar: "DK",
      text: "Gio created an amazing website for my heating business. Now customers find me on Google and I get 3-4 new calls every week. Highly recommend!",
      rating: 5,
    },
    {
      name: "Nino Gelashvili",
      business: "Beauty Studio Nino",
      avatar: "NG",
      text: "Professional, fast, and affordable. My salon's website looks beautiful and my clients love being able to see our services and prices online.",
      rating: 5,
    },
    {
      name: "Giorgi Lomidze",
      business: "AutoFix Garage",
      avatar: "GL",
      text: "Best decision I made for my auto repair shop. The website is clean, works perfectly on phones, and the whole process was super easy.",
      rating: 5,
    },
  ] : [
    {
      name: "დავით ხაჩიძე",
      business: "თბილისიჰითი - გათბობის სერვისები",
      avatar: "დხ",
      text: "გიომ შესანიშნავი ვებსაიტი შემიქმნა ჩემი გათბობის ბიზნესისთვის. ახლა კლიენტები Google-ში მპოულობენ და ყოველ კვირა 3-4 ახალი ზარი მაქვს.",
      rating: 5,
    },
    {
      name: "ნინო გელაშვილი",
      business: "სილამაზის სტუდია ნინო",
      avatar: "ნგ",
      text: "პროფესიონალური, სწრაფი და ხელმისაწვდომი. ჩემი სალონის ვებსაიტი ლამაზად გამოიყურება და კლიენტებს მოსწონთ სერვისებისა და ფასების ონლაინ ნახვა.",
      rating: 5,
    },
    {
      name: "გიორგი ლომიძე",
      business: "ავტოფიქსი - ავტოსერვისი",
      avatar: "გლ",
      text: "საუკეთესო გადაწყვეტილება ჩემი ავტოსერვისისთვის. ვებსაიტი სუფთაა, იდეალურად მუშაობს ტელეფონებზე და მთელი პროცესი ძალიან მარტივი იყო.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="section-padding">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t('testimonials.title')}{" "}
            <span className="gradient-text">{t('testimonials.titleHighlight')}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-all duration-300 relative"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-primary/10">
                <Quote size={40} />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
