import Image from "next/image";
import Container from "@/components/ui/Container";

export default function OurFamily() {
  return (
    <section
      id="family"
      aria-labelledby="family-heading"
      className="py-12 lg:py-16"
    >
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/images/our-family.jpg"
              alt="The four members of Sunny Family Band laughing together, with three holding the fourth"
              width={1448}
              height={1086}
              sizes="(min-width: 1152px) 520px, (min-width: 1024px) 46vw, 100vw"
              className="h-auto w-full"
            />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em]">
              Our family
            </p>

            <h2
              id="family-heading"
              className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Four musicians. One family.
            </h2>

            <div className="mt-6 space-y-5 leading-relaxed">
              <p>
                We started as a duo—Natalia and Oleg. In late 2022, our daughters joined us: Daria was eleven, and Maria just nine. We wanted a richer sound and to move beyond backing tracks—to make the music ourselves, together.
              </p>

              <p>
                Over time, we found our sound as a family. With Natalia on vocals and keys, Oleg on guitar, Daria on saxophone and Maria on trumpet, we each bring something of our own. Our keyboard parts combine bass lines in the left hand with accompaniment in the right, while the saxophone and trumpet take centre stage.
              </p>

              <p>
                Playing together gives us more than music. On stage, we listen to one another, find the same rhythm and share the moment. That connection follows us home—and it’s what we love sharing with our audience.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}