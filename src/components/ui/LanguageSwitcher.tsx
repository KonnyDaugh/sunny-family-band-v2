"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { languages, type Locale } from "@/i18n/locales";

export default function LanguageSwitcher() {
  const pathname = usePathname();

  const currentLocale: Locale =
    pathname === "/hr" || pathname.startsWith("/hr/")
      ? "hr"
      : "en";

  return (
    <nav
      aria-label={
        currentLocale === "hr" ? "Odabir jezika" : "Language selection"
      }
      className="flex shrink-0 items-center gap-1 rounded-lg border border-border p-1"
    >
      {(["en", "hr"] as const).map((locale) => {
        const isActive = locale === currentLocale;

        return (
          <Link
            key={locale}
            href={languages[locale].href}
            lang={locale}
            hrefLang={locale}
            title={languages[locale].label}
            aria-label={languages[locale].label}
            aria-current={isActive ? "page" : undefined}
            className={`rounded-md px-3 py-2 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
              isActive
                ? "bg-sunshine text-foreground"
                : "hover:bg-sunshine/30"
            }`}
          >
            {locale.toUpperCase()}
          </Link>
        );
      })}
    </nav>
  );
}