"use client";

import { useState } from "react";
import Image from "next/image";

type VideoPlayerProps = {
  youtubeId: string;
  title: string;
  poster: string;
  onActivate?: () => void;
};

export default function VideoPlayer({
  youtubeId,
  title,
  poster,
  onActivate,
}: VideoPlayerProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative aspect-video min-h-[200px] overflow-hidden rounded-xl bg-foreground">
      {isLoaded ? (
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&playsinline=1`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={() => {
            onActivate?.();
            setIsLoaded(true);
            }}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 h-full w-full cursor-pointer focus-visible:outline-4 focus-visible:-outline-offset-4 focus-visible:outline-sunshine"
        >
          <Image
            src={poster}
            alt=""
            fill
            sizes="(min-width: 1152px) 524px, (min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />

          <span className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/30" />

          <span
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white bg-black/30 text-2xl text-white">
              ▶
            </span>
          </span>

          <span className="absolute bottom-4 left-4 font-semibold text-white">
            Watch us live
          </span>
        </button>
      )}
    </div>
  );
}