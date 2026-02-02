import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function DemoLanguageToggle() {
  const lang = useLanguage() as any;

  const language = lang.language;
  const setLanguage = lang.setLanguage;
  const toggleLanguage = lang.toggleLanguage;

  const setEn = () => {
    if (setLanguage) setLanguage("en");
    else if (toggleLanguage && language !== "en") toggleLanguage();
  };

  const setKa = () => {
    if (setLanguage) setLanguage("ka");
    else if (toggleLanguage && language !== "ka") toggleLanguage();
  };

  return (
    <div className="flex items-center gap-2 shrink-0 whitespace-nowrap">
      <Button
        variant={language === "en" ? "default" : "outline"}
        size="sm"
        onClick={setEn}
      >
        EN
      </Button>
      <Button
        variant={language === "ka" ? "default" : "outline"}
        size="sm"
        onClick={setKa}
      >
        KA
      </Button>
    </div>
  );
}
