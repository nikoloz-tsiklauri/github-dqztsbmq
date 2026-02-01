import {
  Phone,
  MessageCircle,
  Zap,
  Wrench,
  Clock,
  CheckCircle,
  Star,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import DemoLanguageToggle from "@/components/DemoLanguageToggle";

const HeatingServices = () => {
  const { language } = useLanguage();

  const copy =
    language === "en"
      ? {
          brand: "TbilisiHeat",
          back: "← Back to Portfolio",
          nav: {
            services: "Services",
            why: "Why Us",
            projects: "Projects",
            reviews: "Reviews",
            contact: "Contact",
          },
          btns: {
            call: "Call Now",
            wa: "WhatsApp",
            waMsg: "WhatsApp Message",
            quote: "Get Free Quote",
          },
          hero: {
            title: "Heating & Radiator Services in Tbilisi",
            subtitle: "Fast, Reliable, Affordable",
            desc:
              "Installation, maintenance, repair, and emergency heating solutions for residential and commercial properties. Same-day service available.",
            badges: ["Same-day visits", "Transparent pricing", "Expert technicians"],
            stats: [
              { value: "500+", label: "Jobs Completed" },
              { value: "4.9★", label: "Client Rating" },
              { value: "15+", label: "Years Active" },
            ],
          },
          sections: {
            servicesTitle: "Our Services",
            servicesSub: "Complete heating solutions for your home or business",
            whyTitle: "Why Choose TbilisiHeat",
            whySub: "Trusted by hundreds of customers in Tbilisi",
            achievements: "Our Achievements",
            projectsTitle: "Recent Projects",
            projectsSub: "See what our clients are saying about our work",
            reviewsTitle: "Client Reviews",
            reviewsSub: "What our customers say about our service",
            contactTitle: "Get Your Free Quote",
            contactSub: "Call us or fill out the form below. We'll respond within 2 hours.",
            contactInfo: "Contact Information",
            whyCallNow: "Why Call Now?",
            quickQuote: "Quick Quote Request",
            footerDesc:
              "Professional heating and radiator services for Tbilisi. Fast, reliable, affordable.",
          },
          form: {
            name: "Your Name *",
            phone: "Phone Number *",
            area: "Address/Area *",
            service: "Service Needed *",
            details: "Additional Details",
            placeholders: {
              name: "Full name",
              phone: "+995 5XX XXX XXX",
              area: "District or street name",
              service: "e.g., Radiator installation, boiler repair...",
              details: "Any specific issues or preferences?",
            },
            note: "We'll contact you within 2 hours during business hours.",
          },
          services: [
            {
              icon: Zap,
              title: "Radiator Installation",
              description:
                "Professional installation of new radiators with expert placement for optimal heating efficiency.",
              color: "from-blue-400 to-blue-600",
            },
            {
              icon: Wrench,
              title: "Heating System Repair",
              description:
                "Quick diagnosis and repair of heating system issues, from faulty valves to pressure problems.",
              color: "from-cyan-400 to-cyan-600",
            },
            {
              icon: CheckCircle,
              title: "Maintenance & Cleaning",
              description:
                "Regular maintenance and radiator cleaning to ensure efficient operation and longevity.",
              color: "from-sky-400 to-sky-600",
            },
            {
              icon: Clock,
              title: "Boiler Diagnostics",
              description:
                "Advanced diagnostic testing to identify boiler issues and prevent costly breakdowns.",
              color: "from-blue-500 to-teal-500",
            },
            {
              icon: Phone,
              title: "Emergency Service",
              description:
                "24/7 emergency response for heating failures during winter months. No extra charge.",
              color: "from-red-400 to-orange-600",
            },
            {
              icon: MapPin,
              title: "System Replacement",
              description:
                "Complete heating system upgrades with modern, efficient boilers and radiators.",
              color: "from-green-400 to-emerald-600",
            },
          ],
          whyPoints: [
            {
              title: "Fast Response Time",
              description: "Average response time of 2 hours. Emergency calls available 24/7.",
            },
            {
              title: "Skilled Team",
              description: "All technicians are certified with 10+ years of experience in heating systems.",
            },
            {
              title: "Honest Pricing",
              description: "Transparent quotes with no hidden fees. We discuss costs before starting work.",
            },
            {
              title: "Clean Work",
              description: "We respect your home. Cleanup and proper disposal of old materials included.",
            },
          ],
          projects: [
            {
              title: "Apartment Radiator Replacement",
              result: "Completed in 1 day with zero disruption to resident's schedule.",
              image:
                "https://images.pexels.com/photos/5632395/pexels-photo-5632395.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
              title: "Office Building Heating Upgrade",
              result:
                "Full system upgrade for 20-office building. Energy efficiency increased by 30%.",
              image:
                "https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
              title: "Emergency Boiler Repair",
              result:
                "24-hour emergency response restored heating in winter. Customer very satisfied.",
              image:
                "https://images.pexels.com/photos/5632398/pexels-photo-5632398.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
          ],
          reviews: [
            {
              name: "Giorgi M.",
              rating: 5,
              text:
                "Professional, fast, and affordable. They fixed my heating system in less than 2 hours. Highly recommended!",
            },
            {
              name: "Natalia K.",
              rating: 5,
              text:
                "Excellent work on our office radiators. The team was clean and respectful. Will definitely call them again.",
            },
            {
              name: "David L.",
              rating: 5,
              text:
                "Best heating service in Tbilisi. They came at night for an emergency, fixed everything, and charged fairly.",
            },
          ],
          bullets: [
            "Free quote with no obligation",
            "Same-day service available",
            "Transparent, honest pricing",
            "24/7 emergency support",
            "5-year warranty on work",
          ],
        }
      : {
          brand: "TbilisiHeat",
          back: "← პორტფოლიოზე დაბრუნება",
          nav: {
            services: "სერვისები",
            why: "რატომ ჩვენ",
            projects: "პროექტები",
            reviews: "შეფასებები",
            contact: "კონტაქტი",
          },
          btns: {
            call: "დარეკვა",
            wa: "WhatsApp",
            waMsg: "WhatsApp შეტყობინება",
            quote: "უფასო ფასის მოთხოვნა",
          },
          hero: {
            title: "გათბობის და რადიატორების სერვისი თბილისში",
            subtitle: "სწრაფი, სანდო, ხელმისაწვდომი",
            desc:
              "მონტაჟი, რეგულარული მომსახურება, შეკეთება და საგანგებო დახმარება საცხოვრებელი და კომერციული ობიექტებისთვის. შესაძლებელია ვიზიტი იმავე დღეს.",
            badges: ["ვიზიტი იმავე დღეს", "გამჭვირვალე ფასები", "გამოცდილი სპეციალისტები"],
            stats: [
              { value: "500+", label: "შესრულებული შეკვეთა" },
              { value: "4.9★", label: "კლიენტის შეფასება" },
              { value: "15+", label: "წლის გამოცდილება" },
            ],
          },
          sections: {
            servicesTitle: "ჩვენი სერვისები",
            servicesSub: "სრული გათბობის გადაწყვეტილებები სახლისა და ბიზნესისთვის",
            whyTitle: "რატომ TbilisiHeat",
            whySub: "ნდობით სარგებლობს ასობით კლიენტი თბილისში",
            achievements: "ჩვენი შედეგები",
            projectsTitle: "ბოლო პროექტები",
            projectsSub: "ნახე ჩვენი ნამუშევრების მაგალითები",
            reviewsTitle: "კლიენტების შეფასებები",
            reviewsSub: "რას ამბობენ მომხმარებლები ჩვენს სერვისზე",
            contactTitle: "მოითხოვე უფასო შეთავაზება",
            contactSub: "დაგვირეკე ან შეავსე ფორმა — 2 საათში დაგიკავშირდებით.",
            contactInfo: "საკონტაქტო ინფორმაცია",
            whyCallNow: "რატომ დაგვირეკო ახლა?",
            quickQuote: "სწრაფი მოთხოვნის ფორმა",
            footerDesc:
              "გათბობისა და რადიატორების პროფესიონალური სერვისი თბილისში. სწრაფი, სანდო, ხელმისაწვდომი.",
          },
          form: {
            name: "სახელი და გვარი *",
            phone: "ტელეფონი *",
            area: "მისამართი/უბანი *",
            service: "რა სერვისი გჭირდებათ *",
            details: "დამატებითი დეტალები",
            placeholders: {
              name: "სრული სახელი",
              phone: "+995 5XX XXX XXX",
              area: "უბანი ან ქუჩა",
              service: "მაგ: რადიატორის მონტაჟი, ქვაბის დიაგნოსტიკა...",
              details: "დამატებითი ინფორმაცია (სურვილისამებრ)",
            },
            note: "სამუშაო საათებში 2 საათის განმავლობაში დაგიკავშირდებით.",
          },
          services: [
            {
              icon: Zap,
              title: "რადიატორის მონტაჟი",
              description:
                "ახალი რადიატორების პროფესიონალური მონტაჟი სწორი განლაგებით და ეფექტურობის მაქსიმიზაციით.",
              color: "from-blue-400 to-blue-600",
            },
            {
              icon: Wrench,
              title: "გათბობის სისტემის შეკეთება",
              description:
                "სწრაფი დიაგნოსტიკა და შეკეთება — სარქველები, წნევა, გაჟონვა და სხვა პრობლემები.",
              color: "from-cyan-400 to-cyan-600",
            },
            {
              icon: CheckCircle,
              title: "მოვლა და წმენდა",
              description:
                "რეგულარული მოვლა/წმენდა სისტემის ეფექტურობისა და ხანგრძლივობისთვის.",
              color: "from-sky-400 to-sky-600",
            },
            {
              icon: Clock,
              title: "ქვაბის დიაგნოსტიკა",
              description:
                "დიაგნოსტიკა პრობლემების დროულად გამოსავლენად და დიდი ხარჯების თავიდან ასაცილებლად.",
              color: "from-blue-500 to-teal-500",
            },
            {
              icon: Phone,
              title: "საგანგებო სერვისი",
              description:
                "24/7 რეაგირება ზამთარში გათბობის მწყობრიდან გამოსვლისას. დამატებითი საფასურის გარეშე.",
              color: "from-red-400 to-orange-600",
            },
            {
              icon: MapPin,
              title: "სისტემის განახლება",
              description:
                "სრული სისტემის ჩანაცვლება/განახლება თანამედროვე, ენერგოეფექტური მოწყობილობებით.",
              color: "from-green-400 to-emerald-600",
            },
          ],
          whyPoints: [
            {
              title: "სწრაფი რეაგირება",
              description: "საშუალო რეაგირება 2 საათი. საგანგებო გამოძახება 24/7.",
            },
            {
              title: "კვალიფიციური გუნდი",
              description: "სერტიფიცირებული სპეციალისტები 10+ წლიანი გამოცდილებით.",
            },
            {
              title: "პატიოსანი ფასები",
              description: "ფასი წინასწარ გეთანხმება — უხილავი გადასახადების გარეშე.",
            },
            {
              title: "სუფთა სამუშაო",
              description: "ვუფრთხილდებით სახლს — სამუშაოს შემდეგ ყველაფერს ვალაგებთ.",
            },
          ],
          projects: [
            {
              title: "ბინაში რადიატორის ჩანაცვლება",
              result: "დასრულდა 1 დღეში მინიმალური დისკომფორტით.",
              image:
                "https://images.pexels.com/photos/5632395/pexels-photo-5632395.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
              title: "ოფისის გათბობის განახლება",
              result: "სრული განახლება 20 ოფისისთვის — ენერგოეფექტურობა +30%.",
              image:
                "https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
            {
              title: "საგანგებო ქვაბის შეკეთება",
              result: "სწრაფი რეაგირება ღამით — გათბობა აღდგა და კლიენტი კმაყოფილია.",
              image:
                "https://images.pexels.com/photos/5632398/pexels-photo-5632398.jpeg?auto=compress&cs=tinysrgb&w=600",
            },
          ],
          reviews: [
            {
              name: "გიორგი მ.",
              rating: 5,
              text:
                "პროფესიონალური, სწრაფი და ხელმისაწვდომი. 2 საათში ყველაფერი მოაგვარეს — გირჩევთ!",
            },
            {
              name: "ნატალია კ.",
              rating: 5,
              text:
                "ძალიან სუფთა და ხარისხიანი სამუშაო. ისევ აუცილებლად დაგვჭირდება.",
            },
            {
              name: "დავით ლ.",
              rating: 5,
              text:
                "საუკეთესო სერვისი თბილისში. საგანგებო გამოძახებაზე მოვიდნენ და სამართლიანი ფასი აიღეს.",
            },
          ],
          bullets: [
            "უფასო შეფასება",
            "ვიზიტი იმავე დღეს შესაძლებელია",
            "გამჭვირვალე ფასები",
            "24/7 საგანგებო მხარდაჭერა",
            "მუშაობაზე გარანტია",
          ],
        };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>

              {/* Logo scroll-to-top */}
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
                className="text-2xl font-bold text-slate-900"
              >
                {copy.brand}
              </button>
            </div>

            <Link
              to="/#portfolio"
              className="hidden md:inline-flex items-center text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              {copy.back}
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-slate-600 hover:text-blue-600 transition-colors">
                {copy.nav.services}
              </a>
              <a href="#why-us" className="text-slate-600 hover:text-blue-600 transition-colors">
                {copy.nav.why}
              </a>
              <a href="#projects" className="text-slate-600 hover:text-blue-600 transition-colors">
                {copy.nav.projects}
              </a>
              <a href="#reviews" className="text-slate-600 hover:text-blue-600 transition-colors">
                {copy.nav.reviews}
              </a>
              <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">
                {copy.nav.contact}
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <DemoLanguageToggle />
              <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 hidden sm:flex">
                <Phone className="w-4 h-4 mr-2" />
                {copy.btns.call}
              </Button>
              <Button variant="outline" className="hidden sm:flex border-blue-300 text-blue-600 hover:bg-blue-50">
                <MessageCircle className="w-4 h-4 mr-2" />
                {copy.btns.wa}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-slate-900">
                {copy.hero.title}
                <span className="block text-blue-600">{copy.hero.subtitle}</span>
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed">{copy.hero.desc}</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
                <div className="flex items-center gap-3 bg-blue-50 rounded-lg p-4">
                  <Clock className="w-5 h-5 text-blue-600 shrink-0" />
                  <span className="text-sm font-medium text-slate-700">{copy.hero.badges[0]}</span>
                </div>
                <div className="flex items-center gap-3 bg-blue-50 rounded-lg p-4">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0" />
                  <span className="text-sm font-medium text-slate-700">{copy.hero.badges[1]}</span>
                </div>
                <div className="flex items-center gap-3 bg-blue-50 rounded-lg p-4">
                  <Star className="w-5 h-5 text-blue-600 shrink-0" />
                  <span className="text-sm font-medium text-slate-700">{copy.hero.badges[2]}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 h-14 px-8 text-lg">
                  <Phone className="w-4 h-4 mr-2" />
                  {copy.btns.call}
                </Button>
                <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 h-14 px-8 text-lg text-white">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  {copy.btns.waMsg}
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                {copy.hero.stats.map((s, idx) => (
                  <div key={idx} className="flex items-center gap-8">
                    <div>
                      <p className="text-3xl font-bold text-slate-900">{s.value}</p>
                      <p className="text-sm text-slate-600">{s.label}</p>
                    </div>
                    {idx !== copy.hero.stats.length - 1 && <div className="w-px h-12 bg-slate-300" />}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                {/* შენს public-ში დევს heating-hero.jpg */}
                <img
                  src="/heating-hero.png"
                  alt="Heating technician working on radiator"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* თუ აღარ გინდა ეს ბეიჯი — უბრალოდ წაშალე ეს div */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span className="text-sm text-slate-600">Available</span>
                </div>
                <p className="text-lg font-semibold text-slate-900">24/7 Emergency Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              {copy.sections.servicesTitle} <span className="text-blue-600"></span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">{copy.sections.servicesSub}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {copy.services.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why-us" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              {copy.sections.whyTitle.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-blue-600">{copy.sections.whyTitle.split(" ").slice(-1).join(" ")}</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">{copy.sections.whySub}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {copy.whyPoints.map((point, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">{point.title}</h3>
                      <p className="text-slate-600">{point.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-2xl">
              <h3 className="text-3xl font-bold text-slate-900 mb-8">{copy.sections.achievements}</h3>
              <div className="space-y-8">
                <div className="border-b border-slate-200 pb-6">
                  <p className="text-4xl font-bold text-blue-600 mb-2">500+</p>
                  <p className="text-slate-600">{language === "en" ? "Successful projects completed" : "წარმატებით შესრულებული პროექტი"}</p>
                </div>
                <div className="border-b border-slate-200 pb-6">
                  <p className="text-4xl font-bold text-blue-600 mb-2">4.9/5</p>
                  <p className="text-slate-600">{language === "en" ? "Average customer rating" : "საშუალო შეფასება"}</p>
                </div>
                <div className="border-b border-slate-200 pb-6">
                  <p className="text-4xl font-bold text-blue-600 mb-2">15+</p>
                  <p className="text-slate-600">{language === "en" ? "Years of trusted service" : "წლის გამოცდილება"}</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-blue-600 mb-2">{language === "en" ? "All Tbilisi" : "თბილისი"}</p>
                  <p className="text-slate-600">{language === "en" ? "Service coverage area" : "სერვისის არეალი"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              {copy.sections.projectsTitle.split(" ")[0]}{" "}
              <span className="text-blue-600">{copy.sections.projectsTitle.split(" ").slice(1).join(" ")}</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">{copy.sections.projectsSub}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {copy.projects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{project.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{project.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              {copy.sections.reviewsTitle.split(" ")[0]}{" "}
              <span className="text-blue-600">{copy.sections.reviewsTitle.split(" ").slice(1).join(" ")}</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">{copy.sections.reviewsSub}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {copy.reviews.map((review, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">"{review.text}"</p>
                <p className="font-semibold text-slate-900">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              {copy.sections.contactTitle.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-blue-600">{copy.sections.contactTitle.split(" ").slice(-1).join(" ")}</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">{copy.sections.contactSub}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-slate-900 mb-6">{copy.sections.contactInfo}</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 mb-1">{language === "en" ? "Phone" : "ტელეფონი"}</p>
                      <p className="text-lg font-semibold text-slate-900">+995 555 123 456</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 mb-1">WhatsApp</p>
                      <p className="text-lg font-semibold text-slate-900">+995 555 123 456</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 mb-1">{language === "en" ? "Service Area" : "არეალი"}</p>
                      <p className="text-lg font-semibold text-slate-900">{language === "en" ? "All of Tbilisi" : "თბილისი"}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 mb-1">{language === "en" ? "Hours" : "საათები"}</p>
                      <p className="text-lg font-semibold text-slate-900">{language === "en" ? "Mon-Sun: 8:00 AM - 10:00 PM" : "ორშ-კვი: 08:00 - 22:00"}</p>
                      <p className="text-sm text-slate-600">{language === "en" ? "24/7 Emergency Available" : "საგანგებო 24/7"}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-100">
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">{copy.sections.whyCallNow}</h3>
                <ul className="space-y-3">
                  {copy.bullets.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-slate-100">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">{copy.sections.quickQuote}</h3>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{copy.form.name}</label>
                  <Input placeholder={copy.form.placeholders.name} className="h-12 border-slate-300 focus:border-blue-500" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{copy.form.phone}</label>
                  <Input placeholder={copy.form.placeholders.phone} className="h-12 border-slate-300 focus:border-blue-500" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{copy.form.area}</label>
                  <Input placeholder={copy.form.placeholders.area} className="h-12 border-slate-300 focus:border-blue-500" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{copy.form.service}</label>
                  <Input placeholder={copy.form.placeholders.service} className="h-12 border-slate-300 focus:border-blue-500" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{copy.form.details}</label>
                  <Textarea placeholder={copy.form.placeholders.details} rows={4} className="border-slate-300 focus:border-blue-500" />
                </div>

                <Button className="w-full h-14 text-lg bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600">
                  {copy.btns.quote}
                </Button>

                <p className="text-xs text-slate-500 text-center">{copy.form.note}</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold">{copy.brand}</span>
          </div>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">{copy.sections.footerDesc}</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8 text-sm">
            <div>
              <p className="text-gray-400 mb-1">{language === "en" ? "Phone" : "ტელეფონი"}</p>
              <p className="font-semibold">+995 555 123 456</p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">WhatsApp</p>
              <p className="font-semibold">+995 555 123 456</p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">{language === "en" ? "Hours" : "საათები"}</p>
              <p className="font-semibold">{language === "en" ? "24/7 Available" : "24/7"}</p>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <p className="text-gray-500">
              © 2024 {copy.brand}. {language === "en" ? "All rights reserved." : "ყველა უფლება დაცულია."}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HeatingServices;
