export type Locale = "en" | "hr";

type Language = {
  label: string;
  href: string;
};

export const languages: Record<Locale, Language> = {
  en: {
    label: "English",
    href: "/",
  },
  hr: {
    label: "Hrvatski",
    href: "/hr/",
  },
};