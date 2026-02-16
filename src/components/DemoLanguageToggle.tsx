import { cn } from "@/lib/utils";
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
    <div
      className="
        inline-flex items-center gap-1
        rounded-xl p-1
        bg-slate-900/5 border border-slate-200
        dark:bg-white/10 dark:border-white/10
        backdrop-blur
      "
      role="tablist"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={setEn}
        className={cn(
          "px-3 py-1.5 text-xs font-semibold rounded-lg transition",
          "focus:outline-none focus:ring-2 focus:ring-blue-500/40",
          language === "en"
            ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-sm"
            : "text-slate-700 hover:bg-white/70 dark:text-slate-200 dark:hover:bg-white/10"
        )}
        aria-pressed={language === "en"}
      >
        EN
      </button>

      <button
        type="button"
        onClick={setKa}
        className={cn(
          "px-3 py-1.5 text-xs font-semibold rounded-lg transition",
          "focus:outline-none focus:ring-2 focus:ring-blue-500/40",
          language === "ka"
            ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-sm"
            : "text-slate-700 hover:bg-white/70 dark:text-slate-200 dark:hover:bg-white/10"
        )}
        aria-pressed={language === "ka"}
      >
        KA
      </button>
    </div>
  );
}
