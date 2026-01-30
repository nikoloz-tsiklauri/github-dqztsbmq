import { Phone, MapPin, Clock, Sparkles, Scissors, Hand, Palette, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const BeautySalon = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-purple-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-semibold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Luna Beauty Studio
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-gray-600 hover:text-pink-600 transition-colors">Services</a>
              <a href="#about" className="text-gray-600 hover:text-pink-600 transition-colors">About</a>
              <a href="#gallery" className="text-gray-600 hover:text-pink-600 transition-colors">Gallery</a>
              <a href="#contact" className="text-gray-600 hover:text-pink-600 transition-colors">Contact</a>
            </nav>
            <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600">
              Book Now
            </Button>
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
                <span>Where Beauty Meets Confidence</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="text-gray-900">Discover Your</span>
                <br />
                <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Natural Beauty
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Experience luxury beauty treatments in a serene, welcoming environment.
                Our expert team is dedicated to making you look and feel your absolute best.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 h-14 px-8 text-lg">
                  Book Your Appointment
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-2 border-pink-300 text-pink-700 hover:bg-pink-50">
                  View Services
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <p className="text-3xl font-bold text-gray-900">500+</p>
                  <p className="text-sm text-gray-600">Happy Clients</p>
                </div>
                <div className="w-px h-12 bg-gray-300" />
                <div>
                  <p className="text-3xl font-bold text-gray-900">10+</p>
                  <p className="text-sm text-gray-600">Years Experience</p>
                </div>
                <div className="w-px h-12 bg-gray-300" />
                <div>
                  <p className="text-3xl font-bold text-gray-900">5★</p>
                  <p className="text-sm text-gray-600">Client Rating</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Beauty salon services"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                <p className="text-sm text-gray-600 mb-2">Next Available</p>
                <p className="text-lg font-semibold text-gray-900">Today at 2:00 PM</p>
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
              Our Premium <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From hair to nails, we offer a full range of beauty services to pamper you from head to toe.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Scissors,
                title: "Hair Styling",
                description: "Expert cuts, coloring, highlights, and treatments for all hair types.",
                color: "from-pink-400 to-pink-600"
              },
              {
                icon: Hand,
                title: "Nail Care",
                description: "Manicures, pedicures, gel nails, and artistic nail designs.",
                color: "from-purple-400 to-purple-600"
              },
              {
                icon: Palette,
                title: "Makeup",
                description: "Professional makeup for weddings, events, or everyday glamour.",
                color: "from-rose-400 to-rose-600"
              },
              {
                icon: Droplets,
                title: "Skincare",
                description: "Rejuvenating facials, peels, and customized skin treatments.",
                color: "from-fuchsia-400 to-fuchsia-600"
              }
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <button className="text-pink-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More
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
                Your <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Trusted</span> Beauty Partners
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Luna Beauty Studio has been serving our community for over 10 years. Our team of certified
                beauty professionals is passionate about helping you look and feel your best.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that beauty is personal, and every client deserves a customized experience.
                That's why we take the time to understand your unique needs and preferences, ensuring
                you leave our studio feeling confident and radiant.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <p className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    10+
                  </p>
                  <p className="text-gray-600">Expert Stylists</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <p className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    100%
                  </p>
                  <p className="text-gray-600">Premium Products</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.pexels.com/photos/3992876/pexels-photo-3992876.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Salon interior"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.pexels.com/photos/3993212/pexels-photo-3993212.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Beauty treatment"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.pexels.com/photos/3992857/pexels-photo-3992857.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Professional team"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Relaxing atmosphere"
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
              Our <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Work</span> Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our portfolio of transformations and see the artistry behind our services.
            </p>
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
              "https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=600"
            ].map((image, index) => (
              <div
                key={index}
                className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
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
              Get In <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to experience the Luna difference? Book your appointment today!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Phone</p>
                      <p className="text-lg font-semibold text-gray-900">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Address</p>
                      <p className="text-lg font-semibold text-gray-900">123 Beauty Avenue</p>
                      <p className="text-gray-600">Downtown District, City 12345</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Hours</p>
                      <p className="text-lg font-semibold text-gray-900">Mon - Sat: 9:00 AM - 7:00 PM</p>
                      <p className="text-gray-600">Sunday: 10:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Luna?</h3>
                <ul className="space-y-3">
                  {[
                    "Certified and experienced professionals",
                    "Premium quality products",
                    "Relaxing and luxurious atmosphere",
                    "Personalized beauty consultations",
                    "Flexible appointment scheduling"
                  ].map((item, index) => (
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
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Book Your Appointment</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <Input
                    placeholder="Jane Doe"
                    className="h-12 border-gray-300 focus:border-pink-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <Input
                    placeholder="+1 (555) 000-0000"
                    className="h-12 border-gray-300 focus:border-pink-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <Input
                    type="email"
                    placeholder="jane@example.com"
                    className="h-12 border-gray-300 focus:border-pink-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Interested In</label>
                  <Input
                    placeholder="Hair styling, nails, makeup..."
                    className="h-12 border-gray-300 focus:border-pink-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
                  <Textarea
                    placeholder="Any special requests or questions?"
                    rows={4}
                    className="border-gray-300 focus:border-pink-500"
                  />
                </div>
                <Button className="w-full h-14 text-lg bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600">
                  Book Appointment
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
            <span className="text-2xl font-semibold">Luna Beauty Studio</span>
          </div>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Where your beauty journey begins. Experience luxury, expertise, and personalized care.
          </p>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500">
              © 2024 Luna Beauty Studio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BeautySalon;
