import Container from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import SunIcon from "@/components/ui/SunIcon";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { languages, type Locale } from "@/i18n/locales";
import { dictionaries } from "@/i18n/dictionaries";

export default function Header({ locale }: { locale: Locale }) {
  const text = dictionaries[locale].header;

  return (
    <header className="border-b border-border bg-background">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-6 py-5">
            
          <Link href={languages[locale].href} className="flex shrink-0 items-center gap-3">
            <SunIcon className="h-11 w-11 shrink-0 text-sunshine" />

            <div>
              <span className="block text-xl font-bold">
                {siteConfig.name}
              </span>

              <span className="block text-xs uppercase tracking-widest">
                {text.location}
              </span>
            </div>
          </Link>

          <nav aria-label={text.navigationLabel}>
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {text.navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm transition-colors hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />

            <a
              href="#booking"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
            >
              {text.contact}
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}