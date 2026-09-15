import Container from "@/components/ui/Container";
import { programs } from "@/data/programs";

export default function Programs() {
  return (
    <section
      id="programs"
      aria-labelledby="programs-heading"
      className="py-12 lg:py-16"
    >
      <Container>
        <p className="text-xs uppercase tracking-[0.2em]">
          Music for your occasion
        </p>

        <h2
          id="programs-heading"
          className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Find your kind of live music
        </h2>

        <p className="mt-4 max-w-xl text-lg leading-relaxed">
          From a relaxed lounge atmosphere to a lively celebration,
          choose the sound that suits your event.
        </p>

        <ul className="mt-8 grid gap-6 lg:grid-cols-3">
          {programs.map((program) => (
            <li
              key={program.id}
              className={`flex flex-col rounded-2xl border p-6 lg:p-8 ${
                program.featured
                  ? "border-sunshine bg-sunshine/20"
                  : "border-border bg-background"
              }`}
            >
              <h3 className="text-2xl font-bold">
                {program.title}
              </h3>

              <p className="mt-4 leading-relaxed">
                {program.description}
              </p>

              <p className="mt-6 text-sm leading-relaxed">
                {program.lineup}
              </p>

              <div className="mt-auto pt-8">
                <a
                  href="#booking"
                  aria-label={`Enquire about ${program.title}`}
                  className={`inline-flex w-full items-center justify-center rounded-lg border px-4 py-3 text-center text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${
                    program.featured
                      ? "border-primary bg-primary text-white hover:border-primary-hover hover:bg-primary-hover"
                      : "border-primary text-primary hover:bg-primary hover:text-white"
                  }`}
                >
                  Enquire about this format
                </a>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}