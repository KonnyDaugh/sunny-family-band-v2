"use client";

import { useState } from "react";
import Image from "next/image";

import Container from "@/components/ui/Container";
import VideoPlayer from "@/components/ui/VideoPlayer";
import { featuredVideo } from "@/data/video";
import { galleryPhotos } from "@/data/gallery";

type GalleryMode = "photos" | "videos";

export default function Gallery() {
  const [mode, setMode] = useState<GalleryMode>("photos");

  return (
    <section id="gallery" className="py-12 lg:py-16">
      <Container>
        <p className="text-xs uppercase tracking-[0.2em]">
          Moments with us
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          See Sunny Family Band in action.
        </h2>

        <p className="mt-4 max-w-2xl text-lg">
          A little glimpse of our performances, rehearsals and musical moments.
        </p>

        <div
          role="group"
          aria-label="Choose gallery type"
          className="mt-6 flex gap-3"
        >
          <button
            type="button"
            aria-pressed={mode === "photos"}
            onClick={() => setMode("photos")}
            className={`rounded-full border px-5 py-2 text-sm font-medium transition-colors ${
              mode === "photos"
                ? "border-primary bg-primary text-white"
                : "border-border hover:border-primary hover:text-primary"
            }`}
          >
            Photos
          </button>

          <button
            type="button"
            aria-pressed={mode === "videos"}
            onClick={() => setMode("videos")}
            className={`rounded-full border px-5 py-2 text-sm font-medium transition-colors ${
              mode === "videos"
                ? "border-primary bg-primary text-white"
                : "border-border hover:border-primary hover:text-primary"
            }`}
          >
            Videos
          </button>
        </div>

        <div className="mt-8">
          {mode === "photos" ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {galleryPhotos.map((photo) => (
                    <div
                    key={photo.id}
                    className="overflow-hidden rounded-2xl"
                    >
                    <Image
                        src={photo.src}
                        alt={photo.alt}
                        width={1200}
                        height={800}
                        className="aspect-4/3 w-full object-cover"
                    />
                    </div>
                ))}
            </div>
          ) : (
            <div className="max-w-3xl">
              <VideoPlayer
                youtubeId={featuredVideo.youtubeId}
                title={featuredVideo.title}
                poster={featuredVideo.poster}
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}