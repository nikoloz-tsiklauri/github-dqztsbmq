import { Phone, MessageCircle, Zap, Wrench, Clock, CheckCircle, Star, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const HeatingServices = () => {
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
              <span className="text-2xl font-bold text-slate-900">
                TbilisiHeat
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-slate-600 hover:text-blue-600 transition-colors">Services</a>
              <a href="#why-us" className="text-slate-600 hover:text-blue-600 transition-colors">Why Us</a>
              <a href="#projects" className="text-slate-600 hover:text-blue-600 transition-colors">Projects</a>
              <a href="#reviews" className="text-slate-600 hover:text-blue-600 transition-colors">Reviews</a>
              <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">Contact</a>
            </nav>
            <div className="flex items-center gap-3">
              <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 hidden sm:flex">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
              <Button variant="outline" className="hidden sm:flex border-blue-300 text-blue-600 hover:bg-blue-50">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
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
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-slate-900">
                Heating & Radiator Services in Tbilisi
                <span className="block text-blue-600">Fast, Reliable, Affordable</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Installation, maintenance, repair, and emergency heating solutions for residential and commercial properties. Same-day service available.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
                <div className="flex items-center gap-3 bg-blue-50 rounded-lg p-4">
                  <Clock className="w-5 h-5 text-blue-600 shrink-0" />
                  <span className="text-sm font-medium text-slate-700">Same-day visits</span>
                </div>
                <div className="flex items-center gap-3 bg-blue-50 rounded-lg p-4">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0" />
                  <span className="text-sm font-medium text-slate-700">Transparent pricing</span>
                </div>
                <div className="flex items-center gap-3 bg-blue-50 rounded-lg p-4">
                  <Star className="w-5 h-5 text-blue-600 shrink-0" />
                  <span className="text-sm font-medium text-slate-700">Expert technicians</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 h-14 px-8 text-lg">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
                <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 h-14 px-8 text-lg text-white">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Message
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div>
                  <p className="text-3xl font-bold text-slate-900">500+</p>
                  <p className="text-sm text-slate-600">Jobs Completed</p>
                </div>
                <div className="w-px h-12 bg-slate-300" />
                <div>
                  <p className="text-3xl font-bold text-slate-900">4.9★</p>
                  <p className="text-sm text-slate-600">Client Rating</p>
                </div>
                <div className="w-px h-12 bg-slate-300" />
                <div>
                  <p className="text-3xl font-bold text-slate-900">15+</p>
                  <p className="text-sm text-slate-600">Years Active</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional heating installation"
                  className="w-full h-full object-cover"
                />
              </div>
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

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our <span className="text-blue-600">Services</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Complete heating solutions for your home or business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Radiator Installation",
                description: "Professional installation of new radiators with expert placement for optimal heating efficiency.",
                color: "from-blue-400 to-blue-600"
              },
              {
                icon: Wrench,
                title: "Heating System Repair",
                description: "Quick diagnosis and repair of heating system issues, from faulty valves to pressure problems.",
                color: "from-cyan-400 to-cyan-600"
              },
              {
                icon: CheckCircle,
                title: "Maintenance & Cleaning",
                description: "Regular maintenance and radiator cleaning to ensure efficient operation and longevity.",
                color: "from-sky-400 to-sky-600"
              },
              {
                icon: Clock,
                title: "Boiler Diagnostics",
                description: "Advanced diagnostic testing to identify boiler issues and prevent costly breakdowns.",
                color: "from-blue-500 to-teal-500"
              },
              {
                icon: Phone,
                title: "Emergency Service",
                description: "24/7 emergency response for heating failures during winter months. No extra charge.",
                color: "from-red-400 to-orange-600"
              },
              {
                icon: MapPin,
                title: "System Replacement",
                description: "Complete heating system upgrades with modern, efficient boilers and radiators.",
                color: "from-green-400 to-emerald-600"
              }
            ].map((service, index) => (
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

      {/* Why Choose Us */}
      <section id="why-us" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Why Choose <span className="text-blue-600">TbilisiHeat</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Trusted by hundreds of customers in Tbilisi
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                {
                  title: "Fast Response Time",
                  description: "Average response time of 2 hours. Emergency calls available 24/7."
                },
                {
                  title: "Skilled Team",
                  description: "All technicians are certified with 10+ years of experience in heating systems."
                },
                {
                  title: "Honest Pricing",
                  description: "Transparent quotes with no hidden fees. We discuss costs before starting work."
                },
                {
                  title: "Clean Work",
                  description: "We respect your home. Cleanup and proper disposal of old materials included."
                }
              ].map((point, index) => (
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
              <h3 className="text-3xl font-bold text-slate-900 mb-8">Our Achievements</h3>
              <div className="space-y-8">
                <div className="border-b border-slate-200 pb-6">
                  <p className="text-4xl font-bold text-blue-600 mb-2">500+</p>
                  <p className="text-slate-600">Successful projects completed</p>
                </div>
                <div className="border-b border-slate-200 pb-6">
                  <p className="text-4xl font-bold text-blue-600 mb-2">4.9/5</p>
                  <p className="text-slate-600">Average customer rating</p>
                </div>
                <div className="border-b border-slate-200 pb-6">
                  <p className="text-4xl font-bold text-blue-600 mb-2">15+</p>
                  <p className="text-slate-600">Years of trusted service</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-blue-600 mb-2">All Tbilisi</p>
                  <p className="text-slate-600">Service coverage area</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section id="projects" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Recent <span className="text-blue-600">Projects</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              See what our clients are saying about our work
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Apartment Radiator Replacement",
                result: "Completed in 1 day with zero disruption to resident's schedule.",
                image: "https://images.pexels.com/photos/5632395/pexels-photo-5632395.jpeg?auto=compress&cs=tinysrgb&w=600"
              },
              {
                title: "Office Building Heating Upgrade",
                result: "Full system upgrade for 20-office building. Energy efficiency increased by 30%.",
                image: "https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&w=600"
              },
              {
                title: "Emergency Boiler Repair",
                result: "24-hour emergency response restored heating in winter. Customer very satisfied.",
                image: "https://images.pexels.com/photos/5632398/pexels-photo-5632398.jpeg?auto=compress&cs=tinysrgb&w=600"
              }
            ].map((project, index) => (
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
              Client <span className="text-blue-600">Reviews</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              What our customers say about our service
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: "Giorgi M.",
                rating: 5,
                text: "Professional, fast, and affordable. They fixed my heating system in less than 2 hours. Highly recommended!",
              },
              {
                name: "Natalia K.",
                rating: 5,
                text: "Excellent work on our office radiators. The team was clean and respectful. Will definitely call them again.",
              },
              {
                name: "David L.",
                rating: 5,
                text: "Best heating service in Tbilisi. They came at night for an emergency, fixed everything, and charged fairly.",
              }
            ].map((review, index) => (
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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Get Your Free <span className="text-blue-600">Quote</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Call us or fill out the form below. We'll respond within 2 hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-slate-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 mb-1">Phone</p>
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
                      <p className="text-sm text-slate-600 mb-1">Service Area</p>
                      <p className="text-lg font-semibold text-slate-900">All of Tbilisi</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 mb-1">Hours</p>
                      <p className="text-lg font-semibold text-slate-900">Mon-Sun: 8:00 AM - 10:00 PM</p>
                      <p className="text-sm text-slate-600">24/7 Emergency Available</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-100">
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Why Call Now?</h3>
                <ul className="space-y-3">
                  {[
                    "Free quote with no obligation",
                    "Same-day service available",
                    "Transparent, honest pricing",
                    "24/7 emergency support",
                    "5-year warranty on work"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-slate-100">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Quick Quote Request</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Your Name *</label>
                  <Input
                    placeholder="Full name"
                    className="h-12 border-slate-300 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
                  <Input
                    placeholder="+995 5XX XXX XXX"
                    className="h-12 border-slate-300 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Address/Area *</label>
                  <Input
                    placeholder="District or street name"
                    className="h-12 border-slate-300 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Service Needed *</label>
                  <Input
                    placeholder="e.g., Radiator installation, boiler repair..."
                    className="h-12 border-slate-300 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Additional Details</label>
                  <Textarea
                    placeholder="Any specific issues or preferences?"
                    rows={4}
                    className="border-slate-300 focus:border-blue-500"
                  />
                </div>
                <Button className="w-full h-14 text-lg bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600">
                  Get Free Quote
                </Button>
                <p className="text-xs text-slate-500 text-center">
                  We'll contact you within 2 hours during business hours.
                </p>
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
            <span className="text-2xl font-bold">TbilisiHeat</span>
          </div>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Professional heating and radiator services for Tbilisi. Fast, reliable, affordable.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8 text-sm">
            <div>
              <p className="text-gray-400 mb-1">Phone</p>
              <p className="font-semibold">+995 555 123 456</p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">WhatsApp</p>
              <p className="font-semibold">+995 555 123 456</p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">Hours</p>
              <p className="font-semibold">24/7 Available</p>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8">
            <p className="text-gray-500">
              © 2024 TbilisiHeat. All rights reserved. | Heating services in Tbilisi, Georgia.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HeatingServices;
