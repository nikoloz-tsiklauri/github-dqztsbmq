import { useEffect, useMemo, useState } from "react";
import {
  Phone,
  MessageCircle,
  Wrench,
  Car,
  Gauge,
  ShieldCheck,
  MapPin,
  Clock,
  Star,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";

type Lang = "en" | "ka";

const AutoServices = () => {
  const [lang, setLang] = useState<Lang>("en");

  // ყოველი გვერდის გახსნაზე ზევით აიყვანოს (გეხმარება იმ პრობლემაზეც რაც გქონდა scroll-ზე)
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const t = useMemo(() => {
    const dict = {
      en: {
        back: "← Back to Portfolio",
        nav: { services: "Services", why: "Why Us", location: "Location", contact: "Contact" },
        callNow: "Call Now",
        whatsapp: "WhatsApp",
        badge: "Trusted Auto Repair in Tbilisi",
        heroTitle: "Modern Auto Repair Service",
        heroSub: "Fast, Transparent, Professional",
        heroDesc:
          "Diagnostics, oil change, brakes, suspension, AC service, and more. Clear pricing, quick response, and reliable work — built for busy drivers.",
        perks: { slots: "Same-day slots", warranty: "Warranty on work", reviews: "5★ reviews" },
        cta: { quote: "Request a Quote", see: "See Services" },
        stats: { cars: "Cars serviced", years: "Years experience", rating: "Customer rating" },
        next: { label: "Next Available", time: "Today • 3:30 PM" },

        servicesTitle: "Our Services",
        servicesSub: "Everything your car needs — clean, fast, and done right.",
        serviceCards: [
          { title: "Diagnostics", desc: "Computer scan + full inspection to find issues fast." },
          { title: "Brake Repair", desc: "Pads, discs, fluid check, and safe stopping." },
          { title: "Oil & Filters", desc: "Oil change + filter replacement with recommended specs." },
          { title: "Suspension", desc: "Shocks, bushings, alignment checks and repairs." },
          { title: "Quick Service", desc: "Fast fixes for busy drivers — same-day options." },
          { title: "Pre-Purchase Check", desc: "Buy a car with confidence — detailed report." },
        ],

        whyTitle: "Why Choose AutoFix",
        whySub: "Transparent work, clear communication, and professional results.",
        whyCards: [
          { title: "Honest Quotes", desc: "We explain the problem and price before we start." },
          { title: "Quality Parts", desc: "Reliable parts and materials with warranty support." },
          { title: "Fast Turnaround", desc: "Same-day slots and quick diagnostics when possible." },
          { title: "Clean Service", desc: "Respect your car and keep the workspace tidy." },
        ],
        highlights: "Highlights",
        avgRating: "Average rating",
        serviced: "Cars serviced",
        yearsExp: "Years experience",
        area: "Service area",

        locationTitle: "Find Us",
        locationSub: "Easy to reach — convenient for quick drop-offs.",
        locationDetails: "Location Details",
        address: "Address",
        addressLine1: "Tbilisi, Georgia",
        addressLine2: "Near main road • Parking available",
        hours: "Hours",
        hoursLine1: "Mon–Sat: 10:00–19:00",
        hoursLine2: "Sunday: By request",
        mapPreview: "Map Preview",
        demoSection: "Demo section",
        mapPlaceholder: "Map Placeholder (can embed Google Map later)",

        contactTitle: "Request a Quote",
        contactSub: "Tell us what you need — we’ll reply quickly.",
        contactInfo: "Contact Info",
        whyCallNow: "Why Call Now?",
        bullets: [
          "Free quote — no obligation",
          "Transparent pricing",
          "Fast response",
          "Warranty on work",
          "Professional diagnostics",
        ],
        formTitle: "Quick Quote Form",
        name: "Name *",
        phone: "Phone *",
        carModel: "Car model *",
        issue: "Issue description",
        ph: {
          name: "Full name",
          phone: "+995 5XX XXX XXX",
          car: "e.g., Toyota Prius",
          issue: "Describe the issue (noise, warning light, etc.)",
        },
        send: "Send Request",
        demoForm: "Demo form (no real submission).",
        footer: "© 2024 AutoFix Garage. Demo website for portfolio showcase.",
      },

      ka: {
        back: "← პორტფოლიოზე დაბრუნება",
        nav: { services: "სერვისები", why: "რატომ ჩვენ", location: "ლოკაცია", contact: "კონტაქტი" },
        callNow: "დარეკვა",
        whatsapp: "WhatsApp",
        badge: "სანდო ავტოსერვისი თბილისში",
        heroTitle: "თანამედროვე ავტოსერვისი",
        heroSub: "სწრაფი, გამჭვირვალე, პროფესიონალური",
        heroDesc:
          "დიაგნოსტიკა, ზეთის შეცვლა, მუხრუჭები, სავალი ნაწილი, კონდიციონერი და სხვა. გასაგები ფასები, სწრაფი რეაგირება და ხარისხიანი სერვისი — დაკავებული მძღოლებისთვის.",
        perks: { slots: "დღესვე მიღება", warranty: "გარანტია სამუშაოზე", reviews: "5★ შეფასებები" },
        cta: { quote: "ფასის მოთხოვნა", see: "სერვისების ნახვა" },
        stats: { cars: "მომსახურებული მანქანა", years: "წლის გამოცდილება", rating: "კლიენტების შეფასება" },
        next: { label: "შემდეგი თავისუფალი დრო", time: "დღეს • 15:30" },

        servicesTitle: "ჩვენი სერვისები",
        servicesSub: "ყველაფერი რაც მანქანას სჭირდება — სუფთად, სწრაფად და სწორად.",
        serviceCards: [
          { title: "დიაგნოსტიკა", desc: "კომპიუტერული სკანირება + სრული შემოწმება პრობლემის სწრაფად დასადგენად." },
          { title: "მუხრუჭები", desc: "ხუნდები, დისკები, სითხე — უსაფრთხო დამუხრუჭებისთვის." },
          { title: "ზეთი და ფილტრები", desc: "ზეთის და ფილტრების შეცვლა რეკომენდებული სპეციფიკაციით." },
          { title: "სავალი ნაწილი", desc: "ამორტიზატორები, ბუშინგები, გასწორება და შეკეთება." },
          { title: "სწრაფი სერვისი", desc: "დაკავებული მძღოლებისთვის — სწრაფი სამუშაოები და დღესვე დროები." },
          { title: "ყიდვამდე შემოწმება", desc: "შეიძინე მანქანა მშვიდად — დეტალური რეპორტით." },
        ],

        whyTitle: "რატომ AutoFix",
        whySub: "გამჭვირვალე სამუშაო, სწორი კომუნიკაცია და პროფესიონალური შედეგი.",
        whyCards: [
          { title: "სწორი შეფასება", desc: "ვხსნით პრობლემას და ფასს დაწყებამდე." },
          { title: "ხარისხიანი ნაწილები", desc: "სანდო ნაწილები და გარანტიის მხარდაჭერა." },
          { title: "სწრაფი შესრულება", desc: "შეძლებისდაგვარად დღესვე და სწრაფი დიაგნოსტიკა." },
          { title: "სუფთა სერვისი", desc: "ვუფრთხილდებით მანქანას და ვმუშაობთ სუფთად." },
        ],
        highlights: "მთავარი მაჩვენებლები",
        avgRating: "საშ. შეფასება",
        serviced: "მომსახურებული მანქანა",
        yearsExp: "წლის გამოცდილება",
        area: "სამუშაო ზონა",

        locationTitle: "გვიპოვე",
        locationSub: "ადვილად მისადგომი — სწრაფი ჩამოსაბარებლად.",
        locationDetails: "ლოკაციის დეტალები",
        address: "მისამართი",
        addressLine1: "თბილისი, საქართველო",
        addressLine2: "მთავარ გზასთან ახლოს • პარკინგი ხელმისაწვდომია",
        hours: "საათი",
        hoursLine1: "ორშ–შაბ: 10:00–19:00",
        hoursLine2: "კვირა: შეთანხმებით",
        mapPreview: "რუკის ნახვა",
        demoSection: "დემო სექცია",
        mapPlaceholder: "რუკის ადგილი (შემდეგ Google Map-ს ჩასვამ)",

        contactTitle: "ფასის მოთხოვნა",
        contactSub: "მოგვწერე რა გჭირდება — სწრაფად გიპასუხებთ.",
        contactInfo: "კონტაქტი",
        whyCallNow: "რატომ დაგვირეკო ახლა?",
        bullets: [
          "უფასო შეფასება — ვალდებულების გარეშე",
          "გამჭვირვალე ფასები",
          "სწრაფი პასუხი",
          "გარანტია სამუშაოზე",
          "პროფესიონალური დიაგნოსტიკა",
        ],
        formTitle: "სწრაფი მოთხოვნის ფორმა",
        name: "სახელი *",
        phone: "ტელეფონი *",
        carModel: "მანქანის მოდელი *",
        issue: "პრობლემის აღწერა",
        ph: {
          name: "სახელი და გვარი",
          phone: "+995 5XX XXX XXX",
          car: "მაგ: Toyota Prius",
          issue: "აღწერე პრობლემა (ხმაური, ჩექის ნათურა და ა.შ.)",
        },
        send: "გაგზავნა",
        demoForm: "დემო ფორმა (რეალურად არ იგზავნება).",
        footer: "© 2024 AutoFix Garage. დემო ვებსაიტი პორტფოლიოსთვის.",
      },
    } as const;

    return dict[lang];
  }, [lang]);

  const serviceIcons = [Gauge, Wrench, Car, ShieldCheck, Clock, CheckCircle] as const;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/70 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
                <Wrench className="w-5 h-5 text-white" />
              </div>

              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
                className="text-2xl font-bold"
              >
                AutoFix <span className="text-orange-400">Garage</span>
              </button>
            </div>

            {/* Back to portfolio */}
            <Link
              to="/#portfolio"
              className="hidden md:inline-flex items-center text-sm font-medium text-slate-300 hover:text-orange-300 transition-colors"
            >
              {t.back}
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-slate-300 hover:text-white transition-colors">
                {t.nav.services}
              </a>
              <a href="#why-us" className="text-slate-300 hover:text-white transition-colors">
                {t.nav.why}
              </a>
              <a href="#location" className="text-slate-300 hover:text-white transition-colors">
                {t.nav.location}
              </a>
              <a href="#contact" className="text-slate-300 hover:text-white transition-colors">
                {t.nav.contact}
              </a>
            </nav>

            <div className="flex items-center gap-3">
              {/* Language switch */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setLang("en")}
                  className={`px-3 py-1 rounded-md text-sm font-medium ${
                    lang === "en" ? "bg-orange-500 text-white" : "bg-white/10 text-slate-200"
                  }`}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLang("ka")}
                  className={`px-3 py-1 rounded-md text-sm font-medium ${
                    lang === "ka" ? "bg-orange-500 text-white" : "bg-white/10 text-slate-200"
                  }`}
                >
                  KA
                </button>
              </div>

              <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 hidden sm:flex">
                <Phone className="w-4 h-4 mr-2" />
                {t.callNow}
              </Button>
              <Button
                variant="outline"
                className="hidden sm:flex border-orange-400/40 text-orange-200 hover:bg-orange-500/10"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                {t.whatsapp}
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-200 text-sm font-medium border border-orange-400/20">
                <Car className="w-4 h-4" />
                <span>{t.badge}</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                {t.heroTitle}
                <span className="block text-orange-400">{t.heroSub}</span>
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed">{t.heroDesc}</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
                <div className="flex items-center gap-3 bg-white/5 rounded-lg p-4 border border-white/10">
                  <Clock className="w-5 h-5 text-orange-300 shrink-0" />
                  <span className="text-sm font-medium text-slate-200">{t.perks.slots}</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 rounded-lg p-4 border border-white/10">
                  <ShieldCheck className="w-5 h-5 text-orange-300 shrink-0" />
                  <span className="text-sm font-medium text-slate-200">{t.perks.warranty}</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 rounded-lg p-4 border border-white/10">
                  <Star className="w-5 h-5 text-orange-300 shrink-0" />
                  <span className="text-sm font-medium text-slate-200">{t.perks.reviews}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 h-14 px-8 text-lg"
                >
                  {t.cta.quote}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 text-lg border-2 border-orange-400/40 text-orange-200 hover:bg-orange-500/10"
                >
                  {t.cta.see}
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div>
                  <p className="text-3xl font-bold">800+</p>
                  <p className="text-sm text-slate-300">{t.stats.cars}</p>
                </div>
                <div className="w-px h-12 bg-white/15" />
                <div>
                  <p className="text-3xl font-bold">15+</p>
                  <p className="text-sm text-slate-300">{t.stats.years}</p>
                </div>
                <div className="w-px h-12 bg-white/15" />
                <div>
                  <p className="text-3xl font-bold">4.9★</p>
                  <p className="text-sm text-slate-300">{t.stats.rating}</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="https://images.pexels.com/photos/4489733/pexels-photo-4489733.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Auto repair shop"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -right-6 bg-slate-950/80 rounded-2xl shadow-xl p-6 max-w-xs border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <Gauge className="w-5 h-5 text-orange-300" />
                  <span className="text-sm text-slate-300">{t.next.label}</span>
                </div>
                <p className="text-lg font-semibold">{t.next.time}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4 bg-slate-950/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t.servicesTitle} <span className="text-orange-400"></span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">{t.servicesSub}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.serviceCards.map((s, i) => {
              const Icon = serviceIcons[i] ?? Wrench;
              return (
                <div
                  key={i}
                  className="group bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-orange-400/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{s.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why-us" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t.whyTitle} <span className="text-orange-400"></span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">{t.whySub}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {t.whyCards.map((p, i) => (
                <div key={i} className="bg-white/5 rounded-2xl p-8 border border-white/10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                      <p className="text-slate-300">{p.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/5 rounded-3xl p-10 border border-white/10 shadow-2xl">
              <h3 className="text-3xl font-bold mb-8">{t.highlights}</h3>
              <div className="space-y-6">
                <div className="border-b border-white/10 pb-6">
                  <p className="text-4xl font-bold text-orange-400 mb-2">4.9/5</p>
                  <p className="text-slate-300">{t.avgRating}</p>
                </div>
                <div className="border-b border-white/10 pb-6">
                  <p className="text-4xl font-bold text-orange-400 mb-2">800+</p>
                  <p className="text-slate-300">{t.serviced}</p>
                </div>
                <div className="border-b border-white/10 pb-6">
                  <p className="text-4xl font-bold text-orange-400 mb-2">15+</p>
                  <p className="text-slate-300">{t.yearsExp}</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-orange-400 mb-2">Tbilisi</p>
                  <p className="text-slate-300">{t.area}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="py-20 px-4 bg-slate-950/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t.locationTitle} <span className="text-orange-400"></span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">{t.locationSub}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-stretch">
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-6">{t.locationDetails}</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-300 mb-1">{t.address}</p>
                    <p className="text-lg font-semibold">{t.addressLine1}</p>
                    <p className="text-slate-300">{t.addressLine2}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-300 mb-1">{t.hours}</p>
                    <p className="text-lg font-semibold">{t.hoursLine1}</p>
                    <p className="text-slate-300">{t.hoursLine2}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map-like card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl border border-white/10 overflow-hidden">
              <div className="p-6 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-orange-300" />
                  <span className="font-semibold">{t.mapPreview}</span>
                </div>
                <span className="text-xs text-slate-300">{t.demoSection}</span>
              </div>
              <div className="p-6">
                <div className="h-72 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300">
                  {t.mapPlaceholder}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t.contactTitle} <span className="text-orange-400"></span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">{t.contactSub}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-semibold mb-6">{t.contactInfo}</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-300 mb-1">{lang === "en" ? "Phone" : "ტელეფონი"}</p>
                      <p className="text-lg font-semibold">+995 555 123 456</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-300 mb-1">{t.whatsapp}</p>
                      <p className="text-lg font-semibold">+995 555 123 456</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-semibold mb-4">{t.whyCallNow}</h3>
                <ul className="space-y-3 text-slate-200">
                  {t.bullets.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-300 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-6">{t.formTitle}</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-200 mb-2">{t.name}</label>
                  <Input placeholder={t.ph.name} className="h-12 bg-white/5 border-white/10 text-white" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-200 mb-2">{t.phone}</label>
                  <Input placeholder={t.ph.phone} className="h-12 bg-white/5 border-white/10 text-white" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-200 mb-2">{t.carModel}</label>
                  <Input placeholder={t.ph.car} className="h-12 bg-white/5 border-white/10 text-white" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-200 mb-2">{t.issue}</label>
                  <Textarea
                    placeholder={t.ph.issue}
                    rows={4}
                    className="bg-white/5 border-white/10 text-white"
                  />
                </div>

                <Button className="w-full h-14 text-lg bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600">
                  {t.send}
                </Button>

                <p className="text-xs text-slate-400 text-center">{t.demoForm}</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-white/10 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400">{t.footer}</p>
        </div>
      </footer>
    </div>
  );
};

export default AutoServices;
