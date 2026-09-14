"use client";

import { useRef, useState } from "react";

import Container from "@/components/ui/Container";
import { tracks, type MusicMood } from "@/data/tracks";
import VideoPlayer from "@/components/ui/VideoPlayer";
import { featuredVideo } from "@/data/video";

type MoodFilter = MusicMood | "all";

const moodFilters: { value: MoodFilter; label: string }[] = [
  { value: "all", label: "All music" },
  { value: "relax", label: "Relax & unwind" },
  { value: "swing", label: "A little swing" },
  { value: "dance", label: "Time to dance" },
];

export default function Music() {
  const activeAudioRef = useRef<HTMLAudioElement | null>(null);

  function handlePlay(audio: HTMLAudioElement) {
    const previousAudio = activeAudioRef.current;

    if (previousAudio && previousAudio !== audio) {
        previousAudio.pause();
    }

    activeAudioRef.current = audio;
    }

    const [selectedMood, setSelectedMood] = useState<MoodFilter>("all");

const visibleTracks =
  selectedMood === "all"
    ? tracks
    : tracks.filter((track) => track.mood === selectedMood);

    function handleMoodChange(mood: MoodFilter) {
        activeAudioRef.current?.pause();
        activeAudioRef.current = null;
        setSelectedMood(mood);
    }
  return (
    <section id="music" className="py-12 lg:py-16">
      <Container>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          How does your evening sound?
        </h2>

        <p className="mt-4 text-lg">
          Explore a little of our sound.
        </p>

        <div
            role="group"
            aria-label="Filter music by mood"
            className="mt-6 flex flex-wrap gap-3"
            >
            {moodFilters.map((filter) => (
                <button
                key={filter.value}
                type="button"
                aria-pressed={selectedMood === filter.value}
                onClick={() => handleMoodChange(filter.value)}
                className={`rounded-full border px-5 py-2 text-sm font-medium transition-colors ${
                    selectedMood === filter.value
                    ? "border-primary bg-primary text-white"
                    : "border-border text-foreground hover:border-primary hover:text-primary"
                }`}
                >
                {filter.label}
                </button>
            ))}
        </div>

        <div className="mt-8 grid items-start gap-10 lg:grid-cols-2">
            <VideoPlayer
                youtubeId={featuredVideo.youtubeId}
                title={featuredVideo.title}
                poster={featuredVideo.poster}
                onActivate={() => {
                activeAudioRef.current?.pause();
                activeAudioRef.current = null;
                }}
            />

            <ul className="divide-y divide-border">
                {visibleTracks.map((track) => (
                    <li
                    key={track.id}
                    className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between"
                    >
                        <h3
                            id={`track-${track.id}`}
                            className="text-xl font-semibold"
                        >
                            {track.title}
                        </h3>

                        <audio
                            controls
                            preload="none"
                            aria-labelledby={`track-${track.id}`}
                            onPlay={(event) => handlePlay(event.currentTarget)}
                            className="w-full sm:w-80"
                        >
                            <source src={track.src} type="audio/mpeg" />
                            Your browser does not support audio playback.
                        </audio>
                    </li>
                ))}
            </ul>           
        </div>       
      </Container>
    </section>
  );
}