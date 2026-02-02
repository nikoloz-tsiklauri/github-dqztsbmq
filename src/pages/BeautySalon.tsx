import { useState } from "react";
import {
  Phone,
  MapPin,
  Clock,
  Sparkles,
  Scissors,
  Hand,
  Palette,
  Droplets,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";

type Lang = "en" | "ka";

const BeautySalon = () => {
  const [lang, setLang] = useState<Lang>("en");

  const copy = {
    brand: "Luna Beauty Studio",
    back: lang === "en" ? "← Back to Portfolio" : "← პორტფოლიოზე დაბრუნება",
    nav: {
      services: lang === "en" ? "Services" : "სერვისები",
      about: lang === "en" ? "About" : "ჩვენ შესახებ",
      gallery: lang === "en" ? "Gallery" : "გალერეა",
      contact: lang === "en" ? "Contact" : "კონტაქტი",
    },
    headerCta: lang === "en" ? "Book Now" : "დაჯავშნა",

    hero: {
      badge:
        lang === "en"
          ? "Where Beauty Meets Confidence"
          : "სადაც სილამაზე და თავდაჯერება ერთდება",
      titleTop: lang === "en" ? "Discover Your" : "აღმოაჩინე შენი",
      titleAccent: lang === "en" ? "Natural Beauty" : "ბუნებრივი სილამაზე",
      desc:
        lang === "en"
          ? "Experience luxury beauty treatments in a serene, welcoming environment. Our expert team is dedicated to making you look and feel your absolute best."
          : "ისიამოვნე ლუქს სილამაზის პროცედურებით მშვიდ და კომფორტულ გარემოში. ჩვენი პროფესიონალი გუნდი ზრუნავს, რომ თავი იგრძნო და გამოიყურებოდე საუკეთესოდ.",
      ctaPrimary: lang === "en" ? "Book Your Appointment" : "დაჯავშნე ვიზიტი",
      ctaSecondary: lang === "en" ? "View Services" : "სერვისების ნახვა",
      stats: {
        a: lang === "en" ? "Happy Clients" : "ბედნიერი კლიენტები",
        b: lang === "en" ? "Years Experience" : "წლის გამოცდილება",
        c: lang === "en" ? "Client Rating" : "კლიენტების შეფასება",
      },
      next: {
        label: lang === "en" ? "Next Available" : "შემდეგი თავისუფალი დრო",
        value: lang === "en" ? "Today at 2:00 PM" : "დღეს 14:00-ზე",
      },
      heroImgAlt: lang === "en" ? "Beauty salon services" : "სილამაზის სალონის სერვისები",
    },

    services: {
      title:
        lang === "en"
          ? { a: "Our Premium ", b: "Services" }
          : { a: "ჩვენი პრემიუმ ", b: "სერვისები" },
      subtitle:
        lang === "en"
          ? "From hair to nails, we offer a full range of beauty services to pamper you from head to toe."
          : "თმისგან დაწყებული ფრჩხილებით დასრულებული — გთავაზობთ სრულ სერვისებს, რომ თავი განსაკუთრებულად იგრძნო.",
      learnMore: lang === "en" ? "Learn More" : "დეტალურად",
      cards: [
        {
          icon: Scissors,
          title: lang === "en" ? "Hair Styling" : "თმის სტაილინგი",
          description:
            lang === "en"
              ? "Expert cuts, coloring, highlights, and treatments for all hair types."
              : "პროფესიონალური შეჭრა, შეღებვა, ჰაილაითები და მოვლა ყველა ტიპის თმისთვის.",
          color: "from-pink-400 to-pink-600",
        },
        {
          icon: Hand,
          title: lang === "en" ? "Nail Care" : "ფრჩხილების მოვლა",
          description:
            lang === "en"
              ? "Manicures, pedicures, gel nails, and artistic nail designs."
              : "მანიკიური, პედიკიური, გელი და დიზაინი სხვადასხვა სტილში.",
          color: "from-purple-400 to-purple-600",
        },
        {
          icon: Palette,
          title: lang === "en" ? "Makeup" : "მაკიაჟი",
          description:
            lang === "en"
              ? "Professional makeup for weddings, events, or everyday glamour."
              : "პროფესიონალური მაკიაჟი ქორწილისთვის, ღონისძიებისთვის ან ყოველდღიური ლუქისთვის.",
          color: "from-rose-400 to-rose-600",
        },
        {
          icon: Droplets,
          title: lang === "en" ? "Skincare" : "კანის მოვლა",
          description:
            lang === "en"
              ? "Rejuvenating facials, peels, and customized skin treatments."
              : "განახლების პროცედურები, პილინგი და ინდივიდუალური კანის მკურნალობა.",
          color: "from-fuchsia-400 to-fuchsia-600",
        },
      ],
    },

    about: {
      title:
        lang === "en"
          ? { a: "Your ", b: "Trusted", c: " Beauty Partners" }
          : { a: "შენი ", b: "სანდო", c: " სილამაზის პარტნიორები" },
      p1:
        lang === "en"
          ? "Luna Beauty Studio has been serving our community for over 10 years. Our team of certified beauty professionals is passionate about helping you look and feel your best."
          : "Luna Beauty Studio უკვე 10+ წელია ემსახურება ჩვენს საზოგადოებას. სერტიფიცირებული პროფესიონალების გუნდი ზრუნავს, რომ თავი იგრძნო და გამოიყურებოდე საუკეთესოდ.",
      p2:
        lang === "en"
          ? "We believe that beauty is personal, and every client deserves a customized experience. That's why we take the time to understand your unique needs and preferences, ensuring you leave our studio feeling confident and radiant."
          : "გვჯერა, რომ სილამაზე ინდივიდუალურია და თითოეულ კლიენტს ეკუთვნის მისთვის მორგებული გამოცდილება. ამიტომ ყურადღებით ვუსმენთ შენს სურვილებს და საჭიროებებს, რომ სტუდიიდან გახვიდე თავდაჯერებული და ბედნიერი.",
      stat1: lang === "en" ? "Expert Stylists" : "გამოცდილი სტილისტები",
      stat2: lang === "en" ? "Premium Products" : "პრემიუმ პროდუქცია",
      imgAlt: {
        a: lang === "en" ? "Salon interior" : "სალონის ინტერიერი",
        b: lang === "en" ? "Beauty treatment" : "სილამაზის პროცედურა",
        c: lang === "en" ? "Professional team" : "პროფესიონალი გუნდი",
        d: lang === "en" ? "Relaxing atmosphere" : "მყუდრო ატმოსფერო",
      },
    },

    gallery: {
      title:
        lang === "en"
          ? { a: "Our ", b: "Work", c: " Gallery" }
          : { a: "ჩვენი ", b: "ნამუშევრების", c: " გალერეა" },
      subtitle:
        lang === "en"
          ? "Explore our portfolio of transformations and see the artistry behind our services."
          : "დაათვალიერე ჩვენი ნამუშევრები და ნახე დეტალები, რომლებიც სერვისებს განსაკუთრებულს ხდის.",
      imgAltPrefix: lang === "en" ? "Gallery image" : "გალერეის ფოტო",
    },

    contact: {
      title:
        lang === "en"
          ? { a: "Get In ", b: "Touch" }
          : { a: "დაგვიკავშირდი ", b: "ახლავე" },
      subtitle:
        lang === "en"
          ? "Ready to experience the Luna difference? Book your appointment today!"
          : "გინდა Luna-ს განსხვავება იგრძნო? დაჯავშნე ვიზიტი დღესვე!",
      infoTitle: lang === "en" ? "Contact Information" : "საკონტაქტო ინფორმაცია",
      phoneLabel: lang === "en" ? "Phone" : "ტელეფონი",
      addressLabel: lang === "en" ? "Address" : "მისამართი",
      hoursLabel: lang === "en" ? "Hours" : "სამუშაო საათები",
      whyTitle: lang === "en" ? "Why Choose Luna?" : "რატომ Luna?",
      whyItems:
        lang === "en"
          ? [
              "Certified and experienced professionals",
              "Premium quality products",
              "Relaxing and luxurious atmosphere",
              "Personalized beauty consultations",
              "Flexible appointment scheduling",
            ]
          : [
              "სერტიფიცირებული და გამოცდილი სპეციალისტები",
              "პრემიუმ ხარისხის პროდუქცია",
              "მყუდრო და ლუქს ატმოსფერო",
              "ინდივიდუალური კონსულტაცია",
              "მოქნილი ჯავშნის გრაფიკი",
            ],
      formTitle: lang === "en" ? "Book Your Appointment" : "ვიზიტის დაჯავშნა",
      nameLabel: lang === "en" ? "Your Name" : "სახელი",
      phoneFormLabel: lang === "en" ? "Phone Number" : "ტელეფონი",
      emailLabel: lang === "en" ? "Email Address" : "ელ-ფოსტა",
      serviceLabel: lang === "en" ? "Service Interested In" : "სასურველი სერვისი",
      messageLabel: lang === "en" ? "Message (Optional)" : "შეტყობინება (არასავალდებულო)",
      placeholders: {
        name: lang === "en" ? "Jane Doe" : "ნინო კახიძე",
        phone: lang === "en" ? "+1 (555) 000-0000" : "+995 5XX XXX XXX",
        email: lang === "en" ? "jane@example.com" : "nino@example.com",
        service: lang === "en" ? "Hair styling, nails, makeup..." : "თმა, ფრჩხილები, მაკიაჟი...",
        message:
          lang === "en"
            ? "Any special requests or questions?"
            : "გაქვს რაიმე კითხვა ან სურვილი?",
      },
      submit: lang === "en" ? "Book Appointment" : "დაჯავშნა",
    },

    footer: {
      desc:
        lang === "en"
          ? "Where your beauty journey begins. Experience luxury, expertise, and personalized care."
          : "სადაც შენი სილამაზის გზა იწყება. ლუქსი, გამოცდილება და ინდივიდუალური ზრუნვა.",
      rights:
        lang === "en"
          ? "© 2024 Luna Beauty Studio. All rights reserved."
          : "© 2024 Luna Beauty Studio. ყველა უფლება დაცულია.",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-purple-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-pink-100 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2 shrink-0">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>

              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
                className="text-2xl font-semibold text-gray-900"
              >
                {copy.brand}
              </button>
            </div>

            <Link
              to="/#portfolio"
              className="hidden lg:inline-flex items-center text-sm font-medium text-gray-600 hover:text-pink-600 transition-colors"
            >
              {copy.back}
            </Link>

            <nav className="hidden lg:flex items-center gap-6 whitespace-nowrap">
              <a href="#services" className="text-sm text-gray-600 hover:text-pink-600 transition-colors whitespace-nowrap px-2">
                {copy.nav.services}
              </a>
              <a href="#about" className="text-sm text-gray-600 hover:text-pink-600 transition-colors whitespace-nowrap px-2">
                {copy.nav.about}
              </a>
              <a href="#gallery" className="text-sm text-gray-600 hover:text-pink-600 transition-colors whitespace-nowrap px-2">
                {copy.nav.gallery}
              </a>
              <a href="#contact" className="text-sm text-gray-600 hover:text-pink-600 transition-colors whitespace-nowrap px-2">
                {copy.nav.contact}
              </a>
            </nav>

            <div className="flex items-center gap-3 shrink-0 whitespace-nowrap">
              {/* Language Switch */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => setLang("en")}
                  className={`px-3 py-1 rounded-md text-sm font-medium ${
                    lang === "en" ? "bg-pink-500 text-white" : "bg-gray-200 text-gray-700"
                  }`}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLang("ka")}
                  className={`px-3 py-1 rounded-md text-sm font-medium ${
                    lang === "ka" ? "bg-pink-500 text-white" : "bg-gray-200 text-gray-700"
                  }`}
                >
                  KA
                </button>
              </div>

              <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600">
                {copy.headerCta}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 text-pink-700 text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                <span>{copy.hero.badge}</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="text-gray-900">{copy.hero.titleTop}</span>
                <br />
                <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  {copy.hero.titleAccent}
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">{copy.hero.desc}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 h-14 px-8 text-lg"
                >
                  {copy.hero.ctaPrimary}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 text-lg border-2 border-pink-300 text-pink-700 hover:bg-pink-50"
                >
                  {copy.hero.ctaSecondary}
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div>
                  <p className="text-3xl font-bold text-gray-900">500+</p>
                  <p className="text-sm text-gray-600">{copy.hero.stats.a}</p>
                </div>
                <div className="w-px h-12 bg-gray-300" />
                <div>
                  <p className="text-3xl font-bold text-gray-900">10+</p>
                  <p className="text-sm text-gray-600">{copy.hero.stats.b}</p>
                </div>
                <div className="w-px h-12 bg-gray-300" />
                <div>
                  <p className="text-3xl font-bold text-gray-900">5★</p>
                  <p className="text-sm text-gray-600">{copy.hero.stats.c}</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt={copy.hero.heroImgAlt}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                <p className="text-sm text-gray-600 mb-2">{copy.hero.next.label}</p>
                <p className="text-lg font-semibold text-gray-900">{copy.hero.next.value}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {copy.services.title.a}
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                {copy.services.title.b}
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{copy.services.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {copy.services.cards.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <button className="text-pink-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  {copy.services.learnMore}
                  <span>→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                {copy.about.title.a}
                <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  {copy.about.title.b}
                </span>
                {copy.about.title.c}
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">{copy.about.p1}</p>
              <p className="text-lg text-gray-600 leading-relaxed">{copy.about.p2}</p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <p className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    10+
                  </p>
                  <p className="text-gray-600">{copy.about.stat1}</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <p className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    100%
                  </p>
                  <p className="text-gray-600">{copy.about.stat2}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.pexels.com/photos/3992876/pexels-photo-3992876.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt={copy.about.imgAlt.a}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.pexels.com/photos/3993212/pexels-photo-3993212.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt={copy.about.imgAlt.b}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.pexels.com/photos/3992857/pexels-photo-3992857.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt={copy.about.imgAlt.c}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt={copy.about.imgAlt.d}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {copy.gallery.title.a}
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                {copy.gallery.title.b}
              </span>
              {copy.gallery.title.c}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{copy.gallery.subtitle}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/3992860/pexels-photo-3992860.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/3993467/pexels-photo-3993467.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/3764537/pexels-photo-3764537.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/3993320/pexels-photo-3993320.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=600",
            ].map((image, index) => (
              <div
                key={index}
                className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <img
                  src={image}
                  alt={`${copy.gallery.imgAltPrefix} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {copy.contact.title.a}
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                {copy.contact.title.b}
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{copy.contact.subtitle}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">{copy.contact.infoTitle}</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">{copy.contact.phoneLabel}</p>
                      <p className="text-lg font-semibold text-gray-900">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">{copy.contact.addressLabel}</p>
                      <p className="text-lg font-semibold text-gray-900">123 Beauty Avenue</p>
                      <p className="text-gray-600">
                        {lang === "en" ? "Downtown District, City 12345" : "ცენტრალური უბანი, ქალაქი 12345"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">{copy.contact.hoursLabel}</p>
                      <p className="text-lg font-semibold text-gray-900">
                        {lang === "en" ? "Mon - Sat: 9:00 AM - 7:00 PM" : "ორშ-შაბ: 09:00 - 19:00"}
                      </p>
                      <p className="text-gray-600">
                        {lang === "en" ? "Sunday: 10:00 AM - 5:00 PM" : "კვირა: 10:00 - 17:00"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{copy.contact.whyTitle}</h3>
                <ul className="space-y-3">
                  {copy.contact.whyItems.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center shrink-0">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">{copy.contact.formTitle}</h3>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{copy.contact.nameLabel}</label>
                  <Input placeholder={copy.contact.placeholders.name} className="h-12 border-gray-300 focus:border-pink-500" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{copy.contact.phoneFormLabel}</label>
                  <Input placeholder={copy.contact.placeholders.phone} className="h-12 border-gray-300 focus:border-pink-500" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{copy.contact.emailLabel}</label>
                  <Input type="email" placeholder={copy.contact.placeholders.email} className="h-12 border-gray-300 focus:border-pink-500" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{copy.contact.serviceLabel}</label>
                  <Input placeholder={copy.contact.placeholders.service} className="h-12 border-gray-300 focus:border-pink-500" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{copy.contact.messageLabel}</label>
                  <Textarea
                    placeholder={copy.contact.placeholders.message}
                    rows={4}
                    className="border-gray-300 focus:border-pink-500"
                  />
                </div>

                <Button className="w-full h-14 text-lg bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600">
                  {copy.contact.submit}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-semibold">{copy.brand}</span>
          </div>

          <p className="text-gray-400 mb-8 max-w-md mx-auto">{copy.footer.desc}</p>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500">{copy.footer.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BeautySalon;
