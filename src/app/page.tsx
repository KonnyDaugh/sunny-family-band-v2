import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import NextPerformance from "@/components/sections/NextPerformance";
import { events } from "@/data/events";
import Music from "@/components/sections/Music";
import Programs from "@/components/sections/Programs";
import OurFamily from "@/components/sections/OurFamily";

export default function Home() {
  const nextEvent = events[0];

  return (
    <>
      <Header />

      <main className="flex-1">
        <Hero />
        {nextEvent && (
          <NextPerformance event={nextEvent} />
        )}
        <Music />
        <Programs />
        <OurFamily />
      </main>
    </>
  );
}