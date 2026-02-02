import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import emailjs from "@emailjs/browser";
import { siteConfig } from "@/config/site";


const ContactSection = () => {
  const { toast } = useToast();
  const { t, language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    contact: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

    if (!serviceId || !templateId || !publicKey) {
      throw new Error("Missing EmailJS env variables");
    }

    await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: formData.name,
        business_name: formData.businessName,
        reply_to: formData.contact,
        message: formData.message,
      },
      { publicKey }
    );

    setIsSubmitted(true);

    toast({
      title: t("contact.successTitle"),
      description: t("contact.successDesc"),
    });

    setFormData({
      name: "",
      businessName: "",
      contact: "",
      message: "",
    });

    setTimeout(() => setIsSubmitted(false), 3000);
  } catch (err) {
    console.error(err);
    toast({
      title: language === "en" ? "Failed to send" : "გაგზავნა ვერ მოხერხდა",
      description:
        language === "en"
          ? "Please try again or contact us on WhatsApp."
          : "სცადე თავიდან ან მოგვწერე WhatsApp-ზე.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      language === "en"
        ? "Hi! I'm interested in a website for my business. Can we discuss?"
        : "გამარჯობა! მაინტერესებს ჩემი ბიზნესისთვის ვებსაიტის შექმნა. შეგვიძლია განვიხილოთ?"
    );

    window.open(`https://wa.me/${siteConfig.phoneE164}?text=${msg}`, "_blank");
  };


  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t('contact.title')}{" "}
            <span className="gradient-text">{t('contact.titleHighlight')}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 card-shadow">
            <h3 className="text-xl font-semibold mb-6">{t('contact.formTitle')}</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {t('contact.name')}
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder={t('contact.namePlaceholder')}
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-12"
                />
              </div>

              <div>
                <label htmlFor="businessName" className="block text-sm font-medium mb-2">
                  {t('contact.businessName')}
                </label>
                <Input
                  id="businessName"
                  name="businessName"
                  placeholder={t('contact.businessPlaceholder')}
                  value={formData.businessName}
                  onChange={handleChange}
                  required
                  className="h-12"
                />
              </div>

              <div>
                <label htmlFor="contact" className="block text-sm font-medium mb-2">
                  {t('contact.contactField')}
                </label>
                <Input
                  id="contact"
                  name="contact"
                  placeholder={t('contact.contactPlaceholder')}
                  value={formData.contact}
                  onChange={handleChange}
                  required
                  className="h-12"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  {t('contact.message')}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder={t('contact.messagePlaceholder')}
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12"
                disabled={isSubmitting || isSubmitted}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle size={18} />
                    {t('contact.sent')}
                  </>
                ) : isSubmitting ? (
                  t('contact.sending')
                ) : (
                  <>
                    <Send size={18} />
                    {t('contact.send')}
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* WhatsApp & Info */}
          <div className="flex flex-col justify-center">
            {/* Not sure message */}
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-6">
              <p className="text-foreground leading-relaxed">
                💡 {t('contact.notSure')}
              </p>
            </div>

            <div className="bg-secondary/50 rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-semibold mb-4">{t('contact.whatsappTitle')}</h3>
              <p className="text-muted-foreground mb-6">
                {t('contact.whatsappDesc')}
              </p>
              <Button
                variant="whatsapp"
                className="w-full h-12"
                onClick={handleWhatsApp}
              >
                <MessageCircle size={20} />
                {t('contact.whatsappButton')}
              </Button>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-card card-shadow">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-lg">🎁</span>
                </div>
                <div>
                  <h4 className="font-medium mb-1">{t('contact.freeDemo')}</h4>
                  <p className="text-sm text-muted-foreground">
                    {t('contact.freeDemoDesc')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-card card-shadow">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-lg">⚡</span>
                </div>
                <div>
                  <h4 className="font-medium mb-1">{t('contact.fastResponse')}</h4>
                  <p className="text-sm text-muted-foreground">
                    {t('contact.fastResponseDesc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
