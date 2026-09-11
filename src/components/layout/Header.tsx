import Container from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export default function Header() {
  return (
    <header className="border-b border-border bg-background">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-6 py-5">
          <link href="/" className="shrink-0">
            <span className="block text-xl font-bold">
              {siteConfig.name}
            </span>

            <span className="block text-xs uppercase tracking-widest">
              {siteConfig.location}
            </span>
          </link>

          <nav aria-label="Main navigation">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {siteConfig.navigation.map((item) => (
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
        </div>
      </Container>
    </header>
  );
}