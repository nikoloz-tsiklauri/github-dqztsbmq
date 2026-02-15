import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

type Language = 'en' | 'ka';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    'nav.services': 'Services',
    'nav.howItWorks': 'How It Works',
    'nav.whyWebsite': 'Why a Website',
    'nav.portfolio': 'Portfolio',
    'nav.testimonials': 'Testimonials',
    'nav.pricing': 'Pricing',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.getStarted': 'Get Started',

    // Hero
    'hero.badge': 'Modern Web Solutions for Georgian Businesses',
    'hero.headline': 'Modern Websites for',
    'hero.headlineHighlight': 'Small Businesses',
    'hero.headlineEnd': 'Fast, Affordable, Effective.',
    'hero.subheadline': 'We help local Georgian businesses get online with professional, high-converting websites built quickly using modern technology — without breaking the bank.',
    'hero.viewWork': 'View My Work',
    'hero.getDemo': 'Get a Free Website Demo',
    'hero.trustedBy': 'Trusted by local businesses across Georgia',
    'hero.projects': 'Projects Delivered',
    'hero.satisfaction': 'Client Satisfaction',
    'hero.delivery': 'Average Delivery',
    'hero.days': '5 Days',

    // Services
    'services.title': 'What We',
    'services.titleHighlight': 'Offer',
    'services.subtitle': 'Everything you need to establish a strong online presence and attract more customers.',
    'services.design.title': 'Website Design for Small Businesses',
    'services.design.desc': 'Clean, professional websites tailored to your business. We create designs that build trust with customers and clearly showcase what you offer.',
    'services.ai.title': 'AI-Powered Content & Images',
    'services.ai.desc': 'We use smart AI tools to create compelling content and stunning visuals for your website — saving time and keeping costs low without sacrificing quality.',
    'services.mobile.title': 'Mobile-Optimized & Fast Performance',
    'services.mobile.desc': 'Every website we build looks perfect on phones and tablets. Fast loading speeds mean your customers won\'t wait — and neither will search engines.',

    // How It Works
    'howItWorks.title': 'How It',
    'howItWorks.titleHighlight': 'Works',
    'howItWorks.subtitle': 'Getting your website is simple and stress-free. Here\'s how we work together:',
    'howItWorks.step1.title': 'Send Your Info',
    'howItWorks.step1.desc': 'Tell us about your business, services, and what you want to achieve online.',
    'howItWorks.step2.title': 'We Design',
    'howItWorks.step2.desc': 'We create a beautiful website tailored to your business and brand.',
    'howItWorks.step3.title': 'You Review',
    'howItWorks.step3.desc': 'See your website, suggest changes, and approve when you\'re happy.',
    'howItWorks.step4.title': 'Go Live!',
    'howItWorks.step4.desc': 'Your website launches and starts bringing in new customers.',

    // Why Website
    'whyWebsite.title': 'Why Your Business',
    'whyWebsite.titleHighlight': 'Needs a Website',
    'whyWebsite.desc1': 'In today\'s digital world, not having a website is like not having a phone number. Your customers expect to find you online — and if they can\'t, they\'ll find someone who is.',
    'whyWebsite.desc2': 'A well-designed website isn\'t just a digital business card. It\'s your most powerful marketing tool, working around the clock to attract new customers.',
    'whyWebsite.found.title': 'Be Found on Google',
    'whyWebsite.found.desc': 'When customers search for your services, they find you — not your competitors.',
    'whyWebsite.trust.title': 'Build Customer Trust',
    'whyWebsite.trust.desc': 'A professional website shows you\'re legitimate and serious about your business.',
    'whyWebsite.calls.title': 'Get More Calls',
    'whyWebsite.calls.desc': 'Your website works 24/7, attracting potential customers even while you sleep.',
    'whyWebsite.services.title': 'Show Your Services',
    'whyWebsite.services.desc': 'Give customers a clear view of what you offer and why they should choose you.',

    // Portfolio
    'portfolio.title': 'Our',
    'portfolio.titleHighlight': 'Portfolio',
    'portfolio.subtitle': 'Real websites we\'ve built for real businesses. Each project is crafted to meet unique business goals.',
    'portfolio.goal': 'Goal',
    'portfolio.result': 'Result',
    'portfolio.viewProject': 'View Project',
    'portfolio.cta': 'Want to see your business website here?',
    'portfolio.ctaButton': 'Start Your Project',

    // Testimonials
    'testimonials.title': 'What Clients',
    'testimonials.titleHighlight': 'Say',
    'testimonials.subtitle': 'Don\'t just take our word for it — hear from businesses we\'ve helped grow online.',

    // Pricing
    'pricing.title': 'Simple, Transparent',
    'pricing.titleHighlight': 'Pricing',
    'pricing.subtitle': 'No hidden fees, no surprises. Choose the package that fits your business needs.',
    'pricing.starter.name': 'Starter Website',
    'pricing.starter.desc': 'Perfect for small businesses just getting started online.',
    'pricing.starter.feature1': 'One-page professional website',
    'pricing.starter.feature2': 'Mobile-responsive design',
    'pricing.starter.feature3': 'Contact form integration',
    'pricing.starter.feature4': 'Basic SEO setup',
    'pricing.starter.feature5': 'Ready in 5 days',
    'pricing.business.name': 'Business Website',
    'pricing.business.desc': 'Complete solution for businesses ready to grow.',
    'pricing.business.feature1': 'Multi-page website (up to 5 pages)',
    'pricing.business.feature2': 'Premium responsive design',
    'pricing.business.feature3': 'Advanced contact forms',
    'pricing.business.feature4': 'Full SEO optimization',
    'pricing.business.feature5': 'Google Maps integration',
    'pricing.business.feature6': 'Image gallery',
    'pricing.business.feature7': '30 days of support',
    'pricing.popular': 'Most Popular',
    'pricing.oneTime': 'one-time',
    'pricing.getStarted': 'Get Started',
    'pricing.custom': 'Need something custom?',
    'pricing.customCta': 'Contact us',
    'pricing.customText': ' for a personalized quote tailored to your specific requirements.',

    // About
    'about.title': 'About',
    'about.titleHighlight': 'GeorgiaWeb',
    'about.intro': 'Hi, I\'m Gio — a young web developer based in Georgia with a passion for helping small businesses succeed online.',
    'about.desc1': 'I believe every local business deserves a professional online presence, regardless of their budget. That\'s why I leverage modern tools and AI technology to create beautiful, effective websites at affordable prices.',
    'about.desc2': 'My approach is simple: understand your business, create a website that truly represents what you do, and deliver it fast so you can start attracting customers right away.',
    'about.role': 'Web Developer & Designer',
    'about.experience': 'Years Exp.',
    'about.projects': 'Projects',
    'about.results': 'Results-Focused',
    'about.fast': 'Fast Delivery',
    'about.personal': 'Personal Touch',

    // Contact
    'contact.title': 'Let\'s Build Your',
    'contact.titleHighlight': 'Website',
    'contact.subtitle': 'Ready to take your business online? Get in touch and we\'ll create a free demo of what your website could look like.',
    'contact.formTitle': 'Send a Message',
    'contact.name': 'Your Name',
    'contact.namePlaceholder': 'John Doe',
    'contact.businessName': 'Business Name',
    'contact.businessPlaceholder': 'Your Business',
    'contact.contactField': 'Phone or Email',
    'contact.contactPlaceholder': '+995 555 123 456 or email@example.com',
    'contact.message': 'Tell us about your project',
    'contact.messagePlaceholder': 'What kind of website do you need? What services does your business offer?',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.sent': 'Message Sent!',
    'contact.whatsappTitle': 'Prefer WhatsApp?',
    'contact.whatsappDesc': 'Send us a message directly on WhatsApp for a quick response. We typically reply within a few hours.',
    'contact.whatsappButton': 'Chat on WhatsApp',
    'contact.freeDemo': 'Free Demo Included',
    'contact.freeDemoDesc': 'See a preview of your website before committing. No strings attached.',
    'contact.fastResponse': 'Fast Response',
    'contact.fastResponseDesc': 'We respond to all inquiries within 24 hours.',
    'contact.notSure': 'Not sure what kind of website you need? Message me and I\'ll suggest the best option for your business — free.',
    'contact.successTitle': 'Message sent!',
    'contact.successDesc': 'We\'ll get back to you within 24 hours.',

    // Footer
    'footer.tagline': 'Modern websites for small businesses in Georgia',
    'footer.basedIn': 'Based in Georgia 🇬🇪',
    'footer.rights': 'All rights reserved.',
    'footer.madeWith': 'Made with',
    'footer.inTbilisi': 'in Tbilisi',
  },
  ka: {
    // Header
    'nav.services': 'სერვისები',
    'nav.howItWorks': 'როგორ მუშაობს',
    'nav.whyWebsite': 'რატომ ვებსაიტი',
    'nav.portfolio': 'პორტფოლიო',
    'nav.testimonials': 'შეფასებები',
    'nav.pricing': 'ფასები',
    'nav.about': 'ჩვენ შესახებ',
    'nav.contact': 'კონტაქტი',
    'nav.getStarted': 'დაწყება',

    // Hero
    'hero.badge': 'თანამედროვე ვებ-გადაწყვეტები ქართული ბიზნესისთვის',
    'hero.headline': 'თანამედროვე ვებსაიტები',
    'hero.headlineHighlight': 'მცირე ბიზნესისთვის',
    'hero.headlineEnd': 'სწრაფად, ხელმისაწვდომად, ეფექტურად.',
    'hero.subheadline': 'ვეხმარებით ადგილობრივ ქართულ ბიზნესებს გახდნენ ხილვადი ონლაინ პროფესიონალური ვებსაიტებით, რომლებიც სწრაფად იქმნება თანამედროვე ტექნოლოგიებით.',
    'hero.viewWork': 'ნახე ჩემი ნამუშევრები',
    'hero.getDemo': 'მიიღე უფასო დემო',
    'hero.trustedBy': 'ენდობიან ადგილობრივი ბიზნესები მთელ საქართველოში',
    'hero.projects': 'შესრულებული პროექტები',
    'hero.satisfaction': 'კმაყოფილი კლიენტი',
    'hero.delivery': 'საშუალო დრო',
    'hero.days': '5 დღე',

    // Services
    'services.title': 'რას',
    'services.titleHighlight': 'ვთავაზობთ',
    'services.subtitle': 'ყველაფერი რაც გჭირდებათ ძლიერი ონლაინ პრეზენციისთვის და მეტი კლიენტის მოსაზიდად.',
    'services.design.title': 'ვებ-დიზაინი მცირე ბიზნესისთვის',
    'services.design.desc': 'სუფთა, პროფესიონალური ვებსაიტები თქვენს ბიზნესზე მორგებული. ვქმნით დიზაინებს, რომლებიც აშენებენ ნდობას და ნათლად აჩვენებენ თქვენს სერვისებს.',
    'services.ai.title': 'თანამედროვე კონტენტი და ვიზუალი',
    'services.ai.desc': 'ვწერთ მკაფიო ტექსტებს და ვარჩევთ ვიზუალებს, რომ თქვენი სერვისები მარტივად და დამაჯერებლად იყოს წარმოდგენილი. ყველაფერი ერთ სტილში — სუფთად და პროფესიონალურად.',
    'services.mobile.title': 'მობილურზე ოპტიმიზებული',
    'services.mobile.desc': 'ყველა ვებსაიტი იდეალურად გამოიყურება ტელეფონებსა და ტაბლეტებზე. სწრაფი ჩატვირთვის სიჩქარე ნიშნავს, რომ თქვენი მომხმარებლები არ დაელოდებიან — და არც საძიებო სისტემები.',

    // How It Works
    'howItWorks.title': 'როგორ',
    'howItWorks.titleHighlight': 'მუშაობს',
    'howItWorks.subtitle': 'ვებსაიტის შექმნა მარტივი და უსტრესოა. აი, როგორ ვმუშაობთ ერთად:',
    'howItWorks.step1.title': 'გამოგვიგზავნეთ ინფორმაცია',
    'howItWorks.step1.desc': 'მოგვიყევით თქვენი ბიზნესის, სერვისებისა და მიზნების შესახებ.',
    'howItWorks.step2.title': 'ვქმნით დიზაინს',
    'howItWorks.step2.desc': 'ვქმნით ლამაზ ვებსაიტს თქვენს ბიზნესსა და ბრენდზე მორგებულს.',
    'howItWorks.step3.title': 'თქვენ ამოწმებთ',
    'howItWorks.step3.desc': 'იხილეთ თქვენი ვებსაიტი, გვითხარით ცვლილებები და დაადასტურეთ, როცა კმაყოფილი დარჩებით.',
    'howItWorks.step4.title': 'გავუშვებთ!',
    'howItWorks.step4.desc': 'თქვენი ვებსაიტი იწყებს მუშაობას და ახალი კლიენტების მოზიდვას.',

    // Why Website
    'whyWebsite.title': 'რატომ სჭირდება თქვენს ბიზნესს',
    'whyWebsite.titleHighlight': 'ვებსაიტი',
    'whyWebsite.desc1': 'დღევანდელ ციფრულ სამყაროში ვებსაიტის არქონა იგივეა, რაც ტელეფონის ნომრის არქონა. კლიენტები ელიან, რომ თქვენ ონლაინ გიპოვონ.',
    'whyWebsite.desc2': 'კარგად დადიზაინებული ვებსაიტი მხოლოდ ციფრული სავიზიტო ბარათი არ არის. ეს თქვენი ყველაზე ძლიერი მარკეტინგული ინსტრუმენტია.',
    'whyWebsite.found.title': 'გიპოვონ Google-ში',
    'whyWebsite.found.desc': 'როდესაც კლიენტები თქვენს სერვისებს ეძებენ, გიპოვონ თქვენ და არა კონკურენტები.',
    'whyWebsite.trust.title': 'ააშენეთ ნდობა',
    'whyWebsite.trust.desc': 'პროფესიონალური ვებსაიტი აჩვენებს, რომ სერიოზულად ეკიდებით თქვენს საქმეს.',
    'whyWebsite.calls.title': 'მიიღეთ მეტი ზარი',
    'whyWebsite.calls.desc': 'თქვენი ვებსაიტი მუშაობს 24/7, იზიდავს პოტენციურ მომხმარებლებს მაშინაც კი, როცა თქვენ გძინავთ.',
    'whyWebsite.services.title': 'აჩვენეთ სერვისები',
    'whyWebsite.services.desc': 'მიეცით კლიენტებს ნათელი წარმოდგენა, თუ რას სთავაზობთ.',

    // Portfolio
    'portfolio.title': 'ჩვენი',
    'portfolio.titleHighlight': 'პორტფოლიო',
    'portfolio.subtitle': 'რეალური ვებსაიტები, რომლებიც რეალური ბიზნესებისთვის შევქმენით.',
    'portfolio.goal': 'მიზანი',
    'portfolio.result': 'შედეგი',
    'portfolio.viewProject': 'ნახე პროექტი',
    'portfolio.cta': 'გინდათ თქვენი ბიზნესის ვებსაიტი აქ ნახოთ?',
    'portfolio.ctaButton': 'დაიწყე პროექტი',

    // Testimonials
    'testimonials.title': 'რას ამბობენ',
    'testimonials.titleHighlight': 'კლიენტები',
    'testimonials.subtitle': 'მხოლოდ ჩვენს სიტყვებს ნუ დაიჯერებთ — მოისმინეთ ბიზნესებისგან, რომლებსაც ონლაინ ზრდაში დავეხმარეთ.',

    // Pricing
    'pricing.title': 'მარტივი, გამჭვირვალე',
    'pricing.titleHighlight': 'ფასები',
    'pricing.subtitle': 'ფარული საფასურები არ არის. აირჩიეთ პაკეტი, რომელიც თქვენს ბიზნესს შეესაბამება.',
    'pricing.starter.name': 'საწყისი ვებსაიტი',
    'pricing.starter.desc': 'იდეალურია მცირე ბიზნესებისთვის, რომლებიც ახლა იწყებენ.',
    'pricing.starter.feature1': 'ერთგვერდიანი პროფ. ვებსაიტი',
    'pricing.starter.feature2': 'მობილურზე მორგებული დიზაინი',
    'pricing.starter.feature3': 'საკონტაქტო ფორმა',
    'pricing.starter.feature4': 'ბაზისური SEO',
    'pricing.starter.feature5': 'მზადაა 5 დღეში',
    'pricing.business.name': 'ბიზნეს ვებსაიტი',
    'pricing.business.desc': 'სრული გადაწყვეტა ბიზნესებისთვის, რომლებიც ზრდას ეძებენ.',
    'pricing.business.feature1': 'მრავალგვერდიანი ვებსაიტი (5 გვერდამდე)',
    'pricing.business.feature2': 'პრემიუმ რესპონსიული დიზაინი',
    'pricing.business.feature3': 'გაფართოებული საკონტაქტო ფორმები',
    'pricing.business.feature4': 'სრული SEO ოპტიმიზაცია',
    'pricing.business.feature5': 'Google Maps ინტეგრაცია',
    'pricing.business.feature6': 'ფოტო გალერეა',
    'pricing.business.feature7': '30 დღიანი მხარდაჭერა',
    'pricing.popular': 'პოპულარული',
    'pricing.oneTime': 'ერთჯერადი',
    'pricing.getStarted': 'დაწყება',
    'pricing.custom': 'რაღაც განსაკუთრებული გჭირდებათ?',
    'pricing.customCta': 'დაგვიკავშირდით',
    'pricing.customText': ' პერსონალიზებული შემოთავაზებისთვის.',

    // About
    'about.title': ' ',
    'about.titleHighlight': 'GeorgiaWeb-ის შესახებ',
    'about.intro': 'გამარჯობა, მე ვარ გიო — ახალგაზრდა ვებ-დეველოპერი საქართველოდან, რომელსაც უყვარს მცირე ბიზნესების წარმატებაში დახმარება.',
    'about.desc1': 'მჯერა, რომ ყველა ადგილობრივ ბიზნესს ეკუთვნის პროფესიონალური ონლაინ პრეზენცია, ბიუჯეტის მიუხედავად. ამიტომ ვიყენებ თანამედროვე ინსტრუმენტებსა და AI ტექნოლოგიას.',
    'about.desc2': 'ჩემი მიდგომა მარტივია: გავიგო თქვენი ბიზნესი, შევქმნა ვებსაიტი რომელიც მას ნამდვილად წარმოადგენს და სწრაფად მოგაწოდოთ.',
    'about.role': 'ვებ-დეველოპერი და დიზაინერი',
    'about.experience': 'წლის გამოცდ.',
    'about.projects': 'პროექტი',
    'about.results': 'შედეგზე ორიენტ.',
    'about.fast': 'სწრაფი მიწოდება',
    'about.personal': 'პერსონალური მიდგომა',

    // Contact
    'contact.title': 'შევქმნათ თქვენი',
    'contact.titleHighlight': 'ვებსაიტი',
    'contact.subtitle': 'მზად ხართ თქვენი ბიზნესი ონლაინ გახადოთ? დაგვიკავშირდით და უფასოდ შევქმნით თქვენი მომავალი ვებსაიტის დემოს.',
    'contact.formTitle': 'გამოგვიგზავნეთ შეტყობინება',
    'contact.name': 'თქვენი სახელი',
    'contact.namePlaceholder': 'გიორგი გიორგაძე',
    'contact.businessName': 'ბიზნესის სახელი',
    'contact.businessPlaceholder': 'თქვენი ბიზნესი',
    'contact.contactField': 'ტელეფონი ან ელფოსტა',
    'contact.contactPlaceholder': '+995 555 123 456 ან email@example.com',
    'contact.message': 'მოგვიყევით თქვენი პროექტის შესახებ',
    'contact.messagePlaceholder': 'რა ტიპის ვებსაიტი გჭირდებათ? რა სერვისებს სთავაზობთ?',
    'contact.send': 'გაგზავნა',
    'contact.sending': 'იგზავნება...',
    'contact.sent': 'გაგზავნილია!',
    'contact.whatsappTitle': 'გირჩევნიათ WhatsApp?',
    'contact.whatsappDesc': 'პირდაპირ მოგვწერეთ WhatsApp-ზე სწრაფი პასუხისთვის. ჩვეულებრივ რამდენიმე საათში ვპასუხობთ.',
    'contact.whatsappButton': 'მოგვწერეთ WhatsApp-ზე',
    'contact.freeDemo': 'უფასო დემო',
    'contact.freeDemoDesc': 'ნახეთ თქვენი ვებსაიტის პრევიუ გადაწყვეტილების მიღებამდე.',
    'contact.fastResponse': 'სწრაფი პასუხი',
    'contact.fastResponseDesc': 'ყველა მოთხოვნას 24 საათში ვპასუხობთ.',
    'contact.notSure': 'არ იცით რა ტიპის ვებსაიტი გჭირდებათ? მომწერეთ და უფასოდ შემოგთავაზებთ საუკეთესო ვარიანტს თქვენი ბიზნესისთვის.',
    'contact.successTitle': 'შეტყობინება გაგზავნილია!',
    'contact.successDesc': '24 საათში დაგიკავშირდებით.',

    // Footer
    'footer.tagline': 'თანამედროვე ვებსაიტები მცირე ბიზნესისთვის საქართველოში',
    'footer.basedIn': 'საქართველოში 🇬🇪',
    'footer.rights': 'ყველა უფლება დაცულია.',
    'footer.madeWith': 'შექმნილია',
    'footer.inTbilisi': 'თბილისში',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === 'en' ? 'ka' : 'en'));
  }, []);

  const t = useCallback((key: string): string => {
    const translation = translations[language][key as keyof typeof translations['en']];
    return translation || key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
