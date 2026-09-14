import Container from "@/components/ui/Container";
import SunIcon from "@/components/ui/SunIcon";
import type { BandEvent } from "@/data/events";

type NextPerformanceProps = {
  event: BandEvent;
};

export default function NextPerformance({
  event,
}: NextPerformanceProps) {
  const date = new Date(event.startsAt);

  const day = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    timeZone: "Europe/Zagreb",
  }).format(date);

  const month = new Intl.DateTimeFormat("en-GB", {
    month: "short",
    timeZone: "Europe/Zagreb",
  }).format(date);

  const weekday = new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    timeZone: "Europe/Zagreb",
  }).format(date);

  const time = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Europe/Zagreb",
  }).format(date);

  return (
    <section id="live" className="py-12 lg:py-16">
      <Container>
        <div className="flex items-center gap-3">
          <SunIcon className="h-7 w-7 text-sunshine" />

          <p className="text-xs font-semibold uppercase tracking-[0.2em]">
            See you live
          </p>
        </div>

        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Our next performance
        </h2>

        <article className="mt-8 overflow-hidden rounded-xl border border-border md:flex">
          <time
            dateTime={event.startsAt}
            className="flex shrink-0 flex-col items-center justify-center bg-sunshine/30 px-8 py-6 md:w-40"
          >
            <span className="text-5xl font-bold">{day}</span>
            <span className="mt-1 text-xl font-semibold uppercase">
              {month}
            </span>
            <span className="mt-3 text-xs uppercase tracking-widest">
              {weekday}
            </span>
          </time>

          <div className="flex flex-1 flex-col gap-6 p-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="text-2xl font-bold">
                {event.title}
              </h3>

              <p className="mt-3 font-medium">
                {event.venue} · {time}
              </p>

              <p className="mt-1 text-sm">{event.address}</p>

              {event.timeNote && (
                <p className="mt-2 text-sm text-primary">
                  {event.timeNote}
                </p>
              )}

              {event.admission && (
                <p className="mt-4 inline-block rounded-lg bg-sunshine/30 px-3 py-2 text-sm">
                  {event.admission}
                </p>
              )}
            </div>

            <a
              href={event.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center self-start rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
            >
              Get directions
            </a>
          </div>
        </article>
      </Container>
    </section>
  );
}