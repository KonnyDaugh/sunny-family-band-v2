import Container from "@/components/ui/Container";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/sunnyfamilyband",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@SunnyFamilyband",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/natalydiach",
  },
];

export default function Contacts() {
  return (
    <section
      id="contacts"
      aria-labelledby="contacts-heading"
      className="pt-8 pb-12 lg:pt-10 lg:pb-16"
    >
      <Container>
        <div className="grid gap-8 border-t border-border pt-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12 lg:pt-16">
          <div>
            <p className="text-xs uppercase tracking-[0.2em]">
              Get in touch
            </p>

            <h2
              id="contacts-heading"
              className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Let’s stay connected.
            </h2>

            <p className="mt-6 max-w-md text-lg leading-relaxed">
              For collaborations, questions or just to say hello,
                feel free to contact us directly.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em]">
                Email
              </p>

              <a
                href="mailto:natalydiach@gmail.com"
                className="mt-3 inline-block text-xl font-semibold transition-colors hover:text-primary"
              >
                natalydiach@gmail.com
              </a>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em]">
                Follow us
              </p>

              <div className="mt-3 flex flex-wrap gap-x-6 gap-y-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}