import Container from "@/components/ui/Container";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-8 lg:py-6">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em]">
              Live music · Split, Croatia
            </p>

            <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Good music.
              <br />
              Great company.
            </h1>

            <p className="mt-6 max-w-md text-lg leading-relaxed">
              Jazz, swing &amp; feel-good favourites.
              Played by our family, for your people.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#music"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 font-semibold text-white transition-colors hover:bg-primary-hover"
              >
                Listen to our music
              </a>

              <a
                href="#booking"
                className="inline-flex items-center justify-center rounded-lg border border-primary px-5 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
              >
                Enquire about a date
              </a>
            </div>

            <p className="mt-8 text-xs uppercase tracking-[0.2em]">
              Jazz / Swing / Soul / Pop
            </p>
          </div>
          <div className="relative aspect-4/3 overflow-hidden rounded-xl lg:aspect-square">
            <Image
              src="/images/band-hero.webp"
              alt="Sunny Family Band performing with keyboard, saxophone, trumpet and guitar"
              fill
              sizes="(min-width: 1152px) 603px, (min-width: 1024px) calc((100vw - 104px) * 0.575), calc(100vw - 48px)"
              loading="eager"
              className="object-cover"
            />
          </div>
        </div>        
      </Container>
    </section>
  );
}