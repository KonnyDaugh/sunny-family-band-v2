import type { Locale } from "./locales";

type Dictionary = {
  header: {
    location: string;
    navigationLabel: string;
    navigation: {
      href: string;
      label: string;
    }[];
    contact: string;
  };
};

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    header: {
      location: "Split, Croatia",
      navigationLabel: "Main navigation",
      navigation: [
        { href: "#music", label: "Music" },
        { href: "#family", label: "Our family" },
        { href: "#live", label: "Live dates" },
        { href: "#booking", label: "Your event" },
      ],
      contact: "Get in touch",
    },
  },
  hr: {
    header: {
      location: "Split, Hrvatska",
      navigationLabel: "Glavna navigacija",
      navigation: [
        { href: "#music", label: "Glazba" },
        { href: "#family", label: "Naša obitelj" },
        { href: "#live", label: "Nastupi" },
        { href: "#booking", label: "Vaš događaj" },
      ],
      contact: "Javite nam se",
    },
  },
};